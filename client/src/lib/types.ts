export interface Experience {
  company: string;
  position: string;
  date: string;
  description?: string;
  tags?: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  certNo?: string; 
  tags?: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  category?: string;
}

export interface BlogPost {
  title: string;
  link: string;
  pubDate: string;
  categories: string[];
  content: string;
  thumbnail?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
