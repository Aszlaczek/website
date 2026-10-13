import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";

await mkdir("public/images", { recursive: true });
const images = {};

for (const name of ["me", "karate", "camp", "workspace"]) {
  const source = `public/${name}.jpg`;
  const { width, height } = (await sharp(source).metadata()).autoOrient;
  const widths = [...new Set([480, 768, Math.min(width, 1280)])]
    .filter((size) => size <= width).sort((a, b) => a - b);
  for (const size of widths) {
    await sharp(source).rotate().resize({ width: size, withoutEnlargement: true })
      .webp({ quality: 78, effort: 6 }).toFile(`public/images/${name}-${size}.webp`);
  }
  images[name] = {
    src: `images/${name}-${widths.at(-1)}.webp`,
    srcSet: widths.map((size) => `images/${name}-${size}.webp ${size}w`).join(", "),
    width,
    height,
  };
}

await writeFile("src/data/images.json", `${JSON.stringify(images, null, 2)}\n`);
console.log("Generated responsive WebP images and src/data/images.json");
