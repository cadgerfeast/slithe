// Helpers
import c from 'picocolors';
import path from 'path';
import url from 'url';
import { createServer } from 'vitepress';
import { createLogger } from 'vite';
// Constants
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const vitepressRoot = path.resolve(__dirname, '../');
const logger = createLogger();

export async function devPlayground () {
  const server = await createServer(vitepressRoot);
  await server.listen(3000);
  logger.info(`\n  ${c.green(`${c.bold('@slithe/playground')} v${__VERSION__}`)}`, {
    clear: !logger.hasWarned
  });
  logger.info(`  ${c.green('➜')}  Local: ${c.cyan('http://localhost:3000/')}`);
}
