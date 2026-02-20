import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

const svgSource = path.resolve(root, 'public', 'favicon.svg');
const outDir = path.resolve(root, 'public');

const sizes = [16, 32, 48, 64, 180, 256];

async function buildPngs() {
  await fs.mkdir(outDir, { recursive: true });

  const promises = sizes.map(async (s) => {
    const outPath = path.join(outDir, s === 180 ? 'apple-touch-icon.png' : `favicon-${s}x${s}.png`);
    await sharp(svgSource)
      .resize(s, s, { fit: 'cover' })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(outPath);
    console.log(`✓ ${path.basename(outPath)}`);
    return outPath;
  });

  return Promise.all(promises);
}

async function buildIco(pngPaths) {
  // png-to-ico expects a single 256x256 PNG (this version will resize internally)
  const png256 = pngPaths.find((p) => /favicon-256x256\.png$/.test(p));
  if (!png256) throw new Error('Missing 256x256 PNG for ICO generation');

  const icoBuffer = await pngToIco(png256);
  const icoPath = path.join(outDir, 'favicon.ico');
  await fs.writeFile(icoPath, icoBuffer);
  console.log(`✓ ${path.basename(icoPath)}`);
  return icoPath;
}

async function main() {
  try {
    console.log('Gerando PNGs de favicon...');
    const pngs = await buildPngs();

    console.log('Gerando favicon.ico (multi-res)...');
    await buildIco(pngs);

    // Also create a 32x32 fallback named favicon.png for backward-compatibility
    const fallback = path.join(outDir, 'favicon.png');
    await sharp(pngs.find(p => /favicon-32x32/.test(p))).toFile(fallback);
    console.log('✓ favicon.png (fallback)');

    console.log('\nTodos os favicons gerados em /public — inclua-os no HTML se necessário.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();