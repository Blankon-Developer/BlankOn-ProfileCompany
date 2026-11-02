export interface ServiceFAQItem {
  q: string;
  a: string;
  category: "Konsep & Kebutuhan" | "Teknis & Keamanan" | "Biaya & Timeline" | "Garansi & Legal";
}

export interface ServiceFAQData {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  shortDesc: string;
  faqs: ServiceFAQItem[];
  relatedServiceSlug: string;
  relatedPortfolioSlug: string;
}

export const servicesFAQData: Record<string, ServiceFAQData> = {
  "api-management-system-integration": {
    id: "01",
    slug: "api-management-system-integration",
    title: "API Management & Integrasi Sistem",
    eyebrow: "Pusat Bantuan & Edukasi Integrasi",
    shortDesc: "Pertanyaan umum seputar arsitektur API Gateway, interoperabilitas sistem lama, protokol komunikasi data, dan keamanan transaksi antar sistem.",
    relatedServiceSlug: "api-management-system-integration",
    relatedPortfolioSlug: "api-management-system-integration",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Apa sebenarnya fungsi utama API Management dan System Integration dalam bisnis kami?",
        a: "API Management berfungsi sebagai pengatur lalu lintas data digital terpusat yang menghubungkan berbagai aplikasi yang sebelumnya terisolasi (misalnya sistem POS kasir, ERP gudang, dan platform e-commerce). Tanpa integrasi ini, staf Anda harus menginput ulang data yang sama di berbagai software secara manual, yang memicu keterlambatan dan risiko human error."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Kapan perusahaan kami benar-benar mendesak membutuhkan integrasi sistem?",
        a: "Kebutuhan menjadi mendesak ketika: (1) Terjadi perbedaan angka stok atau transaksi antar cabang, (2) Karyawan menghabiskan waktu berjam-jam untuk rekapitulasi data antar aplikasi, (3) Anda ingin menghubungkan sistem dengan mitra pihak ketiga seperti Payment Gateway resmi atau ekspedisi kurir, atau (4) Server sering lambat saat banyak aplikasi menarik data bersamaan."
      },
      {
        category: "Teknis & Keamanan",
        q: "Apakah kami harus mengganti atau merombak sistem software lama (legacy) yang saat ini digunakan?",
        a: "Tidak perlu. Metodologi kami menggunakan lapisan middleware (adaptor API) yang bertindak sebagai penerjemah antara database atau sistem lama Anda dengan aplikasi baru, sehingga operasional bisnis yang sedang berjalan tidak akan terganggu sama sekali."
      },
      {
        category: "Teknis & Keamanan",
        q: "Bagaimana BlankOn menjamin keamanan data saat sistem internal dibuka untuk diakses oleh pihak luar?",
        a: "Kami menerapkan standar keamanan berlapis: otentikasi ketat berbasis OAuth 2.0 / JSON Web Tokens (JWT), enkripsi saluran mTLS (Mutual TLS), pembatasan kuota trafik (rate limiting) untuk mencegah serangan DDoS, serta pencatatan audit log terpusat sehingga setiap riwayat akses dapat dilacak secara presisi."
      },
      {
        category: "Biaya & Timeline",
        q: "Bagaimana skema estimasi biaya integrasi sistem dihitung?",
        a: "Biaya ditentukan berdasarkan jumlah titik akhir (endpoints) yang perlu dihubungkan, kompleksitas transformasi struktur data, ketersediaan dokumentasi API dari pihak ketiga, serta kebutuhan skalabilitas server API Gateway Anda. Kami selalu menyusun dokumen cakupan kerja (Scope of Work) transparan sebelum kontrak disepakati."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa lama rata-rata durasi pengerjaan integrasi sistem?",
        a: "Untuk integrasi standar (seperti Payment Gateway atau sinkronisasi dua platform database) umumnya membutuhkan waktu 2 hingga 4 minggu. Untuk integrasi arsitektur enterprise skala besar multi-aplikasi, durasi berkisar antara 6 hingga 12 minggu termasuk tahapan stress testing."
      },
      {
        category: "Garansi & Legal",
        q: "Siapa yang memiliki hak cipta source code dan dokumentasi API yang telah dibangun?",
        a: "Seluruh kode sumber middleware, konfigurasi gateway, dan dokumentasi teknis Swagger / OpenAPI 100% diserahkan menjadi aset milik penuh perusahaan Anda setelah serah terima proyek selesai."
      },
      {
        category: "Garansi & Legal",
        q: "Apakah ada garansi jika terjadi kendala komunikasi data setelah masa serah terima?",
        a: "Ya. Setiap proyek integrasi dilindungi garansi perbaikan bug dan pemantauan sistem gratis selama periode awal pasca-peluncuran, disertai opsi perpanjangan Service Level Agreement (SLA) untuk dukungan teknis 24/7."
      }
    ]
  },

  "blockchain": {
    id: "02",
    slug: "blockchain",
    title: "Teknologi Blockchain & Smart Contract",
    eyebrow: "Pusat Bantuan & Edukasi Blockchain",
    shortDesc: "Pertanyaan mendasar seputar verifikasi data kebal manipulasi, smart contract korporat, konsorsium privat, dan integrasi aplikasi Web3.",
    relatedServiceSlug: "blockchain",
    relatedPortfolioSlug: "blockchain",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Apakah solusi blockchain yang dibangun BlankOn berhubungan dengan trading atau mata uang kripto?",
        a: "Fokus utama kami adalah Blockchain Enterprise dan Distributed Ledger Technology (DLT) untuk utilitas bisnis riil — seperti pembuktian keaslian sertifikat digital, audit trail keuangan anti-manipulasi, serta pelacakan rantai pasok (supply chain) — bukan pada spekulasi perdagangan koin kripto."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Apa perbedaan database biasa dengan blockchain dalam mencatat data perusahaan?",
        a: "Database konvensional memiliki superadmin yang memiliki wewenang untuk mengubah atau menghapus riwayat data kapan saja. Pada blockchain, setiap transaksi diamankan secara kriptografis dan bersifat kekal (immutable); tidak ada pihak mana pun, termasuk admin teknis atau peretas, yang bisa mengubah riwayat yang telah terverifikasi konsensus."
      },
      {
        category: "Teknis & Keamanan",
        q: "Apakah data rahasia bisnis kami dapat dilihat oleh publik jika menggunakan blockchain?",
        a: "Tidak. Untuk kebutuhan enterprise, kami menerapkan Private Consortium Blockchain (seperti Hyperledger Besu atau Polygon Edge). Hanya anggota jaringan resmi dengan izin khusus (permissioned) yang dapat membaca dan memvalidasi transaksi, sementara publik tidak memiliki akses terhadap isi data tersebut."
      },
      {
        category: "Teknis & Keamanan",
        q: "Bagaimana proses audit keamanan smart contract dilakukan agar terhindar dari peretasan?",
        a: "Setiap smart contract melewati pengujian statis dan dinamis menggunakan automated security analyzer (Slither, Mythril), pengujian unit coverage 100%, serta audit manual oleh Lead Blockchain Engineer untuk memastikan bebas dari celah reentrancy, integer overflow, dan manipulasi otorisasi."
      },
      {
        category: "Biaya & Timeline",
        q: "Apakah kami harus membayar biaya gas fee (biaya transaksi jaringan) yang mahal?",
        a: "Tidak. Dalam arsitektur Private Consortium yang kami rancang, biaya gas fee internal adalah nol rupiah. Jika diimplementasikan pada jaringan publik, kami menggunakan solusi Layer 2 (seperti Polygon atau Arbitrum) dengan biaya transaksi pecahan sen rupiah yang sangat terjangkau."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa lama tahapan pengembangan solusi berbasis blockchain?",
        a: "Pengembangan smart contract dan integrasi dApp standar memerlukan waktu sekitar 4 hingga 8 minggu, mencakup fase perancangan logika bisnis, audit keamanan, simulasi testnet, hingga rilis di jaringan produksi."
      },
      {
        category: "Garansi & Legal",
        q: "Bagaimana jika ada kesalahan input data yang terlanjur tercatat di blockchain?",
        a: "Meskipun data tidak dapat dihapus, kami merancang mekanisme arsitektur 'Reversal Record' atau Smart Contract Upgradeability yang mencatat perbaikan sebagai transaksi revisi resmi, sehingga riwayat audit tetap transparan tanpa merusak integritas sistem."
      }
    ]
  },

  "cloud-computing": {
    id: "03",
    slug: "cloud-computing",
    title: "Komputasi Cloud & Infrastruktur DevOps",
    eyebrow: "Pusat Bantuan & Edukasi Cloud",
    shortDesc: "Pertanyaan seputar migrasi server, efisiensi tagihan cloud (FinOps), kontainerisasi Kubernetes, dan pencegahan server down.",
    relatedServiceSlug: "cloud-computing",
    relatedPortfolioSlug: "cloud-computing",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Mengapa perusahaan kami perlu beralih dari hosting konvensional / server lokal ke cloud modern?",
        a: "Hosting konvensional memiliki kapasitas tetap yang kaku; saat trafik pengunjung melonjak, server akan tumbang. Sebaliknya saat pengunjung sepi, Anda tetap membayar penuh. Cloud modern menyediakan elastisitas: kapasitas server bertambah otomatis saat dibutuhkan dan mengecil saat sepi, menjamin uptime 99.9% dan efisiensi biaya."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Apa itu FinOps dan bagaimana BlankOn membantu menekan tagihan cloud bulanan?",
        a: "FinOps adalah disiplin manajemen keuangan cloud. Kami melakukan audit mendalam terhadap resource yang menganggur (idle), menyesuaikan ukuran instance database, menerapkan pemanfaatan reserved instance, dan mematikan server staging di luar jam kerja, yang rata-rata menghemat 30% hingga 50% tagihan bulanan klien."
      },
      {
        category: "Teknis & Keamanan",
        q: "Apakah proses migrasi server ke cloud akan menghentikan operasional bisnis kami?",
        a: "Tidak. Kami menerapkan strategi migrasi bertahap tanpa waktu henti (Zero Downtime Migration). Basis data disinkronkan secara real-time dan pengalihan trafik domain dilakukan bertahap (Canary Deployment), sehingga pengguna tidak akan merasakan gangguan apapun."
      },
      {
        category: "Teknis & Keamanan",
        q: "Bagaimana sistem cloud kami terlindungi dari serangan siber seperti DDoS?",
        a: "Kami mengintegrasikan Web Application Firewall (WAF) dari Cloudflare atau AWS Shield, isolasi jaringan privat (VPC) tanpa akses publik langsung ke database, serta enkripsi SSL/TLS Strict end-to-end untuk menangkal serangan siber."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa biaya jasa implementasi infrastruktur cloud di BlankOn?",
        a: "Biaya jasa arsitektur dihitung secara transparan berbasis kompleksitas sistem yang dirancang (one-time setup fee). Untuk biaya operasional server bulanan, Anda membayar langsung ke penyedia cloud (AWS/GCP/Cloudflare) menggunakan kartu kredit perusahaan Anda tanpa mark-up sepihak dari kami."
      },
      {
        category: "Garansi & Legal",
        q: "Siapa yang memegang hak kepemilikan akun cloud dan kredensial root?",
        a: "Akun cloud 100% dibuat atas nama legal perusahaan Anda. Seluruh hak akses utama (root credentials) dipegang penuh oleh Anda. Tim kami hanya menggunakan akses IAM khusus engineer dengan batasan wewenang yang disetujui bersama."
      },
      {
        category: "Garansi & Legal",
        q: "Apakah ada pelatihan bagi staf IT internal kami untuk mengelola server setelah serah terima?",
        a: "Ya. Setiap proyek infrastruktur cloud selalu diakhiri dengan penyerahan buku panduan Infrastructure as Code (Terraform), dokumentasi arsitektur jaringan, serta sesi pelatihan teknis langsung untuk tim IT internal Anda."
      }
    ]
  },

  "creative-content-digital-media": {
    id: "04",
    slug: "creative-content-digital-media",
    title: "Konten Kreatif & Media Digital",
    eyebrow: "Pusat Bantuan & Edukasi Kreatif",
    shortDesc: "Pertanyaan umum seputar desain UI/UX, Design System korporat, video profil perusahaan, dan strategi visual berorientasi konversi.",
    relatedServiceSlug: "creative-content-digital-media",
    relatedPortfolioSlug: "creative-content-digital-media",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Mengapa desain UI/UX yang baik berdampak langsung pada pendapatan bisnis?",
        a: "UI (tampilan) yang profesional membangun kredibilitas dan rasa percaya calon klien dalam 3 detik pertama. UX (alur pengalaman) yang intuitif mempermudah pengguna menemukan informasi penting dan menyelesaikan transaksi tanpa kebingungan, yang secara langsung melipatgandakan rasio konversi (conversion rate)."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Apa itu Design System dan mengapa perusahaan kami membutuhkannya?",
        a: "Design System adalah repositori panduan visual terstandarisasi (warna, tipografi, komponen tombol, form input, dan aturan interaksi) yang digunakan seragam oleh seluruh divisi. Hal ini mencegah inkonsistensi tampilan merek dan mempercepat proses kerja programmer hingga 2x lipat."
      },
      {
        category: "Teknis & Keamanan",
        q: "Dalam format apa saja hasil desain UI/UX akan diserahkan?",
        a: "Seluruh desain diserahkan dalam format file Figma terstruktur rapi dengan sistem auto-layout, komponen modular, prototipe interaktif siap uji, serta Design Tokens (variabel CSS) yang siap diterjemahkan oleh programmer frontend."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa lama proses pengerjaan desain UI/UX untuk sebuah aplikasi atau website?",
        a: "Untuk website profil perusahaan komprehensif memakan waktu 2 hingga 4 minggu. Untuk aplikasi web atau mobile dengan puluhan layar kompleks, proses riset hingga penyerahan prototipe akhir memakan waktu 4 hingga 8 minggu."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa putaran revisi yang diperbolehkan selama proyek desain berlangsung?",
        a: "Kami menyediakan tahapan persetujuan tonggak berjenjang: (1) Wireframe struktural, (2) Eksplorasi konsep visual, dan (3) Tinjauan prototipe final. Setiap tonggak mencakup revisi terstruktur untuk memastikan hasil akhir selaras sempurna dengan visi direksi Anda."
      },
      {
        category: "Garansi & Legal",
        q: "Siapa yang memiliki hak cipta atas seluruh aset grafis, video, dan ikon yang dibuat?",
        a: "Seluruh aset grafis, tipografi komersial berlisensi, rekaman video, dan hak kekayaan intelektual (IP) secara hukum beralih menjadi milik penuh perusahaan Anda setelah pelunasan proyek."
      }
    ]
  },

  "data-science": {
    id: "05",
    slug: "data-science",
    title: "Sains Data & Business Intelligence (BI)",
    eyebrow: "Pusat Bantuan & Edukasi Data",
    shortDesc: "Pertanyaan seputar pembangunan data warehouse, pipeline ETL otomatis, dashboard eksekutif real-time, dan model prediksi bisnis.",
    relatedServiceSlug: "data-science",
    relatedPortfolioSlug: "data-science",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Apa perbedaan antara laporan Excel biasa dengan Business Intelligence (BI) modern?",
        a: "Laporan Excel umumnya dikerjakan manual di akhir bulan, rentan terhadap salah rumus (human error), dan sulit menganalisis jutaan data sekaligus. Business Intelligence menyedot data transaksi secara otomatis setiap detik ke data warehouse, menyajikan grafik metrik live, dan dapat diakses dari mana saja tanpa membuka spreadsheet raksasa."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Data internal kami saat ini masih berantakan di berbagai file berbeda. Apakah tetap bisa diolah?",
        a: "Tentu bisa. Salah satu pilar utama layanan kami adalah Data Engineering: kami membangun alur script pembersihan (Data Cleaning & ETL) yang secara otomatis menyeleksi data duplikat, memperbaiki format tanggal, dan menggabungkan data dari berbagai sumber ke dalam skema standar yang rapi."
      },
      {
        category: "Teknis & Keamanan",
        q: "Bagaimana BlankOn memastikan kerahasiaan data finansial dan pelanggan perusahaan kami?",
        a: "Kami menandatangani perjanjian kerahasiaan data (NDA) yang mengikat secara hukum. Seluruh proses pengolahan data dan server data warehouse ditempatkan di infrastruktur privat milik Anda sendiri dengan enkripsi data rest/transit dan pembatasan hak akses berbasis jabatan (Role-Based Access)."
      },
      {
        category: "Teknis & Keamanan",
        q: "Platform visualisasi apa yang digunakan untuk menampilkan dashboard analitik?",
        a: "Kami menguasai berbagai platform industri terkemuka seperti Metabase (solusi open-source mandiri tanpa biaya lisensi per user), Apache Superset, Power BI, Tableau, maupun custom dashboard web interaktif berbasis React."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa lama waktu yang dibutuhkan hingga dashboard analitik pertama siap digunakan direksi?",
        a: "Umumnya dalam 3 hingga 5 minggu, fase pertama dashboard eksekutif sudah dapat beroperasi dengan data tervalidasi, kemudian dilanjutkan dengan penambahan modul analitik lanjutan pada fase berikutnya."
      },
      {
        category: "Garansi & Legal",
        q: "Apakah kami diajarkan cara membuat laporan dan grafik baru sendiri setelah proyek selesai?",
        a: "Ya. Kami menyediakan sesi lokakarya (workshop) pelatihan khusus bagi staf data dan analis bisnis internal Anda untuk menyusun query dan membuat visualisasi dashboard baru secara mandiri."
      }
    ]
  },

  "game-development": {
    id: "06",
    slug: "game-development",
    title: "Pengembangan Game & Simulasi Interaktif",
    eyebrow: "Pusat Bantuan & Edukasi Game",
    shortDesc: "Pertanyaan seputar game 2D/3D Unity, gamifikasi promosi pemasaran, simulasi pelatihan kejuruan, dan publikasi toko aplikasi.",
    relatedServiceSlug: "game-development",
    relatedPortfolioSlug: "game-development",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Bagaimana sebuah game dapat meningkatkan penjualan atau citra merek perusahaan kami?",
        a: "Melalui gamified marketing, calon pelanggan mendapatkan pengalaman interaktif yang menyenangkan dan hadiah nyata (seperti voucher diskon atau poin loyalitas) saat memainkan game brand Anda. Waktu keterlibatan pengguna melonjak 5x lebih lama dibanding melihat iklan banner statis konvensional."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Apakah game yang dibuat bisa dimainkan langsung di browser web tanpa diunduh?",
        a: "Bisa. Kami dapat membangun game berbasis teknologi WebGL / HTML5 yang dapat dibuka secara instan melalui link media sosial atau QR code di browser smartphone pelanggan tanpa perlu mengunduh aplikasi berukuran besar."
      },
      {
        category: "Teknis & Keamanan",
        q: "Bagaimana cara mencegah kecurangan (cheating) pada game undian promosi berhadiah besar?",
        a: "Kami merancang arsitektur server-authoritative di mana seluruh kalkulasi skor, validasi durasi bermain, dan verifikasi hadiah dihitung di server backend yang terenkripsi, bukan di sisi gawai pemain, sehingga manipulasi skor dapat dicegah 100%."
      },
      {
        category: "Teknis & Keamanan",
        q: "Game engine apa yang menjadi standar pengembangan di BlankOn?",
        a: "Kami menggunakan Unity Engine (C#) sebagai platform utama karena dukungan lintas platform yang stabil (Android, iOS, WebGL, PC), serta Unreal Engine untuk proyek simulasi pelatihan visual 3D berkebutuhan grafis fotorealistis."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa perkiraan durasi pembuatan game promosi dibandingkan game komersial penuh?",
        a: "Mini-game promosi berbasis web umumnya selesai dalam 3 hingga 6 minggu. Sedangkan game komersial atau simulasi pelatihan komprehensif dengan banyak level permainan memerlukan waktu antara 2 hingga 5 bulan."
      },
      {
        category: "Garansi & Legal",
        q: "Siapa pemilik hak cipta karakter, musik, dan source code game yang diproduksi?",
        a: "Seluruh Intellectual Property (IP), nama karakter, aset 3D/2D, sound effects, dan source code proyek 100% dialihkan menjadi hak milik eksklusif perusahaan Anda."
      }
    ]
  },

  "internet-of-things": {
    id: "07",
    slug: "internet-of-things",
    title: "Internet of Things (IoT) & Integrasi Hardware",
    eyebrow: "Pusat Bantuan & Edukasi IoT",
    shortDesc: "Pertanyaan seputar sensor telemetri lapangan, mikrokontroler ESP32/ARM, protokol MQTT, dan pemantauan jarak jauh.",
    relatedServiceSlug: "internet-of-things",
    relatedPortfolioSlug: "internet-of-things",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Apa saja contoh implementasi IoT yang paling umum dikerjakan untuk sektor industri?",
        a: "Contoh paling sering mencakup: pemantauan suhu & kelembaban gudang cold storage, sensor getaran dan temperatur mesin pabrik (predictive maintenance), smart metering pemakaian listrik dan air otomatis, pelacakan posisi armada truk via GPS, serta otomasi pompa air pada sektor agrikultur."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Bagaimana jika lokasi penempatan sensor di lapangan tidak memiliki jaringan internet WiFi?",
        a: "Kami merancang perangkat dengan modul seluler mandiri 4G LTE berdaya rendah, atau jaringan nirkabel LoRaWAN (Long Range WAN) yang sanggup mentransmisikan data hingga radius 10 kilometer ke satu stasiun gateway pusat tanpa membutuhkan koneksi internet di tiap titik sensor."
      },
      {
        category: "Teknis & Keamanan",
        q: "Apakah perangkat sensor di lapangan dapat diperbarui software-nya tanpa harus didatangi satu per satu?",
        a: "Bisa. Firmware mikrokontroler kami telah dilengkapi kapabilitas Over-The-Air (OTA) Updates. Tim teknis dapat memperbarui program atau mengubah parameter sensor dari jarak jauh melalui cloud secara serentak."
      },
      {
        category: "Teknis & Keamanan",
        q: "Seberapa tahan perangkat keras sensor terhadap kondisi cuaca ekstrem di luar ruangan?",
        a: "Untuk instalasi lapangan terbuka atau pabrik, seluruh rangkaian mikrokontroler dikemas dalam casing berstandar industri dengan sertifikasi perlindungan tahan air dan debu (IP65 hingga IP67) serta komponen tahan lonjakan daya listrik."
      },
      {
        category: "Biaya & Timeline",
        q: "Bagaimana alur pengerjaan proyek IoT dari konsep hingga implementasi massal?",
        a: "Alur kerja kami terbagi menjadi 4 tahap: (1) Survei kebutuhan lapangan, (2) Perakitan unit purwarupa (prototype) di laboratorium, (3) Uji coba lapangan (pilot project 1-2 unit selama 14 hari), dan (4) Produksi massal serta integrasi dashboard cloud."
      },
      {
        category: "Garansi & Legal",
        q: "Apakah ada garansi terhadap kerusakan fisik perangkat keras sensor?",
        a: "Setiap modul perangkat keras yang kami rakit dilindungi garansi penggantian unit akibat cacat produksi selama periode garansi resmi, didukung ketersediaan suku cadang pengganti yang mudah ditemukan di pasar lokal."
      }
    ]
  },

  "machine-learning-ai": {
    id: "08",
    slug: "machine-learning-ai",
    title: "Kecerdasan Buatan (AI) & Pembelajaran Mesin",
    eyebrow: "Pusat Bantuan & Edukasi AI",
    shortDesc: "Pertanyaan seputar asisten AI pintar (RAG), pemrosesan OCR cerdas, privasi data perusahaan, dan integrasi model LLM.",
    relatedServiceSlug: "machine-learning-ai",
    relatedPortfolioSlug: "machine-learning-ai",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Apa perbedaan antara AI publik umum (seperti ChatGPT biasa) dengan solusi AI Enterprise dari BlankOn?",
        a: "ChatGPT biasa hanya mengetahui data publik dan sering mengarang jawaban (halusinasi) jika ditanya tentang dokumen internal Anda. Solusi AI kami menggunakan arsitektur RAG (Retrieval-Augmented Generation) yang mengikat AI secara ketat pada SOP, katalog produk, dan database resmi perusahaan Anda dengan kutipan sumber yang dapat diverifikasi."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Bidang pekerjaan apa yang paling cepat merasakan efisiensi biaya setelah menerapkan AI?",
        a: "Tiga bidang dengan dampak ROI tercepat: (1) Layanan Pelanggan (Customer Service) otomatis yang melayani ribuan pesan per jam via WhatsApp, (2) Pemrosesan Dokumen Administrasi (ekstraksi KTP, invoice, formulir otomatis), dan (3) Sistem Rekomendasi Penjualan yang memandu staf sales menawarkan produk yang tepat."
      },
      {
        category: "Teknis & Keamanan",
        q: "Apakah data rahasia perusahaan kami aman dari kebocoran ke pihak ketiga pengembang AI?",
        a: "Sangat aman. Kami menerapkan kontrak API tingkat Enterprise dengan klausul Zero-Data-Retention di mana data tidak akan pernah disimpan atau dijadikan bahan pelatihan model publik. Untuk perusahaan dengan regulasi ketat (perbankan/pemerintahan), kami dapat mendirikan model AI open-weights mandiri langsung di server lokal privat Anda."
      },
      {
        category: "Teknis & Keamanan",
        q: "Bagaimana cara memastikan AI tidak memberikan jawaban yang keliru atau merugikan reputasi perusahaan?",
        a: "Kami menyematkan Guardrails berlapis: (1) Pembatasan ruang lingkup topik pembicaraan, (2) Filter pencegahan instruksi berbahaya (prompt injection), dan (3) Aturan tegas agar AI mengakui ketidaktahuannya dan langsung mengalihkan percakapan ke staf manusia jika informasi tidak ditemukan."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa lama proses pembangunan asisten AI internal perusahaan?",
        a: "Untuk sistem asisten AI berbasis dokumen perusahaan (RAG Knowledge Base) dan integrasi saluran chat WhatsApp/Web, implementasi umumnya memakan waktu 3 hingga 5 minggu termasuk pengujian akurasi jawaban."
      },
      {
        category: "Garansi & Legal",
        q: "Apakah kami terikat biaya langganan bulanan yang mahal ke BlankOn?",
        a: "Tidak. Jasa rekayasa implementasi dihitung secara transparan. Anda hanya membayar biaya komputasi server atau pemakaian token API langsung kepada penyedia cloud sesuai volume trafik riil bisnis Anda tanpa biaya tersembunyi."
      }
    ]
  },

  "mobile-development": {
    id: "09",
    slug: "mobile-development",
    title: "Pengembangan Aplikasi Mobile (iOS & Android)",
    eyebrow: "Pusat Bantuan & Edukasi Mobile",
    shortDesc: "Pertanyaan seputar aplikasi React Native/Flutter, proses rilis di Play Store & App Store, arsitektur offline-first, dan biaya perawatan.",
    relatedServiceSlug: "mobile-development",
    relatedPortfolioSlug: "mobile-development",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Kapan perusahaan kami perlu memiliki aplikasi mobile sendiri dibanding hanya mengandalkan website?",
        a: "Aplikasi mobile sangat diperlukan saat: (1) Pengguna membutuhkan notifikasi push instan yang masuk ke layar utama ponsel, (2) Butuh fitur offline saat staf berada di area minim sinyal, (3) Memanfaatkan fitur perangkat keras ponsel seperti sensor biometrik sidik jari, GPS pelacak lokasi presisi, atau printer Bluetooth, dan (4) Membangun loyalitas retensi pelanggan jangka panjang."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Mengapa BlankOn merekomendasikan pendekatan Cross-Platform (React Native / Flutter)?",
        a: "Pendekatan cross-platform memungkinkan satu basis kode berkualitas tinggi berjalan mulus di iOS dan Android sekaligus. Ini menghemat biaya pengembangan hingga 40%, mempercepat waktu rilis ke pasar, dan memastikan pembaruan fitur di masa depan selalu serentak di kedua platform tanpa ada selisih versi."
      },
      {
        category: "Teknis & Keamanan",
        q: "Bagaimana aplikasi mobile menangani kondisi saat sinyal internet pelanggan terputus?",
        a: "Kami menerapkan arsitektur Offline-First dengan database lokal terenkripsi di dalam ponsel. Pengguna dapat terus mengisi formulir atau mencatat pesanan, dan sistem akan secara otomatis menyinkronkan seluruh data ke server begitu perangkat kembali terhubung ke internet."
      },
      {
        category: "Teknis & Keamanan",
        q: "Apakah BlankOn membantu proses penerbitan aplikasi ke Google Play Store dan Apple App Store?",
        a: "Ya. Layanan kami mencakup pendampingan end-to-end: penyiapan sertifikat penandatanganan aplikasi, pembuatan aset grafis toko aplikasi, penyusunan dokumen kebijakan privasi, hingga penanganan bila ada permintaan klarifikasi dari tim peninjau Apple dan Google sampai aplikasi resmi disetujui."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa lama waktu yang dibutuhkan untuk membangun aplikasi mobile hingga siap rilis?",
        a: "Aplikasi mobile fungsional (MVP) umumnya membutuhkan waktu 6 hingga 10 minggu pengerjaan. Untuk aplikasi enterprise kompleks dengan modul pelacakan logistik real-time atau integrasi payment gateway mendalam memakan waktu 10 hingga 16 minggu."
      },
      {
        category: "Garansi & Legal",
        q: "Siapa pemilik akun developer di Google Play Console dan Apple Developer?",
        a: "Akun toko aplikasi 100% adalah hak milik legal perusahaan Anda. Seluruh hak kekayaan intelektual (IP) dan source code proyek diserahkan sepenuhnya kepada Anda setelah serah terima selesai."
      }
    ]
  },

  "quality-assurance-qa-testing": {
    id: "10",
    slug: "quality-assurance-qa-testing",
    title: "Quality Assurance (QA) & Pengujian Perangkat Lunak",
    eyebrow: "Pusat Bantuan & Edukasi QA",
    shortDesc: "Pertanyaan seputar otomasi pengujian Playwright/Cypress, uji beban k6, audit keamanan OWASP, dan jaminan rilis bebas bug.",
    relatedServiceSlug: "quality-assurance-qa-testing",
    relatedPortfolioSlug: "quality-assurance-qa-testing",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Mengapa kami membutuhkan tim QA independen jika programmer internal kami sudah melakukan pengetesan?",
        a: "Programmer cenderung menguji kode mereka dengan skenario positif (happy path) yang mereka bayangkan saat membuat fitur. Tim QA profesional menguji sistem dari kacamata pengguna awam dan peretas: mencari celah skenario ekstrem (edge cases), memvalidasi integrasi lintas modul, serta memastikan fitur lama tidak rusak akibat pembaruan fitur baru."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Apa risiko terbesar merilis aplikasi tanpa melalui proses pengujian QA yang terstruktur?",
        a: "Biaya memperbaiki bug di fase produksi 10x lebih mahal dibanding di fase pengetesan. Selain kerugian finansial akibat transaksi gagal, bug kritis saat peluncuran merusak reputasi brand secara instan dan memicu ulasan buruk bintang 1 dari pengguna yang sangat sulit dipulihkan."
      },
      {
        category: "Teknis & Keamanan",
        q: "Apa itu Uji Beban (Load Testing) dan kapan sistem kami membutuhkannya?",
        a: "Uji beban adalah simulasi penyerangan trafik virtual masif menggunakan script (seperti Grafana k6) untuk melihat ketahanan server saat diakses ribuan pengguna bersamaan. Pengujian ini wajib dilakukan sebelum kampanye promosi besar, siaran langsung, atau peluncuran resmi aplikasi publik."
      },
      {
        category: "Teknis & Keamanan",
        q: "Tool otomasi pengujian apa yang digunakan oleh tim BlankOn?",
        a: "Kami menggunakan standar industri mutakhir: Playwright dan Cypress untuk otomasi web end-to-end, Appium untuk pengujian mobile, Grafana k6 dan JMeter untuk uji beban performa, serta Postman/Newman untuk validasi kontrak API terotomasi di pipeline CI/CD."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa lama siklus pengujian QA biasanya berjalan?",
        a: "Untuk audit pengujian rilis aplikasi standar membutuhkan waktu 1 hingga 2 minggu. Untuk pembuatan suite skrip otomasi pengujian lengkap yang terintegrasi dengan pipeline CI/CD memakan waktu 3 hingga 5 minggu."
      },
      {
        category: "Garansi & Legal",
        q: "Dalam bentuk apa hasil kerja tim QA diserahkan kepada kami?",
        a: "Hasil kerja diserahkan dalam bentuk: Dokumen Master Test Plan, Laporan Matriks Bug terperinci (disertai video langkah reproduksi cacat sistem), Repositori Skrip Otomasi Pengujian, serta Dokumen Sertifikat Kesiapan Rilis (QA Sign-Off Report)."
      }
    ]
  },

  "web-development": {
    id: "11",
    slug: "web-development",
    title: "Pengembangan Website & Aplikasi Web Enterprise",
    eyebrow: "Pusat Bantuan & Edukasi Web",
    shortDesc: "Pertanyaan seputar website Next.js, skor performa SEO Google, CMS mandiri, keamanan SSL, dan portal sistem web enterprise.",
    relatedServiceSlug: "web-development",
    relatedPortfolioSlug: "web-development",
    faqs: [
      {
        category: "Konsep & Kebutuhan",
        q: "Mengapa BlankOn memilih arsitektur Next.js dan React dibanding CMS instan seperti WordPress biasa?",
        a: "Next.js menawarkan kecepatan muat sub-detik dengan Server-Side Rendering (SSR), kebal terhadap celah kerentanan plugin WordPress yang sering diretas, menghasilkan skor SEO Google maksimal (Core Web Vitals hijau), serta memberikan fleksibilitas tanpa batas untuk mengembangkan fitur interaktif yang kompleks."
      },
      {
        category: "Konsep & Kebutuhan",
        q: "Apakah website yang dibangun sudah otomatis ramah mesin pencari (SEO-Friendly)?",
        a: "Ya. Setiap website yang kami buat menerapkan standar Technical SEO menyeluruh: kecepatan muat di bawah 1 detik, struktur HTML semantik, metadata dinamis Open Graph, sitemap XML terotomasi, serta indeksasi halaman instan yang disukai oleh algoritma perayap Google."
      },
      {
        category: "Teknis & Keamanan",
        q: "Apakah tim internal kami yang bukan orang IT bisa mengubah teks dan foto di website secara mandiri?",
        a: "Tentu bisa. Kami dapat mengintegrasikan website dengan sistem Headless CMS yang sangat intuitif dan mudah dipahami, sehingga staf administrasi Anda dapat menambah artikel blog, memperbarui portofolio, atau mengganti banner promosi tanpa perlu menyentuh kode pemrograman."
      },
      {
        category: "Teknis & Keamanan",
        q: "Bagaimana perlindungan keamanan website terhadap serangan siber dan peretasan?",
        a: "Website dilindungi konfigurasi SSL/TLS Strict, Content Security Policy (CSP), proteksi formulir dari bot spam (hCaptcha), serta integrasi jaringan Cloudflare CDN yang menyaring serangan DDoS dan traffic berbahaya secara otomatis."
      },
      {
        category: "Biaya & Timeline",
        q: "Berapa lama waktu pembuatan website profil perusahaan atau aplikasi web kustom?",
        a: "Untuk website profil perusahaan korporat berstandar tinggi membutuhkan waktu 3 hingga 5 minggu. Untuk aplikasi web enterprise kustom atau portal klien berbasis database interaktif berkisar antara 6 hingga 12 minggu."
      },
      {
        category: "Biaya & Timeline",
        q: "Apakah ada biaya tersembunyi setelah website diluncurkan?",
        a: "Tidak ada. Biaya pengembangan transparan sejak penawaran awal disepakati. Biaya operasional lanjutan hanyalah sewa nama domain tahunan dan hosting cloud yang dibayarkan langsung secara mandiri tanpa markup sepihak dari kami."
      },
      {
        category: "Garansi & Legal",
        q: "Siapa yang memiliki hak cipta source code website setelah selesai?",
        a: "Seluruh kode sumber (source code) di repositori Git, desain antarmuka, aset grafis, dan hak kepemilikan domain 100% adalah milik penuh perusahaan Anda setelah serah terima proyek diselesaikan."
      },
      {
        category: "Garansi & Legal",
        q: "Apakah ada garansi pemeliharaan jika terjadi kendala pada website setelah serah terima?",
        a: "Ya. Setiap website dilindungi garansi perbaikan bug dan pemantauan performa gratis selama periode awal pasca-peluncuran, disertai dukungan konsultasi teknis dari tim engineer kami."
      }
    ]
  }
};

