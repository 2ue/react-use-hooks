const defineConfig = require('rollup').defineConfig;
// 使用 require 语法导入 Babel 插件
const babel = require('rollup-plugin-babel');
// 使用 require 语法导入 TypeScript 插件
const typescript = require('@rollup/plugin-typescript');
// 使用 require 语法导入 Node Resolve 插件
const resolve = require('@rollup/plugin-node-resolve');
// 使用 require 语法导入 CommonJS 插件
const commonjs = require('@rollup/plugin-commonjs');
const { terser } = require('rollup-plugin-terser');

// 多入口，模块化输出
const inputs = require('./inputs');

module.exports = defineConfig({
    input: inputs,
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            entryFileNames: 'cjs/[name].js',
            sourcemap: true,
        },
        {
            dir: 'dist',
            format: 'es',
            sourcemap: true,
            entryFileNames: 'es/[name].js'
        },
    ],
    external: ['react', 'react-dom'],
    plugins: [
        babel(),
        typescript(),
        resolve(),
        commonjs(),
        terser()
    ],
});