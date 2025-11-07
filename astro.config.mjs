import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://associativeproperties.com',
  // GitHub Pages deployment configuration
  build: {
    assets: 'assets'
  }
});
