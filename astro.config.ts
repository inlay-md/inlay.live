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
      // Keep scripts as external files: the CSP in vercel.json allows only
      // script-src 'self', so an inlined <script> would be blocked.
      assetsInlineLimit: (file) => (/\.[cm]?[jt]s$/.test(file) ? false : undefined),
    },
  },
});
