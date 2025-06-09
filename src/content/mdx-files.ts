import type { MDXModule } from '../types';

export const mdxFiles = import.meta.glob<MDXModule>(
  '../content/*.mdx',
  {
    eager: true,
  }
);
