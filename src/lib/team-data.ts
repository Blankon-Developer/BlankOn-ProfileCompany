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
      id: "architecture",
      name: "System Architecture & API",
      members: [
        { name: "Nikolas Gibbons", role: "Backend Developer", desc: "Mengelola arsitektur server, basis data, dan performa API aplikasi.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80", linkedln: 'https://www.linkedin.com/in/pras-tio-rifki-wijaya-046166243', website: 'https://www.prastio-rifki.id' },
        { name: "Zahra Christensen", role: "Integration Specialist", desc: "Menghubungkan layanan pihak ketiga dan memastikan sinkronisasi data real-time.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80", linkedln: 'https://www.linkedin.com/in/pras-tio-rifki-wijaya-046166243', website: 'https://www.google.com' },
        { name: "Zahra0", role: "0", desc: "Menghubungkan layanan pihak ketiga dan memastikan sinkronisasi data real-time.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80", linkedln: 'https://www.linkedin.com/in/pras-tio-rifki-wijaya-046166243', website: 'https://www.google.com' },
        { name: "Zahra1", role: "1", desc: "Menghubungkan layanan pihak ketiga dan memastikan sinkronisasi data real-time.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80", linkedln: 'https://www.linkedin.com/in/pras-tio-rifki-wijaya-046166243', website: 'https://www.google.com' },
        { name: "Zahra2", role: "2", desc: "Menghubungkan layanan pihak ketiga dan memastikan sinkronisasi data real-time.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80", linkedln: 'https://www.linkedin.com/in/pras-tio-rifki-wijaya-046166243', website: 'https://www.google.com' },
        { name: "Zahra3", role: "3", desc: "Menghubungkan layanan pihak ketiga dan memastikan sinkronisasi data real-time.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80", linkedln: 'https://www.linkedin.com/in/pras-tio-rifki-wijaya-046166243', website: 'https://www.google.com' },
        { name: "Zahra4", role: "4", desc: "Menghubungkan layanan pihak ketiga dan memastikan sinkronisasi data real-time.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "blockchain": [
    {
      id: "smart-contract",
      name: "Smart Contract Development",
      members: [
        { name: "Lucas Vance", role: "Blockchain Engineer", desc: "Mengembangkan dan mengaudit smart contract untuk keamanan dan efisiensi.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80" },
      ]
    },
    {
      id: "web3",
      name: "Web3 Integration",
      members: [
        { name: "Emma Wright", role: "Web3 Developer", desc: "Mengintegrasikan antarmuka dApp dengan dompet kripto dan jaringan blockchain.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "cloud-computing": [
    {
      id: "infrastructure",
      name: "Cloud Infrastructure",
      members: [
        { name: "Oliver Scott", role: "DevOps Engineer", desc: "Merancang dan mengelola arsitektur cloud untuk skalabilitas tinggi.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80" },
        { name: "Mia Carter", role: "Cloud Security Specialist", desc: "Memastikan keamanan data dan infrastruktur dari ancaman siber.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "creative-content-digital-media": [
    {
      id: "design",
      name: "UI/UX Design",
      members: [
        { name: "Caitlyn King", role: "Product Designer", desc: "Merancang antarmuka produk yang selaras dengan tujuan bisnis perusahaan.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&q=80" },
      ]
    },
    {
      id: "content",
      name: "Digital Campaigns",
      members: [
        { name: "Sophia Lewis", role: "Content Strategist", desc: "Menciptakan narasi visual dan strategi kampanye digital yang berdampak.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "data-science": [
    {
      id: "analytics",
      name: "Data Analytics",
      members: [
        { name: "William Davis", role: "Data Scientist", desc: "Menganalisis pola data untuk mendukung pengambilan keputusan bisnis.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80" },
        { name: "Isabella Martinez", role: "Data Analyst", desc: "Membuat visualisasi data dan dashboard performa.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "game-development": [
    {
      id: "game-design",
      name: "Game Design & Mechanics",
      members: [
        { name: "James Anderson", role: "Lead Game Designer", desc: "Merancang mekanik, alur cerita, dan level untuk pengalaman bermain yang imersif.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80" },
      ]
    },
    {
      id: "game-dev",
      name: "Engine Development",
      members: [
        { name: "Ava Thomas", role: "Unity Developer", desc: "Membangun logika permainan dan interaksi menggunakan Unity dan C#.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "internet-of-things": [
    {
      id: "hardware",
      name: "Hardware Engineering",
      members: [
        { name: "Ethan Moore", role: "IoT Engineer", desc: "Merakit dan memprogram sensor serta perangkat mikrokontroler.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "machine-learning-ai": [
    {
      id: "ml-model",
      name: "Machine Learning Models",
      members: [
        { name: "Benjamin White", role: "ML Engineer", desc: "Melatih model AI untuk klasifikasi, prediksi, dan otomasi.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80" },
        { name: "Charlotte Harris", role: "AI Researcher", desc: "Meneliti algoritma terbaru untuk penerapan kecerdasan buatan.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80" },
      ]
    },
    {
      id: "ml-system",
      name: "AI System Integration",
      members: [
        { name: "Marco Kelly", role: "QA Engineer", desc: "Melakukan pengujian ketat untuk memastikan kualitas dan keamanan sistem.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80" },
        { name: "Harper Clark", role: "Test Automation Specialist", desc: "Membangun skrip otomatis untuk pengujian regresi dan performa.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "mobile-development": [
    {
      id: "ios",
      name: "iOS Engineering",
      members: [
        { name: "Sienna Hewitt", role: "iOS Developer", desc: "Fokus pada pengembangan aplikasi native untuk ekosistem Apple.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1bf98c?w=400&h=400&fit=crop&q=80" },
      ]
    },
    {
      id: "android",
      name: "Android & Cross-Platform",
      members: [
        { name: "Lily-Rose Chedjou", role: "Android Developer", desc: "Membangun aplikasi mobile performa tinggi untuk pengguna Android.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80" },
        { name: "Zaid Schwartz", role: "Mobile UI Engineer", desc: "Menerjemahkan desain mobile ke dalam interaksi yang presisi.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "quality-assurance-qa-testing": [
    {
      id: "automation",
      name: "Automation Testing",
      members: [
        { name: "Marco Kelly", role: "QA Engineer", desc: "Melakukan pengujian ketat untuk memastikan kualitas dan keamanan sistem.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80" },
        { name: "Harper Clark", role: "Test Automation Specialist", desc: "Membangun skrip otomatis untuk pengujian regresi dan performa.", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&q=80" },
      ]
    }
  ],
  "web-development": [
    {
      id: "frontend",
      name: "Frontend Development",
      members: [
        { name: "Amélie Laurent", role: "Frontend Developer", desc: "Membangun antarmuka interaktif dan memastikan pengalaman pengguna yang responsif.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80" },
      ]
    },
    {
      id: "backend",
      name: "Backend Development",
      members: [
        { name: "Nikolas Gibbons", role: "Backend Developer", desc: "Mengelola arsitektur server, basis data, dan performa API aplikasi.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80" },
        { name: "Zahra Christensen", role: "Fullstack Developer", desc: "Menghubungkan integrasi frontend dan backend untuk solusi digital yang lengkap.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&q=80" },
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
