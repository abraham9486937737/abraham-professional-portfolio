const fs = require('node:fs');
const path = require('node:path');

const distDir = path.resolve(__dirname, '..', 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '404.html');

if (!fs.existsSync(indexPath)) {
  process.exitCode = 1;
  throw new Error('Build output not found: dist/index.html');
}

fs.copyFileSync(indexPath, fallbackPath);
console.log('Created SPA fallback:', fallbackPath);
