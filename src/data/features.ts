// SPDX-License-Identifier: Apache-2.0
export type Feature = {
  id: string;
  title: string;
  body: string;
  /** Marks the card the brand treats as the promise: brass seam on the left. */
  highlight?: boolean;
};

export const features: Feature[] = [
  {
    id: 'render',
    title: 'Full rendering of embedded content',
    body: 'Raw HTML, inline and linked SVG, document-level styles and scripts run at page level in the Read view. No iframes, no sanitizer surprises.',
  },
  {
    id: 'offline',
    title: 'Offline charts',
    body: 'Chart.js, ECharts, D3, Mermaid and KaTeX URLs on cdnjs, jsDelivr and unpkg are swapped for bundled copies. Your report renders on a plane.',
  },
  {
    id: 'islands',
    title: 'WYSIWYG with raw islands',
    body: 'Write in a rich editor. Anything that cannot round-trip losslessly, such as raw HTML, front matter or comments, becomes an island with its own in-place source editor.',
  },
  {
    id: 'split',
    title: 'Source and Split modes',
    body: 'CodeMirror 6 for the whole file when you want it. Split shows the source beside the live Read view with scroll sync.',
  },
  {
    id: 'quicklook',
    title: 'Quick Look for .md',
    body: 'Press Space in Finder. SVG always renders, scripts are opt-in, and a static fallback covers the rest. Same renderer as the app.',
  },
  {
    id: 'sacred',
    title: 'The file on disk is sacred',
    body: "Open and save without edits: byte-identical. Edit one block: only that block's bytes change, line endings and BOM included.",
    highlight: true,
  },
];

export const alsoShips = [
  'GFM tables, task lists and footnotes',
  'Front matter',
  'KaTeX math',
  'Mermaid',
  'Light and dark themes',
  'HTML and PDF export',
  'Vietnamese Telex, VNI and CJK input',
  '10,000-line files open instantly',
];
