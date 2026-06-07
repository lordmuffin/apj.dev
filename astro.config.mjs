import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update site to your real domain before deploying
export default defineConfig({
  site: 'https://andrewjackson.dev',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
