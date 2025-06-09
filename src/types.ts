export type Frontmatter = {
  title?: string;
  featuredImage?: string;
  intro?: string;
  location?: string;
  sessionCode?: string;
  [key: string]: unknown;
};

export type NavSession = {
  id: string;
  title: string;
  sessionCode?: string;
};

export type MDXModule = {
  default: React.ComponentType;
  frontmatter?: Frontmatter;
};
