export type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type Skill = {
  id: number;
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
};

export type Certification = string;

export type Language = {
  name: string;
  level: string;
};