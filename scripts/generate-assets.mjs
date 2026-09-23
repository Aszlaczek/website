import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import sharp from "sharp";

const LIME = "#d4ff1e";
const BG = "#090909";
const CARD = "#141414";
const MUTED = "#8a8a84";

function ogSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${BG}"/>
  <rect x="0" y="0" width="1200" height="6" fill="${LIME}"/>

  <g font-family="Helvetica, Arial, sans-serif">
    <rect x="72" y="64" width="196" height="44" rx="4" fill="none" stroke="#2a2a2a" stroke-width="2"/>
    <circle cx="98" cy="86" r="6" fill="${LIME}"/>
    <text x="116" y="92" fill="#f0efe9" font-size="20" font-weight="500" letter-spacing="2">ADRIAN.DEV</text>

    <text x="72" y="270" fill="#f0efe9" font-size="92" font-weight="700" letter-spacing="-2">Adrian Wzorek</text>
    <text x="72" y="348" fill="${LIME}" font-size="56" font-weight="700">Full Stack Developer</text>

    <text x="72" y="416" fill="#c9c9c2" font-size="30" font-weight="400">React &#183; Next.js &#183; Node.js &#183; Python</text>

    <rect x="72" y="470" width="300" height="52" rx="4" fill="${LIME}"/>
    <text x="222" y="503" fill="${BG}" font-size="24" font-weight="700" text-anchor="middle" letter-spacing="1">OPEN TO WORK</text>

    <rect x="392" y="470" width="360" height="52" rx="4" fill="${CARD}" stroke="#2a2a2a" stroke-width="2"/>
    <text x="572" y="503" fill="#f0efe9" font-size="24" font-weight="500" text-anchor="middle">MSc Eng. &#183; Poland</text>

    <text x="72" y="590" fill="${MUTED}" font-size="22" font-weight="400">Portfolio &#183; React &#183; TypeScript &#183; Node.js &#183; FastAPI &#183; Django</text>
  </g>

  <g transform="translate(940,180)">
    <rect x="0" y="0" width="180" height="180" rx="16" fill="${LIME}"/>
    <text x="90" y="126" fill="${BG}" font-family="Helvetica, Arial, sans-serif" font-size="110" font-weight="700" text-anchor="middle">A.</text>
  </g>
</svg>`;
}

function iconSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="18" fill="${LIME}"/>
  <text x="50" y="72" fill="${BG}" font-family="Helvetica, Arial, sans-serif" font-size="58" font-weight="700" text-anchor="middle">A.</text>
</svg>`;
}

function buildIco(pngBuffers) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngBuffers.length, 4);

  let offset = 6 + pngBuffers.length * 16;
  const entries = [];
  for (const { size, data } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(size === 256 ? 0 : size, 0);
    entry.writeUInt8(size === 256 ? 0 : size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(data.length, 8);
    entry.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(entry);
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map((b) => b.data)]);
}

const publicDir = resolve("public");

const ogPng = await sharp(Buffer.from(ogSvg())).png().toBuffer();
await sharp(ogPng).jpeg({ quality: 90, mozjpeg: true }).toFile(resolve(publicDir, "og-image.jpg"));

const png16 = await sharp(Buffer.from(iconSvg(16))).png().toBuffer();
const png32 = await sharp(Buffer.from(iconSvg(32))).png().toBuffer();
const png180 = await sharp(Buffer.from(iconSvg(180))).png().toBuffer();

writeFileSync(resolve(publicDir, "favicon-16x16.png"), png16);
writeFileSync(resolve(publicDir, "favicon-32x32.png"), png32);
writeFileSync(resolve(publicDir, "apple-touch-icon.png"), png180);
writeFileSync(resolve(publicDir, "favicon.ico"), buildIco([
  { size: 32, data: png32 },
  { size: 16, data: png16 },
]));

console.log("Generated: og-image.jpg, favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png, favicon.ico");
