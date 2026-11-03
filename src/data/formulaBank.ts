import { FormulaItem } from '../types';

export const FORMULA_BANK: FormulaItem[] = [
  // 1. Struktur Atom
  {
    id: 'f-atom-1',
    name: 'Jumlah Proton, Neutron, dan Elektron',
    category: 'Struktur Atom',
    formula: 'p = Z, \\quad e = Z - q, \\quad n = A - Z',
    symbols: [
      { symbol: 'Z', meaning: 'Nomor atom (jumlah proton)', unit: 'tanpa satuan' },
      { symbol: 'A', meaning: 'Nomor massa (proton + neutron)', unit: 'tanpa satuan' },
      { symbol: 'q', meaning: 'Muatan ion (positif/kation atau negatif/anion)', unit: 'muatan listrik' },
      { symbol: 'n', meaning: 'Jumlah neutron dalam inti atom', unit: 'tanpa satuan' }
    ],
    whenToUse: 'Digunakan saat menentukan komposisi partikel subatomik pada atom netral maupun ion positif/negatif.',
    commonMistakes: 'Sering lupa bahwa elektron berkurang pada kation (ion positif) dan bertambah pada anion (ion negatif). Jumlah neutron adalah A dikurangi Z, bukan A ditambah Z.',
    example: 'Ion 26Fe^3+ dengan A=56 memiliki: proton = 26, elektron = 26 - (+3) = 23, neutron = 56 - 26 = 30.',
    misterJoAudioScript: 'Untuk struktur atom, ingat baik-baik: nomor atom Z selalu menunjukkan jumlah proton dan tidak pernah berubah meskipun atom membentuk ion. Elektron hanya berubah saat terbentuk muatan. Kalau ion positif, elektronnya berkurang; kalau ion negatif, elektronnya bertambah!'
  },
  {
    id: 'f-atom-2',
    name: 'Kapasitas Maksimum Subkulit & Bilangan Kuantum',
    category: 'Struktur Atom',
    formula: 'N_{max} = 2(2l + 1), \\quad s(l=0): 2, \\quad p(l=1): 6, \\quad d(l=2): 10, \\quad f(l=3): 14',
    symbols: [
      { symbol: 'n', meaning: 'Bilangan kuantum utama (tingkat energi / kulit)', unit: '1, 2, 3, ...' },
      { symbol: 'l', meaning: 'Bilangan kuantum azimut (bentuk orbital / subkulit)', unit: '0 sampai n-1' },
      { symbol: 'm', meaning: 'Bilangan kuantum magnetik (orientasi ruang orbital)', unit: '-l sampai +l' },
      { symbol: 's', meaning: 'Bilangan kuantum spin (arah rotasi elektron)', unit: '+1/2 atau -1/2' }
    ],
    whenToUse: 'Menentukan konfigurasi elektron orbital dan set bilangan kuantum elektron terakhir.',
    commonMistakes: 'Menulis nilai l untuk d sebagai 3 (padahal d adalah l=2). Mengisi orbital berpasangan sebelum semua orbital terisi satu elektron (melanggar Aturan Hund).',
    example: 'Elektron terakhir 17Cl (3p^5): n=3, l=1, m=0, s=-1/2.',
    misterJoAudioScript: 'Subkulit s punya 1 orbital maksimal 2 elektron, p ada 3 orbital maksimal 6, d ada 5 orbital maksimal 10. Selalu isi satu-satu dulu dengan spin searah sebelum berpasangan!'
  },

  // 2. Sistem Periodik
  {
    id: 'f-spu-1',
    name: 'Penentuan Golongan dan Periode Blok s, p, d',
    category: 'Sistem Periodik',
    formula: '\\text{Periode} = n_{max}, \\quad \\text{Golongan Blok s} = ns^x, \\quad \\text{Blok p} = ns^2 np^y \\rightarrow (2+y)\\text{A}, \\quad \\text{Blok d} = ns^2 (n-1)d^z \\rightarrow (2+z)\\text{B}',
    symbols: [
      { symbol: 'n_max', meaning: 'Kulit terluar yang terisi elektron', unit: 'periode (1 - 7)' },
      { symbol: 'x, y, z', meaning: 'Jumlah elektron valensi pada subkulit terluar', unit: 'bilangan bulat' }
    ],
    whenToUse: 'Menentukan letak unsur pada tabel periodik modern berdasarkan konfigurasi elektron Aufbau.',
    commonMistakes: 'Lupa kestabilan orbital penuh dan setengah penuh pada blok d, seperti Cr (4s1 3d5) dan Cu (4s1 3d10). Jika (2+z) = 8, 9, 10 maka golongannya adalah VIII B.',
    example: '25Mn: [Ar] 4s^2 3d^5 -> Periode = 4, Golongan = 2 + 5 = VII B.',
    misterJoAudioScript: 'Periode selalu dilihat dari angka kulit terbesar. Untuk golongan, perhatikan akhiran subkulitnya. Jika berakhir di s dan p, itu golongan A; jika berakhir di s dan d, itu pasti golongan B logam transisi!'
  },

  // 3. Stoikiometri
  {
    id: 'f-stk-1',
    name: 'Jembatan Mol Emas (Konsep Mol Lengkap)',
    category: 'Stoikiometri',
    formula: 'n = \\frac{m}{M_r} = \\frac{N}{N_A} = \\frac{V_{STP}}{22{,}4} = \\frac{P \\cdot V}{R \\cdot T} = M \\cdot V',
    symbols: [
      { symbol: 'n', meaning: 'Jumlah zat', unit: 'mol' },
      { symbol: 'm', meaning: 'Massa zat', unit: 'gram' },
      { symbol: 'M_r', meaning: 'Massa molekul relatif', unit: 'g/mol' },
      { symbol: 'N', meaning: 'Jumlah partikel (atom/molekul/ion)', unit: 'partikel' },
      { symbol: 'N_A', meaning: 'Bilangan Avogadro (6,02 x 10^23)', unit: 'partikel/mol' },
      { symbol: 'V_STP', meaning: 'Volume gas pada keadaan standar (0°C, 1 atm)', unit: 'Liter' },
      { symbol: 'R', meaning: 'Tetapan gas ideal (0,082)', unit: 'L·atm/(mol·K)' }
    ],
    whenToUse: 'Kunci seluruh stoikiometri kimia: mengonversi massa, volume gas, konsentrasi larutan, atau jumlah partikel ke dalam satuan mol.',
    commonMistakes: 'Memakai volume 22,4 Liter padahal kondisi bukan STP (suhu bukan 0°C atau tekanan bukan 1 atm). Memasukkan massa dalam kilogram tanpa diubah ke gram.',
    example: 'Massa 4,48 L gas CO2 (Mr=44) pada STP adalah: n = 4,48 / 22,4 = 0,2 mol -> massa = 0,2 x 44 = 8,8 gram.',
    misterJoAudioScript: 'Mister Jo selalu menekankan: semua jalan di kimia bermuara ke mol! Baik dari gram, partikel, volume gas STP, maupun volume larutan, jadikan dulu semuanya ke mol sebelum menghubungkan koefisien reaksi.'
  },
  {
    id: 'f-stk-2',
    name: 'Pereaksi Pembatas dan Rendemen Hasil Reaksi',
    category: 'Stoikiometri',
    formula: '\\text{Pereaksi Pembatas} = \\min\\left(\\frac{n}{\\text{koefisien}}\\right), \\quad \\% \\text{Rendemen} = \\frac{\\text{massa nyata}}{\\text{massa teoritis}} \\times 100\\%',
    symbols: [
      { symbol: 'n', meaning: 'Mol awal masing-masing pereaksi', unit: 'mol' },
      { symbol: 'koefisien', meaning: 'Angka koefisien reaksi yang sudah setara', unit: 'tanpa satuan' },
      { symbol: '% Rendemen', meaning: 'Efisiensi pembentukan produk hasil eksperimen', unit: 'persen (%)' }
    ],
    whenToUse: 'Saat diketahui jumlah mol lebih dari satu pereaksi dalam suatu reaksi kimia.',
    commonMistakes: 'Mengira pereaksi dengan massa atau mol paling sedikit pasti pereaksi pembatas, padahal harus dibagi dengan koefisien reaksinya terlebih dahulu!',
    example: 'Reaksi 2Al + 3Cl2 -> 2AlCl3. Tersedia 0,5 mol Al dan 0,6 mol Cl2. Nilai Al: 0,5/2 = 0,25. Nilai Cl2: 0,6/3 = 0,20. Maka Cl2 adalah pereaksi pembatas!',
    misterJoAudioScript: 'Trik cepat pereaksi pembatas ala Mister Jo: jangan bandingkan massanya! Langsung bagi mol tiap pereaksi dengan koefisien reaksinya masing-masing. Nilai hasil bagi terkecil, zat itulah yang habis bereaksi lebih dulu!'
  },

  // 4. Hukum Dasar Kimia
  {
    id: 'f-hdk-1',
    name: 'Hukum Perbandingan Volume Gay-Lussac & Avogadro',
    category: 'Hukum Dasar Kimia',
    formula: '\\frac{V_1}{V_2} = \\frac{n_1}{n_2} = \\frac{\\text{koefisien}_1}{\\text{koefisien}_2} \\quad (T, P \\text{ sama})',
    symbols: [
      { symbol: 'V', meaning: 'Volume gas pereaksi atau produk', unit: 'Liter / mL' },
      { symbol: 'n', meaning: 'Jumlah mol gas', unit: 'mol' },
      { symbol: 'koefisien', meaning: 'Perbandingan bilangan koefisien reaksi setara', unit: 'tanpa satuan' }
    ],
    whenToUse: 'Menentukan volume gas atau rumus molekul gas yang bereaksi pada suhu dan tekanan yang sama.',
    commonMistakes: 'Menerapkan perbandingan volume pada zat berwujud padat (s) atau cair (l). Hukum ini HANYA berlaku untuk gas (g).',
    example: 'Reaksi N2(g) + 3H2(g) -> 2NH3(g). Jika bereaksi 10 L gas N2, maka dibutuhkan 30 L gas H2 dan terbentuk 20 L gas NH3.',
    misterJoAudioScript: 'Pada suhu dan tekanan yang sama, perbandingan volume gas sama persis dengan perbandingan koefisien reaksinya. Sangat berguna untuk membongkar rumus hidrokarbon CxHy pada reaksi pembakaran!'
  },

  // 5. Larutan dan Konsentrasi
  {
    id: 'f-lar-1',
    name: 'Molaritas, Pengenceran, dan Pencampuran Larutan',
    category: 'Larutan dan Konsentrasi',
    formula: 'M = \\frac{\\text{massa}}{M_r} \\times \\frac{1000}{V(\\text{mL})}, \\quad M_1 V_1 = M_2 V_2, \\quad M_{camp} = \\frac{M_1 V_1 + M_2 V_2}{V_1 + V_2}',
    symbols: [
      { symbol: 'M', meaning: 'Konsentrasi molaritas larutan', unit: 'mol/L atau M' },
      { symbol: 'V', meaning: 'Volume larutan', unit: 'mL atau L' }
    ],
    whenToUse: 'Menghitung konsentrasi larutan dari massa zat terlarut, proses pengenceran dengan air, dan pencampuran dua larutan sejenis.',
    commonMistakes: 'Lupa bahwa pada pengenceran, volume akhir V2 adalah volume awal ditambah volume air yang ditambahkan (V2 = V1 + Vair), bukan hanya volume air.',
    example: '100 mL HCl 2 M diencerkan menjadi 500 mL: M2 = (100 x 2) / 500 = 0,4 M.',
    misterJoAudioScript: 'Ingat rumus pengenceran M1 kali V1 sama dengan M2 kali V2. Jumlah mol zat terlarut tidak pernah berubah saat ditambahkan air, hanya volume totalnya yang bertambah sehingga konsentrasinya menurun.'
  },

  // 6. Asam dan Basa
  {
    id: 'f-ab-1',
    name: 'Konsentrasi Ion H+ dan OH- (Kuat & Lemah)',
    category: 'Asam dan Basa',
    formula: '[H^+]_{kuat} = a \\cdot M_a, \\quad [H^+]_{lemah} = \\sqrt{K_a \\cdot M_a} = \\alpha \\cdot M_a',
    symbols: [
      { symbol: '[H^+]', meaning: 'Konsentrasi ion hidrogen', unit: 'mol/L' },
      { symbol: 'a', meaning: 'Valensi asam (jumlah ion H+ per molekul)', unit: 'tanpa satuan' },
      { symbol: 'M_a', meaning: 'Molaritas asam', unit: 'mol/L' },
      { symbol: 'K_a', meaning: 'Tetapan ionisasi asam lemah', unit: 'tanpa satuan' },
      { symbol: '\\alpha', meaning: 'Derajat ionisasi (0 < alpha < 1)', unit: 'tanpa satuan' }
    ],
    whenToUse: 'Menghitung keasaman asam kuat (seperti HCl, HNO3, H2SO4) dan asam lemah (seperti CH3COOH, HF, HCN).',
    commonMistakes: 'Lupa mengalikan dengan valensi a pada asam kuat berbasa dua seperti H2SO4 (a=2). Menggunakan rumus akar Ka x Ma untuk asam kuat.',
    example: 'Larutan H2SO4 0,05 M memiliki [H+] = 2 x 0,05 = 0,1 M = 10^-1 M (pH = 1). Larutan CH3COOH 0,1 M (Ka=10^-5) memiliki [H+] = akar(10^-5 x 0,1) = 10^-3 M (pH = 3).',
    misterJoAudioScript: 'Kenali dulu apakah asam tersebut asam kuat atau asam lemah. Asam kuat langsung kali valensi: H+ sama dengan a kali Ma. Asam lemah mengalami disosiasi sebagian, jadi gunakan akar Ka dikali Ma!'
  },

  // 7. pH dan pOH
  {
    id: 'f-ph-1',
    name: 'Skala pH, pOH, dan Kesetimbangan Air Kw',
    category: 'pH dan pOH',
    formula: '\\text{pH} = -\\log[H^+], \\quad \\text{pOH} = -\\log[OH^-], \\quad \\text{pH} + \\text{pOH} = 14 \\quad (25^\\circ\\text{C})',
    symbols: [
      { symbol: '[H^+]', meaning: 'Konsentrasi ion hidrogen', unit: 'M' },
      { symbol: '[OH^-]', meaning: 'Konsentrasi ion hidroksida', unit: 'M' },
      { symbol: 'Kw', meaning: 'Tetapan ionisasi air (10^-14 pada 25°C)', unit: 'M^2' }
    ],
    whenToUse: 'Mengonversi konsentrasi H+ atau OH- ke dalam derajat keasaman pH.',
    commonMistakes: 'Untuk larutan basa, setelah menemukan [OH-], siswa sering langsung menganggap -log[OH-] sebagai pH padahal itu pOH! Harus dikurangi dari 14 dulu (pH = 14 - pOH).',
    example: 'Jika [H+] = a x 10^-b, maka pH = b - log a. Contoh: [H+] = 2 x 10^-4 M -> pH = 4 - log 2.',
    misterJoAudioScript: 'Cara kilat membaca pH: jika konsentrasi H plus sama dengan a kali sepuluh pangkat minus b, maka nilai pH-nya adalah b dikurangi log a! Kalau basa, cari pOH dulu, lalu pH sama dengan 14 dikurangi pOH.'
  },

  // 8. Larutan Penyangga
  {
    id: 'f-buf-1',
    name: 'Larutan Penyangga (Buffer Asam & Basa Henderson-Hasselbalch)',
    category: 'Larutan Penyangga',
    formula: '[H^+] = K_a \\times \\frac{n_{\\text{asam lemah}}}{n_{\\text{basa konjugasi}}}, \\quad [OH^-] = K_b \\times \\frac{n_{\\text{basa lemah}}}{n_{\\text{asam konjugasi}}}',
    symbols: [
      { symbol: 'n_asam', meaning: 'Jumlah mol asam lemah sisa', unit: 'mol / mmol' },
      { symbol: 'n_garam', meaning: 'Jumlah mol basa konjugasi (ion garam)', unit: 'mol / mmol' },
      { symbol: 'Ka / Kb', meaning: 'Tetapan disosiasi asam / basa lemah', unit: 'tanpa satuan' }
    ],
    whenToUse: 'Menghitung pH campuran asam lemah dan garam konjugasinya, atau reaksi asam lemah berlebih dengan basa kuat.',
    commonMistakes: 'Memakai rumus buffer saat asam lemah dan basa kuat habis bereaksi sama-sama (itu hidrolisis, bukan buffer!). Lupa memperhitungkan indeks ion konjugasi jika garam memiliki valensi 2 (seperti (CH3COO)2Ca, mol konjugasi = 2 x mol garam).',
    example: '100 mL CH3COOH 0,1 M (10 mmol) dicampur 50 mL CH3COONa 0,1 M (5 mmol). [H+] = Ka x (10 / 5) = 2 Ka.',
    misterJoAudioScript: 'Buffer terbentuk jika yang lemah bersisa! Asam lemah bersisa melawan basa kuat habis, maka rumus yang dipakai adalah H plus sama dengan Ka dikali mol sisa asam lemah dibagi mol garam konjugasi.'
  },

  // 9. Hidrolisis Garam
  {
    id: 'f-hid-1',
    name: 'pH Garam Terhidrolisis (Asam Lemah + Basa Kuat / Sebaliknya)',
    category: 'Hidrolisis Garam',
    formula: '[OH^-] = \\sqrt{\\frac{K_w}{K_a} \\cdot [\\text{anion}]}, \\quad [H^+] = \\sqrt{\\frac{K_w}{K_b} \\cdot [\\text{kation}]}',
    symbols: [
      { symbol: 'Kw', meaning: 'Tetapan ionisasi air (10^-14)', unit: 'M^2' },
      { symbol: 'Ka / Kb', meaning: 'Tetapan asam / basa lemah pembentuk', unit: 'tanpa satuan' },
      { symbol: '[anion] / [kation]', meaning: 'Konsentrasi molaritas komponen ion lemah dalam larutan garam total', unit: 'mol/L' }
    ],
    whenToUse: 'Saat asam dan basa keduanya tepat habis bereaksi (stoikiometris ekuivalen) menghasilkan garam.',
    commonMistakes: 'Menggunakan mol garam alih-alih konsentrasi molaritas garam! Konsentrasi molaritas garam harus dihitung terhadap volume total campuran (Vtot = V1 + V2).',
    example: '50 mL CH3COOH 0,1 M + 50 mL NaOH 0,1 M -> terbentuk 5 mmol CH3COONa dalam 100 mL -> [garam] = 5/100 = 0,05 M. [OH-] = akar( (10^-14 / 10^-5) x 0,05 ).',
    misterJoAudioScript: 'Ingat bedanya buffer dan hidrolisis! Jika asam dan basa habis tanpa sisa, itu hidrolisis. Garam dari asam lemah dan basa kuat bersifat basa, gunakan akar Kw per Ka dikali konsentrasi garam terhadap volume total!'
  },

  // 10. Ksp
  {
    id: 'f-ksp-1',
    name: 'Kelarutan (s), Hasil Kali Kelarutan (Ksp), & Prediksi Endapan Qsp',
    category: 'Ksp',
    formula: 'A_x B_y \\rightleftharpoons x A^{y+} + y B^{x-} \\quad \\Rightarrow \\quad K_{sp} = x^x y^y \\cdot s^{x+y}, \\quad Q_{sp} > K_{sp} \\rightarrow \\text{Mengendap}',
    symbols: [
      { symbol: 's', meaning: 'Kelarutan molar zat padat sukar larut', unit: 'mol/L' },
      { symbol: 'Ksp', meaning: 'Tetapan hasil kali kelarutan pada suhu tertentu', unit: 'tanpa satuan' },
      { symbol: 'Qsp', meaning: 'Kuosien hasil kali konsentrasi ion aktual', unit: 'tanpa satuan' }
    ],
    whenToUse: 'Menentukan kelarutan senyawa ionik sukar larut, pengaruh ion senama, dan memprediksi apakah suatu larutan akan membentuk endapan saat dicampurkan.',
    commonMistakes: 'Mengabaikan pengenceran saat dua larutan dicampurkan untuk menguji Qsp. Mengabaikan pengaruh ion senama yang memperkecil kelarutan.',
    example: 'Garam Ag2CrO4: x=2, y=1 -> Ksp = 2^2 x 1^1 x s^(2+1) = 4s^3. Kelarutan s = akar pangkat 3 dari (Ksp / 4).',
    misterJoAudioScript: 'Untuk Ksp garam tipe AxBy, rumus cepatnya adalah x pangkat x dikali y pangkat y dikali s pangkat x tambah y. Dan ingat: jika Qsp melebihi Ksp, larutan lewat jenuh dan endapan akan segera terbentuk!'
  },

  // 11. Termokimia
  {
    id: 'f-ter-1',
    name: 'Kalorimetri, Hukum Hess, & Energi Ikatan Rata-Rata',
    category: 'Termokimia',
    formula: 'q = m \\cdot c \\cdot \\Delta T, \\quad \\Delta H = -\\frac{q}{n}, \\quad \\Delta H_r^\\circ = \\sum \\Delta H_f^\\circ(\\text{produk}) - \\sum \\Delta H_f^\\circ(\\text{reaktan}), \\quad \\Delta H = \\sum D_{\\text{pemutusan(kiri)}} - \\sum D_{\\text{pembentukan(kanan)}}',
    symbols: [
      { symbol: 'q', meaning: 'Kalor yang diserap atau dilepaskan larutan', unit: 'Joule atau kJ' },
      { symbol: 'c', meaning: 'Kalor jenis larutan / air (4,18 atau 4,2)', unit: 'J/(g·°C)' },
      { symbol: 'ΔT', meaning: 'Perubahan suhu (T_akhir - T_awal)', unit: '°C atau K' },
      { symbol: 'ΔH_f°', meaning: 'Entalpi pembentukan standar', unit: 'kJ/mol' },
      { symbol: 'D', meaning: 'Energi disosiasi ikatan kovalen', unit: 'kJ/mol' }
    ],
    whenToUse: 'Menghitung perubahan entalpi reaksi pembakaran, netralisasi, dan pembentukan ikatan.',
    commonMistakes: 'Terbalik pada rumus energi ikatan: Energi ikatan adalah KIRI dikurang KANAN (pemutusan - pembentukan), sedangkan entalpi pembentukan standar adalah KANAN dikurang KIRI (produk - reaktan)!',
    example: 'Reaksi eksoterm suhunya naik (ΔT positif) sehingga q larutan positif, namun ΔH reaksi bertanda negatif (melepaskan kalor).',
    misterJoAudioScript: 'Hati-hati jangan sampai terbalik! Kalau pakai delta Hf pembentukan standar, rumusnya KANAN dikurang KIRI. Tapi kalau pakai data energi ikatan rata-rata, rumusnya KIRI dikurang KANAN yaitu energi pemutusan ikatan dikurangi energi pembentukan ikatan!'
  },

  // 12. Laju Reaksi
  {
    id: 'f-laj-1',
    name: 'Persamaan Laju Reaksi & Pengaruh Kenaikan Suhu',
    category: 'Laju Reaksi',
    formula: 'v = k [A]^m [B]^n, \\quad v_2 = v_1 \\cdot n^{\\frac{T_2 - T_1}{\\Delta T}}, \\quad t_2 = t_1 \\cdot \\left(\\frac{1}{n}\\right)^{\\frac{T_2 - T_1}{\\Delta T}}',
    symbols: [
      { symbol: 'v', meaning: 'Laju reaksi', unit: 'M/detik atau M/s' },
      { symbol: 'k', meaning: 'Tetapan laju reaksi', unit: 'tergantung orde total' },
      { symbol: 'm, n', meaning: 'Orde reaksi terhadap zat A dan B', unit: 'bilangan bulat/pecahan' },
      { symbol: 't', meaning: 'Waktu berlangsungnya reaksi (t = 1/v)', unit: 'detik atau menit' }
    ],
    whenToUse: 'Menentukan orde reaksi dari tabel percobaan eksperimen laju reaksi atau waktu reaksi, dan menghitung laju reaksi pada suhu baru.',
    commonMistakes: 'Mengira orde reaksi sama dengan koefisien reaksi (orde reaksi HANYA bisa diperoleh dari data eksperimen, bukan koefisien). Lupa bahwa laju berbanding terbalik dengan waktu (v = 1/t).',
    example: 'Reaksi berlangsung 2 kali lebih cepat setiap kenaikan 10°C. Dari 25°C ke 55°C (naik 30°C = 3 kali lipat 10°C), laju menjadi 2^3 = 8 kali lebih cepat, waktu menjadi 1/8 kalinya.',
    misterJoAudioScript: 'Orde reaksi tidak bisa ditebak dari koefisien! Cari dua percobaan di mana konsentrasi salah satu reaktan dibuat tetap, lalu bandingkan rasio konsentrasi dan lajunya. Dan ingat: waktu itu berbanding terbalik dengan laju!'
  },

  // 13. Kesetimbangan Kimia
  {
    id: 'f-kst-1',
    name: 'Tetapan Kesetimbangan Kc, Kp, & Asas Le Chatelier',
    category: 'Kesetimbangan Kimia',
    formula: 'K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}, \\quad K_p = K_c (R \\cdot T)^{\\Delta n}, \\quad \\Delta n = (c+d) - (a+b) \\quad (\\text{gas})',
    symbols: [
      { symbol: 'Kc', meaning: 'Tetapan kesetimbangan konsentrasi (fase aq dan g)', unit: 'tanpa satuan' },
      { symbol: 'Kp', meaning: 'Tetapan kesetimbangan tekanan parsial (hanya fase g)', unit: 'tanpa satuan' },
      { symbol: 'Δn', meaning: 'Selisih jumlah koefisien gas produk dikurang reaktan', unit: 'bilangan bulat' },
      { symbol: 'R', meaning: 'Tetapan gas (0,082 L·atm/mol·K)', unit: 'tetapan' },
      { symbol: 'T', meaning: 'Suhu mutlak', unit: 'Kelvin (K = °C + 273)' }
    ],
    whenToUse: 'Menghitung komposisi kesetimbangan kimia dinamis dan memprediksi pergeseran kesetimbangan akibat perubahan tekanan, volume, suhu, atau konsentrasi.',
    commonMistakes: 'Memasukkan zat berwujud padat murni (s) dan cair murni (l) ke dalam rumus Kc atau Kp (hanya wujud gas g dan aqueous aq yang dimasukkan ke Kc; hanya g ke Kp!).',
    example: 'N2(g) + 3H2(g) <=> 2NH3(g), ΔH = -92 kJ. Δn = 2 - (1+3) = -2. Kp = Kc (RT)^(-2). Jika suhu dinaikkan, kesetimbangan bergeser ke arah endoterm (kiri).',
    misterJoAudioScript: 'Asas Le Chatelier kuncinya sederhana: jika sistem diganggu, sistem akan bergeser melawan gangguan itu! Suhu dinaikkan bergeser ke endoterm; tekanan diperbesar bergeser ke koefisien gas terkecil; dan ingat padatan murni tidak ikut masuk Kc!'
  },

  // 14. Hidrokarbon
  {
    id: 'f-org-1',
    name: 'Rumus Umum Hidrokarbon, Reaksi Pembakaran & Identifikasi Gugus Fungsi',
    category: 'Hidrokarbon',
    formula: '\\text{Alkana: } C_n H_{2n+2}, \\quad \\text{Alkena: } C_n H_{2n}, \\quad \\text{Alkuna: } C_n H_{2n-2}, \\quad C_x H_y + \\left(x + \\frac{y}{4}\\right)O_2 \\rightarrow x CO_2 + \\frac{y}{2} H_2 O',
    symbols: [
      { symbol: 'n', meaning: 'Jumlah atom karbon', unit: '1, 2, 3, ...' },
      { symbol: 'x, y', meaning: 'Jumlah atom C dan H dalam rumus molekul hidrokarbon', unit: 'bilangan bulat' }
    ],
    whenToUse: 'Menentukan rumus molekul hidrokarbon dari volume gas O2 dan CO2 pada pembakaran sempurna, serta membedakan pasangan isomer fungsi (alkohol-eter, aldehida-keton, asam karboksilat-ester).',
    commonMistakes: 'Tertukar reaksi adisi (pemutusan ikatan rangkap pada alkena/alkuna) dengan reaksi substitusi (penggantian gugus pada alkana/benzena). Alkohol bereaksi dengan logam Na menghasilkan gas H2, sedangkan eter tidak bereaksi.',
    example: 'Pembakaran 1 L gas hidrokarbon membutuhkan 5 L O2 dan menghasilkan 3 L CO2. x = 3, (x + y/4) = 5 -> 3 + y/4 = 5 -> y = 8. Maka hidrokarbon tersebut adalah C3H8 (propana).',
    misterJoAudioScript: 'Reaksi pembakaran hidrokarbon adalah senjata paling ampuh mencari rumus molekul. Koefisien C O dua langsung menunjukkan jumlah atom C, sedangkan dua kali koefisien H dua O menunjukkan jumlah atom H!'
  }
];
