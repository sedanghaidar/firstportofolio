import {
  Experience,
  Project,
  SkillGroup,
  Education,
  Certification,
  ContactInfo,
  Stat,
} from "./types";

export const stats: Stat[] = [
  { label: "GPA", value: "3.82/4.00", icon: "graduation" },
  { label: "Internship", value: "1+ Enterprise", icon: "briefcase" },
  { label: "Award", value: "1st Place Poster Competition", icon: "trophy" },
  { label: "Projects", value: "5+ Live Projects", icon: "code" },
];

export const experiences: Experience[] = [
  {
    id: "diskominfo",
    role: "Developer Intern",
    company: "Dinas Komunikasi dan Informasi Provinsi Jawa Tengah",
    duration: "Agustus – Oktober 2025",
    category: "code",
    description:
      "Migrasi backend Laravel 7 → 11 dan upgrade aplikasi mobile Flutter untuk sistem manajemen event internal pemerintah.",
    bullets: [
      "Migrasi backend Laravel 7 → 11, upgrade Flutter",
      "Fitur: digital attendance, distribusi materi, manajemen akun, institusi & pembicara",
      "Redesign UI/UX total untuk sistem enterprise",
      "Kolaborasi dalam tim: 2 developer + 1 Project Manager",
    ],
  },
  {
    id: "teaching-assistant",
    role: "Teaching Assistant",
    company: "Universitas Amikom Yogyakarta",
    duration: "Maret 2023 – Januari 2024",
    category: "teaching",
    description:
      "Asisten pengajaran mata kuliah desain grafis untuk 40+ mahasiswa.",
    bullets: [
      "Mengajar 40+ mahasiswa: layout, teori warna, dan komposisi",
      "Memberikan feedback dan penilaian tugas desain",
    ],
  },
  {
    id: "hipmi",
    role: "PDD Division Member",
    company: "HIPMI Amikom",
    duration: "Maret 2024 – Februari 2025",
    category: "design",
    description:
      "Mengelola kebutuhan desain dan sosial media organisasi mahasiswa.",
    bullets: [
      "Mengelola sosial media organisasi",
      "Memenuhi kebutuhan desain visual organisasi",
    ],
  },
  {
    id: "seminar",
    role: "Creative Coordinator",
    company: "National Seminar Committee, Amikom",
    duration: "September 2024",
    category: "design",
    description:
      "Koordinator kreatif untuk seminar nasional dengan 300+ peserta.",
    bullets: [
      "Branding visual event untuk 300+ peserta",
      "Koordinasi materi desain antar divisi",
    ],
  },
  {
    id: "darussalam",
    role: "IT Staff",
    company: "Darussalam Printing and Publishing",
    duration: "Juli 2021 – Mei 2022",
    category: "code",
    description:
      "Pengelolaan infrastruktur IT, backup data, dan dukungan teknis.",
    bullets: [
      "Pengelolaan infrastruktur IT perusahaan",
      "Backup data dan dukungan teknis operasional",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "esensi",
    title: "Esensi",
    subtitle: "Enterprise Event Management System",
    description:
      "Sistem manajemen event internal untuk Dinas Komunikasi dan Informasi Provinsi Jawa Tengah. Mencakup digital attendance, distribusi materi, dan manajemen multi-role.",
    techStack: ["Laravel", "Flutter", "MySQL"],
    category: ["Web", "Mobile"],
    liveUrl: "https://cs.saturnalia.jatengprov.go.id/",
    impact: [
      "Digunakan oleh instansi pemerintah Jawa Tengah",
      "Migrasi dari sistem legacy Laravel 7 → 11",
    ],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "skinchecker",
    title: "Skin Checker AI",
    subtitle: "AI-Powered Skin Type Classifier",
    description:
      "Klasifikasi jenis kulit wajah otomatis berbasis Convolutional Neural Network (CNN). Pengguna upload foto, sistem menganalisis dan memberikan rekomendasi perawatan.",
    techStack: ["TensorFlow", "Gradio", "Hugging Face", "Python"],
    category: ["AI"],
    liveUrl: "https://skinchecker.my.id/",
    impact: [
      "Klasifikasi otomatis berbasis CNN",
      "Deploy di Hugging Face Spaces",
    ],
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "saliwang",
    title: "SaliwangCatering",
    subtitle: "UMKM Catering Website",
    description:
      "Website UMKM katering dengan alur pemesanan terintegrasi via WhatsApp. Desain modern dan responsif untuk meningkatkan konversi pelanggan.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    category: ["Web"],
    liveUrl: "https://saliwangcatering.site/",
    impact: [
      "Alur pemesanan via WhatsApp terintegrasi",
      "Meningkatkan online presence UMKM lokal",
    ],
    color: "from-orange-500 to-amber-600",
  },
  {
    id: "wanajonggol",
    title: "WanajonggolPark",
    subtitle: "Nature Tourism Platform",
    description:
      "Platform wisata alam dengan sistem reservasi ringan. Menampilkan destinasi, fasilitas, dan sistem booking untuk pengunjung.",
    techStack: ["HTML", "Tailwind CSS", "JavaScript"],
    category: ["Web"],
    liveUrl: "https://wanajonggolpark.online/",
    impact: [
      "Sistem reservasi online untuk wisata alam",
      "Meningkatkan visibilitas digital destinasi wisata",
    ],
    color: "from-green-500 to-teal-600",
  },
  {
    id: "smartparking",
    title: "Smart Parking System",
    subtitle: "IoT Real-Time Parking Monitor",
    description:
      "Prototipe IoT monitoring slot parkir real-time menggunakan ESP32 dan sensor ultrasonik. Dashboard web menampilkan status parkir secara live.",
    techStack: ["ESP32", "Ultrasonic Sensor", "Web Dashboard", "Arduino"],
    category: ["IoT"],
    liveUrl:
      "https://launchinpad.com/project/automatic-parking-count-technology-ac6ca7e/",
    impact: [
      "Real-time monitoring slot parkir via IoT",
      "Prototipe hardware + software terintegrasi",
    ],
    color: "from-rose-500 to-red-600",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "Back-End",
    icon: "server",
    skills: ["Laravel", "PHP", "Python"],
  },
  {
    label: "Front-End",
    icon: "monitor",
    skills: ["Flutter", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  },
  {
    label: "Database",
    icon: "database",
    skills: ["MySQL", "SQL"],
  },
  {
    label: "Tools & Platform",
    icon: "tool",
    skills: ["Git", "Figma", "Postman", "VS Code", "Google Colab", "Ubuntu"],
  },
  {
    label: "Soft Skills",
    icon: "users",
    skills: [
      "Analytical Thinking",
      "Problem Solving",
      "Team Collaboration",
      "Requirement Analysis",
      "Software Testing",
      "System Documentation",
      "Business Process Understanding",
    ],
  },
];

export const education: Education = {
  institution: "Universitas Amikom Yogyakarta",
  degree: "Bachelor of Informatics",
  period: "2022 – 2026",
  gpa: "3.82/4.00",
  concentration: "Programming & Database Systems",
  location: "Yogyakarta, Indonesia",
};

export const certifications: Certification[] = [
  {
    title: "Data Analyst for BNSP Certification Preparation",
    issuer: "YEC.co.id",
    year: "2026",
    icon: "bar-chart",
  },
  {
    title: "SQL Fundamental",
    issuer: "SmartPath",
    year: "2024",
    icon: "database",
  },
  {
    title: "InJourney Hospitality House",
    issuer: "InJourney Destinations",
    year: "2026",
    icon: "award",
  },
];

export const contact: ContactInfo = {
  email: "achmadhaidar.work@gmail.com",
  linkedin: "https://linkedin.com/in/achmadhaidartamimi",
  whatsapp: "https://wa.me/628121568323",
  github: "https://github.com/achmadhaidartamimi",
};
