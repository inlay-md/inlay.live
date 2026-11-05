// SPDX-License-Identifier: Apache-2.0
export const site = {
  name: 'Inlay',
  title: 'Inlay, Markdown that runs',
  description:
    'Inlay is a Markdown editor for macOS that renders the HTML, SVG, CSS and JavaScript inside your documents the way a browser would, and never rewrites your file behind your back.',
  url: 'https://inlay.live',
  tagline: 'Markdown that runs.',
  repo: 'https://github.com/inlay-md/Inlay',
  issues: 'https://github.com/inlay-md/Inlay/issues',
  releases: 'https://github.com/inlay-md/Inlay/releases',
  decisions: 'https://github.com/inlay-md/Inlay/blob/main/docs/DECISIONS.md',
  contributing: 'https://github.com/inlay-md/Inlay/blob/main/CONTRIBUTING.md',
  trademarks: 'https://github.com/inlay-md/Inlay/blob/main/TRADEMARKS.md',
  notices: 'https://github.com/inlay-md/Inlay/blob/main/THIRD_PARTY_NOTICES.md',
  license: 'https://github.com/inlay-md/Inlay/blob/main/LICENSE',
  copyright: '© 2026 Tran Minh Cuong and the Inlay contributors',
  brand: 'https://claude.ai/artifact/M3xpg5PiXRRJY4Fv54qF6L',
} as const;

/** Optional POST endpoint for the waitlist form, e.g. a Buttondown or Formspree URL. */
export const waitlistAction: string | undefined = import.meta.env.PUBLIC_WAITLIST_ACTION;
