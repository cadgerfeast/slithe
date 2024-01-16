// Helpers
import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'slithe',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      dir: 'dist',
      customElementsExportBehavior: 'bundle',
      generateTypeDeclarations: true
    },
    {
      type: 'docs-json',
      file: './dist/components.json'
    }
  ],
  testing: {
    collectCoverage: true,
    setupFiles: [
      './devops/npm/test/setup.ts'
    ]
  }
};
