export interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  features: string[];
  languages?: { [key: string]: number };
  tools?: string[];
}