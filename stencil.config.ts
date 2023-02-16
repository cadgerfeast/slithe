// Helpers
import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'slithe',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      dir: 'dist',
      customElementsExportBehavior: 'bundle'
    }
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
