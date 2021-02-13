import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const input = {
  index: 'src/index.ts',
  'getTop/index': 'src/getTop/index.ts',
  'getTop/getTop': 'src/getTop/getTop.ts',
  'scroll/index': 'src/scroll/index.ts',
  'scroll/scroll': 'src/scroll/scroll.ts',
  'scrollLoop/index': 'src/scrollLoop/index.ts',
  'scrollLoop/scrollLoop': 'src/scrollLoop/scrollLoop.ts',
  'scrollTo/index': 'src/scrollTo/index.ts',
  'scrollTo/scrollTo': 'src/scrollTo/scrollTo.ts',
}

export default [
  {
    input,
    output: {
      dir: 'lib',
      entryFileNames: '[name]' + pkg.main.replace('index', ''),
      format: 'cjs'
    },
    plugins: [
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: 'esnext'
          },
          include: [
            'index.ts'
          ]
        }
      })
    ]
  },
  {
    input,
    output: {
      dir: 'lib',
      entryFileNames: '[name]' + pkg.module.replace('index', ''),
      format: 'es'
    },
    plugins: [
      typescript({
        rollupCommonJSResolveHack: false,
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            target: 'es6',
            module: 'esnext'
          },
          include: [
            'index.ts'
          ]
        }
      })
    ]
  },
]
