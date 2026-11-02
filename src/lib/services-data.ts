export interface ServiceEduConcept {
  term: string;
  explanation: string;
}

export interface ServiceProblemSolution {
  problem: string;
  solution: string;
  impact: string;
}

export interface ServiceDeliverable {
  title: string;
  desc: string;
  features: string[];
}

export interface ServiceWorkflowStep {
  step: string;
  title: string;
  desc: string;
  deliverable: string;
}

export interface ServiceTechStack {
  category: string;
  items: string[];
}

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceDetailData {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  heroDesc: string;
  tags: string[];
  image: string;
  targetAudience: string;

  // 1. Fondasi & Konsep Dasar (Edukasi Klien)
  overview: {
    summary: string;
    fundamentalRole: string;
    keyConcepts: ServiceEduConcept[];
  };

  // 2. Kapan & Mengapa Butuh (Problem & Solusi)
  whyNeedIt: {
    title: string;
    subtitle: string;
    scenarios: ServiceProblemSolution[];
  };

  // 3. Ruang Lingkup Layanan (Deliverables)
  deliverables: ServiceDeliverable[];

  // 4. Tahapan Kerja (Metodologi Implementasi)
  workflow: ServiceWorkflowStep[];

  // 5. Standar Teknologi
  techStack: ServiceTechStack[];

  // 6. Pertanyaan Umum Calon Klien (FAQ Edukasi)
  faqs: ServiceFAQ[];

  // Tautan Terkait
  portfolioSlug: string;
  teamSlug: string;
}

