export interface ProcessPhase {
  phaseNumber: string;
  name: string;
  timeline: string;
  objective: string;
  activities: string[];
  clientRole: string;
  deliverables: string[];
}

export interface ProcessRiskMitigation {
  risk: string;
  mitigation: string;
}

export interface ServiceProcessData {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  methodologyName: string;
  shortDesc: string;
  philosophy: string;
  phases: ProcessPhase[];
  qualityGates: string[];
  clientPreparation: string[];
  riskManagement: ProcessRiskMitigation[];
  relatedServiceSlug: string;
  relatedPortfolioSlug: string;
  relatedFaqSlug: string;
}

export const servicesProcessData: Record<string, ServiceProcessData> = {
  "api-management-system-integration": {
    id: "01",
    slug: "api-management-system-integration",
    title: "API Management & Integrasi Sistem",
    eyebrow: "Metodologi Interkoneksi & Alur Data",
    methodologyName: "Arsitektur Integrasi Berlapis & Validasi Kontrak API",
    shortDesc: "Alur rekayasa middleware terstruktur untuk menghubungkan berbagai aplikasi, basis data legacy, dan gateway pihak ketiga tanpa mengganggu sistem operasional yang sedang berjalan.",
    philosophy: "Integrasi sistem yang berhasil tidak boleh mengorbankan stabilitas operasional yang sudah ada. Kami menerapkan pola adaptor non-invasif yang memvalidasi setiap skema pertukaran data secara ketat sebelum diarahkan ke basis data inti perusahaan.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Audit Arsitektur & Pemetaan Skema Data",
        timeline: "Minggu 1 - 2",
        objective: "Membedah struktur database yang ada, mendokumentasikan titik integrasi (endpoints), dan memetakan kamus data antar sistem.",
        activities: [
          "Pemeriksaan dokumentasi API eksisting dan skema database internal",
          "Analisis volume transaksi harian dan pola lonjakan trafik data",
          "Penyusunan matriks pemetaan bidang data (Data Field Mapping Matrix)",
          "Penentuan protokol komunikasi (RESTful, GraphQL, gRPC, atau Webhooks)"
        ],
        clientRole: "Menyediakan akses sandbox sistem eksisting dan memberikan penjelasan alur bisnis data internal kepada tim Solution Architect.",
        deliverables: [
          "Dokumen Spesifikasi Kebutuhan Integrasi Sistem (SRS)",
          "Diagram Topologi Interkoneksi Antar Aplikasi",
          "Matriks Pemetaan Skema Data Standar (JSON Schema)"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Standardisasi Kontrak API & Prototipe Mockup",
        timeline: "Minggu 3 - 4",
        objective: "Menyepakati spesifikasi kontrak API (OpenAPI/Swagger) dan menyediakan server tiruan (mock server) agar tim aplikasi dapat mulai beradaptasi lebih awal.",
        activities: [
          "Penyusunan spesifikasi OpenAPI v3 / Swagger interaktif",
          "Perancangan mekanisme otentikasi (OAuth 2.0 / API Key / JWT)",
          "Penyediaan mock server untuk pengujian respons data tanpa menyentuh database riil",
          "Konfigurasi aturan pembatasan trafik (rate limiting & payload quotas)"
        ],
        clientRole: "Meninjau dan menyetujui format respons data serta kebijakan otorisasi hak akses pengguna.",
        deliverables: [
          "Dokumentasi OpenAPI / Swagger Live Workspace",
          "Server Mock API Aktif untuk Uji Coba Lintas Divisi",
          "Pedoman Penanganan Error & Kode Status Standar"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Pembangunan Middleware & Pipeline Sinkronisasi",
        timeline: "Minggu 5 - 7",
        objective: "Mengembangkan kode logika middleware, modul transformasi format data, dan sistem antrean pesan asynchronous.",
        activities: [
          "Pemrograman middleware adaptor integrasi menggunakan Node.js / Go",
          "Implementasi message broker (RabbitMQ / Redis Streams) untuk transaksi asinkron",
          "Pembangunan mekanisme penanganan kegagalan otomatis (auto-retry & dead letter queue)",
          "Penerapan enkripsi data end-to-end (mTLS & enkripsi payload sensitif)"
        ],
        clientRole: "Memvalidasi hasil simulasi pengiriman data sampel pada lingkungan staging.",
        deliverables: [
          "Source Code Middleware & Gateway Teruji di Repositori Git",
          "Pipeline Integrasi Berfungsi Penuh di Lingkungan Staging",
          "Laporan Hasil Pengujian Integrasi Unit & Kontrak"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Uji Beban, Migrasi Paralel, & Peluncuran Produksi",
        timeline: "Minggu 8 - 9",
        objective: "Menguji ketahanan throughput data dalam kondisi puncak dan mengalihkan jalur integrasi secara paralel tanpa waktu henti.",
        activities: [
          "Uji beban performa gateway dengan simulasi ribuan panggilan per detik (k6)",
          "Penerapan strategi cut-over bertahap (Shadow Traffic / Canary Release)",
          "Pemasangan pemantauan telemetri real-time (Prometheus & Grafana)",
          "Serah terima kredensial produksi dan pelatihan operasional tim IT klien"
        ],
        clientRole: "Menyetujui jadwal rilis dan melakukan verifikasi pencatatan data di sisi sistem penerima.",
        deliverables: [
          "Laporan Hasil Uji Beban & Throughput Gateway",
          "API Gateway Beroperasi Penuh di Lingkungan Produksi",
          "Dashboard Pemantauan Trafik & Log Audit Aktif 24/7",
          "Manual Operasional & Perjanjian Pemeliharaan Sistem (SLA)"
        ]
      }
    ],
    qualityGates: [
      "Kontrak API OpenAPI v3 lolos validasi skema tanpa inkonsistensi tipe data",
      "Seluruh endpoint lolos uji keamanan celah injeksi dan otentikasi token",
      "Simulasi kegagalan koneksi pihak ketiga berhasil memicu dead-letter queue tanpa kehilangan paket data",
      "Performa latensi gateway di bawah 150 milidetik pada beban trafik standar"
    ],
    clientPreparation: [
      "Akses akun pengembang atau dokumentasi teknis dari aplikasi yang ingin diintegrasikan",
      "Akun sandbox dari penyedia pihak ketiga (misal: Payment Gateway, kurir logistik, atau ERP)",
      "Daftar personil penghubung teknis (PIC) dari masing-masing pemilik sistem"
    ],
    riskManagement: [
      {
        risk: "Sistem pihak ketiga sering mengalami downtime mendadak atau keterlambatan respon.",
        mitigation: "Penerapan pola Circuit Breaker dan asynchronous queue berulang (exponential backoff) agar server internal tidak ikut macet."
      },
      {
        risk: "Perubahan format data mendadak dari vendor eksternal di masa depan.",
        mitigation: "Membangun lapisan schema validator yang mendeteksi anomali struktur payload dan mengirimkan peringatan otomatis sebelum data diproses."
      }
    ],
    relatedServiceSlug: "api-management-system-integration",
    relatedPortfolioSlug: "api-management-system-integration",
    relatedFaqSlug: "api-management-system-integration"
  },

  "blockchain": {
    id: "02",
    slug: "blockchain",
    title: "Teknologi Blockchain & Smart Contract",
    eyebrow: "Metodologi Desentralisasi & Verifikasi Kriptografis",
    methodologyName: "Siklus Rekayasa Kontrak Cerdas Terverifikasi Formal & Audit Keamanan Berlapis",
    shortDesc: "Metode implementasi blockchain enterprise yang mengutamakan pembuktian logika formal, optimasi konsumsi gas, audit keamanan statis-dinamis, dan integrasi antarmuka dApp yang aman.",
    philosophy: "Kode pada blockchain bersifat kekal (immutable). Sekali diluncurkan ke jaringan, kesalahan tidak dapat diperbaiki dengan cara menimpa kode biasa. Karena itu, metodologi kami menempatkan audit keamanan dan pengujian simulasi skenario ekstrem sebagai pusat dari seluruh siklus kerja.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Analisis Use-Case & Desain Model Tokenomik/State",
        timeline: "Minggu 1 - 2",
        objective: "Memastikan kelayakan teknis desentralisasi, memodelkan state variable yang efisien, dan merumuskan batasan hak wewenang (role-based permissions).",
        activities: [
          "Validasi apakah masalah bisnis benar-benar membutuhkan desentralisasi atau cukup database terdistribusi",
          "Perancangan alur interaksi multi-pihak dalam transaksi konsorsium",
          "Pemodelan struktur data on-chain vs off-chain (IPFS / database terenkripsi)",
          "Penetapan arsitektur jaringan (Polygon, Ethereum Layer 2, atau Private Besu)"
        ],
        clientRole: "Mendefinisikan aturan bisnis kepemilikan aset, batas kewenangan admin, dan alur verifikasi multi-tanda tangan.",
        deliverables: [
          "Dokumen Spesifikasi Teknis Smart Contract & Diagram State",
          "Arsitektur Pemisahan Data On-Chain vs Off-Chain",
          "Rekomendasi Pemilihan Infrastruktur Jaringan Blockchain"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Pengembangan Smart Contract & Optimasi Komputasi",
        timeline: "Minggu 3 - 5",
        objective: "Menulis kode kontrak pintar menggunakan standar industri (OpenZeppelin) dengan optimasi konsumsi gas sekecil mungkin.",
        activities: [
          "Penulisan kontrak pintar modular dengan bahasa Solidity / Rust",
          "Penerapan standar token enterprise (ERC-20, ERC-721, ERC-1155, atau verifikasi ijazah)",
          "Optimasi struktur penyimpanan slot memori untuk menekan biaya gas",
          "Pembuatan pengujian unit komprehensif menggunakan framework Foundry / Hardhat"
        ],
        clientRole: "Meninjau transparansi alur fungsi kontrak dan menyetujui batasan transfer aset.",
        deliverables: [
          "Source Code Smart Contract Terdokumentasi Lengkap di Git",
          "Test Suite dengan Cakupan Pengujian Kode (Code Coverage) di atas 95%",
          "Laporan Estimasi Biaya Gas per Transaksi"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Audit Keamanan Mandiri & Simulasi Testnet",
        timeline: "Minggu 6 - 7",
        objective: "Menguji ketahanan kontrak terhadap teknik peretasan mutakhir dan menjalankan simulasi di jaringan uji publik (Testnet).",
        activities: [
          "Pemeriksaan kerentanan otomatis menggunakan Slither, Mythril, dan Echidna",
          "Audit manual baris-demi-baris oleh Senior Blockchain Security Engineer",
          "Deploy kontrak ke jaringan Testnet dan integrasi Subgraph untuk pengindeksan data",
          "Uji coba interaksi antarmuka Web3 menggunakan dompet uji (testnet wallet)"
        ],
        clientRole: "Melakukan pengujian transaksi menggunakan wallet uji coba pada antarmuka dApp staging.",
        deliverables: [
          "Laporan Audit Keamanan Smart Contract Resmi (Security Audit Report)",
          "Smart Contract Terverifikasi pada Testnet Explorer",
          "Subgraph API Aktif untuk Query Data Cepat"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Deployment Mainnet & Serah Terima Kunci Multi-Sig",
        timeline: "Minggu 8",
        objective: "Meluncurkan kontrak ke jaringan produksi (Mainnet/Konsorsium), mengonfigurasi dompet multi-signature, dan memverifikasi source code di explorer publik.",
        activities: [
          "Deployment smart contract ke Mainnet resmi",
          "Verifikasi kode sumber terbuka di block explorer (Etherscan / Polygonscan)",
          "Konfigurasi kepemilikan kontrak menggunakan Safe (Gnosis Multi-Sig)",
          "Serah terima master key dan sesi pelatihan administrasi untuk manajemen klien"
        ],
        clientRole: "Menyiapkan perangkat keras cold storage (Ledger/Trezor) dan menandatangani aktivasi multi-signature.",
        deliverables: [
          "Kontrak Pintar Resmi Aktif di Mainnet dengan Kode Terverifikasi",
          "Alamat Safe Multi-Signature Terkonfigurasi untuk Dewan Direksi",
          "Manual Operasional Manajemen Akses Kontrak & Tata Kelola Aset"
        ]
      }
    ],
    qualityGates: [
      "Hasil analisis statis dan dinamis menghasilkan nol temuan celah keamanan kritis dan tinggi (Critical/High Severity)",
      "Seluruh fungsi lolos automated invariant testing dan fuzzing",
      "Kepemilikan kontrak tidak boleh bergantung pada satu private key pribadi tunggal (wajib Multi-Sig)",
      "Verifikasi kode sumber di block explorer sesuai 100% dengan repositori Git"
    ],
    clientPreparation: [
      "Dompet kripto hardware (Hardware Wallet) untuk penandatangan otorisasi multi-sig",
      "Keputusan legal mengenai jaringan blockchain yang diizinkan sesuai regulasi korporat",
      "Daftar alamat wallet dewan pengawas atau tim audit internal"
    ],
    riskManagement: [
      {
        risk: "Terjadinya eksploitasi celah keamanan yang mengakibatkan pembekuan atau kehilangan aset digital.",
        mitigation: "Penerapan pola ReentrancyGuard, batasan penarikan bertahap (rate-limited withdrawal), dan fungsi jeda darurat (emergency pause function)."
      },
      {
        risk: "Kenaikan biaya gas fee jaringan publik yang melonjak sewaktu-waktu.",
        mitigation: "Implementasi pada jaringan Layer-2 yang stabil atau arsitektur meta-transaction (Gasless Transaction) yang disubsidi oleh relayer bisnis."
      }
    ],
    relatedServiceSlug: "blockchain",
    relatedPortfolioSlug: "blockchain",
    relatedFaqSlug: "blockchain"
  },

  "cloud-computing": {
    id: "03",
    slug: "cloud-computing",
    title: "Komputasi Cloud & Infrastruktur DevOps",
    eyebrow: "Metodologi Infrastruktur Berbasis Kode & Keandalan 99.9%",
    methodologyName: "GitOps Infrastructure as Code & Pipeline CI/CD Berkelanjutan",
    shortDesc: "Pendekatan rekayasa arsitektur cloud terotomatisasi yang mendefinisikan seluruh server, jaringan, dan database melalui kode (IaC), menjamin skalabilitas dinamis, dan peralihan tanpa henti.",
    philosophy: "Infrastruktur cloud modern tidak boleh dikonfigurasi secara manual lewat klik dashboard yang rentan lupa dicatat. Seluruh konfigurasi server harus dapat direplikasi secara presisi lewat kode (IaC), memiliki riwayat versi di Git, dan tahan terhadap bencana pusat data.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Audit Beban Komputasi & Perancangan Topologi Cloud",
        timeline: "Minggu 1 - 2",
        objective: "Menghitung kapasitas CPU/RAM riil, memetakan ketergantungan basis data, dan merancang arsitektur High Availability multi-zona.",
        activities: [
          "Analisis profil konsumsi resource server dan pola lonjakan trafik musiman",
          "Perancangan topologi Virtual Private Cloud (VPC) dengan pemisahan subnet publik/privat",
          "Penyusunan estimasi tagihan bulanan cloud (FinOps Cost Modeling)",
          "Penetapan Service Level Objective (SLO) dan Recovery Time Objective (RTO)"
        ],
        clientRole: "Menyediakan akses observasi ke hosting lama dan menyepakati estimasi anggaran tagihan cloud bulanan.",
        deliverables: [
          "Cetak Biru Arsitektur Cloud (Architecture Blueprint)",
          "Dokumen Proyeksi Biaya FinOps Penyedia Cloud",
          "Matriks Kebijakan Keamanan Jaringan & Firewall"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Provisi Infrastruktur Berbasis Kode (IaC) & Kontainerisasi",
        timeline: "Minggu 3 - 4",
        objective: "Menulis script Terraform untuk mendirikan seluruh infrastruktur secara otomatis dan membungkus aplikasi ke dalam kontainer Docker.",
        activities: [
          "Penulisan repositori Terraform untuk provisi server, database, load balancer, dan VPC",
          "Pembuatan Dockerfile multi-stage build yang ringan dan aman dari celah OS",
          "Konfigurasi kluster orkestrasi Kubernetes (EKS / GKE) atau serverless container",
          "Pengaturan database terkelola dengan replikasi standby otomatis (Multi-AZ)"
        ],
        clientRole: "Meninjau arsitektur staging dan mengonfirmasi zona geografis server (lokasi Indonesia / Asia Tenggara).",
        deliverables: [
          "Repositori Kode Terraform Teruji di Lingkungan Staging",
          "Image Kontainer Docker Resmi yang Lolos Vulnerability Scanning",
          "Kluster Lingkungan Staging yang Berjalan Mandiri"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Pembangunan Pipa CI/CD & Sistem Pemantauan 24/7",
        timeline: "Minggu 5 - 6",
        objective: "Membangun alur otomasi rilis kode dari Git langsung ke server, serta memasang dashboard metrik performa aktif.",
        activities: [
          "Konfigurasi pipeline GitHub Actions / GitLab CI untuk build, test, dan deployment otomatis",
          "Pemasangan sistem observabilitas Prometheus, Grafana, dan centralized logging",
          "Konfigurasi notifikasi peringatan darurat ke saluran Telegram atau Slack tim teknis",
          "Penyusunan script backup basis data berkala dengan enkripsi kunci AWS KMS"
        ],
        clientRole: "Melakukan pengujian rilis fitur pada branch staging untuk memvalidasi alur CI/CD.",
        deliverables: [
          "Pipeline CI/CD Beroperasi Penuh Tanpa Intervensi Manual",
          "Dashboard Pemantauan Uptime, Latensi, dan Penggunaan Resource",
          "Sistem Peringatan Dini (Alerting System) yang Terintegrasi"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Simulasi Uji Beban & Migrasi Tanpa Waktu Henti (Zero Downtime)",
        timeline: "Minggu 7",
        objective: "Menguji ketahanan auto-scaling saat lonjakan trafik masif dan memindahkan database produksi tanpa gangguan transaksi.",
        activities: [
          "Simulasi auto-scaling: penambahan instance server otomatis saat CPU mencapai 70%",
          "Sinkronisasi database produksi secara real-time ke cloud baru",
          "Pengalihan DNS bertahap menggunakan Cloudflare CDN",
          "Serah terima akun utama (root access) dan dokumentasi pemulihan bencana (Disaster Recovery)"
        ],
        clientRole: "Menyetujui jadwal cut-over dan memantau penerimaan transaksi pertama pada infrastruktur baru.",
        deliverables: [
          "Aplikasi dan Database Beroperasi Penuh di Cloud Produksi",
          "Laporan Hasil Uji Auto-Scaling dan Pemulihan Bencana",
          "Dokumen Prosedur Operasional Standar (SOP) DevOps",
          "Kredensial Penuh Kepemilikan Akun Cloud Klien"
        ]
      }
    ],
    qualityGates: [
      "Seluruh provisi infrastruktur wajib melalui git-commit Terraform (nol konfigurasi manual)",
      "Database produksi wajib terenkripsi at-rest dan in-transit dengan cadangan snapshot harian teruji",
      "Pipa CI/CD memblokir deployment otomatis bila ditemukan kerentanan paket pada docker scan",
      "Waktu pengalihan domain zero-downtime dengan pemantauan error rate 0%"
    ],
    clientPreparation: [
      "Akun organisasi pada penyedia cloud (AWS / GCP / Cloudflare) yang telah terverifikasi metode pembayarannya",
      "Akses manajemen DNS domain resmi perusahaan",
      "Daftar staf IT internal yang akan menerima delegasi peran akses IAM"
    ],
    riskManagement: [
      {
        risk: "Lonjakan biaya tagihan cloud yang tidak terkontrol akibat trafik abnormal.",
        mitigation: "Pemasangan AWS/GCP Budget Alert yang otomatis mengirim notifikasi dan membendung batas maksimal alokasi server."
      },
      {
        risk: "Kegagalan pada salah satu pusat data fisik penyedia cloud.",
        mitigation: "Penerapan arsitektur Multi-Availability Zone (Multi-AZ) dengan failover otomatis ke data center lain dalam hitungan detik."
      }
    ],
    relatedServiceSlug: "cloud-computing",
    relatedPortfolioSlug: "cloud-computing",
    relatedFaqSlug: "cloud-computing"
  },

  "creative-content-digital-media": {
    id: "04",
    slug: "creative-content-digital-media",
    title: "Konten Kreatif & Media Digital",
    eyebrow: "Metodologi Riset Desain & Strategi Visual",
    methodologyName: "Siklus Desain Berpusat Pengguna (User-Centered Design) & Standar Design System",
    shortDesc: "Alur perancangan UI/UX dan strategi media digital yang berbasis riset perilaku audiens, pengujian wireframe interaktif, hingga penyerahan design tokens siap koding.",
    philosophy: "Desain yang hebat bukan sekadar selera visual subjektif. Desain yang hebat adalah solusi terukur yang memandu calon klien memahami nilai produk Anda secara intuitif dan mempermudah proses pengambilan keputusan.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Riset Audiens, Audit Brand, & Pemetaan User Journey",
        timeline: "Minggu 1 - 2",
        objective: "Memahami motivasi pengguna, menganalisis tolok ukur kompetitor, dan memetakan alur interaksi dari pengunjung awal hingga menjadi prospek bisnis.",
        activities: [
          "Wawancara pemangku kepentingan (stakeholder interview) untuk menggali target bisnis",
          "Penyusunan persona pengguna dan skenario alur penggunaan (User Flow)",
          "Audit identitas merek eksisting dan analisa kelebihan/kelemahan desain kompetitor",
          "Penyusunan Moodboard arah visual (tipografi, palet warna, dan nuansa estetika)"
        ],
        clientRole: "Menyediakan pedoman merek (brand guidelines) eksisting dan membagikan profil profil klien ideal perusahaan.",
        deliverables: [
          "Dokumen Riset Pengguna & Peta Perjalanan Pengguna (User Journey Map)",
          "Diagram Alur Pengguna (User Flowcharts)",
          "Moodboard Arah Gaya Visual Korporat Terverifikasi"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Arsitektur Informasi & Wireframing Rendah (Low-Fi)",
        timeline: "Minggu 3 - 4",
        objective: "Menyusun tata letak informasi dan logika hierarki konten sebelum mengaplikasikan warna dan dekorasi visual.",
        activities: [
          "Perancangan hierarki struktur halaman (Information Architecture)",
          "Pembuatan wireframe hitam-putih untuk seluruh tampilan layar utama",
          "Pengujian klik alur navigasi untuk memastikan kemudahan perpindahan halaman",
          "Penyusunan copywriting awal yang berorientasi pada pesan keunggulan bisnis"
        ],
        clientRole: "Memberikan masukan struktural terhadap tata letak prioritas informasi dan alur navigasi.",
        deliverables: [
          "Struktur Arsitektur Informasi Halaman (Sitemap)",
          "Wireframe Low-Fidelity Seluruh Layar di Figma",
          "Draf Narasi Konten & Pesan Utama Produk"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Desain Antarmuka Resolusi Tinggi & Prototipe Interaktif",
        timeline: "Minggu 5 - 6",
        objective: "Menerapkan estetika visual modern, efek interaksi dinamis, dan membangun prototipe yang dapat diklik persis seperti aplikasi nyata.",
        activities: [
          "Perancangan antarmuka High-Fidelity pixel-perfect untuk resolusi desktop dan mobile",
          "Penyusunan Design System modular (komponen tombol, kartu, input form, modal, dll.)",
          "Pembuatan prototipe interaktif di Figma untuk simulasi transisi dan animasi",
          "Uji coba usabilitas internal untuk memvalidasi kemudahan pemakaian"
        ],
        clientRole: "Mencoba prototipe interaktif secara langsung dan memberikan umpan balik detail sebelum finalisasi.",
        deliverables: [
          "Desain Antarmuka High-Fidelity Lengkap di Figma",
          "Prototipe Interaktif yang Dapat Diklik Langsung",
          "Pustaka Komponen Design System (Atomic Design Structure)"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Penyusunan Design Tokens & Serah Terima Developer",
        timeline: "Minggu 7",
        objective: "Menyerahkan spesifikasi desain presisi kepada tim programmer agar implementasi kode sesuai 100% dengan rancangan visual.",
        activities: [
          "Penyusunan variabel Design Tokens (warna, spacing, tipografi, radius)",
          "Dokumentasi panduan aset untuk developer (Developer Handoff Notes)",
          "Ekspor aset ilustrasi, ikon grafis SVG, dan video animasi Lottie yang teroptimasi",
          "Pendampingan awal saat tim developer mulai merajut tampilan antarmuka"
        ],
        clientRole: "Menyetujui serah terima berkas final dan menerima tautan akses kepemilikan ruang kerja Figma.",
        deliverables: [
          "Berkas Figma Hak Milik Penuh Klien dengan Akses Edit Penuh",
          "Paket Berkas Design Tokens & Panduan Komponen untuk Developer",
          "Paket Aset Grafis Beresolusi Tinggi (SVG, WebP, Lottie JSON)"
        ]
      }
    ],
    qualityGates: [
      "Kontras warna teks dan latar belakang wajib memenuhi standar aksesibilitas WCAG 2.1 AA",
      "Seluruh komponen antarmuka menggunakan auto-layout responsif untuk memastikan adaptasi mobile sempurna",
      "Alur formulir dan konversi utama lolos uji coba tanpa titik kebingungan pengguna (zero cognitive bottleneck)",
      "Setiap komponen visual terhubung ke Design System induk (tanpa layer gaya yang terlepas)"
    ],
    clientPreparation: [
      "Logo perusahaan dalam format vektor (SVG / AI / EPS)",
      "Materi konten mentah atau profil layanan yang ingin ditampilkan",
      "Contoh referensi visual atau website yang disukai oleh manajemen"
    ],
    riskManagement: [
      {
        risk: "Siklus revisi desain yang berulang-ulang tanpa ujung yang menunda jadwal koding.",
        mitigation: "Penerapan batas tinjauan terstruktur di setiap gerbang tonggak: struktur disepakati di fase wireframe sebelum melangkah ke detail warna dan dekorasi."
      },
      {
        risk: "Hasil koding developer yang melenceng dari rancangan desain antarmuka.",
        mitigation: "Penyediaan spesifikasi design tokens presisi dan pendampingan audit Quality Assurance desain (Design QA) selama proses koding berlangsung."
      }
    ],
    relatedServiceSlug: "creative-content-digital-media",
    relatedPortfolioSlug: "creative-content-digital-media",
    relatedFaqSlug: "creative-content-digital-media"
  },

  "data-science": {
    id: "05",
    slug: "data-science",
    title: "Sains Data & Business Intelligence (BI)",
    eyebrow: "Metodologi Ekstraksi Nilai Data & Analisis Prediktif",
    methodologyName: "Pipeline CRISP-DM Teradaptasi & Gudang Data Tunggal (Single Source of Truth)",
    shortDesc: "Pendekatan sistematis pemrosesan data: mulai dari pembersihan data kotor, pembangunan pipeline ETL otomatis, konsolidasi data warehouse, hingga visualisasi dashboard eksekutif presisi.",
    philosophy: "Data tanpa tata kelola yang rapi hanyalah tumpukan beban penyimpanan. Metodologi data kami berfokus pada validitas integritas data dasar terlebih dahulu sebelum membangun grafik analitik atau model prediksi, sehingga keputusan manajemen berdiri di atas angka yang 100% sahih.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Audit Sumber Data & Definisi Metrik KPI Bisnis",
        timeline: "Minggu 1 - 2",
        objective: "Memetakan seluruh database operasional, spreadsheet divisi, dan merumuskan rumus kalkulasi metrik bisnis yang disepakati.",
        activities: [
          "Inventarisasi sumber data transaksi (database SQL, file Excel, API CRM/POS)",
          "Wawancara dengan manajemen eksekutif untuk menentukan formula KPI utama",
          "Pemeriksaan tingkat anomali, duplikasi, dan kekosongan data mentah (Data Profiling)",
          "Penyusunan kamus data bisnis (Business Data Dictionary)"
        ],
        clientRole: "Menyediakan akses sampel data mentah dan mengklarifikasi rumus perhitungan keuangan atau operasional yang digunakan internal.",
        deliverables: [
          "Kamus Definisi Data & Matriks KPI Bisnis Terstandarisasi",
          "Laporan Hasil Audit Kualitas Data Mentah (Data Quality Report)",
          "Rencana Arsitektur Alur Data dari Sumber ke Gudang Data"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Pembangunan Alur Pembersihan Data & Data Warehouse",
        timeline: "Minggu 3 - 4",
        objective: "Membangun script ETL otomatis yang membersihkan data kotor dan menyimpannya ke database analitik khusus berkecepatan tinggi.",
        activities: [
          "Penulisan script ekstraksi dan pembersihan data menggunakan Python / SQL",
          "Pemodelan skema gudang data bintang (Star Schema / Snowflake Schema)",
          "Provisi data warehouse analitik berbasis ClickHouse, PostgreSQL, atau BigQuery",
          "Penerapan mekanisme penanganan data duplikat dan validasi tipe data otomatis"
        ],
        clientRole: "Membantu mencocokkan angka sampel hasil ekstraksi dengan laporan keuangan historis.",
        deliverables: [
          "Pipeline ETL Berjalan Otomatis Sesuai Jadwal (Airflow / Prefect)",
          "Skema Data Warehouse Analitik Siap Pakai",
          "Script Validasi Integritas Data Tanpa Selisih"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Desain Dashboard Eksekutif & Visualisasi Interaktif",
        timeline: "Minggu 5 - 6",
        objective: "Membangun dashboard visual yang menyajikan tren, perbandingan periode, dan anomali operasional secara real-time.",
        activities: [
          "Perancangan tata letak visual dashboard pada platform BI (Metabase / Superset / Power BI)",
          "Penyusunan filter interaktif berbasis rentang tanggal, wilayah cabang, dan kategori produk",
          "Pencocokan rekonsiliasi angka dashboard dengan laporan buku besar keuangan",
          "Konfigurasi pengiriman laporan berkala otomatis via email atau chat korporat"
        ],
        clientRole: "Mengevaluasi keterbacaan grafik dan mencoba filter laporan bersama para manajer divisi.",
        deliverables: [
          "Dashboard Eksekutif Real-Time Terpasang & Dapat Diakses Aman",
          "Laporan Hasil Rekonsiliasi Akurasi Angka 100% Cocok",
          "Jadwal Otomasi Pengiriman Laporan Berkala (Scheduled Reports)"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Pemodelan Prediktif & Pelatihan Staf Analis Internal",
        timeline: "Minggu 7 - 8",
        objective: "Menerapkan algoritma machine learning prediktif (peramalan stok/churn) dan melatih tim analis klien agar mandiri.",
        activities: [
          "Pelatihan model peramalan tren penjualan (Time-Series Forecasting)",
          "Segmentasi pelanggan otomatis berdasarkan nilai transaksi historis (RFM Analysis)",
          "Sesi lokakarya intensif penggunaan dashboard dan penulisan query dasar",
          "Serah terima dokumentasi teknis dan penyerahan hak akses admin data warehouse"
        ],
        clientRole: "Mengikuti sesi lokakarya pelatihan dan memvalidasi hasil model prediksi terhadap rencana pengadaan barang.",
        deliverables: [
          "Model Prediksi Terlatih Beserta Laporan Metrik Akurasi",
          "Dokumen Manual Penggunaan & Pemeliharaan Pipeline Data",
          "Sertifikat Selesai Pelatihan Tim Analis Klien"
        ]
      }
    ],
    qualityGates: [
      "Angka metrik pada dashboard wajib 100% cocok dengan laporan keuangan audit historis",
      "Pipeline ETL wajib memiliki sistem deteksi gagal yang otomatis mengirim peringatan sebelum jam kerja dimulai",
      "Akses data sensitif gaji atau margin keuntungan wajib dilindungi sistem hak akses berbasis jabatan",
      "Waktu muat grafik analitik di bawah 2 detik untuk data historis berukuran jutaan baris"
    ],
    clientPreparation: [
      "Akses koneksi ke database transaksional (read-only replica sangat dianjurkan)",
      "Sampel berkas rekapitulasi laporan manual 6-12 bulan terakhir untuk bahan validasi silang",
      "Daftar pemangku kepentingan yang berhak menerima akses dashboard"
    ],
    riskManagement: [
      {
        risk: "Keterlambatan pengerjaan akibat data mentah yang sangat berantakan atau banyak nilai kosong.",
        mitigation: "Penyusunan modul imputasi data statistik dan aturan default pembersihan data yang disepakati di awal fase riset."
      },
      {
        risk: "Beban query analitik memperlambat kinerja database kasir atau transaksi utama.",
        mitigation: "Pemisahan total antara database transaksi dengan data warehouse analitik menggunakan replikasi asinkron."
      }
    ],
    relatedServiceSlug: "data-science",
    relatedPortfolioSlug: "data-science",
    relatedFaqSlug: "data-science"
  },

  "game-development": {
    id: "06",
    slug: "game-development",
    title: "Pengembangan Game & Simulasi Interaktif",
    eyebrow: "Metodologi Rekayasa Permainan & Media Imersif",
    methodologyName: "Siklus Iteratif Playtesting, Optimasi 60 FPS, & Arsitektur Anti-Cheat",
    shortDesc: "Tahapan produksi game terpadu dari Game Design Document (GDD), pembuktian rasa bermain (greybox prototyping), produksi aset 2D/3D, hingga stabilitas performa lintas platform.",
    philosophy: "Game yang sukses ditentukan oleh keseimbangan antara rasa bermain yang menyenangkan (game feel), performa frame rate yang mulus di ponsel berspesifikasi rendah, dan keamanan integritas skor yang kebal dari manipulasi curang.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Konseptualisasi & Game Design Document (GDD)",
        timeline: "Minggu 1 - 2",
        objective: "Merumuskan alur cerita, mekanika aturan main (core gameplay loop), target perangkat, dan skema integrasi promosi brand.",
        activities: [
          "Penyusunan Game Design Document (GDD) yang merinci seluruh aturan main",
          "Penetapan target spesifikasi teknis (Web-based HTML5, Android, iOS, atau PC)",
          "Perancangan konsep karakter visual, lingkungan panggung, dan gaya seni (Art Style)",
          "Penentuan formula perhitungan skor dan integrasi hadiah promosi (reward system)"
        ],
        clientRole: "Menyetujui dokumen GDD, gaya visual karakter, dan alokasi hadiah voucher belanja bagi pemain.",
        deliverables: [
          "Dokumen Master Game Design Document (GDD)",
          "Lembar Panduan Seni Visual & Konsep Karakter (Concept Art Sheet)",
          "Spesifikasi Teknis Batas Memori & Target Frame Rate"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Pembuatan Prototipe Kotak Abu-Abu (Greybox Playtesting)",
        timeline: "Minggu 3 - 4",
        objective: "Menguji rasa bermain (game feel) dan fisika kontrol menggunakan bentuk geometri sederhana sebelum membuat aset visual rumit.",
        activities: [
          "Pembangunan prototipe mekanika dasar menggunakan Unity Engine",
          "Penyetelan responsivitas kontrol layar sentuh atau tombol mouse/keyboard",
          "Sesi pengujian playtesting internal untuk mengukur durasi dan kurva kesulitan permainan",
          "Validasi apakah permainan terasa adiktif dan menyenangkan tanpa terdistraksi grafis"
        ],
        clientRole: "Mencoba prototipe awal dan memberikan masukan terhadap tingkat kesulitan permainan.",
        deliverables: [
          "Build Prototipe Interaktif yang Dapat Dimainkan (Playable Greybox Build)",
          "Laporan Evaluasi Rasa Bermain & Koreksi Mekanika Kontrol"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Produksi Aset 2D/3D, Pemrograman Inti, & Audio",
        timeline: "Minggu 5 - 8",
        objective: "Merajut model visual final, animasi gerak, efek suara, dan sistem backend leaderboard ke dalam game engine.",
        activities: [
          "Pemodelan 3D / pembuatan sprite 2D beserta animasi gerak karakter (Spine 2D / Blender)",
          "Pemrograman logika permainan lengkap, rintangan, dan tingkatan level panggung",
          "Penyusunan efek suara (SFX) dinamis dan musik latar yang membangkitkan suasana",
          "Pembangunan backend server-authoritative untuk pencegahan kecurangan skor dan klaim hadiah"
        ],
        clientRole: "Meninjau tampilan visual akhir permainan dan menguji coba sistem integrasi voucher promosi.",
        deliverables: [
          "Versi Game Alpha/Beta Berfitur Lengkap dengan Aset Visual Final",
          "Backend API Leaderboard & Sistem Validasi Skor Anti-Cheat",
          "Aset Audio Efek & Musik Latar Berlisensi Komersial Penuh"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Optimasi Performa 60 FPS, Rilis Toko, & Pemantauan",
        timeline: "Minggu 9 - 10",
        objective: "Mengoptimalkan kompresi tekstur agar ukuran unduhan kecil dan mendampingi proses publikasi ke toko aplikasi atau server web.",
        activities: [
          "Profil kompresi aset untuk memastikan game berjalan stabil 60 FPS di smartphone mid-low",
          "Pengecekan konsumsi memori dan pencegahan kebocoran RAM (Memory Leak Profiling)",
          "Penerbitan game ke Google Play Store / Apple App Store atau deployment WebGL di CDN",
          "Pemasangan analitik perilaku pemain (GameAnalytics) untuk memantau retensi harian"
        ],
        clientRole: "Menyetujui rilis publik dan memantau antusiasme pemain pada hari peluncuran kampanye.",
        deliverables: [
          "Game Resmi Live di Toko Aplikasi atau Terpasang di Server Web",
          "Laporan Profil Performa Frame Rate di Berbagai Tipe Gawai",
          "Source Code Proyek Unity Lengkap Berserta Seluruh Aset Asli",
          "Dashboard Analitik Aktivitas Pemain Real-Time"
        ]
      }
    ],
    qualityGates: [
      "Game stabil pada kecepatan minimal 60 FPS pada perangkat target tanpa stuttering",
      "Kalkulasi skor diverifikasi di server backend (nol kemungkinan manipulasi nilai dari sisi klien)",
      "Ukuran berkas unduhan teroptimasi sesuai batas maksimal jaringan seluler",
      "Lolos seluruh persyaratan uji kepatuhan teknis Google Play / Apple App Store"
    ],
    clientPreparation: [
      "Aset logo atau maskot resmi perusahaan jika ingin dimasukkan ke dalam game",
      "Ketentuan alokasi hadiah promosi atau integrasi sistem kupon diskon",
      "Akun developer Google Play Console / Apple Developer jika ingin diterbitkan atas nama klien"
    ],
    riskManagement: [
      {
        risk: "Pemain memanipulasi kode web untuk mendapatkan skor tertinggi secara curang.",
        mitigation: "Penerapan enkripsi token sesi, validasi logika waktu permainan di backend, dan pencatatan telemetri aksi pemain."
      },
      {
        risk: "Ukuran game terlalu besar sehingga calon pemain enggan mengunduh.",
        mitigation: "Penggunaan teknik texture atlas compression, audio streaming, dan pengunduhan aset bertahap (Addressables)."
      }
    ],
    relatedServiceSlug: "game-development",
    relatedPortfolioSlug: "game-development",
    relatedFaqSlug: "game-development"
  },

  "internet-of-things": {
    id: "07",
    slug: "internet-of-things",
    title: "Internet of Things (IoT) & Integrasi Hardware",
    eyebrow: "Metodologi Rekayasa Sensor Lapangan & Komputasi Tertanam",
    methodologyName: "Siklus Rekayasa Hardware-in-the-Loop, Uji Kalibrasi Lapangan, & Protokol Hemat Daya",
    shortDesc: "Metode perancangan sistem fisik digital: mulai dari desain sirkuit skematik, kalibrasi sensor industri, pemrograman firmware hemat energi, uji pilot project di lapangan, hingga integrasi dashboard telemetri.",
    philosophy: "Di dunia IoT, perangkat dipasang di lapangan yang sulit dijangkau manusia. Metodologi kami menitikberatkan pada keandalan sirkuit proteksi daya, ketahanan terhadap cuaca ekstrem, dan kemampuan pemulihan mandiri (watchdog timer) agar sensor tidak pernah 'mati suri' di lokasi terpencil.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Survei Lapangan & Pemilihan Komponen Industri",
        timeline: "Minggu 1 - 2",
        objective: "Menilai ketersediaan sinyal seluler, sumber daya listrik, rentang suhu operasional, dan parameter fisik yang ingin diukur.",
        activities: [
          "Survei lokasi penempatan sensor di pabrik, gudang, atau perkebunan terbuka",
          "Pengukuran kekuatan sinyal jaringan seluler (4G LTE, NB-IoT, atau LoRaWAN)",
          "Pemilihan sensor berstandar industri dengan sertifikasi kalibrasi pabrik",
          "Perhitungan konsumsi daya dan dimensi panel surya / kapasitas baterai"
        ],
        clientRole: "Memberikan izin akses lokasi survei dan menjelaskan titik-titik krusial yang ingin dipantau.",
        deliverables: [
          "Laporan Hasil Survei Lapangan & Topologi Komunikasi Sensor",
          "Bill of Materials (BOM) Spesifikasi Komponen Perangkat Keras",
          "Diagram Skematik Alur Daya dan Komunikasi Sensor"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Perakitan Prototipe & Rekayasa Firmware Mikrokontroler",
        timeline: "Minggu 3 - 5",
        objective: "Merakit sirkuit PCB purwarupa, memprogram firmware mikrokontroler (ESP32 / STM32), dan melakukan uji kalibrasi laboratorium.",
        activities: [
          "Desain tata letak sirkuit PCB proteksi lonjakan voltase dan noise industri",
          "Pemrograman firmware dengan mode tidur hemat daya (Deep Sleep Management)",
          "Implementasi protokol pengiriman data ringan MQTT dengan enkripsi TLS",
          "Pengujian kalibrasi sensor menggunakan instrumen pembanding terstandarisasi"
        ],
        clientRole: "Meninjau casing pelindung fisik prototipe dan memvalidasi batas toleransi akurasi sensor.",
        deliverables: [
          "Unit Perangkat Keras Prototipe Siap Uji Laboratorium",
          "Source Code Firmware Terdokumentasi Lengkap",
          "Laporan Hasil Uji Kalibrasi Sensor di Laboratorium"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Uji Coba Lapangan (Pilot Project) & Broker Telemetri",
        timeline: "Minggu 6 - 8",
        objective: "Memasang sejumlah unit prototipe di lokasi riil selama 14 hari tanpa henti untuk menguji ketahanan cuaca dan stabilitas pengiriman sinyal.",
        activities: [
          "Instalasi unit sensor pilot project di lingkungan operasional riil klien",
          "Pembangunan arsitektur broker MQTT dan database deret waktu (Time-Series DB)",
          "Pemantauan stabilitas koneksi dan kehilangan paket data (packet drop rate)",
          "Penyempurnaan algoritma filter data anomali langsung di level mikrokontroler (Edge Filtering)"
        ],
        clientRole: "Memantau performa perangkat di lapangan bersama tim teknisi dan melaporkan jika ada kondisi abnormal.",
        deliverables: [
          "Laporan Evaluasi Uji Coba Pilot Project Selama 14 Hari",
          "Broker MQTT dan Database Deret Waktu Terpasang di Cloud",
          "Firmware Teroptimasi Bebas Cacat Konektivitas"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Produksi Massal, Deployment Dashboard, & Pelatihan",
        timeline: "Minggu 9 - 11",
        objective: "Merakit unit sensor massal dalam casing bersertifikasi IP67, memasang dashboard monitoring geospasial, dan melatih staf operasional.",
        activities: [
          "Perakitan unit massal dengan kontrol kualitas pemeriksaan isolasi sirkuit",
          "Pemasangan fisik di seluruh titik sensor dan verifikasi status live",
          "Peluncuran dashboard pemantauan visual dengan peta geospasial dan alarm peringatan otomatis",
          "Pengujian fitur pembaruan firmware jarak jauh (Over-The-Air / OTA Updates)",
          "Pelatihan pemeliharaan perangkat keras dan penggantian suku cadang bagi staf klien"
        ],
        clientRole: "Menyaksikan pengetesan alarm darurat dan menandatangani berita acara serah terima instalasi.",
        deliverables: [
          "Seluruh Unit Sensor Aktif Beroperasi di Lapangan",
          "Dashboard Pemantauan Lapangan Live dengan Peringatan Multi-Saluran",
          "Buku Panduan Instalasi Fisik & Manual Perawatan Sensor",
          "Garansi Unit Resmi & Pasokan Suku Cadang Pengganti"
        ]
      }
    ],
    qualityGates: [
      "Perangkat keras lolos uji stres suhu dan kelembaban dalam ruang uji tanpa malfungsi",
      "Mikrokontroler wajib memiliki fitur hardware watchdog timer untuk auto-restart otomatis saat freeze",
      "Proses pengiriman data MQTT wajib terenkripsi TLS dan mendukung mode offline caching di SD card saat jaringan putus",
      "Akurasi bacaan sensor berada dalam toleransi kalibrasi standar industri yang disepakati"
    ],
    clientPreparation: [
      "Titik sumber listrik (jika menggunakan adaptor kabel) atau persetujuan penempatan panel surya",
      "Akses fisik dan izin keamanan kerja (K3) untuk tim teknisi saat pemasangan sensor di lokasi",
      "Kartu SIM M2M industri / akun operator seluler untuk paket data perangkat"
    ],
    riskManagement: [
      {
        risk: "Hilangnya sinyal jaringan seluler di lapangan secara berkala.",
        mitigation: "Penyematan penyimpanan lokal (Flash/SD card) pada mikrokontroler yang menyimpan data sementara dan mengirimkannya saat sinyal pulih (Store-and-Forward)."
      },
      {
        risk: "Korosi atau kelembaban merusak sirkuit elektronik mikrokontroler.",
        mitigation: "Penggunaan casing berstandar IP67 dengan lapisan conformal coating silikon tahan air pada seluruh permukaan papan PCB."
      }
    ],
    relatedServiceSlug: "internet-of-things",
    relatedPortfolioSlug: "internet-of-things",
    relatedFaqSlug: "internet-of-things"
  },

  "machine-learning-ai": {
    id: "08",
    slug: "machine-learning-ai",
    title: "Kecerdasan Buatan (AI) & Pembelajaran Mesin",
    eyebrow: "Metodologi AI Aplikatif & Pipa RAG Teruji",
    methodologyName: "Siklus RAG Terkurasi, Rekayasa Prompt Berlapis, & Evaluasi Nol-Halusinasi",
    shortDesc: "Metode penerapan AI pada kasus bisnis konkret: kurasi data dokumen internal, indeksasi vector database, rekayasa prompt guardrails, pengujian akurasi bebas halusinasi, dan integrasi API produksi.",
    philosophy: "AI di lingkungan perusahaan tidak boleh dibiarkan mengarang bebas tanpa acuan. Metodologi kami mewajibkan model AI bekerja secara ground-truth (hanya menjawab dari dokumen resmi terverifikasi) dengan kutipan sumber yang dapat dipertanggungjawabkan secara hukum dan bisnis.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Kurasi Dokumen Pengetahuan & Pemilihan Model Dasar",
        timeline: "Minggu 1 - 2",
        objective: "Mengumpulkan dokumen SOP perusahaan, membersihkan teks dari format yang membingungkan, dan memilih arsitektur model AI yang paling hemat biaya.",
        activities: [
          "Inventarisasi dokumen sumber (PDF pedoman, katalog produk, riwayat tiket tanya jawab)",
          "Pembersihan teks (Data Parsing) dan pemecahan teks menjadi potongan semantik (Semantic Chunking)",
          "Pemilihan model fondasi (OpenAI GPT-4o, Anthropic Claude, atau model open-weights Llama 3 privat)",
          "Penetapan metrik akurasi jawaban dan batas ambang kesamaan semantik"
        ],
        clientRole: "Menyediakan dokumen pedoman resmi yang telah disetujui manajemen dan menetapkan batasan informasi yang tidak boleh diungkap.",
        deliverables: [
          "Kumpulan Data Dokumen Terkurasi & Bersih Format",
          "Dokumen Rencana Arsitektur Retrieval-Augmented Generation (RAG)",
          "Kamus Batasan Topik & Informasi Rahasia (Guardrails Specification)"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Indeksasi Vector Database & Rekayasa Alur RAG",
        timeline: "Minggu 3 - 4",
        objective: "Mengubah teks dokumen menjadi representasi angka vektor matematis dan membangun alur pencarian semantik berkecepatan tinggi.",
        activities: [
          "Proses embedding teks dokumen menggunakan model embedding multibahasa terkemuka",
          "Konfigurasi Vector Database (Pinecone, Qdrant, atau PostgreSQL pgvector)",
          "Pembangunan pipeline Hybrid Search (menggabungkan pencarian kata kunci dengan pencarian makna semantik)",
          "Penyusunan prompt instruksi inti yang melarang AI berspekulasi atau berhalusinasi"
        ],
        clientRole: "Meninjau gaya bahasa, persona tutur kata asisten AI, dan format jawaban yang diinginkan.",
        deliverables: [
          "Vector Database Terindeks Penuh di Server Privat",
          "Pipeline Retrieval Berjalan dengan Latensi Sub-Detik",
          "Kumpulan Prompt Inti (System Prompts) Berstandar Enterprise"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Pengujian Akurasi, Penyetelan Guardrails, & Red-Teaming",
        timeline: "Minggu 5 - 6",
        objective: "Menguji respon AI terhadap ratusan pertanyaan jebakan (jailbreak prompt) dan memastikan tidak ada informasi keliru yang lolos.",
        activities: [
          "Uji coba automated evaluation menggunakan ratusan pasangan pertanyaan-jawaban uji (Golden Dataset)",
          "Simulasi penyerangan prompt injection dan pengujian kebocoran data sensitif (Red-Teaming)",
          "Penyetelan sistem reranking untuk memastikan kutipan dokumen yang ditarik adalah yang paling relevan",
          "Pemasangan fallback otomatis: jika dokumen tidak ditemukan, AI wajib mengalihkan ke staf manusia"
        ],
        clientRole: "Melakukan pengujian pertanyaan sulit bersama tim internal dan mencatat jika ada jawaban yang kurang presisi.",
        deliverables: [
          "Laporan Tolok Ukur Akurasi AI (Accuracy Benchmark Report)",
          "Nol Celah Halusinasi pada Dataset Pertanyaan Uji",
          "Modul Pengalihan Chat ke Operator Manusia (Human Handover Module)"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Integrasi Antarmuka (WhatsApp/Web) & Pemantauan Drift",
        timeline: "Minggu 7 - 8",
        objective: "Menghubungkan layanan AI ke saluran komunikasi pelanggan (WhatsApp resmi atau widget website) dan memantau kepuasan pengguna harian.",
        activities: [
          "Integrasi webhook ke WhatsApp Cloud API resmi atau modul chat website",
          "Penyediaan dashboard riwayat percakapan untuk evaluasi kepuasan pengguna (Thumbs Up/Down)",
          "Penerapan sistem pemantauan biaya konsumsi token agar anggaran tetap terkontrol",
          "Pelatihan tim admin klien dalam memperbarui dokumen pengetahuan baru secara mandiri"
        ],
        clientRole: "Mendaftarkan nomor WhatsApp Business resmi dan memantau interaksi pelanggan pada hari pertama peluncuran.",
        deliverables: [
          "Asisten AI Beroperasi Live di Saluran WhatsApp / Website Perusahaan",
          "Dashboard Manajemen Dokumen & Pemantauan Kepuasan Respon",
          "Buku Panduan Pembaruan Konten Pengetahuan AI",
          "Laporan Monitoring Biaya Pemakaian Token Harian"
        ]
      }
    ],
    qualityGates: [
      "AI wajib menyertakan kutipan dokumen rujukan pada setiap jawaban informatif yang diberikan",
      "Lolos uji ketahanan dari serangan prompt injection dan jailbreak tanpa membeberkan instruksi sistem internal",
      "Tingkat akurasi jawaban pada dataset uji minimal 95% tanpa halusinasi fakta",
      "Data percakapan pengguna dilindungi klausul non-training oleh penyedia API resmi"
    ],
    clientPreparation: [
      "Kumpulan berkas dokumen SOP, buku panduan, atau FAQ yang sudah tervalidasi kebenarannya",
      "Akun WhatsApp Business API resmi yang telah disetujui Meta (jika saluran via WhatsApp)",
      "Personil peninjau konten yang bertugas memvalidasi jawaban AI selama fase pengujian"
    ],
    riskManagement: [
      {
        risk: "AI memberikan jawaban yang tidak sesuai dengan kebijakan terbaru perusahaan.",
        mitigation: "Penyediaan panel admin di mana dokumen lama dapat dihapus atau diperbarui seketika dalam hitungan detik tanpa perlu retraining model."
      },
      {
        risk: "Biaya konsumsi API token melonjak drastis akibat pesan spam dari pengguna iseng.",
        mitigation: "Penerapan sistem rate limiting per nomor telepon dan pemangkasan konteks percakapan otomatis untuk menghemat token."
      }
    ],
    relatedServiceSlug: "machine-learning-ai",
    relatedPortfolioSlug: "machine-learning-ai",
    relatedFaqSlug: "machine-learning-ai"
  },

  "mobile-development": {
    id: "09",
    slug: "mobile-development",
    title: "Pengembangan Aplikasi Mobile (iOS & Android)",
    eyebrow: "Metodologi Aplikasi Seluler & Integrasi Toko Aplikasi",
    methodologyName: "Siklus Rilis Sprint Mingguan, Arsitektur Offline-First, & Otomasi Toko Aplikasi",
    shortDesc: "Alur pengembangan aplikasi mobile lintas platform (React Native/Flutter): dari desain antarmuka ponsel pintar, pemrograman modular, pengujian di perangkat fisik nyata, hingga rilis resmi ke Google Play dan App Store.",
    philosophy: "Aplikasi mobile dinilai dalam hitungan detik oleh pengguna. Jika aplikasi lambat, menghabiskan baterai, atau gagal berfungsi saat sinyal lemah, pengguna akan langsung menghapusnya. Metodologi kami mengutamakan performa rendering 60 FPS, memori yang ramping, dan ketangguhan arsitektur offline-first.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Spesifikasi Fungsional & Desain Alur Layar Seluler",
        timeline: "Minggu 1 - 2",
        objective: "Menentukan batasan fitur rilis pertama (MVP), merancang arsitektur navigasi layar ponsel, dan menyepakati kontrak endpoint API backend.",
        activities: [
          "Penyusunan dokumen rincian fitur aplikasi mobile (Functional Requirements)",
          "Perancangan navigasi layar (Bottom Tabs, Stack Navigation, Drawer)",
          "Desain antarmuka mobile resolusi tinggi di Figma yang ramah jangkauan jempol (Thumb-Friendly UI)",
          "Penetapan standar penyimpanan lokal (WatermelonDB / MMKV / SQLite)"
        ],
        clientRole: "Meninjau alur proses pendaftaran, checkout, atau operasional lapangan di prototipe layar ponsel.",
        deliverables: [
          "Dokumen Spesifikasi Fungsional Aplikasi Seluler",
          "Desain Antarmuka Mobile Figma Siap Implementasi",
          "Kontrak API Backend Seluler Terverifikasi"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Pengembangan Sprint Mingguan & Integrasi Fitur Hardware",
        timeline: "Minggu 3 - 6",
        objective: "Membangun kode aplikasi menggunakan React Native atau Flutter per siklus mingguan, menghubungkan sensor perangkat keras, dan merilis build uji coba rutin.",
        activities: [
          "Pemrograman antarmuka komponen native menggunakan TypeScript / Dart",
          "Integrasi sensor gawai: kamera barcode/QR, pelacakan GPS, dan otentikasi biometrik",
          "Pembangunan arsitektur sinkronisasi data offline-first",
          "Rilis build mingguan via TestFlight (iOS) dan Firebase App Distribution (Android)"
        ],
        clientRole: "Menginstal build uji coba mingguan di ponsel masing-masing untuk mencoba fitur baru secara bertahap.",
        deliverables: [
          "Aplikasi Build Uji Coba Mingguan yang Dapat Dipasang di Ponsel",
          "Modul Sensor Perangkat Keras Berfungsi Normal",
          "Source Code Bersih Terdokumentasi di Repositori Git"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Pengujian Perangkat Fisik Nyata, Stres Jaringan, & Keamanan",
        timeline: "Minggu 7 - 8",
        objective: "Menguji aplikasi di berbagai variasi ukuran layar, menguji dalam kondisi jaringan internet lambat, dan memverifikasi keamanan penyimpanan token.",
        activities: [
          "Pengujian di puluhan perangkat fisik nyata (Samsung, iPhone, Xiaomi, Oppo berbagai generasi)",
          "Simulasi kondisi jaringan buruk (Network Throttling: 2G/3G, kehilangan sinyal, dan beralih WiFi)",
          "Audit keamanan penyimpanan lokal (Keychain iOS & Keystore Android terenkripsi)",
          "Penyelesaian seluruh temuan bug dan optimasi ukuran file instalasi (APK/IPA)"
        ],
        clientRole: "Melakukan User Acceptance Testing (UAT) komprehensif bersama tim operasional klien.",
        deliverables: [
          "Laporan Hasil Uji Kompatibilitas Perangkat Fisik Nyata",
          "Hasil Uji Ketahanan Offline-First Tanpa Kehilangan Data",
          "Dokumen Persetujuan Kelayakan Rilis (UAT Sign-Off)"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Publikasi Toko Aplikasi (Play Store & App Store) & Handover",
        timeline: "Minggu 9 - 10",
        objective: "Mendaftarkan aplikasi ke Google Play Store dan Apple App Store hingga lolos peninjauan resmi, memasang pelacak crash, dan menyerahkan kode sumber.",
        activities: [
          "Penyiapan materi grafis toko aplikasi (Screenshots promosi, icon, banner, dan deskripsi)",
          "Penyusunan dokumen kebijakan privasi dan pemenuhan syarat regulasi Google/Apple",
          "Submit aplikasi ke App Store Connect & Google Play Console dengan pendampingan penuh",
          "Pemasangan monitoring crash pelaporan bug real-time (Sentry / Firebase Crashlytics)",
          "Serah terima master keystore, sertifikat penandatanganan, dan source code penuh"
        ],
        clientRole: "Menyediakan akses akun pengembang perusahaan di Google Play Console dan Apple Developer Program.",
        deliverables: [
          "Aplikasi Resmi Disetujui & Live di Google Play Store dan Apple App Store",
          "Sertifikat Penandatanganan Rilis (Keystore & Production Certificates)",
          "Dashboard Pelaporan Bug & Crash Monitoring Aktif",
          "Source Code Lengkap Hak Milik 100% Klien"
        ]
      }
    ],
    qualityGates: [
      "Aplikasi berjalan mulus pada target 60 frame per detik tanpa lagging pada layar utama",
      "Aplikasi tidak boleh mengalami crash saat koneksi internet terputus secara mendadak",
      "Ukuran berkas instalasi awal di bawah 35 MB untuk memastikan efisiensi kuota unduhan pengguna",
      "Lolos seluruh pedoman peninjauan ketat Apple App Store Review Guidelines & Google Play Policies"
    ],
    clientPreparation: [
      "Akun Google Play Console (biaya pendaftaran satu kali \$25)",
      "Akun Apple Developer Program (biaya langganan tahunan \$99)",
      "Dokumen kebijakan privasi resmi perusahaan (atau kami bantu buatkan template standarnya)"
    ],
    riskManagement: [
      {
        risk: "Penolakan rilis (rejection) dari tim peninjau Apple App Store karena alasan regulasi antarmuka.",
        mitigation: "Penyelarasan desain awal dengan Human Interface Guidelines Apple dan pendampingan respon klarifikasi teknis hingga disetujui."
      },
      {
        risk: "Pembaruan sistem operasi iOS atau Android baru di masa depan merusak fitur aplikasi lama.",
        mitigation: "Pemberian garansi perawatan kompatibilitas versi sistem operasi baru selama masa garansi resmi."
      }
    ],
    relatedServiceSlug: "mobile-development",
    relatedPortfolioSlug: "mobile-development",
    relatedFaqSlug: "mobile-development"
  },

  "quality-assurance-qa-testing": {
    id: "10",
    slug: "quality-assurance-qa-testing",
    title: "Quality Assurance (QA) & Pengujian Perangkat Lunak",
    eyebrow: "Metodologi Penjaminan Mutu & Uji Beban",
    methodologyName: "Piramida Pengujian Terstandarisasi & Otomasi Regresi Terintegrasi CI/CD",
    shortDesc: "Pendekatan penjaminan mutu perangkat lunak menyeluruh: penyusunan test plan terstruktur, pengujian manual kasus ekstrem (edge cases), otomatisasi pengujian E2E (Playwright), uji beban performa masif (k6), hingga audit celah keamanan.",
    philosophy: "Kualitas bukan sesuatu yang baru dipikirkan di akhir proyek sebelum peluncuran. Mutu perangkat lunak harus dibangun sejak hari pertama perancangan arsitektur, diuji secara terus-menerus melalui otomasi regresi, dan diverifikasi tanpa kompromi sebelum kode menyentuh pengguna akhir.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Telaah Persyaratan & Master Test Plan",
        timeline: "Minggu 1",
        objective: "Membedah seluruh alur bisnis, mengidentifikasi titik transaksi berisiko tinggi, dan memetakan jadwal matriks pengujian.",
        activities: [
          "Menganalisis dokumen spesifikasi fungsional dan desain antarmuka aplikasi",
          "Penyusunan Master Test Plan yang memuat ruang lingkup, metodologi, dan kriteria kelulusan",
          "Pembuatan Matriks Ketertelusuran Pengujian (Requirements Traceability Matrix)",
          "Penetapan kriteria keparahan bug (Blocker, Critical, Major, Minor, Trivial)"
        ],
        clientRole: "Mengklarifikasi alur kerja bisnis yang paling kritis terhadap kerugian finansial atau reputasi.",
        deliverables: [
          "Dokumen Master Test Plan Resmi",
          "Matriks Skenario Kasus Uji (Test Cases Matrix)",
          "Konfigurasi Papan Pelacak Bug di Jira / GitHub Projects"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Eksekusi Pengujian Fungsional Manual & Siklus Defect",
        timeline: "Minggu 2 - 3",
        objective: "Menguji seluruh fungsi tombol, formulir, dan alur transaksi secara manual dari kacamata pengguna awam serta mencari kasus ekstrem.",
        activities: [
          "Eksekusi ratusan skenario pengujian positif, negatif, dan kasus batas (edge cases)",
          "Pengujian lintas browser (Chrome, Safari, Firefox, Edge) dan berbagai resolusi layar",
          "Pencatatan laporan bug terperinci dengan langkah reproduksi, tangkapan layar, dan rekaman video",
          "Verifikasi ulang (Retesting) setelah bug diperbaiki oleh tim programmer"
        ],
        clientRole: "Meninjau laporan kemajuan temuan cacat sistem mingguan bersama tim QA Lead.",
        deliverables: [
          "Laporan Log Pelacakan Cacat Sistem (Bug Tracking Log)",
          "Matriks Hasil Eksekusi Uji Fungsional Lengkap",
          "Statistik Penurunan Jumlah Bug Kritis Menuju Nol"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Pembangunan Skrip Otomasi Pengujian & Uji Beban k6",
        timeline: "Minggu 3 - 4",
        objective: "Mengotomatisasikan alur transaksi kritis agar dapat diuji dalam hitungan menit di masa depan, serta menguji batas daya tampung server.",
        activities: [
          "Penulisan script otomasi pengujian end-to-end (E2E) menggunakan Playwright / Cypress",
          "Otomasi pengujian validasi skema kontrak API backend (Postman / Newman)",
          "Integrasi skrip otomasi ke dalam pipeline CI/CD GitHub Actions / GitLab",
          "Uji beban performa menggunakan Grafana k6 untuk mensimulasikan ribuan pengguna bersamaan"
        ],
        clientRole: "Menyepakati target jumlah pengguna bersamaan yang ingin disimulasikan saat uji beban.",
        deliverables: [
          "Repositori Kode Skrip Otomasi Pengujian E2E & API",
          "Pipeline CI/CD yang Otomatis Menjalankan Uji Regresi Setiap Commit",
          "Laporan Hasil Uji Beban Performa (Load & Stress Testing Report)"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Audit Keamanan OWASP & Sertifikat Kelayakan Rilis",
        timeline: "Minggu 5",
        objective: "Memeriksa pertahanan sistem terhadap ancaman peretasan umum dan menandatangani persetujuan resmi rilis produksi.",
        activities: [
          "Pemindaian kerentanan celah keamanan berdasarkan standar OWASP Top 10",
          "Pengujian validasi sanitasi input untuk mencegah SQL Injection dan XSS",
          "Verifikasi bahwa seluruh bug berkategori Blocker dan Critical telah selesai diperbaiki 100%",
          "Penyusunan laporan akhir kelayakan mutu dan penandatanganan sertifikat QA Sign-Off"
        ],
        clientRole: "Menerima laporan akhir kelayakan mutu dan memberikan otorisasi peluncuran resmi aplikasi.",
        deliverables: [
          "Laporan Hasil Pemindaian Celah Keamanan (Vulnerability Scan Report)",
          "Dokumen Sertifikat Kesiapan Rilis Resmi (QA Sign-Off Certificate)",
          "Manual Dokumentasi Eksekusi Otomasi untuk Tim Internal Klien"
        ]
      }
    ],
    qualityGates: [
      "Nol bug berkategori Blocker dan Critical pada saat pengajuan rilis produksi",
      "Skrip otomasi pengujian regresi lolos 100% tanpa kegagalan (pass rate 100%)",
      "Waktu respon server pada uji beban berada di bawah ambang batas toleransi SLA (rata-rata di bawah 1 detik)",
      "Sistem lolos pemindaian kerentanan OWASP tanpa celah kategori risiko tinggi"
    ],
    clientPreparation: [
      "Akses ke lingkungan server staging yang memiliki spesifikasi setara lingkungan produksi",
      "Kredensial akun uji coba dengan berbagai level hak akses pengguna (admin, staf, pelanggan)",
      "Dokumen spesifikasi aturan bisnis terbaru jika ada perubahan requirement"
    ],
    riskManagement: [
      {
        risk: "Perbaikan bug oleh programmer memicu timbulnya bug baru di modul yang tidak terkait.",
        mitigation: "Penyusunan suite pengujian otomatisasi regresi yang secara mandiri memverifikasi seluruh fungsi lama dalam sekejap setiap kali ada kode baru."
      },
      {
        risk: "Server staging down saat tim QA menjalankan simulasi uji beban masif.",
        mitigation: "Penjadwalan uji beban pada jam khusus dan isolasi environment agar tidak mengganggu aktivitas pengujian fungsional lainnya."
      }
    ],
    relatedServiceSlug: "quality-assurance-qa-testing",
    relatedPortfolioSlug: "quality-assurance-qa-testing",
    relatedFaqSlug: "quality-assurance-qa-testing"
  },

  "web-development": {
    id: "11",
    slug: "web-development",
    title: "Pengembangan Website & Aplikasi Web Enterprise",
    eyebrow: "Metodologi Rekayasa Web Modern & Jamstack",
    methodologyName: "Arsitektur Komponen Modular Next.js, Standar Core Web Vitals, & Technical SEO",
    shortDesc: "Alur perancangan situs web korporat dan portal enterprise: mulai dari perancangan arsitektur informasi, desain UI presisi di Figma, koding berbasis Next.js App Router, optimasi SEO Google, hingga deployment CDN global.",
    philosophy: "Website korporat modern bukan sekadar brosur digital statis. Website adalah garda terdepan reputasi dan mesin konversi bisnis Anda. Metodologi kami menggabungkan performa kecepatan muat instan (Core Web Vitals hijau), kemudahan pengelolaan konten mandiri via Headless CMS, dan keamanan tingkat perbankan.",
    phases: [
      {
        phaseNumber: "FASE 01",
        name: "Arsitektur Informasi, Sitemap, & Strategi SEO On-Page",
        timeline: "Minggu 1 - 2",
        objective: "Merancang struktur hierarki halaman yang ramah perayap Google, menentukan kata kunci industri, dan memetakan alur konversi pengunjung.",
        activities: [
          "Penyusunan struktur peta situs (Sitemap Architecture) yang logis dan terstruktur",
          "Riset kata kunci teknis industri untuk penempatan metadata halaman",
          "Perancangan alur konversi pengunjung (Call-to-Action placement strategy)",
          "Pembuatan wireframe struktur konten per halaman di Figma"
        ],
        clientRole: "Menyetujui struktur hierarki halaman dan menyediakan dokumen profil layanan atau portofolio bisnis.",
        deliverables: [
          "Diagram Peta Situs Resmi (Sitemap Architecture)",
          "Strategi Penempatan Kata Kunci & Metadata SEO",
          "Wireframe Struktur Konten Seluruh Halaman Utama"
        ]
      },
      {
        phaseNumber: "FASE 02",
        name: "Desain Antarmuka Eksklusif & Prototipe Interaktif",
        timeline: "Minggu 3 - 4",
        objective: "Menciptakan identitas visual website yang futuristik, bersih, berwibawa, dan sepenuhnya responsif di semua ukuran layar gawai.",
        activities: [
          "Desain visual high-fidelity di Figma tanpa menggunakan template generik",
          "Penerapan palet warna berkarakter dan tipografi korporat modern",
          "Perancangan mode terang dan mode gelap (Light/Dark Theme) yang elegan",
          "Pembuatan prototipe interaktif untuk meninjau efek hover, animasi transisi, dan navigasi menu"
        ],
        clientRole: "Mencoba prototipe interaktif di Figma dan memberikan persetujuan estetika visual sebelum masuk fase koding.",
        deliverables: [
          "Desain UI High-Fidelity Desktop & Mobile di Figma",
          "Prototipe Interaktif Siap Uji Navigasi",
          "Panduan Komponen Visual & Design Tokens CSS"
        ]
      },
      {
        phaseNumber: "FASE 03",
        name: "Pengembangan Frontend Next.js & Integrasi CMS/API",
        timeline: "Minggu 5 - 7",
        objective: "Membangun website menggunakan standar Next.js App Router, Tailwind CSS, Server-Side Rendering (SSR), dan integrasi panel CMS mandiri.",
        activities: [
          "Koding antarmuka komponen modular berbasis React dan TypeScript",
          "Penerapan Server-Side Rendering (SSR) untuk kecepatan pemuatan sub-detik",
          "Integrasi formulir kontak interaktif dengan validasi input dan proteksi spam (hCaptcha)",
          "Penyambungan panel Headless CMS agar tim non-IT klien dapat mengubah teks dan foto dengan mudah",
          "Penyusunan sitemap.xml dan robots.txt terotomasi"
        ],
        clientRole: "Mencoba mengisi formulir dan memverifikasi tampilan konten pada link staging sementara.",
        deliverables: [
          "Website Beroperasi Penuh di Lingkungan Uji Coba (Staging Server)",
          "Panel Kelola Konten (Headless CMS) yang Terhubung Live",
          "Source Code Bersih Terdokumentasi di Repositori Git"
        ]
      },
      {
        phaseNumber: "FASE 04",
        name: "Audit Core Web Vitals, Konfigurasi Domain, & Peluncuran",
        timeline: "Minggu 8",
        objective: "Memastikan skor performa Google Lighthouse di atas 95, mengarahkan domain resmi dengan sertifikat SSL, dan melatih staf klien.",
        activities: [
          "Optimasi Core Web Vitals (Largest Contentful Paint, Cumulative Layout Shift, First Input Delay)",
          "Konfigurasi DNS domain resmi dengan jaringan global CDN Cloudflare",
          "Pemasangan sertifikat keamanan SSL/TLS Strict dan proteksi header keamanan HTTP",
          "Pendaftaran website ke Google Search Console untuk verifikasi pengindeksan instan",
          "Sesi pelatihan pengelolaan konten untuk staf perusahaan klien"
        ],
        clientRole: "Menyediakan akses DNS domain resmi perusahaan dan menghadiri sesi pelatihan pengelolaan konten.",
        deliverables: [
          "Website Resmi Live di Domain Perusahaan Anda (https://...)",
          "Laporan Skor Google Lighthouse Performa Hijau (95+)",
          "Website Terindeks Resmi di Google Search Console",
          "Buku Panduan & Video Tutorial Pengelolaan Konten CMS",
          "Source Code Repositori Git Hak Milik Penuh Klien"
        ]
      }
    ],
    qualityGates: [
      "Skor audit Google Lighthouse kategori SEO, Aksesibilitas, dan Best Practices berada di atas 95 poin",
      "Waktu muat halaman pertama di bawah 1.5 detik pada koneksi internet seluler standar",
      "Tampilan website responsif sempurna di perangkat layar lebar, laptop, tablet, hingga smartphone berlayar kecil",
      "Seluruh formulir interaktif memiliki proteksi anti-spam dan mekanisme notifikasi instan via email"
    ],
    clientPreparation: [
      "Akses ke pengelola domain (domain registrar) untuk konfigurasi DNS record",
      "Materi teks deskripsi perusahaan, portofolio, dan foto personil beresolusi baik",
      "Akun email resmi yang ditargetkan untuk menerima notifikasi pesan formulir"
    ],
    riskManagement: [
      {
        risk: "Pengindeksan mesin pencari Google memakan waktu lama setelah peluncuran.",
        mitigation: "Penyediaan sitemap XML dinamis otomatis dan pengajuan pengindeksan instan melalui Google Search Console API."
      },
      {
        risk: "Serangan bot spam yang membanjiri kotak masuk email dari formulir kontak.",
        mitigation: "Penerapan verifikasi hCaptcha tanpa mengganggu kenyamanan pengunjung manusia serta validasi sanitasi input di backend."
      }
    ],
    relatedServiceSlug: "web-development",
    relatedPortfolioSlug: "web-development",
    relatedFaqSlug: "web-development"
  }
};

