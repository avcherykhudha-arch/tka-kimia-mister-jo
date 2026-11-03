import { Question } from '../../types';

export const questions21to30: Question[] = [
  // Soal 21 - BS (Kimia Organik: Makromolekul & Polimer)
  {
    id: 21,
    number: 21,
    type: 'BS',
    category: 'Kimia Organik',
    subtopic: 'Makromolekul & Polimerisasi',
    competency: 'Reasoning',
    title: 'Karakteristik Pembentukan dan Klasifikasi Polimer Sintetis dan Alami',
    stimulus: {
      context: 'Polimer merupakan makromolekul rantai panjang yang tersusun atas pengulangan unit-unit monomer. Reaksi polimerisasi secara umum dibedakan menjadi polimerisasi adisi (tanpa pelepasan molekul kecil) dan polimerisasi kondensasi (disertai pelepasan molekul sederhana seperti H2O, HCl, atau CH3OH).',
      table: {
        title: 'Contoh Polimer dan Monomer Penyusunnya',
        headers: ['Nama Polimer', 'Monomer Penyusun', 'Jenis Polimerisasi'],
        rows: [
          ['Teflon (PTFE)', 'Tetrafluoroetena (CF2=CF2)', 'Adisi'],
          ['Nilon 6,6', 'Asam adipat + Heksametilendiamina', 'Kondensasi (melepas H2O)'],
          ['Protein', 'Asam-asam amino', 'Kondensasi (ikatan peptida)']
        ]
      },
      visualNote: 'Polimerisasi adisi mensyaratkan adanya ikatan rangkap pada monomer, sedangkan polimerisasi kondensasi mensyaratkan adanya minimal dua gugus fungsi pada masing-masing monomer.'
    },
    questionText: 'Berdasarkan struktur dan mekanisme polimerisasi makromolekul di atas, tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 1,
        text: 'Pembentukan plastik teflon (politetrafluoroetilena) tergolong reaksi polimerisasi adisi karena terjadi pemutusan ikatan rangkap dua C=C tanpa melepaskan molekul sampingan.',
        isCorrect: true,
        explanation: 'Monomer teflon adalah tetrafluoroetena (CF2=CF2) yang memiliki ikatan rangkap dua. Polimerisasi adisi memutus ikatan rangkap membentuk rantai [-CF2-CF2-]n tanpa molekul samping.'
      },
      {
        id: 2,
        text: 'Nilon 6,6 dan protein sama-sama digolongkan sebagai polimer poliester karena tautan rantai utamanya dibentuk oleh gugus fungsi ester (-COO-).',
        isCorrect: false,
        explanation: 'Nilon 6,6 dan protein tergolong POLIAMIDA, bukan poliester! Keduanya dihubungkan oleh tautan amida atau ikatan peptida (-CONH-), bukan ester.'
      },
      {
        id: 3,
        text: 'Polimer termoplastik seperti polietilena dapat dilunakkan kembali melalui pemanasan karena hanya diikat oleh gaya antarmolekul yang relatif lemah (tidak memiliki ikatan silang silang kuat seperti termoset).',
        isCorrect: true,
        explanation: 'Termoplastik memiliki rantai polimer linier atau bercabang yang dihubungkan oleh gaya van der Waals, sehingga dapat meleleh saat dipanaskan dan dicetak ulang.'
      }
    ],
    correctAnswer: 'BS-evaluated',
    pointWeight: 3,
    narration: {
      intro: 'Kita melangkah ke nomor 21 tentang makromolekul dan polimer.',
      stimulus: 'Tiga polimer dianalisis: teflon, nilon 6,6, dan protein. Perhatikan jenis ikatan tautan dan perilaku termalnya saat dipanaskan.',
      clue: 'Perhatikan gugus tautan pada nilon dan protein: apakah itu ester atau amida? Ingat asam amino membentuk ikatan peptida amida!',
      discussion: 'Pernyataan 1 Benar: teflon dibentuk dari adisi tetrafluoroetena dengan pemutusan ikatan rangkap. Pernyataan 2 Salah: nilon 6,6 dan protein adalah poliamida (ikatan -CONH-), bukan poliester. Pernyataan 3 Benar: termoplastik seperti polietilena mudah dilunakkan kembali saat dipanaskan karena tidak memiliki ikatan silang kovalen termoset.',
      quickTrick: 'Cara Cepat Mister Jo: Nilon dan protein itu SAUDARA AMIDA, bukan ester! Poliester itu contohnya dacron (PET). Jadi pernyataan 2 yang menyebut poliester jelas salah besar!'
    },
    discussion: {
      problemId: 'Q-21',
      concept: 'Polimerisasi Adisi vs Kondensasi, Poliamida, dan Sifat Termoplastik',
      keyFormula: 'n\\,\\text{CF}_2=\\text{CF}_2 \\xrightarrow{\\text{adisi}} [-\\text{CF}_2-\\text{CF}_2-]_n; \\quad R-\\text{COOH} + R\'-\\text{NH}_2 \\xrightarrow{\\text{kondensasi}} R-\\text{CO}-\\text{NH}-R\' + \\text{H}_2\\text{O}',
      steps: [
        'Analisis Teflon: Monomer CF2=CF2 memiliki ikatan rangkap pi yang mengalami pemutusan ikatan (adisi) menjadi rantai polimer tanpa kehilangan satu atom pun. Pernyataan 1 BENAR.',
        'Analisis tautan Nilon 6,6 dan Protein: Reaksi antara gugus karboksilat (-COOH) dan gugus amina (-NH2) melepaskan air dan membentuk tautan AMIDA / PEPTIDA (-CO-NH-). Keduanya adalah POLIAMIDA. Contoh poliester adalah dakron/PET (dari asam karboksilat + alkohol). Pernyataan 2 SALAH.',
        'Analisis sifat termal: Polimer linier seperti polietilena (PE) dan polivinil klorida (PVC) adalah termoplastik karena antar-rantai hanya terikat gaya London/dipol yang dapat terlepas saat dipanaskan, memungkinkan didaur ulang. Berbeda dengan termoset (bakelit) yang memiliki ikatan silang permanen. Pernyataan 3 BENAR.'
      ],
      calculation: '\\text{Teflon} = \\text{Polimerisasi Adisi}; \\quad \\text{Nilon dan Protein} = \\text{Poliamida (bukan poliester)}',
      finalAnswer: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR.',
      whyOthersWrong: 'Pernyataan 2 salah karena nilon dan protein mengandung ikatan amida (-CONH-), bukan ester (-COO-).',
      misterJoQuickTrick: 'Trik kilat polimer: "Asam amino -> Protein -> Ikatan Peptida/Amida". Nilon juga dibuat dari amina, jadi nilon = poliamida! Jika ada soal menyebut nilon atau protein itu poliester, langsung beri cap SALAH!'
    }
  },

  // Soal 22 - PG (Kimia Dasar: Stoikiometri Kemurnian Bijih Bauksit)
  {
    id: 22,
    number: 22,
    type: 'PG',
    category: 'Kimia Dasar',
    subtopic: 'Stoikiometri & Kadar Kemurnian Zat',
    competency: 'Applying',
    title: 'Analisis Kadar Kemurnian Alumina (Al2O3) dalam Sampel Bijih Bauksit',
    stimulus: {
      context: 'Di industri peleburan aluminium PT Inalum, logam aluminium diekstraksi dari bijih bauksit melalui proses Hall-Héroult setelah dimurnikan menjadi alumina (Al2O3, Mr = 102). Seorang ahli geokimia memanaskan 25,5 gram sampel bijih bauksit dengan karbon kokas berlebih sehingga seluruh alumina tereduksi sempurna menghasilkan logam aluminium (Ar Al = 27) dan gas CO2 menurut persamaan reaksi:',
      reactionEquation: '2\\text{Al}_2\\text{O}_3(s) + 3\\text{C}(s) \\rightarrow 4\\text{Al}(s) + 3\\text{CO}_2(g)',
      visualNote: 'Dari 25,5 gram sampel bauksit tersebut, berhasil diperoleh 10,8 gram logam aluminium murni.'
    },
    questionText: 'Berdasarkan data kuantitatif reaksi reduksi tersebut, persentase kadar kemurnian Al2O3 dalam sampel bijih bauksit tersebut adalah...',
    options: [
      { key: 'A', text: '60%' },
      { key: 'B', text: '70%' },
      { key: 'C', text: '80%' },
      { key: 'D', text: '85%' },
      { key: 'E', text: '90%' }
    ],
    correctAnswer: 'C',
    pointWeight: 1,
    narration: {
      intro: 'Nomor 22 menguji stoikiometri kadar kemurnian bijih logam bauksit di dunia nyata.',
      stimulus: 'Sebanyak 25,5 gram bijih bauksit menghasilkan 10,8 gram logam aluminium. Berapakah persentase Al2O3 murni dalam bijih tersebut?',
      clue: 'Hitung dulu mol aluminium yang dihasilkan: 10,8 gram dibagi Ar Al yaitu 27. Dari koefisien reaksi, cari mol Al2O3, ubah ke gram, lalu bagi dengan massa sampel 25,5 gram.',
      discussion: 'Mol Al = 10,8 g / 27 g/mol = 0,4 mol. Dari reaksi, 2 mol Al2O3 menghasilkan 4 mol Al (perbandingan 1:2). Maka mol Al2O3 murni = 1/2 x 0,4 mol = 0,2 mol. Massa Al2O3 murni = 0,2 mol x 102 g/mol = 20,4 gram. Kadar kemurnian = (20,4 gram / 25,5 gram) x 100% = 0,8 x 100% = 80%.',
      quickTrick: 'Cara Cepat Mister Jo: 10,8 / 27 = 0,4 mol Al. Al2O3 punya 2 atom Al, jadi mol Al2O3 = 0,4 / 2 = 0,2 mol. Massa = 0,2 x 102 = 20,4 gram. Rasio 20,4 / 25,5 = 4 / 5 = 80%! Cepat dan tanpa coretan rumit di opsi C!'
    },
    discussion: {
      problemId: 'Q-22',
      concept: 'Stoikiometri Reaksi, Konsep Mol, dan Perhitungan Persen Kemurnian Bijih',
      keyFormula: 'n_{\\text{Al}} = \\frac{m}{A_r}, \\quad n_{\\text{Al}_2\\text{O}_3} = \\frac{2}{4} \\times n_{\\text{Al}}, \\quad \\% \\text{Kadar} = \\frac{m_{\\text{murni}}}{m_{\\text{sampel}}} \\times 100\\%',
      steps: [
        'Hitung jumlah mol logam aluminium yang diperoleh: n(Al) = 10,8 gram / 27 g/mol = 0,40 mol.',
        'Tentukan mol Al2O3 murni yang bereaksi berdasarkan perbandingan koefisien: n(Al2O3) = (2 / 4) x n(Al) = 0,5 x 0,40 mol = 0,20 mol.',
        'Hitung massa Al2O3 murni dalam sampel: massa murni = 0,20 mol x 102 g/mol = 20,4 gram.',
        'Hitung kadar persentase kemurnian: % Kadar = (20,4 gram / 25,5 gram) x 100% = (4 / 5) x 100% = 80%.'
      ],
      calculation: 'n(\\text{Al}) = 0{,}40\\,\\text{mol} \\Rightarrow n(\\text{Al}_2\\text{O}_3) = 0{,}20\\,\\text{mol} \\Rightarrow m = 20{,}4\\,\\text{g} \\Rightarrow \\% = \\frac{20{,}4}{25{,}5} \\times 100\\% = 80\\%',
      finalAnswer: 'Opsi C benar: 80%.',
      whyOthersWrong: 'Opsi A (60%) atau B (70%) diakibatkan kesalahan membaca rasio koefisien 2 : 4 atau salah menghitung Mr Al2O3 (Mr = 2(27) + 3(16) = 54 + 48 = 102).',
      misterJoQuickTrick: 'Trik pecahan cepat ala Mister Jo: 20,4 dibagi 25,5. Keduanya bisa dibagi 5,1! 20,4 / 5,1 = 4. 25,5 / 5,1 = 5. Pecahan 4/5 sudah pasti 80%! Beres dalam 10 detik!'
    }
  },

  // Soal 23 - PGK (Kimia Fisik: Termokimia Diagram Tingkat Energi Siklus Hess)
  {
    id: 23,
    number: 23,
    type: 'PGK',
    category: 'Kimia Fisik',
    subtopic: 'Termokimia & Hukum Hess',
    competency: 'Reasoning',
    title: 'Analisis Siklus Termokimia Pembentukan Gas Belerang Trioksida (SO3)',
    stimulus: {
      context: 'Pada industri pembuatan asam sulfat proses kontak, gas SO3 diproduksi melalui oksidasi bertahap belerang padat dengan gas oksigen. Diagram tingkat energi entalpi (Hukum Hess) untuk tahapan pembentukan gas SO3 disajikan sebagai berikut:',
      chartType: 'energy-diagram',
      chartDetails: {
        title: 'Diagram Tingkat Energi Pembentukan SO3(g)',
        level1: 'S(s) + 3/2 O2(g) [0 kJ]',
        level2: 'SO2(g) + 1/2 O2(g) [-297 kJ]',
        level3: 'SO3(g) [-396 kJ]'
      },
      reactionEquation: '\\text{Tahap 1: } \\text{S}(s) + \\text{O}_2(g) \\rightarrow \\text{SO}_2(g) \\quad \\Delta H_1 = -297\\,\\text{kJ/mol} \\\\ \\text{Tahap 2: } \\text{SO}_2(g) + \\frac{1}{2}\\text{O}_2(g) \\rightarrow \\text{SO}_3(g) \\quad \\Delta H_2 = -99\\,\\text{kJ/mol}',
      visualNote: 'Tahap langsung: S(s) + 3/2 O2(g) -> SO3(g) dengan ΔH3 = ΔH1 + ΔH2 = -297 + (-99) = -396 kJ/mol.'
    },
    questionText: 'Berdasarkan hukum kekekalan energi Hess dan diagram di atas, manakah pernyataan berikut yang BENAR? (Pilih semua jawaban yang benar)',
    options: [
      { key: 'A', text: 'Entalpi pembentukan standar gas SO3 (ΔHf° SO3) adalah -396 kJ/mol.' },
      { key: 'B', text: 'Perubahan entalpi oksidasi gas SO2 menjadi SO3 (ΔH2) bernilai eksotermik sebesar -99 kJ/mol.' },
      { key: 'C', text: 'Reaksi penguraian 1 mol gas SO3 menjadi unsur-unsur pembentuknya membutuhkan kalor sebesar +396 kJ.' },
      { key: 'D', text: 'Pembakaran sempurna 32 gram belerang padat (Ar S = 32) menjadi gas SO3 melepaskan kalor sebesar 792 kJ.' },
      { key: 'E', text: 'Nilai perubahan entalpi reaksi tidak bergantung pada jalur reaksi, melainkan hanya pada keadaan awal dan akhir sistem.' }
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    pointWeight: 2,
    narration: {
      intro: 'Nomor 23 membawa kita ke Hukum Hess dan diagram tingkat energi belerang trioksida.',
      stimulus: 'Diagram memperlihatkan pembentukan SO3 baik melalui perantara SO2 maupun rute langsung. Cermati hubungan entalpi tahap 1, tahap 2, dan tahap keseluruhan.',
      clue: 'Delta H pembentukan SO3 langsung adalah jumlah dari delta H1 dan delta H2: minus 297 ditambah minus 99 = minus 396 kJ/mol. 32 gram belerang sama dengan 1 mol.',
      discussion: 'A benar: Delta Hf SO3 = -297 + (-99) = -396 kJ/mol. B benar: oksidasi SO2 menjadi SO3 adalah -99 kJ/mol. C benar: kebalikan pembentukan adalah penguraian, tandanya berbalik jadi +396 kJ/mol. D salah: 32 gram S = 32/32 = 1 mol S, kalor yang dilepas adalah 396 kJ, bukan 792 kJ. E benar: itu adalah definisi fundamental Hukum Hess sebagai fungsi keadaan.',
      quickTrick: 'Cara Cepat Mister Jo: 32 gram belerang itu pas 1 mol belerang (karena Ar S = 32). Reaksi 1 mol belerang melepaskan 396 kJ. Opsi D mengklaim 792 kJ (itu untuk 2 mol), jadi D pasti salah! Sisanya A, B, C, dan E langsung benar!'
    },
    discussion: {
      problemId: 'Q-23',
      concept: 'Hukum Hess, Entalpi Pembentukan Standar, dan Analisis Diagram Tingkat Energi',
      keyFormula: '\\Delta H_3 = \\Delta H_1 + \\Delta H_2, \\quad \\Delta H_{\\text{urai}} = -\\Delta H_{\\text{bentuk}}',
      steps: [
        'Terapkan Hukum Hess pada diagram tingkat energi: ΔH3 = ΔH1 + ΔH2 = (-297 kJ) + (-99 kJ) = -396 kJ/mol. Reaksi ini mewakili pembentukan 1 mol SO3 dari unsur stabilnya S(s) dan O2(g), sehingga ΔHf° SO3(g) = -396 kJ/mol (Pernyataan A BENAR).',
        'Tahap 2 (oksidasi SO2 -> SO3): ΔH2 = -396 - (-297) = -99 kJ/mol (eksotermik melepaskan kalor) (Pernyataan B BENAR).',
        'Reaksi penguraian SO3(g) -> S(s) + 3/2 O2(g) adalah kebalikan dari reaksi pembentukan: ΔH_urai = -ΔHf° = -(-396) = +396 kJ/mol (endotermik menyerap kalor) (Pernyataan C BENAR).',
        'Hitung kalor pembakaran 32 gram S(s): n(S) = 32 g / 32 g/mol = 1,0 mol. Kalor yang dilepaskan untuk 1 mol S adalah 396 kJ. Pernyataan D yang menyatakan 792 kJ adalah SALAH (792 kJ untuk 2 mol atau 64 gram S).',
        'Prinsip dasar Hukum Hess: Entalpi merupakan fungsi keadaan sehingga perubahannya hanya bergantung pada kondisi awal dan akhir, bukan lintasan tahapan reaksi (Pernyataan E BENAR).'
      ],
      calculation: '\\Delta H_f^\\circ(\\text{SO}_3) = -297 + (-99) = -396\\,\\text{kJ/mol}; \\quad q (32\\,\\text{g S}) = 1\\,\\text{mol} \\times 396\\,\\text{kJ/mol} = 396\\,\\text{kJ}',
      finalAnswer: 'Pilihan yang benar adalah A, B, C, dan E.',
      whyOthersWrong: 'Pernyataan D salah karena 32 gram S setara dengan 1 mol belerang yang hanya menghasilkan kalor sebesar 396 kJ, bukan 792 kJ.',
      misterJoQuickTrick: 'Trik konversi gram-mol kilat: Ar S = 32. 32 gram = tepat 1 mol. Panas yang keluar = 396 kJ. Opsi D mengalikan 2 tanpa alasan, langsung buang D ke tempat sampah!'
    }
  },

  // Soal 24 - BS (Kimia Analitik: Penyangga Karbonat dalam Darah)
  {
    id: 24,
    number: 24,
    type: 'BS',
    category: 'Kimia Analitik',
    subtopic: 'Larutan Penyangga Fisiologis & Kapasitas Penyangga',
    competency: 'Reasoning',
    title: 'Mekanisme Sistem Penyangga Asam Karbonat - Bikarbonat dalam Darah Manusia',
    stimulus: {
      context: 'Darah manusia memiliki sistem penyangga utama yang menjaga pH darah tetap stabil pada rentang fisiologis 7,35 hingga 7,45. Penyangga utama tersebut terdiri dari asam karbonat (H2CO3) dan ion bikarbonat (HCO3⁻). Pada kondisi normal, rasio konsentrasi [HCO3⁻] terhadap [H2CO3] dipertahankan sekitar 20 : 1.',
      reactionEquation: '\\text{CO}_2(g) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{H}_2\\text{CO}_3(aq) \\rightleftharpoons \\text{H}^+(aq) + \\text{HCO}_3^-(aq)',
      visualNote: 'Jika tubuh menghasilkan asam laktat saat olahraga berat, ion H+ berlebih akan dinetralkan oleh HCO3⁻. Jika terjadi hiperventilasi, CO2 keluar berlebih menyebabkan alkalosis.'
    },
    questionText: 'Berdasarkan prinsip kesetimbangan kimia dalam sistem fisiologis tubuh, tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 1,
        text: 'Ketika sel otot memproduksi asam laktat dalam jumlah banyak, ion bikarbonat (HCO3⁻) akan bereaksi mengikat ion H+ membentuk H2CO3 sehingga pH darah tidak turun drastis.',
        isCorrect: true,
        explanation: 'Ion HCO3- bertindak sebagai basa konjugasi yang menetralisir kelebihan ion H+ dari asam laktat: H+ + HCO3- -> H2CO3.'
      },
      {
        id: 2,
        text: 'Rasio [HCO3⁻] : [H2CO3] sebesar 20 : 1 menunjukkan bahwa kapasitas penyangga darah lebih efektif dalam menahan penambahan basa dibandingkan penambahan asam.',
        isCorrect: false,
        explanation: 'Kapasitas penyangga paling besar terhadap penambahan yang komponen penetralnya paling banyak. Karena jumlah HCO3- (basa konjugasi penahan asam) 20 kali lebih banyak dari H2CO3, darah justru jauh lebih efektif menahan penambahan ASAM, bukan basa!'
      },
      {
        id: 3,
        text: 'Hiperventilasi (bernapas terlalu cepat dan dalam) menyebabkan pengeluaran gas CO2 berlebih sehingga kesetimbangan bergeser ke kiri dan memicu terjadinya alkalosis respiratorik (pH darah naik di atas 7,45).',
        isCorrect: true,
        explanation: 'Kehilangan CO2 menggeser kesetimbangan ke arah kiri untuk membentuk CO2 kembali, sehingga konsentrasi [H+] berkurang dan pH darah meningkat di atas 7,45 (alkalosis).'
      }
    ],
    correctAnswer: 'BS-evaluated',
    pointWeight: 3,
    narration: {
      intro: 'Soal nomor 24 menghubungkan konsep kesetimbangan larutan penyangga dengan sistem fisiologis pernapasan manusia.',
      stimulus: 'Sistem buffer darah H2CO3 dan HCO3- memiliki rasio 1 berbanding 20. Evaluasi mekanisme pertahanan terhadap asam laktat, kapasitas penyangga, dan kondisi hiperventilasi.',
      clue: 'Pikirkan metabolisme tubuh manusia: tubuh lebih sering menghasilkan asam buangan (seperti CO2 dan asam laktat) daripada basa! Oleh karena itu tubuh menyiapkan ion HCO3- dua puluh kali lebih banyak.',
      discussion: 'Pernyataan 1 Benar: HCO3- mengikat ion H+ dari asam laktat. Pernyataan 2 Salah: karena HCO3- ada 20 kali lipat, kapasitas penyangga justru paling tangguh melawan penambahan asam, bukan basa! Pernyataan 3 Benar: kehilangan CO2 saat hiperventilasi menarik H+ ke kiri sehingga pH darah naik (alkalosis).',
      quickTrick: 'Cara Cepat Mister Jo: Mengapa komponen basa bikarbonat 20 kali lebih banyak? Karena tubuh adalah "pabrik asam" (asam laktat, asam urat, CO2)! Jadi cadangan penetral asam harus melimpah ruah. Pernyataan 2 terbalik, otomatis salah!'
    },
    discussion: {
      problemId: 'Q-24',
      concept: 'Sistem Buffer Fisiologis Darah, Kapasitas Penyangga, dan Gangguan Asam-Basa',
      keyFormula: '\\text{pH} = \\text{p}K_a + \\log\\left(\\frac{[\\text{HCO}_3^-]}{[\\text{H}_2\\text{CO}_3]}\\right), \\quad \\text{Rasio} = \\frac{20}{1}',
      steps: [
        'Respon terhadap asam: Asam laktat melepaskan H⁺. H⁺ ditangkap oleh basa konjugasi: H⁺ + HCO3⁻ -> H2CO3. Asam karbonat kemudian diubah oleh enzim karbonat anhidrase menjadi H2O dan CO2 yang dibuang lewat paru-paru. Pernyataan 1 BENAR.',
        'Analisis kapasitas penyangga: Kapasitas buffer ditentukan oleh kuantitas relatif komponennya. Dengan rasio basa konjugasi [HCO3⁻] terhadap asam [H2CO3] sebesar 20 : 1, darah memiliki daya tampung penetralan terhadap ASAM 20 kali lebih besar dibandingkan terhadap basa. Pernyataan 2 SALAH.',
        'Efek pernapasan (Asas Le Chatelier): Reaksi kesetimbangan CO2(g) + H2O(l) <=> H2CO3(aq) <=> H⁺(aq) + HCO3⁻(aq). Saat bernapas terengah-engah (hiperventilasi), konsentrasi CO2 di paru-paru anjlok drastis. Kesetimbangan terdorong ke kiri untuk memproduksi CO2 kembali, menyerap ion H⁺. Karena [H⁺] turun, pH darah melonjak > 7,45 (alkalosis respiratorik). Pernyataan 3 BENAR.'
      ],
      calculation: '\\text{Kapasitas penahan asam} \\propto [\\text{HCO}_3^-] = 20 \\times [\\text{H}_2\\text{CO}_3]',
      finalAnswer: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR.',
      whyOthersWrong: 'Pernyataan 2 salah logika karena komponen penahan asam adalah basa konjugasi HCO3- yang berjumlah 20 bagian, sedangkan penahan basa hanya H2CO3 yang berjumlah 1 bagian.',
      misterJoQuickTrick: 'Trik logika fisiologis Mister Jo: Tubuh kita menghasilkan asam setiap detik lewat respirasi dan kontraksi otot. Makanya stok bikarbonat 20x lebih banyak agar kita tidak mudah pingsan akibat asidosis. Pernyataan 2 yang bilang lebih tahan basa pasti salah!'
    }
  },

  // Soal 25 - PG (Kimia Analitik: Ksp Pengaruh Ion Senama)
  {
    id: 25,
    number: 25,
    type: 'PG',
    category: 'Kimia Analitik',
    subtopic: 'Ksp & Pengaruh Ion Senama',
    competency: 'Applying',
    title: 'Perhitungan Kelarutan Perak Kromat dalam Larutan Perak Nitrat',
    stimulus: {
      context: 'Garam perak kromat (Ag2CrO4) merupakan endapan berwarna merah bata yang sering digunakan sebagai indikator titik akhir dalam titrasi argentometri metode Mohr. Diketahui nilai tetapan hasil kali kelarutan (Ksp) perak kromat pada suhu 25°C adalah 4,0 × 10⁻¹².',
      reactionEquation: '\\text{Ag}_2\\text{CrO}_4(s) \\rightleftharpoons 2\\text{Ag}^+(aq) + \\text{CrO}_4^{2-}(aq)',
      visualNote: 'Larutan mengandung perak nitrat AgNO3 0,10 M yang terionisasi sempurna menghasilkan [Ag+] = 0,10 M (ion senama).'
    },
    questionText: 'Kelarutan molar (s) garam Ag2CrO4 dalam larutan AgNO3 0,10 M pada suhu 25°C adalah...',
    options: [
      { key: 'A', text: '4,0 × 10⁻¹¹ M' },
      { key: 'B', text: '4,0 × 10⁻¹⁰ M' },
      { key: 'C', text: '2,0 × 10⁻⁶ M' },
      { key: 'D', text: '1,0 × 10⁻⁴ M' },
      { key: 'E', text: '4,0 × 10⁻¹² M' }
    ],
    correctAnswer: 'B',
    pointWeight: 1,
    narration: {
      intro: 'Kita melangkah ke soal nomor 25 mengenai kelarutan garam Ag2CrO4 dalam pengaruh ion senama.',
      stimulus: 'Nilai Ksp Ag2CrO4 adalah 4 kali 10 pangkat minus 12. Cari kelarutannya di dalam larutan perak nitrat 0,10 M.',
      clue: 'Perak nitrat adalah elektrolit kuat penyumbang ion senama Ag+ sebesar 0,10 M. Karena nilai s sangat kecil, konsentrasi Ag+ total dianggap sama dengan 0,10 M. Jangan lupa Ag+ dikuadratkan!',
      discussion: 'Rumus Ksp = [Ag+]^2 x [CrO4^2-]. Konsentrasi [Ag+] berasal dari AgNO3 sebesar 0,10 M (sumbangan 2s diabaikan). Konsentrasi [CrO4^2-] adalah s. Maka Ksp = (0,10)^2 x s = 0,01 x s = 10^-2 x s. Sehingga s = Ksp / 10^-2 = (4,0 x 10^-12) / 10^-2 = 4,0 x 10^-10 M.',
      quickTrick: 'Cara Cepat Mister Jo: [Ag+] = 0,1 M. Kuadratkan [Ag+]² = 0,01 = 10^-2. Langsung bagi Ksp dengan 10^-2: s = (4 x 10^-12) / 10^-2 = 4 x 10^-10 M. Ketemu dalam 5 detik di opsi B!'
    },
    discussion: {
      problemId: 'Q-25',
      concept: 'Kelarutan Garam Sukar Larut dan Pengaruh Ion Senama',
      keyFormula: 'K_{sp} = [\\text{Ag}^+]^2 [\\text{CrO}_4^{2-}], \\quad [\\text{Ag}^+] \\approx [\\text{AgNO}_3] = 0{,}10\\,\\text{M}',
      steps: [
        'Tuliskan persamaan disosiasi garam: Ag2CrO4(s) <=> 2Ag⁺(aq) + CrO4²⁻(aq).',
        'Ion senama berasal dari larutan AgNO3 0,10 M: AgNO3 -> Ag⁺ (0,10 M) + NO3⁻ (0,10 M).',
        'Konsentrasi ion pada keadaan jenuh: [Ag⁺] = 0,10 + 2s ≈ 0,10 M (karena s sangat kecil dibanding 0,10); [CrO4²⁻] = s.',
        'Substitusikan ke persamaan Ksp: Ksp = [Ag⁺]² x [CrO4²⁻] = (0,10)² x s = 1,0 x 10⁻² x s.',
        'Hitung s: s = Ksp / 10⁻² = (4,0 x 10⁻¹²) / 10⁻² = 4,0 x 10⁻¹⁰ M.'
      ],
      calculation: 's = \\frac{K_{sp}}{[\\text{Ag}^+]^2} = \\frac{4{,}0 \\times 10^{-12}}{(0{,}10)^2} = \\frac{4{,}0 \\times 10^{-12}}{10^{-2}} = 4{,}0 \\times 10^{-10}\\,\\text{M}',
      finalAnswer: 'Opsi B benar: 4,0 × 10⁻¹⁰ M.',
      whyOthersWrong: 'Opsi D (1,0 x 10⁻⁴ M) adalah kelarutan Ag2CrO4 dalam air murni (s = akar pangkat tiga dari (Ksp / 4)). Opsi A atau E salah memasukkan pangkat kuadrat pada ion Ag+.',
      misterJoQuickTrick: 'Trik kilat ion senama bervalensi 2: Senyawa A2B dalam larutan ion A berkonsentrasi C: s = Ksp / C². Langsung: s = (4 x 10⁻¹²) / (0,1)² = 4 x 10⁻¹⁰ M! Opsi B tanpa ragu!'
    }
  },

  // Soal 26 - PGK (Kimia Dasar: Sifat Periodik Halogen)
  {
    id: 26,
    number: 26,
    type: 'PGK',
    category: 'Kimia Dasar',
    subtopic: 'Sistem Periodik Unsur & Halogen (Golongan VIIA)',
    competency: 'Reasoning',
    title: 'Analisis Tren Sifat Fisik dan Kimia Unsur-Unsur Halogen (VIIA)',
    stimulus: {
      context: 'Unsur-unsur halogen golongan VIIA (F, Cl, Br, I) merupakan kelompok unsur nonlogam yang sangat reaktif dengan konfigurasi elektron valensi ns² np⁵. Unsur-unsur ini menunjukkan keteraturan tren periodik yang menarik dari atas ke bawah dalam satu golongan.',
      table: {
        title: 'Data Sifat Keperiodikan Unsur Halogen',
        headers: ['Unsur Halogen', 'Nomor Atom', 'Jari-Jari Kovalen (pm)', 'Afinitas Elektron (kJ/mol)', 'Keelektronegatifan (Pauling)'],
        rows: [
          ['Fluorin (F)', '9', '72 pm', '-328 kJ/mol', '4,0'],
          ['Klorin (Cl)', '17', '99 pm', '-349 kJ/mol', '3,0'],
          ['Bromin (Br)', '35', '114 pm', '-325 kJ/mol', '2,8'],
          ['Iodin (I)', '53', '133 pm', '-295 kJ/mol', '2,5']
        ]
      },
      visualNote: 'Perhatikan bahwa afinitas elektron klorin (-349 kJ/mol) lebih eksotermik (lebih besar) daripada fluorin (-328 kJ/mol) karena kerapatan awan elektron pada kulit n=2 fluorin menimbulkan tolakan antarelektron yang signifikan.'
    },
    questionText: 'Berdasarkan data tabel keperiodikan halogen di atas, tentukan seluruh pernyataan yang BENAR! (Pilih semua jawaban yang benar)',
    options: [
      { key: 'A', text: 'Klorin memiliki afinitas elektron yang lebih besar daripada fluorin akibat kecilnya ukuran atom fluorin yang menyebabkan tolakan antarelektron pada subkulit 2p.' },
      { key: 'B', text: 'Fluorin merupakan unsur dengan daya oksidasi (daya pengoksidasi) paling kuat di antara semua unsur halogen.' },
      { key: 'C', text: 'Titik didih unsur halogen meningkat dari F2 ke I2 karena massa molekul relatif (Mr) dan kekuatan gaya dispersi London semakin besar.' },
      { key: 'D', text: 'Asam halida HF memiliki kekuatan asam (derajat ionisasi) paling kuat dibandingkan HCl, HBr, dan HI dalam larutan air.' },
      { key: 'E', text: 'Gas klorin (Cl2) mampu mendesak ion bromida (Br⁻) dalam larutan menghasilkan gas bromin (Br2).' }
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    pointWeight: 2,
    narration: {
      intro: 'Nomor 26 membahas halogen golongan 7A dengan anomali afinitas elektron yang terkenal di olimpiade dan TKA.',
      stimulus: 'Tabel menyajikan data jari-jari, afinitas elektron, dan keelektronegatifan dari fluorin hingga iodin.',
      clue: 'Perhatikan Cl memiliki afinitas elektron paling tinggi melebihi F. Namun daya oksidasi F2 tetap paling dahsyat. Hati-hati dengan asam HF: HF adalah satu-satunya asam lemah di antara asam halida!',
      discussion: 'A benar: anomali afinitas Cl > F karena tolakan elektron pada atom F yang sangat kecil. B benar: F2 memiliki potensial reduksi tertinggi sehingga oksidator terkuat. C benar: dari F2 gas ke I2 padat, titik didih naik karena gaya London makin kuat seiring bertambahnya elektron. D salah: HF adalah asam lemah karena ikatan H-F sangat kuat, urutan kekuatan asam adalah HF < HCl < HBr < HI. E benar: Cl2 lebih reaktif sehingga dapat mengoksidasi Br- menjadi Br2.',
      quickTrick: 'Cara Cepat Mister Jo: Jebakan umum kimia SMA adalah mengira HF asam paling kuat padahal HF justru SATU-SATUNYA ASAM LEMAH di antara halogen! Opsi D langsung coret! Opsi A, B, C, dan E langsung terbukti benar!'
    },
    discussion: {
      problemId: 'Q-26',
      concept: 'Tren Golongan Halogen, Anomali Afinitas Elektron, Daya Oksidasi, dan Kekuatan Asam',
      keyFormula: '\\text{Kekuatan Oksidator: } \\text{F}_2 > \\text{Cl}_2 > \\text{Br}_2 > \\text{I}_2; \\quad \\text{Kekuatan Asam: } \\text{HF} < \\text{HCl} < \\text{HBr} < \\text{HI}',
      steps: [
        'Anomali Afinitas Elektron: Klorin (-349 kJ/mol) melepaskan energi lebih besar saat menangkap elektron dibanding Fluorin (-328 kJ/mol) karena atom F sangat kecil dengan kerapatan elektron 2p yang rapat sehingga elektron masuk mengalami tolakan antar-awan elektron (Pernyataan A BENAR).',
        'Daya Oksidator: Potensial reduksi standar E° berturut-turut: F2 (+2,87 V) > Cl2 (+1,36 V) > Br2 (+1,07 V) > I2 (+0,54 V). F2 adalah oksidator terkuat (Pernyataan B BENAR).',
        'Titik Didih: Molekul diatomik nonpolar X2. Dari F2 (gas) -> Cl2 (gas) -> Br2 (cair) -> I2 (padat). Seiring bertambahnya Mr dan jumlah elektron, awan elektron semakin mudah terpolarisasi, gaya London semakin kuat, titik didih meningkat (Pernyataan C BENAR).',
        'Kekuatan Asam Halida: Dari HF ke HI, panjang ikatan H-X bertambah dan energi ikatan H-X menurun drastis, sehingga proton H⁺ semakin mudah lepas dalam air. HF adalah asam lemah (Ka ~ 6,8 x 10⁻⁴), sedangkan HCl, HBr, HI adalah asam kuat dengan HI sebagai asam terkuat. Pernyataan D SALAH.',
        'Reaksi Pendesakan Halogen: Halogen yang berada lebih atas dapat mengoksidasi ion halida di bawahnya: Cl2(g) + 2Br⁻(aq) -> 2Cl⁻(aq) + Br2(l) berlangsung spontan (Pernyataan E BENAR).'
      ],
      calculation: 'E^\\circ(\\text{F}_2) = +2{,}87\\,\\text{V}; \\quad \\text{Asam Halida: } \\text{HI} > \\text{HBr} > \\text{HCl} \\gg \\text{HF (asam lemah)}',
      finalAnswer: 'Pilihan yang benar adalah A, B, C, dan E.',
      whyOthersWrong: 'Pernyataan D salah karena HF adalah asam lemah akibat ikatan hidrogen dan energi ikatan H-F yang sangat tinggi (565 kJ/mol), sehingga sukar melepaskan H+ dibandingkan HCl, HBr, dan HI.',
      misterJoQuickTrick: 'Hafalkan rumus emas halogen Mister Jo: "Oksidator terkuat Fluorin, tapi asam halida terlemah juga Fluorin (HF)". Opsi D yang mengklaim HF asam terkuat langsung dicoret seketika!'
    }
  },

  // Soal 27 - BS (Kimia Organik: Karbon Kiral & Isomer Optis)
  {
    id: 27,
    number: 27,
    type: 'BS',
    category: 'Kimia Organik',
    subtopic: 'Struktur Senyawa Karbon, Atom C Kiral & Isomeri Optis',
    competency: 'Reasoning',
    title: 'Analisis Atom Karbon Asimetris (Kiral) dan Aktivitas Optis pada Asam Laktat',
    stimulus: {
      context: 'Asam laktat (asam 2-hidroksipropanoat, CH3-CH(OH)-COOH) terbentuk di dalam jaringan otot manusia saat aktivitas fisik berat anaerobik. Molekul ini memiliki satu atom karbon asimetris (karbon kiral, C*) yang mengikat empat gugus berbeda sehingga mampu memutar bidang cahaya terpolarisasi.',
      reactionEquation: '\\text{CH}_3-\\text{C}^*\\text{H(OH)}-\\text{COOH}',
      visualNote: 'Empat gugus terikat pada C nomor 2: -H, -OH, -CH3, dan -COOH. Rumus jumlah isomer optis adalah 2^n di mana n adalah jumlah atom C kiral.'
    },
    questionText: 'Berdasarkan struktur molekul asam laktat dan konsep kiralitas senyawa karbon, tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 1,
        text: 'Atom karbon nomor 2 pada asam laktat merupakan atom C kiral karena mengikat empat gugus yang berlainan: -H, -OH, -CH3, dan -COOH.',
        isCorrect: true,
        explanation: 'Keempat substituen pada atom C nomor 2 berbeda satu sama lain, menjadikannya pusat kiral (karbon asimetris).'
      },
      {
        id: 2,
        text: 'Asam laktat memiliki sepasang enantiomer (isomer optis aktif d dan l) yang merupakan bayangan cermin satu sama lain tetapi tidak dapat saling diimpitkan.',
        isCorrect: true,
        explanation: 'Dengan n = 1 atom C kiral, jumlah isomer optis adalah 2¹ = 2, yaitu enantiomer dextro (+) dan levo (-).'
      },
      {
        id: 3,
        text: 'Atom karbon nomor 1 pada gugus karboksilat (-COOH) tergolong sebagai atom C tersier karena mengikat tiga atom lainnya.',
        isCorrect: false,
        explanation: 'Klasifikasi atom C primer, sekunder, tersier, dan kuarterner HANYA ditentukan oleh jumlah atom karbon LAIN yang diikat langsung! Karbon karboksilat hanya mengikat 1 atom C lain (C nomor 2), sehingga tergolong C PRIMER, bukan tersier!'
      }
    ],
    correctAnswer: 'BS-evaluated',
    pointWeight: 3,
    narration: {
      intro: 'Nomor 27 menguji pemahaman mendasar mengenai atom C kiral, isomer optis, dan jenis atom karbon primer hingga tersier.',
      stimulus: 'Asam laktat memiliki struktur CH3-CH(OH)-COOH. Perhatikan atom C nomor 2 dan atom C nomor 1 pada gugus karboksilat.',
      clue: 'Ingat definisi atom C primer, sekunder, dan tersier: hanya dihitung dari jumlah atom KARBON lain yang diikat langsung, bukan atom oksigen atau hidrogen!',
      discussion: 'Pernyataan 1 Benar: C nomor 2 mengikat 4 gugus berbeda sehingga kiral. Pernyataan 2 Benar: memiliki 2 isomer optis bayangan cermin (enantiomer). Pernyataan 3 Salah: C nomor 1 hanya mengikat 1 atom karbon lain (C2), jadi C nomor 1 adalah atom C primer, bukan tersier!',
      quickTrick: 'Cara Cepat Mister Jo: Jangan tertipu istilah "mengikat tiga atom"! Atom C primer/sekunder/tersier itu HANYA menghitung ikatan dengan SESAMA KARBON. Karbon karboksilat cuma gandengan dengan 1 karbon tetangga, jadi wajib C primer! Pernyataan 3 salah!'
    },
    discussion: {
      problemId: 'Q-27',
      concept: 'Pusat Kiral, Enantiomer Optis Aktif, dan Derajat Substitusi Atom Karbon',
      keyFormula: '\\text{Jumlah Isomer Optis} = 2^n \\quad (n = \\text{jumlah C kiral})',
      steps: [
        'Uji kiralitas atom C nomor 2: Mengikat -H, -OH, -CH3, dan -COOH. Keempat gugus berbeda secara kimia. Maka C2 adalah atom C kiral / asimetris (Pernyataan 1 BENAR).',
        'Hitung isomer optis: n = 1 C kiral -> jumlah stereoisomer = 2¹ = 2. Kedua molekul adalah bayangan cermin yang non-superimposable (enantiomer d-asam laktat dan l-asam laktat) yang memutar bidang cahaya terpolarisasi (Pernyataan 2 BENAR).',
        'Klasifikasi jenis atom karbon: Atom C primer (mengikat 1 C lain), C sekunder (mengikat 2 C lain), C tersier (mengikat 3 C lain), C kuarterner (mengikat 4 C lain). Atom C1 (-COOH) mengikat 1 atom C2, 1 atom O rangkap, dan 1 gugus -OH. Karena hanya mengikat SATU atom karbon lain, C1 adalah C PRIMER, bukan C tersier. Pernyataan 3 SALAH.'
      ],
      calculation: 'n = 1 \\Rightarrow 2^1 = 2\\,\\text{enantiomer}; \\quad C_1 \\text{ mengikat 1 atom C lain} \\Rightarrow C_1 = \\text{C Primer}',
      finalAnswer: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      whyOthersWrong: 'Pernyataan 3 salah konsep karena siswa sering terkecoh menghitung ikatan dengan atom oksigen sebagai dasar penentuan atom C tersier.',
      misterJoQuickTrick: 'Rumus abadi Mister Jo: "C primer = gandeng 1 kawan C, C sekunder = gandeng 2 kawan C, C tersier = gandeng 3 kawan C". Ikatan dengan atom O, H, atau N tidak dihitung! C-COOH cuma gandeng 1 kawan C, jadi pasti C primer!'
    }
  },

  // Soal 28 - PG (Kimia Fisik: Laju Reaksi & Kenaikan Suhu)
  {
    id: 28,
    number: 28,
    type: 'PG',
    category: 'Kimia Fisik',
    subtopic: 'Laju Reaksi & Pengaruh Kenaikan Suhu',
    competency: 'Applying',
    title: 'Perhitungan Waktu Reaksi Berdasarkan Kenaikan Suhu Eksperimen',
    stimulus: {
      context: 'Dalam suatu reaksi sintesis senyawa obat di laboratorium farmasi, laju reaksi berlangsung 2 kali lebih cepat setiap kenaikan suhu sebesar 10°C. Pada suhu 25°C, reaksi tersebut membutuhkan waktu 32 menit untuk menghasilkan produk dengan rendemen tertentu.',
      reactionEquation: 't_2 = t_1 \\cdot \\left(\\frac{1}{n}\\right)^{\\frac{T_2 - T_1}{\\Delta T}}',
      visualNote: 'Suhu dinaikkan dari T1 = 25°C menjadi T2 = 65°C. Kenaikan suhu ΔT_total = 65 - 25 = 40°C. Interval kenaikan ΔT = 10°C, faktor pelipatgandaan n = 2.'
    },
    questionText: 'Berapa waktu yang dibutuhkan untuk menyelesaikan reaksi tersebut jika reaksi dilangsungkan pada suhu 65°C?',
    options: [
      { key: 'A', text: '1 menit' },
      { key: 'B', text: '2 menit' },
      { key: 'C', text: '4 menit' },
      { key: 'D', text: '8 menit' },
      { key: 'E', text: '16 menit' }
    ],
    correctAnswer: 'B',
    pointWeight: 1,
    narration: {
      intro: 'Kita beralih ke soal nomor 28 mengenai perhitungan efek kenaikan suhu terhadap waktu reaksi.',
      stimulus: 'Reaksi berlangsung 2 kali lebih cepat setiap kenaikan 10 derajat Celsius. Pada suhu 25 derajat butuh waktu 32 menit. Berapa waktu yang dibutuhkan pada suhu 65 derajat Celsius?',
      clue: 'Hitung berapa kali suhu naik 10 derajat: dari 25 ke 65 naik 40 derajat, berarti ada 4 lompatan. Karena laju reaksi berlipat ganda 2 pangkat 4, maka waktu reaksinya dibagi dengan 2 pangkat 4.',
      discussion: 'Kenaikan suhu = 65 - 25 = 40°C. Jumlah lonjakan = 40 / 10 = 4 kali. Laju reaksi meningkat sebesar 2^4 = 16 kali lipat. Karena waktu berbanding terbalik dengan laju (t = 1/v), maka waktu baru adalah t2 = 32 menit / 16 = 2 menit.',
      quickTrick: 'Cara Cepat Mister Jo: Naik 40°C = naik 4 tingkat 10-an. Kelipatan = 2 pangkat 4 = 16 kali lebih cepat. Waktu awal 32 menit langsung bagi 16: 32 / 16 = 2 menit! Beres seketika di opsi B!'
    },
    discussion: {
      problemId: 'Q-28',
      concept: 'Kinetika Kimia, Pengaruh Suhu terhadap Laju Reaksi, dan Hubungan Invers Waktu',
      keyFormula: 't_2 = t_1 \\times \\left(\\frac{1}{n}\\right)^{\\frac{T_2 - T_1}{\\Delta T}}',
      steps: [
        'Hitung selisih suhu: ΔT_total = T2 - T1 = 65°C - 25°C = 40°C.',
        'Hitung eksponen kenaikan: k = ΔT_total / interval = 40°C / 10°C = 4.',
        'Hitung faktor peningkatan laju reaksi: v2 / v1 = n^k = 2⁴ = 16 kali lebih cepat.',
        'Hubungkan laju dengan waktu reaksi (waktu berbanding terbalik dengan laju): t2 = t1 / 16.',
        'Hitung waktu pada suhu 65°C: t2 = 32 menit / 16 = 2 menit.'
      ],
      calculation: 't_2 = 32 \\times \\left(\\frac{1}{2}\\right)^{\\frac{65 - 25}{10}} = 32 \\times \\left(\\frac{1}{2}\\right)^4 = \\frac{32}{16} = 2\\,\\text{menit}',
      finalAnswer: 'Opsi B benar: 2 menit.',
      whyOthersWrong: 'Opsi A (1 menit) jika membagi dengan 32 (kelipatan 2^5). Opsi C (4 menit) jika membagi dengan 8 (2^3). Opsi D (8 menit) jika membagi dengan 4. Opsi E (16 menit) jika hanya membagi 2.',
      misterJoQuickTrick: 'Trik deret separuh Mister Jo: Tuliskan deret waktu turun setiap lompat 10°C: 25°C = 32 menit -> 35°C = 16 menit -> 45°C = 8 menit -> 55°C = 4 menit -> 65°C = 2 menit! Tanpa rumus, tinggal bagi dua 4 kali!'
    }
  },

  // Soal 29 - PGK (Kimia Analitik: Sistem Koloid & Pengolahan Air)
  {
    id: 29,
    number: 29,
    type: 'PGK',
    category: 'Kimia Analitik',
    subtopic: 'Sistem Koloid & Penerapannya',
    competency: 'Reasoning',
    title: 'Aplikasi Sifat-Sifat Koloid pada Instalasi Pengolahan Air Bersih PDAM',
    stimulus: {
      context: 'Instalasi Pengolahan Air Bersih (IPA) PDAM memanfaatkan berbagai sifat khas sistem koloid untuk mengubah air sungai yang keruh menjadi air bersih layak konsumsi. Tahapan utama meliputi penambahan tawas (Al2(SO4)3), pengendapan lumpur, penyaringan pasir aktif, dan penambahan klorin.',
      table: {
        title: 'Tahapan Pengolahan Air dan Fenomena Koloid',
        headers: ['Tahapan Proses', 'Bahan yang Digunakan', 'Prinsip Sifat Koloid'],
        rows: [
          ['Koagulasi & Flokulasi', 'Tawas Al2(SO4)3 atau PAC', 'Netralisasi muatan partikel lumpur'],
          ['Penghilangan Bau & Warna', 'Karbon aktif (arang)', 'Penyerapan zat pengotor pada permukaan'],
          ['Uji Kekeruhan', 'Sinar optik (turbidimeter)', 'Hamburan cahaya oleh partikel koloid']
        ]
      },
      visualNote: 'Partikel lumpur tanah liat di air sungai bermuatan negatif. Ion Al³⁺ dari tawas menetralkan muatan tersebut sehingga partikel saling bergabung dan mengendap.'
    },
    questionText: 'Berdasarkan fenomena kimia sistem koloid pada pengolahan air di atas, manakah pernyataan berikut yang BENAR? (Pilih semua jawaban yang benar)',
    options: [
      { key: 'A', text: 'Penambahan tawas menyebabkan terjadinya proses koagulasi karena ion kation Al³⁺ menetralkan muatan negatif partikel koloid lumpur.' },
      { key: 'B', text: 'Penggunaan karbon aktif untuk menghilangkan zat pewarna dan bau memanfaatkan sifat adsorpsi koloid.' },
      { key: 'C', text: 'Penghamburan berkas sinar oleh partikel koloid air keruh saat disinari lampu merupakan pembuktian Efek Tyndall.' },
      { key: 'D', text: 'Partikel koloid lumpur tidak dapat mengendap secara spontan tanpa tawas karena adanya gerak Brown dan tolak-menolak muatan sejenis.' },
      { key: 'E', text: 'Pemisahan partikel koloid lumpur dari air sungai dapat dilakukan dengan mudah menggunakan kertas saring biasa di laboratorium.' }
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    pointWeight: 2,
    narration: {
      intro: 'Kita masuki nomor 29 mengenai sistem koloid dan aplikasinya dalam pengolahan air bersih.',
      stimulus: 'Pengolahan air PDAM melibatkan tawas, karbon aktif, dan pengujian optik. Evaluasi sifat koagulasi, adsorpsi, efek Tyndall, gerak Brown, dan kemampuan penyaringannya.',
      clue: 'Perhatikan ukuran partikel koloid: partikel koloid lolos dari kertas saring biasa dan hanya tertahan oleh membran semipermeabel (selaput permiabel ultra). Jadi apakah koloid bisa disaring kertas saring biasa?',
      discussion: 'A benar: ion Al3+ menetralkan koloid lumpur bermuatan negatif (koagulasi). B benar: karbon aktif menyerap zat pengotor di permukaannya (adsorpsi). C benar: hamburan berkas cahaya oleh koloid adalah Efek Tyndall. D benar: gerak Brown dan muatan sejenis menjaga kestabilan koloid sehingga tidak mengendap sendiri. E salah: partikel koloid berukuran 1-100 nm sehingga tembus kertas saring biasa dan butuh penyaring ultra.',
      quickTrick: 'Cara Cepat Mister Jo: Ingat ukuran partikel koloid: 1 sampai 100 nanometer! Ukuran ini lebih kecil dari pori-pori kertas saring biasa, sehingga koloid lolos begitu saja. Jadi opsi E yang bilang mudah disaring kertas saring biasa pasti salah! Sisanya A, B, C, dan D benar!'
    },
    discussion: {
      problemId: 'Q-29',
      concept: 'Sifat-Sifat Koloid: Koagulasi, Adsorpsi, Efek Tyndall, Gerak Brown, dan Dialisis',
      keyFormula: '\\text{Koagulasi: Netralisasi muatan oleh ion lawan}; \\quad \\text{Ukuran koloid: } 1\\,\\text{nm} - 100\\,\\text{nm}',
      steps: [
        'Analisis peran tawas Al2(SO4)3: Dalam air terhidrolisis menghasilkan kation bermuatan tinggi Al³⁺. Partikel sol lumpur bermuatan negatif dinetralkan muatannya sehingga gaya tolak elektrostatik hilang, partikel bergabung membentuk flok dan mengendap (koagulasi) (Pernyataan A BENAR).',
        'Analisis karbon aktif: Karbon aktif memiliki luas permukaan pori yang sangat besar yang menyerap molekul bau dan racun pada permukaannya (fenomena adsorpsi) (Pernyataan B BENAR).',
        'Analisis Efek Tyndall: Ukuran partikel koloid (1 - 100 nm) sebanding dengan panjang gelombang cahaya tampak, menyebabkan berkas cahaya terhamburkan ke segala arah (Pernyataan C BENAR).',
        'Kestabilan koloid: Koloid lumpur stabil dan tidak mudah mengendap akibat tumbukan tak beraturan molekul pelarut (gerak Brown) dan tolak-menolak elektrostatik muatan negatif sesama partikel koloid (Pernyataan D BENAR).',
        'Penyaringan koloid: Partikel suspensi (> 100 nm) tertahan kertas saring biasa. Namun partikel koloid (1 - 100 nm) LOLOS kertas saring biasa dan hanya dapat disaring menggunakan membran ultrafiltrasi / semipermeabel. Pernyataan E SALAH.'
      ],
      calculation: '\\text{Ukuran Partikel: Larutan } (< 1\\,\\text{nm}) < \\text{Koloid } (1-100\\,\\text{nm}) < \\text{Suspensi } (> 100\\,\\text{nm})',
      finalAnswer: 'Pilihan yang benar adalah A, B, C, dan D.',
      whyOthersWrong: 'Pernyataan E salah karena partikel koloid berukuran jauh lebih kecil dari pori-pori kertas saring filter standar sehingga tidak dapat dipisahkan tanpa bantuan koagulan atau membran ultra.',
      misterJoQuickTrick: 'Trik membedakan koloid vs suspensi: "Kertas saring biasa menahan kopi tubruk (suspensi), tapi meloloskan susu atau air teh keruh (koloid)". Jadi opsi E pasti salah!'
    }
  },

  // Soal 30 - BS (Kimia Organik: Esterifikasi Fischer & Saponifikasi)
  {
    id: 30,
    number: 30,
    type: 'BS',
    category: 'Kimia Organik',
    subtopic: 'Reaksi Senyawa Karbon: Esterifikasi & Saponifikasi',
    competency: 'Reasoning',
    title: 'Sintesis Senyawa Ester Beraroma Pisang dan Reaksi Pembuatan Sabun',
    stimulus: {
      context: 'Senyawa ester (alkil alkanoat) banyak dimanfaatkan sebagai zat perisa aroma buah buatan di industri makanan, sedangkan reaksi hidrolisis basa terhadap trigliserida (ester asam lemak) mendasari pembuatan sabun cuci (saponifikasi).',
      reactionEquation: '\\text{Reaksi 1: } \\text{CH}_3\\text{COOH} + \\text{CH}_3(\\text{CH}_2)_4\\text{OH} \\xrightleftharpoons{\\text{H}_2\\text{SO}_4\\text{ pekat}} \\text{CH}_3\\text{COO}(\\text{CH}_2)_4\\text{CH}_3 + \\text{H}_2\\text{O} \\\\ \\text{Reaksi 2: Trigliserida} + 3\\text{NaOH} \\rightarrow 3\\text{Sabun (Garam Karboksilat)} + \\text{Gliserol}',
      visualNote: 'Reaksi 1 adalah esterifikasi Fischer yang bersifat bolak-balik (reversible) membutuhkan katalis asam pekat. Reaksi 2 adalah saponifikasi yang bersifat satu arah (irreversible).'
    },
    questionText: 'Berdasarkan mekanisme reaksi kimia organik di atas, tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 1,
        text: 'Pada Reaksi 1, penambahan asam sulfat pekat berfungsi sebagai katalis asam sekaligus sebagai zat higroskopis (penarik air) untuk menggeser kesetimbangan ke arah pembentukan ester.',
        isCorrect: true,
        explanation: 'H2SO4 pekat mempercepat laju reaksi dan mengikat molekul air (H2O) hasil samping sehingga menurut asas Le Chatelier reaksi bergeser ke kanan (rendemen ester meningkat).'
      },
      {
        id: 2,
        text: 'Nama resmi IUPAC dari senyawa ester beraroma buah pisang yang dihasilkan pada Reaksi 1 adalah pentil etanoat.',
        isCorrect: true,
        explanation: 'Ester dibentuk dari asam asetat/etanoat (CH3COO-) dan pentanol (CH3(CH2)4-), sehingga namanya adalah alkil alkanoat = pentil etanoat (amil asetat).'
      },
      {
        id: 3,
        text: 'Reaksi saponifikasi (Reaksi 2) menghasilkan produk samping berupa senyawa alkohol trivalen etilen glikol.',
        isCorrect: false,
        explanation: 'Produk samping reaksi saponifikasi trigliserida adalah GLISEROL (propana-1,2,3-triol), BUKAN etilen glikol (etana-1,2-diol yang beracun)!'
      }
    ],
    correctAnswer: 'BS-evaluated',
    pointWeight: 3,
    narration: {
      intro: 'Inilah soal pemungkas nomor 30! Kita tuntaskan latihan TKA Kimia 2026 dengan reaksi esterifikasi dan saponifikasi pembuatan sabun.',
      stimulus: 'Dua reaksi organik ditampilkan: sintesis ester pentil etanoat dan penyabunan trigliserida lemak.',
      clue: 'Perhatikan produk samping pembuatan sabun: trigliserida memiliki 3 atom karbon yang masing-masing mengikat gugus OH. Senyawa itu adalah gliserol, bukan etilen glikol!',
      discussion: 'Pernyataan 1 Benar: H2SO4 pekat berperan ganda sebagai katalis dan dehidrator penarik air untuk mendongkrak rendemen ester. Pernyataan 2 Benar: ester tersebut adalah pentil etanoat (amil asetat). Pernyataan 3 Salah: produk sampingan sabun adalah gliserol (gliserin / propana-1,2,3-triol), bukan etilen glikol.',
      quickTrick: 'Cara Cepat Mister Jo: Trigliserida punya kerangka 3 atom karbon, jadi alkoholnya wajib berkarbon 3 yaitu GLISEROL! Kalau etilen glikol itu cuma 2 atom karbon dan biasa dipakai untuk antibeku radiator. Pernyataan 3 jelas salah total!'
    },
    discussion: {
      problemId: 'Q-30',
      concept: 'Esterifikasi Fischer, Tata Nama Alkil Alkanoat, dan Saponifikasi Lemah Lemak',
      keyFormula: 'R-\\text{COOH} + R\'-\\text{OH} \\xrightleftharpoons{\\text{H}^+} R-\\text{COO}-R\' + \\text{H}_2\\text{O}',
      steps: [
        'Mekanisme Reaksi 1 (Esterifikasi Fischer): Asam asetat (CH3COOH) bereaksi dengan 1-pentanol (C5H11OH). H2SO4 pekat memprotonasi gugus karbonil (katalis) dan bersifat dehidrator kuat mengikat H2O. Karena air diikat, kuosien reaksi Q < K, kesetimbangan bergeser ke kanan dan rendemen ester meningkat drastis (Pernyataan 1 BENAR).',
        'Tata nama IUPAC produk ester: Alkil berasal dari gugus alkohol (-C5H11 = pentil). Alkanoat berasal dari gugus asam karboksilat (CH3COO- = etanoat). Nama IUPAC: pentil etanoat (nama trivial: amil asetat / aroma pisang) (Pernyataan 2 BENAR).',
        'Analisis Reaksi 2 (Saponifikasi): Lemak nabati/hewani adalah ester trigliserida dari asam lemak dengan propana-1,2,3-triol (gliserol). Hidrolisis dengan basa NaOH menghasilkan garam natrium karboksilat (sabun) dan GLISEROL (gliserin C3H8O3). Etilen glikol (C2H6O2) adalah senyawa berbeda yang beracun. Pernyataan 3 SALAH.'
      ],
      calculation: '\\text{Produk Samping Saponifikasi} = \\text{Gliserol } (\\text{CH}_2\\text{OH}-\\text{CHOH}-\\text{CH}_2\\text{OH})',
      finalAnswer: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      whyOthersWrong: 'Pernyataan 3 salah secara faktual karena hidrolisis ester trigliserida selalu melepaskan alkohol rantai 3 yaitu gliserol (gliserin), bukan etilen glikol.',
      misterJoQuickTrick: 'Trik nama sabun dan ester ala Mister Jo: Trigliserida -> TRI-gliserol! Alkoholnya selalu gliserol. Ingat aroma buah: pentil etanoat = aroma pisang, oktil etanoat = aroma jeruk, etil butirat = aroma nanas. Nomor 30 tuntas dengan gemilang!'
    }
  }
];
