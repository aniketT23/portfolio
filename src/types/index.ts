export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  category: "Frontend" | "Backend" | "Languages" | "Database" | "DevOps & Cloud" | "AI" | "Tools";
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}
