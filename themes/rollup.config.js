// Helpers
import * as path from 'path';
import * as fs from 'fs';
import { defineConfig } from 'rollup';
import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';

function copySync (src, dest) {
  if (fs.existsSync(src) && fs.statSync(src).isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copySync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

export default defineConfig([
  {
    input: path.resolve(__dirname, './primer/index.ts'),
    output: {
      dir: path.resolve(__dirname, '../primer'),
      format: 'es'
    },
    plugins: [
      json(),
      commonjs(),
      nodeResolve(),
      typescript({
        tsconfig: path.resolve(__dirname, './tsconfig.json')
      }),
      {
        name: 'copy',
        generateBundle () {
          copySync(path.resolve(__dirname, './primer/global.css'), path.resolve(__dirname, '../primer/global.css'));
          copySync(path.resolve(__dirname, './primer/variables.css'), path.resolve(__dirname, '../primer/variables.css'));
          copySync(path.resolve(__dirname, './primer/fonts'), path.resolve(__dirname, '../primer/fonts'));
        }
      }
    ]
  }
]);
