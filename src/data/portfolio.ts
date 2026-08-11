import {
  Stat,
  Project,
  AdditionalProject,
  Experience,
  SkillCategory,
  BeyondCodeItem,
  Education,
  ContactInfo,
} from "./types";

export const metrics: Stat[] = [
  {
    value: "3+",
    label: "YEARS",
    sublabel: "EXPERIENCE",
  },
  {
    value: "6+",
    label: "PROJECTS",
    sublabel: "SHIPPED",
  },
  {
    value: "3.81",
    label: "GPA",
    sublabel: "/ 4.00",
  },
];

export const projects: Project[] = [
  {
    id: "esensi",
    number: "01",
    title: "Esensi",
    subtitle: "Internal Event Management System",
    year: "2025",
    category: "Internal Enterprise System",
    description:
      "Modernizing a legacy event management system into a structured, role-based digital workflow for Jawa Tengah Provincial Government.",
    technologies: ["Laravel 11", "Flutter", "MySQL"],
    featured: true,
    image: "/projects/esensi.png",
    liveUrl: "https://cs.saturnalia.jatengprov.go.id/",
    caseStudy: {
      context:
        "Developed during an internship at Dinas Komunikasi dan Informasi (Diskominfo) Provinsi Jawa Tengah. The internal government team required an upgraded event management infrastructure for enterprise event operations.",
      problem:
        "The existing legacy system was running on Laravel 7 with fragmented mobile tracking, manual attendance recording, and unstructured material distribution across departments.",
      approach:
        "Executed a full system modernization: upgraded backend infrastructure from Laravel 7 to Laravel 11, redesigned mobile experience in Flutter, and unified access control under role-based authorization.",
      contribution: [
        "Migrated legacy Laravel 7 backend architecture to Laravel 11 with optimized REST APIs.",
        "Built Flutter mobile client supporting digital QR-based attendance tracking.",
        "Implemented role-based access for admins, institutions, speakers, and attendees.",
        "Created centralized digital material distribution and account management modules.",
      ],
      implementation:
        "Architected with Laravel 11 REST API endpoints, JWT token authentication, and a responsive Flutter application layer designed for enterprise scale.",
      result: [
        "Deployed directly for Jawa Tengah Provincial Government internal operations.",
        "Eliminated legacy security risks and improved event check-in speed by over 60%.",
        "Successfully modernised legacy codebase without data loss.",
      ],
      reflection:
        "Reinforced the importance of structural refactoring, smooth backward compatibility, and building for non-technical end-users in public sector environments.",
    },
  },
  {
    id: "skin-checker-ai",
    number: "02",
    title: "Skin Checker AI",
    subtitle: "AI-Powered Facial Skin Classifier",
    year: "2025",
    category: "Machine Learning Product",
    description:
      "Facial skin type classification powered by Convolutional Neural Networks (CNN) providing instant skin type analysis and tailored care suggestions.",
    technologies: ["TensorFlow", "Python", "Gradio", "Hugging Face"],
    featured: false,
    image: "/projects/skin-checker.png",
    liveUrl: "https://huggingface.co/spaces/sayhaitome/CheckYourSkin",
    caseStudy: {
      context:
        "An AI/ML initiative aimed at bringing automated computer vision analysis to personal skincare assessments through web browsers.",
      problem:
        "General users struggle to correctly identify their facial skin types, leading to ineffective skincare decisions.",
      approach:
        "Trained a Convolutional Neural Network (CNN) image classification model using TensorFlow/Keras and served it with a interactive Gradio web app interface deployed on Hugging Face.",
      contribution: [
        "Preprocessed facial image dataset and trained multi-class CNN image classification models.",
        "Integrated skin type analysis output with automated skincare recommendations.",
        "Built interactive Gradio Web UI and deployed model inference pipeline to Hugging Face Spaces.",
      ],
      implementation:
        "Python inference script consuming trained Keras model, wrapped in Gradio UI container and hosted with custom domain integration.",
      result: [
        "Achieved automated classification accuracy across primary facial skin types.",
        "Live web product processing image uploads in real-time.",
      ],
    },
  },
  {
    id: "saliwang-catering",
    number: "03",
    title: "SaliwangCatering",
    subtitle: "Commercial UMKM Catering Platform",
    year: "2024",
    category: "Commercial Business Web",
    description:
      "A high-conversion commercial catering website designed for a local food enterprise featuring integrated WhatsApp ordering flows.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
    featured: false,
    image: "/projects/saliwang-catering.png",
    liveUrl: "https://sedanghaidar.github.io/SaliwangCatering/",
    caseStudy: {
      context:
        "Client project for an established local catering business looking to establish a professional digital footprint and streamline customer orders.",
      problem:
        "The business relied on informal phone contacts with static PDF menus, causing high drop-off rates for prospective corporate orders.",
      approach:
        "Designed a mobile-first catalog displaying menu packages clearly and added direct dynamic WhatsApp order payload generators.",
      contribution: [
        "Designed visual menu layout optimized for rapid mobile browsing.",
        "Engineered WhatsApp order builder that pre-formats menu selections into structured chat messages.",
        "Optimized page performance and SEO metadata for local search discovery.",
      ],
      implementation:
        "Semantic HTML5 structure styling with Tailwind CSS, leveraging vanilla JavaScript for interactive menu selection state management.",
      result: [
        "Increased online customer inquiries and digital brand credibility.",
        "Streamlined mobile ordering UX without complex payment gateway overhead.",
      ],
    },
  },
  {
    id: "wana-jonggol-park",
    number: "04",
    title: "WanaJonggolPark",
    subtitle: "Nature Tourism & Reservation Platform",
    year: "2024",
    category: "Tourism Platform",
    description:
      "An interactive nature tourism destination portal equipped with lightweight booking and facility discovery workflows.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript"],
    featured: false,
    image: "/projects/wana-jonggol.jpg",
    liveUrl: "https://sedanghaidar.github.io/wanajonggolpark/",
    caseStudy: {
      context:
        "Digital tourism initiative showcasing Wanajonggol Park attractions, amenities, and visit reservation options.",
      problem:
        "Visitors lacked centralized information regarding park activities, venue booking, and destination highlights.",
      approach:
        "Created an intuitive visual portal highlighting natural attractions, facilities guide, and reservation submission forms.",
      contribution: [
        "Built clean responsive web layout focused on rich photography and destination features.",
        "Implemented lightweight reservation request workflow for weekend visitors.",
      ],
      implementation:
        "Responsive multi-section static web app with smooth scroll navigation and optimized asset loading.",
      result: [
        "Provided digital destination guide for park visitors.",
        "Improved visitor booking efficiency.",
      ],
    },
  },
  {
    id: "synergy",
    number: "05",
    title: "SYNERGY",
    subtitle: "Disaster Volunteer Collaboration Platform",
    year: "2024",
    category: "UI/UX Competition Project",
    description:
      "A collaboration platform designed for a UI/UX competition, aimed at connecting volunteers with individuals needing immediate assistance in disaster locations.",
    technologies: ["Figma", "Prototyping", "User Research", "UI/UX Design"],
    featured: false,
    image: "/projects/synergy.png",
    caseStudy: {
      context:
        "A collaboration platform designed for a UI/UX competition, aimed at connecting volunteers with individuals needing immediate assistance in disaster locations.",
      problem:
        "Inefficient coordination and communication gaps between available relief volunteers and disaster victims requiring urgent help.",
      approach:
        "Designed a human-centered mobile platform prioritizing accessibility, rapid matchmaking, and clear information hierarchy for emergency situations.",
      contribution: [
        "Engineered the end-to-end UI/UX design, from initial wireframing to high-fidelity interactive prototyping.",
        "Structured user flows and visual hierarchy to ensure intuitive navigation under high-stress conditions.",
      ],
      implementation:
        "Built with Figma, Prototyping, and User Research methodologies.",
      result: [
        "Successfully delivered a comprehensive, high-fidelity interactive prototype for a UI/UX design competition.",
      ],
    },
  },
  {
    id: "smart-parking",
    number: "06",
    title: "Smart Parking System",
    subtitle: "IoT Real-Time Telemetry Monitor",
    year: "2024",
    category: "IoT System",
    description:
      "Real-time parking slot monitoring prototype powered by ESP32 microcontrollers, ultrasonic sensors, and a live web dashboard.",
    technologies: ["ESP32", "Ultrasonic Sensor", "Web Dashboard", "C++"],
    featured: false,
    image: "/projects/smart-parking.jpg",
    liveUrl:
      "https://launchinpad.com/project/automatic-parking-count-technology-ac6ca7e/",
    caseStudy: {
      context:
        "An IoT embedded system engineering project built to automate urban parking slot tracking and display real-time availability.",
      problem:
        "Drivers waste significant time searching for available parking slots in crowded venues without real-time telemetry visibility.",
      approach:
        "Built a hardware prototype integrating ultrasonic distance sensors connected to ESP32 telemetry microcontrollers broadcasting live slot occupancy data to a web dashboard.",
      contribution: [
        "Programmed ESP32 microcontrollers in C++ for ultrasonic sensor telemetry reading.",
        "Engineered real-time web dashboard displaying slot availability status.",
        "Collaborated in hardware assembly and prototype casing integration with team.",
      ],
      implementation:
        "ESP32 microcontrollers transmitting sensor telemetry data over WebSocket / HTTP endpoints to a responsive frontend dashboard.",
      result: [
        "Successfully demonstrated automated real-time slot tracking prototype.",
        "Published project showcase on Launchinpad platform.",
      ],
    },
  },
];

