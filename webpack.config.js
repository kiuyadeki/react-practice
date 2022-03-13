const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'), //path.resolveで絶対パスを取得、第一引数(__dirname)が現在の階層を表す
    }
}
