import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';

export default defineConfig({
  plugins: [
    react(),
    mdx({
      providerImportSource: '@mdx-js/react',
      format: 'mdx',
      remarkPlugins: [
        [remarkFrontmatter, ['yaml']],
        [remarkMdxFrontmatter, { name: 'frontmatter' }],
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
