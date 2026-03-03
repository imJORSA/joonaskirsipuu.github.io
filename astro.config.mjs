import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
// import sitemap from '@astrojs/sitemap'; // Comment this out

export default defineConfig({
  site: 'https://joonaskirsipuu.eu',
  integrations: [
    react(),
    tailwind(),
    // sitemap(), // Comment this out
  ],
  vite: {
    ssr: {
      noExternal: ['react-icons']
    }
  }
});
