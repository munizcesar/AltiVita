import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const conversions = [
  {
    src: 'public/social/og-altivita-dark.svg',
    outputs: [
      { dest: 'public/social/og-altivita-dark.png', width: 1200, height: 630, format: 'png' },
      { dest: 'public/social/og-altivita-dark.webp', width: 1200, height: 630, format: 'webp' },
    ],
  },
  {
    src: 'public/social/og-altivita-gold.svg',
    outputs: [
      { dest: 'public/social/og-altivita-gold.png', width: 1200, height: 630, format: 'png' },
      { dest: 'public/social/og-altivita-gold.webp', width: 1200, height: 630, format: 'webp' },
    ],
  },
  {
    src: 'public/social/instagram-1080.svg',
    outputs: [
      { dest: 'public/social/instagram-1080.png', width: 1080, height: 1080, format: 'png' },
      { dest: 'public/social/instagram-1080.webp', width: 1080, height: 1080, format: 'webp' },
    ],
  },
  {
    src: 'public/social/instagram-1080-gold.svg',
    outputs: [
      { dest: 'public/social/instagram-1080-gold.png', width: 1080, height: 1080, format: 'png' },
      { dest: 'public/social/instagram-1080-gold.webp', width: 1080, height: 1080, format: 'webp' },
    ],
  },
  {
    src: 'public/og-image.svg',
    outputs: [
      { dest: 'public/og-image.png', width: 1200, height: 630, format: 'png' },
      { dest: 'public/og-image.webp', width: 1200, height: 630, format: 'webp' },
    ],
  },
];

async function convertOne(srcPath, out) {
  const svg = await fs.readFile(srcPath);
  const pipeline = sharp(svg).resize(out.width, out.height, { fit: 'cover' });

  if (out.format === 'png') {
    await pipeline.png({ quality: 90, compressionLevel: 9 }).toFile(out.path);
  } else if (out.format === 'webp') {
    await pipeline.webp({ quality: 80, effort: 6 }).toFile(out.path);
  }
}

async function main() {
  console.log('Starting SVG → PNG/WebP conversions...');

  for (const item of conversions) {
    const src = path.resolve(root, item.src);
    try {
      await fs.access(src);
    } catch (err) {
      console.warn(`Source missing, skipping: ${item.src}`);
      continue;
    }

    await Promise.all(
      item.outputs.map(async (o) => {
        const outPath = path.resolve(root, o.dest);
        await fs.mkdir(path.dirname(outPath), { recursive: true });
        o.path = outPath;
        await convertOne(src, o);
        console.log(`✓ Created ${o.dest}`);
      })
    );
  }

  console.log('All conversions finished.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});