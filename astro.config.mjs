import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://joonaskirsipuu.eu',
  integrations: [
    react(),
    tailwind(),
    sitemap({
      filter: (page) => page !== 'https://joonaskirsipuu.eu/404'
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['react-icons']
    }
  }
});
