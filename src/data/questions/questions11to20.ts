import { Question } from '../../types';

export const questions11to20: Question[] = [
  // Soal 11 - PGK (Kimia Analitik: Ksp & Pengendapan)
  {
    id: 11,
    number: 11,
    type: 'PGK',
    category: 'Kimia Analitik',
    subtopic: 'Kelarutan dan Hasil Kali Kelarutan (Ksp)',
    competency: 'Reasoning',
    title: 'Pemisahan Selektif Kation Logam Berat dalam Pengolahan Air Limbah',
    stimulus: {
      context: 'Suatu sampel air limbah industri pelapisan logam mengandung ion Ba²⁺, Ca²⁺, dan Pb²⁺ dengan konsentrasi masing-masing sebesar 1,0 × 10⁻³ M. Ke dalam 1,0 Liter sampel air limbah tersebut ditambahkan larutan encer Na2SO4 tetes demi tetes tanpa menyebabkan perubahan volume yang berarti (volume dianggap tetap 1,0 Liter).',
      table: {
        title: 'Data Tetapan Hasil Kali Kelarutan (Ksp) Garam Sulfat pada 25°C',
        headers: ['Senyawa Garam Sulfat', 'Nilai Ksp (25°C)'],
        rows: [
          ['Barium Sulfat (BaSO4)', '1,0 × 10⁻¹⁰'],
          ['Kalsium Sulfat (CaSO4)', '2,4 × 10⁻⁵'],
          ['Timbal(II) Sulfat (PbSO4)', '1,6 × 10⁻⁸']
        ]
      },
      visualNote: 'Suatu endapan mulai terbentuk tepat saat Kuosien Reaksi Qsp melampaui nilai Ksp garam tersebut (Qsp > Ksp).'
    },
    questionText: 'Berdasarkan data kuantitatif kelarutan di atas, tentukan seluruh pernyataan yang BENAR terkait proses penambahan ion sulfat! (Pilih semua jawaban yang benar)',
    options: [
      { key: 'A', text: 'Urutan kation yang mengendap pertama kali hingga terakhir adalah Ba²⁺, Pb²⁺, lalu Ca²⁺.' },
      { key: 'B', text: 'Garam BaSO4 mulai mengendap tepat saat konsentrasi ion sulfat [SO4²⁻] mencapai 1,0 × 10⁻⁷ M.' },
      { key: 'C', text: 'Ketika PbSO4 tepat mulai mengendap, ion Ba²⁺ dalam larutan sudah mengendap lebih dari 99%.' },
      { key: 'D', text: 'Kelarutan molar (s) CaSO4 dalam air murni lebih kecil dibandingkan kelarutan molar BaSO4.' },
      { key: 'E', text: 'Penambahan ion sulfat berlebih akan memperbesar kelarutan garam-garam sulfat tersebut karena pengaruh ion senama.' }
    ],
    correctAnswer: ['A', 'B', 'C'],
    pointWeight: 2,
    narration: {
      intro: 'Kita melangkah ke soal nomor 11 mengenai pemisahan selektif ion logam berat berbasis nilai Ksp.',
      stimulus: 'Tiga kation Ba2+, Ca2+, dan Pb2+ sama-sama memiliki konsentrasi 10 pangkat minus 3 M. Diberikan data Ksp sulfat masing-masing. Analisis urutan pengendapan dan persentase kation yang tersisa.',
      clue: 'Garam dengan Ksp terkecil membutuhkan ion sulfat paling sedikit untuk mengendap, sehingga akan mengendap paling awal. Hitung konsentrasi SO4 2- saat BaSO4 dan PbSO4 mulai mengendap.',
      discussion: 'Ksp BaSO4 = 10^-10, butuh [SO4^2-] = 10^-10 / 10^-3 = 10^-7 M (Opsi B Benar). Ksp PbSO4 = 1,6 x 10^-8, butuh [SO4^2-] = 1,6 x 10^-5 M. Ksp CaSO4 = 2,4 x 10^-5, butuh [SO4^2-] = 2,4 x 10^-2 M. Maka urutan pengendapannya adalah Ba2+, Pb2+, lalu Ca2+ (Opsi A Benar). Saat PbSO4 mulai mengendap ([SO4^2-] = 1,6 x 10^-5 M), sisa [Ba2+] = 10^-10 / (1,6 x 10^-5) = 6,25 x 10^-6 M. Persentase Ba2+ yang tersisa = (6,25 x 10^-6 / 10^-3) x 100% = 0,625%, artinya sudah mengendap 99,375% (Opsi C Benar). D salah karena Ksp CaSO4 paling besar, E salah karena ion senama justru memperkecil kelarutan.',
      quickTrick: 'Cara Cepat Ala Mister Jo: Karena semua kation bervalensi sama (tipe garam 1:1), Ksp paling kecil = kelarutan paling kecil = paling cepat mengendap! Urutan Ksp: 10^-10 (Ba) < 1,6 x 10^-8 (Pb) < 2,4 x 10^-5 (Ca). Otomatis Ba lalu Pb lalu Ca. Opsi A dan B langsung pasti benar!'
    },
    discussion: {
      problemId: 'Q-11',
      concept: 'Pengendapan Bertingkat, Kuosien Reaksi (Qsp), dan Pengaruh Ion Senama',
      keyFormula: '[\\text{SO}_4^{2-}]_{\\text{pengendapan}} = \\frac{K_{sp}}{[\\text{M}^{2+}]}, \\quad Q_{sp} = [\\text{M}^{2+}][\\text{SO}_4^{2-}]',
      steps: [
        'Hitung [SO4²⁻] minimum untuk mulai mengendapkan masing-masing ion dari konsentrasi 1,0 x 10⁻³ M:',
        '[SO4²⁻] untuk BaSO4 = 1,0 x 10⁻¹⁰ / 1,0 x 10⁻³ = 1,0 x 10⁻⁷ M (Pernyataan B BENAR).',
        '[SO4²⁻] untuk PbSO4 = 1,6 x 10⁻⁸ / 1,0 x 10⁻³ = 1,6 x 10⁻⁵ M.',
        '[SO4²⁻] untuk CaSO4 = 2,4 x 10⁻⁵ / 1,0 x 10⁻³ = 2,4 x 10⁻² M.',
        'Urutan pengendapan berdasarkan kebutuhan [SO4²⁻] terendah: BaSO4 mengendap pertama, lalu PbSO4, dan terakhir CaSO4 (Pernyataan A BENAR).',
        'Uji sisa ion Ba²⁺ saat PbSO4 tepat mulai mengendap ([SO4²⁻] = 1,6 x 10⁻⁵ M): [Ba²⁺]_sisa = Ksp(BaSO4) / [SO4²⁻] = 1,0 x 10⁻¹⁰ / 1,6 x 10⁻⁵ = 6,25 x 10⁻⁶ M. Fraksi Ba²⁺ yang masih terlarut = (6,25 x 10⁻⁶ / 1,0 x 10⁻³) x 100% = 0,625%. Artinya, Ba²⁺ yang sudah mengendap = 100% - 0,625% = 99,375% (> 99%) (Pernyataan C BENAR).',
        'Pernyataan D SALAH karena Ksp CaSO4 (2,4 x 10⁻⁵) jauh lebih besar daripada BaSO4 (1,0 x 10⁻¹⁰), sehingga kelarutan CaSO4 justru jauh lebih besar.',
        'Pernyataan E SALAH karena penambahan ion senama sulfat menggeser kesetimbangan ke arah padatan (kiri), yang memperkecil kelarutan, bukan memperbesar.'
      ],
      calculation: '[\\text{SO}_4^{2-}]_{\\text{Ba}} = 10^{-7}\\,\\text{M}, \\quad [\\text{SO}_4^{2-}]_{\\text{Pb}} = 1{,}6 \\times 10^{-5}\\,\\text{M}, \\quad \\% \\text{ pengendapan Ba}^{2+} = 99{,}375\\%',
      finalAnswer: 'Pilihan yang benar adalah A, B, dan C.',
      whyOthersWrong: 'Opsi D salah karena garam tipe sama dengan Ksp lebih besar memiliki kelarutan lebih tinggi. Opsi E melanggar hukum asas Le Chatelier tentang efek ion senama.',
      misterJoQuickTrick: 'Trik kilat selektif Ksp: Bandingkan rasio Ksp antara Pb dan Ba: (1,6 x 10⁻⁸) / (1,0 x 10⁻¹⁰) = 160 kali lipat. Jadi ion sulfat yang dibutuhkan Pb sudah 160 kali lipat kebutuhan Ba, yang berarti Ba sudah habis mengendap (>99%) jauh sebelum Pb mulai mengendap!'
    }
  },

  // Soal 12 - BS (Kimia Dasar: Sistem Periodik & Sifat Keperiodikan)
  {
    id: 12,
    number: 12,
    type: 'BS',
    category: 'Kimia Dasar',
    subtopic: 'Sistem Periodik Unsur & Sifat Periodik',
    competency: 'Reasoning',
    title: 'Analisis Tren Jari-Jari Atom dan Lonjakan Energi Ionisasi Bertingkat',
    stimulus: {
      context: 'Tiga unsur hipotesis X, Y, dan Z terletak pada periode ketiga sistem periodik unsur (dari golongan IA sampai VIIIA). Data energi ionisasi bertingkat (IE₁ hingga IE₄ dalam kJ/mol) dan jari-jari atom ketiga unsur tersebut disajikan dalam tabel berikut:',
      table: {
        title: 'Data Energi Ionisasi Bertingkat (kJ/mol) dan Jari-Jari Atom (pm)',
        headers: ['Unsur', 'IE₁', 'IE₂', 'IE₃', 'IE₄', 'Jari-Jari (pm)'],
        rows: [
          ['Unsur X', '496', '4562', '6910', '9543', '186 pm'],
          ['Unsur Y', '738', '1451', '7733', '10540', '160 pm'],
          ['Unsur Z', '578', '1817', '2745', '11577', '143 pm']
        ]
      },
      visualNote: 'Lonjakan drastis energi ionisasi terjadi ketika elektron mulai dilepaskan dari kulit bagian dalam yang lebih dekat ke inti dan berkonfigurasi gas mulia yang stabil.'
    },
    questionText: 'Berdasarkan data tabel keperiodikan tersebut, tentukan apakah masing-masing pernyataan ilmiah berikut BENAR atau SALAH!',
    statements: [
      {
        id: 1,
        text: 'Unsur X merupakan unsur golongan IA (logam alkali) dan unsur Y merupakan unsur golongan IIA (logam alkali tanah).',
        isCorrect: true,
        explanation: 'Pada unsur X, lonjakan energi ionisasi sangat drastis terjadi antara IE1 (496) ke IE2 (4562) hampir 10x lipat, menandakan 1 elektron valensi (golongan IA). Pada Y, lonjakan drastis terjadi setelah IE2 (1451 ke 7733), menandakan 2 elektron valensi (golongan IIA).'
      },
      {
        id: 2,
        text: 'Keelektronegatifan unsur X lebih besar dibandingkan keelektronegatifan unsur Z.',
        isCorrect: false,
        explanation: 'Dalam satu periode dari kiri ke kanan, muatan inti efektif bertambah sehingga jari-jari mengecil dan keelektronegatifan meningkat. Unsur Z terletak di sebelah kanan X (jari-jari Z 143 pm < X 186 pm), sehingga Z lebih elektronegatif daripada X.'
      },
      {
        id: 3,
        text: 'Unsur Z cenderung membentuk kation stabil Z³⁺ saat berikatan dengan unsur nonlogam halogen membentuk senyawa ionik ZCl₃.',
        isCorrect: true,
        explanation: 'Unsur Z mengalami lonjakan energi ionisasi setelah IE3 (2745 ke 11577), sehingga memiliki 3 elektron valensi (golongan IIIA, seperti Aluminium). Logam ini mudah melepas 3 elektron membentuk Z³⁺ (senyawa ZCl3).'
      }
    ],
    correctAnswer: 'BS-evaluated',
    pointWeight: 3,
    narration: {
      intro: 'Nomor 12 menguji ketajaman membaca data energi ionisasi bertingkat pada periode 3 sistem periodik unsur.',
      stimulus: 'Tabel menampilkan nilai IE1 sampai IE4 untuk tiga unsur X, Y, dan Z. Cari di mana letak lonjakan tajam energinya untuk menentukan jumlah elektron valensi dan golongannya.',
      clue: 'Lonjakan dari 496 ke 4562 adalah tanda khas golongan 1A. Lonjakan dari 1451 ke 7733 menunjukkan golongan 2A. Dan lonjakan setelah IE3 menunjukkan golongan 3A.',
      discussion: 'Pernyataan 1 Benar: X adalah golongan IA (seperti Natrium) dan Y adalah golongan IIA (seperti Magnesium). Pernyataan 2 Salah: karena Z berada lebih ke kanan dibanding X, keelektronegatifan Z justru lebih tinggi daripada X. Pernyataan 3 Benar: Z memiliki 3 elektron valensi sehingga kation stabilnya adalah Z 3+ membentuk senyawa ZCl3.',
      quickTrick: 'Cara Cepat Mister Jo: Lonjakan di IE berapa? Kalau lonjak di IE-2 -> valensi 1 (IA = Na). Lonjak di IE-3 -> valensi 2 (IIA = Mg). Lonjak di IE-4 -> valensi 3 (IIIA = Al). Golongan IA adalah logam paling elektropositif, jadi keelektronegatifannya paling rendah. Pernyataan 1 Benar, 2 Salah, 3 Benar!'
    },
    discussion: {
      problemId: 'Q-12',
      concept: 'Energi Ionisasi Bertingkat, Konfigurasi Kulit Gas Mulia, dan Tren Sifat Periodik',
      keyFormula: '\\text{Jumlah Elektron Valensi} = \\text{Nomor IE tepat sebelum lonjakan drastis}',
      steps: [
        'Analisis Unsur X: Lonjakan IE1 -> IE2 (496 -> 4562, naik 9,2x). Artinya elektron ke-2 diambil dari kulit dalam. X memiliki 1 elektron valensi (Golongan IA, yaitu Na).',
        'Analisis Unsur Y: Lonjakan IE2 -> IE3 (1451 -> 7733, naik 5,3x). Y memiliki 2 elektron valensi (Golongan IIA, yaitu Mg). Pernyataan 1 BENAR.',
        'Analisis Unsur Z: Lonjakan IE3 -> IE4 (2745 -> 11577, naik 4,2x). Z memiliki 3 elektron valensi (Golongan IIIA, yaitu Al).',
        'Analisis tren keelektronegatifan dalam satu periode (kiri ke kanan: X -> Y -> Z): Jari-jari berkurang (186 pm -> 160 pm -> 143 pm), tarikan inti terhadap pasangan elektron ikatan semakin kuat, sehingga keelektronegatifan Z > Y > X. Pernyataan 2 ("X lebih besar dari Z") adalah SALAH.',
        'Sifat ikatan Z: Dengan 3 elektron valensi (Al), Z melepas 3 elektron mencapai oktet [Ne] membentuk ion Z³⁺. Rumus senyawa dengan Cl⁻ adalah ZCl3 (Pernyataan 3 BENAR).'
      ],
      calculation: '\\text{Unsur X: Golongan IA (Na)}; \\quad \\text{Unsur Y: Golongan IIA (Mg)}; \\quad \\text{Unsur Z: Golongan IIIA (Al)}',
      finalAnswer: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR.',
      whyOthersWrong: 'Pernyataan 2 salah karena logam alkali golongan 1 memiliki keelektronegatifan terendah dalam periodenya (paling elektropositif).',
      misterJoQuickTrick: 'Trik lonjakan angka: Carilah perbedaan rasio terbesar! 4562/496 = 9,2 (pasti IA). 7733/1451 = 5,3 (pasti IIA). 11577/2745 = 4,2 (pasti IIIA). Dari kiri ke kanan elektronegativitas naik, jadi Z pasti lebih elektronegatif dari X!'
    }
  },

  // Soal 13 - PG (Kimia Fisik: Termokimia Energi Ikatan)
  {
    id: 13,
    number: 13,
    type: 'PG',
    category: 'Kimia Fisik',
    subtopic: 'Termokimia & Energi Ikatan',
    competency: 'Applying',
    title: 'Perhitungan Perubahan Entalpi Reaksi Adisi Klorinasi Gas Etena',
    stimulus: {
      context: 'Senyawa 1,2-dikloroetana merupakan pelarut industri penting dan zat antara dalam pembuatan monomer vinil klorida untuk plastik PVC. Senyawa ini disintesis melalui reaksi adisi gas klorin (Cl2) pada gas etena (C2H4) menurut persamaan reaksi:',
      reactionEquation: '\\text{CH}_2=\\text{CH}_2(g) + \\text{Cl}-\\text{Cl}(g) \\rightarrow \\text{CH}_2\\text{Cl}-\\text{CH}_2\\text{Cl}(g)',
      table: {
        title: 'Data Energi Ikatan Rata-Rata (kJ/mol)',
        headers: ['Jenis Ikatan Kimia', 'Energi Ikatan (kJ/mol)'],
        rows: [
          ['C = C (ikatan rangkap dua)', '612'],
          ['C – C (ikatan tunggal)', '348'],
          ['C – H', '414'],
          ['Cl – Cl', '242'],
          ['C – Cl', '328']
        ]
      }
    },
    questionText: 'Berdasarkan data energi ikatan rata-rata tersebut, perubahan entalpi (ΔH) untuk reaksi klorinasi etena adalah...',
    options: [
      { key: 'A', text: '-150 kJ/mol' },
      { key: 'B', text: '+150 kJ/mol' },
      { key: 'C', text: '-300 kJ/mol' },
      { key: 'D', text: '+300 kJ/mol' },
      { key: 'E', text: '-86 kJ/mol' }
    ],
    correctAnswer: 'A',
    pointWeight: 1,
    narration: {
      intro: 'Soal nomor 13 menyajikan perhitungan termokimia menggunakan energi ikatan rata-rata.',
      stimulus: 'Reaksi adisi etena dengan klorin mengubah ikatan rangkap C=C dan ikatan Cl-Cl menjadi ikatan tunggal C-C dan dua ikatan C-Cl.',
      clue: 'Gunakan prinsip Mister Jo: energi pemutusan ikatan di sebelah kiri dikurangi energi pembentukan ikatan di sebelah kanan. Ikatan C-H tidak berubah di kedua sisi, jadi bisa langsung dicoret!',
      discussion: 'Di sebelah kiri diputus 1 ikatan C=C (612 kJ) dan 1 ikatan Cl-Cl (242 kJ), total pemutusan = 854 kJ. Di sebelah kanan terbentuk 1 ikatan C-C (348 kJ) dan 2 ikatan C-Cl (2 x 328 = 656 kJ), total pembentukan = 1004 kJ. Nilai delta H = pemutusan dikurang pembentukan = 854 dikurang 1004 = -150 kJ/mol.',
      quickTrick: 'Cara Cepat Mister Jo: Jangan hitung 4 ikatan C-H karena nilainya sama persis di kiri dan kanan! Langsung: delta H = [ (C=C) + (Cl-Cl) ] - [ (C-C) + 2(C-Cl) ] = [ 612 + 242 ] - [ 348 + 656 ] = 854 - 1004 = -150 kJ/mol. Cepat dan bebas selip di opsi A!'
    },
    discussion: {
      problemId: 'Q-13',
      concept: 'Hukum Kekekalan Energi dan Perhitungan Entalpi dari Energi Ikatan',
      keyFormula: '\\Delta H = \\sum D_{\\text{pemutusan (reaktan)}} - \\sum D_{\\text{pembentukan (produk)}}',
      steps: [
        'Uraikan seluruh ikatan kovalen yang terlibat pada kedua sisi reaksi:',
        'Reaktan (kiri): 4 ikatan C-H, 1 ikatan C=C, dan 1 ikatan Cl-Cl.',
        'Produk (kanan): 4 ikatan C-H, 1 ikatan C-C, dan 2 ikatan C-Cl.',
        'Sederhanakan perhitungan: 4 ikatan C-H di sisi kiri dan kanan saling meniadakan.',
        'Energi pemutusan ikatan (kiri): D_kiri = D(C=C) + D(Cl-Cl) = 612 + 242 = 854 kJ/mol.',
        'Energi pembentukan ikatan (kanan): D_kanan = D(C-C) + 2 x D(C-Cl) = 348 + 2(328) = 348 + 656 = 1.004 kJ/mol.',
        'Hitung ΔH reaksi: ΔH = D_kiri - D_kanan = 854 - 1.004 = -150 kJ/mol (reaksi eksotermik).'
      ],
      calculation: '\\Delta H = [612 + 242] - [348 + 2(328)] = 854 - 1004 = -150\\,\\text{kJ/mol}',
      finalAnswer: 'Opsi A benar: -150 kJ/mol.',
      whyOthersWrong: 'Opsi B (+150 kJ/mol) salah tanda karena terbalik mengurangkan kanan dikurang kiri. Opsi C, D, dan E terjadi jika lupa mengalikan koefisien 2 pada ikatan C-Cl atau salah memasukkan nilai ikatan C-C.',
      misterJoQuickTrick: 'Trik pemutus ikatan: Ingat rumus "Kiri Kurang Kanan" (KiKuKa) untuk energi ikatan! Cukup hitung ikatan yang BERUBAH: (612 + 242) - (348 + 656) = 854 - 1004 = -150 kJ/mol!'
    }
  },

  // Soal 14 - PGK (Kimia Organik: Isomer & Identifikasi Gugus Fungsi C4H10O)
  {
    id: 14,
    number: 14,
    type: 'PGK',
    category: 'Kimia Organik',
    subtopic: 'Isomer Fungsi & Identifikasi Gugus Fungsi Senyawa Karbon',
    competency: 'Reasoning',
    title: 'Identifikasi Laboratorium Dua Isomer Senyawa Karbon C4H10O',
    stimulus: {
      context: 'Dua botol reagen berlabel Senyawa P dan Senyawa Q di laboratorium kimia organik diketahui memiliki rumus molekul yang sama, yaitu C4H10O. Untuk mengidentifikasi struktur gugus fungsinya, dilakukan uji reaksi kimia sederhana dengan hasil sebagai berikut:',
      table: {
        title: 'Hasil Uji Laboratorium Senyawa P dan Q',
        headers: ['Uji Karakteristik', 'Senyawa P', 'Senyawa Q'],
        rows: [
          ['Reaksi dengan logam Natrium (Na)', 'Menghasilkan gelembung gas H2', 'Tidak bereaksi'],
          ['Reaksi dengan PCl5', 'Menghasilkan gas asam HCl', 'Menghasilkan senyawa haloalkana tanpa gas HCl'],
          ['Oksidasi bertahap dengan KMnO4 / H+', 'Menghasilkan senyawa berbau asam yang mengubah lakmus biru jadi merah', 'Tidak dapat dioksidasi']
        ]
      },
      visualNote: 'Rumus CnH2n+2O merupakan rumus umum pasangan isomer gugus fungsi antara ALKOHOL (alkanol) dan ETER (alkoksialkana).'
    },
    questionText: 'Berdasarkan data uji kimia di atas, manakah kesimpulan ilmiah berikut yang BENAR? (Pilih semua jawaban yang benar)',
    options: [
      { key: 'A', text: 'Senyawa P memiliki gugus fungsi hidroksil (-OH) yang tergolong sebagai alkohol primer.' },
      { key: 'B', text: 'Senyawa Q memiliki gugus fungsi eter (-O-) yaitu alkoksialkana.' },
      { key: 'C', text: 'Struktur molekul Senyawa P yang paling sesuai dengan data reaksi adalah 1-butanol.' },
      { key: 'D', text: 'Titik didih Senyawa Q lebih tinggi daripada Senyawa P karena Senyawa Q membentuk ikatan hidrogen antarmolekul.' },
      { key: 'E', text: 'Jika Senyawa Q adalah dietil eter, senyawa tersebut bersifat relatif inert terhadap zat oksidator.' }
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    pointWeight: 2,
    narration: {
      intro: 'Tantangan ke-14 membawa kita ke laboratorium kimia organik untuk membedakan isomer senyawa C4H10O.',
      stimulus: 'Senyawa P bereaksi dengan logam natrium dan dioksidasi menjadi asam karboksilat, sedangkan senyawa Q tidak bereaksi dengan logam natrium maupun oksidator.',
      clue: 'Reaksi dengan logam natrium membebaskan gas H2 adalah ciri khas alkohol. Karena oksidasi menghasilkan asam karboksilat, maka P pasti alkohol primer! Senyawa Q yang tidak bereaksi adalah eter.',
      discussion: 'A benar karena P adalah alkohol primer yang bisa dioksidasi jadi aldehid lalu asam karboksilat. B benar karena Q adalah eter. C benar karena 1-butanol adalah alkohol primer berkarbon 4 (C4H10O). D salah karena justru alkohol P yang punya ikatan hidrogen sehingga titik didih P lebih tinggi dari eter Q. E benar karena eter bersifat inert terhadap oksidator KMnO4.',
      quickTrick: 'Cara Cepat Mister Jo: Kunci reaksi alkohol vs eter: Alkohol bereaksi dengan Na membebaskan gas H2, eter cuek bebek alias tidak bereaksi! Titik didih alkohol selalu jauh lebih tinggi karena ada ikatan hidrogen. Jadi opsi D pasti salah! Sisanya A, B, C, dan E langsung centang!'
    },
    discussion: {
      problemId: 'Q-14',
      concept: 'Isomerisme Gugus Fungsi CnH2n+2O dan Karakteristik Reaksi Alkohol vs Eter',
      keyFormula: 'C_n H_{2n+2}O: \\quad R-\\text{OH (Alkohol)} \\quad \\text{vs} \\quad R-\\text{O}-R\' \\text{ (Eter)}',
      steps: [
        'Identifikasi golongan: Rumus molekul C4H10O sesuai dengan rumus umum CnH2n+2O (alkohol atau eter).',
        'Analisis Senyawa P: Bereaksi dengan logam Na melepaskan gas H2 (2 R-OH + 2 Na -> 2 R-ONa + H2). Bereaksi dengan PCl5 menghasilkan asap putih HCl. Dioksidasi menghasilkan asam karboksilat (mengubah lakmus biru jadi merah). Ini adalah ciri ALKOHOL PRIMER (R-CH2OH). Struktur yang tepat adalah 1-butanol (Pernyataan A dan C BENAR).',
        'Analisis Senyawa Q: Tidak bereaksi dengan logam Na dan tidak melepaskan gas HCl saat ditambah PCl5. Tidak dapat dioksidasi oleh KMnO4. Ini adalah ciri khas ETER (alkoksialkana), misalnya dietil eter atau metil propil eter (Pernyataan B dan E BENAR).',
        'Evaluasi titik didih: Alkohol memiliki ikatan hidrogen antarmolekul yang kuat, sedangkan eter hanya memiliki gaya dipol-dipol yang lebih lemah. Titik didih 1-butanol (~118°C) jauh lebih tinggi daripada dietil eter (~34,6°C). Pernyataan D SALAH.'
      ],
      calculation: 'P: \\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{OH} \\, (\\text{1-butanol}); \\quad Q: \\text{CH}_3\\text{CH}_2-\\text{O}-\\text{CH}_2\\text{CH}_3 \\, (\\text{dietil eter})',
      finalAnswer: 'Pilihan yang benar adalah A, B, C, dan E.',
      whyOthersWrong: 'Pernyataan D salah total karena eter tidak memiliki ikatan hidrogen antar sesama molekulnya, sehingga titik didih eter selalu lebih rendah dibandingkan alkohol isomernya.',
      misterJoQuickTrick: 'Trik membedakan Alkohol vs Eter: Alkohol = Ramah (bereaksi dengan Na menghasilkan H2, bereaksi PCl5 ada asap HCl, titik didih tinggi ada ikatan H). Eter = Sombong (tidak bereaksi dengan Na, titik didih rendah). Opsi D yang membalik sifat titik didih langsung eliminasi!'
    }
  },

  // Soal 15 - BS (Kimia Dasar: Hukum Dasar Kimia Pembakaran Gas Gay-Lussac)
  {
    id: 15,
    number: 15,
    type: 'BS',
    category: 'Kimia Dasar',
    subtopic: 'Hukum-Hukum Dasar Kimia & Stoikiometri Gas',
    competency: 'Applying',
    title: 'Penentuan Rumus Molekul Gas Hidrokarbon Melalui Reaksi Pembakaran',
    stimulus: {
      context: 'Sebanyak 10 mL suatu gas hidrokarbon (CxHy) dibakar sempurna dengan 70 mL gas oksigen (O2) berlebih pada suhu dan tekanan konstan. Setelah pembakaran selesai dan campuran didinginkan ke suhu awal sehingga uap air mengembun, volume gas yang tersisa diukur sebesar 50 mL. Ketika gas sisa tersebut dilewatkan ke dalam tabung berisi larutan KOH berlebih, volume gas menyusut sebanyak 40 mL dan menyisakan 10 mL gas yang dapat menyalakan bara api (gas O2 sisa).',
      reactionEquation: 'C_x H_y(g) + \\left(x + \\frac{y}{4}\\right)O_2(g) \\rightarrow x\\text{CO}_2(g) + \\frac{y}{2}\\text{H}_2\\text{O}(l)',
      visualNote: 'Penyusutan volume oleh larutan KOH setara dengan volume gas CO2 yang diserap, yaitu 40 mL. Gas O2 sisa = 10 mL.'
    },
    questionText: 'Berdasarkan hukum perbandingan volume Gay-Lussac dan hipotesis Avogadro, tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 1,
        text: 'Volume gas karbon dioksida (CO2) yang dihasilkan dari pembakaran tersebut adalah 40 mL.',
        isCorrect: true,
        explanation: 'Larutan basa KOH menyerap gas asam CO2 membentuk K2CO3. Penyusutan volume sebesar 40 mL membuktikan volume gas CO2 adalah 40 mL.'
      },
      {
        id: 2,
        text: 'Volume gas oksigen (O2) murni yang habis bereaksi dengan hidrokarbon adalah 60 mL.',
        isCorrect: true,
        explanation: 'Volume O2 awal = 70 mL, dan tersisa 10 mL gas O2 yang menyalakan bara api. Maka volume O2 yang bereaksi = 70 - 10 = 60 mL.'
      },
      {
        id: 3,
        text: 'Rumus molekul gas hidrokarbon tersebut adalah C4H10 (butana).',
        isCorrect: false,
        explanation: 'Perbandingan volume: CxHy : O2 : CO2 = 10 : 60 : 40 = 1 : 6 : 4. Koefisien CO2 = x = 4. Koefisien O2 = x + y/4 = 6 => 4 + y/4 = 6 => y/4 = 2 => y = 8. Maka rumus molekulnya adalah C4H8 (butena), bukan C4H10!'
      }
    ],
    correctAnswer: 'BS-evaluated',
    pointWeight: 3,
    narration: {
      intro: 'Soal nomor 15 bertipe Benar-Salah tentang Hukum Gay-Lussac pada pembakaran gas hidrokarbon.',
      stimulus: 'Sebanyak 10 mL gas hidrokarbon dibakar dengan 70 mL O2. Gas CO2 yang terserap KOH adalah 40 mL dan tersisa 10 mL gas O2.',
      clue: 'Perbandingan volume gas pada T dan P sama setara dengan koefisien reaksi setaranya! Bandingkan volume CxHy terhadap CO2 dan O2.',
      discussion: 'Pernyataan 1 Benar: KOH menyerap 40 mL CO2. Pernyataan 2 Benar: O2 yang bereaksi = 70 dikurang 10 = 60 mL. Pernyataan 3 Salah: rasio koefisien CxHy : O2 : CO2 = 10 : 60 : 40 = 1 : 6 : 4. Nilai x = 4, dan 4 + y/4 = 6 menghasilkan y = 8. Jadi senyawanya adalah C4H8, bukan C4H10.',
      quickTrick: 'Cara Cepat Mister Jo: 10 mL hidrokarbon menghasilkan 40 mL CO2, artinya 1 molekul menghasilkan 4 CO2 -> atom C = 4! O2 yang bereaksi = 70 - 10 = 60 mL (koefisien 6). Oksigen dipakai di CO2 adalah 4 x 2 = 8 atom O. Sisa atom O untuk H2O adalah (6 x 2) - 8 = 4 atom O. Karena 4 H2O mengikat 8 H, maka hidrokarbonnya C4H8! Pernyataan 3 jelas salah!'
    },
    discussion: {
      problemId: 'Q-15',
      concept: 'Hukum Gay-Lussac, Hipotesis Avogadro, dan Stoikiometri Pembakaran Hidrokarbon',
      keyFormula: '\\frac{V_{\\text{gas 1}}}{V_{\\text{gas 2}}} = \\frac{\\text{koefisien 1}}{\\text{koefisien 2}}, \\quad C_x H_y + \\left(x + \\frac{y}{4}\\right)O_2 \\rightarrow x CO_2 + \\frac{y}{2} H_2 O',
      steps: [
        'Hitung volume CO2: Larutan KOH menyerap CO2 (2KOH + CO2 -> K2CO3 + H2O). Volume berkurang 40 mL, jadi V(CO2) = 40 mL (Pernyataan 1 BENAR).',
        'Hitung volume O2 bereaksi: Gas yang tersisa setelah penyerapan KOH adalah gas O2 sisa = 10 mL. V(O2 bereaksi) = V(O2 mula-mula) - V(O2 sisa) = 70 mL - 10 mL = 60 mL (Pernyataan 2 BENAR).',
        'Buat perbandingan koefisien berdasarkan volume gas (Gay-Lussac): V(CxHy) : V(O2) : V(CO2) = 10 mL : 60 mL : 40 mL = 1 : 6 : 4.',
        'Persamaan reaksi setara: 1 CxHy + 6 O2 -> 4 CO2 + (y/2) H2O.',
        'Penyetaraan atom C: x = 4.',
        'Penyetaraan atom O: 6 x 2 = (4 x 2) + (y/2) => 12 = 8 + y/2 => y/2 = 4 => y = 8.',
        'Rumus molekul gas hidrokarbon adalah C4H8 (bisa 1-butena, 2-butena, atau siklobutana), BUKAN C4H10 (Pernyataan 3 SALAH).'
      ],
      calculation: 'x = \\frac{40}{10} = 4; \\quad x + \\frac{y}{4} = \\frac{60}{10} = 6 \\Rightarrow 4 + \\frac{y}{4} = 6 \\Rightarrow y = 8 \\Rightarrow C_4 H_8',
      finalAnswer: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      whyOthersWrong: 'Pernyataan 3 salah secara stoikiometris karena menghasilkan C4H8 dengan 1 ikatan rangkap/siklik, bukan alkana jenuh C4H10.',
      misterJoQuickTrick: 'Trik pembakaran gas hidrokarbon 10 detik: Koefisien C = V(CO2) / V(sampel) = 40 / 10 = 4. Koefisien H = 4 x [ (V(O2) / V(sampel)) - x ] = 4 x [ 6 - 4 ] = 8! Langsung dapat C4H8 tanpa menulis persamaan reaksi panjang lebar!'
    }
  },

  // Soal 16 - PG (Kimia Analitik: Sifat Koligatif Larutan)
  {
    id: 16,
    number: 16,
    type: 'PG',
    category: 'Kimia Analitik',
    subtopic: 'Sifat Koligatif Larutan & Penurunan Titik Beku',
    competency: 'Applying',
    title: 'Penentuan Massa Molar Zat Aditif Antibeku dengan Penurunan Titik Beku',
    stimulus: {
      context: 'Di daerah beriklim dingin, cairan pendingin radiator mobil ditambahkan zat antibeku nonelektrolit agar air pendingin tidak membeku pada musim salju. Seorang mekanik menguji suatu sampel zat aditif nonelektrolit X baru dengan melarutkan 31 gram zat X ke dalam 500 gram air murni. Larutan tersebut diuji di laboratorium dan mulai membeku pada suhu -1,86°C. Diketahui tetapan penurunan titik beku molal air Kf = 1,86 °C/m dan titik beku air murni = 0,00°C.',
      reactionEquation: '\\Delta T_f = T_f^\\circ - T_f = K_f \\cdot m',
      visualNote: 'Penurunan titik beku larutan ΔTf = 0,00°C - (-1,86°C) = 1,86°C. Pelarut air p = 500 gram.'
    },
    questionText: 'Berdasarkan data eksperimen sifat koligatif larutan tersebut, massa molar (Mr) dari zat aditif antibeku X adalah...',
    options: [
      { key: 'A', text: '31 g/mol' },
      { key: 'B', text: '62 g/mol' },
      { key: 'C', text: '93 g/mol' },
      { key: 'D', text: '124 g/mol' },
      { key: 'E', text: '180 g/mol' }
    ],
    correctAnswer: 'B',
    pointWeight: 1,
    narration: {
      intro: 'Kita beralih ke soal nomor 16 mengenai sifat koligatif larutan dan perhitungan massa molekul relatif Mr.',
      stimulus: 'Sebanyak 31 gram zat nonelektrolit dilarutkan dalam 500 gram air dan membeku pada suhu minus 1,86 derajat Celsius dengan Kf air 1,86.',
      clue: 'Perhatikan penurunan titik beku delta Tf adalah 1,86 derajat Celsius, tepat sama dengan nilai Kf air! Ini berarti molalitas larutan tepat bernilai 1 molal.',
      discussion: 'Delta Tf = Kf x m. Karena delta Tf = 1,86 dan Kf = 1,86, maka molalitas m = 1,86 / 1,86 = 1 molal (1 mol zat per 1000 gram air). Karena dilarutkan dalam 500 gram air (setengah kilogram), maka mol zat terlarut = 1 molal x 0,5 kg = 0,5 mol. Massa zat = 31 gram, sehingga Mr = massa / mol = 31 / 0,5 = 62 g/mol (senyawa etilen glikol).',
      quickTrick: 'Cara Cepat Mister Jo: Delta Tf = Kf artinya molalitas = 1 m! Molalitas 1 m butuh 1 mol per 1000 gram pelarut. Di sini pelarutnya cuma 500 gram, jadi 31 gram itu adalah 0,5 mol. Kalau 0,5 mol = 31 gram, maka 1 mol = 31 dikali 2 = 62 gram/mol! Langsung pilih B!'
    },
    discussion: {
      problemId: 'Q-16',
      concept: 'Sifat Koligatif Larutan Nonelektrolit dan Penentuan Massa Molar',
      keyFormula: '\\Delta T_f = K_f \\cdot \\frac{\\text{massa}}{M_r} \\cdot \\frac{1000}{p(\\text{gram})}',
      steps: [
        'Hitung penurunan titik beku larutan: ΔTf = Tf° - Tf = 0,00°C - (-1,86°C) = 1,86°C.',
        'Karena zat X adalah nonelektrolit, faktor Van\'t Hoff i = 1.',
        'Substitusikan ke persamaan koligatif: 1,86 = 1,86 x (31 / Mr) x (1000 / 500).',
        'Bagi kedua ruas dengan 1,86: 1 = (31 / Mr) x 2.',
        '1 = 62 / Mr => Mr = 62 g/mol (senyawa tersebut adalah etilen glikol C2H6O2).'
      ],
      calculation: 'M_r = \\frac{K_f \\times \\text{massa} \\times 1000}{\\Delta T_f \\times p} = \\frac{1{,}86 \\times 31 \\times 1000}{1{,}86 \\times 500} = 62\\,\\text{g/mol}',
      finalAnswer: 'Opsi B benar: 62 g/mol.',
      whyOthersWrong: 'Opsi A (31 g/mol) salah jika lupa memperhitungkan bahwa pelarut air adalah 500 gram (faktor 2). Opsi D (124 g/mol) salah jika faktor pengali pelarut terbalik. Opsi E adalah Mr glukosa.',
      misterJoQuickTrick: 'Trik pembatalan cepat: Begitu melihat angka ΔTf = 1,86 sama persis dengan Kf = 1,86, langsung coret keduanya! Sisanya: Mr = massa x (1000 / p) = 31 x (1000 / 500) = 31 x 2 = 62 g/mol!'
    }
  },

  // Soal 17 - PGK (Kimia Dasar: Struktur Lewis, Muatan Formal & Resonansi)
  {
    id: 17,
    number: 17,
    type: 'PGK',
    category: 'Kimia Dasar',
    subtopic: 'Struktur Lewis, Muatan Formal & Resonansi',
    competency: 'Reasoning',
    title: 'Evaluasi Struktur Resonansi dan Kestabilan Muatan Formal Ion Nitrat (NO3⁻)',
    stimulus: {
      context: 'Ion nitrat (NO3⁻) merupakan ion poliatomik yang banyak terdapat dalam pupuk nitrogen dan mineral sendawa. Struktur Lewis ion nitrat dapat digambarkan melalui tiga struktur resonansi ekivalen untuk memenuhi aturan oktet pada atom nitrogen pusat (Z = 7) dan atom oksigen (Z = 8).',
      reactionEquation: '\\text{Struktur Resonansi Ion Nitrat } [\\text{NO}_3]^-',
      visualNote: 'Atom N pusat berikatan dengan satu atom O melalui ikatan rangkap dua (N=O) dan dua atom O lainnya melalui ikatan tunggal (N-O koordinasi/kovalen). Muatan formal dihitung dengan rumus: MF = Elektron Valensi - Elektron Bebas - 1/2 Elektron Ikatan.'
    },
    questionText: 'Berdasarkan analisis struktur Lewis dan konsep resonansi pada ion NO3⁻, manakah pernyataan berikut yang BENAR? (Pilih semua jawaban yang benar)',
    options: [
      { key: 'A', text: 'Atom nitrogen pusat (N) memiliki muatan formal sebesar +1.' },
      { key: 'B', text: 'Dua atom oksigen yang berikatan tunggal dengan atom N masing-masing memiliki muatan formal sebesar -1.' },
      { key: 'C', text: 'Atom oksigen yang berikatan rangkap dua (N=O) memiliki muatan formal sebesar 0 (netral).' },
      { key: 'D', text: 'Panjang ketiga ikatan N–O dalam ion nitrat nyata berbeda-beda, dengan ikatan N=O lebih pendek dari ikatan N–O tunggal.' },
      { key: 'E', text: 'Hibridisasi atom nitrogen pusat pada ion nitrat adalah sp² dengan geometri planar segitiga.' }
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    pointWeight: 2,
    narration: {
      intro: 'Kita masuki nomor 17, soal PGK tentang struktur Lewis dan resonansi muatan formal ion nitrat.',
      stimulus: 'Ion nitrat NO3 minus memiliki muatan total minus satu. Cermati muatan formal masing-masing atom dan konsep hibridisasi resonansinya.',
      clue: 'Hitung muatan formal atom N pusat: nitrogen punya 5 elektron valensi, di struktur ini terikat 4 pasang ikatan tanpa pasangan elektron bebas. 5 dikurang 4 sama dengan plus 1.',
      discussion: 'A benar: MF(N) = 5 - 0 - 4 = +1. B benar: Oksigen ikatan tunggal punya 6 elektron bebas dan 1 ikatan, MF(O) = 6 - 6 - 1 = -1. C benar: Oksigen ikatan rangkap punya 4 elektron bebas dan 2 ikatan, MF(O) = 6 - 4 - 2 = 0. D salah: dalam kenyataan resonansi, semua ikatan N-O memiliki panjang ikatan yang identik (orde ikatan 4/3). E benar: atom N mengikat 3 domain elektron sehingga hibridisasinya sp2 segitiga planar.',
      quickTrick: 'Cara Cepat Mister Jo: Jebakan paling sering pada resonansi adalah mengira ikatan rangkap dan tunggal itu berbeda panjangnya di dunia nyata! Faktanya, resonansi membuat ketiga ikatan N-O identik sempurna dengan panjang ikatan sama rata. Jadi opsi D pasti salah! Sisanya A, B, C, dan E benar!'
    },
    discussion: {
      problemId: 'Q-17',
      concept: 'Muatan Formal Struktur Lewis, Hibridisasi sp2, dan Hibrida Resonansi Nyata',
      keyFormula: '\\text{MF} = \\text{EV} - \\text{PEB} - \\frac{1}{2}\\text{PEI}',
      steps: [
        'Hitung elektron valensi total ion NO3⁻: 5 (dari N) + 3(6) (dari O) + 1 (dari muatan) = 24 elektron.',
        'Gambarkan struktur Lewis oktet: N di pusat, 1 ikatan rangkap dua N=O, dan 2 ikatan tunggal N-O.',
        'Hitung MF atom N: EV = 5, PEB = 0, PEI = 8 (4 ikatan). MF(N) = 5 - 0 - 4 = +1 (Pernyataan A BENAR).',
        'Hitung MF atom O berikatan tunggal: EV = 6, PEB = 6 (3 pasang bebas), PEI = 2 (1 ikatan). MF(O) = 6 - 6 - 1 = -1 (Pernyataan B BENAR).',
        'Hitung MF atom O berikatan rangkap dua: EV = 6, PEB = 4 (2 pasang bebas), PEI = 4 (2 ikatan). MF(O) = 6 - 4 - 2 = 0 (Pernyataan C BENAR).',
        'Jumlah muatan formal: (+1) + (-1) + (-1) + 0 = -1 (sesuai muatan ion).',
        'Evaluasi resonansi: Ikatan sebenarnya bukanlah 1 rangkap dan 2 tunggal, melainkan hibrida resonansi delokalisasi elektron pi dengan orde ikatan 4/3 (1,33). Ketiga ikatan N-O IDENTIK dan memiliki panjang ikatan yang SAMA PERSIS. Pernyataan D SALAH.',
        'Domain elektron N pusat = 3 domain ikatan, 0 domain bebas -> Tipe AX3 -> Hibridisasi sp², bentuk segitiga planar (Pernyataan E BENAR).'
      ],
      calculation: '\\text{MF}(N) = +1, \\quad \\text{MF}(O_{\\text{tunggal}}) = -1, \\quad \\text{MF}(O_{\\text{rangkap}}) = 0, \\quad \\text{Orde ikatan} = \\frac{4}{3}',
      finalAnswer: 'Pilihan yang benar adalah A, B, C, dan E.',
      whyOthersWrong: 'Pernyataan D salah karena eksperimen kristalografi sinar-X membuktikan ketiga ikatan N-O memiliki panjang ikatan yang sama persis (124 pm) akibat delokalisasi awan elektron pi resonansi.',
      misterJoQuickTrick: 'Ingat kata kunci "Resonansi": Delokalisasi elektron meratakan panjang ikatan! Di kertas tampak ada ikatan tunggal dan rangkap, tapi di alam nyata semuanya rata dan sama panjang. Opsi D langsung coret!'
    }
  },

  // Soal 18 - BS (Kimia Fisik: Teori Tumbukan & Katalis)
  {
    id: 18,
    number: 18,
    type: 'BS',
    category: 'Kimia Fisik',
    subtopic: 'Teori Tumbukan & Faktor Laju Reaksi',
    competency: 'Reasoning',
    title: 'Mekanisme Penurunan Energi Aktivasi oleh Katalis dalam Reaksi Kimia',
    stimulus: {
      context: 'Dalam konverter katalitik mobil, gas beracun karbon monoksida (CO) dan hidrokarbon yang tidak terbakar dioksidasi menjadi CO2 dan H2O dengan bantuan katalis heterogen platina/paladium (Pt/Pd). Diagram profil energi reaksi eksotermik menunjukkan adanya jalur reaksi alternatif dengan energi aktivasi yang lebih rendah saat katalis digunakan.',
      chartType: 'energy-diagram',
      chartDetails: {
        title: 'Profil Energi Reaksi Tanpa Katalis vs Dengan Katalis',
        reaktanEnergy: 100,
        produkEnergy: 40,
        eaTanpaKatalis: 80,
        eaDenganKatalis: 45
      },
      visualNote: 'Energi reaktan = 100 kJ, energi produk = 40 kJ. Ea tanpa katalis = 180 - 100 = 80 kJ. Ea dengan katalis = 145 - 100 = 45 kJ. Perubahan entalpi reaksi ΔH = 40 - 100 = -60 kJ.'
    },
    questionText: 'Berdasarkan teori tumbukan dan diagram profil energi reaksi tersebut, tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 1,
        text: 'Penambahan katalis platina menurunkan energi aktivasi reaksi sebesar 35 kJ/mol sehingga fraksi partikel dengan energi kinetik melampaui Ea meningkat secara signifikan.',
        isCorrect: true,
        explanation: 'Ea tanpa katalis = 80 kJ/mol, Ea dengan katalis = 45 kJ/mol. Penurunan Ea = 80 - 45 = 35 kJ/mol. Akibatnya, lebih banyak tumbukan yang efektif dan laju reaksi meningkat.'
      },
      {
        id: 2,
        text: 'Penggunaan katalis mengubah nilai perubahan entalpi reaksi (ΔH) menjadi lebih negatif sehingga reaksi menghasilkan kalor yang lebih banyak.',
        isCorrect: false,
        explanation: 'Katalis hanya mengubah jalur reaksi kinetika (menurunkan Ea), tetapi tidak mempengaruhi fungsi keadaan termodinamika seperti ΔH, ΔG, dan posisi kesetimbangan.'
      },
      {
        id: 3,
        text: 'Kenaikan suhu reaksi mempercepat laju pembentukan produk terutama karena meningkatkan energi kinetik rata-rata partikel pereaksi.',
        isCorrect: true,
        explanation: 'Sesuai distribusi Maxwell-Boltzmann, kenaikan suhu memperbesar energi kinetik partikel sehingga frekuensi dan fraksi tumbukan efektif yang melampaui Ea bertambah.'
      }
    ],
    correctAnswer: 'BS-evaluated',
    pointWeight: 3,
    narration: {
      intro: 'Kita telaah soal nomor 18 tentang teori tumbukan dan peran katalis pada laju reaksi.',
      stimulus: 'Diagram profil energi memperlihatkan lintasan reaksi tanpa katalis dan dengan katalis. Cermati besaran energi aktivasi dan perubahan entalpi reaksinya.',
      clue: 'Perhatikan bahwa katalis mencari rute alternatif yang lebih landai, tetapi titik awal reaktan dan titik akhir produk tidak pernah berubah tempat!',
      discussion: 'Pernyataan 1 Benar: Penurunan Ea = 80 - 45 = 35 kJ/mol, sehingga tumbukan efektif bertambah. Pernyataan 2 Salah: nilai delta H tetap minus 60 kJ/mol karena katalis tidak mengubah selisih energi produk dan reaktan. Pernyataan 3 Benar: kenaikan suhu meningkatkan energi kinetik rata-rata partikel pereaksi.',
      quickTrick: 'Cara Cepat Mister Jo: Ingat doktrin abadi kimia fisik: Katalis hanya menurunkan puncak gunung bukit energi (Ea), bukan menurunkan lembah reaktan atau produk! Jadi delta H haram berubah. Pernyataan 2 yang bilang delta H berubah otomatis salah!'
    },
    discussion: {
      problemId: 'Q-18',
      concept: 'Teori Tumbukan Efektif, Diagram Koordinat Reaksi, dan Termodinamika vs Kinetika',
      keyFormula: '\\Delta H = H_{\\text{produk}} - H_{\\text{reaktan}} \\quad (\\text{tetap}), \\quad E_a(\\text{katalis}) < E_a(\\text{tanpa katalis})',
      steps: [
        'Hitung penurunan Ea: Ea(awal) = 80 kJ/mol, Ea(katalis) = 45 kJ/mol. Penurunan = 80 - 45 = 35 kJ/mol. Sesuai persamaan Arrhenius k = A e^(-Ea/RT), penurunan Ea menaikkan tetapan laju k secara eksponensial (Pernyataan 1 BENAR).',
        'Tinjau termodinamika entalpi ΔH: ΔH = H_produk - H_reaktan = 40 kJ - 100 kJ = -60 kJ/mol. Katalis tidak mengubah entalpi pereaksi maupun produk, sehingga ΔH reaksi TIDAK BERUBAH. Pernyataan 2 SALAH.',
        'Tinjau kenaikan suhu: Kenaikan suhu menggeser kurva distribusi Maxwell-Boltzmann ke kanan (energi kinetik rata-rata partikel naik), sehingga jumlah partikel yang energinya >= Ea bertambah pesat (Pernyataan 3 BENAR).'
      ],
      calculation: '\\Delta E_a = 80 - 45 = 35\\,\\text{kJ/mol}, \\quad \\Delta H = 40 - 100 = -60\\,\\text{kJ/mol} \\, (\\text{konstan})',
      finalAnswer: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR.',
      whyOthersWrong: 'Pernyataan 2 salah karena mengacaukan konsep kinetika (laju reaksi dipengaruhi katalis) dengan termodinamika (perubahan entalpi tidak dipengaruhi katalis).',
      misterJoQuickTrick: 'Trik Mister Jo: "Katalis adalah jalan pintas pendakian bukit, tapi ketinggian basecamp dan puncak akhir tidak berubah". Delta H tetap sama, Kc tetap sama. Yang berubah hanya waktu tempuhnya!'
    }
  },

  // Soal 19 - PG (Kimia Fisik: Kesetimbangan Disosiasi)
  {
    id: 19,
    number: 19,
    type: 'PG',
    category: 'Kimia Fisik',
    subtopic: 'Kesetimbangan Kimia & Derajat Disosiasi',
    competency: 'Reasoning',
    title: 'Penentuan Derajat Disosiasi dan Tetapan Kesetimbangan Kc Gas Dinitrogen Tetroksida',
    stimulus: {
      context: 'Gas dinitrogen tetroksida (N2O4) yang tidak berwarna terdisosiasi sebagian di dalam bejana tertutup bervolume 2,0 Liter pada suhu 200 K membentuk gas nitrogen dioksida (NO2) yang berwarna cokelat kemerahan. Pada keadaan awal dimasukkan 4,0 mol gas N2O4. Ketika kesetimbangan tercapai, di dalam bejana terbentuk 4,0 mol gas NO2.',
      reactionEquation: '\\text{N}_2\\text{O}_4(g) \\rightleftharpoons 2\\text{NO}_2(g)',
      visualNote: 'Reaksi 1 mol N2O4 menghasilkan 2 mol NO2. Gunakan tabel Mula-mula, Reaksi, dan Setimbang (M-R-S) dalam bejana volume V = 2,0 L.'
    },
    questionText: 'Berdasarkan data kesetimbangan tersebut, nilai derajat disosiasi (α) dari gas N2O4 dan nilai tetapan kesetimbangan konsentrasi (Kc) berturut-turut adalah...',
    options: [
      { key: 'A', text: 'α = 0,25 dan Kc = 2,0' },
      { key: 'B', text: 'α = 0,50 dan Kc = 4,0' },
      { key: 'C', text: 'α = 0,50 dan Kc = 2,0' },
      { key: 'D', text: 'α = 0,75 dan Kc = 8,0' },
      { key: 'E', text: 'α = 1,00 dan Kc = 16,0' }
    ],
    correctAnswer: 'B',
    pointWeight: 1,
    narration: {
      intro: 'Kita sampai pada nomor 19, menghitung derajat disosiasi alfa dan tetapan kesetimbangan Kc.',
      stimulus: 'Mula-mula terdapat 4 mol N2O4 dalam wadah 2 liter. Saat setimbang terbentuk 4 mol gas NO2. Carilah derajat disosiasi alfa dan nilai tetapan Kc.',
      clue: 'Karena koefisien NO2 adalah 2, maka untuk membentuk 4 mol NO2 diperlukan 2 mol N2O4 yang terurai. Derajat disosiasi adalah mol terurai dibagi mol mula-mula.',
      discussion: 'N2O4 terurai = 1/2 x 4 mol = 2 mol. Maka derajat disosiasi alpha = 2 / 4 = 0,50. Sisa N2O4 saat setimbang = 4 - 2 = 2 mol. Konsentrasi saat setimbang dalam 2 liter: [N2O4] = 2 mol / 2 L = 1 M; [NO2] = 4 mol / 2 L = 2 M. Rumus Kc = [NO2]^2 / [N2O4] = (2)^2 / 1 = 4,0. Jadi alpha = 0,50 dan Kc = 4,0!',
      quickTrick: 'Cara Cepat Mister Jo: 4 mol NO2 butuh 2 mol N2O4 terurai. Alpha = 2/4 = 0,50 (opsi B atau C). Dalam volume 2 L: [NO2] = 4/2 = 2 M, [N2O4] = (4-2)/2 = 1 M. Kc = [NO2]² / [N2O4] = 2² / 1 = 4. Langsung kunci opsi B!'
    },
    discussion: {
      problemId: 'Q-19',
      concept: 'Derajat Disosiasi (α) dan Hukum Aksi Massa Tetapan Kesetimbangan Kc',
      keyFormula: '\\alpha = \\frac{n_{\\text{terurai}}}{n_{\\text{mula-mula}}}, \\quad K_c = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]}',
      steps: [
        'Susun tabel stoikiometri kesetimbangan (M-R-S):',
        'Mula-mula: n(N2O4) = 4,0 mol; n(NO2) = 0.',
        'Reaksi: terbentuk 4,0 mol NO2. Karena perbandingan koefisien N2O4 : NO2 = 1 : 2, maka N2O4 yang bereaksi (terurai) = (1/2) x 4,0 mol = 2,0 mol.',
        'Setimbang: n(N2O4) = 4,0 - 2,0 = 2,0 mol; n(NO2) = 4,0 mol.',
        'Hitung derajat disosiasi α: α = n_terurai / n_awal = 2,0 mol / 4,0 mol = 0,50 (50%).',
        'Hitung konsentrasi kesetimbangan dalam bejana volume 2,0 L: [N2O4] = 2,0 mol / 2,0 L = 1,0 M; [NO2] = 4,0 mol / 2,0 L = 2,0 M.',
        'Hitung nilai Kc: Kc = [NO2]² / [N2O4] = (2,0)² / 1,0 = 4,0.'
      ],
      calculation: '\\alpha = \\frac{2{,}0}{4{,}0} = 0{,}50; \\quad K_c = \\frac{(2{,}0)^2}{1{,}0} = 4{,}0',
      finalAnswer: 'Opsi B benar: α = 0,50 dan Kc = 4,0.',
      whyOthersWrong: 'Opsi C salah menghitung Kc karena lupa mengkuadratkan konsentrasi NO2 (2 / 1 = 2). Opsi A menganggap N2O4 terurai hanya 1 mol. Opsi D dan E salah perhitungan stoikiometri disosiasi.',
      misterJoQuickTrick: 'Ingat kuadrat pada koefisien 2! Siswa sering terburu-buru dan lupa: [NO2] harus dipangkatkan 2! 2 pangkat 2 = 4 dibagi 1 = 4. Jawaban B mutlak benar!'
    }
  },

  // Soal 20 - PGK (Kimia Analitik: Kurva Titrasi Asam Lemah - Basa Kuat)
  {
    id: 20,
    number: 20,
    type: 'PGK',
    category: 'Kimia Analitik',
    subtopic: 'Asam Basa & Kurva Titrasi',
    competency: 'Reasoning',
    title: 'Analisis Titik Khusus Kurva Titrasi 25 mL CH3COOH 0,1 M dengan NaOH 0,1 M',
    stimulus: {
      context: 'Sebanyak 25,0 mL larutan asam asetat (CH3COOH) 0,10 M (Ka = 1,0 × 10⁻⁵) dititrasi menggunakan larutan standar natrium hidroksida (NaOH) 0,10 M di laboratorium analitik. Kurva titrasi pH terhadap volume penambahan larutan titran NaOH dicatat secara akurat.',
      chartType: 'titration-curve',
      chartDetails: {
        title: 'Kurva Titrasi pH vs Volume NaOH (mL)',
        vAwal: 0,
        vSetengahEkuivalen: 12.5,
        vTitikEkuivalen: 25.0,
        phSetengah: 5.0,
        phEkuivalen: 8.85
      },
      visualNote: 'Titik awal: larutan asam lemah. Titik setengah ekuivalen (V = 12,5 mL): daerah kapasitas buffer maksimum. Titik ekuivalen (V = 25,0 mL): hidrolisis garam basa.'
    },
    questionText: 'Berdasarkan kurva titrasi dan teori kesetimbangan asam-basa, tentukan SELURUH pernyataan yang BENAR! (Pilih semua jawaban yang benar)',
    options: [
      { key: 'A', text: 'Sebelum penambahan NaOH (volume titran 0 mL), pH larutan asam asetat awal adalah 3,0.' },
      { key: 'B', text: 'Pada saat penambahan 12,5 mL NaOH (titik setengah ekuivalen), nilai pH larutan tepat sama dengan nilai pKa asam asetat, yaitu 5,0.' },
      { key: 'C', text: 'Titik ekuivalen titrasi tercapai tepat saat penambahan 25,0 mL NaOH dan larutan memiliki pH netral (pH = 7,0).' },
      { key: 'D', text: 'Pada titik ekuivalen, pH larutan berada di atas 7 (sekitar 8,85) akibat terjadinya hidrolisis anion asetat (CH3COO⁻).' },
      { key: 'E', text: 'Indikator fenolftalein (rentang pH 8,3 – 10,0) sangat tepat digunakan untuk mendeteksi titik akhir titrasi ini.' }
    ],
    correctAnswer: ['A', 'B', 'D', 'E'],
    pointWeight: 2,
    narration: {
      intro: 'Kita tutup sepuluh soal kedua dengan nomor 20 mengenai analisis mendalam kurva titrasi asam lemah dengan basa kuat.',
      stimulus: 'Titrasi 25 mL CH3COOH 0,1 M dengan NaOH 0,1 M. Perhatikan titik awal, titik setengah ekuivalen, dan titik ekuivalennya.',
      clue: 'Asam lemah dititrasi basa kuat menghasilkan garam yang terhidrolisis parsial bersifat basa, jadi pH pada titik ekuivalen pasti di atas 7, bukan 7!',
      discussion: 'A benar: [H+] = akar(10^-5 x 0,1) = 10^-3 M -> pH = 3. B benar: di titik setengah ekuivalen (12,5 mL), mol asam sisa sama dengan mol garam terbentuk, sehingga [H+] = Ka, pH = pKa = 5,0. C salah: pH titik ekuivalen BUKAN 7 karena garam CH3COONa bersifat basa. D benar: pH titik ekuivalen sekitar 8,85 karena hidrolisis basa. E benar: fenolftalein cocok karena trayeknya 8,3 - 10,0 mencakup lonjakan pH ekuivalen.',
      quickTrick: 'Cara Cepat Mister Jo: Asam lemah ketemu basa kuat titik ekuivalennya PASTI BASA (pH > 7), bukan 7! Opsi C yang bilang netral pH=7 langsung coret tanpa ampun! Sisanya A, B, D, dan E semuanya benar!'
    },
    discussion: {
      problemId: 'Q-20',
      concept: 'Kurva Titrasi Asam Lemah - Basa Kuat, Titik Setengah Ekuivalen, dan Pemilihan Indikator',
      keyFormula: '\\text{Setengah Ekuivalen: } \\text{pH} = \\text{p}K_a; \\quad \\text{Titik Ekuivalen: } [OH^-] = \\sqrt{\\frac{K_w}{K_a}[\\text{CH}_3\\text{COO}^-]}',
      steps: [
        'Hitung pH awal (0 mL NaOH): Asam lemah CH3COOH 0,10 M. [H+] = akar(Ka x Ma) = akar(1,0 x 10⁻⁵ x 0,10) = 1,0 x 10⁻³ M. pH = 3,0 (Pernyataan A BENAR).',
        'Analisis titik setengah ekuivalen (V_NaOH = 12,5 mL): mol asam awal = 2,5 mmol. NaOH ditambah = 1,25 mmol. Sisa asam = 1,25 mmol, garam CH3COO⁻ terbentuk = 1,25 mmol. Karena [asam] = [garam], maka [H+] = Ka x (1,25 / 1,25) = Ka. pH = pKa = -log(1,0 x 10⁻⁵) = 5,0 (Pernyataan B BENAR).',
        'Analisis titik ekuivalen (V_NaOH = 25,0 mL): asam dan basa tepat bereaksi habis. Terbentuk 2,5 mmol garam CH3COONa dalam volume total 50 mL. [garam] = 2,5 / 50 = 0,05 M. Garam terhidrolisis bersifat BASA: [OH⁻] = akar((10⁻¹⁴ / 10⁻⁵) x 0,05) = akar(5 x 10⁻¹¹) = 7,07 x 10⁻⁶ M. pOH = 5,15 => pH = 14 - 5,15 = 8,85 (Pernyataan C SALAH, Pernyataan D BENAR).',
        'Pemilihan indikator: Lonjakan pH pada titik ekuivalen berada di rentang 7,5 hingga 10,0. Fenolftalein (PP, trayek 8,3 - 10,0) berubah warna tepat pada rentang ini sehingga sangat ideal (Pernyataan E BENAR).'
      ],
      calculation: '\\text{pH}_{\\text{setengah}} = \\text{p}K_a = 5{,}0; \\quad \\text{pH}_{\\text{ekuivalen}} = 8{,}85 \\, (\\text{basa akibat hidrolisis})',
      finalAnswer: 'Pilihan yang benar adalah A, B, D, dan E.',
      whyOthersWrong: 'Pernyataan C salah karena menganggap titik ekuivalen asam lemah dengan basa kuat bernilai netral 7 (pH 7 hanya berlaku untuk titrasi asam kuat dengan basa kuat).',
      misterJoQuickTrick: 'Hafalkan rumus emas titrasi asam asetat vs NaOH: Setengah jalan pH = pKa = 5! Sampai garis finish (ekuivalen), larutan jadi basa (pH ~ 8,85). Indikator wajib Fenolftalein. Sangat mudah jika kamu paham polanya!'
    }
  }
];
