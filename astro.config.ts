// SPDX-License-Identifier: Apache-2.0
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://inlay.live',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // The CSP in vercel.json only allows same-origin script files
      // (script-src 'self'), so never inline small script chunks into the
      // HTML. Other assets keep Vite's default limit.
      assetsInlineLimit: (filePath) => (filePath.endsWith('.js') ? false : undefined),
    },
  },
});
