// Helpers
import * as fs from 'fs';
import * as path from 'path';
import * as url from 'url';
import * as eta from 'eta';
import c from 'ansi-colors';
// Constants
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

if (!process.argv[2]) {
  console.error(c.red(`Missing component name, should be used as: ${c.white('"npm run generate my-component"')}`));
  process.exit();
}

const name = process.argv[2].toLowerCase();

const tagName = `sl-${name}`;
const pascalName = (`${name[0].toUpperCase()}${name.slice(1)}`).replace(/-./g, (x) => x[1].toUpperCase());
const className = `Slithe${pascalName}`;
const htmlName = `HTMLSl${pascalName}Element`;

const context = { tagName, className, htmlName };

const componentTemplate = fs.readFileSync(path.resolve(__dirname, './tpl/component.eta'), 'utf8');
const specTemplate = fs.readFileSync(path.resolve(__dirname, './tpl/spec.eta'), 'utf8');
const e2eTemplate = fs.readFileSync(path.resolve(__dirname, './tpl/e2e.eta'), 'utf8');

const distPath = path.resolve(__dirname, `../../../src/components/${tagName}`);

if (fs.existsSync(distPath)) {
  console.error(c.red(`Component ${c.yellow(tagName)} already exists.`));
} else {
  fs.mkdirSync(distPath);
  fs.writeFileSync(path.resolve(distPath, `${tagName}.tsx`), eta.render(componentTemplate, context));
  fs.writeFileSync(path.resolve(distPath, `${tagName}.spec.ts`), eta.render(specTemplate, context));
  fs.writeFileSync(path.resolve(distPath, `${tagName}.e2e.ts`), eta.render(e2eTemplate, context));
  console.info(c.green(`Component ${c.yellow(tagName)} created with success.`));
}
