import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// import tailwind from '@astrojs/tailwind'; // Temporarily disabled for Tailwind CSS 4.0 compatibility

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://rubenrikk.nl',
  devToolbar: {
    enabled: false
  },
  integrations: [react(), sitemap()] // tailwind() temporarily removed - using PostCSS directly
});