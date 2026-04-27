export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Languages" | "Database" | "DevOps & Cloud" | "AI" | "Tools";
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  jutsu?: "chidori" | "rasengan" | "sharingan" | "amaterasu" | "susanoo" | "sage";
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}
