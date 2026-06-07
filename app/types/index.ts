export type Skill = {
  id: string;
  name: string;
  icon: string;
  accent: string;
  orbit: "inner" | "outer";
  description: string;
  abilities: string[];
  tools: string[];
  projects: string[];
  relatedProjectId: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  role: string;
  year: string;
  description: string;
  tags: string[];
  accent: string;
  note: string;
};
