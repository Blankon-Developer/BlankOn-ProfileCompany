export type Portfolio = {
  slug: string;
  title: string;
  client: string;
  year: string;
  industry: string;
  duration: string;
  status: string;
  category: string; // The subcategory (e.g. Landing Page, SaaS)
  service: string; // The main service department (e.g. Web Development)
  excerpt: string;
  contextSituation: string;
  contextMattered: string;
  outcome: string;
  technologies: string[];
  link: string;
};

export const portfolioData: Portfolio[] = [
  {
    slug: "ownafarm",
    title: "OwnaFarm",
    client: "OwnaFarm Inc",
    year: "2024",
    industry: "Agriculture",
    duration: "6 Bulan",
    status: "Delivered",
    category: "Landing Page",
    service: "Web Development",
    excerpt: "Platform digital yang revolusioner untuk membantu investasi pertanian.",
    contextSituation: "Sebelum proyek dimulai, investasi pertanian tradisional sulit diakses secara digital oleh masyarakat umum, sehingga menghambat potensi pendanaan.",
    contextMattered: "Sistem harus sangat mudah digunakan oleh pengguna awam, transparan dalam laporan, dan aman dalam transaksi.",
    outcome: "Kami membangun platform terintegrasi yang menyatukan workflow investasi digital, mulai dari pendaftaran hingga monitoring hasil kebun secara real-time.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: "https://ownafarm.xyz"
  },
  {
    slug: "riveprotocol",
    title: "Rive Protocol",
    client: "Rive",
    year: "2024",
    industry: "Blockchain",
    duration: "4 Months",
    status: "Delivered",
    category: "blockchain",
    service: "Blockchain",
    excerpt: "Platform dan dashboard ekosistem desentralisasi untuk Rive Protocol.",
    contextSituation: "Rive Protokol membutuhkan antarmuka web modern yang mampu menjelaskan kompleksitas teknologi blockchain mereka secara sederhana ke investor.",
    contextMattered: "Desain harus sangat futuristik, responsif, dan interaktif tanpa mengorbankan waktu muat (load time).",
    outcome: "Kami menghadirkan antarmuka (frontend) yang cepat, modern, dan sangat responsif, dilengkapi animasi mikro untuk memukau audiens.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Web3.js"],
    link: "https://riveprotocol.tech"
  },
  {
    slug: "creon-web",
    title: "Creon Web",
    client: "Creon",
    year: "2024",
    industry: "Corporate / Tech",
    duration: "3 Months",
    status: "Delivered",
    category: "Corporate Website",
    service: "Web Development",
    excerpt: "Website korporat modern dengan estetika dark mode premium.",
    contextSituation: "Perusahaan membutuhkan penyegaran identitas digital besar-besaran untuk menargetkan segmen enterprise B2B yang lebih tinggi.",
    contextMattered: "Performa tinggi (skor Lighthouse 95+), optimasi SEO yang sempurna, dan manajemen konten (CMS) yang fleksibel untuk tim marketing.",
    outcome: "Sebuah website profil dinamis yang terintegrasi penuh dengan CMS modern, meningkatkan konversi prospek B2B hingga 40%.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    link: "https://creon-web-chi.vercel.app/"
  },
  {
    slug: "fe-sociotask",
    title: "SocioTask",
    client: "SocioTask",
    year: "2024",
    industry: "Productivity",
    duration: "5 Months",
    status: "Delivered",
    category: "SaaS",
    service: "Web Development",
    excerpt: "Aplikasi manajemen tugas (task management) berbasis komunitas.",
    contextSituation: "Sistem manajemen tugas biasa dirasa kurang memiliki elemen sosial dan kolaborasi langsung yang membuat tim tetap termotivasi.",
    contextMattered: "Fokus pada interaksi real-time antar pengguna, antarmuka yang bersih, dan skalabilitas untuk menangani ribuan tugas secara serentak.",
    outcome: "Sistem manajemen interaktif dan responsif di mana pengguna dapat mendelegasikan tugas dan berkolaborasi dalam papan proyek bergaya Kanban.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    link: "https://fe-sociotask.vercel.app/"
  },
  {
    slug: "kitchencraft",
    title: "KitchenCraft",
    client: "KitchenCraft",
    year: "2024",
    industry: "E-Commerce",
    duration: "4 Months",
    status: "Delivered",
    category: "E-Commerce",
    service: "Web Development",
    excerpt: "Toko online e-commerce untuk perlengkapan dapur premium.",
    contextSituation: "Tingkat konversi dan penjualan ritel offline menurun, sehingga klien membutuhkan channel online baru yang berstandar internasional.",
    contextMattered: "Proses checkout yang mulus tanpa hambatan, visual produk yang menawan, dan sistem inventarisasi yang terhubung otomatis.",
    outcome: "Kenaikan tingkat konversi penjualan online secara signifikan, didorong oleh alur belanja dan navigasi UI yang intuitif.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify API"],
    link: "https://kitchencraft-eight.vercel.app/"
  },
  {
    slug: "areyouai",
    title: "Are You AI",
    client: "Internal / Open Source",
    year: "2024",
    industry: "AI Tools",
    duration: "2 Months",
    status: "Delivered",
    category: "Classification",
    service: "Machine Learning / AI",
    excerpt: "Model NLP untuk mendeteksi apakah teks dihasilkan oleh AI (ChatGPT, dll).",
    contextSituation: "Maraknya penggunaan teks AI dalam dunia akademis dan jurnalistik membuat verifikasi orisinalitas tulisan semakin sulit.",
    contextMattered: "Tingkat akurasi tinggi dengan angka False Positive yang sangat minim, serta latensi API yang rendah untuk penggunaan real-time.",
    outcome: "Sebuah API klasifikasi teks ringan dengan akurasi memuaskan yang bisa diintegrasikan ke platform CMS manapun.",
    technologies: ["Python", "TensorFlow", "FastAPI", "HuggingFace"],
    link: "https://github.com/AganFebro/areyouai"
  },
  {
    slug: "yt-automation",
    title: "YT Automation",
    client: "Independent Creators",
    year: "2024",
    industry: "Digital Media",
    duration: "3 Months",
    status: "Delivered",
    category: "Automation",
    service: "Machine Learning / AI",
    excerpt: "Pipeline otomatisasi pembuatan video YouTube pendek (Shorts).",
    contextSituation: "Kreator konten menghabiskan banyak waktu mengedit video harian secara manual yang memicu burnout.",
    contextMattered: "Otomatisasi end-to-end dari skrip, pengisi suara (TTS), pengumpulan aset stok video, hingga rendering final.",
    outcome: "Sebuah pipeline utuh yang berhasil menghemat hingga 80% waktu produksi video harian para kreator.",
    technologies: ["Python", "OpenCV", "FFmpeg", "OpenAI API"],
    link: "https://github.com/AganFebro/yt-automation"
  },
  {
    slug: "fhast",
    title: "Fhast",
    client: "Open Source",
    year: "2024",
    industry: "Tech Infrastructure",
    duration: "Ongoing",
    status: "In Progress",
    category: "Optimization",
    service: "Machine Learning / AI",
    excerpt: "Library eksperimental untuk mempercepat inferensi Machine Learning.",
    contextSituation: "Inferensi model AI di edge device atau perangkat berspesifikasi rendah masih sangat lambat dan memakan memori tinggi.",
    contextMattered: "Ukuran model pasca-kompilasi yang kecil, dan eksekusi instruksi secepat mungkin tanpa mengorbankan banyak akurasi.",
    outcome: "Framework ringan untuk edge ML yang mampu memangkas waktu inferensi dalam skenario pengujian tertentu.",
    technologies: ["Python", "C++", "CUDA"],
    link: "https://github.com/AganFebro/fhast"
  },
  {
    slug: "alttab",
    title: "AltTab ML",
    client: "Productivity",
    year: "2024",
    industry: "Software",
    duration: "3 Months",
    status: "Delivered",
    category: "Computer Vision",
    service: "Machine Learning / AI",
    excerpt: "Navigasi sistem komputer pintar berbasis visi komputer (computer vision).",
    contextSituation: "Beberapa skenario pengguna (aksesibilitas) menuntut perlunya kontrol PC tanpa menyentuh keyboard atau mouse.",
    contextMattered: "Deteksi hand-gesture (gestur tangan) secara real-time yang akurat, tangguh di bawah kondisi pencahayaan rendah.",
    outcome: "Aplikasi desktop responsif yang mendeteksi lambaian tangan untuk bernavigasi dan bertukar jendela program dengan instan.",
    technologies: ["Python", "OpenCV", "MediaPipe"],
    link: "https://github.com/AganFebro/AltTab"
  }
];
