export interface Stat {
  label: string;
  sublabel?: string;
  value: string;
  icon?: string;
}

export interface CaseStudy {
  context: string;
  problem: string;
  approach: string;
  contribution: string[];
  implementation: string;
  result: string[];
  reflection?: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  technologies: string[];
  featured: boolean;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  figmaUrl?: string;
  caseStudy?: CaseStudy;
}

export interface AdditionalProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  duration: string;
  year: string;
  category: "engineering" | "management" | "teaching" | "design";
  description: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface BeyondCodeItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  aspectRatio?: "square" | "landscape" | "portrait";
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  concentration: string;
  location: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  whatsapp: string;
  github: string;
  instagram?: string;
}
