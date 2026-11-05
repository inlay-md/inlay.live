// SPDX-License-Identifier: Apache-2.0
// Renders the raster brand assets in public/ from the SVG sources in src/assets.
// Run with `pnpm assets` after changing the mark or the copy; the outputs are committed.
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import wawoff2 from 'wawoff2';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const cacheDir = path.join(root, 'node_modules/.cache/inlay-assets');
await mkdir(publicDir, { recursive: true });
await mkdir(path.join(cacheDir, 'fonts'), { recursive: true });

const appIcon = await readFile(path.join(root, 'src/assets/app-icon.svg'));
const favicon = await readFile(path.join(publicDir, 'favicon.svg'));

// apple-touch-icon: full-bleed square, iOS applies the corner mask itself.
await sharp(appIcon).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
// PNG favicon fallback for clients that do not take SVG.
await sharp(favicon, { density: 384 })
  .resize(32, 32)
  .png()
  .toFile(path.join(publicDir, 'favicon.png'));

// librsvg (inside sharp) finds fonts through fontconfig, which cannot read woff2, so the
// Fontsource variable fonts are decompressed to TTF in node_modules/.cache first.
const fonts = [
  ['@fontsource-variable/sora/files/sora-latin-wght-normal.woff2', 'sora.ttf'],
  ['@fontsource-variable/inter/files/inter-latin-wght-normal.woff2', 'inter.ttf'],
];
for (const [src, out] of fonts) {
  const woff2 = await readFile(path.join(root, 'node_modules', src));
  await writeFile(path.join(cacheDir, 'fonts', out), await wawoff2.decompress(woff2));
}
const fontsConf = path.join(cacheDir, 'fonts.conf');
await writeFile(
  fontsConf,
  `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig><dir>${path.join(cacheDir, 'fonts')}</dir><cachedir>${path.join(cacheDir, 'fc-cache')}</cachedir></fontconfig>`,
);
process.env.FONTCONFIG_FILE = fontsConf;

const sora = 'Sora Variable, Sora, sans-serif';
const inter = 'Inter Variable, Inter, sans-serif';

const mark = (x, y, s) => `
<g transform="translate(${x} ${y}) scale(${s / 48})">
  <rect x="7" y="3" width="34" height="42" rx="5" fill="#141A22" stroke="#FFFFFF" stroke-width="3"/>
  <rect x="14" y="11" width="20" height="3" rx="1.5" fill="#FFFFFF"/>
  <rect x="14" y="18" width="14" height="3" rx="1.5" fill="#FFFFFF"/>
  <rect x="13" y="25" width="22" height="14" rx="2.5" fill="#FFFFFF"/>
  <rect x="14.5" y="26.5" width="19" height="11" rx="1.5" fill="none" stroke="#E0A83A" stroke-width="1.2"/>
  <rect x="18" y="32" width="3" height="4" rx="0.8" fill="#9A6E1A"/>
  <rect x="22.5" y="29.5" width="3" height="6.5" rx="0.8" fill="#9A6E1A"/>
  <rect x="27" y="31" width="3" height="5" rx="0.8" fill="#1F7A7A"/>
</g>`;

// Open Graph image, 1200x630: lockup, tagline, one-line pitch, status pill, and the hero
// illustration (the tile lifted out of the page) from the brand canvas.
const og = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#141A22"/>
  ${mark(84, 72, 88)}
  <text x="192" y="146" font-family="${sora}" font-weight="700" font-size="76" letter-spacing="-2.3" fill="#FFFFFF">Inlay</text>
  <text x="84" y="298" font-family="${sora}" font-weight="700" font-size="84" letter-spacing="-2.9" fill="#FFFFFF">Markdown</text>
  <text x="84" y="386" font-family="${sora}" font-weight="700" font-size="84" letter-spacing="-2.9" fill="#FFFFFF">that runs.</text>
  <text x="84" y="446" font-family="${inter}" font-weight="400" font-size="27" fill="#C8D0DA">A Mac editor that renders the HTML, SVG,</text>
  <text x="84" y="484" font-family="${inter}" font-weight="400" font-size="27" fill="#C8D0DA">CSS and JavaScript inside your documents,</text>
  <text x="84" y="522" font-family="${inter}" font-weight="400" font-size="27" fill="#C8D0DA">and never rewrites your file.</text>
  <rect x="84" y="554" width="282" height="40" rx="20" fill="none" stroke="#3A4656" stroke-width="2"/>
  <text x="225" y="580" text-anchor="middle" font-family="${inter}" font-weight="600" font-size="15" letter-spacing="1.3" fill="#E0A83A">FOR MACOS 14+ · OPEN SOURCE</text>
  <g transform="translate(846 108) scale(0.86)">
    <rect x="0" y="0" width="304" height="400" rx="20" fill="#F7F8FA"/>
    <rect x="40" y="44" width="160" height="14" rx="7" fill="#C5CCD6"/>
    <rect x="40" y="78" width="224" height="10" rx="5" fill="#DDE1E7"/>
    <rect x="40" y="100" width="190" height="10" rx="5" fill="#DDE1E7"/>
    <rect x="40" y="122" width="210" height="10" rx="5" fill="#DDE1E7"/>
    <rect x="40" y="170" width="224" height="150" rx="14" fill="#141A22"/>
    <rect x="43" y="173" width="218" height="144" rx="12" fill="none" stroke="#E0A83A" stroke-width="4"/>
    <rect x="76" y="256" width="30" height="48" rx="4" fill="#E0A83A"/>
    <rect x="130" y="218" width="30" height="86" rx="4" fill="#E0A83A"/>
    <rect x="184" y="240" width="30" height="64" rx="4" fill="#5FC9C0"/>
    <rect x="40" y="346" width="200" height="10" rx="5" fill="#DDE1E7"/>
    <rect x="40" y="368" width="150" height="10" rx="5" fill="#DDE1E7"/>
  </g>
</svg>`;
await sharp(Buffer.from(og), { density: 144 })
  .resize(1200, 630)
  .png()
  .toFile(path.join(publicDir, 'og.png'));

console.log('Wrote public/apple-touch-icon.png, public/favicon.png, public/og.png');
