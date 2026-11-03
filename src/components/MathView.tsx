import React, { useMemo } from 'react';
import katex from 'katex';

interface MathViewProps {
  math: string;
  displayMode?: boolean;
  className?: string;
}

/**
 * Fallback formatter for chemical equations and formulas if KaTeX encounters any strict syntax error.
 * Converts common LaTeX constructs to clean HTML with sub/sup.
 */
function fallbackChemicalHtml(input: string): string {
  if (!input) return '';

  let html = input;

  // Replace arrows
  html = html
    .replace(/\\rightarrow/g, ' → ')
    .replace(/\\xrightleftharpoons\{[^}]*\}/g, ' ⇌ ')
    .replace(/\\rightleftharpoons/g, ' ⇌ ')
    .replace(/\\xrightarrow\{([^}]*)\}/g, ' ──[$1]──> ')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\times/g, ' × ')
    .replace(/\\cdot/g, ' · ')
    .replace(/\\approx/g, ' ≈ ')
    .replace(/\\neq/g, ' ≠ ')
    .replace(/\\leq/g, ' ≤ ')
    .replace(/\\geq/g, ' ≥ ')
    .replace(/\\quad/g, ' &nbsp; ')
    .replace(/\\\\/g, '<br/>');

  // Replace \text{...}
  html = html.replace(/\\text\{([^}]+)\}/g, '$1');

  // Replace subscripts like _2 or _{24}
  html = html.replace(/_\{([^}]+)\}/g, '<sub>$1</sub>');
  html = html.replace(/_([0-9a-zA-Z+-]+)/g, '<sub>$1</sub>');

  // Replace superscripts like ^3+ or ^{3+}
  html = html.replace(/\^\{([^}]+)\}/g, '<sup>$1</sup>');
  html = html.replace(/\^([0-9a-zA-Z+-]+)/g, '<sup>$1</sup>');

  // Clean remaining backslashes
  html = html.replace(/\\([a-zA-Z]+)/g, '$1');

  return html;
}

export const MathView: React.FC<MathViewProps> = ({
  math,
  displayMode = true,
  className = '',
}) => {
  const renderedHtml = useMemo(() => {
    if (!math) return '';

    // Pre-sanitize double backslashes in multi-line
    const cleanMath = math.trim();

    try {
      return katex.renderToString(cleanMath, {
        displayMode,
        throwOnError: false,
        strict: false,
        trust: true,
        macros: {
          '\\ce': '#1', // Fallback macro if mhchem is referenced
        },
      });
    } catch (e) {
      console.warn('KaTeX render fallback for:', math, e);
      return `<span class="chemical-fallback font-sans">${fallbackChemicalHtml(cleanMath)}</span>`;
    }
  }, [math, displayMode]);

  return (
    <div
      className={`katex-math-wrapper overflow-x-auto py-1 ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

export const InlineMath: React.FC<{ math: string; className?: string }> = ({
  math,
  className = '',
}) => {
  return <MathView math={math} displayMode={false} className={`inline-block ${className}`} />;
};

export const BlockMath: React.FC<{ math: string; className?: string }> = ({
  math,
  className = '',
}) => {
  return (
    <div className="flex justify-center my-2.5">
      <MathView math={math} displayMode={true} className={`text-center ${className}`} />
    </div>
  );
};
