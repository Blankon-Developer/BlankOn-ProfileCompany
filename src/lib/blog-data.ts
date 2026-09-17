export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  timestamp: number;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  image: string;
  tags: string[];
  readingTime: string;
  content: string; // HTML string for mockup
};

const dummyContent = `
<h2>Pendahuluan</h2>
<p>Dalam era digital yang semakin berkembang, teknologi telah menjadi tulang punggung bagi inovasi bisnis di berbagai sektor. Transformasi digital bukan lagi sekadar pilihan, melainkan keharusan untuk bertahan dan memenangkan persaingan pasar yang semakin ketat.</p>
<p>Artikel ini akan membahas secara mendalam bagaimana pendekatan yang tepat dapat menghasilkan dampak yang terukur, serta strategi apa saja yang harus dipertimbangkan oleh para pemimpin teknologi (CTO, Tech Lead) saat membangun infrastruktur skala enterprise.</p>

<h2>Mengapa Arsitektur yang Tepat Sangat Penting?</h2>
<p>Seringkali, perusahaan terjebak dalam euforia mengadopsi teknologi terbaru tanpa mempertimbangkan kesesuaian arsitektur dengan skala bisnis mereka. Padahal, arsitektur yang buruk dapat menyebabkan <em>technical debt</em> yang membengkak, penurunan performa, hingga kerentanan keamanan yang fatal.</p>
<ul>
  <li><strong>Skalabilitas:</strong> Sistem harus mampu menangani lonjakan trafik tanpa degradasi performa.</li>
  <li><strong>Keamanan:</strong> Lapisan enkripsi dan protokol autentikasi modern tidak boleh dikompromikan.</li>
  <li><strong>Maintainability:</strong> Kode yang bersih dan terdokumentasi dengan baik mempercepat proses onboarding developer baru.</li>
</ul>

<h2>Strategi Implementasi yang Direkomendasikan</h2>
<p>Untuk mencapai hasil yang maksimal, kami menyarankan pendekatan bertahap (agile) dengan iterasi yang konstan. Pengujian otomatis (automated testing) dan proses CI/CD yang solid akan meminimalisir risiko kegagalan saat deployment.</p>
<p>Selain itu, monitoring dan observabilitas sistem secara real-time memungkinkan tim mendeteksi anomali sebelum berdampak langsung pada pengguna akhir.</p>

<h2>Kesimpulan</h2>
<p>Investasi pada infrastruktur dan arsitektur perangkat lunak mungkin terlihat mahal di awal, namun ROI (Return of Investment) jangka panjangnya sangat menjanjikan. Dengan fondasi yang kuat, perusahaan Anda siap menghadapi tantangan inovasi di masa depan.</p>
`;

