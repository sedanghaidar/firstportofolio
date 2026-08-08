export interface Stat {
  label: string;
  value: string;
  icon: "graduation" | "briefcase" | "trophy" | "code";
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  category: "code" | "teaching" | "design";
  description: string;
  bullets: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  category: ("Web" | "Mobile" | "AI" | "IoT")[];
  liveUrl: string;
  impact: string[];
  color: string;
}

export interface SkillGroup {
  label: string;
  icon: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  concentration: string;
  location: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  whatsapp: string;
  github: string;
}
