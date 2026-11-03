import test from 'node:test';
import assert from 'node:assert/strict';
import { ALL_QUESTIONS } from '../data/questionsData';
import {
  calculateQuestionScore,
  normalizeScore,
  MAX_RAW_SCORE,
  generateEvaluationSummary,
} from './scoring';
import { sanitizeChemicalTextForTTS } from './tts';

test('dataset has exactly 30 questions with 10 PG, 10 PGK, and 10 BS', () => {
  assert.equal(ALL_QUESTIONS.length, 30, 'Total questions must be exactly 30');

  const pgCount = ALL_QUESTIONS.filter((q) => q.type === 'PG').length;
  const pgkCount = ALL_QUESTIONS.filter((q) => q.type === 'PGK').length;
  const bsCount = ALL_QUESTIONS.filter((q) => q.type === 'BS').length;

  assert.equal(pgCount, 10, 'Must have exactly 10 PG questions');
  assert.equal(pgkCount, 10, 'Must have exactly 10 PGK questions');
  assert.equal(bsCount, 10, 'Must have exactly 10 BS questions');
});

test('each BS question has exactly 3 statements with boolean isCorrect and explanation', () => {
  const bsQuestions = ALL_QUESTIONS.filter((q) => q.type === 'BS');
  bsQuestions.forEach((q) => {
    assert.ok(q.statements, `BS Question ${q.number} must have statements`);
    assert.equal(q.statements!.length, 3, `BS Question ${q.number} must have exactly 3 statements`);
    q.statements!.forEach((s) => {
      assert.equal(typeof s.isCorrect, 'boolean', `Statement ${s.id} in Q${q.number} must have boolean isCorrect`);
      assert.ok(s.explanation && s.explanation.length > 5, `Statement ${s.id} in Q${q.number} must have detailed explanation`);
    });
  });
});

test('each question has complete narration and discussion objects', () => {
  ALL_QUESTIONS.forEach((q) => {
    assert.ok(q.narration.intro, `Q${q.number} narration intro missing`);
    assert.ok(q.narration.stimulus, `Q${q.number} narration stimulus missing`);
    assert.ok(q.narration.clue, `Q${q.number} narration clue missing`);
    assert.ok(q.narration.discussion, `Q${q.number} narration discussion missing`);
    assert.ok(q.narration.quickTrick, `Q${q.number} narration quickTrick missing`);

    assert.ok(q.discussion.concept, `Q${q.number} concept missing`);
    assert.ok(q.discussion.keyFormula, `Q${q.number} keyFormula missing`);
    assert.ok(q.discussion.steps.length > 0, `Q${q.number} steps missing`);
    assert.ok(q.discussion.misterJoQuickTrick, `Q${q.number} misterJoQuickTrick missing`);
  });
});

test('scoring rules: PG gives 1 pt on match, 0 otherwise', () => {
  const q1 = ALL_QUESTIONS.find((q) => q.type === 'PG')!;
  const correct = calculateQuestionScore(q1, { pgAnswer: q1.correctAnswer as string });
  assert.equal(correct.scoreAwarded, 1);
  assert.equal(correct.isFullyCorrect, true);

  const wrong = calculateQuestionScore(q1, { pgAnswer: 'Z' });
  assert.equal(wrong.scoreAwarded, 0);
  assert.equal(wrong.isFullyCorrect, false);
});

test('scoring rules: PGK gives 2 pts only on complete set match', () => {
  const qPgk = ALL_QUESTIONS.find((q) => q.type === 'PGK')!;
  const correctArray = qPgk.correctAnswer as string[];

  // Perfect match
  const fullScore = calculateQuestionScore(qPgk, { pgkAnswer: [...correctArray] });
  assert.equal(fullScore.scoreAwarded, 2);
  assert.equal(fullScore.isFullyCorrect, true);

  // Missing one correct option
  const partial = calculateQuestionScore(qPgk, { pgkAnswer: correctArray.slice(0, -1) });
  assert.equal(partial.scoreAwarded, 0);
  assert.equal(partial.isFullyCorrect, false);

  // Extra incorrect option
  const extra = calculateQuestionScore(qPgk, { pgkAnswer: [...correctArray, 'Z'] });
  assert.equal(extra.scoreAwarded, 0);
  assert.equal(extra.isFullyCorrect, false);
});

