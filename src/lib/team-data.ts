export interface TeamMember {
  name: string;
  role: string;
  desc: string;
  image: string;
  linkedln?: string;
  website?: string;
}

export interface TeamDepartment {
  id: string;
  name: string;
  members: TeamMember[];
}

export const servicesTeamData: Record<string, TeamDepartment[]> = {
  "api-management-system-integration": [
    {
      id: "leader",
      name: "System Architecture & API",
      members: []
    },
    {
      id: "team",
      name: "System Architecture & API",
      members: []
    }
  ],
  "blockchain": [
    {
      id: "leader",
      name: "Blockchain Division",
      members: [
        { name: "Harun Ar Rasyid", role: "Lead Blockchain Division", desc: "Memimpin tim blockchain dan mengelola arsitektur blockchain untuk skalabilitas tinggi dan memastikan keamanan data serta infrastruktur dari ancaman siber.", image: "/foto-harun.jpg", website: 'https://www.harun-rasyid.id', linkedln: 'https://www.linkedin.com/in/harundarat/' },
      ]
    },
    {
      id: "team",
      name: "Smart Contract Development",
      members: [
        { name: "Agent Smart Contract Development", role: "Smart Contract Development", desc: "Mengembangkan dan mengaudit smart contract untuk keamanan dan efisiensi platform digital assets.", image: "https://media.istockphoto.com/id/935228958/id/foto/teknologi-blockchain-dan-konsep-jaringan-pebisnis-memegang-blockchain-teks-di-tangan-dengan.jpg?s=612x612&w=0&k=20&c=itj06isDZSJyarRBEdMp1e4xlPjhf4WioFf1sn5waYk=" },
      ]
    },
    {
      id: "team",
      name: "Web3 Integration",
      members: [
        { name: "Agent Web3 Integration", role: "Web3 Integration", desc: "Mengintegrasikan antarmuka dApp dengan dompet kripto dan jaringan blockchain yang aman dan efisien.", image: "https://media.istockphoto.com/id/2245940619/id/foto/latar-belakang-gerak-dasbor-perdagangan-keuangan-futuristik.jpg?s=612x612&w=0&k=20&c=3e0GI3SGPnSgF5H0C0z_85SiQs5ltyY6wE31ep_BMuE=" },
      ]
    }
  ],
  "cloud-computing": [
    {
      id: "leader",
      name: "Cloud Computing Division",
      members: [
        { name: "Pras Tio Rifki Wijaya", role: "Lead Cloud Computing Division", desc: "Memimpin tim cloud computing dan mengelola arsitektur cloud untuk skalabilitas tinggi dan memastikan keamanan data serta infrastruktur dari ancaman siber.", image: "/foto-prastio.jpg", website: 'https://www.prastio-rifki.id', linkedln: 'https://www.linkedin.com/in/pras-tio-rifki-wijaya-046166243' },
      ]
    },
    {
      id: "team",
      name: "DevOps Engineer",
      members: [
        { name: "Agent DevOps Engineer", role: "DevOps Engineer", desc: "Mengelola pipeline CI/CD dan otomatisasi deployment yang skalabel, efisien, dan aman.", image: "https://media.istockphoto.com/id/2256599389/id/foto/konsep-pengembangan-perangkat-lunak-pengusaha-menggunakan-program-pengkodean-laptop-praktik.jpg?s=612x612&w=0&k=20&c=x62ZJMAZLomq8PzgokczawfMIx-wMBfcF_WUnSQIoDA=" },
      ]
    },
    {
      id: "team",
      name: "Cloud Infrastructure Specialist",
      members: [
        { name: "Agent Cloud Infrastructure Specialist", role: "Cloud Infrastructure Specialist", desc: "Merancang dan mengelola infrastruktur cloud yang optimal, skalabel, efisien, dan aman.", image: "https://images.unsplash.com/photo-1763568258458-ef825ca23fdd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
      ]
    },
    {
      id: "team",
      name: "Cloud Security Architect",
      members: [
        { name: "Agent Cloud Security Architect", role: "Cloud Security Architect", desc: "Menjaga keamanan infrastruktur cloud yang skalabel, efisien, dan aman.", image: "https://images.unsplash.com/photo-1787839253728-f6d42c2cfb8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
      ]
    },
  ],
  "creative-content-digital-media": [
    {
      id: "leader",
      name: "Creative Content Digital Media Division",
      members: [
        { name: "Irfan Fauzi", role: "Lead Creative Content Digital Media Division", desc: "Memimpin tim creative content digital media dan mengelola arsitektur creative content digital media untuk skalabilitas tinggi dan memastikan keamanan data serta infrastruktur dari ancaman siber.", image: "/foto-irfan.jpg", website: 'https://panpaved.carrd.co/', linkedln: 'https://www.linkedin.com/in/irfan-fauzi-b00413234/' },
      ]
    },
    {
      id: "team",
      name: "Creator Digital Content & Creative",
      members: [
        { name: "Agent Creator Digital Content", role: "Creator Digital Content & Creative", desc: "Merancang antarmuka produk dan konten digital yang selaras dengan tujuan bisnis perusahaan.", image: "https://media.istockphoto.com/id/2156590823/id/foto/pembuat-konten-kecerdasan-buatan-seorang-pria-menggunakan-laptop-untuk-berinteraksi-dengan.jpg?s=612x612&w=0&k=20&c=DLD6nqZ7a_vT1UOSwwl81wupK9YPpJbhJd4awMHeP4U=" },
      ]
    },
    {
      id: "team",
      name: "Manajemen Digital Content & Creative",
      members: [
        { name: "Agent Manajemen Digital Content", role: "Manajemen Digital Content & Creative", desc: "Merancang strategi dan memanajemen konten digital dan creative yang selaras dengan tujuan bisnis perusahaan.", image: "https://media.istockphoto.com/id/2098359215/id/foto/konsep-pemasaran-digital-pebisnis-menggunakan-laptop-dengan-dasbor-iklan-analisis-strategi.jpg?s=612x612&w=0&k=20&c=vct1gL6I2aUX-P0Hc5LDhzq0AuVVzFFImEjwTeNCLLk=" },
      ]
    }
  ],
  "data-science": [
    {
      id: "leader",
      name: "Data Science Division",
      members: [
        { name: "Yusuf Indra Rabbani", role: "Lead Data Science Division", desc: "Memimpin tim data science dan mengelola arsitektur data untuk skalabilitas tinggi dan memastikan keamanan data serta infrastruktur dari ancaman siber.", image: "/foto-yusuf.jpg", website: 'https://www.linkedin.com/in/yusuf-indra-rabbani/', linkedln: 'https://www.linkedin.com/in/yusuf-indra-rabbani/' },
      ]
    },
    {
      id: "team",
      name: "Data Analytics",
      members: [
        { name: "Agent Data Analytics", role: "Data Analytics", desc: "Menerapkan teknik analisis data untuk mengekstrak pola dan knowledge dari data dalam jumlah besar, serta melakukan analisis mendalam untuk mendukung pengambilan keputusan strategis.", image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
        { name: "Agent Data Vizualization", role: "Data Vizualization", desc: "Mengubah data kompleks menjadi visualisasi yang informatif dan mudah dipahami untuk mendukung pengambilan keputusan bisnis yang lebih cerdas dan terinformasi.", image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
      ]
    },
    {
      id: "team",
      name: "Data Engineer",
      members: [
        { name: "Agent Data Management", role: "Data Management", desc: "Membangun dan memelihara sistem data untuk mendukung pengambilan keputusan bisnis.", image: "https://images.unsplash.com/vector-1761074651005-97a2e57eef29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
        { name: "Agent Data Integration", role: "Data Integration", desc: "Mengintegrasikan data dari berbagai sumber dan memastikan kualitas serta konsistensi data.", image: "https://images.unsplash.com/vector-1761074651005-97a2e57eef29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
      ]
    },
    {
      id: "team",
      name: "Data Science",
      members: [
        { name: "Agent Data Mining", role: "Data Mining", desc: "Menerapkan teknik mining untuk mengekstrak pola dan knowledge dari data dalam jumlah besar, serta melakukan analisis mendalam untuk mendukung pengambilan keputusan strategis.", image: "https://images.unsplash.com/vector-1774785393008-a70bf5d4d431?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
        { name: "Agent Data Machine Learning", role: "Machine Learning", desc: "Membangun model machine learning untuk memprediksi tren masa depan dan mengotomatisasi proses bisnis.", image: "https://images.unsplash.com/vector-1774785393008-a70bf5d4d431?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
      ]
    },
  ],
  "game-development": [
    {
      id: "leader",
      name: "Game Development Division",
      members: [
        { name: "Rofi Azhar", role: "Lead Game Development Division", desc: "Memimpin tim game development dan mengelola arsitektur game untuk skalabilitas tinggi dan memastikan keamanan data serta infrastruktur dari ancaman siber.", image: "/foto-rofi.jpg", website: 'https://www.linkedin.com/in/rofi-azhar/', linkedln: 'https://www.linkedin.com/in/rofi-azhar/' },
      ]
    },
    {
      id: "team",
      name: "Game Design & Mechanics",
      members: [
        { name: "Agent Game Designer", role: "Game Designer", desc: "Merancang mekanik, alur cerita, dan level untuk pengalaman bermain yang imersif.", image: "https://media.istockphoto.com/id/2167070110/id/foto/desainer-muda-membuat-model-3d-karakter-game-menggunakan-pc.jpg?s=612x612&w=0&k=20&c=qLNYoxd8WAS5AoMP5KiVV8p0MsOaam5PRHa_PRGeAA8=" },
      ]
    },
    {
      id: "team",
      name: "Engine Development",
      members: [
        { name: "Agent Game Engine Development", role: "Engine Development", desc: "Membangun logika permainan dan interaksi menggunakan Unity dan C#.", image: "https://images.unsplash.com/photo-1769149068959-b11392164add?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
      ]
    }
  ],
  "internet-of-things": [
    {
      id: "leader",
      name: "Internet of Things Division",
      members: []
    },
    {
      id: "team",
      name: "Hardware Engineering",
      members: []
    }
  ],
  "machine-learning-ai": [
    {
      id: "leader",
      name: "Machine Learning & AI Division",
      members: [
        { name: "Febrian Avien Wibowo", role: "Lead Machine Learning & AI Division", desc: "Memimpin tim machine learning ai dan mengelola arsitektur machine learning ai untuk skalabilitas tinggi dan memastikan keamanan data serta infrastruktur dari ancaman siber.", image: "/foto-febrian.jpg", website: 'https://febro.fun', linkedln: 'https://www.linkedin.com/in/febrian-a-aa5253256/' },
      ]
    },
    {
      id: "team",
      name: "Machine Learning Models",
      members: [
        { name: "Benjamin White", role: "ML Engineer", desc: "Melatih model AI untuk klasifikasi, prediksi, dan otomasi.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80" },
        { name: "Charlotte Harris", role: "AI Researcher", desc: "Meneliti algoritma terbaru untuk penerapan kecerdasan buatan.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80" },
      ]
    },
    {
      id: "team",
      name: "AI System Integration",
      members: [
        { name: "Marco Kelly", role: "QA Engineer", desc: "Melakukan pengujian ketat untuk memastikan kualitas dan keamanan sistem.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80" },
        { name: "Harper Clark", role: "Test Automation Specialist", desc: "Membangun skrip otomatis untuk pengujian regresi dan performa.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "mobile-development": [
    {
      id: "leader",
      name: "Mobile Development Division",
      members: [
        { name: "Nohan Jaladri Widiarto", role: "Lead Mobile Development Division", desc: "Memimpin tim mobile development dan mengelola arsitektur mobile development untuk skalabilitas tinggi dan memastikan keamanan data serta infrastruktur dari ancaman siber.", image: "/foto-nohan.jpg", website: 'https://portofolionohan.vercel.app/', linkedln: 'https://www.linkedin.com/in/nohanjaladri/' },
      ]
    },
    {
      id: "team",
      name: "iOS Engineering",
      members: [
        { name: "Agent Mobile IOS Developer", role: "iOS Developer", desc: "Mengembangkan dan memelihara aplikasi iOS dengan performa tinggi, memastikan kompatibilitas dengan berbagai perangkat dan versi iOS.", image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=400&fit=crop&q=80" },
        { name: "Agent Mobile IOS Designer", role: "iOS UI/UX Designer", desc: "Merancang antarmuka pengguna yang intuitif dan menarik untuk aplikasi iOS, memastikan pengalaman pengguna yang optimal.", image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=400&h=400&fit=crop&q=80" },
      ]
    },
    {
      id: "team",
      name: "Android Engineering",
      members: [
        { name: "Agent Mobile Android Engineer", role: "Android Developer", desc: "Mengembangkan dan memelihara aplikasi Android dengan performa tinggi, memastikan kompatibilitas dengan berbagai perangkat dan versi Android.", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
        { name: "Agent Mobile UI/UX Designer", role: "Android UI/UX Designer", desc: "Merancang antarmuka yang intuitif dan pengalaman pengguna yang mulus di berbagai platform.", image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
      ]
    }
  ],
  "quality-assurance-qa-testing": [
    {
      id: "leader",
      name: "Quality Assurance QA Testing Division",
      members: []
    },
    {
      id: "team",
      name: "Automation Testing",
      members: []
    }
  ],
  "web-development": [
    {
      id: "leader",
      name: "Web Development Division",
      members: [
        { name: "Galang Arsandy Noverdan Putra", role: "Lead Web Development Division", desc: "Memimpin tim web development dan mengelola arsitektur web untuk skalabilitas tinggi dan memastikan keamanan data serta infrastruktur dari ancaman siber.", image: "/foto-galang.jpg", website: 'https://noverdan.dev', linkedln: 'https://www.linkedin.com/in/galangarsandy/' },
      ]
    },
    {
      id: "team",
      name: "Frontend Development",
      members: [
        { name: "Agent Web Developer", role: "Frontend Developer", desc: "Membangun antarmuka interaktif dan memastikan pengalaman pengguna yang responsif.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
        { name: "Agent Web Designer", role: "Web Designer", desc: "Mendesain antarmuka interaktif dan memastikan pengalaman pengguna yang responsif.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
        { name: "Agent Web Admin", role: "Web Admin", desc: "Membangun antarmuka interaktif dan memastikan pengalaman pengguna yang responsif.", image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" },
      ]
    },
    {
      id: "team",
      name: "Backend Development",
      members: [
        { name: "Agent Backend Developer", role: "Backend Developer", desc: "Mengelola arsitektur server, basis data, dan performa API aplikasi.", image: "https://media.istockphoto.com/id/2222587923/id/foto/asisten-pengkodean-ai-untuk-konsep-pengembangan-perangkat-lunak-kode-pembelajaran-mesin.jpg?s=612x612&w=0&k=20&c=YwJGg3Wsa1zCMDR3BvM8zVFm11BU19FMYzA_RNvxSww=" },
        { name: "Agent Fullstack Developer", role: "Fullstack Developer", desc: "Menghubungkan integrasi frontend dan backend untuk solusi digital yang lengkap.", image: "https://media.istockphoto.com/id/2222587923/id/foto/asisten-pengkodean-ai-untuk-konsep-pengembangan-perangkat-lunak-kode-pembelajaran-mesin.jpg?s=612x612&w=0&k=20&c=YwJGg3Wsa1zCMDR3BvM8zVFm11BU19FMYzA_RNvxSww=" },
      ]
    }
  ],
};

export const serviceNames: Record<string, string> = {
  "api-management-system-integration": "API Management & System Integration",
  "blockchain": "Blockchain",
  "cloud-computing": "Cloud Computing",
  "creative-content-digital-media": "Creative Content & Digital Media",
  "data-science": "Data Science",
  "game-development": "Game Development",
  "internet-of-things": "Internet of Things",
  "machine-learning-ai": "Machine Learning / Artificial Intelligence",
  "mobile-development": "Mobile Development",
  "quality-assurance-qa-testing": "Quality Assurance (QA) / Testing",
  "web-development": "Web Development",
};