export const blogData: BlogPost[] = [
  // =====================================================
  // BLOCKCHAIN
  // =====================================================

  {
    title: "Blockchain untuk Supply Chain: Dari Tracking hingga Transparansi",
    slug: "blockchain-untuk-supply-chain",
    excerpt:
      "Bagaimana teknologi blockchain dapat membantu perusahaan meningkatkan transparansi dan traceability pada rantai pasok.",
    date: "05 September 2026",
    category: "Blockchain",
    timestamp: new Date("2026-09-05").getTime(),
    author: {
      name: "Rizky Ramadhan",
      avatar: "https://i.pravatar.cc/150?u=rizky-blockchain-2",
      role: "Blockchain Engineer",
    },
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1600&q=85",
    tags: ["Blockchain", "Supply Chain", "Web3", "Traceability"],
    readingTime: "7 min read",
    content: `
      <h2>Blockchain dalam Supply Chain</h2>
      <p>Rantai pasok modern melibatkan banyak pihak mulai dari produsen, distributor, warehouse, hingga retailer. Banyaknya pihak tersebut membuat proses pencatatan dan verifikasi data menjadi semakin kompleks.</p>
      <p>Blockchain dapat digunakan sebagai shared ledger sehingga pihak yang memiliki akses dapat melihat catatan transaksi yang konsisten.</p>

      <h2>Traceability Produk</h2>
      <p>Setiap tahapan perjalanan produk dapat dicatat secara digital. Informasi tersebut membantu perusahaan mengetahui asal produk dan proses yang telah dilaluinya.</p>

      <h2>Manfaat untuk Bisnis</h2>
      <ul>
        <li>Meningkatkan transparansi antar pihak.</li>
        <li>Membantu proses audit.</li>
        <li>Mengurangi ketergantungan pada pencatatan manual.</li>
        <li>Mempermudah penelusuran produk.</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Blockchain bukan solusi untuk semua masalah supply chain, tetapi dapat memberikan manfaat ketika banyak pihak membutuhkan sumber data bersama yang dapat diverifikasi.</p>
    `,
  },

  {
    title: "Mengenal Tokenisasi Aset Digital dan Cara Kerjanya",
    slug: "mengenal-tokenisasi-aset-digital",
    excerpt:
      "Memahami konsep tokenisasi aset dan bagaimana aset dunia nyata dapat direpresentasikan dalam jaringan blockchain.",
    date: "22 Agustus 2026",
    category: "Blockchain",
    timestamp: new Date("2026-08-22").getTime(),
    author: {
      name: "Fauzan Hakim",
      avatar: "https://i.pravatar.cc/150?u=fauzan-blockchain",
      role: "Web3 Developer",
    },
    image:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=1600&q=85",
    tags: ["Tokenization", "Blockchain", "Digital Asset", "Web3"],
    readingTime: "6 min read",
    content: `
      <h2>Apa Itu Tokenisasi?</h2>
      <p>Tokenisasi adalah proses merepresentasikan suatu aset atau hak tertentu dalam bentuk token digital yang tercatat pada blockchain.</p>

      <h2>Bagaimana Prosesnya?</h2>
      <p>Aset terlebih dahulu didefinisikan beserta hak kepemilikannya. Informasi tersebut kemudian direpresentasikan melalui token dengan aturan yang ditentukan oleh smart contract.</p>

      <h2>Contoh Penggunaan</h2>
      <ul>
        <li>Representasi aset properti.</li>
        <li>Digitalisasi sertifikat atau dokumen tertentu.</li>
        <li>Program loyalty berbasis token.</li>
        <li>Digital collectible.</li>
      </ul>

      <h2>Tantangan</h2>
      <p>Tokenisasi tidak hanya membutuhkan teknologi blockchain. Aspek legal, custody, governance, dan hubungan antara token digital dengan aset dunia nyata juga perlu diperhatikan.</p>

      <h2>Kesimpulan</h2>
      <p>Tokenisasi membuka berbagai kemungkinan baru dalam pengelolaan aset digital, tetapi implementasinya harus mempertimbangkan aspek teknis dan non-teknis secara bersamaan.</p>
    `,
  },

  {
    title: "Blockchain Beyond Cryptocurrency: Use Case untuk Perusahaan",
    slug: "blockchain-beyond-cryptocurrency",
    excerpt:
      "Eksplorasi penggunaan blockchain untuk kebutuhan enterprise di luar cryptocurrency, mulai dari identity hingga document verification.",
    date: "08 Agustus 2026",
    category: "Blockchain",
    timestamp: new Date("2026-08-08").getTime(),
    author: {
      name: "Naufal Pratama",
      avatar: "https://i.pravatar.cc/150?u=naufal-blockchain",
      role: "Blockchain Solutions Architect",
    },
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=85",
    tags: ["Blockchain", "Enterprise", "Identity", "Digital Verification"],
    readingTime: "8 min read",
    content: `
      <h2>Blockchain Tidak Hanya untuk Cryptocurrency</h2>
      <p>Blockchain sering dikaitkan dengan cryptocurrency, padahal konsep distributed ledger dapat digunakan untuk berbagai kebutuhan bisnis yang membutuhkan integritas dan verifikasi data.</p>

      <h2>Digital Identity</h2>
      <p>Blockchain dapat menjadi bagian dari sistem verifikasi identitas digital dengan menyimpan bukti atau reference data yang dapat diverifikasi oleh pihak tertentu.</p>

      <h2>Document Verification</h2>
      <p>Hash dokumen dapat dicatat ke blockchain untuk membantu membuktikan bahwa sebuah dokumen belum mengalami perubahan sejak pertama kali dicatat.</p>

      <h2>Hal yang Perlu Dipertimbangkan</h2>
      <ul>
        <li>Privacy data.</li>
        <li>Governance.</li>
        <li>Integration dengan sistem existing.</li>
        <li>Biaya operasional jaringan.</li>
      </ul>

      <h2>Kesimpulan</h2>
      <p>Nilai utama blockchain bagi enterprise terletak pada kemampuan menciptakan mekanisme verifikasi dan pencatatan bersama, bukan semata-mata pada penggunaan cryptocurrency.</p>
    `,
  },
  {
    title: "Membangun Smart Contract yang Aman untuk Enterprise",
    slug: "membangun-smart-contract-yang-aman",
    excerpt: "Panduan arsitektur dan praktik terbaik dalam men-deploy smart contract berskala enterprise untuk meminimalisir celah keamanan pada jaringan blockchain.",
    date: "12 Agustus 2026",
    category: "Blockchain",
    timestamp: new Date("2026-08-12").getTime(),
    author: {
      name: "Rizky Ramadhan",
      avatar: "https://i.pravatar.cc/150?u=rizky",
      role: "Lead Blockchain Engineer"
    },
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=1600&q=85",
    tags: ["Smart Contract", "Security", "Web3", "Ethereum"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Pengantar Smart Contract"),
  },




  {
    title: "Strategi Migrasi Cloud untuk Menekan Biaya Operasional",
    slug: "strategi-migrasi-cloud",
    excerpt: "Langkah strategis memindahkan infrastruktur on-premise ke solusi Cloud (AWS/GCP) tanpa mengganggu operasional perusahaan, serta optimalisasi alokasi resource.",
    date: "25 Juli 2026",
    category: "Cloud Computing",
    timestamp: new Date("2026-07-25").getTime(),
    author: {
      name: "Siti Nurhaliza",
      avatar: "https://i.pravatar.cc/150?u=siti",
      role: "Cloud Architect"
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=85",
    tags: ["AWS", "GCP", "DevOps", "Migration"],
    readingTime: "8 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mengapa Migrasi Cloud?"),
  },
  {
    title: "Memanfaatkan Data Science untuk Analisis Perilaku Konsumen",
    slug: "memanfaatkan-data-science-konsumen",
    excerpt: "Bagaimana implementasi machine learning pada data historis dapat mengungkap pola pembelian tersembunyi dan meningkatkan retensi pelanggan B2B.",
    date: "10 Juli 2026",
    category: "Data Science",
    timestamp: new Date("2026-07-10").getTime(),
    author: {
      name: "Budi Santoso",
      avatar: "https://i.pravatar.cc/150?u=budi",
      role: "Data Scientist"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    tags: ["Data Analytics", "Machine Learning", "Customer Behavior"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Pentingnya Data Konsumen"),
  },
  {
    title: "Tren Internet of Things di Industri Manufaktur 2026",
    slug: "tren-iot-manufaktur-2026",
    excerpt: "Otomasi pabrik pintar dengan sensor cerdas dan edge computing untuk mengurangi downtime mesin secara terukur dan prediktif.",
    date: "02 Juni 2026",
    category: "Internet of Things",
    timestamp: new Date("2026-06-02").getTime(),
    author: {
      name: "Andi Saputra",
      avatar: "https://i.pravatar.cc/150?u=andi",
      role: "IoT Specialist"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["IoT", "Manufacturing", "Automation", "Sensors"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Era Baru Manufaktur"),
  },
  {
    title: "Penerapan LLM pada Chatbot Customer Service",
    slug: "penerapan-llm-chatbot",
    excerpt: "Evaluasi teknis dan performa integrasi Large Language Models (LLM) sebagai garda terdepan layanan pelanggan otomatis.",
    date: "15 Mei 2026",
    category: "Machine Learning / Artificial Intelligence",
    timestamp: new Date("2026-05-15").getTime(),
    author: {
      name: "Dina Mariana",
      avatar: "https://i.pravatar.cc/150?u=dina",
      role: "AI Engineer"
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=85",
    tags: ["LLM", "AI", "Chatbot", "Customer Service"],
    readingTime: "9 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Revolusi Chatbot dengan LLM"),
  },
  {
    title: "Optimasi Performa Aplikasi Mobile React Native",
    slug: "optimasi-performa-react-native",
    excerpt: "Teknik rendering tingkat lanjut dan manajemen state yang efisien untuk memastikan aplikasi cross-platform berjalan secepat native.",
    date: "20 April 2026",
    category: "Mobile Development",
    timestamp: new Date("2026-04-20").getTime(),
    author: {
      name: "Kevin Pratama",
      avatar: "https://i.pravatar.cc/150?u=kevin",
      role: "Mobile Developer"
    },
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=85",
    tags: ["React Native", "Performance", "Mobile", "iOS", "Android"],
    readingTime: "10 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Tantangan Performa React Native"),
  },
  {
    title: "Beralih ke Server Components di Next.js: Panduan Praktis",
    slug: "beralih-ke-server-components",
    excerpt: "Memahami paradigma baru React Server Components dan studi kasus penerapannya pada aplikasi web dengan lalu lintas tinggi.",
    date: "05 Maret 2026",
    category: "Web Development",
    timestamp: new Date("2026-03-05").getTime(),
    author: {
      name: "Sarah Wijaya",
      avatar: "https://i.pravatar.cc/150?u=sarah",
      role: "Frontend Lead"
    },
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=85",
    tags: ["Next.js", "React", "Web Dev", "Server Components"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mengenal Server Components"),
  },
  {
    title: "Strategi API Management untuk Integrasi Sistem Enterprise",
    slug: "strategi-api-management-system-integration",
    excerpt: "Panduan membangun ekosistem API yang terstruktur, aman, dan scalable untuk menghubungkan berbagai sistem enterprise secara efisien.",
    date: "18 Februari 2026",
    category: "API Management & System Integration",
    timestamp: new Date("2026-02-18").getTime(),
    author: {
      name: "Fajar Hidayat",
      avatar: "https://i.pravatar.cc/150?u=fajar",
      role: "System Integration Architect"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=85",
    tags: ["API Management", "System Integration", "REST API", "Microservices"],
    readingTime: "8 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Memahami API Management & System Integration"),
  },
  {
    title: "Membangun Creative Content yang Efektif di Era Digital",
    slug: "membangun-creative-content-era-digital",
    excerpt: "Strategi produksi creative content dan digital media untuk membangun brand awareness, meningkatkan engagement, dan memperkuat komunikasi dengan audiens.",
    date: "28 Januari 2026",
    category: "Creative Content & Digital Media",
    timestamp: new Date("2026-01-28").getTime(),
    author: {
      name: "Nadia Putri",
      avatar: "https://i.pravatar.cc/150?u=nadia",
      role: "Creative Content Strategist"
    },
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=85",
    tags: ["Content Strategy", "Digital Media", "Creative", "Branding"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Pentingnya Creative Content di Era Digital"),
  },
  {
    title: "Membangun Quality Assurance Modern untuk Aplikasi Skala Enterprise",
    slug: "quality-assurance-testing-aplikasi-enterprise",
    excerpt: "Pendekatan modern dalam Quality Assurance dan software testing untuk memastikan aplikasi tetap stabil, aman, dan bebas dari bug kritis sebelum dirilis.",
    date: "12 Januari 2026",
    category: "Quality Assurance (QA) / Testing",
    timestamp: new Date("2026-01-12").getTime(),
    author: {
      name: "Arief Setiawan",
      avatar: "https://i.pravatar.cc/150?u=arief",
      role: "QA Engineering Lead"
    },
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85",
    tags: ["Quality Assurance", "Software Testing", "Automation Testing", "QA"],
    readingTime: "9 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mengapa Quality Assurance Sangat Penting?"),
  },
    {
    title: "Membangun Game Mobile dengan Unity untuk Pasar Indonesia",
    slug: "membangun-game-mobile-dengan-unity",
    excerpt: "Panduan membangun game mobile menggunakan Unity, mulai dari perancangan gameplay, optimasi performa, hingga persiapan aplikasi sebelum dirilis ke Android dan iOS.",
    date: "05 Januari 2026",
    category: "Game Development",
    timestamp: new Date("2026-01-05").getTime(),
    author: {
      name: "Dimas Prakoso",
      avatar: "https://i.pravatar.cc/150?u=dimas",
      role: "Game Developer"
    },
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=85",
    tags: ["Game Development", "Unity", "Mobile Game", "Android", "iOS"],
    readingTime: "8 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Memulai Pengembangan Game Mobile"),
  },
  {
    title: "Optimasi Performa Game untuk Pengalaman Bermain yang Lebih Lancar",
    slug: "optimasi-performa-game",
    excerpt: "Teknik optimasi game untuk meningkatkan frame rate, mengurangi penggunaan memory, dan memastikan pengalaman bermain tetap lancar di berbagai spesifikasi perangkat.",
    date: "18 Desember 2025",
    category: "Game Development",
    timestamp: new Date("2025-12-18").getTime(),
    author: {
      name: "Raka Aditya",
      avatar: "https://i.pravatar.cc/150?u=raka",
      role: "Game Programmer"
    },
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1600&q=85",
    tags: ["Game Development", "Game Optimization", "Performance", "Unity", "C#"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Pentingnya Optimasi Performa Game"),
  },
  {
    title: "Memahami Game Design dan Gameplay Loop yang Menarik",
    slug: "memahami-game-design-gameplay-loop",
    excerpt: "Mengenal prinsip dasar game design dan cara merancang gameplay loop yang membuat pemain terus tertarik untuk kembali bermain.",
    date: "30 November 2025",
    category: "Game Development",
    timestamp: new Date("2025-11-30").getTime(),
    author: {
      name: "Kevin Mahendra",
      avatar: "https://i.pravatar.cc/150?u=kevin-game",
      role: "Game Designer"
    },
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=85",
    tags: ["Game Design", "Gameplay", "Game Development", "UX", "Game Mechanics"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Dasar-Dasar Game Design"),
  },
  {
    title: "Multiplayer Game Development: Arsitektur Server dan Sinkronisasi Pemain",
    slug: "multiplayer-game-development-arsitektur-server",
    excerpt: "Membahas konsep dasar multiplayer game, komunikasi client-server, sinkronisasi state pemain, serta pendekatan untuk membangun game online yang scalable.",
    date: "14 Oktober 2025",
    category: "Game Development",
    timestamp: new Date("2025-10-14").getTime(),
    author: {
      name: "Yoga Firmansyah",
      avatar: "https://i.pravatar.cc/150?u=yoga",
      role: "Multiplayer Game Engineer"
    },
    image: "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=1600&q=85",
    tags: ["Multiplayer", "Game Server", "Networking", "Game Development", "Backend"],
    readingTime: "10 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mengenal Multiplayer Game Development"),
  },


  {
    title: "Eksplorasi Mendalam: API Management & System Integration (Bagian 1)",
    slug: "api-management-system-integration-bagian-1",
    excerpt: "Artikel seri ke-1 yang membahas tren, tantangan, dan solusi inovatif di bidang API Management & System Integration untuk kebutuhan industri masa kini.",
    date: "04 Januari 2026",
    category: "API Management & System Integration",
    timestamp: 1767484800000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=api-management-system-integration-bagian-1",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["API", "Inovasi", "Teknologi", "Insight"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami API Management & System Integration - Seri 1"),
  },
  {
    title: "Eksplorasi Mendalam: API Management & System Integration (Bagian 2)",
    slug: "api-management-system-integration-bagian-2",
    excerpt: "Artikel seri ke-2 yang membahas tren, tantangan, dan solusi inovatif di bidang API Management & System Integration untuk kebutuhan industri masa kini.",
    date: "07 Januari 2026",
    category: "API Management & System Integration",
    timestamp: 1767744000000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=api-management-system-integration-bagian-2",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["API", "Inovasi", "Teknologi", "Insight"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami API Management & System Integration - Seri 2"),
  },
  {
    title: "Eksplorasi Mendalam: API Management & System Integration (Bagian 3)",
    slug: "api-management-system-integration-bagian-3",
    excerpt: "Artikel seri ke-3 yang membahas tren, tantangan, dan solusi inovatif di bidang API Management & System Integration untuk kebutuhan industri masa kini.",
    date: "10 Januari 2026",
    category: "API Management & System Integration",
    timestamp: 1768003200000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=api-management-system-integration-bagian-3",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["API", "Inovasi", "Teknologi", "Insight"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami API Management & System Integration - Seri 3"),
  },
  {
    title: "Eksplorasi Mendalam: Blockchain (Bagian 1)",
    slug: "blockchain-bagian-1",
    excerpt: "Artikel seri ke-1 yang membahas tren, tantangan, dan solusi inovatif di bidang Blockchain untuk kebutuhan industri masa kini.",
    date: "13 Januari 2026",
    category: "Blockchain",
    timestamp: 1768262400000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=blockchain-bagian-1",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Blockchain", "Inovasi", "Teknologi", "Insight"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Blockchain - Seri 1"),
  },
  {
    title: "Eksplorasi Mendalam: Blockchain (Bagian 2)",
    slug: "blockchain-bagian-2",
    excerpt: "Artikel seri ke-2 yang membahas tren, tantangan, dan solusi inovatif di bidang Blockchain untuk kebutuhan industri masa kini.",
    date: "16 Januari 2026",
    category: "Blockchain",
    timestamp: 1768521600000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=blockchain-bagian-2",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Blockchain", "Inovasi", "Teknologi", "Insight"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Blockchain - Seri 2"),
  },
  {
    title: "Eksplorasi Mendalam: Blockchain (Bagian 3)",
    slug: "blockchain-bagian-3",
    excerpt: "Artikel seri ke-3 yang membahas tren, tantangan, dan solusi inovatif di bidang Blockchain untuk kebutuhan industri masa kini.",
    date: "19 Januari 2026",
    category: "Blockchain",
    timestamp: 1768780800000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=blockchain-bagian-3",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Blockchain", "Inovasi", "Teknologi", "Insight"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Blockchain - Seri 3"),
  },
  {
    title: "Eksplorasi Mendalam: Cloud Computing (Bagian 1)",
    slug: "cloud-computing-bagian-1",
    excerpt: "Artikel seri ke-1 yang membahas tren, tantangan, dan solusi inovatif di bidang Cloud Computing untuk kebutuhan industri masa kini.",
    date: "22 Januari 2026",
    category: "Cloud Computing",
    timestamp: 1769040000000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=cloud-computing-bagian-1",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Cloud", "Inovasi", "Teknologi", "Insight"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Cloud Computing - Seri 1"),
  },
  {
    title: "Eksplorasi Mendalam: Cloud Computing (Bagian 2)",
    slug: "cloud-computing-bagian-2",
    excerpt: "Artikel seri ke-2 yang membahas tren, tantangan, dan solusi inovatif di bidang Cloud Computing untuk kebutuhan industri masa kini.",
    date: "25 Januari 2026",
    category: "Cloud Computing",
    timestamp: 1769299200000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=cloud-computing-bagian-2",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Cloud", "Inovasi", "Teknologi", "Insight"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Cloud Computing - Seri 2"),
  },
  {
    title: "Eksplorasi Mendalam: Cloud Computing (Bagian 3)",
    slug: "cloud-computing-bagian-3",
    excerpt: "Artikel seri ke-3 yang membahas tren, tantangan, dan solusi inovatif di bidang Cloud Computing untuk kebutuhan industri masa kini.",
    date: "28 Januari 2026",
    category: "Cloud Computing",
    timestamp: 1769558400000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=cloud-computing-bagian-3",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Cloud", "Inovasi", "Teknologi", "Insight"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Cloud Computing - Seri 3"),
  },
  {
    title: "Eksplorasi Mendalam: Creative Content & Digital Media (Bagian 1)",
    slug: "creative-content-digital-media-bagian-1",
    excerpt: "Artikel seri ke-1 yang membahas tren, tantangan, dan solusi inovatif di bidang Creative Content & Digital Media untuk kebutuhan industri masa kini.",
    date: "31 Januari 2026",
    category: "Creative Content & Digital Media",
    timestamp: 1769817600000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=creative-content-digital-media-bagian-1",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Creative", "Inovasi", "Teknologi", "Insight"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Creative Content & Digital Media - Seri 1"),
  },
  {
    title: "Eksplorasi Mendalam: Creative Content & Digital Media (Bagian 2)",
    slug: "creative-content-digital-media-bagian-2",
    excerpt: "Artikel seri ke-2 yang membahas tren, tantangan, dan solusi inovatif di bidang Creative Content & Digital Media untuk kebutuhan industri masa kini.",
    date: "03 Februari 2026",
    category: "Creative Content & Digital Media",
    timestamp: 1770076800000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=creative-content-digital-media-bagian-2",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Creative", "Inovasi", "Teknologi", "Insight"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Creative Content & Digital Media - Seri 2"),
  },
  {
    title: "Eksplorasi Mendalam: Creative Content & Digital Media (Bagian 3)",
    slug: "creative-content-digital-media-bagian-3",
    excerpt: "Artikel seri ke-3 yang membahas tren, tantangan, dan solusi inovatif di bidang Creative Content & Digital Media untuk kebutuhan industri masa kini.",
    date: "06 Februari 2026",
    category: "Creative Content & Digital Media",
    timestamp: 1770336000000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=creative-content-digital-media-bagian-3",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Creative", "Inovasi", "Teknologi", "Insight"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Creative Content & Digital Media - Seri 3"),
  },
  {
    title: "Eksplorasi Mendalam: Data Science (Bagian 1)",
    slug: "data-science-bagian-1",
    excerpt: "Artikel seri ke-1 yang membahas tren, tantangan, dan solusi inovatif di bidang Data Science untuk kebutuhan industri masa kini.",
    date: "09 Februari 2026",
    category: "Data Science",
    timestamp: 1770595200000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=data-science-bagian-1",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Data", "Inovasi", "Teknologi", "Insight"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Data Science - Seri 1"),
  },
  {
    title: "Eksplorasi Mendalam: Data Science (Bagian 2)",
    slug: "data-science-bagian-2",
    excerpt: "Artikel seri ke-2 yang membahas tren, tantangan, dan solusi inovatif di bidang Data Science untuk kebutuhan industri masa kini.",
    date: "12 Februari 2026",
    category: "Data Science",
    timestamp: 1770854400000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=data-science-bagian-2",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Data", "Inovasi", "Teknologi", "Insight"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Data Science - Seri 2"),
  },
  {
    title: "Eksplorasi Mendalam: Data Science (Bagian 3)",
    slug: "data-science-bagian-3",
    excerpt: "Artikel seri ke-3 yang membahas tren, tantangan, dan solusi inovatif di bidang Data Science untuk kebutuhan industri masa kini.",
    date: "15 Februari 2026",
    category: "Data Science",
    timestamp: 1771113600000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=data-science-bagian-3",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Data", "Inovasi", "Teknologi", "Insight"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Data Science - Seri 3"),
  },
  {
    title: "Eksplorasi Mendalam: Internet of Things (Bagian 1)",
    slug: "internet-of-things-bagian-1",
    excerpt: "Artikel seri ke-1 yang membahas tren, tantangan, dan solusi inovatif di bidang Internet of Things untuk kebutuhan industri masa kini.",
    date: "18 Februari 2026",
    category: "Internet of Things",
    timestamp: 1771372800000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=internet-of-things-bagian-1",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Internet", "Inovasi", "Teknologi", "Insight"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Internet of Things - Seri 1"),
  },
  {
    title: "Eksplorasi Mendalam: Internet of Things (Bagian 2)",
    slug: "internet-of-things-bagian-2",
    excerpt: "Artikel seri ke-2 yang membahas tren, tantangan, dan solusi inovatif di bidang Internet of Things untuk kebutuhan industri masa kini.",
    date: "21 Februari 2026",
    category: "Internet of Things",
    timestamp: 1771632000000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=internet-of-things-bagian-2",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Internet", "Inovasi", "Teknologi", "Insight"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Internet of Things - Seri 2"),
  },
  {
    title: "Eksplorasi Mendalam: Internet of Things (Bagian 3)",
    slug: "internet-of-things-bagian-3",
    excerpt: "Artikel seri ke-3 yang membahas tren, tantangan, dan solusi inovatif di bidang Internet of Things untuk kebutuhan industri masa kini.",
    date: "24 Februari 2026",
    category: "Internet of Things",
    timestamp: 1771891200000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=internet-of-things-bagian-3",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Internet", "Inovasi", "Teknologi", "Insight"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Internet of Things - Seri 3"),
  },
  {
    title: "Eksplorasi Mendalam: Machine Learning / Artificial Intelligence (Bagian 1)",
    slug: "machine-learning-artificial-intelligence-bagian-1",
    excerpt: "Artikel seri ke-1 yang membahas tren, tantangan, dan solusi inovatif di bidang Machine Learning / Artificial Intelligence untuk kebutuhan industri masa kini.",
    date: "27 Februari 2026",
    category: "Machine Learning / Artificial Intelligence",
    timestamp: 1772150400000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=machine-learning-artificial-intelligence-bagian-1",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Machine", "Inovasi", "Teknologi", "Insight"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Machine Learning / Artificial Intelligence - Seri 1"),
  },
  {
    title: "Eksplorasi Mendalam: Machine Learning / Artificial Intelligence (Bagian 2)",
    slug: "machine-learning-artificial-intelligence-bagian-2",
    excerpt: "Artikel seri ke-2 yang membahas tren, tantangan, dan solusi inovatif di bidang Machine Learning / Artificial Intelligence untuk kebutuhan industri masa kini.",
    date: "02 Maret 2026",
    category: "Machine Learning / Artificial Intelligence",
    timestamp: 1772409600000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=machine-learning-artificial-intelligence-bagian-2",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Machine", "Inovasi", "Teknologi", "Insight"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Machine Learning / Artificial Intelligence - Seri 2"),
  },
  {
    title: "Eksplorasi Mendalam: Machine Learning / Artificial Intelligence (Bagian 3)",
    slug: "machine-learning-artificial-intelligence-bagian-3",
    excerpt: "Artikel seri ke-3 yang membahas tren, tantangan, dan solusi inovatif di bidang Machine Learning / Artificial Intelligence untuk kebutuhan industri masa kini.",
    date: "05 Maret 2026",
    category: "Machine Learning / Artificial Intelligence",
    timestamp: 1772668800000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=machine-learning-artificial-intelligence-bagian-3",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Machine", "Inovasi", "Teknologi", "Insight"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Machine Learning / Artificial Intelligence - Seri 3"),
  },
  {
    title: "Eksplorasi Mendalam: Mobile Development (Bagian 1)",
    slug: "mobile-development-bagian-1",
    excerpt: "Artikel seri ke-1 yang membahas tren, tantangan, dan solusi inovatif di bidang Mobile Development untuk kebutuhan industri masa kini.",
    date: "08 Maret 2026",
    category: "Mobile Development",
    timestamp: 1772928000000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=mobile-development-bagian-1",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Mobile", "Inovasi", "Teknologi", "Insight"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Mobile Development - Seri 1"),
  },
  {
    title: "Eksplorasi Mendalam: Mobile Development (Bagian 2)",
    slug: "mobile-development-bagian-2",
    excerpt: "Artikel seri ke-2 yang membahas tren, tantangan, dan solusi inovatif di bidang Mobile Development untuk kebutuhan industri masa kini.",
    date: "11 Maret 2026",
    category: "Mobile Development",
    timestamp: 1773187200000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=mobile-development-bagian-2",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Mobile", "Inovasi", "Teknologi", "Insight"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Mobile Development - Seri 2"),
  },
  {
    title: "Eksplorasi Mendalam: Mobile Development (Bagian 3)",
    slug: "mobile-development-bagian-3",
    excerpt: "Artikel seri ke-3 yang membahas tren, tantangan, dan solusi inovatif di bidang Mobile Development untuk kebutuhan industri masa kini.",
    date: "14 Maret 2026",
    category: "Mobile Development",
    timestamp: 1773446400000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=mobile-development-bagian-3",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Mobile", "Inovasi", "Teknologi", "Insight"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Mobile Development - Seri 3"),
  },
  {
    title: "Eksplorasi Mendalam: Quality Assurance (QA) / Testing (Bagian 1)",
    slug: "quality-assurance-qa-testing-bagian-1",
    excerpt: "Artikel seri ke-1 yang membahas tren, tantangan, dan solusi inovatif di bidang Quality Assurance (QA) / Testing untuk kebutuhan industri masa kini.",
    date: "17 Maret 2026",
    category: "Quality Assurance (QA) / Testing",
    timestamp: 1773705600000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=quality-assurance-qa-testing-bagian-1",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Quality", "Inovasi", "Teknologi", "Insight"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Quality Assurance (QA) / Testing - Seri 1"),
  },
  {
    title: "Eksplorasi Mendalam: Quality Assurance (QA) / Testing (Bagian 2)",
    slug: "quality-assurance-qa-testing-bagian-2",
    excerpt: "Artikel seri ke-2 yang membahas tren, tantangan, dan solusi inovatif di bidang Quality Assurance (QA) / Testing untuk kebutuhan industri masa kini.",
    date: "20 Maret 2026",
    category: "Quality Assurance (QA) / Testing",
    timestamp: 1773964800000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=quality-assurance-qa-testing-bagian-2",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Quality", "Inovasi", "Teknologi", "Insight"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Quality Assurance (QA) / Testing - Seri 2"),
  },
  {
    title: "Eksplorasi Mendalam: Quality Assurance (QA) / Testing (Bagian 3)",
    slug: "quality-assurance-qa-testing-bagian-3",
    excerpt: "Artikel seri ke-3 yang membahas tren, tantangan, dan solusi inovatif di bidang Quality Assurance (QA) / Testing untuk kebutuhan industri masa kini.",
    date: "23 Maret 2026",
    category: "Quality Assurance (QA) / Testing",
    timestamp: 1774224000000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=quality-assurance-qa-testing-bagian-3",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Quality", "Inovasi", "Teknologi", "Insight"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Quality Assurance (QA) / Testing - Seri 3"),
  },
  {
    title: "Eksplorasi Mendalam: Web Development (Bagian 1)",
    slug: "web-development-bagian-1",
    excerpt: "Artikel seri ke-1 yang membahas tren, tantangan, dan solusi inovatif di bidang Web Development untuk kebutuhan industri masa kini.",
    date: "26 Maret 2026",
    category: "Web Development",
    timestamp: 1774483200000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=web-development-bagian-1",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Web", "Inovasi", "Teknologi", "Insight"],
    readingTime: "5 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Web Development - Seri 1"),
  },
  {
    title: "Eksplorasi Mendalam: Web Development (Bagian 2)",
    slug: "web-development-bagian-2",
    excerpt: "Artikel seri ke-2 yang membahas tren, tantangan, dan solusi inovatif di bidang Web Development untuk kebutuhan industri masa kini.",
    date: "29 Maret 2026",
    category: "Web Development",
    timestamp: 1774742400000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=web-development-bagian-2",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Web", "Inovasi", "Teknologi", "Insight"],
    readingTime: "6 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Web Development - Seri 2"),
  },
  {
    title: "Eksplorasi Mendalam: Web Development (Bagian 3)",
    slug: "web-development-bagian-3",
    excerpt: "Artikel seri ke-3 yang membahas tren, tantangan, dan solusi inovatif di bidang Web Development untuk kebutuhan industri masa kini.",
    date: "01 April 2026",
    category: "Web Development",
    timestamp: 1775001600000,
    author: {
      name: "Tim Editorial BlankOn",
      avatar: "https://i.pravatar.cc/150?u=web-development-bagian-3",
      role: "Subject Matter Expert"
    },
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
    tags: ["Web", "Inovasi", "Teknologi", "Insight"],
    readingTime: "7 min read",
    content: dummyContent.replace(/Pendahuluan/g, "Mendalami Web Development - Seri 3"),
  }
];
