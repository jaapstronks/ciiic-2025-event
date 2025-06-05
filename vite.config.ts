import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';
import type { VFile } from 'vfile';

interface Frontmatter {
  [key: string]: string;
}

// Custom plugin to extract frontmatter
function extractFrontmatter() {
  return (tree: Root, file: VFile) => {
    const frontmatter: Frontmatter = {};
    visit(tree, 'yaml', (node: { value: string }) => {
      const lines = node.value.split('\n');
      lines.forEach((line: string) => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
          const value = valueParts.join(':').trim();
          // Remove quotes if present
          frontmatter[key.trim()] = value.replace(
            /^['"]|['"]$/g,
            ''
          );
        }
      });
    });
    file.data.frontmatter = frontmatter;
  };
}

export default defineConfig({
  plugins: [
    react(),
    mdx({
      providerImportSource: '@mdx-js/react',
      format: 'mdx',
      remarkPlugins: [
        remarkParse,
        remarkFrontmatter,
        extractFrontmatter,
      ],
    }),
  ],
  optimizeDeps: {
    include: ['@mdx-js/react'],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
