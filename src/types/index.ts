// Type definitions for the entire application

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies?: string[];
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  year: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: Skill[];
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  image?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}
