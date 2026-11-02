export interface ProjectImplementationPricing {
  id: string;
  name: string;
  badge: string;
  description: string;
  priceRange: string;
  timeline: string;
  targetAudience: string;
  keyDeliverables: string[];
  techStackSample: string[];
  popular?: boolean;
}

export interface PricingCostDriver {
  factor: string;
  explanation: string;
  impact: "Sedang" | "Tinggi" | "Sangat Berpengaruh";
}

export interface ServicePricingData {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  shortDesc: string;
  startingPrice: string;
  educationalOverview: {
    whatIsThisService: string;
    whenDoYouNeedIt: string[];
    businessValue: string;
  };
  projects: ProjectImplementationPricing[];
  costDrivers: PricingCostDriver[];
  paymentMilestones: {
    stage: string;
    percentage: string;
    description: string;
  }[];
  includedGuarantees: string[];
  relatedServiceSlug: string;
  relatedProcessSlug: string;
  relatedFaqSlug: string;
  relatedPortfolioSlug: string;
}

export const servicesPricingData: Record<string, ServicePricingData> = {
  "api-management-system-integration": {
    id: "01",
    slug: "api-management-system-integration",
    title: "API Management & Integrasi Sistem",
    eyebrow: "Investasi Interkoneksi & Middleware Data",
    shortDesc: "Estimasi biaya rekayasa integrasi antar aplikasi, jembatan data legacy, payment gateway, dan perancangan API enterprise yang stabil tanpa menghentikan sistem yang sedang berjalan.",
    startingPrice: "Mulai dari Rp 6 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan integrasi sistem menghubungkan berbagai aplikasi yang sebelumnya terisolasi (silo data)—seperti ERP, CRM, portal web, aplikasi kasir (POS), dan layanan pihak ketiga (bank/payment gateway/ekspedisi)—melalui antarmuka API yang aman, standar, dan terdokumentasi rapi.",
      whenDoYouNeedIt: [
        "Ketika staf operasional Anda harus memasukkan data yang sama berulang kali di dua aplikasi berbeda secara manual.",
        "Ketika ingin menghubungkan sistem inventaris gudang dengan banyak marketplace dan toko online secara realtime.",
        "Ketika hendak mengintegrasikan gerbang pembayaran (Payment Gateway) dan verifikasi data identitas resmi (KYC).",
        "Ketika arsitektur sistem lama (legacy) tidak dapat diganti total tetapi harus bisa berkomunikasi dengan aplikasi mobile modern."
      ],
      businessValue: "Mengeliminasi hingga 95% kesalahan input manual (human-error), mempercepat sinkronisasi transaksi dari hitungan jam menjadi hitungan milidetik, serta membuka peluang pendapatan baru lewat ekosistem API terbuka."
    },
    projects: [
      {
        id: "api-gateway-standard",
        name: "Integrasi Payment Gateway & Logistik Ekspedisi",
        badge: "Paling Banyak Dipilih",
        description: "Penyambungan portal web atau aplikasi Anda dengan gateway pembayaran nasional (Midtrans/Xendit/Doku) dan kurir logistik (JNE/SiCepat/J&T) beserta webhook otomatis.",
        priceRange: "Rp 6.000.000 - Rp 14.000.000",
        timeline: "2 - 3 Minggu",
        targetAudience: "Toko Online, SaaS B2C, Platform Donasi, dan Agen Travel",
        keyDeliverables: [
          "Integrasi pembayaran VA, QRIS, Kartu Kredit, dan E-Wallet",
          "Webhook notifikasi status lunas realtime dan auto-update order",
          "Kalkulasi ongkos kirim otomatis multi-kurir",
          "Dashboard monitoring log transaksi dan audit trail kesalahan"
        ],
        techStackSample: ["Node.js", "Express", "REST API", "PostgreSQL", "Redis"],
        popular: true
      },
      {
        id: "api-custom-middleware",
        name: "Custom API Middleware & Data Adapter",
        badge: "Solusi Kustom",
        description: "Pembangunan lapisan middleware penengah untuk memformat ulang data antara basis data SQL/Oracle internal dengan RESTful atau GraphQL API modern.",
        priceRange: "Rp 16.000.000 - Rp 32.000.000",
        timeline: "3 - 5 Minggu",
        targetAudience: "Perusahaan Distribusi, Rumah Sakit, dan Lembaga Finansial",
        keyDeliverables: [
          "Arsitektur adapter non-invasif (tanpa merusak skema DB lama)",
          "Standarisasi JSON Schema dan validasi input ketat",
          "Dokumentasi interaktif OpenAPI / Swagger UI lengkap",
          "Rate limiting, autentikasi OAuth2 / API Key, dan enkripsi data transit"
        ],
        techStackSample: ["TypeScript", "NestJS", "FastAPI", "Swagger", "Docker"]
      },
      {
        id: "api-two-way-sync",
        name: "Sinkronisasi Dua Arah ERP & Core Database",
        badge: "Kompleksitas Menengah-Tinggi",
        description: "Jembatan sinkronisasi data dua arah antara software ERP (SAP, Odoo, Accurate) dengan aplikasi cabang, e-commerce, atau aplikasi mobile tenaga penjual.",
        priceRange: "Rp 28.000.000 - Rp 55.000.000",
        timeline: "5 - 8 Minggu",
        targetAudience: "Manufaktur, Distributor Multi-Cabang, dan Jaringan Ritel",
        keyDeliverables: [
          "Protokol rekonsiliasi data otomatis saat koneksi offline kembali terhubung",
          "Resolusi konflik data cerdas (Conflict Resolution Strategy)",
          "Queue background job dengan RabbitMQ untuk antrean transaksi padat",
          "Notifikasi error alert otomatis ke grup Telegram/Slack tim IT"
        ],
        techStackSample: ["Golang", "NestJS", "RabbitMQ", "Odoo API", "PostgreSQL"]
      },
      {
        id: "api-enterprise-event-driven",
        name: "Enterprise Event-Driven Integration (Kafka Architecture)",
        badge: "Skala Enterprise",
        description: "Perancangan backbone integrasi terpusat berbasis event-driven architecture untuk memproses jutaan event transaksi per hari dengan redundansi tinggi.",
        priceRange: "Mulai dari Rp 55.000.000",
        timeline: "8 - 12 Minggu",
        targetAudience: "Bank Digital, FinTech Skala Nasional, dan Platform Logistik Masif",
        keyDeliverables: [
          "Kluster Apache Kafka / Apache Pulsar dengan failover otomatis",
          "Skema tata kelola API Gateway Kong / KrakenD Enterprise",
          "Penerapan Distributed Tracing (OpenTelemetry & Jaeger)",
          "Garansi throughput tinggi, low-latency, dan zero data loss"
        ],
        techStackSample: ["Apache Kafka", "Kong Gateway", "Golang", "Kubernetes", "Prometheus"]
      }
    ],
    costDrivers: [
      {
        factor: "Kualitas & Kelengkapan Dokumentasi Sistem Eksisting",
        explanation: "Jika sistem lama tidak memiliki dokumentasi endpoint yang jelas, tim kami perlu melakukan reverse-engineering terhadap database dan lalu lintas paket data.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Volume Transaksi & Tingkat Konkurensi Detik (TPS)",
        explanation: "Sistem dengan jutaan request per detik membutuhkan mekanisme caching Redis bertingkat dan message broker agar database utama tidak tumbang.",
        impact: "Tinggi"
      },
      {
        factor: "Standar Kepatuhan Keamanan & Regulasi (OJK / PCI-DSS)",
        explanation: "Integrasi sistem keuangan mewajibkan enkripsi end-to-end (mTLS), HSM (Hardware Security Module), dan audit trail forensik yang ketat.",
        impact: "Tinggi"
      },
      {
        factor: "Jumlah Endpoint & Keragaman Format Protokol",
        explanation: "Menghubungkan protokol modern (JSON REST) dengan protokol lama (SOAP XML, FIX Protocol, ISO 8583) membutuhkan parsing khusus.",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff)", percentage: "30%", description: "Pembayaran awal saat penandatanganan kontrak, perancangan skema data, dan penyiapan sandbox API." },
      { stage: "Fase Uji Staging", percentage: "40%", description: "Dibayarkan saat semua endpoint terhubung dan lolos uji integrasi (integration testing) di server staging." },
      { stage: "Go-Live & Serah Terima", percentage: "30%", description: "Pelunasan setelah sistem berjalan di server produksi, dokumentasi diserahkan, dan masa pendampingan dimulai." }
    ],
    includedGuarantees: [
      "Garansi perbaikan bug integrasi selama 90 hari kalender setelah go-live",
      "Dokumentasi OpenAPI / Postman Collection lengkap yang dapat langsung diuji tim internal",
      "100% Hak kepemilikan source code middleware dan repositori Git resmi",
      "Perjanjian Kerahasiaan Data Klien (Non-Disclosure Agreement / NDA) bermaterai resmi"
    ],
    relatedServiceSlug: "api-management-system-integration",
    relatedProcessSlug: "api-management-system-integration",
    relatedFaqSlug: "api-management-system-integration",
    relatedPortfolioSlug: "api-management-system-integration"
  },

  "blockchain": {
    id: "02",
    slug: "blockchain",
    title: "Blockchain & Smart Contract Development",
    eyebrow: "Investasi Web3, Tokenomik & Kontrak Pintar",
    shortDesc: "Estimasi biaya pengembangan smart contract aman, desentralisasi data (dApp), integrasi Web3 wallet, hingga arsitektur private blockchain enterprise tanpa celah re-entrancy.",
    startingPrice: "Mulai dari Rp 15 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan rekayasa blockchain memungkinkan Anda membangun sistem pencatatan transaksi yang transparan, permanen (immutable), dan otomatis dijalankan oleh kode program (smart contract) tanpa perantara pihak ketiga yang mahal.",
      whenDoYouNeedIt: [
        "Ketika bisnis Anda membutuhkan audit trail transaksi yang mustahil dimanipulasi oleh pihak internal maupun eksternal.",
        "Ketika ingin menerbitkan token utilitas, sistem loyalitas berbasis Web3, atau hak cipta digital (NFT sertifikat/tiket).",
        "Ketika ingin membangun aplikasi keuangan terdesentralisasi (DeFi) atau sistem escrow pembayaran otomatis.",
        "Ketika konsorsium bisnis lintas perusahaan memerlukan basis data terdistribusi bersama tanpa server tunggal terpusat."
      ],
      businessValue: "Membangun kepercayaan tanpa batas (trustless transparency) dengan mitra bisnis, mengotomatisasi penyelesaian transaksi keuangan secara instan, serta mengamankan keaslian sertifikasi digital."
    },
    projects: [
      {
        id: "token-smart-contract",
        name: "Audit & Pembuatan Smart Contract Token Utilitas",
        badge: "Paling Cepat Diterapkan",
        description: "Pengembangan smart contract standar ERC-20 / BEP-20 / Polygon dengan mekanisme burning, minting, fee reflection, serta perlindungan serangan re-entrancy.",
        priceRange: "Rp 15.000.000 - Rp 25.000.000",
        timeline: "2 - 3 Minggu",
        targetAudience: "Startup Web3, Komunitas Kreatif, dan Program Loyalitas Poin",
        keyDeliverables: [
          "Source code Solidity bersih dengan standar OpenZeppelin terbaru",
          "Skrip deployment otomatis menggunakan Hardhat / Foundry",
          "Verifikasi kode sumber di Etherscan / BscScan / Polygonscan",
          "Laporan audit keamanan internal dan unit testing 100% code coverage"
        ],
        techStackSample: ["Solidity", "Hardhat", "Foundry", "OpenZeppelin", "Ethers.js"]
      },
      {
        id: "dapp-web3-integration",
        name: "Aplikasi Web3 Desentralisasi (dApp) & Wallet Portal",
        badge: "Paling Populer",
        description: "Portal antarmuka pengguna interaktif yang terhubung langsung ke blockchain EVM melalui dompet Web3 (MetaMask, Coinbase Wallet, WalletConnect).",
        priceRange: "Rp 30.000.000 - Rp 55.000.000",
        timeline: "4 - 6 Minggu",
        targetAudience: "Platform DeFi, Governance DAO, dan Portal Keanggotaan Eksklusif",
        keyDeliverables: [
          "Frontend modern Next.js yang terintegrasi Wagmi / Viem",
          "Penanganan transaksi Web3 (Estimasi gas fee, signature request, pending states)",
          "Subgraph indexing kustom dengan The Graph untuk query data kilat",
          "Dukungan multi-chain (Ethereum, BNB Chain, Polygon, Arbitrum)"
        ],
        techStackSample: ["Next.js", "Wagmi", "Viem", "The Graph", "Tailwind CSS"],
        popular: true
      },
      {
        id: "nft-marketplace-minting",
        name: "Platform Marketplace NFT & Engine Minting Kustom",
        badge: "Ekosistem Kreatif",
        description: "Sistem penerbitan tiket acara, sertifikat keaslian aset fisik, atau karya seni digital dengan smart contract ERC-721A / ERC-1155 hemat gas.",
        priceRange: "Rp 45.000.000 - Rp 85.000.000",
        timeline: "6 - 9 Minggu",
        targetAudience: "Penyelenggara Event, Galeri Seni, Brand Fashion, dan Sertifikasi Edukasi",
        keyDeliverables: [
          "Smart contract optimasi batch minting hemat gas (ERC-721A)",
          "Penyimpanan metadata terdesentralisasi permanen di IPFS / Arweave",
          "Fitur royalti kreator otomatis (EIP-2981)",
          "Gateway checkout fiat (pembayaran kartu/QRIS) yang dikonversi ke NFT"
        ],
        techStackSample: ["Solidity", "IPFS", "Pinata", "Next.js", "Thirdweb", "Stripe/Midtrans"]
      },
      {
        id: "enterprise-consortium-blockchain",
        name: "Private Enterprise Blockchain (Hyperledger Fabric)",
        badge: "Skala Enterprise",
        description: "Jaringan blockchain privat permissioned untuk rantai pasok (supply chain), rekam medis terenkripsi, atau konsorsium keuangan perbankan.",
        priceRange: "Mulai dari Rp 90.000.000",
        timeline: "10 - 16 Minggu",
        targetAudience: "Konsorsium Perbankan, BUMN Logistik, dan Ekosistem Kesehatan",
        keyDeliverables: [
          "Deployment multi-node organisasi (Orderer, Peer, CA Nodes)",
          "Smart contract bisnis (Chaincode) dalam Golang / Node.js",
          "Manajemen privasi data berbasis Channel dan Private Data Collections",
          "Dashboard pemantauan transaksi dan integrasi API REST ke sistem ERP internal"
        ],
        techStackSample: ["Hyperledger Fabric", "Docker", "Golang", "Kubernetes", "CouchDB"]
      }
    ],
    costDrivers: [
      {
        factor: "Kebutuhan Audit Keamanan Eksternal Pihak Ketiga",
        explanation: "Smart contract yang mengelola dana publik besar membutuhkan audit formal dari lembaga keamanan terakreditasi seperti CertiK atau Halborn.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Kompleksitas Logika Finansial & Gas Fee Optimization",
        explanation: "Optimasi kode assembly (Yul) agar biaya gas transaksi di jaringan Ethereum serendah mungkin membutuhkan waktu riset rekayasa mendalam.",
        impact: "Tinggi"
      },
      {
        factor: "Jenis Jaringan (Public EVM vs Private Permissioned)",
        explanation: "Jaringan privat seperti Hyperledger memerlukan orkestrasi node server mandiri, sertifikat otoritas digital, dan infrastruktur bare-metal.",
        impact: "Tinggi"
      },
      {
        factor: "Integrasi Pembayaran Fiat (On-Ramp / Off-Ramp)",
        explanation: "Menjembatani mata uang rupiah dengan ekosistem kripto memerlukan integrasi kepatuhan regulasi legal dan penyedia payment processor resmi.",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff)", percentage: "35%", description: "Penyusunan arsitektur tokenomik, model kontrak data, dan setup lingkungan pengujian lokal (Hardhat)." },
      { stage: "Fase Testnet Deployment", percentage: "35%", description: "Peluncuran smart contract di jaringan uji publik (Sepolia/Amoy), audit internal, dan uji koneksi dApp." },
      { stage: "Mainnet Go-Live", percentage: "30%", description: "Deploy ke jaringan utama (Mainnet), verifikasi kode di block explorer, dan serah terima kunci multi-sig admin." }
    ],
    includedGuarantees: [
      "Verifikasi kode sumber dan status publikasi resmi di block explorer",
      "Serah terima penuh private keys, wallet deployer, dan multi-signature governance",
      "Garansi teknis penanganan bug interaksi smart contract selama 90 hari",
      "Dokumentasi arsitektur Web3 dan tutorial pengoperasian admin"
    ],
    relatedServiceSlug: "blockchain",
    relatedProcessSlug: "blockchain",
    relatedFaqSlug: "blockchain",
    relatedPortfolioSlug: "blockchain"
  },

  "cloud-computing": {
    id: "03",
    slug: "cloud-computing",
    title: "Cloud Computing & DevOps Enterprise",
    eyebrow: "Investasi Infrastruktur, Skalabilitas & CI/CD",
    shortDesc: "Estimasi biaya perancangan infrastruktur cloud berperforma tinggi (AWS/GCP/Alibaba), orkestrasi Kubernetes, otomatisasi deployment, serta penghematan biaya bulanan (FinOps).",
    startingPrice: "Mulai dari Rp 8 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan cloud engineering memastikan aplikasi Anda berjalan di lingkungan server yang memiliki uptime 99.9%, tahan lonjakan pengunjung mendadak (auto-scaling), aman dari serangan siber (DDoS/hacker), serta dikelola dengan otomatisasi deployment modern.",
      whenDoYouNeedIt: [
        "Ketika server website Anda sering 'down' atau lambat saat ada promo flash sale atau kampanye iklan besar.",
        "Ketika tim developer Anda masih mengunggah kode secara manual via FTP yang rawan salah tindih file dan memakan waktu berjam-jam.",
        "Ketika tagihan bulanan cloud (AWS/GCP) membengkak tanpa tahu layanan mana yang menyedot biaya berlebihan.",
        "Ketika bisnis Anda wajib mematuhi regulasi penempatan data di wilayah Indonesia (data sovereignty)."
      ],
      businessValue: "Mengurangi risiko kerugian omset akibat website down, mempercepat rilis fitur baru dari mingguan menjadi harian lewat CI/CD, dan memangkas pemborosan tagihan server hingga 40%."
    },
    projects: [
      {
        id: "devops-cicd-setup",
        name: "Otomasi Pipeline CI/CD & Dockerisasi Aplikasi",
        badge: "Pondasi Developer",
        description: "Penyusunan alur kerja otomatisasi pengujian kode dan rilis produksi menggunakan GitHub Actions / GitLab CI sehingga kode aman langsung live dalam hitungan menit.",
        priceRange: "Rp 8.000.000 - Rp 16.000.000",
        timeline: "2 - 3 Minggu",
        targetAudience: "Tim Developer Startup, Software House, dan Portal Berita",
        keyDeliverables: [
          "Standardisasi container multi-stage Docker hemat memori",
          "Pipeline otomatis: Linting, Unit Testing, Security Scanning, dan Auto-Deploy",
          "Manajemen konfigurasi environment rahasia (Vault / GitHub Secrets)",
          "Mekanisme zero-downtime deployment (Rolling Update)"
        ],
        techStackSample: ["GitHub Actions", "Docker", "Linux Ubuntu", "Bash Script", "Nginx"]
      },
      {
        id: "cloud-migration-modernization",
        name: "Migrasi Server Konvensional ke Cloud Modern",
        badge: "Paling Populer",
        description: "Pemindahan database dan beban kerja aplikasi dari server shared-hosting atau VPS konvensional ke arsitektur cloud terkelola (AWS RDS, GCP Cloud Run, S3 Storage).",
        priceRange: "Rp 18.000.000 - Rp 35.000.000",
        timeline: "3 - 5 Minggu",
        targetAudience: "Perusahaan yang Sedang Berkembang, E-Commerce, dan Platform SaaS",
        keyDeliverables: [
          "Migrasi data tanpa downtime (Zero-Downtime Database Replication)",
          "Konfigurasi CDN Cloudflare dan perlindungan Web Application Firewall (WAF)",
          "Setup backup snapshot otomatis harian dan disaster recovery plan",
          "Dokumentasi topologi jaringan dan hak akses IAM bertingkat"
        ],
        techStackSample: ["AWS EC2/RDS/S3", "GCP Cloud Run", "Cloudflare", "PostgreSQL", "Terraform"],
        popular: true
      },
      {
        id: "kubernetes-cluster-ha",
        name: "Arsitektur Kubernetes Multi-Cluster & High Availability",
        badge: "Trafik Skala Besar",
        description: "Implementasi orkestrasi container production-grade dengan EKS / GKE yang mampu melakukan auto-scaling otomatis saat lonjakan jutaan pengguna.",
        priceRange: "Rp 35.000.000 - Rp 65.000.000",
        timeline: "5 - 8 Minggu",
        targetAudience: "FinTech, Aplikasi Super App, Perusahaan Ritel Nasional, dan BUMN",
        keyDeliverables: [
          "Konfigurasi Horizontal Pod Autoscaler (HPA) dan Cluster Autoscaler",
          "Ingress Controller dengan SSL otomatis dan Load Balancing multi-zone",
          "Service Mesh (Istio / Linkerd) untuk enkripsi mTLS antar microservices",
          "Pipeline GitOps menggunakan ArgoCD untuk deployment deklaratif"
        ],
        techStackSample: ["Kubernetes", "AWS EKS", "GCP GKE", "Helm", "ArgoCD", "Istio"]
      },
      {
        id: "cloud-finops-devsecops-audit",
        name: "Audit Keamanan DevSecOps & Optimasi Biaya (FinOps)",
        badge: "Efisiensi Biaya",
        description: "Pemeriksaan mendalam celah kerentanan server, pengetatan hak akses IAM, dan optimalisasi arsitektur untuk memangkas pengeluaran bulanan cloud secara permanen.",
        priceRange: "Rp 20.000.000 - Rp 45.000.000",
        timeline: "3 - 4 Minggu",
        targetAudience: "Perusahaan dengan tagihan cloud di atas Rp 20 juta/bulan",
        keyDeliverables: [
          "Laporan audit keamanan berdasarkan standar CIS Benchmark",
          "Rekomendasi hak instans hemat biaya (Spot Instances & Savings Plans)",
          "Penutupan port terbuka dan penguatan firewall privat (VPC Peering)",
          "Dashboard pemantauan metrik Prometheus & Grafana realtime"
        ],
        techStackSample: ["Trivy", "SonarQube", "Prometheus", "Grafana", "AWS Cost Explorer"]
      }
    ],
    costDrivers: [
      {
        factor: "Jumlah Server & Volume Data yang Dimigrasikan",
        explanation: "Database berukuran ratusan gigabyte membutuhkan replikasi bertahap untuk memastikan tidak ada transaksi yang hilang selama proses cutover.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Target Service Level Agreement (SLA Uptime 99.99%)",
        explanation: "Penyediaan arsitektur redundan multi-region yang otomatis berpindah saat salah satu data center padam memerlukan konfigurasi load balancer kompleks.",
        impact: "Tinggi"
      },
      {
        factor: "Tingkat Kepatuhan Keamanan & Audit ISO 27001 / SOC 2",
        explanation: "Regulasi enterprise mewajibkan logging audit 1 tahun penuh, enkripsi data at-rest & in-transit, serta isolasi jaringan VPC privat.",
        impact: "Tinggi"
      },
      {
        factor: "Kompleksitas Lingkungan Microservices Eksisting",
        explanation: "Aplikasi monolitik yang dipecah menjadi puluhan container microservices membutuhkan konfigurasi jaringan dan secret management khusus.",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff)", percentage: "30%", description: "Audit awal, penyusunan diagram arsitektur cloud, dan pembuatan akun Infrastructure as Code (Terraform)." },
      { stage: "Penyelesaian Staging & Uji Beban", percentage: "40%", description: "Server pengujian selesai dibangun, pipeline CI/CD beroperasi, dan lolos uji stres beban trafik." },
      { stage: "Cutover Produksi & Serah Terima", percentage: "30%", description: "Peralihan domain live ke infrastruktur baru tanpa downtime, serta serah terima kredensial root." }
    ],
    includedGuarantees: [
      "Garansi pendampingan operasional dan penyesuaian infrastruktur selama 60 hari",
      "Seluruh kode konfigurasi server diserahkan dalam repositori Terraform / Ansible (IaC)",
      "Dokumentasi Prosedur Pemulihan Bencana (Disaster Recovery Runbook) teruji",
      "Hak kepemilikan akun cloud 100% langsung terdaftar atas nama perusahaan Anda"
    ],
    relatedServiceSlug: "cloud-computing",
    relatedProcessSlug: "cloud-computing",
    relatedFaqSlug: "cloud-computing",
    relatedPortfolioSlug: "cloud-computing"
  },

  "creative-content-digital-media": {
    id: "04",
    slug: "creative-content-digital-media",
    title: "Konten Kreatif & Media Digital Interaktif",
    eyebrow: "Investasi Identitas Brand, UI/UX & Aset Media",
    shortDesc: "Estimasi biaya perancangan identitas visual brand, UI/UX design system kelas dunia, video motion graphics 3D, dan strategi konten digital terintegrasi yang meningkatkan konversi.",
    startingPrice: "Mulai dari Rp 5 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan media kreatif menggabungkan seni visual berstandar tinggi dengan psikologi pemasaran digital untuk membangun persepsi brand yang premium, dipercaya konsumen, dan tampil konsisten di semua saluran digital.",
      whenDoYouNeedIt: [
        "Ketika produk teknologi Anda hebat tetapi tampilan visual dan websitenya terlihat usang atau kurang meyakinkan.",
        "Ketika tim developer membutuhkan panduan desain sistem (Figma Design System) yang terstruktur dan siap dikoding.",
        "Ketika ingin meluncurkan produk baru dan membutuhkan video animasi penjelasan fitur (Explainer Video) yang memukau.",
        "Ketika identitas visual lama tidak lagi mencerminkan skala dan kredibilitas perusahaan Anda saat ini."
      ],
      businessValue: "Meningkatkan retensi dan konversi pengunjung hingga 300%, membangun ekuitas merek (brand equity) yang bernilai tinggi, serta mempercepat proses koding tim frontend lewat desain sistem yang rapi."
    },
    projects: [
      {
        id: "brand-identity-guideline",
        name: "Identitas Brand & Brand Guidelines Lengkap",
        badge: "Pondasi Merek",
        description: "Perancangan logo perusahaan berkonsep filosofis mendalam, tipografi resmi, palet warna berlisensi, kartu nama, kop surat, hingga buku panduan brand (Brandbook).",
        priceRange: "Rp 5.000.000 - Rp 12.000.000",
        timeline: "2 - 3 Minggu",
        targetAudience: "Bisnis Baru, Rebranding Perusahaan, dan Startup Tahap Awal",
        keyDeliverables: [
          "Desain Logo primer, sekunder, dan monogram dalam format vektor master (AI, SVG, PNG)",
          "Buku Panduan Identitas Visual (Brand Style Guide 40+ Halaman)",
          "Mockup implementasi kop surat, amplop, ID card, dan template presentasi pitch deck",
          "Hak cipta penuh kepemilikan aset grafis komersial"
        ],
        techStackSample: ["Adobe Illustrator", "Figma", "Photoshop", "InDesign"]
      },
      {
        id: "uiux-design-system",
        name: "UI/UX Design System & Prototipe Interaktif (Figma)",
        badge: "Paling Populer",
        description: "Riset pengalaman pengguna (UX Wireframing), perancangan antarmuka pengguna modern (UI Design), token komponen interaktif, dan prototipe klik siap uji.",
        priceRange: "Rp 14.000.000 - Rp 28.000.000",
        timeline: "3 - 5 Minggu",
        targetAudience: "Aplikasi Mobile, Platform Web SaaS, dan Portal Dashboard Enterprise",
        keyDeliverables: [
          "Atomic Design System (Typography, Color Styles, Auto-Layout Components)",
          "Alur pengguna (User Flow) dan wireframe arsitektur informasi",
          "Desain high-fidelity untuk mode terang & gelap (Light/Dark Mode)",
          "Prototipe interaktif untuk pengujian kegunaan (Usability Testing)"
        ],
        techStackSample: ["Figma", "FigJam", "Maze Testing", "Lottie"],
        popular: true
      },
      {
        id: "motion-graphics-3d-explainer",
        name: "Video Eksplainer 3D & Motion Graphics Produk",
        badge: "Daya Tarik Tinggi",
        description: "Produksi video animasi promosi berdurasi 60-90 detik yang menjelaskan cara kerja produk digital Anda secara futuristik, visual sinematik, dan sound design profesional.",
        priceRange: "Rp 10.000.000 - Rp 22.000.000",
        timeline: "3 - 4 Minggu",
        targetAudience: "Peluncuran Produk Baru, Iklan YouTube/TikTok, dan Video Profil Perusahaan",
        keyDeliverables: [
          "Naskah skenario narasi dan storyboard adegan visual",
          "Voice-over profesional bahasa Indonesia atau Inggris berlisensi komersial",
          "Animasi motion graphics 2D/3D dengan render resolusi 4K UHD",
          "Aset potongan video vertikal (Reels/Shorts) untuk media sosial"
        ],
        techStackSample: ["Adobe After Effects", "Blender 3D", "Cinema 4D", "Premiere Pro"]
      },
      {
        id: "full-integrated-media-campaign",
        name: "Paket Terpadu Media Digital & Kampanye Visual",
        badge: "Solusi Menyeluruh",
        description: "Paket lengkap yang mencakup perancangan identitas brand, desain UI/UX landing page, aset media sosial terstandar, dan video peluncuran produk secara serentak.",
        priceRange: "Mulai dari Rp 25.000.000",
        timeline: "6 - 8 Minggu",
        targetAudience: "Perusahaan yang Melakukan Transformasi Digital Total atau Peluncuran Brand Baru",
        keyDeliverables: [
          "Seluruh aset Brand Identity & Design System lengkap",
          "Desain 15+ template media sosial feeds, story, dan banner periklanan",
          "2 Video promosi produk (versi horizontal & vertikal)",
          "Aset grafis website siap potong (SVG, WebP) yang dioptimasi untuk web"
        ],
        techStackSample: ["Figma", "Adobe CC", "Blender", "After Effects", "Spline 3D"]
      }
    ],
    costDrivers: [
      {
        factor: "Jumlah Halaman & Kompleksitas User Flow UI/UX",
        explanation: "Dashboard aplikasi dengan puluhan skenario validasi data dan peran otorisasi membutuhkan waktu perancangan wireframe yang lebih panjang.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Tingkat Kompleksitas Model Animasi (2D vs 3D Render)",
        explanation: "Pembuatan model 3D custom, texturing, dan proses rendering membutuhkan spesifikasi teknis dan jam kerja studio yang lebih intensif dibanding 2D vektor.",
        impact: "Tinggi"
      },
      {
        factor: "Lisensi Musik Komersial & Pengisi Suara (Voice Actor)",
        explanation: "Penggunaan voice talent selebritas internasional atau musik berlisensi broadcast komersial penuh memengaruhi besaran biaya produksi.",
        impact: "Sedang"
      },
      {
        factor: "Jumlah Revisi Desain Terjadwal",
        explanation: "Kami menyediakan 3 putaran revisi besar di setiap fase, revisi di luar cakupan disesuaikan dengan sistem addendum terencana.",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff)", percentage: "40%", description: "Riset awal konsep visual, moodboard inspirasi, dan perancangan sketsa wireframe/storyboard." },
      { stage: "Persetujuan Konsep Visual", percentage: "30%", description: "Penyelesaian desain utama (High-Fidelity) dan pengujian prototipe interaktif awal." },
      { stage: "Penyelesaian & Serah Terima File", percentage: "30%", description: "Penyerahan seluruh berkas mentah master (Figma, AI, AEP) dan panduan penggunaan hak cipta." }
    ],
    includedGuarantees: [
      "100% Hak kepemilikan komersial atas seluruh aset visual yang dihasilkan",
      "Seluruh berkas mentah master (Figma editable file, AI, EPS, SVG) diserahkan lengkap",
      "Garansi penyesuaian minor selama 30 hari kalender setelah serah terima",
      "Kepatuhan lisensi font dan elemen grafis legal tanpa risiko hak cipta"
    ],
    relatedServiceSlug: "creative-content-digital-media",
    relatedProcessSlug: "creative-content-digital-media",
    relatedFaqSlug: "creative-content-digital-media",
    relatedPortfolioSlug: "creative-content-digital-media"
  },

  "data-science": {
    id: "05",
    slug: "data-science",
    title: "Data Science & Business Intelligence",
    eyebrow: "Investasi Data Warehouse, BI Dashboard & Prediktif",
    shortDesc: "Estimasi biaya pembersihan data perusahaan, perancangan pipeline data warehouse (ETL), dashboard analytics eksekutif, dan algoritma prediktif untuk keputusan bisnis akurat.",
    startingPrice: "Mulai dari Rp 12 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan data science mengubah timbunan data mentah operasional Anda yang berserakan di spreadsheet menjadi satu sumber kebenaran (Single Source of Truth) yang rapi, divisualisasikan dalam dashboard interaktif, serta diprediksi trennya menggunakan algoritma statistik modern.",
      whenDoYouNeedIt: [
        "Ketika para direksi membutuhkan waktu berhari-hari hanya untuk menarik laporan penjualan bulanan dari cabang-cabang.",
        "Ketika data penjualan, keuangan, dan inventaris tersimpan di file Excel terpisah yang sering selisih dan tidak akurat.",
        "Ketika ingin mengetahui perilaku pelanggan yang berpotensi berhenti berlangganan (Customer Churn Prediction) sebelum terlambat.",
        "Ketika ingin mengoptimalkan stok barang di gudang berdasarkan pola permintaan historis dan musiman."
      ],
      businessValue: "Menghilangkan spekulasi dalam mengambil keputusan strategis, menghemat ratusan jam kerja rekap laporan manual, dan menemukan peluang kenaikan laba tersembunyi dari pola data historis."
    },
    projects: [
      {
        id: "bi-executive-dashboard",
        name: "Dashboard Business Intelligence Eksekutif (PowerBI / Metabase)",
        badge: "Paling Cepat Diterapkan",
        description: "Visualisasi metrik KPI bisnis penting, tren penjualan, dan efisiensi biaya secara interaktif dengan filter multi-cabang yang dapat diakses langsung oleh direksi.",
        priceRange: "Rp 12.000.000 - Rp 25.000.000",
        timeline: "2 - 4 Minggu",
        targetAudience: "UKM Menengah, Ritel Multi-Outlet, dan Manajemen Penjualan",
        keyDeliverables: [
          "Integrasi koneksi data langsung ke database PostgreSQL/MySQL",
          "5-8 Tampilan dashboard KPI (Pendapatan, Produk Terlaris, Margin Laba, Retensi)",
          "Fitur filter interaktif berdasarkan periode, lokasi cabang, dan kategori produk",
          "Pengaturan jadwal ekspor laporan otomatis harian ke email manajemen"
        ],
        techStackSample: ["Metabase", "PowerBI", "PostgreSQL", "Python", "SQL"]
      },
      {
        id: "data-warehouse-etl-pipeline",
        name: "Arsitektur Data Warehouse & Otomasi Pipeline ETL",
        badge: "Paling Populer",
        description: "Pembangunan gudang data terpusat yang otomatis mengumpulkan, membersihkan, dan menstandarisasi data dari berbagai sumber aplikasi setiap malam.",
        priceRange: "Rp 18.000.000 - Rp 35.000.000",
        timeline: "4 - 6 Minggu",
        targetAudience: "Perusahaan dengan Lebih dari 2 Sistem Aplikasi Operasional",
        keyDeliverables: [
          "Pipeline ETL otomatis menggunakan Apache Airflow / dbt",
          "Pemodelan skema data bintang (Star Schema) yang dioptimasi untuk query cepat",
          "Pembersihan otomatis data duplikat, anomali angka, dan format tanggal",
          "Dokumentasi kamus data (Data Dictionary) lengkap untuk tim analis internal"
        ],
        techStackSample: ["Python", "dbt", "Apache Airflow", "PostgreSQL/ClickHouse", "Docker"],
        popular: true
      },
      {
        id: "predictive-analytics-churn",
        name: "Model Prediksi Churn Pelanggan & Analisis Segmentasi",
        badge: "Analisis Lanjutan",
        description: "Pengelompokan pelanggan (RFM Clustering) dan model machine learning prediktif untuk mendeteksi pelanggan yang berisiko pergi beserta rekomendasi tindakan penyelamatan.",
        priceRange: "Rp 25.000.000 - Rp 50.000.000",
        timeline: "5 - 8 Minggu",
        targetAudience: "Bisnis Langganan (SaaS), FinTech, E-Commerce, dan Layanan Telekomunikasi",
        keyDeliverables: [
          "Model klasifikasi prediktif dengan tingkat akurasi terukur (AUC-ROC > 85%)",
          "Skor risiko churn harian per akun pelanggan yang otomatis diperbarui",
          "Analisis faktor dominan penyebab pelanggan berhenti bertransaksi",
          "API endpoint untuk mengirimkan alert otomatis ke tim Customer Success"
        ],
        techStackSample: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "FastAPI"]
      },
      {
        id: "big-data-realtime-analytics",
        name: "Platform Big Data & Real-Time Stream Analytics",
        badge: "Skala Enterprise",
        description: "Pengolahan miliaran baris data transaksi secara realtime untuk pendeteksian anomali transaksi atau penyesuaian harga dinamis dalam hitungan detik.",
        priceRange: "Mulai dari Rp 60.000.000",
        timeline: "8 - 14 Minggu",
        targetAudience: "Perusahaan Logistik Skala Nasional, Marketplace Besar, dan Institusi Finansial",
        keyDeliverables: [
          "Arsitektur penyimpanan Big Data (ClickHouse / Snowflake / BigQuery)",
          "Komputasi streaming realtime menggunakan Apache Spark Streaming",
          "Dashboard pemantauan pergerakan data tanpa jeda (Sub-second latency)",
          "Pengujian stabilitas penyerapan data saat puncak transaksi tinggi"
        ],
        techStackSample: ["ClickHouse", "Apache Spark", "Kafka", "Python", "Grafana"]
      }
    ],
    costDrivers: [
      {
        factor: "Kualitas & Tingkat Kebersihan Data Mentah (Data Hygiene)",
        explanation: "Jika data masih tersebar di ratusan file Excel yang rusak atau berantakan, proses validasi dan pembersihan data memerlukan porsi waktu terbanyak.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Jumlah Sumber Data Terpisah (Data Silos)",
        explanation: "Menghubungkan data dari 5 sistem berbeda (misal: CRM, ERP, Google Analytics, Bank, dan Kasir) membutuhkan pembuatan adapter integrasi terpisah.",
        impact: "Tinggi"
      },
      {
        factor: "Kebutuhan Pemrosesan Realtime vs Batch Harian",
        explanation: "Pemrosesan data yang harus selesai dalam milidetik membutuhkan infrastruktur in-memory dan streaming broker yang lebih kompleks dibanding batch harian.",
        impact: "Tinggi"
      },
      {
        factor: "Tingkat Kompleksitas Model Matematika / Algoritma",
        explanation: "Algoritma statistik standar (regresi) membutuhkan waktu riset lebih singkat dibanding deep learning atau model prediksi stok multi-variabel.",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff)", percentage: "30%", description: "Audit data mentah, validasi akses database, dan perancangan skema arsitektur data warehouse." },
      { stage: "Fase Validasi Pipeline ETL", percentage: "40%", description: "Pipeline data berhasil mengalirkan data bersih ke gudang data dan lolos audit keakuratan data." },
      { stage: "Deployment Dashboard & Serah Terima", percentage: "30%", description: "Dashboard dapat diakses manajemen, pelatihan operasional staf, dan serah terima source code kueri." }
    ],
    includedGuarantees: [
      "Jaminan akurasi kueri dan konsistensi data 100% selaras dengan data sumber transaksi",
      "Seluruh skrip SQL, pipeline Python, dan model machine learning diserahkan utuh",
      "Pendampingan operasional dan sesi pelatihan (training) staf analis selama 60 hari",
      "Perjanjian kerahasiaan data (NDA) dengan klausul proteksi keamanan data konsumen"
    ],
    relatedServiceSlug: "data-science",
    relatedProcessSlug: "data-science",
    relatedFaqSlug: "data-science",
    relatedPortfolioSlug: "data-science"
  },

  "game-development": {
    id: "06",
    slug: "game-development",
    title: "Game Development & Interaktif",
    eyebrow: "Investasi Gamifikasi, Game 2D/3D & Simulasi",
    shortDesc: "Estimasi biaya pembuatan game promosi brand (HTML5), game mobile 2D/3D interaktif, simulasi pelatihan korporat, hingga game edukasi berbasis Unity & Unreal Engine.",
    startingPrice: "Mulai dari Rp 12 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan game development merancang pengalaman bermain interaktif yang menyenangkan untuk tujuan hiburan komersial, kampanye gamifikasi pemasaran (marketing engagement), maupun simulasi pelatihan kerja korporat dengan tingkat retensi pengguna yang sangat tinggi.",
      whenDoYouNeedIt: [
        "Ketika kampanye iklan promosi biasa mulai diabaikan konsumen dan Anda membutuhkan game mini web interaktif berhadiah voucher.",
        "Ketika perusahaan Anda membutuhkan simulator pelatihan SOP kerja yang aman tanpa risiko kecelakaan di lapangan nyata.",
        "Ketika lembaga edukasi membutuhkan media pembelajaran berbasis game yang membuat siswa betah belajar berjam-jam.",
        "Ketika studio Anda memiliki konsep game orisinal dan membutuhkan tim pengembang profesional untuk merealisasikannya ke toko aplikasi."
      ],
      businessValue: "Meningkatkan engagement pengguna hingga 10x lipat dibanding konten statis, meningkatkan waktu tinggal (dwell time) di website/aplikasi Anda, serta menciptakan saluran monetisasi baru lewat in-app purchase atau iklan."
    },
    projects: [
      {
        id: "game-html5-gamification",
        name: "Game Web HTML5 Gamifikasi Pemasaran Brand",
        badge: "Paling Cepat Rilis",
        description: "Game mini berbasis web yang ringan, dapat dimainkan langsung di browser smartphone tanpa perlu unduh aplikasi, dilengkapi sistem skor dan hadiah voucher.",
        priceRange: "Rp 12.000.000 - Rp 25.000.000",
        timeline: "2 - 4 Minggu",
        targetAudience: "Brand Ritel, Kampanye Event, Bank, dan Restoran Cepat Saji",
        keyDeliverables: [
          "Game mekanik adiktif (Spin Wheel, Endless Runner, Trivia Kuis, atau Catch Game)",
          "Kustomisasi aset karakter dan grafis sesuai tema brand Anda",
          "Sistem leaderboard skor tertinggi dan penukaran kupon promo",
          "Panel admin untuk melihat data kontak leads pemain (nama, WA, email)"
        ],
        techStackSample: ["Phaser.js", "Pixi.js", "TypeScript", "Node.js", "PostgreSQL"],
        popular: true
      },
      {
        id: "game-2d-mobile-pc",
        name: "Game 2D Mobile / PC (Casual, Puzzle, RPG)",
        badge: "Game Komersial",
        description: "Pengembangan game 2D penuh dengan narasi, level berjenjang, efek suara orisinal, serta integrasi sistem monetisasi (Iklan AdMob & Pembayaran In-App Purchase).",
        priceRange: "Rp 28.000.000 - Rp 60.000.000",
        timeline: "6 - 10 Minggu",
        targetAudience: "Penerbit Game Independen, Komunitas Kreatif, dan Lembaga Edukasi",
        keyDeliverables: [
          "Mekanik gameplay responsif dan 30+ tingkatan level permainan",
          "Animasi sprite 2D halus dan sistem partikel visual memukau",
          "Penyimpanan progress cloud (Google Play Games & Apple Game Center)",
          "Bantuan publikasi hingga lolos kurasi Google Play Store dan Apple App Store"
        ],
        techStackSample: ["Unity 2D", "C#", "Spine 2D", "FMOD", "AdMob"]
      },
      {
        id: "game-3d-simulation-training",
        name: "Simulator Pelatihan Kerja 3D Interaktif Korporat",
        badge: "Solusi B2B / Industri",
        description: "Simulasi interaktif 3D realistis untuk melatih teknisi, tenaga medis, atau operator mesin berat dalam menjalankan standar operasional prosedur (SOP).",
        priceRange: "Rp 60.000.000 - Rp 120.000.000",
        timeline: "8 - 14 Minggu",
        targetAudience: "Perusahaan Tambang, Pabrik Manufaktur, Rumah Sakit, dan Maskapai",
        keyDeliverables: [
          "Model 3D presisi alat kerja atau ruangan kerja sesuai cetak biru nyata",
          "Skenario simulasi kegagalan dan penanganan kondisi darurat tanpa risiko nyata",
          "Sistem penilaian skor kepatuhan SOP otomatis per karyawan",
          "Dapat dijalankan di komputer standar maupun perangkat Virtual Reality (VR)"
        ],
        techStackSample: ["Unity 3D", "Unreal Engine", "Blender", "C# / C++", "WebGL"]
      },
      {
        id: "game-multiplayer-online",
        name: "Game Multiplayer Online & Komunitas Virtual",
        badge: "Skala Kompleks",
        description: "Game real-time multi-pemain dengan server berkecepatan tinggi, sistem matchmaking pemain, obrolan realtime, dan toko item kosmetik digital.",
        priceRange: "Mulai dari Rp 120.000.000",
        timeline: "14 - 24 Minggu",
        targetAudience: "Perusahaan Game Komersial dan Ekosistem Metaverse",
        keyDeliverables: [
          "Arsitektur server multiplayer berlatensi rendah (Authoritative Server)",
          "Sistem anti-cheat dan proteksi integritas data pemain",
          "Sistem pertemanan (Friends List, Guild, Clan, dan Chat Server)",
          "Dashboard pemantauan beban server dan manajemen event musiman"
        ],
        techStackSample: ["Unreal Engine", "Photon / Mirror", "Golang", "Redis", "AWS Gamelift"]
      }
    ],
    costDrivers: [
      {
        factor: "Dimensi Visual & Jumlah Aset Grafis (2D Vektor vs 3D Hi-Poly)",
        explanation: "Game 3D membutuhkan pemodelan aset dari nol, texturing, rigging animasi tulang, dan tata cahaya fisik yang memakan waktu riset studio lebih besar.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Fitur Jaringan (Single Player vs Real-Time Multiplayer)",
        explanation: "Game online membutuhkan arsitektur server khusus, sinkronisasi posisi fisika antar pemain, dan penanganan latency jaringan yang rumit.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Jumlah Level & Kedalaman Mekanik Gameplay",
        explanation: "Semakin banyak level dan variasi musuh/rintangan, semakin besar kebutuhan balancing angka permainan (game balancing math).",
        impact: "Tinggi"
      },
      {
        factor: "Dukungan Multi-Platform (Web, Android, iOS, Windows)",
        explanation: "Pengujian di puluhan spesifikasi chipset smartphone yang berbeda untuk memastikan frame rate stabil 60 FPS tanpa overheat.",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff & GDD)", percentage: "30%", description: "Penyusunan Game Design Document (GDD), sketsa konsep visual, dan prototipe mekanik dasar (Greyboxing)." },
      { stage: "Fase Alpha (Gameplay Ready)", percentage: "40%", description: "Seluruh mekanik game dapat dimainkan dengan aset visual lengkap untuk pengujian bug internal." },
      { stage: "Fase Beta & Rilis Toko Aplikasi", percentage: "30%", description: "Penyempurnaan performa, integrasi monetisasi, dan serah terima source code build final." }
    ],
    includedGuarantees: [
      "100% Hak cipta intelektual (IP), nama merek, dan source code proyek menjadi milik Anda",
      "Bantuan teknis proses submit ke Google Play Store / Apple App Store sampai disetujui",
      "Garansi perbaikan bug teknis selama 90 hari setelah tanggal rilis",
      "Seluruh aset grafis master, 3D file, dan berkas audio orisinal diserahkan utuh"
    ],
    relatedServiceSlug: "game-development",
    relatedProcessSlug: "game-development",
    relatedFaqSlug: "game-development",
    relatedPortfolioSlug: "game-development"
  },

  "internet-of-things": {
    id: "07",
    slug: "internet-of-things",
    title: "Internet of Things & Smart Hardware",
    eyebrow: "Investasi Sensor, Telemetri & Otomasi Perangkat",
    shortDesc: "Estimasi biaya rekayasa perangkat keras cerdas, sensor telemetri jarak jauh (LoRaWAN/MQTT), otomasi pabrik, smart farming, hingga dashboard kontrol perangkat real-time.",
    startingPrice: "Mulai dari Rp 12 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan IoT menghubungkan benda fisik di dunia nyata—seperti mesin pabrik, lahan pertanian, pompa air, atau armada kendaraan—ke internet sehingga kondisinya dapat dipantau dan dikendalikan secara otomatis dari jarak jauh lewat smartphone Anda.",
      whenDoYouNeedIt: [
        "Ketika Anda masih harus mengirimkan staf secara fisik hanya untuk mencatat meteran air, suhu gudang beku, atau tekanan tangki minyak.",
        "Ketika mesin pabrik sering rusak mendadak tanpa ada peringatan awal (Predictive Maintenance).",
        "Ketika Anda ingin mengotomasi penyiraman dan pemupukan lahan pertanian berdasarkan sensor kelembapan tanah aktual.",
        "Ketika perusahaan Anda membutuhkan pelacakan posisi dan konsumsi bahan bakar armada kendaraan secara realtime."
      ],
      businessValue: "Mencegah kerugian fatal akibat kerusakan mesin produksi, menghemat biaya tenaga kerja pencatat manual hingga 80%, serta memberikan data akurat dari lapangan tanpa jeda waktu."
    },
    projects: [
      {
        id: "iot-prototype-sensor",
        name: "Prototipe Alat Sensor Pintar & Firmware Mikrokontroler",
        badge: "Riset Cepat (Proof of Concept)",
        description: "Perancangan rangkaian elektronik, pemilihan modul sensor industri, dan penulisan program firmware mikrokontroler (ESP32/STM32) yang stabil dan hemat daya.",
        priceRange: "Rp 12.000.000 - Rp 22.000.000",
        timeline: "3 - 5 Minggu",
        targetAudience: "Peneliti, Inovator Startup Hardware, dan Eksperimen Digitalisasi UKM",
        keyDeliverables: [
          "Skematik jalur elektronik dan desain papan sirkuit cetak (PCB Gerber File)",
          "1-2 Unit prototipe perangkat keras fungsional yang telah diuji laboratorium",
          "Program firmware mikrokontroler dengan koneksi WiFi / 4G LTE / LoRa",
          "Dokumentasi kalibrasi sensor dan diagram pengkabelan instalasi"
        ],
        techStackSample: ["C/C++", "ESP32", "FreeRTOS", "MQTT", "KiCAD"]
      },
      {
        id: "iot-telemetry-monitoring",
        name: "Sistem Pemantauan Lingkungan & Telemetri Realtime",
        badge: "Paling Populer",
        description: "Solusi lengkap pemantauan suhu, kelembapan, kualitas udara, atau level tangki jarak jauh dilengkapi dashboard web dan notifikasi alert otomatis via WhatsApp.",
        priceRange: "Rp 22.000.000 - Rp 45.000.000",
        timeline: "4 - 7 Minggu",
        targetAudience: "Gudang Cold Storage, Rumah Sakit, Laboratorium, dan Gedung Perkantoran",
        keyDeliverables: [
          "Integrasi sensor industri berakurasi tinggi (standar IP65 tahan air & debu)",
          "Dashboard monitoring web interaktif dengan grafik pergerakan data waktu nyata",
          "Sistem alert otomatis via WhatsApp dan email jika angka melewati batas aman",
          "Penyimpanan riwayat data telemetri historis selama 1 tahun penuh"
        ],
        techStackSample: ["Node.js", "MQTT Broker (EMQX)", "InfluxDB", "Grafana", "ESP32"],
        popular: true
      },
      {
        id: "iot-smart-agriculture-industry",
        name: "Sistem Otomasi Industri & Smart Farming Terkendali",
        badge: "Otomasi Skala Menengah",
        description: "Sistem kendali aktuator otomatis (katup solenoid, pompa, motor listrik) yang bekerja berdasarkan aturan sensor tanpa perlu intervensi manusia.",
        priceRange: "Rp 45.000.000 - Rp 85.000.000",
        timeline: "6 - 10 Minggu",
        targetAudience: "Greenhouse Hidroponik, Tambak Udang Modern, dan Pabrik Manufaktur",
        keyDeliverables: [
          "Panel kontrol kelistrikan industri dengan proteksi lonjakan arus (Surge Arrester)",
          "Logika otomasi lokal (alat tetap jalan otomatis meskipun koneksi internet terputus)",
          "Aplikasi kontrol manual via Android dan portal web",
          "Pencatatan efisiensi penggunaan air, listrik, dan nutrisi secara terperinci"
        ],
        techStackSample: ["STM32 / ESP32", "Modbus RS485", "React Native", "PostgreSQL", "ThingsBoard"]
      },
      {
        id: "iot-fleet-tracking-scada",
        name: "Platform Pelacakan Armada Kendaraan & SCADA Gateway",
        badge: "Skala Enterprise",
        description: "Pusat komando pemantauan ratusan armada kendaraan atau mesin berat terintegrasi GPS, sensor bahan bakar, dan pembacaan parameter CAN-Bus mesin.",
        priceRange: "Mulai dari Rp 80.000.000",
        timeline: "10 - 16 Minggu",
        targetAudience: "Perusahaan Ekspedisi Logistik, Tambang Batubara, dan Operator Transportasi",
        keyDeliverables: [
          "Gateway hardware pembaca CAN-Bus / OBD-II kendaraan",
          "Peta pelacakan geolokasi realtime dan fitur batasan wilayah (Geofencing)",
          "Deteksi perilaku pengemudi (kecepatan berlebih, pengereman mendadak, idle mesin)",
          "Integrasi API otomatis ke software manajemen logistik utama perusahaan"
        ],
        techStackSample: ["Golang", "Kafka", "TimescaleDB", "Leaflet/Mapbox", "Docker"]
      }
    ],
    costDrivers: [
      {
        factor: "Lingkungan Operasional Lapangan (Tahan Air, Panas Ekstrem, Korosif)",
        explanation: "Alat yang diletakkan di tambang terbuka atau tambak air asin membutuhkan casing enclosure khusus bersertifikasi IP67/IP68 dan sensor anti-karat.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Pilihan Protokol Komunikasi Jaringan (WiFi vs 4G vs LoRaWAN)",
        explanation: "Lokasi terpencil tanpa sinyal seluler membutuhkan pembangunan menara gateway LoRaWAN privat agar data sensor tetap dapat terkirim.",
        impact: "Tinggi"
      },
      {
        factor: "Sumber Daya Kelistrikan (Listrik PLN vs Panel Surya + Baterai LiFePO4)",
        explanation: "Sistem tenaga surya mandiri membutuhkan kalkulasi kapasitas panel solar cell dan manajemen daya firmware ultra-low sleep mode.",
        impact: "Tinggi"
      },
      {
        factor: "Jumlah Unit Perangkat yang Diproduksi & Dikalibrasi",
        explanation: "Pengadaan komponen massal (BOM) memengaruhi harga per unit, namun biaya riset rekayasa awal bersifat tetap.",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff & Riset Hardware)", percentage: "35%", description: "Pembelian komponen sensor, perancangan skematik PCB, dan pengujian firmware laboratorium." },
      { stage: "Uji Coba Lapangan (Field Testing)", percentage: "35%", description: "Pemasangan alat prototipe di lokasi nyata klien dan pengujian pengiriman data telemetri ke server." },
      { stage: "Instalasi Final & Serah Terima", percentage: "30%", description: "Pemasangan rapi di panel industri, integrasi dashboard web, dan serah terima dokumen skematik." }
    ],
    includedGuarantees: [
      "Garansi penggantian modul hardware dan perbaikan firmware selama 6 bulan",
      "Seluruh kode sumber firmware mikrokontroler dan file skematik PCB (Gerber) diserahkan 100%",
      "Sesi pendampingan instalasi fisik dan pelatihan staf teknisi lapangan",
      "Dokumentasi panduan troubleshooting pemeliharaan perangkat mandiri"
    ],
    relatedServiceSlug: "internet-of-things",
    relatedProcessSlug: "internet-of-things",
    relatedFaqSlug: "internet-of-things",
    relatedPortfolioSlug: "internet-of-things"
  },

  "machine-learning-ai": {
    id: "08",
    slug: "machine-learning-ai",
    title: "Kecerdasan Buatan (AI) & Machine Learning",
    eyebrow: "Investasi LLM, Computer Vision & Model Prediksi",
    shortDesc: "Estimasi biaya integrasi asisten cerdas AI internal (RAG), pemrosesan dokumen otomatis (OCR), model computer vision, sistem rekomendasi penjualan, hingga pipeline MLOps.",
    startingPrice: "Mulai dari Rp 15 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan AI dan Machine Learning merekayasa sistem cerdas yang mampu berpikir, memahami bahasa manusia, mengenali gambar/video, dan mempelajari pola data bisnis untuk mengotomasi tugas-tugas rumit yang sebelumnya menyita waktu kerja staf berhari-hari.",
      whenDoYouNeedIt: [
        "Ketika staf customer service Anda kewalahan membalas ribuan pertanyaan pelanggan yang sama mengenai katalog dan SOP.",
        "Ketika Anda perlu membaca ribuan dokumen PDF faktur, KTP, atau kwitansi secara manual setiap harinya.",
        "Ketika ingin memberikan rekomendasi produk yang sangat personal bagi setiap pengunjung toko online Anda.",
        "Ketika Anda membutuhkan sistem kamera pintar yang dapat menghitung pengunjung atau mendeteksi alat pelindung diri (APD) karyawan."
      ],
      businessValue: "Mengotomasi hingga 80% beban operasional berulang, meningkatkan nilai rata-rata transaksi belanja (AOV) lewat rekomendasi tepat sasaran, dan memberikan pelayanan responsif 24 jam tanpa jeda."
    },
    projects: [
      {
        id: "ai-enterprise-rag-chatbot",
        name: "Asisten AI Generatif & Knowledge Base Perusahaan (RAG)",
        badge: "Paling Diminati Saat Ini",
        description: "Chatbot cerdas berbasis Large Language Model yang dilatih khusus dengan dokumen internal perusahaan (PDF, SOP, Katalog) tanpa membocorkan data rahasia ke publik.",
        priceRange: "Rp 15.000.000 - Rp 28.000.000",
        timeline: "2 - 4 Minggu",
        targetAudience: "Perusahaan dengan SOP Tebal, Layanan Nasabah Perbankan, dan Portal HRD Internal",
        keyDeliverables: [
          "Integrasi Vector Database (Pinecone / Qdrant) untuk pencarian dokumen semantik",
          "Pencegahan halusinasi AI dengan teknik Retrieval-Augmented Generation (RAG) ketat",
          "Integrasi antarmuka chat ke WhatsApp Business API atau widget portal web",
          "Panel admin untuk menambah, memperbarui, dan menghapus dokumen referensi AI"
        ],
        techStackSample: ["Python", "LangChain", "OpenAI / Claude API", "Qdrant", "FastAPI"],
        popular: true
      },
      {
        id: "ai-computer-vision-ocr",
        name: "Computer Vision & Pemrosesan Dokumen Otomatis (OCR)",
        badge: "Otomasi Dokumen",
        description: "Sistem cerdas pembaca foto dokumen identitas (KTP, SIM, NPWP), formulir tulisan tangan, atau invoice fisik dan langsung diekstrak menjadi data JSON terstruktur.",
        priceRange: "Rp 28.000.000 - Rp 55.000.000",
        timeline: "4 - 7 Minggu",
        targetAudience: "FinTech P2P Lending, Asuransi, Perusahaan Leasing, dan Bagian Keuangan",
        keyDeliverables: [
          "Model deep learning pendeteksi sudut dokumen dan pelurus perspektif otomatis",
          "Ekstraksi teks dengan akurasi pengenalan karakter di atas 95%",
          "Pengecekan keaslian foto dokumen untuk mencegah penipuan manipulasi gambar",
          "API endpoint kilat yang dapat diintegrasikan langsung ke aplikasi mobile pendaftaran"
        ],
        techStackSample: ["Python", "PyTorch", "YOLOv8", "Tesseract / TrOCR", "OpenCV"]
      },
      {
        id: "ai-recommendation-engine",
        name: "Sistem Rekomendasi Penjualan & Personalisasi Konten",
        badge: "Pengungkit Konversi",
        description: "Algoritma rekomendasi produk belanja cerdas seperti Netflix atau Tokopedia yang menampilkan barang yang paling mungkin dibeli oleh masing-masing pengguna.",
        priceRange: "Rp 35.000.000 - Rp 70.000.000",
        timeline: "6 - 9 Minggu",
        targetAudience: "E-Commerce, Platform Kursus Online, Media Berita, dan Aplikasi Streaming",
        keyDeliverables: [
          "Algoritma Collaborative Filtering & Content-Based Filtering mutakhir",
          "Penanganan cold-start problem untuk produk baru dan pengguna yang baru mendaftar",
          "Uji A/B testing terintegrasi untuk mengukur kenaikan konversi klik belanja",
          "Infrastruktur serving model berkecepatan di bawah 50 milidetik per permintaan"
        ],
        techStackSample: ["Python", "Surprise", "TensorFlow", "Redis", "FastAPI"]
      },
      {
        id: "ai-mlops-private-llm",
        name: "Pipeline Enterprise MLOps & Fine-Tuning LLM On-Premise",
        badge: "Kerahasiaan Tertinggi",
        description: "Pelatihan ulang model AI open-source (Llama 3 / Mistral) di server GPU internal perusahaan Anda sendiri demi kepatuhan kerahasiaan data 100% mutlak.",
        priceRange: "Mulai dari Rp 75.000.000",
        timeline: "8 - 14 Minggu",
        targetAudience: "Institusi Pertahanan, Perbankan BUMN, Rumah Sakit, dan Lembaga Pemerintah",
        keyDeliverables: [
          "Fine-tuning model dengan dataset domain spesifik menggunakan metode LoRA / QLoRA",
          "Infrastruktur MLOps lengkap dengan pemantauan drift model dan retraining otomatis",
          "Deployment mandiri di server GPU on-premise tanpa ketergantungan API luar negeri",
          "Standarisasi keamanan isolasi jaringan dan audit keamanan data AI"
        ],
        techStackSample: ["PyTorch", "Hugging Face", "vLLM", "Docker GPU (Nvidia)", "MLflow"]
      }
    ],
    costDrivers: [
      {
        factor: "Kebutuhan Biaya Komputasi Server GPU & Token API",
        explanation: "Pelatihan model besar membutuhkan spesifikasi mesin kartu grafis server (Nvidia A100/H100) yang memiliki biaya sewa infrastruktur khusus.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Ketersediaan & Kualitas Dataset Pelatihan (Data Labeling)",
        explanation: "Jika data belum memiliki label jawaban yang benar, tim kami perlu melakukan proses anotasi data manual secara cermat bersama pakar industri.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Tingkat Toleransi Akurasi Model (Target > 99%)",
        explanation: "Menaikkan akurasi model dari 90% ke 99% memerlukan rekayasa fitur data, tuning hyperparameter, dan mitigasi edge-case yang jauh lebih intensif.",
        impact: "Tinggi"
      },
      {
        factor: "Penempatan Model (Cloud API vs Server On-Premise Lokal)",
        explanation: "Menjalankan model lokal mandiri memerlukan pengaturan kontainerisasi akselerasi GPU dan optimasi kuantisasi bobot model.",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff & Riset Kelayakan)", percentage: "35%", description: "Pemeriksaan dataset, uji kelayakan akurasi awal (Proof of Concept), dan penyiapan pipeline." },
      { stage: "Penyelesaian Model & Validasi", percentage: "35%", description: "Model AI selesai dilatih, lolos uji akurasi target metrik, dan terintegrasi di server staging." },
      { stage: "Deployment Produksi & Handover", percentage: "30%", description: "Model live di server produksi, integrasi monitoring performa, dan serah terima bobot kode model." }
    ],
    includedGuarantees: [
      "Jaminan kepemilikan penuh atas bobot model (model weights) dan dataset yang telah dibersihkan",
      "Garansi penyesuaian akurasi dan pemeliharaan drift model selama 90 hari setelah go-live",
      "Perjanjian kerahasiaan ketat bahwa data Anda TIDAK AKAN PERNAH digunakan untuk melatih model pihak ketiga",
      "Dokumentasi lengkap panduan pemeliharaan dan retraining model berkelanjutan"
    ],
    relatedServiceSlug: "machine-learning-ai",
    relatedProcessSlug: "machine-learning-ai",
    relatedFaqSlug: "machine-learning-ai",
    relatedPortfolioSlug: "machine-learning-ai"
  },

  "mobile-development": {
    id: "09",
    slug: "mobile-development",
    title: "Pengembangan Aplikasi Mobile (iOS & Android)",
    eyebrow: "Investasi Aplikasi Seluler React Native & Flutter",
    shortDesc: "Estimasi biaya rekayasa aplikasi smartphone Android & iOS berperforma tinggi, arsitektur offline-first, integrasi payment gateway, sensor hardware, hingga rilis resmi ke toko aplikasi.",
    startingPrice: "Mulai dari Rp 10 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan mobile development membangun aplikasi smartphone khusus Android dan iOS menggunakan teknologi cross-platform modern (React Native / Flutter) sehingga Anda mendapatkan dua aplikasi sekaligus dengan satu basis kode yang efisien, cepat, dan hemat biaya.",
      whenDoYouNeedIt: [
        "Ketika bisnis Anda mengandalkan interaksi harian pelanggan yang sering membuka smartphone (seperti toko retail, gym, edukasi, atau klinik).",
        "Ketika aplikasi membutuhkan akses ke fitur perangkat fisik smartphone seperti GPS akurat, kamera pemindai barcode, Bluetooth, atau sensor gerak.",
        "Ketika Anda membutuhkan fitur Push Notification langsung ke layar utama konsumen untuk meningkatkan pembelian berulang.",
        "Ketika staf lapangan Anda harus bekerja di daerah pelosok yang sering kehilangan sinyal internet (arsitektur offline-first)."
      ],
      businessValue: "Meningkatkan loyalitas pelanggan melalui kehadiran langsung di genggaman mereka, membuka saluran promosi instan tanpa biaya lewat push notification, dan mempercepat alur transaksi konsumen."
    },
    projects: [
      {
        id: "mobile-catalog-membership",
        name: "Aplikasi Kartu Member & Katalog Loyalitas Bisnis",
        badge: "Paling Populer untuk UKM",
        description: "Aplikasi seluler untuk pelanggan setia Anda yang memuat kartu anggota digital (QR Code), katalog produk promo, riwayat transaksi, dan penukaran poin hadiah.",
        priceRange: "Rp 10.000.000 - Rp 18.000.000",
        timeline: "3 - 5 Minggu",
        targetAudience: "Coffee Shop, Kafe, Butik Pakaian, Klinik Kecantikan, dan Fitness Center",
        keyDeliverables: [
          "Aplikasi terkompilasi untuk platform Android (Play Store) dan iOS (App Store)",
          "Kartu identitas member digital terintegrasi scanner kasir",
          "Fitur Push Notification broadcast promo langsung ke smartphone pelanggan",
          "Dashboard admin berbasis web untuk memantau data member dan mengatur hadiah"
        ],
        techStackSample: ["Flutter / React Native", "Firebase", "Node.js", "PostgreSQL"],
        popular: true
      },
      {
        id: "mobile-on-demand-booking",
        name: "Aplikasi Layanan On-Demand, Kurir & Booking Jadwal",
        badge: "Paling Diminati Startup",
        description: "Sistem aplikasi lengkap dengan dua sisi pengguna (Aplikasi Pelanggan & Aplikasi Mitra/Driver) dilengkapi pelacakan lokasi peta realtime dan kalkulasi tarif otomatis.",
        priceRange: "Rp 25.000.000 - Rp 45.000.000",
        timeline: "5 - 8 Minggu",
        targetAudience: "Jasa Servis AC, Antar Jemput Laundry, Ekspedisi Lokal, dan Home Care Medis",
        keyDeliverables: [
          "2 Aplikasi terpisah: Aplikasi Pelanggan dan Aplikasi Mitra Petugas Lapangan",
          "Peta pelacakan lokasi petugas realtime (Integrasi Google Maps API)",
          "Sistem pembagian order otomatis ke mitra terdekat (Auto-Dispatch)",
          "Pembayaran online otomatis dengan saldo dompet internal atau payment gateway"
        ],
        techStackSample: ["React Native", "Socket.io", "Google Maps SDK", "NestJS", "Redis"]
      },
      {
        id: "mobile-fintech-digital-wallet",
        name: "Aplikasi FinTech, Dompet Digital & Transaksi Kustom",
        badge: "Keamanan Tinggi",
        description: "Aplikasi keuangan dengan pengamanan berlapis (biometrik sidik jari / FaceID, PIN transaksi terenkripsi, deteksi HP root/jailbreak, dan sertifikat SSL pinning).",
        priceRange: "Rp 45.000.000 - Rp 85.000.000",
        timeline: "8 - 12 Minggu",
        targetAudience: "Koperasi Simpan Pinjam Modern, BPR, FinTech Startup, dan E-Money Ekosistem",
        keyDeliverables: [
          "Fitur keamanan perbankan: Biometric Auth, Screen Recording Protection, dan Root Detection",
          "Pencatatan mutasi saldo ganda (Double-Entry Bookkeeping Ledger) anti-selisih",
          "Integrasi transfer antar bank, pengisian saldo otomatis, dan pembayaran QRIS",
          "Audit trail keamanan lengkap untuk memenuhi regulasi keuangan pemerintah"
        ],
        techStackSample: ["Flutter", "Golang", "PostgreSQL", "AES-256", "SSL Pinning"]
      },
      {
        id: "mobile-enterprise-erp-integration",
        name: "Aplikasi Mobile Enterprise & Integrasi ERP Lapangan",
        badge: "Operasional Skala Besar",
        description: "Aplikasi seluler pendukung ribuan tenaga penjualan (Sales Force Automation) atau petugas gudang yang terhubung langsung ke database inti ERP perusahaan.",
        priceRange: "Mulai dari Rp 85.000.000",
        timeline: "10 - 16 Minggu",
        targetAudience: "Perusahaan Distributor FMCG, Konstruksi, dan Manufaktur Berskala Besar",
        keyDeliverables: [
          "Arsitektur database lokal (SQLite / WatermelonDB) yang dapat bekerja 100% offline",
          "Sinkronisasi otomatis di latar belakang saat smartphone kembali mendapatkan sinyal internet",
          "Pemindaian barcode barang gudang menggunakan kamera perangkat dengan cepat",
          "Pelacakan rute perjalanan kunjungan sales dan presensi berbasis GPS anti-fake GPS"
        ],
        techStackSample: ["React Native", "WatermelonDB", "SAP/Odoo API", "Golang", "Docker"]
      }
    ],
    costDrivers: [
      {
        factor: "Kebutuhan Integrasi Perangkat Keras Khusus (Hardware Sensors)",
        explanation: "Aplikasi yang membutuhkan koneksi Bluetooth Low Energy (BLE) ke printer thermal portabel atau sensor IoT membutuhkan waktu uji coba stabilitas firmware.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Arsitektur Offline-First & Mekanisme Sinkronisasi Database",
        explanation: "Menangani konflik data saat dua petugas mengedit data yang sama dalam kondisi tanpa sinyal membutuhkan strategi resolusi sinkronisasi mendalam.",
        impact: "Tinggi"
      },
      {
        factor: "Persyaratan Keamanan & Enkripsi Finansial",
        explanation: "Penerapan enkripsi end-to-end, proteksi penipuan geolokasi (Mock Location Blocker), dan sertifikasi SSL Pinning menambah lapisan pengujian keamanan.",
        impact: "Tinggi"
      },
      {
        factor: "Proses Akun Pengembang & Kebijakan Toko Aplikasi",
        explanation: "Apple App Store dan Google Play memiliki pedoman privasi dan persyaratan pengujian tertutup (20 testers selama 14 hari untuk akun Google baru).",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff & Desain UI/UX)", percentage: "30%", description: "Penyusunan alur antarmuka Figma, arsitektur database, dan setup repositori proyek mobile." },
      { stage: "Fase Prototipe Beta (APK/TestFlight)", percentage: "40%", description: "Aplikasi selesai dikoding dan dapat diinstal langsung di smartphone klien untuk uji fungsi." },
      { stage: "Publikasi Toko Aplikasi & Serah Terima", percentage: "30%", description: "Aplikasi resmi live disetujui di Google Play Store dan Apple App Store, serta serah terima source code." }
    ],
    includedGuarantees: [
      "Jaminan lolos review dan terbit di Google Play Store dan Apple App Store",
      "Garansi pemeliharaan dan perbaikan bug selama 90 hari setelah aplikasi tayang",
      "100% Hak kepemilikan source code master dalam repositori Git tanpa biaya lisensi tersembunyi",
      "Dokumentasi arsitektur aplikasi dan panduan teknis compile mandiri"
    ],
    relatedServiceSlug: "mobile-development",
    relatedProcessSlug: "mobile-development",
    relatedFaqSlug: "mobile-development",
    relatedPortfolioSlug: "mobile-development"
  },

  "quality-assurance-qa-testing": {
    id: "10",
    slug: "quality-assurance-qa-testing",
    title: "Quality Assurance & Pengujian Sistem",
    eyebrow: "Investasi Stabilitas, Automasi Testing & Uji Beban",
    shortDesc: "Estimasi biaya audit manual mendalam, otomatisasi pengujian end-to-end (Playwright/Cypress), uji beban konkurensi ribuan user (k6/JMeter), serta pengujian celah keamanan aplikasi.",
    startingPrice: "Mulai dari Rp 5 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan Quality Assurance (QA) memastikan aplikasi perangkat lunak Anda bebas dari cacat program (bug), tidak lambat saat diserbu ribuan pembeli, aman dari celah peretasan, serta memberikan pengalaman pengguna yang mulus sebelum diluncurkan ke publik.",
      whenDoYouNeedIt: [
        "Ketika pengguna aplikasi Anda sering mengeluhkan tombol yang tidak berfungsi, aplikasi force-close, atau kalkulasi angka yang salah.",
        "Ketika setiap kali tim developer merilis fitur baru, fitur lama yang sebelumnya normal justru mendadak rusak (regresi).",
        "Ketika Anda akan meluncurkan kampanye iklan besar dan ingin memastikan server tidak akan 'down' saat dikunjungi puluhan ribu orang serentak.",
        "Ketika perusahaan Anda membutuhkan sertifikasi pengujian independen sebelum pelaporan audit kepatuhan ISO atau regulator."
      ],
      businessValue: "Mencegah kerugian finansial akibat bug transaksi fatal, melindungi reputasi merek dari ulasan bintang 1 di internet, serta mempercepat siklus rilis developer tanpa rasa takut sistem rusak."
    },
    projects: [
      {
        id: "qa-manual-test-matrix",
        name: "Audit Manual Menyeluruh & Penyusunan Matriks Uji",
        badge: "Pondasi Kualitas Produk",
        description: "Pengujian fungsional manual menyeluruh di berbagai variasi ukuran layar smartphone, tipe browser, dan sistem operasi dengan dokumentasi kasus uji terperinci.",
        priceRange: "Rp 5.000.000 - Rp 10.000.000",
        timeline: "1 - 2 Minggu",
        targetAudience: "Website UKM, Aplikasi Baru Selesai Koding, dan Toko Online",
        keyDeliverables: [
          "Dokumen Matriks Skenario Kasus Uji Lengkap (Test Cases Matrix)",
          "Laporan inventaris bug berdasarkan prioritas keparahan (Critical, High, Medium, Low)",
          "Rekaman video dan tangkapan layar langkah reproduksi setiap temuan bug",
          "Verifikasi ulang setelah tim developer Anda melakukan perbaikan bug (Retesting)"
        ],
        techStackSample: ["Jira / Linear", "TestRail", "BrowserStack", "Postman"]
      },
      {
        id: "qa-automation-e2e",
        name: "Otomasi Pengujian End-to-End (Playwright / Cypress)",
        badge: "Paling Populer untuk Tim Tech",
        description: "Penulisan skrip robot otomatisasi yang menguji alur penting aplikasi (registrasi, login, checkout, pembayaran) secara otomatis setiap kali developer mengubah kode.",
        priceRange: "Rp 15.000.000 - Rp 30.000.000",
        timeline: "3 - 5 Minggu",
        targetAudience: "Platform SaaS, E-Commerce, dan Perusahaan dengan Tim Koding Sendiri",
        keyDeliverables: [
          "Skrip otomatisasi pengujian end-to-end berbasis Playwright / Cypress",
          "Integrasi otomatis ke pipeline CI/CD GitHub Actions / GitLab CI",
          "Laporan pengujian visual interaktif dengan video rekaman kegagalan otomatis",
          "Menghemat waktu pengujian regresi dari hitungan hari menjadi hanya 15 menit"
        ],
        techStackSample: ["Playwright", "Cypress", "TypeScript", "GitHub Actions", "Docker"],
        popular: true
      },
      {
        id: "qa-performance-load-stress",
        name: "Uji Stres Beban Konkurensi Tinggi (JMeter & k6 Load Test)",
        badge: "Kesiapan Lonjakan Trafik",
        description: "Simulasi beban puluhan ribu pengguna virtual secara serentak untuk menemukan titik macet (bottleneck) database, kebocoran memori server, dan batas daya tahan sistem.",
        priceRange: "Rp 12.000.000 - Rp 24.000.000",
        timeline: "2 - 3 Minggu",
        targetAudience: "Persiapan Kampanye Flash Sale, Tiket Konser, Ujian Masuk Online, dan Portal Berita",
        keyDeliverables: [
          "Skenario uji beban lonjakan mendadak (Spike Test) dan beban konstan (Endurance Test)",
          "Analisis titik kebuntuan database (Slow Query Bottleneck) dan utilisasi CPU/RAM",
          "Laporan rekomendasi konfigurasi optimal server dan caching Redis",
          "Sertifikat Laporan Kinerja Sistem (Performance Benchmark Report)"
        ],
        techStackSample: ["Grafana k6", "Apache JMeter", "Prometheus", "Grafana", "Node.js"]
      },
      {
        id: "qa-security-vapt",
        name: "Audit Celah Keamanan Aplikasi (VAPT & Penetrasi)",
        badge: "Standar Keamanan Tertinggi",
        description: "Simulasi peretasan etis (Ethical Hacking) untuk menemukan celah SQL Injection, Cross-Site Scripting (XSS), celah otorisasi data (IDOR), dan kebocoran data sensitif.",
        priceRange: "Mulai dari Rp 20.000.000",
        timeline: "3 - 5 Minggu",
        targetAudience: "Aplikasi Keuangan, FinTech, Rumah Sakit, dan Lembaga Korporat",
        keyDeliverables: [
          "Pengujian keamanan berstandar OWASP Top 10 Web & Mobile",
          "Laporan eksekutif risiko keamanan untuk jajaran direksi dan auditor",
          "Panduan teknis langkah penutupan celah bagi tim developer (Remediation Guide)",
          "Surat Pernyataan Keamanan Sistem (VAPT Cleared Certificate) setelah celah ditutup"
        ],
        techStackSample: ["Burp Suite Professional", "OWASP ZAP", "Nmap", "SQLmap", "Kali Linux"]
      }
    ],
    costDrivers: [
      {
        factor: "Cakupan Modul Aplikasi & Jumlah Endpoint API",
        explanation: "Aplikasi dengan ratusan form dan peran pengguna berbeda membutuhkan skenario pengujian permutasi yang lebih masif.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Target Simulasi Jumlah Pengguna Serentak (Virtual Users)",
        explanation: "Simulasi 100.000 pengguna bersamaan membutuhkan sewa kluster generator beban terdistribusi multi-mesin di berbagai negara.",
        impact: "Tinggi"
      },
      {
        factor: "Tingkat Kompleksitas Alur Bisnis (Integrasi Pihak Ketiga)",
        explanation: "Menguji skenario pembayaran gagal, timeout bank, dan webhook asynchronous membutuhkan pembuatan mock service server khusus.",
        impact: "Sedang"
      },
      {
        factor: "Kebutuhan Sertifikat Resmi untuk Kebutuhan Audit Eksternal",
        explanation: "Penyusunan laporan formal berstandar ISO 27001 atau Bank Indonesia memerlukan dokumentasi metodologi forensik resmi.",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff & Rencana Uji)", percentage: "35%", description: "Penyusunan Test Plan, penentuan lingkungan sandbox, dan pembuatan matriks skenario uji." },
      { stage: "Fase Eksekusi Pengujian & Pelaporan Bug", percentage: "35%", description: "Seluruh pengujian dijalankan, penyerahan daftar temuan bug lengkap, dan panduan perbaikan." },
      { stage: "Verifikasi Ulang & Laporan Akhir", percentage: "30%", description: "Pengujian ulang setelah bug diperbaiki dan penyerahan sertifikat jaminan kualitas final." }
    ],
    includedGuarantees: [
      "Laporan hasil uji yang obyektif dan independen tanpa rekayasa data",
      "Seluruh skrip robot otomatisasi Playwright / k6 diserahkan sebagai aset internal tim Anda",
      "Satu putaran verifikasi ulang (Retesting) gratis setelah tim pengembang memperbaiki temuan bug",
      "Perjanjian kerahasiaan ketat bahwa data aplikasi dan celah keamanan dirahasiakan 100%"
    ],
    relatedServiceSlug: "quality-assurance-qa-testing",
    relatedProcessSlug: "quality-assurance-qa-testing",
    relatedFaqSlug: "quality-assurance-qa-testing",
    relatedPortfolioSlug: "quality-assurance-qa-testing"
  },

  "web-development": {
    id: "11",
    slug: "web-development",
    title: "Web Development & Portal Enterprise",
    eyebrow: "Investasi Next.js, Headless CMS & Sistem Web",
    shortDesc: "Estimasi biaya pembangunan profil perusahaan modern, aplikasi web SaaS, portal multi-cabang, e-commerce kustom, hingga sistem ERP berbasis web menggunakan Next.js & React.",
    startingPrice: "Mulai dari Rp 3.5 Juta",
    educationalOverview: {
      whatIsThisService: "Layanan web development membangun website dan aplikasi berbasis web modern menggunakan teknologi Next.js, React, dan arsitektur serverless. Kami tidak menggunakan template murahan yang lambat; setiap baris kode dirancang kustom untuk kecepatan kilat, peringkat SEO teratas Google, dan keamanan tingkat perbankan.",
      whenDoYouNeedIt: [
        "Ketika website WordPress lama Anda sangat lambat, sering diretas (malware/hacker), atau skor Google PageSpeed-nya merah.",
        "Ketika Anda ingin meningkatkan angka penjualan online dengan landing page yang memuat dalam waktu kurang dari 1 detik.",
        "Ketika perusahaan Anda membutuhkan portal sistem operasional internal (dashboard karyawan, kasir, atau manajemen inventaris).",
        "Ketika Anda memiliki ide bisnis startup berbasis SaaS (Software as a Service) dan membutuhkan platform siap pakai."
      ],
      businessValue: "Meningkatkan rasio konversi leads penjualan hingga 40% berkat kecepatan muat secepat kilat, dominasi halaman pertama pencarian Google (SEO), serta arsitektur yang siap menampung jutaan pengunjung tanpa tumbang."
    },
    projects: [
      {
        id: "web-landing-page-profile",
        name: "Website Company Profile & Landing Page High-Conversion",
        badge: "Paling Populer untuk Bisnis",
        description: "Website profil perusahaan modern berbasis Next.js dengan animasi interaktif halus, desain responsif di semua gadget, ramah SEO Google, dan skor kecepatan PageSpeed hijau (95+).",
        priceRange: "Rp 3.500.000 - Rp 7.500.000",
        timeline: "1 - 3 Minggu",
        targetAudience: "Perusahaan Korporat, Konsultan, Klinik Medis, Firma Hukum, dan Kontraktor",
        keyDeliverables: [
          "Website kustom Next.js dengan desain profesional dan light/dark mode",
          "Integrasi CMS ramah pengguna (Sanity / Strapi / Payload) untuk edit konten mandiri",
          "Struktur SEO on-page lengkap (Meta Tags, OpenGraph, Schema JSON-LD resmi)",
          "Formulir kontak terhubung langsung ke WhatsApp bisnis dan email perusahaan"
        ],
        techStackSample: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
        popular: true
      },
      {
        id: "web-portal-internal-admin",
        name: "Portal Web & Dashboard Admin Operasional Bisnis",
        badge: "Efisiensi Operasional",
        description: "Aplikasi web internal untuk mengelola database pelanggan, data karyawan, inventaris produk, hak akses bertingkat, dan pelaporan keuangan perusahaan.",
        priceRange: "Rp 12.000.000 - Rp 25.000.000",
        timeline: "3 - 6 Minggu",
        targetAudience: "Distributor, Klinik Multi-Cabang, Sekolah/Universitas, dan Kantor Operasional",
        keyDeliverables: [
          "Sistem login aman dengan Multi-Factor Authentication dan Role-Based Access Control",
          "Manajemen CRUD data lengkap dengan filter pencarian instan dan ekspor Excel/PDF",
          "Visualisasi grafik analitik performa operasional harian",
          "Audit log riwayat tindakan karyawan untuk transparansi data"
        ],
        techStackSample: ["Next.js App Router", "NestJS / Prisma", "PostgreSQL", "Tailwind", "Shadcn UI"]
      },
      {
        id: "web-ecommerce-marketplace-custom",
        name: "Platform E-Commerce & Toko Online Kustom Penuh",
        badge: "Mesin Penjualan Mandiri",
        description: "Toko online milik Anda sendiri tanpa potongan komisi pihak ketiga, terintegrasi katalog produk varian, payment gateway otomatis, dan kalkulator ongkos kirim resmi.",
        priceRange: "Rp 25.000.000 - Rp 50.000.000",
        timeline: "5 - 8 Minggu",
        targetAudience: "Brand Fashion D2C, Toko Ritel Elektronik, Grosir B2B, dan Manufaktur",
        keyDeliverables: [
          "Katalog produk dengan varian warna/ukuran dan manajemen stok otomatis",
          "Integrasi pembayaran lengkap (QRIS, Virtual Account, Kartu Kredit, ShopeePay)",
          "Kalkulasi ongkos kirim otomatis multi-ekspedisi (JNE, SiCepat, J&T) hingga level kecamatan",
          "Sistem kupon diskon, flash sale otomatis, dan abandoned cart reminder via WhatsApp"
        ],
        techStackSample: ["Next.js", "Node.js", "PostgreSQL", "Midtrans / Xendit", "Redis"]
      },
      {
        id: "web-enterprise-saas-platform",
        name: "Aplikasi Web Enterprise & Platform SaaS Skala Besar",
        badge: "Skala Enterprise & SaaS",
        description: "Perancangan platform berbasis langganan (subscription model) dengan arsitektur multi-tenant, pembayaran berulang otomatis, dan kesiapan menangani jutaan pengguna aktif.",
        priceRange: "Mulai dari Rp 50.000.000",
        timeline: "8 - 14 Minggu",
        targetAudience: "Startup SaaS B2B, Lembaga Perbankan, BUMN, dan Platform EdTech Nasional",
        keyDeliverables: [
          "Arsitektur database multi-tenant yang aman dan terisolasi per perusahaan klien",
          "Sistem tagihan langganan otomatis (Recurring Billing) dengan integrasi invoice pajak",
          "Dokumentasi API publik bagi klien yang ingin menghubungkan sistem mereka",
          "Jaminan performa uptime 99.9% dengan server serverless auto-scaling global"
        ],
        techStackSample: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Docker", "AWS / Vercel"]
      }
    ],
    costDrivers: [
      {
        factor: "Kompleksitas Logika Bisnis & Jumlah Modul Fitur",
        explanation: "Landing page informasi memiliki biaya lebih ekonomis dibanding platform marketplace dengan kalkulasi pajak multi-wilayah dan sistem multi-vendor.",
        impact: "Sangat Berpengaruh"
      },
      {
        factor: "Tingkat Kustomisasi Desain UI/UX",
        explanation: "Desain visual 100% orisinal dengan animasi interaktif mikro 3D membutuhkan riset visual dan pengerjaan frontend yang lebih teliti.",
        impact: "Tinggi"
      },
      {
        factor: "Integrasi Sistem Eksternal & Basis Data Legacy",
        explanation: "Menghubungkan website ke sistem software lama (ERP jadul atau core banking) membutuhkan pembuatan API jembatan khusus.",
        impact: "Tinggi"
      },
      {
        factor: "Kebutuhan Kepatuhan Keamanan & Standar Aksesibilitas (WCAG)",
        explanation: "Website untuk institusi pemerintah atau perbankan mewajibkan audit penetrasi siber dan standar aksesibilitas bagi penyandang disabilitas.",
        impact: "Sedang"
      }
    ],
    paymentMilestones: [
      { stage: "Uang Muka (Kickoff & Desain Wireframe)", percentage: "30%", description: "Penyusunan arsitektur informasi, riset SEO kata kunci, dan persetujuan prototipe Figma." },
      { stage: "Penyelesaian Koding & Uji Staging", percentage: "40%", description: "Website selesai dikoding 100% dan dapat diuji langsung di link demo rahasia (staging)." },
      { stage: "Peluncuran Live & Serah Terima", percentage: "30%", description: "Domain resmi diarahkan live, verifikasi Google Search Console, dan serah terima source code." }
    ],
    includedGuarantees: [
      "Jaminan skor kecepatan Google PageSpeed di zona hijau (90+) untuk performa mobile & desktop",
      "Garansi pemeliharaan teknis dan penanganan bug selama 90 hari setelah go-live",
      "100% Kepemilikan penuh source code tanpa lock-in platform; bebas dipindah ke server mana pun",
      "Sesi pelatihan (training) admin pengelolaan konten website dan panduan operasional lengkap"
    ],
    relatedServiceSlug: "web-development",
    relatedProcessSlug: "web-development",
    relatedFaqSlug: "web-development",
    relatedPortfolioSlug: "web-development"
  }
};

