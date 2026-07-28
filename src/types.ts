export type SkillCategory = 'all' | 'frontend' | 'backend' | 'databases' | 'tools' | 'soft';

export interface SkillItem {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 1 to 100
  iconName: string;
  description: string;
  featured?: boolean;
}

export type ProjectCategory = 'all' | 'fullstack' | 'mobile_ai' | 'frontend' | 'backend';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  subtitle: string;
  image: string;
  tags: string[];
  description: string;
  fullDetails: string;
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  year: string;
  role: string;
  featured: boolean;
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  type: 'education' | 'experience' | 'volunteer';
  description: string;
  achievements: string[];
  techStack?: string[];
  badge?: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  category: 'web' | 'programming' | 'ai' | 'languages';
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  date: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  serviceNeeded: string;
  message: string;
}