test('scoring rules: BS gives 1 pt per correct statement decision', () => {
  const qBs = ALL_QUESTIONS.find((q) => q.type === 'BS')!;
  const stmts = qBs.statements!;

  // All 3 correct
  const allCorrectBs: Record<number, boolean> = {
    [stmts[0].id]: stmts[0].isCorrect,
    [stmts[1].id]: stmts[1].isCorrect,
    [stmts[2].id]: stmts[2].isCorrect,
  };
  const res3 = calculateQuestionScore(qBs, { bsAnswer: allCorrectBs });
  assert.equal(res3.scoreAwarded, 3);
  assert.equal(res3.isFullyCorrect, true);

  // 2 out of 3 correct
  const twoCorrectBs: Record<number, boolean> = {
    [stmts[0].id]: stmts[0].isCorrect,
    [stmts[1].id]: stmts[1].isCorrect,
    [stmts[2].id]: !stmts[2].isCorrect,
  };
  const res2 = calculateQuestionScore(qBs, { bsAnswer: twoCorrectBs });
  assert.equal(res2.scoreAwarded, 2);
  assert.equal(res2.isFullyCorrect, false);
});

test('normalization scales raw score 0 to 60 into 0 to 100', () => {
  assert.equal(normalizeScore(0, MAX_RAW_SCORE), 0);
  assert.equal(normalizeScore(60, MAX_RAW_SCORE), 100);
  assert.equal(normalizeScore(30, MAX_RAW_SCORE), 50);
});

test('TTS chemical text sanitizer cleans formulas for Indonesian speech', () => {
  const raw = 'Reaksi HCl(aq) + NaOH(aq) menghasilkan NaCl dan H2O dengan ΔH = -54,6 kJ/mol pada pH = 7.';
  const cleaned = sanitizeChemicalTextForTTS(raw);

  assert.ok(!cleaned.includes('(aq)'), 'Should replace (aq)');
  assert.ok(cleaned.includes('delta H'), 'Should pronounce delta H');
  assert.ok(cleaned.includes('kilojoule per mol'), 'Should pronounce kJ/mol in indonesian');
  assert.ok(cleaned.includes('pe-ha'), 'Should pronounce pH as pe-ha');
});

import katex from 'katex';

test('KaTeX renders all questions reaction equations, formulas, and calculations without throwing', () => {
  ALL_QUESTIONS.forEach((q) => {
    const eq = q.stimulus.reactionEquation;
    if (eq) {
      assert.doesNotThrow(() => {
        katex.renderToString(eq, { throwOnError: true });
      }, `Reaction equation in Q${q.number} failed KaTeX: ${eq}`);
    }

    if (q.discussion.keyFormula) {
      assert.doesNotThrow(() => {
        katex.renderToString(q.discussion.keyFormula, { throwOnError: true });
      }, `Key formula in Q${q.number} failed KaTeX: ${q.discussion.keyFormula}`);
    }

    if (q.discussion.calculation) {
      assert.doesNotThrow(() => {
        katex.renderToString(q.discussion.calculation, { throwOnError: true });
      }, `Calculation in Q${q.number} failed KaTeX: ${q.discussion.calculation}`);
    }
  });
});

import { FORMULA_BANK } from '../data/formulaBank';

test('KaTeX renders all FORMULA_BANK formulas without throwing', () => {
  FORMULA_BANK.forEach((f) => {
    assert.doesNotThrow(() => {
      katex.renderToString(f.formula, { throwOnError: true });
    }, `Formula ${f.id} (${f.name}) failed KaTeX: ${f.formula}`);
  });
});