export const servicesDetailData: Record<string, ServiceDetailData> = {
  "api-management-system-integration": {
    id: "01",
    slug: "api-management-system-integration",
    title: "API Management & Integrasi Sistem",
    eyebrow: "Arsitektur Interkoneksi & Otomasi Alur Data",
    headline: "Menghubungkan Aplikasi, Basis Data, dan Layanan Pihak Ketiga dalam Satu Ekosistem yang Sinkron dan Aman.",
    heroDesc: "Bongkar sekat pemisah antar sistem (silo data). Kami merancang arsitektur API Gateway dan pipeline integrasi yang memungkinkan seluruh perangkat lunak bisnis Anda bertukar informasi secara real-time tanpa kendala interoperabilitas.",
    tags: ["API Gateway", "Microservices", "RESTful & GraphQL", "Integrasi ERP / CRM", "Otomasi Data"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Perusahaan dengan berbagai aplikasi terpisah, institusi keuangan, ritel multi-cabang, dan platform B2B.",
    overview: {
      summary: "API (Application Programming Interface) adalah jembatan komunikasi digital yang memungkinkan dua atau lebih aplikasi bertukar data dan instruksi secara otomatis. Layanan API Management & System Integration memastikan jembatan tersebut tertata rapi, terkelola keamanannya, dan siap menahan lonjakan lalu lintas data antar server.",
      fundamentalRole: "Tanpa integrasi terpusat, operasional bisnis rentan mengalami selisih data, duplikasi input manual karyawan, dan kelemahan keamanan pada endpoint yang tidak terpantau.",
      keyConcepts: [
        {
          term: "API Gateway Terpadu",
          explanation: "Satu gerbang tunggal yang mengatur otentikasi, pembatasan kuota trafik (rate limiting), dan routing permintaan data sebelum menyentuh basis data inti perusahaan."
        },
        {
          term: "Interoperabilitas Sistem",
          explanation: "Kemampuan sistem lama (legacy) dan aplikasi modern berbasis cloud untuk saling membaca dan memproses format data tanpa perlu merombak seluruh kode lama."
        },
        {
          term: "Sinkronisasi Real-Time",
          explanation: "Pembaruan data instan melalui teknologi Webhook atau Event-Driven Architecture, sehingga transaksi di cabang langsung tercermin di kantor pusat."
        }
      ]
    },
    whyNeedIt: {
      title: "Kapan Bisnis Anda Membutuhkan Integrasi Sistem?",
      subtitle: "Identifikasi tanda-tanda inefisiensi pada infrastruktur perangkat lunak Anda:",
      scenarios: [
        {
          problem: "Staf menghabiskan waktu berjam-jam untuk memasukkan data transaksi yang sama ke sistem akuntansi, CRM, dan inventori.",
          solution: "Membangun middleware API otomatis yang menduplikasi dan memvalidasi data antar sistem secara seketika begitu transaksi terjadi.",
          impact: "Eliminasi 100% human error dalam input data dan penghematan puluhan jam kerja staf operasional setiap pekannya."
        },
        {
          problem: "Sistem server sering lambat atau down saat mitra eksternal menarik laporan atau data transaksi dalam volume besar.",
          solution: "Implementasi API Management dengan mekanisme caching berlapis, rate limiting, dan asynchronous queue.",
          impact: "Server utama tetap stabil 99.9%, beban database berkurang drastis, dan mitra mendapatkan data lebih cepat."
        },
        {
          problem: "Khawatir terhadap kebocoran data sensitif saat membuka akses sistem kepada rekanan bisnis atau vendor teknologi.",
          solution: "Penerapan standar keamanan industri seperti OAuth 2.0, JSON Web Token (JWT), enkripsi TLS end-to-end, dan audit log menyeluruh.",
          impact: "Setiap pertukaran data terlindungi protokol enkripsi ketat dengan jejak riwayat audit yang jelas dan sesuai regulasi keamanan informasi."
        }
      ]
    },
    deliverables: [
      {
        title: "Perancangan & Arsitektur API Gateway",
        desc: "Membangun gerbang kendali terpusat untuk memonitor, mengamankan, dan mengatur distribusi panggilan API.",
        features: ["Rate limiting & throttling lalu lintas data", "Otentikasi terstandarisasi (OAuth 2.0 / API Keys)", "Load balancing antar instance server", "Dashboard monitoring performa & latency"]
      },
      {
        title: "Integrasi Sistem Core & Pihak Ketiga",
        desc: "Menghubungkan aplikasi bisnis internal Anda dengan platform eksternal terkemuka.",
        features: ["Integrasi Payment Gateway resmi", "Sinkronisasi ERP (SAP, Odoo, Oracle)", "Koneksi logistik & pelacakan resi kurir", "Integrasi CRM & platform pemasaran"]
      },
      {
        title: "Dokumentasi Interaktif & Portal Developer",
        desc: "Menyediakan dokumentasi teknis OpenAPI / Swagger yang memudahkan tim internal maupun mitra untuk berintegrasi.",
        features: ["Spesifikasi endpoint terstruktur", "Sandbox environment untuk uji coba", "Panduan error handling & status code", "Contoh kode berbagai bahasa pemrograman"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Pemetaan Alur Data & Audit Sistem",
        desc: "Menganalisis sistem yang saat ini berjalan, memetakan skema database, dan mengidentifikasi titik bottleneck komunikasi data.",
        deliverable: "Dokumen Arsitektur Integrasi & Matriks Kompatibilitas"
      },
      {
        step: "02",
        title: "Desain Kontrak API & Standarisasi",
        desc: "Menyusun skema data standar (JSON schema), format respons, dan mekanisme otentikasi sebelum kode ditulis.",
        deliverable: "Spesifikasi Swagger / OpenAPI v3 Terverifikasi"
      },
      {
        step: "03",
        title: "Pembangunan Middleware & Pipeline",
        desc: "Membangun middleware logika integrasi, transformasi data, dan mekanisme retry otomatis bila terjadi kegagalan jaringan.",
        deliverable: "Source Code Integrasi & Unit/Integration Tests"
      },
      {
        step: "04",
        title: "Stress Testing, Deployment & Handover",
        desc: "Uji beban trafik tinggi, penerapan monitoring aktif 24/7, dan pelatihan penggunaan portal API untuk tim teknis klien.",
        deliverable: "Sistem Terpasang Siap Produksi & Panduan Operasional"
      }
    ],
    techStack: [
      { category: "Protokol & Pola", items: ["RESTful API", "GraphQL", "gRPC", "Webhooks", "Event-Driven"] },
      { category: "Gateway & Middleware", items: ["Kong", "KrakenD", "Node.js", "Go", "FastAPI"] },
      { category: "Messaging & Queue", items: ["RabbitMQ", "Apache Kafka", "Redis Streams"] },
      { category: "Keamanan", items: ["OAuth 2.0", "JWT", "HMAC Signature", "mTLS"] }
    ],
    faqs: [
      {
        q: "Apakah kami harus mengganti sistem lama kami untuk bisa berintegrasi?",
        a: "Tidak perlu. Pendekatan kami mengutamakan pembuatan lapisan adaptor (middleware) yang menerjemahkan data dari sistem lama (legacy) ke format modern tanpa harus merusak sistem yang sedang berjalan."
      },
      {
        q: "Berapa lama waktu yang dibutuhkan untuk integrasi dua sistem bisnis?",
        a: "Untuk integrasi standar (seperti Payment Gateway atau sinkronisasi dua platform) umumnya memakan waktu 2 hingga 4 minggu, tergantung ketersediaan dokumentasi dan akses API pada masing-masing sistem."
      }
    ],
    portfolioSlug: "api-management-system-integration",
    teamSlug: "api-management-system-integration"
  },

  "blockchain": {
    id: "02",
    slug: "blockchain",
    title: "Teknologi Blockchain & Smart Contract",
    eyebrow: "Integritas Data, Transparansi, & Desentralisasi Terverifikasi",
    headline: "Membangun Catatan Data yang Kebal Manipulasi dan Kontrak Cerdas Terotomasi untuk Kebutuhan Bisnis Berkepercayaan Tinggi.",
    heroDesc: "Bukan sekadar tren spekulatif. Kami berfokus pada implementasi enterprise blockchain yang memecahkan masalah riil seputar integritas rekaman data, pembuktian keaslian dokumen, transparansi rantai pasok, dan tata kelola aset digital.",
    tags: ["Smart Contracts", "Enterprise Ledger", "Tokenisasi Aset", "Verifikasi Keaslian", "Web3 Integration"],
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Institusi pendidikan, perusahaan logistik, platform legal tech, dan bisnis yang membutuhkan audit trail absolut.",
    overview: {
      summary: "Blockchain adalah buku kas digital terdistribusi di mana setiap entri data diamankan secara kriptografis dan tidak dapat diubah atau dihapus secara sepihak (immutable). Dipadukan dengan Smart Contract (perjanjian kode otomatis), transaksi bisnis dapat dieksekusi tanpa perantara pihak ketiga yang mahal.",
      fundamentalRole: "Ketika kepercayaan antar pihak yang bekerja sama sulit dijaga atau risiko kecurangan administratif tinggi, blockchain menyediakan verifikasi independen yang dapat diaudit oleh siapa saja yang berwenang.",
      keyConcepts: [
        {
          term: "Immutabilitas (Kekekalan Rekaman)",
          explanation: "Sekali data transaksi tercatat dalam blok, tidak ada admin atau hacker yang dapat merevisi catatan tersebut tanpa merusak validitas seluruh jaringan."
        },
        {
          term: "Smart Contract Mandiri",
          explanation: "Logika pemrograman yang mengeksekusi aksi secara otomatis bila syarat tertentu terpenuhi (misal: pembayaran cair saat bukti serah terima terverifikasi)."
        },
        {
          term: "Private / Consortium Ledger",
          explanation: "Jaringan blockchain berizin khusus (permissioned) yang menjaga kerahasiaan data internal korporasi namun tetap menjamin desentralisasi verifikasi antar anggota konsorsium."
        }
      ]
    },
    whyNeedIt: {
      title: "Kapan Bisnis Memerlukan Arsitektur Blockchain?",
      subtitle: "Gunakan blockchain bila model bisnis Anda bergantung pada pembuktian validitas tanpa celah kompromi:",
      scenarios: [
        {
          problem: "Ijazah, sertifikat pelatihan, atau dokumen kepemilikan rentan dipalsukan dan memakan waktu lama saat diverifikasi secara manual.",
          solution: "Menerbitkan hash kriptografis dokumen ke dalam blockchain sehingga siapa pun dapat memvalidasi keaslian dokumen hanya dengan sekali scan QR code.",
          impact: "Pemberantasan pemalsuan dokumen secara absolut dan proses verifikasi instan dalam hitungan detik."
        },
        {
          problem: "Rantai pasok (supply chain) melibatkan banyak vendor independen; riwayat asal usul bahan baku sering dimanipulasi atau tidak transparan.",
          solution: "Pencatatan setiap perpindahan barang dan hasil uji mutu ke dalam distributed ledger berbasis permissioned blockchain.",
          impact: "Kepatuhan audit standar ekspor terpenuhi dan nilai jual produk meningkat berkat transparansi provenance yang terbukti."
        },
        {
          problem: "Penyelesaian transaksi bisnis antar korporasi memakan waktu berhari-hari akibat proses rekonsiliasi manual antar bank/pihak.",
          solution: "Implementasi Smart Contract escrow yang memverifikasi kondisi pengiriman sebelum dana dialokasikan otomatis.",
          impact: "Pengurangan biaya sengketa dan percepatan penyelesaian kas dari hitungan hari menjadi hitungan menit."
        }
      ]
    },
    deliverables: [
      {
        title: "Pengembangan & Audit Smart Contract",
        desc: "Menulis kode kontrak pintar yang efisien, hemat biaya komputasi (gas-optimized), dan lolos pengujian keamanan ketat.",
        features: ["Smart contract Solidity / Rust teruji", "Audit keamanan celah reentrancy & overflow", "Simulasi testnet komprehensif", "Dokumentasi logika eksekusi kontrak"]
      },
      {
        title: "Private Consortium Blockchain",
        desc: "Mendirikan jaringan node terdistribusi berbasis Hyperledger Besu atau Polygon Edge untuk kebutuhan internal grup usaha.",
        features: ["Manajemen izin akses role-based", "Performa tinggi (ribuan transaksi per detik)", "Biaya transaksi nol untuk node internal", "Dashboard monitoring node & validator"]
      },
      {
        title: "Integrasi Web3 & Antarmuka Aplikasi (dApp)",
        desc: "Menghubungkan aplikasi web/mobile yang sudah ada dengan wallet dan jaringan blockchain.",
        features: ["Integrasi WalletConnect & Web3.js / Ethers.js", "Sistem verifikasi tanda tangan digital", "Indeksasi data on-chain dengan Subgraph", "User interface familiar tanpa kebingungan teknis"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Uji Kelayakan Solusi (Feasibility Study)",
        desc: "Mengevaluasi apakah permasalahan Anda benar-benar membutuhkan blockchain atau cukup menggunakan database terenkripsi.",
        deliverable: "Analisis Kelayakan Arsitektur & Rekomendasi Jaringan"
      },
      {
        step: "02",
        title: "Desain Arsitektur Data & Smart Contract",
        desc: "Memodelkan alur transaksi, struktur state variable, dan hak akses antar aktor dalam sistem.",
        deliverable: "Spesifikasi Smart Contract & Diagram Alur Interaksi"
      },
      {
        step: "03",
        title: "Pengembangan & Audit Keamanan",
        desc: "Menulis kode, melakukan automated testing, serta audit mendalam untuk mencegah eksploitasi celah keamanan.",
        deliverable: "Laporan Hasil Audit Keamanan & Source Code Bersertifikat"
      },
      {
        step: "04",
        title: "Peluncuran Jaringan & Integrasi Frontend",
        desc: "Deploy kontrak ke mainnet/consortium, menghubungkan ke antarmuka aplikasi klien, dan penyediaan dokumentasi tim.",
        deliverable: "Aplikasi Terhubung Mainnet & Petunjuk Pengelolaan Kunci"
      }
    ],
    techStack: [
      { category: "Jaringan Blockchain", items: ["Ethereum / EVM", "Polygon", "Hyperledger", "Arbitrum"] },
      { category: "Bahasa Smart Contract", items: ["Solidity", "Rust", "Vyper"] },
      { category: "Tooling & Audit", items: ["Hardhat", "Foundry", "Slither", "OpenZeppelin"] },
      { category: "Integrasi Antarmuka", items: ["Ethers.js", "Viem", "Wagmi", "The Graph"] }
    ],
    faqs: [
      {
        q: "Apakah menerapkan blockchain selalu membutuhkan biaya transaksi mata uang kripto yang mahal?",
        a: "Tidak. Untuk kebutuhan enterprise, kami umumnya menerapkan solusi Layer 2 dengan biaya mendekati nol, atau mendirikan Private Consortium Blockchain di mana biaya transaksi internal adalah gratis."
      },
      {
        q: "Bagaimana jika ada kesalahan data yang terlanjur tercatat di blockchain?",
        a: "Data on-chain tidak bisa dihapus, namun kami merancang pola arsitektur 'correction entry' atau upgradeable smart contract sehingga perbaikan data tercatat sebagai revisi resmi tanpa menghapus riwayat aslinya."
      }
    ],
    portfolioSlug: "blockchain",
    teamSlug: "blockchain"
  },

  "cloud-computing": {
    id: "03",
    slug: "cloud-computing",
    title: "Komputasi Cloud & Infrastruktur DevOps",
    eyebrow: "Skalabilitas Tinggi, Ketersediaan 99.9%, & Keamanan Berstandar Global",
    headline: "Membangun Infrastruktur Server Modern yang Siap Menangani Lonjakan Trafik Bisnis Tanpa Hambatan Down-Time.",
    heroDesc: "Tinggalkan kecemasan server tumbang di tengah promosi besar. Kami merancang arsitektur cloud-native yang otomatis menyesuaikan kapasitas secara dinamis, mengoptimalkan biaya tagihan server bulanan, dan mempercepat siklus rilis fitur baru.",
    tags: ["AWS / GCP / Cloudflare", "Kubernetes & Docker", "CI/CD Pipeline", "Auto-Scaling", "Keamanan Cloud"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Perusahaan yang sedang berkembang cepat, platform e-commerce, startup teknologi, dan instansi dengan trafik fluktuatif.",
    overview: {
      summary: "Cloud Computing menggantikan ketergantungan pada server fisik kantor dengan pusat data global berkeandalan tinggi. Dengan metodologi DevOps dan Infrastructure as Code (IaC), seluruh server, jaringan, dan database dapat dikelola melalui kode pemrograman yang terotomatisasi, mudah direplikasi, dan terpantau 24/7.",
      fundamentalRole: "Infrastruktur cloud yang dirancang tepat mencegah pemborosan biaya sewa server statis yang mubazir di masa tenang, sekaligus menjamin aplikasi tidak macet saat ribuan pengguna masuk secara bersamaan.",
      keyConcepts: [
        {
          term: "Auto-Scaling Dinamis",
          explanation: "Kemampuan sistem menambah unit server saat pengunjung membludak, dan otomatis mengecilkannya kembali saat trafik reda agar hemat biaya."
        },
        {
          term: "Pipa CI/CD Terotomasi",
          explanation: "Alur rilis kode dari pengembang langsung ke server produksi melalui pengujian otomatis dalam hitungan menit tanpa ada downtime pengguna."
        },
        {
          term: "Disaster Recovery & Backup Multi-Zona",
          explanation: "Penyimpanan data yang tersebar di beberapa pusat data geografis berbeda, sehingga jika salah satu lokasi bermasalah, aplikasi tetap berjalan normal."
        }
      ]
    },
    whyNeedIt: {
      title: "Mengapa Bisnis Anda Harus Beralih ke Cloud Modern?",
      subtitle: "Masalah nyata infrastruktur tradisional yang menghambat laju bisnis Anda:",
      scenarios: [
        {
          problem: "Aplikasi sering error atau tidak bisa diakses pelanggan saat ada kampanye diskon, siaran langsung, atau jam sibuk transaksi.",
          solution: "Implementasi load balancing cerdas dan auto-scaling group yang melipatgandakan daya tampung server dalam hitungan detik.",
          impact: "Toleransi trafik hingga puluhan ribu pengguna bersamaan tanpa penurunan performa dan tanpa kehilangan potensi transaksi."
        },
        {
          problem: "Tagihan cloud membengkak setiap bulan tanpa ada kejelasan komponen mana yang menghabiskan biaya paling besar.",
          solution: "Audit arsitektur FinOps: mematikan resource idle, mengoptimalkan ukuran database, dan menggunakan instance spot/reserved.",
          impact: "Penurunan biaya tagihan cloud bulanan antara 30% hingga 50% tanpa menurunkan performa aplikasi."
        },
        {
          problem: "Proses pembaruan fitur baru memakan waktu berhari-hari dan sering memunculkan bug baru yang merugikan pengguna.",
          solution: "Pembangunan pipeline CI/CD dengan staging environment terisolasi dan automated regression testing.",
          impact: "Fitur baru dapat dirilis beberapa kali dalam sehari secara aman dan tanpa mengganggu pengguna aktif."
        }
      ]
    },
    deliverables: [
      {
        title: "Perancangan & Migrasi Arsitektur Cloud",
        desc: "Memindahkan aplikasi dan basis data dari server lokal atau hosting konvensional ke arsitektur cloud terpercaya.",
        features: ["Perancangan topologi jaringan VPC aman", "Migrasi database tanpa downtime (Zero Downtime Migration)", "Konfigurasi CDN & caching global", "Penetapan kebijakan backup harian otomatis"]
      },
      {
        title: "Kontainerisasi & Orkestrasi Kubernetes",
        desc: "Mengemas aplikasi ke dalam kontainer Docker agar seragam, mudah dipindahkan, dan dikelola secara terpusat.",
        features: ["Dockerisasi multi-layanan", "Kluster Kubernetes (EKS / GKE)", "Penyusunan file konfigurasi Helm chart", "Isolasi environment (Dev, Staging, Prod)"]
      },
      {
        title: "Otomasi DevOps & Pemantauan 24/7",
        desc: "Membangun alur kerja rilis instan dan memasang sistem peringatan dini sebelum kendala dirasakan pengguna.",
        features: ["Pipeline GitHub Actions / GitLab CI", "Infrastructure as Code dengan Terraform", "Dashboard metrik Grafana & Prometheus", "Notifikasi insiden via Telegram / Slack"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Audit Beban Kerja & Estimasi Kebutuhan",
        desc: "Mengukur kapasitas komputasi eksisting, pola lonjakan pengguna, dan menetapkan target SLA uptime.",
        deliverable: "Cetak Biru Arsitektur Cloud & Estimasi Tagihan Bulanan"
      },
      {
        step: "02",
        title: "Provisi Infrastruktur Berbasis Kode (IaC)",
        desc: "Menulis konfigurasi server menggunakan Terraform sehingga infrastruktur dapat diduplikasi secara presisi.",
        deliverable: "Repositori Terraform & Konfigurasi Jaringan VPC"
      },
      {
        step: "03",
        title: "Simulasi Uji Coba & Migrasi Bertahap",
        desc: "Menjalankan uji beban di lingkungan staging dan memindahkan data secara bertahap untuk mencegah kegagalan.",
        deliverable: "Data Berhasil Dimigrasikan & Validasi Integritas Sistem"
      },
      {
        step: "04",
        title: "Peluncuran Penuh & Standby Monitoring",
        desc: "Mengarahkan domain utama ke infrastruktur baru dengan pendampingan teknis intensif saat peralihan.",
        deliverable: "Aplikasi Live di Cloud & Dashboard Pemantauan Siaga"
      }
    ],
    techStack: [
      { category: "Penyedia Cloud", items: ["Amazon Web Services (AWS)", "Google Cloud (GCP)", "Cloudflare", "DigitalOcean"] },
      { category: "Kontainer & Orkestrasi", items: ["Docker", "Kubernetes (K8s)", "Helm", "Docker Compose"] },
      { category: "CI/CD & Otomasi", items: ["GitHub Actions", "GitLab CI", "Terraform", "Ansible"] },
      { category: "Monitoring & Logging", items: ["Prometheus", "Grafana", "Datadog", "ELK Stack"] }
    ],
    faqs: [
      {
        q: "Apakah proses migrasi cloud akan menghentikan transaksi bisnis kami sementara waktu?",
        a: "Kami menerapkan metode migrasi bertahap (Blue/Green atau Canary Deployment) dengan replikasi database real-time, sehingga peralihan sistem berjalan mulus tanpa mengorbankan waktu henti (zero downtime)."
      },
      {
        q: "Siapa yang mengelola akun cloud dan data milik kami?",
        a: "Seluruh akun cloud dan kredensial akses 100% adalah hak milik perusahaan Anda. Tim kami hanya bertindak sebagai arsitek dan pengelola teknis atas izin akses yang Anda tetapkan."
      }
    ],
    portfolioSlug: "cloud-computing",
    teamSlug: "cloud-computing"
  },

  "creative-content-digital-media": {
    id: "04",
    slug: "creative-content-digital-media",
    title: "Konten Kreatif & Media Digital",
    eyebrow: "Strategi Visual, Desain UI/UX, & Komunikasi Digital Berdampak",
    headline: "Mentransformasikan Identitas Bisnis Menjadi Komunikasi Visual yang Elegan, Profesional, dan Mendorong Konversi.",
    heroDesc: "Produk canggih akan sia-sia jika gagal dipahami calon pelanggan. Kami menggabungkan riset psikologi pengguna, estetika visual korporat, dan strategi narasi digital agar brand Anda tampil berwibawa dan dipercaya oleh mitra bisnis.",
    tags: ["UI/UX Design", "Identitas Brand", "Video Profil Perusahaan", "Design System", "Aset Pemasaran"],
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Perusahaan yang sedang melakukan rebranding, peluncuran produk baru, dan korporasi yang ingin memperkuat reputasi digital.",
    overview: {
      summary: "Creative Content & Digital Media bukan sekadar membuat gambar yang menarik secara visual, melainkan strategi terukur dalam menyampaikan nilai keunggulan produk Anda. Melalui desain UI/UX yang intuitif dan aset media berkualitas tinggi, pengalaman interaksi pengguna berubah menjadi kepercayaan bisnis jangka panjang.",
      fundamentalRole: "Di era digital, antarmuka aplikasi dan materi presentasi adalah kontak pertama calon klien dengan perusahaan Anda. Kesan pertama yang tidak rapi langsung menurunkan kredibilitas penawaran Anda.",
      keyConcepts: [
        {
          term: "Design System Skalabel",
          explanation: "Panduan komponen visual terpadu (warna, tipografi, ikon, tombol) yang menjamin konsistensi tampilan di seluruh platform web, mobile, dan materi cetak."
        },
        {
          term: "Prinsip UX Berbasis Riset",
          explanation: "Perancangan alur aplikasi yang meminimalkan kebingungan pengguna (cognitive load) sehingga proses registrasi dan pembelian terasa mudah dan cepat."
        },
        {
          term: "Visual Storytelling Korporat",
          explanation: "Penyusunan narasi visual yang menerjemahkan teknologi rumit menjadi solusi sederhana yang relevan dengan kebutuhan pemegang keputusan."
        }
      ]
    },
    whyNeedIt: {
      title: "Kapan Anda Membutuhkan Re-Desain Konten & Media?",
      subtitle: "Gejala umum yang menunjukkan aset digital Anda perlu peningkatan profesional:",
      scenarios: [
        {
          problem: "Pengunjung website tinggi namun rasio pendaftaran atau pembelian sangat rendah karena navigasi halaman yang membingungkan.",
          solution: "Audit UX mendalam, perbaikan alur pengguna (user journey), dan perancangan ulang antarmuka yang berfokus pada Call-to-Action yang jelas.",
          impact: "Peningkatan rasio konversi leads dan penurunan bounce rate secara signifikan."
        },
        {
          problem: "Tampilan aplikasi dan materi promosi terlihat tidak seragam karena dikerjakan oleh berbagai tim tanpa panduan standar.",
          solution: "Penyusunan Design System korporat yang terdokumentasi rapi di Figma dan siap diimplementasikan oleh tim frontend.",
          impact: "Kecepatan pengembangan fitur meningkat 2x lipat dan identitas brand tampak solid di mata klien."
        },
        {
          problem: "Kesulitan menjelaskan keunggulan sistem kompleks kepada dewan direksi atau investor calon pendana.",
          solution: "Pembuatan deck presentasi interaktif, infografis arsitektur sistem, dan video animasi solusi produk.",
          impact: "Pesan teknis tersampaikan secara elegan dan proses pengambilan keputusan klien menjadi jauh lebih cepat."
        }
      ]
    },
    deliverables: [
      {
        title: "Perancangan UI/UX Aplikasi & Web Enterprise",
        desc: "Riset kebutuhan pengguna, pembuatan wireframe, hingga prototipe interaktif siap uji sebelum proses coding dimulai.",
        features: ["Riset personas & pemetaan user journey", "Wireframe low-fidelity & skenario alur", "Desain high-fidelity pixel-perfect", "Prototipe interaktif di Figma untuk demo klien"]
      },
      {
        title: "Design System & Pedoman Identitas Brand",
        desc: "Membangun repositori komponen desain lengkap untuk menjamin konsistensi grafis jangka panjang.",
        features: ["Palet warna & rasio kontras aksesibilitas", "Hierarki tipografi responsif", "Pustaka komponen UI (button, modal, input, dropdown)", "Panduan penggunaan aset digital korporat"]
      },
      {
        title: "Produksi Media Digital & Video Solusi",
        desc: "Pembuatan materi video explainer, dokumentasi sistem, dan aset digital untuk kampanye pemasaran korporat.",
        features: ["Video explainer produk beranimasi modern", "Infografis arsitektur teknologi terstruktur", "Aset materi presentasi bisnis (pitch deck)", "Format konten optimal untuk berbagai saluran publikasi"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Riset Audiens & Eksplorasi Brand",
        desc: "Mempelajari profil target klien, nilai inti bisnis, dan menganalisis tolok ukur kompetitor di industri Anda.",
        deliverable: "Dokumen Moodboard, Persona, & Sasaran Desain"
      },
      {
        step: "02",
        title: "Wireframing & Arsitektur Informasi",
        desc: "Menyusun struktur tata letak informasi dan logika alur pengguna sebelum sentuhan visual akhir diberikan.",
        deliverable: "Wireframe Interaktif & Alur Navigasi Pengguna"
      },
      {
        step: "03",
        title: "Desain Visual & Pembuatan Prototipe",
        desc: "Menerapkan identitas visual modern, tipografi berkarakter, dan efek interaksi yang hidup pada setiap layar.",
        deliverable: "Desain Figma High-Fidelity & Prototipe Siap Pakai"
      },
      {
        step: "04",
        title: "Design Tokens & Handover ke Tim Developer",
        desc: "Menyerahkan spesifikasi desain detail beserta design tokens (CSS variables) agar hasil coding persis dengan rancangan.",
        deliverable: "Aset Lengkap, Design Tokens, & Panduan Implementasi"
      }
    ],
    techStack: [
      { category: "Desain UI/UX", items: ["Figma", "FigJam", "Adobe XD", "Miro"] },
      { category: "Media & Animasi", items: ["Adobe After Effects", "Premiere Pro", "Illustrator", "Photoshop"] },
      { category: "Prototipe Interaktif", items: ["Protopie", "Framer", "Lottie Animations"] },
      { category: "Standar Desain", items: ["Design Tokens (W3C)", "WCAG 2.1 Accessibility", "Atomic Design"] }
    ],
    faqs: [
      {
        q: "Apakah file desain yang diserahkan bisa langsung digunakan oleh programmer kami?",
        a: "Ya. Kami menggunakan Figma dengan struktur auto-layout rapi, penamaan layer sistematis, serta spesifikasi CSS yang siap diintegrasikan langsung oleh tim software engineer Anda."
      },
      {
        q: "Berapa banyak putaran revisi yang disediakan selama proses perancangan?",
        a: "Kami menyediakan siklus tinjauan terstruktur di setiap tonggak (wireframe, visual dasar, dan prototipe final) untuk memastikan hasil akhir selaras sempurna dengan ekspektasi manajemen Anda."
      }
    ],
    portfolioSlug: "creative-content-digital-media",
    teamSlug: "creative-content-digital-media"
  },

  "data-science": {
    id: "05",
    slug: "data-science",
    title: "Sains Data & Business Intelligence (BI)",
    eyebrow: "Pemberdayaan Data Menjadi Wawasan Strategis Pengambil Keputusan",
    headline: "Ubah Tumpukan Data Mentah Perusahaan Menjadi Dashboard Prediktif dan Keputusan Bisnis yang Akurat.",
    heroDesc: "Jangan biarkan data transaksi dan perilaku pelanggan tersimpan pasif di server. Kami membangun pipeline pemrosesan data, visualisasi analitik real-time, dan model statistik prediktif yang membantu Anda mendeteksi peluang pasar lebih dini.",
    tags: ["Business Intelligence", "Dashboard Real-Time", "Data Pipeline (ETL)", "Analisis Prediktif", "Statistik Bisnis"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Manajemen eksekutif, divisi operasional ritel, industri manufaktur, dan platform dengan jutaan baris transaksi.",
    overview: {
      summary: "Data Science & Business Intelligence adalah disiplin mengekstraksi nilai dari kumpulan data yang besar dan rumit. Melalui pipeline ETL (Extract, Transform, Load) dan dashboard analitik interaktif, para pimpinan perusahaan dapat memantau indikator kinerja utama (KPI) secara real-time tanpa harus menunggu rekapitulasi manual di akhir bulan.",
      fundamentalRole: "Menggantikan spekulasi atau firasat dalam bisnis dengan fakta empiris terukur, sehingga alokasi anggaran promosi dan operasional menjadi jauh lebih presisi dan efisien.",
      keyConcepts: [
        {
          term: "Pipeline ETL Terotomasi",
          explanation: "Proses otomatis yang menyedot data dari berbagai sumber (POS, website, CRM), membersihkan data kotor, dan menyimpannya rapi di data warehouse."
        },
        {
          term: "Data Warehouse Modern",
          explanation: "Basis data analitik khusus (seperti ClickHouse atau BigQuery) yang dirancang untuk menjalankan kalkulasi jutaan data dalam hitungan detik."
        },
        {
          term: "Pemodelan Prediktif (Predictive Analytics)",
          explanation: "Penggunaan algoritma statistik untuk meramalkan tren masa depan, seperti perkiraan lonjakan permintaan stok barang atau risiko kehilangan pelanggan (churn)."
        }
      ]
    },
    whyNeedIt: {
      title: "Kapan Perusahaan Anda Membutuhkan Solusi Data Science?",
      subtitle: "Tanda-tanda bisnis Anda kewalahan mengelola data internal:",
      scenarios: [
        {
          problem: "Laporan performa cabang baru tersedia 1-2 minggu setelah penutupan bulan, membuat respon terhadap masalah operasional terlambat.",
          solution: "Implementasi data pipeline real-time dan dashboard eksekutif yang memperbarui angka metrik secara live.",
          impact: "Direksi dapat memantau pergerakan omzet dan stok setiap detik serta mengambil tindakan preventif segera."
        },
        {
          problem: "Data penjualan, keuangan, dan inventori tersimpan dalam format spreadsheet berbeda-beda dengan rumus rumit yang rentan error.",
          solution: "Konsolidasi data ke dalam satu Single Source of Truth (SSOT) yang otomatis memvalidasi keakuratan angka.",
          impact: "Meniadakan perdebatan tentang validitas data antar divisi dan mempercepat rapat evaluasi bulanan."
        },
        {
          problem: "Sering terjadi penumpukan stok barang yang tidak laku atau kehabisan barang cepat laku akibat perkiraan pesanan yang meleset.",
          solution: "Pembangunan model peramalan permintaan (demand forecasting) berbasis data historis dan musiman.",
          impact: "Penurunan biaya modal tertahan pada gudang hingga 25% dan pencegahan kehilangan omzet akibat kehabisan stok."
        }
      ]
    },
    deliverables: [
      {
        title: "Pembangunan Data Warehouse & Pipeline ETL",
        desc: "Mengumpulkan data dari berbagai database operasional ke dalam satu repository analitik terpusat.",
        features: ["Automated pipeline scheduler (Airflow / Prefect)", "Pembersihan & validasi data kotor otomatis", "Skema data relasional & bintang (Star Schema)", "Perlindungan data sensitif (anonymization & masking)"]
      },
      {
        title: "Dashboard Eksekutif & Visualisasi Interaktif",
        desc: "Merancang visualisasi data yang ramah pengguna untuk jajaran direksi dan manajer operasional.",
        features: ["Dashboard interaktif berbasis filter tanggal & cabang", "Metrik KPI finansial, operasional, & sales", "Ekspor laporan otomatis ke format PDF / Excel", "Akses aman berbasis hak wewenang jabatan"]
      },
      {
        title: "Pemodelan Analitik & Segmentasi Pelanggan",
        desc: "Menerapkan algoritma machine learning statistik untuk membedah perilaku pelanggan dan tren produk.",
        features: ["Segmentasi pelanggan berbasis metode RFM", "Prediksi churn & retensi pelanggan", "Model rekomendasi bundling produk (Market Basket Analysis)", "Dokumentasi temuan wawasan bisnis"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Inventarisasi Sumber Data & Penentuan KPI",
        desc: "Mengidentifikasi letak database, format data mentah, dan merumuskan metrik keberhasilan yang ingin dipantau.",
        deliverable: "Kamus Data Bisnis & Matriks Definisi KPI"
      },
      {
        step: "02",
        title: "Rancang Bangun Pipeline & Data Warehouse",
        desc: "Menyiapkan infrastruktur data warehouse dan menulis alur script ETL untuk membersihkan data.",
        deliverable: "Pipeline ETL Berjalan Otomatis & Data Warehouse Siap Pakai"
      },
      {
        step: "03",
        title: "Pengembangan Dashboard & Validasi Angka",
        desc: "Mendesain grafik analitik dan mencocokkan angka dashboard dengan laporan keuangan aktual untuk menjamin presisi 100%.",
        deliverable: "Dashboard Visual Interaktif dengan Angka Tervalidasi"
      },
      {
        step: "04",
        title: "Pelatihan Tim Analis & Panduan Pemeliharaan",
        desc: "Melatih staf internal dalam membaca dashboard, membuat laporan mandiri, dan merawat pipeline data.",
        deliverable: "Sesi Pelatihan Internal & Manual Pemeliharaan Data"
      }
    ],
    techStack: [
      { category: "Bahasa & Komputasi", items: ["Python", "SQL", "Pandas", "PySpark"] },
      { category: "Data Warehouse & DB", items: ["ClickHouse", "PostgreSQL", "Google BigQuery", "DuckDB"] },
      { category: "Visualisasi & BI", items: ["Metabase", "Apache Superset", "Power BI", "Tableau"] },
      { category: "Pipeline & ETL", items: ["Apache Airflow", "Prefect", "dbt (data build tool)"] }
    ],
    faqs: [
      {
        q: "Apakah data rahasia perusahaan kami aman saat proses pengolahan data?",
        a: "Sangat aman. Seluruh pipeline dan data warehouse dibangun di atas infrastruktur server milik perusahaan Anda sendiri dengan enkripsi data saat diam (at rest) maupun saat berpindah (in transit), tanpa mengirimkan data ke pihak ketiga."
      },
      {
        q: "Berapa lama proses pembuatan dashboard analitik hingga siap digunakan?",
        a: "Untuk dashboard standar dengan 2 hingga 3 sumber data operasional, implementasi biasanya membutuhkan waktu 3 sampai 5 minggu termasuk tahap validasi akurasi data."
      }
    ],
    portfolioSlug: "data-science",
    teamSlug: "data-science"
  },

  "game-development": {
    id: "06",
    slug: "game-development",
    title: "Pengembangan Game & Simulasi Interaktif",
    eyebrow: "Gamifikasi Bisnis, Pengalaman 2D/3D, & Media Interaktif Imersif",
    headline: "Menghidupkan Keterlibatan Pengguna Melalui Mekanika Permainan yang Adiktif, Menghibur, dan Bernilai Komersial.",
    heroDesc: "Gamifikasi bukan lagi sekadar hiburan. Kami merancang game mobile, web-based mini games untuk promosi brand, hingga simulasi pelatihan korporat interaktif 3D yang meningkatkan retensi pengguna berkali-kali lipat dibanding media statis.",
    tags: ["Unity Engine", "Game 2D & 3D", "Gamified Marketing", "Simulasi Pelatihan", "Web & Mobile Games"],
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Brand ritel yang ingin mengadakan kampanye viral, industri yang membutuhkan pelatihan simulasi berisiko rendah, dan studio penerbit game.",
    overview: {
      summary: "Game Development menggabungkan pemrograman matematika grafis, mekanika aturan bermain (gameplay mechanics), seni audio-visual, dan psikologi keterlibatan (engagement loop). Hasilnya adalah media interaktif yang membuat pengguna rela menghabiskan waktu berjam-jam untuk berinteraksi dengan pesan brand Anda.",
      fundamentalRole: "Di tengah kejenuhan iklan konvensional, game interaktif memberikan insentif bermain dan rasa pencapaian (reward system) yang mengubah penonton pasif menjadi partisipan aktif brand.",
      keyConcepts: [
        {
          term: "Mekanika Gamifikasi (Core Loop)",
          explanation: "Siklus bermain: Tantangan -> Penyelesaian -> Reward (poin/voucher) yang memicu hormon dopamin dan loyalitas pengguna."
        },
        {
          term: "Lintas Platform (Cross-Platform)",
          explanation: "Game yang dibangun dapat dimainkan dengan mulus di browser web (HTML5/WebGL), smartphone Android/iOS, maupun PC tanpa perlu membuat ulang dari nol."
        },
        {
          term: "Simulasi Berbasis Fisika (Physics Simulation)",
          explanation: "Perhitungan gravitasi, benturan, dan respon objek 3D yang menyerupai dunia nyata untuk kebutuhan pelatihan kejuruan atau keselamatan kerja."
        }
      ]
    },
    whyNeedIt: {
      title: "Bagaimana Game Memberi Keuntungan Bagi Bisnis Anda?",
      subtitle: "Penerapan media interaktif dalam memecahkan tantangan pemasaran dan pelatihan:",
      scenarios: [
        {
          problem: "Biaya promosi digital tinggi namun tingkat interaksi dan pengunduhan kupon diskon sangat rendah.",
          solution: "Meluncurkan mini-game promosi berbasis web yang menghadiahkan voucher diskon langsung kepada pengguna dengan skor tertinggi.",
          impact: "Waktu interaksi brand meningkat hingga 500% dan tingkat klaim voucher naik berlipat ganda."
        },
        {
          problem: "Pelatihan teknis staf lapangan berisiko tinggi dan membutuhkan biaya sewa alat peraga fisik yang sangat mahal.",
          solution: "Pembangunan game simulasi 3D interaktif yang mereplikasi skenario darurat dan pengoperasian mesin secara detail.",
          impact: "Penekanan biaya pelatihan fisik hingga 70% dan peningkatan kesiapan respons karyawan terhadap insiden nyata."
        },
        {
          problem: "Memiliki ide produk game komersial namun tidak memiliki tim teknis untuk menerjemahkannya ke dalam kode dan performa stabil.",
          solution: "Penyediaan layanan pengembangan game full-cycle: mulai dari desain game design document (GDD), pemrograman logika, hingga publikasi ke Google Play & App Store.",
          impact: "Produk game rilis tepat waktu dengan performa 60 FPS yang stabil dan siap menghasilkan monetisasi iklan/IAP."
        }
      ]
    },
    deliverables: [
      {
        title: "Pengembangan Game Mobile & Web (2D & 3D)",
        desc: "Membangun game responsif untuk platform Android, iOS, dan WebGL menggunakan Unity Engine.",
        features: ["Gameplay mechanics responsif & adiktif", "Optimasi grafis untuk perangkat berspesifikasi rendah", "Sistem leaderboard & kompetisi online", "Integrasi iklan (AdMob) & pembelian dalam aplikasi (IAP)"]
      },
      {
        title: "Aplikasi Gamifikasi Pemasaran & Brand Activation",
        desc: "Game ringan yang terintegrasi langsung dengan database promosi dan website perusahaan.",
        features: ["Game instan tanpa perlu unduh aplikasi (Web-based)", "Sistem klaim voucher belanja otomatis", "Validasi anti-cheat untuk hadiah undian", "Dashboard pelacakan interaksi pemain"]
      },
      {
        title: "Simulasi Interaktif & Media Pelatihan Korporat",
        desc: "Aplikasi simulasi skenario prosedur kerja dan eksplorasi virtual lingkungan perusahaan.",
        features: ["Visual 3D detail dengan simulasi fisika realistis", "Pelacakan skor kelulusan prosedur staf", "Dukungan kontrol sentuh, mouse/keyboard, atau VR", "Mode tutorial interaktif langkah-demi-langkah"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Konsep Kreatif & Game Design Document (GDD)",
        desc: "Merumuskan alur cerita, aturan main, target pemain, dan skema monetisasi atau sasaran bisnis.",
        deliverable: "Dokumen GDD Komprehensif & Sketsa Konsep Visual"
      },
      {
        step: "02",
        title: "Pembuatan Prototipe Core Gameplay",
        desc: "Membangun versi uji coba cepat (greybox prototype) untuk memastikan mekanisme bermain terasa seru dan responsif.",
        deliverable: "Prototipe Interaktif Siap Uji Rasa Bermain"
      },
      {
        step: "03",
        title: "Produksi Aset Visual, Audio, & Pemrograman",
        desc: "Membuat model 3D / sprite 2D, sound effect, animasi, dan merajut seluruh sistem ke dalam game engine.",
        deliverable: "Build Game Versi Alpha / Beta Lengkap"
      },
      {
        step: "04",
        title: "Playtesting, Optimasi Performa, & Peluncuran",
        desc: "Memastikan stabilitas frame rate di berbagai jenis gawai, menguji anti-cheat, dan mendampingi proses rilis toko aplikasi.",
        deliverable: "Game Siap Rilis di Toko Aplikasi / Live di Server Web"
      }
    ],
    techStack: [
      { category: "Game Engine", items: ["Unity (C#)", "Unreal Engine (C++ / Blueprints)", "Godot"] },
      { category: "Grafis & Aset", items: ["Blender", "Spine 2D", "Adobe Photoshop", "Substance Painter"] },
      { category: "Audio & Efek", items: ["FMOD", "Audacity", "Particle System"] },
      { category: "Backend & Multiplayer", items: ["Photon Engine", "Nakama", "Firebase Realtime DB"] }
    ],
    faqs: [
      {
        q: "Apakah pengguna harus mengunduh aplikasi besar untuk memainkan game promosi brand?",
        a: "Tidak harus. Kami dapat membangun game berbasis WebGL / HTML5 yang dapat dibuka langsung lewat link browser smartphone tanpa instalasi aplikasi, sangat cocok untuk promosi media sosial."
      },
      {
        q: "Siapa yang memiliki hak kekayaan intelektual (IP) atas karakter dan kode game yang dibuat?",
        a: "Seluruh hak cipta, source code, desain karakter, dan aset audio-visual 100% dialihkan menjadi hak milik eksklusif perusahaan Anda setelah proyek selesai."
      }
    ],
    portfolioSlug: "game-development",
    teamSlug: "game-development"
  },

  "internet-of-things": {
    id: "07",
    slug: "internet-of-things",
    title: "Internet of Things (IoT) & Integrasi Perangkat Keras",
    eyebrow: "Telemetri Sensor Real-Time, Otomasi Mesin, & Monitoring Jarak Jauh",
    headline: "Menjembatani Dunia Fisik dan Digital Melalui Sensor Cerdas, Kontrol Otomatis, dan Analitik Lapangan Terpadu.",
    heroDesc: "Pantau kondisi aset operasional Anda dari mana saja secara real-time. Kami merancang solusi IoT end-to-end: mulai dari integrasi sensor mikrokontroler di lapangan, protokol jaringan hemat daya, hingga dashboard analitik berbasis cloud.",
    tags: ["Sensor Telemetri", "Mikrokontroler ESP32/ARM", "MQTT & WebSocket", "Monitoring Industri", "Otomasi Hardware"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Perkebunan & agrikultur modern, gudang logistik, pabrik manufaktur, sistem smart building, dan smart environment.",
    overview: {
      summary: "Internet of Things (IoT) adalah teknologi yang menyematkan sensor, daya komputasi, dan konektivitas jaringan pada benda-benda fisik. Data parameter fisik (suhu, getaran, arus listrik, ketinggian air) dikirimkan secara otomatis ke cloud untuk dianalisis dan memicu respon otomatis tanpa perlu campur tangan manusia.",
      fundamentalRole: "Meniadakan kebutuhan inspeksi manual yang berbiaya mahal dan berisiko terlewat, sehingga gangguan pada mesin atau penurunan kualitas komoditas dapat dicegah sebelum menimbulkan kerugian besar.",
      keyConcepts: [
        {
          term: "Protokol Komunikasi Ringan (MQTT)",
          explanation: "Standar protokol pengiriman data hemat daya dan bandwidth rendah yang dirancang khusus untuk kondisi jaringan seluler terpencil di lapangan."
        },
        {
          term: "Edge Computing",
          explanation: "Pemrosesan keputusan darurat langsung di level perangkat fisik (tanpa menunggu respon cloud), seperti mematikan mesin otomatis jika terdeteksi overheat berbahaya."
        },
        {
          term: "Predictive Maintenance (Pemeliharaan Berbasis Prediksi)",
          explanation: "Pemanfaatan data getaran dan temperatur mesin untuk memprediksi keausan komponen jauh sebelum terjadi kerusakan mesin total."
        }
      ]
    },
    whyNeedIt: {
      title: "Kapan Operasional Anda Membutuhkan Solusi IoT?",
      subtitle: "Masalah lapangan yang sering menguras biaya dan tenaga operasional:",
      scenarios: [
        {
          problem: "Suhu ruang penyimpanan dingin (cold storage) sering fluktuatif tanpa diketahui, menyebabkan komoditas rusak senilai puluhan juta rupiah.",
          solution: "Pemasangan sensor suhu & kelembaban industri berkalibrasi tinggi dengan peringatan alarm instan via WhatsApp/SMS saat batas aman terlampaui.",
          impact: "Pencegahan kerugian kerusakan komoditas 100% dan jaminan kepatuhan terhadap standar rantai dingin (cold chain)."
        },
        {
          problem: "Petugas harus berkeliling memeriksa ratusan meteran listrik atau ketinggian tangki cairan secara manual setiap hari.",
          solution: "Digitalisasi pembacaan meter otomatis (smart metering) yang mengirimkan data pemakaian per jam ke dashboard pusat.",
          impact: "Efisiensi jam kerja staf hingga 90% dan penghapusan kesalahan pencatatan manual."
        },
        {
          problem: "Mesin pabrik tiba-tiba rusak di tengah proses produksi tanpa tanda-tanda peringatan, menghentikan seluruh lini perakitan.",
          solution: "Sensor getaran dan suhu motor industri yang mendeteksi anomali pola gesekan komponen mekanikal.",
          impact: "Pengurangan waktu henti tak terduga (unplanned downtime) hingga 40% dan perpanjangan usia pakai mesin."
        }
      ]
    },
    deliverables: [
      {
        title: "Perancangan Firmware & Perangkat Keras Sensor",
        desc: "Memilih komponen sensor industri yang tahan cuaca, mendesain sirkuit PCB, dan memprogram firmware mikrokontroler hemat energi.",
        features: ["Dukungan mikrokontroler ESP32 / STM32 / Arduino", "Konektivitas WiFi, 4G LTE, LoRaWAN, atau Ethernet", "Manajemen daya baterai & panel surya", "Fitur update firmware jarak jauh (OTA - Over The Air)"]
      },
      {
        title: "Arsitektur Broker MQTT & Cloud Ingestion",
        desc: "Menyediakan server penerima data sensor yang sanggup menerima ribuan pesan telemetri per detik tanpa kehilangan paket data.",
        features: ["Broker MQTT terenkripsi (TLS)", "Penyimpanan database deret waktu (Time-Series DB)", "Pipeline aturan logika otomatisasi (Rule Engine)", "Sistem alarm peringatan darurat multi-saluran"]
      },
      {
        title: "Dashboard Monitoring & Kontrol Perangkat Web/Mobile",
        desc: "Antarmuka grafis untuk melihat peta sebaran sensor di lapangan dan mengirimkan perintah eksekusi ke perangkat.",
        features: ["Peta geospasial titik sensor aktif", "Grafik tren parameter historis interaktif", "Tombol kontrol on/off aktuator jarak jauh", "Pemberitahuan insiden anomali seketika"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Survei Kondisi Lingkungan Lapangan",
        desc: "Meneliti ketersediaan sinyal seluler, sumber daya listrik, rentang suhu operasional, dan parameter fisik yang ingin diukur.",
        deliverable: "Spesifikasi Sensor & Dokumen Topologi Komunikasi"
      },
      {
        step: "02",
        title: "Perakitan Prototipe & Uji Firmware",
        desc: "Merakit unit perangkat keras purwarupa dan melakukan kalibrasi keakuratan sensor di laboratorium pengujian.",
        deliverable: "Prototipe Hardware Siap Uji & Kode Firmware Sumber"
      },
      {
        step: "03",
        title: "Uji Coba Lapangan (Pilot Project)",
        desc: "Memasang sejumlah unit sensor di lokasi riil untuk memvalidasi ketahanan cuaca dan stabilitas pengiriman sinyal.",
        deliverable: "Laporan Stabilitas Uji Coba Lapangan Selama 14 Hari"
      },
      {
        step: "04",
        title: "Produksi Massal & Deployment Dashboard",
        desc: "Pemasangan menyeluruh di seluruh titik aset, integrasi ke dashboard manajemen perusahaan, dan pelatihan staf operasional.",
        deliverable: "Seluruh Perangkat Aktif & Dashboard Monitoring Siap Pakai"
      }
    ],
    techStack: [
      { category: "Hardware & MCU", items: ["ESP32", "STM32 (ARM Cortex)", "Raspberry Pi", "Sensor RS485 / Modbus"] },
      { category: "Jaringan & Protokol", items: ["MQTT", "LoRaWAN", "CoAP", "HTTP REST", "WebSocket"] },
      { category: "Penyimpanan Deret Waktu", items: ["InfluxDB", "TimescaleDB", "ClickHouse"] },
      { category: "Dashboard & Visualisasi", items: ["ThingsBoard", "Grafana", "Kustom React Dashboard"] }
    ],
    faqs: [
      {
        q: "Bagaimana jika lokasi pemasangan sensor tidak memiliki akses sinyal WiFi?",
        a: "Kami menyediakan opsi modul komunikasi 4G LTE seluler mandiri atau teknologi LoRaWAN yang mampu menjangkau jarak hingga 10 kilometer dengan daya baterai tahan bertahun-tahun."
      },
      {
        q: "Apakah data sensor bisa diintegrasikan ke dalam sistem ERP atau database yang sudah ada?",
        a: "Sangat bisa. Kami merancang arsitektur terbuka di mana seluruh data sensor dapat diteruskan melalui Webhook atau REST API langsung ke sistem ERP internal Anda."
      }
    ],
    portfolioSlug: "internet-of-things",
    teamSlug: "internet-of-things"
  },

  "machine-learning-ai": {
    id: "08",
    slug: "machine-learning-ai",
    title: "Kecerdasan Buatan (AI) & Pembelajaran Mesin",
    eyebrow: "Otomasi Cerdas, Pemrosesan Dokumen, & Asisten AI Terintegrasi",
    headline: "Terapkan Kecerdasan Buatan pada Titik Masalah Bisnis Nyata yang Terbukti Memangkas Beban Kerja Manual.",
    heroDesc: "Bukan sekadar hype teknologi. Kami merancang solusi AI aplikatif yang disesuaikan dengan data internal perusahaan Anda: mulai dari asisten AI pintar berbasis dokumen perusahaan (RAG), pemrosesan ekstraksi dokumen otomatis (OCR Cerdas), hingga sistem rekomendasi konversi tinggi.",
    tags: ["LLM & Retrieval-Augmented Generation (RAG)", "OCR & Dokumen AI", "Natural Language Processing", "Klasifikasi Cerdas", "Model AI Kustom"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Perusahaan dengan volume administrasi tinggi, perbankan, layanan pelanggan dengan ribuan tiket harian, dan platform digital.",
    overview: {
      summary: "Machine Learning (ML) dan Artificial Intelligence (AI) memungkinkan komputer belajar dari data masa lalu untuk mengenali pola, memahami bahasa manusia, dan mengambil keputusan operasional otomatis tanpa perlu instruksi kaku yang berulang.",
      fundamentalRole: "Mengambil alih pekerjaan repetitif yang menyita waktu karyawan cerdas Anda, sehingga tim Anda dapat fokus pada negosiasi bisnis, strategi kreatif, dan pelayanan bernilai tinggi.",
      keyConcepts: [
        {
          term: "RAG (Retrieval-Augmented Generation)",
          explanation: "Metode menghubungkan model bahasa pintar (LLM) langsung dengan basis dokumen SOP dan data rahasia perusahaan Anda secara aman tanpa risiko informasi palsu (halusinasi)."
        },
        {
          term: "Computer Vision & Smart OCR",
          explanation: "Kemampuan komputer membaca dan mengekstrak data dari foto KTP, faktur pajak, struk belanja, atau dokumen scan menjadi data terstruktur dalam sekejap."
        },
        {
          term: "Model Fine-Tuning & On-Premise AI",
          explanation: "Penyesuaian model AI menggunakan terminologi dan gaya bahasa khas industri Anda, dengan opsi deployment di server lokal sendiri demi menjaga kerahasiaan data."
        }
      ]
    },
    whyNeedIt: {
      title: "Masalah Operasional Apa yang Mampu Diselesaikan oleh AI?",
      subtitle: "Implementasi AI tepat sasaran yang memberikan Return on Investment (ROI) nyata:",
      scenarios: [
        {
          problem: "Tim customer service kewalahan melayani ribuan pesan pertanyaan berulang seputar harga, status pesanan, dan SOP layanan.",
          solution: "Pembangunan AI Customer Assistant berbasis RAG yang memahami konteks pertanyaan berbahasa Indonesia alami dan terintegrasi dengan database pesanan.",
          impact: "Penurunan waktu tunggu respon dari jam menjadi detik dan penurunan beban tiket pertanyaan berulang hingga 70%."
        },
        {
          problem: "Staf verifikasi harus membaca dan mengetik ulang ribuan formulir klaim atau faktur tagihan setiap pekan secara manual.",
          solution: "Implementasi Document AI yang otomatis mengekstrak nomor dokumen, tanggal, nominal, dan tabel tagihan ke dalam sistem database.",
          impact: "Proses verifikasi dokumen dipercepat 10x lipat dengan tingkat akurasi di atas 98%."
        },
        {
          problem: "Pengunjung platform e-commerce sulit menemukan produk yang relevan dengan selera mereka, menyebabkan tingkat konversi stagnan.",
          solution: "Penerapan AI Recommendation Engine yang mempelajari preferensi klik dan pola belanja pengguna untuk menampilkan rekomendasi terpersonalisasi.",
          impact: "Peningkatan nilai transaksi keranjang belanja (Average Order Value) hingga 20%."
        }
      ]
    },
    deliverables: [
      {
        title: "Asisten AI Perusahaan Berbasis RAG & Knowledge Base",
        desc: "Membangun chatbot cerdas internal atau eksternal yang menjawab pertanyaan berdasarkan dokumen resmi perusahaan Anda.",
        features: ["Integrasi basis data dokumen (PDF, Word, Database)", "Pencegahan halusinasi informasi dengan verifikasi sumber kutipan", "Dukungan saluran WhatsApp, Web Widget, atau Telegram", "Dashboard evaluasi kepuasan jawaban AI"]
      },
      {
        title: "Pemrosesan Dokumen Otomatis (Document AI & OCR)",
        desc: "Sistem cerdas untuk membaca, mengklasifikasi, dan mengekstrak data dari dokumen identitas, kuitansi, atau kontrak legal.",
        features: ["Ekstraksi KTP, SIM, NPWP, dan Faktur Pajak instan", "Validasi keaslian format dan kelengkapan dokumen", "Integrasi langsung ke sistem ERP / Core Banking", "Antarmuka review human-in-the-loop untuk audit berkala"]
      },
      {
        title: "Model Prediksi & Klasifikasi Kustom",
        desc: "Melatih algoritma machine learning menggunakan data historis bisnis Anda untuk tugas spesifik.",
        features: ["Model deteksi penipuan transaksi (Fraud Detection)", "Analisis sentimen ulasan pelanggan", "Sistem rekomendasi produk & konten cerdas", "Penyediaan API inferensi berlatensi rendah"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Pemeriksaan Kualitas Data & Identifikasi Use-Case",
        desc: "Menilai kelayakan data internal perusahaan dan memilih satu studi kasus spesifik yang menghasilkan dampak efisiensi terbesar.",
        deliverable: "Dokumen Studi Kelayakan AI & Rencana Alur Solusi"
      },
      {
        step: "02",
        title: "Persiapan Data & Pembangunan Pipeline AI",
        desc: "Membersihkan data, melakukan proses embedding teks dokumen, dan membangun arsitektur model AI yang aman.",
        deliverable: "Vector Database Terindeks & Pipeline Inferensi"
      },
      {
        step: "03",
        title: "Pengujian Akurasi & Penyetelan Halus (Fine-Tuning)",
        desc: "Menguji respon model terhadap ratusan skenario pertanyaan sulit dan menyempurnakan prompt guardrails demi akurasi maksimal.",
        deliverable: "Laporan Tolok Ukur Akurasi (Benchmark Report)"
      },
      {
        step: "04",
        title: "Integrasi API, Deployment, & Monitoring Drift",
        desc: "Menghubungkan layanan AI ke aplikasi bisnis utama serta memasang pemantau kualitas jawaban secara berkala.",
        deliverable: "Sistem AI Beroperasi Penuh & Panduan Audit Kualitas"
      }
    ],
    techStack: [
      { category: "Framework & Model", items: ["OpenAI API / Anthropic", "Llama 3 (Open-Weights)", "LangChain / LlamaIndex", "Hugging Face"] },
      { category: "Vector Database", items: ["Pinecone", "Qdrant", "ChromaDB", "pgvector (PostgreSQL)"] },
      { category: "Machine Learning Core", items: ["PyTorch", "Scikit-Learn", "FastAPI", "Celery"] },
      { category: "Computer Vision", items: ["Tesseract OCR", "EasyOCR", "OpenCV", "YOLO"] }
    ],
    faqs: [
      {
        q: "Apakah data rahasia perusahaan kami akan digunakan untuk melatih model AI publik?",
        a: "Tidak sama sekali. Kami menerapkan standar zero-data-retention pada penyedia API enterprise berlisensi, atau mendirikan model AI open-source di server privat Anda sendiri sehingga tidak ada data yang keluar dari infrastruktur perusahaan."
      },
      {
        q: "Bagaimana cara mencegah AI memberikan jawaban yang salah atau mengada-ada (halusinasi)?",
        a: "Kami menerapkan arsitektur RAG yang mewajibkan AI hanya menjawab berdasarkan cuplikan dokumen resmi yang ditemukan di basis pengetahuan Anda. Jika data tidak ada di dokumen, AI diprogram untuk menyatakan tidak tahu secara jujur."
      }
    ],
    portfolioSlug: "machine-learning-ai",
    teamSlug: "machine-learning-ai"
  },

  "mobile-development": {
    id: "09",
    slug: "mobile-development",
    title: "Pengembangan Aplikasi Mobile (iOS & Android)",
    eyebrow: "Aplikasi Seluler Responsif, Berkinerja Tinggi, & Dirancang untuk Skalabilitas",
    headline: "Hadirkan Solusi Digital Langsung di Genggaman Pelanggan Melalui Aplikasi Mobile yang Halus, Aman, dan Mengesankan.",
    heroDesc: "Mayoritas interaksi digital kini berlangsung di smartphone. Kami membangun aplikasi mobile native maupun cross-platform (React Native / Flutter) yang menggabungkan kemudahan navigasi, efisiensi konsumsi baterai, dan integrasi fitur perangkat keras.",
    tags: ["React Native", "Flutter", "iOS & Android", "Offline-First", "Integrasi Push Notification"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Perusahaan yang ingin meningkatkan loyalitas pelanggan, layanan on-demand, operasional kurir/lapangan, dan ekosistem fintech.",
    overview: {
      summary: "Mobile Development adalah seni merancang dan memprogram aplikasi yang dioptimalkan untuk layar sentuh ponsel pintar. Baik menggunakan pendekatan Native (Swift / Kotlin) maupun Cross-Platform modern (React Native / Flutter), fokus kami adalah performa 60 frame per detik, konsumsi memori yang ringan, dan stabilitas tanpa crash.",
      fundamentalRole: "Aplikasi mobile memberikan jalur komunikasi langsung tanpa perantara ke pengguna melalui notifikasi push personal, fitur kamera/lokasi, dan akses cepat yang mengunci retensi pelanggan Anda.",
      keyConcepts: [
        {
          term: "Pendekatan Cross-Platform Efisien",
          explanation: "Menulis satu basis kode yang berjalan sempurna di iOS dan Android sekaligus, menghemat biaya dan memangkas waktu pengembangan hingga 40%."
        },
        {
          term: "Arsitektur Offline-First",
          explanation: "Kemampuan aplikasi tetap dapat digunakan mencatat data saat sinyal internet hilang di pelosok, dan otomatis menyinkronkan data begitu tersambung kembali."
        },
        {
          term: "Integrasi Perangkat Keras Lokal",
          explanation: "Pemanfaatan sensor biometrik (FaceID/Fingerprint), GPS pelacak lokasi, pemindai barcode kamera, dan printer thermal bluetooth."
        }
      ]
    },
    whyNeedIt: {
      title: "Kapan Bisnis Anda Memerlukan Aplikasi Mobile Khusus?",
      subtitle: "Situasi operasional di mana website saja tidak lagi mencukupi:",
      scenarios: [
        {
          problem: "Staf lapangan atau sales kanvas sering kesulitan menginput pesanan di area gudang atau pedalaman yang minim sinyal internet.",
          solution: "Aplikasi mobile dengan database lokal SQLite yang memungkinkan input data offline dan auto-sync saat mendapat koneksi.",
          impact: "Aktivitas penjualan tetap berjalan lancar 100% tanpa hambatan blank spot sinyal."
        },
        {
          problem: "Pelanggan sering melupakan promosi atau status pesanan mereka karena email notifikasi masuk ke folder spam.",
          solution: "Implementasi push notification langsung ke layar utama smartphone pelanggan dengan penargetan segmen pintar.",
          impact: "Open rate pesan promosi melonjak hingga 4x lipat dibanding email konvensional."
        },
        {
          problem: "Website yang dibuka di browser ponsel terasa lambat dan proses login berulang kali membuat pelanggan frustrasi.",
          solution: "Aplikasi mobile dengan login biometrik sekali sentuh dan caching aset visual untuk pemuatan instan.",
          impact: "Peningkatan frekuensi belanja pelanggan (customer lifetime value) secara berkelanjutan."
        }
      ]
    },
    deliverables: [
      {
        title: "Pembangunan Aplikasi Cross-Platform (iOS & Android)",
        desc: "Mengembangkan aplikasi mobile berkualitas tinggi menggunakan React Native atau Flutter dari satu codebase terpadu.",
        features: ["Dukungan sistem operasi iOS dan Android terkini", "Antarmuka responsif untuk ponsel & tablet", "Manajemen state aplikasi yang rapi (Zustand / Redux / Bloc)", "Integrasi API backend terenkripsi"]
      },
      {
        title: "Integrasi Fitur Hardware & Pihak Ketiga",
        desc: "Menghubungkan aplikasi dengan kapabilitas fisik ponsel dan platform layanan eksternal.",
        features: ["Autentikasi biometrik (Fingerprint & Face ID)", "Pelacakan lokasi GPS & integrasi peta navigasi", "Pemindaian barcode / QR code via kamera", "Koneksi printer thermal via Bluetooth"]
      },
      {
        title: "Publikasi Toko Aplikasi & Pemeliharaan Berkala",
        desc: "Menangani seluruh proses birokrasi peninjauan rilis di Google Play Store dan Apple App Store.",
        features: ["Pembuatan aset tangkapan layar toko aplikasi", "Kepatuhan terhadap kebijakan privasi Google & Apple", "Monitoring crash pelaporan bug real-time (Sentry)", "Pembaruan rutin kompatibilitas versi OS baru"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Penyusunan Alur Pengguna & Spesifikasi Fitur",
        desc: "Menyepakati seluruh fitur inti (MVP), mendesain alur interaksi layar per layar, dan menentukan arsitektur API.",
        deliverable: "Spesifikasi Fungsional Aplikasi & Prototipe Antarmuka"
      },
      {
        step: "02",
        title: "Pengembangan Sprint & Integrasi Backend",
        desc: "Menulis kode aplikasi per siklus mingguan, menghubungkan antarmuka dengan API, dan menguji fungsi secara bertahap.",
        deliverable: "Build APK / TestFlight Mingguan untuk Uji Coba Klien"
      },
      {
        step: "03",
        title: "Pengujian Kualitas, Perangkat Nyata, & Stres Jaringan",
        desc: "Menguji aplikasi di berbagai tipe gawai fisik (Samsung, iPhone, Xiaomi) dan dalam kondisi jaringan internet lambat.",
        deliverable: "Laporan Uji Kelayakan Aplikasi & Nol Bug Kritis"
      },
      {
        step: "04",
        title: "Pelepasan ke Play Store / App Store & Serah Terima",
        desc: "Mendaftarkan aplikasi ke Google Play dan Apple App Store hingga disetujui, serta menyerahkan seluruh source code.",
        deliverable: "Aplikasi Resmi Terbit di Toko & Source Code Lengkap"
      }
    ],
    techStack: [
      { category: "Framework Mobile", items: ["React Native (TypeScript)", "Flutter (Dart)", "Swift (Native iOS)", "Kotlin (Native Android)"] },
      { category: "Penyimpanan Lokal", items: ["WatermelonDB", "MMKV", "SQLite", "Hive"] },
      { category: "Notifikasi & Layanan", items: ["Firebase Cloud Messaging", "OneSignal", "Google Maps SDK"] },
      { category: "Pemantauan & Rilis", items: ["Fastlane", "Sentry Mobile", "App Store Connect", "Play Console"] }
    ],
    faqs: [
      {
        q: "Apakah lebih baik membuat aplikasi cross-platform atau native murni?",
        a: "Untuk 95% kebutuhan bisnis (seperti e-commerce, portal layanan, aplikasi operasional), pendekatan cross-platform (React Native/Flutter) adalah yang terbaik karena jauh lebih hemat biaya dan waktu tanpa mengorbankan performa. Native hanya dianjurkan untuk aplikasi dengan manipulasi grafis berat atau game 3D."
      },
      {
        q: "Berapa lama proses persetujuan rilis aplikasi di Google Play Store dan Apple App Store?",
        a: "Biasanya Google Play Store membutuhkan waktu 1-3 hari kerja, sedangkan Apple App Store memerlukan 2-4 hari kerja. Tim kami mendampingi penuh hingga aplikasi Anda lolos peninjauan resmi."
      }
    ],
    portfolioSlug: "mobile-development",
    teamSlug: "mobile-development"
  },

  "quality-assurance-qa-testing": {
    id: "10",
    slug: "quality-assurance-qa-testing",
    title: "Quality Assurance (QA) & Pengujian Perangkat Lunak",
    eyebrow: "Validasi Fungsionalitas, Uji Beban Kinerja, & Otomasi Pengujian Bebas Celah",
    headline: "Memastikan Setiap Baris Kode Berjalan Sempurna, Stabil, dan Bebas Bug Sebelum Menyentuh Pengguna Akhir Anda.",
    heroDesc: "Jangan jadikan pengguna Anda sebagai kelinci percobaan bug. Kami menyediakan layanan jaminan mutu perangkat lunak yang komprehensif: mulai dari pengujian manual terstruktur, otomasi regresi end-to-end, uji beban trafik puncak, hingga audit celah keamanan.",
    tags: ["Automated Testing", "Playwright & Cypress", "Uji Beban (Load Test)", "Keamanan & OWASP", "Uji Regresi"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Perusahaan yang akan meluncurkan aplikasi penting, sistem pembayaran perbankan, dan software house yang ingin audit mutu independen.",
    overview: {
      summary: "Quality Assurance (QA) & Testing bukan sekadar mencari kesalahan tampilan tombol, melainkan proses metodologis untuk memverifikasi bahwa aplikasi memenuhi standar performa, keandalan fungsional, dan kepatuhan keamanan yang telah ditetapkan.",
      fundamentalRole: "Menemukan dan memperbaiki cacat sistem di fase produksi memakan biaya 10 kali lebih mahal serta merusak reputasi brand Anda. QA bertindak sebagai benteng pertahanan terakhir yang menjamin keandalan produk sebelum rilis ke publik.",
      keyConcepts: [
        {
          term: "Automated Regression Testing",
          explanation: "Robot script pengujian otomatis yang menguji ratusan skenario transaksi dalam hitungan menit setiap kali programmer memperbarui kode sistem."
        },
        {
          term: "Uji Stres & Beban (Stress & Load Testing)",
          explanation: "Simulasi penyerangan trafik virtual masif untuk mengetahui titik batas maksimal kekuatan server sebelum mengalami crash."
        },
        {
          term: "Uji Penetrasi Celah Keamanan (Pen-Testing)",
          explanation: "Pemeriksaan sistem terhadap 10 celah keamanan paling umum (OWASP Top 10) seperti SQL Injection, XSS, dan kebocoran otentikasi data."
        }
      ]
    },
    whyNeedIt: {
      title: "Mengapa Pengujian Profesional Menentukan Kesuksesan Aplikasi?",
      subtitle: "Risiko nyata yang mengintai jika produk digital dirilis tanpa pengujian mendalam:",
      scenarios: [
        {
          problem: "Rilis fitur baru di aplikasi sering kali secara tidak sengaja merusak fitur pembayaran lama yang sebelumnya berjalan normal.",
          solution: "Pembangunan suite pengujian otomatis (regression testing) yang memverifikasi seluruh alur transaksi lama dalam hitungan menit sebelum rilis.",
          impact: "Meniadakan risiko rusaknya fitur eksisting dan memberikan ketenangan penuh bagi tim manajemen saat peluncuran."
        },
        {
          problem: "Server aplikasi tumbang seketika saat peluncuran publik karena tidak pernah diuji dengan ribuan akses bersamaan.",
          solution: "Pelaksanaan load testing menggunakan k6 atau JMeter untuk mengidentifikasi bottleneck database dan kapasitas batas server.",
          impact: "Kapasitas server terukur dengan pasti dan optimasi dilakukan tepat pada query database yang lambat."
        },
        {
          problem: "Kekhawatiran terhadap tuntutan hukum atau sanksi regulasi akibat kebocoran data pelanggan dari celah sistem.",
          solution: "Audit keamanan sistematis dan vulnerability scanning menyeluruh sebelum aplikasi mendapat sertifikasi rilis.",
          impact: "Sistem memenuhi standar kepatuhan regulasi perlindungan data pribadi dan terlindungi dari ancaman siber."
        }
      ]
    },
    deliverables: [
      {
        title: "Perancangan Test Plan & Pengujian Manual Komprehensif",
        desc: "Menyusun skenario pengujian positif, negatif, dan kasus batas (edge cases) untuk seluruh fungsi aplikasi.",
        features: ["Penyusunan Test Matrix & Skenario Kasus Uji", "Pengujian kompatibilitas lintas browser dan perangkat", "Pengujian pengalaman pengguna dan aksesibilitas", "Laporan rekapitulasi bug detail dengan rekaman reproduksi"]
      },
      {
        title: "Pembangunan Skrip Otomasi Pengujian (Automated QA)",
        desc: "Membuat robot pengujian otomatis berbasis Playwright atau Cypress yang dapat berjalan secara mandiri di pipeline CI/CD.",
        features: ["Otomasi skenario end-to-end (E2E) alur transaksi", "Pengujian otomatis API endpoint (Contract & Schema Test)", "Integrasi otomatisasi ke GitHub Actions / GitLab", "Dashboard laporan kelulusan tes visual"]
      },
      {
        title: "Uji Beban Performa & Audit Celah Keamanan",
        desc: "Menguji ketahanan server terhadap lonjakan trafik dan memeriksa pertahanan sistem terhadap ancaman siber.",
        features: ["Simulasi ribuan pengguna simultan dengan Grafana k6", "Analisis latency dan response time endpoint", "Audit celah keamanan OWASP Top 10", "Rekomendasi teknis perbaikan arsitektur server"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Telaah Persyaratan & Penyusunan Dokumen Test Plan",
        desc: "Mempelajari spesifikasi fungsional sistem, mengidentifikasi alur bisnis berisiko tinggi, dan memetakan jadwal pengujian.",
        deliverable: "Dokumen Master Test Plan & Matriks Kasus Uji"
      },
      {
        step: "02",
        title: "Eksekusi Pengujian Manual & Pelaporan Cacat (Defect)",
        desc: "Menjalankan uji coba mendalam di seluruh fitur, mencatat temuan bug ke sistem pelacak (Jira), dan mengonfirmasi perbaikan developer.",
        deliverable: "Log Pelacakan Bug & Konfirmasi Tiket Resolved"
      },
      {
        step: "03",
        title: "Penulisan Skrip Otomasi & Uji Beban Kinerja",
        desc: "Mengotomatisasikan alur kerja kritis dan menjalankan simulasi lonjakan beban trafik untuk menguji ketahanan server.",
        deliverable: "Repositori Kode Otomasi & Laporan Metrik Beban k6"
      },
      {
        step: "04",
        title: "Audit Final & Sertifikat Kelayakan Rilis",
        desc: "Memverifikasi bahwa seluruh bug kritis telah tuntas dan menandatangani persetujuan rilis produk ke lingkungan produksi.",
        deliverable: "Laporan Final QA Sign-Off & Sertifikasi Kesiapan Rilis"
      }
    ],
    techStack: [
      { category: "Otomasi Web & Mobile", items: ["Playwright", "Cypress", "Appium", "Selenium"] },
      { category: "Uji Beban & Performa", items: ["k6 (Grafana)", "Apache JMeter", "Locust", "Lighthouse"] },
      { category: "Pengujian API", items: ["Postman / Newman", "RestAssured", "Pact (Contract Testing)"] },
      { category: "Manajemen Pengujian", items: ["Jira / Xray", "TestRail", "Allure Reports", "Sentry"] }
    ],
    faqs: [
      {
        q: "Apakah tim QA bekerja terpisah atau terintegrasi dengan tim developer kami?",
        a: "Tim QA kami dapat bekerja sebagai auditor mutu independen untuk produk yang sudah selesai, atau bergabung langsung dalam sprint mingguan tim developer Anda dengan metodologi Agile."
      },
      {
        q: "Mengapa otomasi pengujian penting jika sudah ada staf pengujian manual?",
        a: "Pengujian manual sangat baik untuk eksplorasi awal, namun mengulang ratusan tes yang sama setiap pekan sangat memakan waktu. Otomasi menyelesaikan seluruh pengujian regresi dalam hitungan menit, menghemat ratusan jam kerja bulanan."
      }
    ],
    portfolioSlug: "quality-assurance-qa-testing",
    teamSlug: "quality-assurance-qa-testing"
  },

  "web-development": {
    id: "11",
    slug: "web-development",
    title: "Pengembangan Website & Aplikasi Web Enterprise",
    eyebrow: "Platform Web Modern, Berkecepatan Tinggi, & Teroptimasi Mesin Pencari",
    headline: "Membangun Website Korporat dan Aplikasi Web Berkinerja Tinggi yang Menjadi Mesin Pertumbuhan Bisnis Digital Anda.",
    heroDesc: "Bukan sekadar template biasa. Kami merancang dan membangun platform web kustom menggunakan standar rekayasa software modern (Next.js, React, Tailwind CSS, API-driven backend) yang memuat dalam sekejap, ramah SEO, dan aman dari kerentanan siber.",
    tags: ["Next.js & React", "Aplikasi Web Enterprise", "SEO Teknis Teroptimasi", "Portal Klien & Dashboard", "Desain Responsif"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85",
    targetAudience: "Perusahaan yang membutuhkan profil korporat berkelas, startup SaaS, platform e-commerce kustom, dan instansi berintegritas tinggi.",
    overview: {
      summary: "Web Development modern telah berevolusi jauh melampaui halaman statis biasa. Kami membangun aplikasi web interaktif yang kaya fitur (Single Page Application & Server-Side Rendering) yang mampu menangani logika bisnis kompleks langsung di peramban web pengguna dengan kecepatan muat sub-detik.",
      fundamentalRole: "Website resmi adalah representasi utama reputasi, otoritas, dan keandalan perusahaan Anda di mata calon klien enterprise, investor, dan mitra bisnis global.",
      keyConcepts: [
        {
          term: "Server-Side Rendering (SSR) & Jamstack",
          explanation: "Teknik rendering halaman langsung dari server untuk kecepatan muat instan dan skor indeks maksimal pada algoritma perayap Google (SEO)."
        },
        {
          term: "Arsitektur Headless & API-First",
          explanation: "Pemisahan antara tampilan antarmuka depan (frontend) dengan logika backend, sehingga konten dapat diperbarui dengan fleksibel tanpa mengorbankan performa."
        },
        {
          term: "Optimasi Core Web Vitals",
          explanation: "Penyesuaian performa teknis (LCP, FID, CLS) sesuai standar Google agar website mendapatkan peringkat tinggi di hasil pencarian organik."
        }
      ]
    },
    whyNeedIt: {
      title: "Kapan Bisnis Anda Membutuhkan Pembaruan Website?",
      subtitle: "Kendala umum pada website konvensional yang merugikan potensi omzet perusahaan:",
      scenarios: [
        {
          problem: "Website lambat dimuat (lebih dari 4 detik), membuat calon klien menutup halaman sebelum sempat membaca penawaran Anda.",
          solution: "Membangun ulang website menggunakan arsitektur modern Next.js dengan kompresi gambar otomatis dan caching global CDN.",
          impact: "Waktu muat halaman terpangkas di bawah 1 detik dan penurunan tingkat pentalan pengunjung (bounce rate) hingga 45%."
        },
        {
          problem: "Tampilan website terlihat kaku, tidak rapi saat dibuka di ponsel pintar, dan tertinggal jauh dari website kompetitor modern.",
          solution: "Perancangan UI kustom modern dengan estetika korporat futuristik yang sepenuhnya responsif di semua ukuran layar.",
          impact: "Peningkatan persepsi reputasi brand dan kemudahan navigasi bagi calon pelanggan mobile."
        },
        {
          problem: "Sistem operasional internal masih menggunakan kertas atau file Excel terpisah yang sulit dipantau secara terpusat.",
          solution: "Pengembangan portal web kustom (Internal Web App) berbasis peran otentikasi dengan hak akses terproteksi.",
          impact: "Seluruh tim dapat mengakses dan memproses data kerja secara terpusat dari mana saja secara aman."
        }
      ]
    },
    deliverables: [
      {
        title: "Website Profil Perusahaan (Company Profile) Kustom",
        desc: "Membangun identitas digital korporat kelas atas yang mencerminkan visi dan portofolio keunggulan bisnis Anda.",
        features: ["Desain eksklusif tanpa template generik", "Optimasi Core Web Vitals & SEO On-Page", "Dukungan multi-bahasa terpadu", "Panel pengelolaan konten (Headless CMS) yang mudah digunakan"]
      },
      {
        title: "Aplikasi Web Enterprise & Portal Klien (SaaS)",
        desc: "Membangun sistem web interaktif dengan logika bisnis kompleks, manajemen pengguna, dan integrasi pembayaran.",
        features: ["Arsitektur frontend modular berbasis React / Next.js", "Sistem autentikasi aman berbasis peran (RBAC)", "Integrasi database relasional dan API pihak ketiga", "Dashboard manajemen laporan dan metrik analitik"]
      },
      {
        title: "Audit Kinerja, Keamanan, & SEO Berkelanjutan",
        desc: "Memastikan website selalu berada dalam kondisi performa prima dan terlindungi dari ancaman siber.",
        features: ["Implementasi SSL/TLS & proteksi firewall Cloudflare", "Audit performa Lighthouse berstandar 95+", "Peta situs otomatis (sitemap.xml & robots.txt)", "Pemeliharaan rutin dan pembaruan dependensi dependabot"]
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Analisis Kebutuhan & Perancangan Arsitektur Informasi",
        desc: "Membedah tujuan bisnis website, struktur hierarki halaman, dan menentukan arsitektur teknologi yang paling efisien.",
        deliverable: "Peta Situs (Sitemap), Wireframe, & Dokumen Arsitektur"
      },
      {
        step: "02",
        title: "Desain Antarmuka Eksklusif & Konsep Interaksi",
        desc: "Mendesain tampilan halaman yang futuristik, bersih, dan sesuai dengan identitas visual merek BlankOn Anda.",
        deliverable: "Desain UI High-Fidelity di Figma Terverifikasi"
      },
      {
        step: "03",
        title: "Pengembangan Frontend & Integrasi Backend",
        desc: "Menulis kode bersih terstandarisasi, menghubungkan formulir interaktif, dan mengoptimalkan kecepatan muat aset.",
        deliverable: "Website Berfungsi Penuh di Lingkungan Uji Coba (Staging)"
      },
      {
        step: "04",
        title: "Audit Teknis, Peluncuran Domain, & Pelatihan CMS",
        desc: "Uji coba lintas browser, konfigurasi domain produksi, dan pelatihan pengelolaan konten kepada tim Anda.",
        deliverable: "Website Live di Domain Resmi & Video Panduan Pengelolaan"
      }
    ],
    techStack: [
      { category: "Frontend Core", items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"] },
      { category: "Interaktivitas & Efek", items: ["Framer Motion", "Lucide Icons", "Radix UI Primitives"] },
      { category: "Backend & Basis Data", items: ["Node.js", "PostgreSQL", "Prisma ORM", "Redis"] },
      { category: "Infrastruktur & Keamanan", items: ["Vercel", "Cloudflare CDN", "SSL/TLS Strict"] }
    ],
    faqs: [
      {
        q: "Apakah website yang dibangun mudah kami edit kontennya sendiri di kemudian hari?",
        a: "Tentu saja. Kami dapat mengintegrasikan website dengan sistem Headless CMS yang sangat intuitif, sehingga tim non-teknis Anda dapat menambah artikel blog, memperbarui portofolio, atau mengubah teks dengan mudah tanpa perlu menyentuh kode pemrograman."
      },
      {
        q: "Apakah website ini sudah otomatis terindeks dan ramah terhadap mesin pencari Google?",
        a: "Ya. Setiap website yang kami bangun menerapkan standar Technical SEO lengkap: Server-Side Rendering untuk perayapan instan, metadata dinamis, Open Graph untuk media sosial, sitemap XML otomatis, serta skor kecepatan Core Web Vitals yang tinggi."
      }
    ],
    portfolioSlug: "web-development",
    teamSlug: "web-development"
  }
};

