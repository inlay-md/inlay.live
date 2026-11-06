// SPDX-License-Identifier: Apache-2.0
/**
 * Build progress, kept in step with docs/PLAN.md and the README roadmap in the Inlay repository.
 * Update `updated` and the statuses whenever a milestone merges to Inlay's `main`.
 */
export type MilestoneStatus = 'done' | 'next' | 'planned';

export type Milestone = {
  id: string;
  title: string;
  body: string;
  status: MilestoneStatus;
};

/** ISO date of the last progress update. */
export const updated = '2026-11-06';

export const milestones: Milestone[] = [
  {
    id: 'M0',
    title: 'Scaffold',
    body: 'Workspace, the web↔native Host interface, golden fixtures, the Xcode app, CI and license checks.',
    status: 'done',
  },
  {
    id: 'M1',
    title: 'Read view',
    body: 'Full rendering of embedded HTML, SVG, CSS and JavaScript, offline chart libraries, KaTeX, Mermaid, syntax highlighting, isolation, quarantine and file watching.',
    status: 'done',
  },
  {
    id: 'M2',
    title: 'Source and Split',
    body: 'CodeMirror Source mode, Split with scroll sync, and byte-identical saving through the real macOS document model.',
    status: 'done',
  },
  {
    id: 'M3',
    title: 'WYSIWYG',
    body: 'A rich editor over a lossless block model: raw islands you edit in place, block-splice saving, mode switching that keeps your place, and an IME guard.',
    status: 'done',
  },
  {
    id: 'M4',
    title: 'Quick Look',
    body: 'Space-bar previews in Finder through the same renderer, with SVG always on and scripts opt-in.',
    status: 'next',
  },
  {
    id: 'M5',
    title: 'Polish and release',
    body: 'HTML and PDF export, themes, preferences, automatic updates, and a signed, notarized download.',
    status: 'planned',
  },
];

export const statusLabel: Record<MilestoneStatus, string> = {
  done: 'Done',
  next: 'Next',
  planned: 'Planned',
};
