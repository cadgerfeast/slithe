// Helpers
import path from 'path';
import url from 'url';
import { build } from 'vitepress';
// Constants
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const vitepressRoot = path.resolve(__dirname, '../');

export async function buildPlayground () {
  return build(vitepressRoot, {
    outDir: path.resolve(process.cwd(), 'dist')
  });
}
