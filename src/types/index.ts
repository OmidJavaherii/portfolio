export type SocialLink = {
  platform: string;
  url: string;
  label: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ProjectLinks = {
  live?: string;
  github?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  category: string;
  year: string;
  featured?: boolean;
  secondary?: boolean;
  image?: string;
  company?: string;
  responsibilities: string[];
  achievements: string[];
  links?: ProjectLinks;
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  start: string;
  end: string;
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  selectedProjects: string[];
};

export type CapabilityGroup = {
  title: string;
  description: string;
  items: string[];
};

export type PhilosophyItem = {
  title: string;
  body: string;
};

export type EducationItem = {
  title: string;
  school: string;
  period: string;
  location: string;
};
