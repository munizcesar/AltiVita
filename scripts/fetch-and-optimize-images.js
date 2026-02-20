#!/usr/bin/env node
/*
  Script para baixar e otimizar imagens de capa (Unsplash) para /public/imagespost
  Uso: npm run images:fetch
  Requer: Node 18+ e dependência 'sharp' (já presente em package.json)
*/
import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const outDir = path.resolve(process.cwd(), 'public', 'imagespost');
await fs.mkdir(outDir, { recursive: true });

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981d?auto=format&fit=crop&w=1600&q=80', dest: 'apps-produtividade.jpg' },
  { src: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1600&q=80', dest: 'bancos-digitais.jpg' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80', dest: 'cloud-storage.jpg' },
  { src: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=1600&q=80', dest: 'guia-smartwatches.jpg' },
  { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80', dest: 'softwares-educacionais.jpg' },
  { src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80', dest: 'streaming-guide.jpg' },
  { src: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?auto=format&fit=crop&w=1600&q=80', dest: 'apps-financas.jpg' },
  { src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=80', dest: 'apps-idiomas.jpg' },
  { src: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1600&q=80', dest: 'apps-saude.jpg' },
  { src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80', dest: 'melhores-smartphones-baratos.jpg' },
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80', dest: 'example.jpg' },
  { src: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1600&q=80', dest: 'top-smartphones-2026.jpg' },
  { src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1600&q=80', dest: 'best-budget-smartphones-2026.jpg' }
];

async function downloadBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return Buffer.from(await res.arrayBuffer());
}

async function process() {
  console.log('Starting image fetch & optimize...');
  for (const img of IMAGES) {
    try {
      const buf = await downloadBuffer(img.src);
      const outPath = path.join(outDir, img.dest);
      // save optimized JPEG (1200 px wide) and a WebP variant
      await sharp(buf).resize({ width: 1600 }).jpeg({ quality: 82 }).toFile(outPath);
      const webpPath = outPath.replace(/\.(jpg|jpeg)$/i, '.webp');
      await sharp(buf).resize({ width: 1600 }).webp({ quality: 80 }).toFile(webpPath);
      console.log(`Saved: ${img.dest} (+ webp)`);
    } catch (err) {
      console.error(`Error processing ${img.src}:`, err.message);
    }
  }
  console.log('Done.');
}

process().catch(err => { console.error(err); process.exit(1); });
