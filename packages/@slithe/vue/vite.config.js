import { defineConfig } from 'vite';
import * as path from 'path';
import * as fs from 'fs';
import * as eta from 'eta';
import chokidar from 'chokidar';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

const srcPath = path.resolve(__dirname, './src');

const componentsTemplate = fs.readFileSync(path.resolve(__dirname, './devops/npm/generate/tpl/components.eta'), 'utf8');
const wrapperTemplate = fs.readFileSync(path.resolve(__dirname, './devops/npm/generate/tpl/wrapper.eta'), 'utf8');

async function generateSourceFiles () {
  const { components } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../slithe/dist/components.json'), 'utf8'));
  const wrappers = [];
  for (const component of components) {
    const props = [];
    const imports = {};
    const bindings = [];
    const slots = component.slots.map(({ name }) => name).filter((slot) => slot !== 'default');
    for (const _prop of component.props) {
      const prop = {
        name: _prop.name,
        type: _prop.complexType.original,
        required: !_prop.optional
      };
      props.push(prop);
      for (const docsTag of _prop.docsTags) {
        switch (docsTag.name) {
          case 'binding': {
            const event = docsTag.text.trim();
            bindings.push({
              type: prop.type,
              prop: prop.name,
              event
            });
            break;
          }
          case 'import': {
            const [type, lib] = docsTag.text.trim().split(',');
            imports[lib] = imports[lib] || [];
            imports[lib].push(type);
            break;
          }
        }
      }
    }
    const pascalName = (`${component.tag[0].toUpperCase()}${component.tag.slice(1)}`).replace(/-./g, (x) => x[1].toUpperCase());
    const wrapper = {
      name: component.tag.slice(3),
      tagName: component.tag,
      typeName: `HTML${pascalName}Element`,
      pascalName,
      props,
      imports,
      bindings,
      slots
    };
    wrappers.push(wrapper);
  }
  fs.writeFileSync(path.resolve(srcPath, 'components.ts'), eta.render(componentsTemplate, { wrappers }));
  fs.mkdirSync(path.resolve(srcPath, './wrappers'), { recursive: true });
  for (const wrapper of wrappers) {
    fs.writeFileSync(path.resolve(srcPath, `./wrappers/${wrapper.name}.vue`), eta.render(wrapperTemplate, { wrapper }));
  }
}

let isWatching = false;
export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/index.ts'),
      formats: ['es'],
      fileName: () => 'index.js'
    },
    emptyOutDir: false,
    rollupOptions: {
      external: ['vue', 'slithe']
    }
  },
  resolve: {
    dedupe: ['vue', 'slithe']
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => {
            return tag.toLowerCase().startsWith('sl-');
          }
        }
      }
    }),
    dts(),
    {
      name: 'wrapper-generator',
      configResolved: ({ build }) => {
        isWatching = !!build.watch;
        if (isWatching) {
          chokidar.watch('../../slithe/dist/components.json').on('all', async () => {
            await generateSourceFiles();
          });
        }
      },
      async buildStart () {
        if (!isWatching) {
          await generateSourceFiles();
        }
      }
    }
  ]
});
