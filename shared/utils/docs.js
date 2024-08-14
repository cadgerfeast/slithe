import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';
// Constants
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export function computeComponentWrappers () {
  const { components } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../packages/slithe/dist/components.json'), 'utf8'));
  const wrappers = [];
  for (const component of components) {
    const props = [];
    const imports = {};
    const bindings = [];
		const events = component.events.map(({ event, complexType }) => ({ name: event, type: complexType.original }));
    const slots = component.slots.map(({ name }) => name).filter((slot) => slot !== 'default');
    const methods = component.methods
      .filter((method) => !method.docsTags.some(({ name }) => name === 'private'))
      .map(({ name, complexType }) => ({ name, parameters: complexType.parameters, signature: complexType.signature, return: complexType.return }));
		for (const docsTag of component.docsTags) {
			switch (docsTag.name) {
				case 'import': {
					const [type, lib] = docsTag.text.trim().split(',');
					imports[lib] = imports[lib] || [];
					imports[lib].push(type);
					break;
				}
			}
		}
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
      methods,
      slots,
			events
    };
    wrappers.push(wrapper);
  }
  return wrappers;
}
