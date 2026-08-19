export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  visualType: 'neural-network' | 'knowledge-graph' | 'audio-waveform' | 'erp-dashboard' | 'lms-modules' | 'conference-portal';
  badge?: string;
}

export interface Experiment {
  id: string;
  title: string;
  category: string;
  award?: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: 'Production' | 'Prize Winner' | 'Research Prototype' | 'Completed';
  iconName: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  duration: string;
  location: string;
  type: string;
  highlights: string[];
  technologies: string[];
  current?: boolean;
}

export interface SkillNode {
  name: string;
  level: 'Core' | 'Advanced' | 'Proficient';
  category: 'Languages' | 'Frameworks' | 'Databases' | 'AI & Automation' | 'Cloud & SaaS' | 'Data Integration' | 'Hardware & Tools';
  description: string;
  projects?: string[];
  highlight?: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  event: string;
  organization: string;
  type: 'First Prize' | 'Hackathon' | 'Competition' | 'Workshop' | 'National';
  year: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  score?: string;
  skills: string[];
}

export interface SystemDomain {
  id: string;
  name: string;
  tagline: string;
  color: string;
  skills: string[];
  projects: string[];
  metrics: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  message: string;
}
