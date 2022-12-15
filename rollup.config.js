import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import cssnano from 'cssnano'
import autoprefixer from 'autoprefixer'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: process.env.NODE_ENV === 'production' ? false : true,
        exports: 'default',
        inlineDynamicImports: true
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: process.env.NODE_ENV === 'production' ? false : true,
        exports: 'default',
        inlineDynamicImports: true
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', declaration: false }),
      json(),
      //Bundle any css files using postcss.
      postcss({
        plugins: [autoprefixer(), cssnano()],
        sourceMap: false,
        extract: true,
        inject: false,
        sourceMap: process.env.NODE_ENV !== 'production',
        minimize: process.env.NODE_ENV === 'production'
      }),
      process.env.NODE_ENV === 'production' && terser()
    ],
    external: ['react', 'react-dom']
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.(css|less|scss)$/]
  }
]