export const additionalProjects: AdditionalProject[] = [];

export const experiences: Experience[] = [
  {
    id: "diskominfo",
    role: "Software Developer Intern",
    company: "Dinas Komunikasi dan Informasi Provinsi Jawa Tengah",
    location: "Semarang, Indonesia",
    duration: "Aug 2025 – Oct 2025",
    year: "2025",
    category: "engineering",
    description:
      "Developed a new enterprise event management system from scratch using Laravel 11 to replace an abandoned legacy application.",
    bullets: [
      "Engineered a responsive, mobile-ready architecture, allowing the web application to be installed and function seamlessly as a mobile WebView client.",
      "Designed and implemented a multi-role administrative dashboard with a completely new, user-friendly UI/UX component hierarchy.",
      "Built integrated features such as QR-based digital attendance and live material distribution within a lean agile team.",
    ],
  },
  {
    id: "darussalam",
    role: "IT & System Administrator",
    company: "Darussalam Printing & Publishing",
    location: "Ponorogo, Indonesia",
    duration: "Jul 2021 – May 2022",
    year: "2021 - 2022",
    category: "management",
    description:
      "Managed and optimized the company's local IT infrastructure, including hardware components and network systems, to ensure seamless daily operations.",
    bullets: [
      "Executed data recovery procedures for damaged storage devices and established structured backup protocols to guarantee long-term data security.",
      "Architected a centralized storage system for company operational data, significantly improving data accessibility and cross-departmental workflow efficiency.",
      "Provided day-to-day technical support and resolved hardware/software bottlenecks for both print production teams and non-technical staff.",
    ],
  },
  {
    id: "hipmi",
    role: "Visual & Design (PDD) Member",
    company: "HIPMI Amikom",
    location: "Sleman, Indonesia",
    duration: "Mar 2024 – Feb 2025",
    year: "2024 - 2025",
    category: "design",
    description:
      "Spearheaded the visual identity and digital promotional campaigns for a student entrepreneurship organization across multiple social media platforms.",
    bullets: [
      "Translated raw data and conceptual briefs from cross-functional divisions into structured, engaging, and accessible visual content.",
      "Designed and standardized event publication materials, ensuring on-brand consistency and clear visual communication for all organizational activities.",
      "Collaborated tightly with various divisions to support operational workflows, turning abstract ideas into cohesive digital assets.",
    ],
  },
  {
    id: "seminar",
    role: "Creative Coordinator",
    company: "National Seminar Committee, Amikom",
    location: "Sleman, Indonesia",
    duration: "Sep 2024",
    year: "2024",
    category: "design",
    description:
      "Led the end-to-end creative direction for a national seminar, designing audience-centric visual assets that successfully supported the acquisition and engagement of 300+ attendees.",
    bullets: [
      "Established a standardized design system (color direction and visual hierarchy), ensuring visual consistency and improving information accessibility across all event platforms.",
      "Coordinated a multi-format design pipeline (posters, social media, on-site materials) by tracking deliverable metrics to ensure 100% on-time execution.",
      "Collaborated with cross-functional committees to translate promotional data and event briefs into targeted, high-impact stage graphics and branding materials.",
    ],
  },
  {
    id: "teaching-assistant",
    role: "Teaching Assistant (Graphic Design)",
    company: "Universitas Amikom Yogyakarta",
    location: "Sleman, Indonesia",
    duration: "Mar 2023 – Jan 2024",
    year: "2023 - 2024",
    category: "teaching",
    description:
      "Facilitated hands-on practical sessions for 40+ undergraduate students, breaking down complex UI/UX principles and visual layout theories into structured, actionable learning modules.",
    bullets: [
      "Evaluated student project submissions by establishing objective grading criteria, transforming subjective design concepts into measurable performance metrics.",
      "Guided students in applying systematic design frameworks—including layout hierarchy, color theory, and visual composition—to create accessible and consistent digital assets.",
      "Delivered structured, iterative feedback on design outputs, simulating real-world tech industry reviews to improve students' technical execution and problem-solving skills.",
    ],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "DEVELOPMENT",
    skills: ["Laravel", "PHP", "Node.js", "Python"],
  },
  {
    category: "FRONT-END",
    skills: ["Flutter", "JavaScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    category: "DATA & AI",
    skills: ["TensorFlow", "Pandas", "NumPy", "SQL"],
  },
  {
    category: "DATABASE",
    skills: ["MySQL", "PostgreSQL", "SQL"],
  },
  {
    category: "TOOLS & PLATFORM",
    skills: ["Git", "Figma", "Postman", "VS Code", "Google Colab", "Ubuntu"],
  },
];

export const beyondCodeItems: BeyondCodeItem[] = [
  {
    id: "national-seminar",
    title: "National Seminar Event Branding",
    category: "Creative Direction & Design",
    description:
      "Complete visual identity, stage graphics, and promotional design assets for national seminar event with 300+ participants.",
    aspectRatio: "landscape",
  },
  {
    id: "poster-competition",
    title: "1st Place Award Poster Design",
    category: "Visual Communication",
    description:
      "Award-winning informational poster design combining strong grid composition and visual hierarchy.",
    aspectRatio: "portrait",
  },
  {
    id: "hipmi-branding",
    title: "HIPMI Amikom Media Assets",
    category: "Social Media & Branding",
    description:
      "Cohesive visual content series and promotional layouts for student entrepreneurship organization.",
    aspectRatio: "square",
  },
];

export const education: Education = {
  institution: "Universitas Amikom Yogyakarta",
  degree: "Bachelor of Informatics",
  period: "2022 – 2026",
  gpa: "3.82 / 4.00",
  concentration: "Software Engineering & Database Systems",
  location: "Yogyakarta, Indonesia",
};

export const contact: ContactInfo = {
  email: "achmadhaidar.work@gmail.com",
  linkedin: "https://linkedin.com/in/achmadhaidartamimi",
  whatsapp: "https://wa.me/628121568323",
  github: "https://github.com/sedanghaidar",
  instagram: "https://instagram.com/achmdhaidar_",
};
