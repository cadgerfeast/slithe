// Helpers
import c from 'picocolors';
import compression from '@polka/compression';
import polka from 'polka';
import sirv from 'sirv';
import path from 'path';
import { createLogger } from 'vite';
// Constants
const logger = createLogger();

export async function previewPlayground () {
  const compress = compression({ brotli: true })
    const serve = sirv(path.resolve(process.cwd(), './dist'), {
      etag: true,
      maxAge: 31536000,
      immutable: true
    })
    return polka({
      onNoMatch: (_req, res) => {
        res.statusCode = 404;
        res.end();
      }
    })
      .use(compress, serve)
      .listen(3000, () => {
        logger.info(`\n  ${c.green(`${c.bold('@slithe/playground')} v${__VERSION__}`)}`, {
          clear: !logger.hasWarned
        });
        logger.info(`  ${c.green('➜')}  Local: ${c.cyan('http://localhost:3000/')}`);
      })
}