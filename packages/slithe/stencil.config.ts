// Helpers
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

export const config: Config = {
  namespace: 'slithe',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      dir: 'dist',
      customElementsExportBehavior: 'bundle',
      generateTypeDeclarations: true
    },
    vueOutputTarget({
      componentCorePackage: 'slithe',
      proxiesFile: './vue/exports/components.ts',
      componentModels: [
        {
          elements: ['sl-input-checkbox', 'sl-input-number', 'sl-input-text'],
          event: 'input',
          targetAttr: 'value'
        }
      ]
    })
  ],
  plugins: [
    sass()
  ],
  testing: {
    collectCoverage: true,
    setupFiles: [
      './devops/npm/test/setup.ts'
    ]
  }
};
