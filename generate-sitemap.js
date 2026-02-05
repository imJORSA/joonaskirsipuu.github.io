const fs = require('fs');
const path = require('path');

// Base URL of your website
const baseUrl = 'https://joonaskirsipuu.github.io';

// Array of your site's routes
const routes = [
  '/',
  '/About',
  '/Traditional',
  '/Fractals',
  '/Worldbuilding',
  '/Blog',
  '/GenAI',
  '/FilmsSeriesAnime',
  '/Games',
];

// Generate the sitemap XML content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>`).join('')}
</urlset>`.trim();

// Write the sitemap to the build directory
fs.writeFileSync(path.resolve(__dirname, 'build', 'sitemap.xml'), sitemap);

console.log('sitemap.xml generated successfully!');