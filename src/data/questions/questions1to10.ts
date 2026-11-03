import { Question } from '../../types';

export const questions1to10: Question[] = [
  // Soal 1 - PG (Kimia Dasar: Struktur Atom & Bilangan Kuantum)
  {
    id: 1,
    number: 1,
    type: 'PG',
    category: 'Kimia Dasar',
    subtopic: 'Struktur Atom & Bilangan Kuantum',
    competency: 'Applying',
    title: 'Konfigurasi Elektron Ion dan Empat Bilangan Kuantum Unsur Transisi',
    stimulus: {
      context: 'Dalam industri metalurgi baja tahan karat (stainless steel), ion logam transisi kromium (Cr) dengan nomor atom 24 berperan penting dalam memberikan ketahanan terhadap korosi melalui pembentukan lapisan pasivasi kromium(III) oksida. Konfigurasi elektron atom netral Cr memiliki sifat anomali kestabilan orbital setengah penuh.',
      reactionEquation: '_{24}\\text{Cr} \\rightarrow _{24}\\text{Cr}^{3+} + 3e^-',
      visualNote: 'Perhatikan pelepasan elektron pada pembentukan kation logam transisi selalu mendahulukan kulit terluar (4s) sebelum subkulit bagian dalam (3d).'
    },
    questionText: 'Berdasarkan prinsip Aufbau dan kaidah kestabilan subkulit, set empat bilangan kuantum (n, l, m, s) yang tepat untuk elektron terluar yang paling berenergi pada ion Cr³⁺ adalah...',
    options: [
      { key: 'A', text: 'n = 3, l = 2, m = 0, s = +1/2' },
      { key: 'B', text: 'n = 4, l = 0, m = 0, s = +1/2' },
      { key: 'C', text: 'n = 3, l = 1, m = +1, s = -1/2' },
      { key: 'D', text: 'n = 3, l = 2, m = +2, s = -1/2' },
      { key: 'E', text: 'n = 4, l = 1, m = 0, s = -1/2' }
    ],
    correctAnswer: 'A',
    pointWeight: 1,
    narration: {
      intro: 'Halo calon juara! Kita mulai tantangan pertama dari materi dasar yang sangat krusial: Struktur Atom dan Bilangan Kuantum unsur transisi.',
      stimulus: 'Kromium dengan nomor atom 24 memiliki anomali kestabilan konfigurasi setengah penuh, yaitu [Ar] 4s1 3d5. Ketika membentuk ion Cr 3+, tiga elektron dilepaskan. Bacalah urutan pelepasan elektronnya dengan teliti!',
      clue: 'Ingat aturan emas Mister Jo: saat logam transisi membentuk kation, elektron yang lepas pertama kali berasal dari kulit terluar yaitu 4s, baru kemudian sisanya dilepas dari subkulit 3d.',
      discussion: 'Konfigurasi Cr netral adalah [Ar] 4s1 3d5. Saat membentuk ion Cr3+, 1 elektron dilepas dari 4s dan 2 elektron dilepas dari 3d, menyisakan [Ar] 3d3. Tiga elektron pada orbital 3d mengisi ruang m = -2, -1, dan 0 dengan spin searah +1/2. Jadi elektron terakhir memiliki n=3, l=2, m=0, s=+1/2.',
      quickTrick: 'Trik Kilat Mister Jo: Langsung coret opsi dengan n=4 karena elektron 4s sudah habis menguap saat jadi kation! Dari sisa n=3, subkulit d memiliki nilai l=2, dan karena cuma ada 3 elektron belum berpasangan, nilai s wajib +1/2!'
    },
    discussion: {
      problemId: 'Q-01',
      concept: 'Anomali Konfigurasi Elektron Kromium dan Pembentukan Ion Logam Transisi',
      keyFormula: '_{24}\\text{Cr}: [\\text{Ar}]\\, 4s^1 3d^5 \\xrightarrow{-3e^-} _{24}\\text{Cr}^{3+}: [\\text{Ar}]\\, 3d^3',
      steps: [
        'Tuliskan konfigurasi elektron atom netral Cr (Z=24): [Ar] 4s¹ 3d⁵ (lebih stabil setengah penuh daripada 4s² 3d⁴).',
        'Bentuk kation Cr³⁺ dengan melepas 3 elektron: lepas 1 elektron dari kulit terluar 4s¹, lalu 2 elektron dari subkulit 3d⁵, menghasilkan konfigurasi ion Cr³⁺: [Ar] 3d³.',
        'Analisis elektron terluar pada subkulit 3d³: nilai n = 3, untuk subkulit d nilai l = 2.',
        'Isi 5 kamar orbital d (m = -2, -1, 0, +1, +2) dengan 3 elektron mengikuti Aturan Hund: elektron 1 (m=-2, s=+1/2), elektron 2 (m=-1, s=+1/2), elektron 3 (m=0, s=+1/2).'
      ],
      calculation: 'n = 3, \\quad l = 2 \\, (\\text{subkulit } d), \\quad m = 0, \\quad s = +\\frac{1}{2}',
      finalAnswer: 'Opsi A benar: n = 3, l = 2, m = 0, s = +1/2.',
      whyOthersWrong: 'Opsi B salah karena elektron 4s sudah lepas semua. Opsi C salah karena l=1 menyatakan subkulit p, bukan d. Opsi D salah karena s=-1/2 mengindikasikan spin berpasangan padahal orbital d baru terisi 3 elektron. Opsi E salah karena subkulit 4p sama sekali tidak terisi.',
      misterJoQuickTrick: 'Ingat trik kation transisi: "Keluarkan dari 4s dulu, baru kurangi 3d". Begitu ion Cr³⁺ terbentuk menjadi 3d³, nilai n pasti 3, l pasti 2. Karena baru 3 elektron, spin pasti paralel positif (+1/2). Jawaban A langsung terkunci dalam 5 detik!'
    }
  },

  // Soal 2 - PGK (Kimia Dasar: Stoikiometri & Pereaksi Pembatas Industri Pupuk)
  {
    id: 2,
    number: 2,
    type: 'PGK',
    category: 'Kimia Dasar',
    subtopic: 'Stoikiometri & Pereaksi Pembatas',
    competency: 'Reasoning',
    title: 'Sintesis Pupuk Urea dari Gas Amonia dan Karbon Dioksida',
    stimulus: {
      context: 'Di sebuah pabrik pupuk Petrokimia, urea (CO(NH2)2) disintesis melalui reaksi eksotermis antara gas amonia cair (NH3) dan gas karbon dioksida (CO2) pada suhu 180°C dan tekanan tinggi 150 atm. Dalam satu siklus reaktor laboratorium, direaksikan 68 gram gas NH3 (Mr = 17) dengan 110 gram gas CO2 (Mr = 44).',
      reactionEquation: '2\\text{NH}_3(g) + \\text{CO}_2(g) \\rightarrow \\text{CO(NH}_2\\text{)}_2(s) + \\text{H}_2\\text{O}(g)',
      table: {
        title: 'Data Reaktan dan Massa Molar',
        headers: ['Zat Pereaksi', 'Massa Disediakan', 'Massa Molar (Mr)'],
        rows: [
          ['Gas Amonia (NH3)', '68 gram', '17 g/mol'],
          ['Gas Karbon Dioksida (CO2)', '110 gram', '44 g/mol']
        ]
      }
    },
    questionText: 'Berdasarkan data kuantitatif reaksi sintesis tersebut, tentukan seluruh pernyataan berikut yang bernilai BENAR! (Pilih semua jawaban yang benar)',
    options: [
      { key: 'A', text: 'Gas NH3 bertindak sebagai pereaksi pembatas karena habis bereaksi terlebih dahulu.' },
      { key: 'B', text: 'Gas CO2 tersisa sebanyak 22 gram setelah reaksi mencapai kondisi selesai.' },
      { key: 'C', text: 'Massa maksimum urea yang dapat terbentuk secara teoritis adalah 120 gram.' },
      { key: 'D', text: 'Perbandingan mol reaktan yang disediakan tepat sama dengan perbandingan koefisien reaksinya.' },
      { key: 'E', text: 'Jumlah molekul uap air (H2O) yang dihasilkan sebanyak 1,204 × 10²⁴ molekul.' }
    ],
    correctAnswer: ['A', 'B', 'C', 'E'],
    pointWeight: 2,
    narration: {
      intro: 'Sekarang kita masuk ke soal Pilihan Ganda Kompleks nomor 2 tentang stoikiometri industri pupuk.',
      stimulus: 'Terdapat 68 gram amonia dan 110 gram karbon dioksida yang direaksikan untuk membuat pupuk urea. Hitung mol masing-masing pereaksi, cari pereaksi pembatasnya, lalu tentukan massa produk dan massa sisa pereaksi berlebih.',
      clue: 'Ubah gram ke mol dulu! Mol amonia adalah 68 dibagi 17, dan mol CO2 adalah 110 dibagi 44. Lalu bagi dengan koefisien untuk mencari pereaksi pembatas.',
      discussion: 'Mol NH3 = 68/17 = 4 mol. Mol CO2 = 110/44 = 2,5 mol. Hasil bagi koefisien: NH3 = 4/2 = 2; CO2 = 2,5/1 = 2,5. Karena 2 < 2,5 maka NH3 adalah pereaksi pembatas! CO2 yang bereaksi = 1/2 x 4 = 2 mol, sehingga sisa CO2 = 0,5 mol x 44 = 22 gram. Urea terbentuk = 1/2 x 4 = 2 mol x 60 = 120 gram. Air terbentuk = 2 mol x 6,02 x 10^23 = 1,204 x 10^24 molekul.',
      quickTrick: 'Cara Cepat Mister Jo: 4 mol NH3 butuh tepat 2 mol CO2. Tersedia 2,5 mol CO2, jadi jelas CO2 berlebih 0,5 mol (22 gram) dan NH3 habis jadi pembatas. Produk urea otomatis 2 mol = 120 gram. Opsi A, B, C, dan E langsung valid!'
    },
    discussion: {
      problemId: 'Q-02',
      concept: 'Stoikiometri Reaksi Kimia, Pereaksi Pembatas, dan Hubungan Mol-Partikel',
      keyFormula: 'n = \\frac{m}{M_r}, \\quad \\text{Pereaksi Pembatas} = \\min\\left(\\frac{n}{\\text{koef}}\\right), \\quad N = n \\times 6{,}02 \\times 10^{23}',
      steps: [
        'Hitung mol mula-mula: n(NH3) = 68 g / 17 g/mol = 4,0 mol; n(CO2) = 110 g / 44 g/mol = 2,5 mol.',
        'Bagi mol dengan koefisien: NH3 -> 4,0 / 2 = 2,0; CO2 -> 2,5 / 1 = 2,5. Nilai NH3 lebih kecil, sehingga NH3 adalah PEREAKSI PEMBATAS (habis tak bersisa).',
        'Hitung zat yang bereaksi: NH3 bereaksi = 4,0 mol; CO2 bereaksi = (1/2) x 4,0 = 2,0 mol.',
        'Hitung sisa CO2: n sisa = 2,5 - 2,0 = 0,5 mol. Massa sisa = 0,5 mol x 44 g/mol = 22 gram (Pernyataan B BENAR).',
        'Hitung produk urea (Mr = 12 + 16 + 2(14 + 2) = 60 g/mol): n(urea) = (1/2) x 4,0 = 2,0 mol. Massa teoritis = 2,0 mol x 60 g/mol = 120 gram (Pernyataan C BENAR).',
        'Hitung molekul H2O: n(H2O) = (1/2) x 4,0 = 2,0 mol. Jumlah molekul = 2,0 x 6,02 x 10²³ = 1,204 x 10²⁴ molekul (Pernyataan E BENAR).'
      ],
      calculation: 'n(\\text{NH}_3) = 4\\,\\text{mol}, \\quad n(\\text{CO}_2) = 2{,}5\\,\\text{mol} \\Rightarrow \\text{NH}_3 \\text{ pembatas}. \\quad m_{\\text{sisa } \\text{CO}_2} = 22\\,\\text{g}, \\quad m_{\\text{urea}} = 120\\,\\text{g}',
      finalAnswer: 'Pilihan yang benar adalah A, B, C, dan E.',
      whyOthersWrong: 'Pernyataan D SALAH karena perbandingan mol awal adalah 4 : 2,5 = 8 : 5, sedangkan perbandingan koefisien reaksinya adalah 2 : 1 = 8 : 4. Karena tidak sama, ada zat yang berlebih dan ada pereaksi pembatas.',
      misterJoQuickTrick: 'Tuliskan tabel M-B-S (Mula-mula, Bereaksi, Sisa) cepat: Mula-mula NH3 = 4 mol, CO2 = 2,5 mol. Bereaksi: -4 mol NH3 dan -2 mol CO2. Sisa: NH3 = 0, CO2 = 0,5 mol (22 gram). Produk: Urea = 2 mol (120 g), H2O = 2 mol (1,204 x 10²⁴ molekul). Cepat, rapi, dan semua opsi benar terpilih tanpa ragu!'
    }
  },

  // Soal 3 - BS (Kimia Fisik: Termokimia Kalorimetri)
  {
    id: 3,
    number: 3,
    type: 'BS',
    category: 'Kimia Fisik',
    subtopic: 'Termokimia & Kalorimetri',
    competency: 'Reasoning',
    title: 'Eksperimen Kalorimetri Reaksi Netralisasi Asam Kuat dan Basa Kuat',
    stimulus: {
      context: 'Dalam suatu praktikum kalorimetri tekanan konstan (kalorimeter cangkir kopi), 50 mL larutan HCl 1,0 M dicampurkan dengan 50 mL larutan NaOH 1,0 M. Suhu awal kedua larutan sama yaitu 25,0°C. Setelah pencampuran diaduk rata, suhu tertinggi campuran mencapai 31,5°C. Asumsikan kalor jenis larutan c = 4,2 J/g·°C dan massa jenis larutan ρ = 1,0 g/mL, serta kapasitas kalor kalorimeter diabaikan.',
      reactionEquation: '\\text{HCl}(aq) + \\text{NaOH}(aq) \\rightarrow \\text{NaCl}(aq) + \\text{H}_2\\text{O}(l)',
      visualNote: 'Kenaikan suhu ΔT = 31,5°C - 25,0°C = 6,5°C. Volume total campuran V = 50 mL + 50 mL = 100 mL, sehingga massa larutan m = 100 gram.'
    },
    questionText: 'Tinjau hasil eksperimen kalorimetri netralisasi tersebut, kemudian tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 1,
        text: 'Reaksi netralisasi tersebut bersifat eksoterm karena sistem melepaskan kalor ke lingkungan yang ditandai dengan kenaikan suhu larutan.',
        isCorrect: true,
        explanation: 'Kenaikan suhu campuran dari 25°C ke 31,5°C membuktikan bahwa reaksi melepaskan energi kalor (eksoterm), sehingga entalpi sistem berkurang (ΔH bernilai negatif).'
      },
      {
        id: 2,
        text: 'Besar kalor yang diserap oleh larutan (q_larutan) dalam percobaan tersebut adalah sebesar 2,73 kJ.',
        isCorrect: true,
        explanation: 'q = m x c x ΔT = 100 g x 4,2 J/g·°C x 6,5°C = 2730 Joule = 2,73 kJ.'
      },
      {
        id: 3,
        text: 'Perubahan entalpi netralisasi standar (ΔHn) per mol air yang terbentuk bernilai -27,3 kJ/mol.',
        isCorrect: false,
        explanation: 'Mol air yang terbentuk = 0,05 L x 1,0 M = 0,05 mol. ΔH = -q / n = -2,73 kJ / 0,05 mol = -54,6 kJ/mol, bukan -27,3 kJ/mol!'
      }
    ],
    correctAnswer: 'BS-evaluated',
    pointWeight: 3,
    narration: {
      intro: 'Tantangan ketiga bertipe Benar-Salah tentang kalorimetri netralisasi asam basa.',
      stimulus: 'Sebanyak 50 mL HCl 1 M dicampur 50 mL NaOH 1 M, suhu naik sebesar 6,5 derajat Celsius. Evaluasi tiga pernyataan ilmiah mengenai tanda eksoterm, besar kalor, dan entalpi netralisasi molar!',
      clue: 'Perhatikan massa larutan total adalah 100 gram, dan mol air yang terbentuk bukan 1 mol, melainkan 0,05 mol. Ingat rumus delta H sama dengan minus q dibagi mol produk.',
      discussion: 'Pernyataan 1 Benar karena suhu naik menandakan reaksi eksoterm. Pernyataan 2 Benar karena q = 100 x 4,2 x 6,5 = 2.730 Joule atau 2,73 kJ. Pernyataan 3 Salah karena jika dibagi 0,05 mol, nilai delta Hn adalah minus 54,6 kJ per mol, bukan minus 27,3 kJ per mol.',
      quickTrick: 'Trik Mister Jo: Jangan sampai terjebak membagi kalor dengan volume atau salah hitung mol! 50 mL dikali 1 M itu 50 milimol atau 0,05 mol. Membagi dengan 0,05 mol sama dengan mengalikan 20! 2,73 dikali 20 menghasilkan 54,6 kJ/mol!'
    },
    discussion: {
      problemId: 'Q-03',
      concept: 'Kalorimetri Larutan, Asas Black, dan Perhitungan Entalpi Netralisasi Molar',
      keyFormula: 'q_{\\text{larutan}} = m \\cdot c \\cdot \\Delta T, \\quad q_{\\text{reaksi}} = -q_{\\text{larutan}}, \\quad \\Delta H_n = \\frac{q_{\\text{reaksi}}}{n_{\\text{H}_2\\text{O}}}',
      steps: [
        'Hitung massa larutan total: m = (50 mL + 50 mL) x 1 g/mL = 100 gram.',
        'Hitung kenaikan suhu: ΔT = 31,5°C - 25,0°C = +6,5°C.',
        'Hitung kalor yang diserap larutan: q = 100 g x 4,2 J/g·°C x 6,5°C = 2.730 J = 2,73 kJ (Pernyataan 2 BENAR).',
        'Karena kalor diserap oleh larutan lingkungan, reaksi melepaskan kalor (eksotermik, ΔH < 0) (Pernyataan 1 BENAR).',
        'Hitung mol H2O terbentuk: mol HCl = 0,05 L x 1 M = 0,05 mol; mol NaOH = 0,05 L x 1 M = 0,05 mol. Air yang terbentuk = 0,05 mol.',
        'Hitung ΔHn: ΔHn = -2,73 kJ / 0,05 mol = -54,6 kJ/mol. Nilai pada pernyataan 3 (-27,3 kJ/mol) adalah SALAH karena membagi dengan 0,1 mol.'
      ],
      calculation: 'q = 100 \\times 4{,}2 \\times 6{,}5 = 2730\\,\\text{J} = 2{,}73\\,\\text{kJ}; \\quad \\Delta H_n = -\\frac{2{,}73\\,\\text{kJ}}{0{,}05\\,\\text{mol}} = -54{,}6\\,\\text{kJ/mol}',
      finalAnswer: 'Pernyataan 1: BENAR, Pernyataan 2: BENAR, Pernyataan 3: SALAH.',
      whyOthersWrong: 'Pernyataan 3 salah secara numerik karena siswa ceroboh sering membagi dengan total volume 0,1 L alih-alih mol reaktan pembatas 0,05 mol.',
      misterJoQuickTrick: 'Ingat angka emas netralisasi asam kuat - basa kuat: nilai standar ΔH netralisasi selalu berada di kisaran -55 hingga -57 kJ/mol. Jika pernyataan menyebut -27,3 kJ/mol (tepat setengahnya), kamu tahu pasti itu salah hitung pembagi mol!'
    }
  },

  // Soal 4 - PG (Kimia Analitik: Asam Basa & Titrasi)
  {
    id: 4,
    number: 4,
    type: 'PG',
    category: 'Kimia Analitik',
    subtopic: 'Asam Basa & Titrasi Netralisasi',
    competency: 'Applying',
    title: 'Standarisasi Larutan Cuka Makan Komersial dengan Titrasi Alkalimetri',
    stimulus: {
      context: 'Seorang analis laboratorium pengawas mutu makanan menguji kadar asam asetat (CH3COOH, Mr = 60) dalam sampel cuka dapur. Sebanyak 10 mL sampel cuka diencerkan dengan akuades di dalam labu takar hingga volumenya tepat 100 mL. Dari larutan encer tersebut, diambil 25 mL lalu dititrasi menggunakan larutan standar NaOH 0,10 M dengan indikator fenolftalein (PP). Titrasi diulang sebanyak tiga kali (triplo) hingga diperoleh titik akhir merah muda pucat yang stabil.',
      reactionEquation: '\\text{CH}_3\\text{COOH}(aq) + \\text{NaOH}(aq) \\rightarrow \\text{CH}_3\\text{COONa}(aq) + \\text{H}_2\\text{O}(l)',
      table: {
        title: 'Data Hasil Volume Titrasi NaOH 0,10 M',
        headers: ['Percobaan', 'Volume Sampel Encer', 'Volume Titran NaOH 0,10 M'],
        rows: [
          ['1', '25,0 mL', '19,8 mL'],
          ['2', '25,0 mL', '20,2 mL'],
          ['3', '25,0 mL', '20,0 mL']
        ]
      }
    },
    questionText: 'Berdasarkan data titrasi tersebut, konsentrasi molaritas asam asetat dalam sampel cuka dapur murni sebelum diencerkan adalah...',
    options: [
      { key: 'A', text: '0,08 M' },
      { key: 'B', text: '0,80 M' },
      { key: 'C', text: '0,40 M' },
      { key: 'D', text: '1,20 M' },
      { key: 'E', text: '1,60 M' }
    ],
    correctAnswer: 'B',
    pointWeight: 1,
    narration: {
      intro: 'Mari kita telaah soal titrasi alkalimetri asam cuka pada nomor 4. Ini adalah soal klasik yang sering keluar dengan jebakan pengenceran!',
      stimulus: 'Perhatikan data volume titran: 19,8 mL, 20,2 mL, dan 20,0 mL. Cari rata-ratanya, hitung konsentrasi larutan setelah diencerkan, lalu kalikan faktor pengencerannya.',
      clue: 'Rata-rata volume NaOH adalah tepat 20,0 mL. Sampel awal 10 mL diencerkan jadi 100 mL, artinya faktor pengencerannya adalah 10 kali lipat.',
      discussion: 'V rata-rata NaOH = (19,8 + 20,2 + 20,0) / 3 = 20,0 mL. Mol NaOH = 20 mL x 0,10 M = 2,0 mmol. Karena koefisien 1:1, mol asam asetat dalam 25 mL adalah 2,0 mmol, sehingga M encer = 2,0 / 25 = 0,08 M. Karena pengenceran dari 10 mL ke 100 mL (faktor 10), konsentrasi awal = 0,08 x 10 = 0,80 M.',
      quickTrick: 'Trik Kilat Mister Jo: Rumus langsung M awal = (V_NaOH x M_NaOH / V_sampel) x (V_labu / V_pipet_awal). Masukkan angka: (20 x 0,1 / 25) x (100 / 10) = (2 / 25) x 10 = 0,08 x 10 = 0,80 M. Kurang dari 15 detik tuntas!'
    },
    discussion: {
      problemId: 'Q-04',
      concept: 'Titrasi Asam Basa, Titik Ekuivalen, dan Faktor Pengenceran Larutan',
      keyFormula: 'V_a \\cdot M_a \\cdot a = V_b \\cdot M_b \\cdot b, \\quad M_{\\text{awal}} = M_{\\text{encer}} \\times \\frac{V_{\\text{labu}}}{V_{\\text{pipet}}}',
      steps: [
        'Hitung volume rata-rata NaOH: V_b = (19,8 + 20,2 + 20,0) / 3 = 20,0 mL.',
        'Terapkan rumus titik ekuivalen titrasi pada larutan encer: V_a x M_encer x 1 = V_b x M_b x 1.',
        '25,0 mL x M_encer = 20,0 mL x 0,10 M => M_encer = 2,0 / 25,0 = 0,08 M.',
        'Hitung konsentrasi sampel cuka mula-mula dengan memperhitungkan faktor pengenceran (dari 10 mL menjadi 100 mL, pengenceran 10x):',
        'M_awal = M_encer x (100 mL / 10 mL) = 0,08 M x 10 = 0,80 M.'
      ],
      calculation: 'M_{\\text{encer}} = \\frac{20{,}0 \\times 0{,}10}{25{,}0} = 0{,}08\\,\\text{M}; \\quad M_{\\text{awal}} = 0{,}08 \\times 10 = 0{,}80\\,\\text{M}',
      finalAnswer: 'Opsi B benar: 0,80 M.',
      whyOthersWrong: 'Opsi A (0,08 M) adalah jebakan klasik jika siswa lupa mengalikan faktor pengenceran 10x. Opsi C, D, dan E berasal dari kesalahan rasio pengenceran atau perkalian valensi yang keliru.',
      misterJoQuickTrick: 'Catat rumus 1 baris Mister Jo untuk titrasi berpangkal pengenceran: M_awal = (Vb x Mb x V_total_labu) / (Va x V_awal_diambil). Langsung masukkan (20 x 0,1 x 100) / (25 x 10) = 200 / 250 = 0,80 M. Aman dan presisi!'
    }
  },

  // Soal 5 - PGK (Kimia Fisik: Laju Reaksi & Orde Data Eksperimen)
  {
    id: 5,
    number: 5,
    type: 'PGK',
    category: 'Kimia Fisik',
    subtopic: 'Laju Reaksi & Orde Reaksi',
    competency: 'Reasoning',
    title: 'Penentuan Persamaan Laju dan Tetapan Laju Oksidasi Gas NO oleh O2',
    stimulus: {
      context: 'Gas nitrogen monoksida (NO) yang keluar dari gas buang kendaraan bermotor dapat bereaksi cepat dengan gas oksigen di atmosfer membentuk nitrogen dioksida (NO2) yang berwarna cokelat kemerahan. Untuk mengetahui mekanisme reaksinya, dilakukan pengukuran laju pembentukan gas NO2 pada suhu konstan 25°C dengan data eksperimen sebagai berikut:',
      reactionEquation: '2\\text{NO}(g) + \\text{O}_2(g) \\rightarrow 2\\text{NO}_2(g)',
      table: {
        title: 'Data Eksperimen Laju Reaksi Oksidasi NO',
        headers: ['Percobaan', '[NO] (M)', '[O2] (M)', 'Laju Awal v (M/detik)'],
        rows: [
          ['1', '0,01', '0,01', '2,5 × 10⁻⁴'],
          ['2', '0,02', '0,01', '1,0 × 10⁻³'],
          ['3', '0,01', '0,03', '7,5 × 10⁻⁴'],
          ['4', '0,02', '0,02', '2,0 × 10⁻³']
        ]
      }
    },
    questionText: 'Berdasarkan data eksperimen di atas, pilihlah SELURUH pernyataan yang BENAR terkait kinetika reaksi tersebut! (Pilih semua yang benar)',
    options: [
      { key: 'A', text: 'Orde reaksi terhadap gas NO adalah 2.' },
      { key: 'B', text: 'Orde reaksi terhadap gas O2 adalah 1.' },
      { key: 'C', text: 'Orde total dari keseluruhan reaksi tersebut adalah 3.' },
      { key: 'D', text: 'Nilai tetapan laju reaksi k adalah 250 M⁻²·s⁻¹.' },
      { key: 'E', text: 'Jika konsentrasi NO dan O2 masing-masing diperbesar menjadi 3 kali lipat, laju reaksi akan meningkat menjadi 9 kali lipat.' }
    ],
    correctAnswer: ['A', 'B', 'C', 'D'],
    pointWeight: 2,
    narration: {
      intro: 'Kita lanjut ke nomor 5, soal PGK tentang kinetika kimia dan penentuan hukum laju reaksi.',
      stimulus: 'Tersedia tabel percobaan laju reaksi antara NO dan O2. Bandingkan percobaan 1 dan 2 untuk mencari orde NO, serta percobaan 1 dan 3 untuk mencari orde O2.',
      clue: 'Pada percobaan 1 dan 2, [NO] naik 2 kali lipat sedangkan laju naik 4 kali lipat, maka dua pangkat berapa sama dengan empat? Pada percobaan 1 dan 3, konsentrasi O2 naik 3 kali lipat dan laju naik 3 kali lipat.',
      discussion: 'Orde NO: (0,02/0,01)^m = (10 x 10^-4)/(2,5 x 10^-4) => 2^m = 4, jadi m = 2. Orde O2: (0,03/0,01)^n = (7,5 x 10^-4)/(2,5 x 10^-4) => 3^n = 3, jadi n = 1. Orde total = 2 + 1 = 3. Nilai k = v / ([NO]^2 [O2]) = (2,5 x 10^-4) / ((0,01)^2 x 0,01) = 2,5 x 10^-4 / 10^-6 = 250 M^-2 s^-1. Pernyataan E salah karena jika keduanya naik 3 kali, laju naik (3^2) x (3^1) = 27 kali lipat, bukan 9 kali.',
      quickTrick: 'Cara Cepat Mister Jo: Orde NO = 2 (karena konsentrasi x2 -> laju x4). Orde O2 = 1 (konsentrasi x3 -> laju x3). Orde total = 3. Opsi A, B, C otomatis benar! Nilai k = 2,5 x 10^-4 / 10^-6 = 250, jadi D benar. Untuk E, (3²)(3¹) = 27 kali, jadi E salah. Kunci: A, B, C, D!'
    },
    discussion: {
      problemId: 'Q-05',
      concept: 'Hukum Laju Reaksi, Orde Reaksi Diferensial, dan Penentuan Tetapan Laju k',
      keyFormula: 'v = k [\\text{NO}]^m [\\text{O}_2]^n, \\quad k = \\frac{v}{[\\text{NO}]^m [\\text{O}_2]^n}',
      steps: [
        'Tentukan orde NO (m) dari Percobaan 1 & 2 (saat [O2] konstan 0,01 M): (0,02 / 0,01)^m = (1,0 x 10⁻³ / 2,5 x 10⁻⁴) => 2^m = 4 => m = 2 (Pernyataan A BENAR).',
        'Tentukan orde O2 (n) dari Percobaan 1 & 3 (saat [NO] konstan 0,01 M): (0,03 / 0,01)^n = (7,5 x 10⁻⁴ / 2,5 x 10⁻⁴) => 3^n = 3 => n = 1 (Pernyataan B BENAR).',
        'Hitung orde total: m + n = 2 + 1 = 3 (Pernyataan C BENAR).',
        'Hitung tetapan k menggunakan data Percobaan 1: k = (2,5 x 10⁻⁴) / ((0,01)² x (0,01)¹) = (2,5 x 10⁻⁴) / (10⁻⁶) = 250 M⁻²·s⁻¹ (Pernyataan D BENAR).',
        'Uji pernyataan E: Jika [NO] menjadi 3x dan [O2] menjadi 3x, maka v_baru = k (3[NO])² (3[O2])¹ = 3² x 3¹ x v_awal = 27 x v_awal (bukan 9 kali lipat, Pernyataan E SALAH).'
      ],
      calculation: 'm = 2, \\quad n = 1, \\quad \\text{Orde total} = 3, \\quad k = \\frac{2{,}5 \\times 10^{-4}}{(10^{-2})^2 (10^{-2})} = 250\\,\\text{M}^{-2}\\text{s}^{-1}',
      finalAnswer: 'Pilihan yang benar adalah A, B, C, dan D.',
      whyOthersWrong: 'Pernyataan E salah karena mengabaikan kuadrat pada orde NO: kenaikan laju adalah 3² x 3¹ = 27 kali lipat, bukan 9 kali lipat.',
      misterJoQuickTrick: 'Trik kilat efek pelipatan konsentrasi: v ~ [A]^m [B]^n. Masukkan angka kelipatan: v ~ (3)² x (3)¹ = 9 x 3 = 27! Siswa yang menjawab 9 pasti lupa menjumlahkan pangkat atau lupa bahwa NO berorde 2.'
    }
  },

  // Soal 6 - BS (Kimia Dasar: Ikatan Kimia & Geometri VSEPR)
  {
    id: 6,
    number: 6,
    type: 'BS',
    category: 'Kimia Dasar',
    subtopic: 'Ikatan Kimia & Geometri Molekul',
    competency: 'Reasoning',
    title: 'Analisis Struktur Lewis, Geometri Molekul, dan Kepolaran XeF4 dan SF4',
    stimulus: {
      context: 'Senyawa kovalen dari unsur nonlogam periode 3 ke atas dapat membentuk molekul dengan oktet berkembang (expanded octet) karena tersedianya subkulit d kosong pada tingkat energinya. Dua molekul gas yang sering dikaji kestabilannya adalah xenon tetrafluorida (XeF4, nomor atom Xe = 54, F = 9) dan belerang tetrafluorida (SF4, nomor atom S = 16, F = 9).',
      table: {
        title: 'Komposisi Elektron Valensi Molekul',
        headers: ['Molekul', 'Atom Pusat', 'Elektron Valensi Pusat', 'Jumlah Atom Terikat'],
        rows: [
          ['XeF4', 'Xe (Z=54)', '8 elektron', '4 atom F'],
          ['SF4', 'S (Z=16)', '6 elektron', '4 atom F']
        ]
      },
      visualNote: 'XeF4 memiliki 4 PEI dan 2 PEB (tipe AX4E2, oktahedral). SF4 memiliki 4 PEI dan 1 PEB (tipe AX4E, bipiramida trigonal).'
    },
    questionText: 'Berdasarkan teori domain elektron (VSEPR), tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 1,
        text: 'Molekul XeF4 memiliki bentuk geometri molekul bujur sangkar (segi empat planar) dan bersifat nonpolar.',
        isCorrect: true,
        explanation: 'Xe memiliki 8 e- valensi, membentuk 4 PEI dengan F dan menyisakan 4 elektron (2 PEB). Tipe AX4E2 menghasilkan bentuk segiempat datar (square planar) yang simetris sehingga momen dipol total = 0 (nonpolar).'
      },
      {
        id: 2,
        text: 'Molekul SF4 memiliki bentuk geometri tetrahedral sempurna dengan sudut ikatan F-S-F tepat 109,5°.',
        isCorrect: false,
        explanation: 'S memiliki 6 e- valensi, membentuk 4 PEI dan 1 PEB (tipe AX4E). Bentuk molekulnya adalah jungkat-jungkit (seesaw), bukan tetrahedral sempurna, dengan sudut ikatan terdistorsi oleh tolakan PEB.'
      },
      {
        id: 3,
        text: 'Gaya tolakan antara Pasangan Elektron Bebas dengan Pasangan Elektron Bebas (PEB - PEB) pada XeF4 lebih kuat dibandingkan tolakan PEB - PEI.',
        isCorrect: true,
        explanation: 'Sesuai postulat VSEPR, urutan kekuatan gaya tolakan adalah PEB-PEB > PEB-PEI > PEI-PEI karena PEB terikat hanya pada satu inti atom sehingga awan elektronnya lebih mengembang.'
      }
    ],
    correctAnswer: 'BS-evaluated',
    pointWeight: 3,
    narration: {
      intro: 'Nomor 6 menguji konsep Ikatan Kimia dan Geometri Molekul melalui model VSEPR untuk XeF4 dan SF4.',
      stimulus: 'Xenon tetrafluorida dan sulfur tetrafluorida sama-sama mengikat 4 atom fluorin, tetapi jumlah pasangan elektron bebas pada atom pusatnya berbeda. Perhatikan dampaknya terhadap bentuk geometri dan kepolaran.',
      clue: 'Hitung PEB atom pusat! XeF4 punya 8 dikurang 4 sama dengan 4 elektron bebas (2 pasang). SF4 punya 6 dikurang 4 sama dengan 2 elektron bebas (1 pasang).',
      discussion: 'Pernyataan 1 Benar: XeF4 bertipe AX4E2 berbentuk bujur sangkar simetris sehingga momen dipol nol alias nonpolar. Pernyataan 2 Salah: SF4 bertipe AX4E berbentuk jungkat-jungkit (seesaw) tak simetris, bukan tetrahedral. Pernyataan 3 Benar: tolakan PEB-PEB selalu paling kuat menurut teori VSEPR.',
      quickTrick: 'Trik Mister Jo: Meski sama-sama berakhiran angka 4 (XeF4 dan SF4), bentuknya beda total! XeF4 simetris sempurna atas-bawah ada PEB, jadi nonpolar dan bujur sangkar. SF4 menyisakan 1 PEB di posisi ekuatorial, jadinya jungkat-jungkit. Mudah kan?'
    },
    discussion: {
      problemId: 'Q-06',
      concept: 'Teori Tolakan Pasangan Elektron Kulit Valensi (VSEPR) dan Momen Dipol Kepolaran',
      keyFormula: '\\text{Domain Elektron} = \\text{PEI} + \\text{PEB}, \\quad \\text{PEB} = \\frac{\\text{EV} - \\text{PEI}}{2}',
      steps: [
        'Analisis XeF4: EV(Xe) = 8, PEI = 4. PEB = (8 - 4) / 2 = 2. Notasi: AX4E2. Geometri domain oktahedral, bentuk molekul SEGI EMPAT DATAR (bujur sangkar). Karena simetris, momen dipol saling meniadakan -> nonpolar (Pernyataan 1 BENAR).',
        'Analisis SF4: EV(S) = 6, PEI = 4. PEB = (6 - 4) / 2 = 1. Notasi: AX4E. Geometri domain bipiramida trigonal, bentuk molekul JUNGKAT-JUNGKIT (seesaw / tetrahedral terdistorsi). Sudut ikatan aksial < 180° dan ekuatorial < 120° (Pernyataan 2 SALAH).',
        'Postulat kekuatan tolakan domain elektron VSEPR: PEB-PEB > PEB-PEI > PEI-PEI. Elektron bebas terlokalisasi lebih dekat ke inti atom pusat, sehingga menempati ruang lebih besar dan tolakannya paling dominan (Pernyataan 3 BENAR).'
      ],
      calculation: '\\text{XeF}_4: \\text{AX}_4\\text{E}_2 \\, (\\mu = 0); \\quad \\text{SF}_4: \\text{AX}_4\\text{E}_1 \\, (\\mu \\neq 0)',
      finalAnswer: 'Pernyataan 1: BENAR, Pernyataan 2: SALAH, Pernyataan 3: BENAR.',
      whyOthersWrong: 'Pernyataan 2 salah karena menganggap SF4 sebagai tetrahedral sempurna AX4 padahal ada 1 PEB yang mengubah bentuk menjadi jungkat-jungkit dengan sudut ikatan menyempit.',
      misterJoQuickTrick: 'Cara cepat mengingat geometri AX4: AX4 = Tetrahedral murni (CH4, CCl4). AX4E1 = Seesaw / Jungkat-jungkit (SF4). AX4E2 = Bujur Sangkar / Square Planar (XeF4). Simpan pola ini di kepala, tak akan pernah salah lagi!'
    }
  },

  // Soal 7 - PG (Kimia Analitik: Larutan Penyangga)
  {
    id: 7,
    number: 7,
    type: 'PG',
    category: 'Kimia Analitik',
    subtopic: 'Larutan Penyangga (Buffer)',
    competency: 'Applying',
    title: 'Perhitungan pH Larutan Penyangga Asam Format dan Natrium Format',
    stimulus: {
      context: 'Di bidang biokimia seluler, larutan penyangga format sering digunakan untuk menjaga kestabilan enzim pada pH asam berkisar antara 3,5 hingga 4,0. Seorang peneliti mencampurkan 200 mL larutan asam format (HCOOH) 0,15 M dengan 100 mL larutan kalium format (HCOOK) 0,20 M. Diketahui nilai tetapan ionisasi asam format Ka = 2,0 × 10⁻⁴ (log 2 = 0,30; log 3 = 0,48).',
      reactionEquation: '\\text{HCOOH}(aq) \\rightleftharpoons \\text{HCOO}^-(aq) + \\text{H}^+(aq)',
      visualNote: 'Campuran terdiri dari asam lemah HCOOH dan basa konjugasinya HCOO- dari garam HCOOK.'
    },
    questionText: 'Nilai derajat keasaman (pH) larutan penyangga yang dihasilkan dari pencampuran tersebut adalah...',
    options: [
      { key: 'A', text: '3,22' },
      { key: 'B', text: '3,52' },
      { key: 'C', text: '4,00' },
      { key: 'D', text: '4,48' },
      { key: 'E', text: '5,18' }
    ],
    correctAnswer: 'A',
    pointWeight: 1,
    narration: {
      intro: 'Soal nomor 7 mengajak kita berhitung larutan penyangga format secara cermat.',
      stimulus: 'Sebanyak 200 mL HCOOH 0,15 M dicampur dengan 100 mL HCOOK 0,20 M. Nilai Ka asam format adalah 2 kali 10 pangkat minus 4. Hitung mol asam lemah dan mol basa konjugasinya.',
      clue: 'Hitung milimol masing-masing: mol HCOOH = 200 dikali 0,15 = 30 mmol. Mol HCOOK = 100 dikali 0,20 = 20 mmol. Masukkan ke persamaan Henderson-Hasselbalch.',
      discussion: 'Mol asam HCOOH = 30 mmol. Mol garam konjugasi HCOOK = 20 mmol. [H+] = Ka x (mol asam / mol basa konjugasi) = (2 x 10^-4) x (30 / 20) = (2 x 10^-4) x 1,5 = 3,0 x 10^-4 M. Maka pH = -log(3,0 x 10^-4) = 4 - log 3 = 4 - 0,48 = 3,52. Tunggu, mari kita cek kembali: 4 - 0,48 = 3,52! Opsi B adalah 3,52!',
      quickTrick: 'Trik Kilat Mister Jo: Rasio mol asam per garam = 30/20 = 1,5. Langsung kalikan Ka: [H+] = 1,5 x 2 x 10^-4 = 3 x 10^-4 M. Nilai pH langsung 4 - log 3 = 4 - 0,48 = 3,52! Cepat dan tepat di opsi B!'
    },
    discussion: {
      problemId: 'Q-07',
      concept: 'Larutan Penyangga Asam (Persamaan Henderson-Hasselbalch)',
      keyFormula: '[H^+] = K_a \\times \\frac{n_{\\text{asam}}}{n_{\\text{basa konjugasi}}}, \\quad \\text{pH} = -\\log[H^+]',
      steps: [
        'Hitung jumlah mol (mmol) asam format HCOOH: n_asam = 200 mL x 0,15 M = 30 mmol.',
        'Hitung jumlah mol garam HCOOK (valensi anion format = 1): n_garam = 100 mL x 0,20 M = 20 mmol.',
        'Substitusikan ke persamaan buffer asam: [H+] = (2,0 x 10⁻⁴) x (30 mmol / 20 mmol) = (2,0 x 10⁻⁴) x 1,5 = 3,0 x 10⁻⁴ M.',
        'Hitung nilai pH: pH = -log(3,0 x 10⁻⁴) = 4 - log 3 = 4 - 0,48 = 3,52.'
      ],
      calculation: '[H^+] = 2{,}0 \\times 10^{-4} \\times \\frac{30}{20} = 3{,}0 \\times 10^{-4}\\,\\text{M} \\Rightarrow \\text{pH} = 4 - 0{,}48 = 3{,}52',
      finalAnswer: 'Opsi B benar: 3,52.',
      whyOthersWrong: 'Opsi A (3,22) diperoleh jika rasio garam/asam terbalik atau salah mengurangi nilai logaritma. Opsi C, D, dan E mengabaikan perhitungan Ka atau salah mengidentifikasi larutan sebagai netral.',
      misterJoQuickTrick: 'Bila asam lebih banyak daripada garamnya (30 mmol vs 20 mmol), [H+] pasti lebih besar daripada nilai Ka. Ka = 2 x 10⁻⁴ (pH = 3,70). Karena asam lebih pekat, pH harus bergeser lebih asam (di bawah 3,70). Hanya 3,52 yang logis dan konsisten dengan log 3!'
    }
  },

  // Perbaiki opsi B benar untuk nomor 7
  // Kita sesuaikan opsi dan kunci jawaban dengan konsisten:
];

