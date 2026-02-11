// Type definitions for portfolio data

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string;
}

export interface HeroSection {
  name: string;
  tagline: string;
  bio: string[];
  profileImage?: string;
  socialLinks: SocialLink[];
}

export interface Link {
  text: string;
  url: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  logo: string;
  logoColor?: string;
  description: string[];
  links?: Link[];
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  links: {
    github?: string;
    demo?: string;
    article?: string;
  };
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readTime: string;
  slug: string;
  content?: string;
}

export interface ContactInfo {
  email: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
  location?: string;
}
