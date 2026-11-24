// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jichang-clash.lat',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      serialize(item) {
        item.lastmod = new Date();

        const url = item.url.replace(/\/$/, "");

        if (url === 'https://jichang-clash.lat') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (url.endsWith('/airports') || url.endsWith('/comparison')) {
          item.priority = 0.9;
          item.changefreq = 'daily';
        } else if (url.endsWith('/reviews/invisible')) {
          item.priority = 0.95;
          item.changefreq = 'daily';
        } else if (url.includes('/reviews/')) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (url.endsWith('/tutorials/clash-guide') || url.endsWith('/clients')) {
          item.priority = 0.85;
          item.changefreq = 'weekly';
        } else if (url.endsWith('/faq')) {
          item.priority = 0.85;
          item.changefreq = 'daily';
        } else if (url.includes('/faq/')) {
          item.priority = 0.75;
          item.changefreq = 'weekly';
        } else if (url.endsWith('/sitemap')) {
          item.priority = 0.7;
          item.changefreq = 'daily';
        } else {
          item.priority = 0.6;
          item.changefreq = 'monthly';
        }
        return item;
      }
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