// Re-assign correctAnswer for Q7 to B accurately
questions1to10[6].correctAnswer = 'B';

export const questions8to10: Question[] = [
  // Soal 8 - PGK (Kimia Fisik: Kesetimbangan Kimia & Le Chatelier)
  {
    id: 8,
    number: 8,
    type: 'PGK',
    category: 'Kimia Fisik',
    subtopic: 'Kesetimbangan Kimia & Asas Le Chatelier',
    competency: 'Reasoning',
    title: 'Optimalisasi Produksi Gas Amonia pada Proses Haber-Bosch',
    stimulus: {
      context: 'Proses Haber-Bosch merupakan proses industri terpenting di dunia untuk memproduksi gas amonia (NH3) sebagai bahan baku pupuk urea. Reaksi kesetimbangan berlangsung dalam fasa gas menurut persamaan termokimia berikut:',
      reactionEquation: '\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) \\quad \\Delta H = -92\\,\\text{kJ}',
      visualNote: 'Koefisien gas kiri = 1 + 3 = 4. Koefisien gas kanan = 2. Reaksi ke arah kanan adalah eksoterm (ΔH negatif).'
    },
    questionText: 'Berdasarkan asas Le Chatelier dan kinetika industri, tindakan manakah yang secara ilmiah akan MENGGESER KESETIMBANGAN KE ARAH KANAN (meningkatkan rendemen gas NH3)? (Pilih semua jawaban yang benar)',
    options: [
      { key: 'A', text: 'Menaikkan tekanan total sistem dengan memperkecil volume reaktor.' },
      { key: 'B', text: 'Menurunkan suhu operasi sistem kesetimbangan.' },
      { key: 'C', text: 'Menambahkan katalis serbuk besi (Fe) dengan promotor K2O.' },
      { key: 'D', text: 'Menambah konsentrasi gas nitrogen (N2) secara kontinu ke dalam reaktor.' },
      { key: 'E', text: 'Mengambil atau mencairkan gas NH3 yang terbentuk keluar dari ruang kesetimbangan.' }
    ],
    correctAnswer: ['A', 'B', 'D', 'E'],
    pointWeight: 2,
    narration: {
      intro: 'Soal nomor 8 membahas sintesis amonia Haber-Bosch, reaksi kesetimbangan paling legendaris dalam kimia industri!',
      stimulus: 'N2 gas ditambah 3 H2 gas berkeseimbangan dengan 2 NH3 gas, dengan delta H minus 92 kJ. Cermati perubahan suhu, tekanan, konsentrasi, dan peran katalis.',
      clue: 'Perhatikan jumlah koefisien gas di kiri adalah 4 dan di kanan adalah 2. Ingat, fungsi katalis hanya mempercepat laju tercapainya kesetimbangan, bukan menggeser letak kesetimbangan!',
      discussion: 'A benar karena menaikkan tekanan menggeser reaksi ke koefisien gas lebih kecil (kanan, dari 4 ke 2). B benar karena reaksi ke kanan eksoterm, maka menurunkan suhu menggeser ke kanan. C salah karena katalis TIDAK menggeser kesetimbangan, hanya mempercepat laju. D benar karena menambah reaktan N2 menggeser ke kanan. E benar karena mengambil produk NH3 memicu pembentukan NH3 lebih banyak ke kanan.',
      quickTrick: 'Cara Cepat Mister Jo: Langsung eliminasi peran KATALIS! Katalis tidak pernah mengubah posisi kesetimbangan maupun rendemen. Jadi opsi C pasti dicoret! Sisanya A, B, D, dan E semuanya terbukti menggeser reaksi ke kanan!'
    },
    discussion: {
      problemId: 'Q-08',
      concept: 'Asas Le Chatelier dan Dinamika Kesetimbangan Gas',
      keyFormula: '\\text{Tekanan naik} \\rightarrow \\text{koef gas kecil}; \\quad \\text{Suhu turun} \\rightarrow \\text{arah eksoterm}; \\quad [\\text{produk}] \\text{ diturunkan} \\rightarrow \\text{geser ke produk}',
      steps: [
        'Tinjau pengaruh tekanan/volume: koefisien gas reaktan = 1 + 3 = 4, produk = 2. Kenaikan tekanan (volume mengecil) menggeser reaksi ke koefisien gas lebih kecil, yaitu ke KANAN (Opsi A BENAR).',
        'Tinjau pengaruh suhu: reaksi pembentukan NH3 bersifat eksoterm (ΔH = -92 kJ). Penurunan suhu menyebabkan sistem melepas kalor dengan bergeser ke arah eksoterm, yaitu ke KANAN (Opsi B BENAR).',
        'Tinjau peran katalis: katalis menurunkan energi aktivasi Ea untuk reaksi maju dan balik dalam proporsi yang sama. Katalis TIDAK menggeser kesetimbangan dan TIDAK mengubah nilai Kc/rendemen (Opsi C SALAH).',
        'Tinjau konsentrasi reaktan: penambahan N2 menyebabkan sistem berusaha mengurangi N2 dengan bergeser ke KANAN (Opsi D BENAR).',
        'Tinjau pengambilan produk: pengeluaran NH3 cair menurunkan kuosien reaksi Q < K, sehingga sistem bergeser ke KANAN untuk menggantikan NH3 (Opsi E BENAR).'
      ],
      calculation: '\\Delta n = 2 - 4 = -2 \\, (\\text{ke kanan koefisien lebih kecil}); \\quad \\Delta H < 0 \\, (\\text{ke kanan eksoterm})',
      finalAnswer: 'Pilihan yang benar adalah A, B, D, dan E.',
      whyOthersWrong: 'Opsi C salah karena ini adalah jebakan konsep paling populer di UTBK: katalis hanya mempercepat waktu tempuh menuju kesetimbangan, tetapi tidak mengubah persentase produk kesetimbangan sama sekali.',
      misterJoQuickTrick: 'Hafalkan rumus aksi-reaksi Le Chatelier: "Tekan kecilkan koefisien, dingin hangatkan eksoterm, ambil buat lagi!". Katalis = hanya potong kompas energi, bukan penggeser posisi!'
    }
  },

  // Soal 9 - BS (Kimia Analitik: Hidrolisis Garam)
  {
    id: 9,
    number: 9,
    type: 'BS',
    category: 'Kimia Analitik',
    subtopic: 'Hidrolisis Garam & pH',
    competency: 'Applying',
    title: 'Karakteristik Hidrolisis dan Nilai pH Garam Amonium Klorida (NH4Cl)',
    stimulus: {
      context: 'Pupuk amonium klorida (NH4Cl, Mr = 53,5) banyak digunakan pada tanaman padi di lahan sawah. Larutan garam ini dibuat dengan melarutkan 5,35 gram kristal NH4Cl ke dalam air hingga volume larutan tepat 1,0 Liter. Diketahui Kb NH3(aq) = 1,0 × 10⁻⁵ dan Kw = 1,0 × 10⁻¹⁴ pada suhu 25°C.',
      reactionEquation: '\\text{NH}_4^+(aq) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{NH}_3(aq) + \\text{H}_3\\text{O}^+(aq)',
      visualNote: 'Ion NH4+ berasal dari basa lemah NH3 sehingga mengalami hidrolisis kation menghasilkan H3O+ (bersifat asam). Ion Cl- dari asam kuat HCl tidak terhidrolisis.'
    },
    questionText: 'Berdasarkan data kuantitatif larutan garam tersebut, tentukan apakah masing-masing pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 1,
        text: 'Larutan garam NH4Cl mengalami hidrolisis parsial (sebagian) dan mengubah warna lakmus merah menjadi biru.',
        isCorrect: false,
        explanation: 'NH4Cl terhidrolisis kationnya sehingga menghasilkan ion H+ (larutan bersifat asam, pH < 7). Larutan asam memerahkan lakmus biru, bukan membirukan lakmus merah!'
      },
      {
        id: 2,
        text: 'Konsentrasi ion hidrogen [H+] dalam larutan garam tersebut adalah 1,0 × 10⁻⁵ M sehingga nilai pH larutan tepat sama dengan 5.',
        isCorrect: true,
        explanation: 'Konsentrasi garam = (5,35 / 53,5) / 1 L = 0,1 M. [H+] = akar((Kw/Kb) x [kation]) = akar((10^-14 / 10^-5) x 0,1) = akar(10^-9 x 10^-1) = akar(10^-10) = 10^-5 M -> pH = 5.'
      },
      {
        id: 3,
        text: 'Jika larutan garam NH4Cl diencerkan dengan penambahan akuades hingga volume menjadi 10 Liter, nilai pH larutan akan bergeser naik mendekati 7.',
        isCorrect: true,
        explanation: 'Pengenceran menurunkan konsentrasi ion hidrolisis [H+], sehingga derajat keasaman berkurang dan nilai pH bergeser naik mendekati kondisi netral 7.'
      }
    ],
    correctAnswer: 'BS-evaluated',
    pointWeight: 3,
    narration: {
      intro: 'Di soal nomor 9, kita menganalisis sifat asam garam amonium klorida dan perhitungan pH hidrolisisnya.',
      stimulus: 'Sebanyak 5,35 gram NH4Cl dilarutkan dalam 1 liter air. Kb NH3 adalah 10 pangkat minus 5. Hitung molaritas garam dan konsentrasi H plus dari rumus hidrolisis.',
      clue: 'Massa molar NH4Cl adalah 53,5, jadi 5,35 gram tepat sama dengan 0,1 mol dalam 1 liter atau 0,1 M. Karena berasal dari kation asam, larutan pasti bersifat asam pH di bawah 7.',
      discussion: 'Pernyataan 1 Salah karena larutan bersifat asam (pH=5), seharusnya memerahkan lakmus biru, bukan membirukan lakmus merah. Pernyataan 2 Benar karena [H+] = akar((10^-14 / 10^-5) x 0,1) = 10^-5 M sehingga pH = 5. Pernyataan 3 Benar karena pengenceran larutan asam selalu menaikkan pH mendekati netral 7.',
      quickTrick: 'Trik Mister Jo: Ingat selalu filosofi sifat garam: yang kuat yang menang! NH4Cl dibentuk dari basa lemah NH3 dan asam kuat HCl. Maka sifatnya asam (pH < 7). Lakmus pasti merah. Menghitung pH: akar(10^-9 x 10^-1) = akar(10^-10) = 10^-5, pH = 5!'
    },
    discussion: {
      problemId: 'Q-09',
      concept: 'Hidrolisis Kation Garam Asam dan Perhitungan Derajat Keasaman pH',
      keyFormula: '[H^+] = \\sqrt{\\frac{K_w}{K_b} \\cdot [\\text{kation}]}, \\quad \\text{pH} = -\\log[H^+]',
      steps: [
        'Hitung konsentrasi garam NH4Cl: n = 5,35 g / 53,5 g/mol = 0,10 mol. Molaritas M = 0,10 mol / 1,0 L = 0,10 M.',
        'Identifikasi sifat hidrolisis: NH4+ + H2O <=> NH3 + H3O+. Terhidrolisis sebagian (parsial), larutan bersifat asam (pH < 7). Kertas lakmus biru akan berubah jadi merah. Jadi klaim "mengubah lakmus merah menjadi biru" adalah SALAH (Pernyataan 1 SALAH).',
        'Hitung [H+]: [H+] = akar((10⁻¹⁴ / 10⁻⁵) x 0,10) = akar(10⁻⁹ x 10⁻¹) = akar(10⁻¹⁰) = 1,0 x 10⁻⁵ M. Nilai pH = -log(1,0 x 10⁻⁵) = 5,0 (Pernyataan 2 BENAR).',
        'Pengaruh pengenceran: jika V menjadi 10 L, M garam menjadi 0,01 M. [H+] baru = akar(10⁻⁹ x 10⁻²) = 3,16 x 10⁻⁶ M (pH = 5,5). Nilai pH naik mendekati 7 (Pernyataan 3 BENAR).'
      ],
      calculation: '[H^+] = \\sqrt{\\frac{10^{-14}}{10^{-5}} \\times 0{,}10} = \\sqrt{10^{-10}} = 10^{-5}\\,\\text{M} \\Rightarrow \\text{pH} = 5',
      finalAnswer: 'Pernyataan 1: SALAH, Pernyataan 2: BENAR, Pernyataan 3: BENAR.',
      whyOthersWrong: 'Pernyataan 1 salah karena asam memerahkan lakmus, bukan membirukan (biru adalah sifat basa).',
      misterJoQuickTrick: 'Trik cepat akar hidrolisis: pangkat Kw kurangi Kb (14 - 5 = 9). Jumlahkan dengan minus pangkat molaritas (9 + 1 = 10). Bagi 2: 10 / 2 = 5! Maka pH langsung ketemu 5 tanpa coret-coretan panjang!'
    }
  },

  // Soal 10 - PG (Kimia Organik: Hidrokarbon & Reaksi Adisi Markovnikov)
  {
    id: 10,
    number: 10,
    type: 'PG',
    category: 'Kimia Organik',
    subtopic: 'Hidrokarbon & Reaksi Senyawa Karbon',
    competency: 'Reasoning',
    title: 'Prediksi Produk Mayor Reaksi Adisi Gas Propena dengan Asam Bromida',
    stimulus: {
      context: 'Dalam industri petrokimia, alkena rantai pendek merupakan bahan baku intermediet untuk sintesis senyawa haloalkana. Gas propena (CH3-CH=CH2) dialirkan ke dalam larutan asam bromida (HBr) pekat tanpa adanya senyawa peroksida.',
      reactionEquation: '\\text{CH}_3-\\text{CH}=\\text{CH}_2 + \\text{HBr} \\xrightarrow{\\text{tanpa peroksida}} \\text{Produk Utama (Mayor)}',
      visualNote: 'Reaksi adisi elektrofilik mengikuti Aturan Markovnikov: proton H+ menyerang atom karbon berikatan rangkap yang mengikat atom H lebih banyak untuk membentuk karbokation yang lebih stabil.'
    },
    questionText: 'Berdasarkan kaidah penataan ulang kestabilan karbokation dan aturan Markovnikov, nama IUPAC dari produk utama (mayor) yang dihasilkan adalah...',
    options: [
      { key: 'A', text: '1-bromopropana' },
      { key: 'B', text: '2-bromopropana' },
      { key: 'C', text: '1,2-dibromopropana' },
      { key: 'D', text: '2-bromopropena' },
      { key: 'E', text: 'siklopropil bromida' }
    ],
    correctAnswer: 'B',
    pointWeight: 1,
    narration: {
      intro: 'Kita genapkan sepuluh soal pertama dengan soal Kimia Organik tentang reaksi adisi elektrofilik alkena!',
      stimulus: 'Gas propena direaksikan dengan HBr tanpa peroksida. Reaksi ini melibatkan pemutusan ikatan rangkap dua C=C.',
      clue: 'Ingat Aturan Markovnikov: yang kaya hidrogen makin kaya! Atom H dari HBr akan menempel pada karbon nomor 1 yang memiliki 2 atom H, sedangkan atom Br akan menempel pada karbon nomor 2 yang memiliki 1 atom H.',
      discussion: 'Propena adalah CH3-CH=CH2. Karbon ikatan rangkap adalah C1 dengan 2 atom H dan C2 dengan 1 atom H. Karbokation sekunder CH3-C(+)H-CH3 jauh lebih stabil daripada karbokation primer. Ion Br- kemudian menyerang C2 menghasilkan 2-bromopropana sebagai produk mayor sebesar lebih dari 90%.',
      quickTrick: 'Cara Cepat Mister Jo: Kaidah Markovnikov "Yang kaya makin kaya H". Karbon ujung CH2 mengikat 2 H (lebih kaya), maka H masuk ke C1 jadi CH3. Halogen Br otomatis masuk ke C tengah (C nomor 2). Nama senyawa langsung 2-bromopropana!'
    },
    discussion: {
      problemId: 'Q-10',
      concept: 'Adisi Elektrofilik Alkena dan Aturan Markovnikov',
      keyFormula: '\\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{HBr} \\rightarrow \\text{CH}_3\\text{CH(Br)}\\text{CH}_3 \\quad (\\text{Aturan Markovnikov})',
      steps: [
        'Identifikasi struktur propena: CH3-CH=CH2. Terdapat ikatan rangkap antara C1 (=CH2) dan C2 (-CH=).',
        'Tahap 1 adisi elektrofilik: proton H⁺ dari HBr menyerang awan elektron ikatan pi.',
        'Bandingkan kestabilan karbokation: jika H⁺ masuk ke C1 terbentuk karbokation sekunder CH3-CH⁺-CH3 (sangat stabil). Jika H⁺ masuk ke C2 terbentuk karbokation primer CH3-CH2-CH2⁺ (kurang stabil).',
        'Tahap 2: ion Br⁻ menyerang pusat positif karbokation sekunder pada atom C nomor 2.',
        'Hasil produk utama adalah CH3-CH(Br)-CH3 dengan nama resmi IUPAC: 2-bromopropana.'
      ],
      calculation: '\\text{CH}_3\\text{CH}=\\text{CH}_2 + \\text{HBr} \\rightarrow \\text{CH}_3\\text{CH(Br)}\\text{CH}_3 \\, (\\text{2-bromopropana})',
      finalAnswer: 'Opsi B benar: 2-bromopropana.',
      whyOthersWrong: 'Opsi A (1-bromopropana) adalah produk minor (anti-Markovnikov) yang hanya dominan jika reaksi diberi katalis senyawa peroksida (efek Kharasch). Opsi C adalah hasil adisi Br2, bukan HBr. Opsi D masih memiliki ikatan rangkap, opsi E adalah cincin siklik.',
      misterJoQuickTrick: 'Slogan Markovnikov ala Mister Jo: "Kaya H makin kaya H, Br nangkring di tengah!". C ujung mengikat 2 H, C tengah 1 H. Jadi H ke ujung, Br ke tengah -> 2-bromopropana!'
    }
  }
];
