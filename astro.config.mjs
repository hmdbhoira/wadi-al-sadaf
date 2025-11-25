// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://hmdbhoira.github.io',
  base: process.env.npm_lifecycle_event === 'build' ? '/wadi-al-sadaf/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});
