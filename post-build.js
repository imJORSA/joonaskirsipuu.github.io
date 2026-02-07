const fs = require('fs');
const path = require('path');

// Base URL of your website
const baseUrl = 'https://joonaskirsipuu.eu';

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
${routes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

// Write directly to build directory (this runs AFTER react-scripts build)
const buildDir = path.resolve(__dirname, 'build');

fs.writeFileSync(path.join(buildDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(buildDir, '.nojekyll'), '');
fs.writeFileSync(path.join(buildDir, 'robots.txt'), `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`);

console.log('✅ sitemap.xml, .nojekyll, and robots.txt generated in build directory!');