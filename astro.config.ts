// SPDX-License-Identifier: Apache-2.0
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://inlay.live',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
