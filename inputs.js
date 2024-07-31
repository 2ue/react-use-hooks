const { globSync } =require('glob')
const jsfiles = globSync('./main/**/*.ts', { ignore: 'node_modules/**' })

const res = {};
jsfiles.forEach(file => {
    res[file.replace('main\\', '').replace('main/', '').replace('.ts', '')] = file
})

module.exports = res;