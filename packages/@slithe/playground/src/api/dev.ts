// Helpers
import c from 'picocolors';
import path from 'path';
import url from 'url';
import fs from 'fs';
import { createServer } from 'vitepress';
import { createLogger } from 'vite';
// Constants
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const vitepressRoot = path.resolve(__dirname, '../');
const cacheRoot = path.resolve(vitepressRoot, './.vitepress/cache');
const logger = createLogger();

export async function devPlayground () {
  if (fs.existsSync(cacheRoot)) {
    fs.rmdirSync(cacheRoot, { recursive: true });
  }
  const server = await createServer(vitepressRoot);
  await server.listen(3000);
  logger.info(`\n  ${c.green(`${c.bold('@slithe/playground')} v${__VERSION__}`)}`, {
    clear: !logger.hasWarned
  });
  logger.info(`  ${c.green('➜')}  Local: ${c.cyan('http://localhost:3000/')}`);
}
