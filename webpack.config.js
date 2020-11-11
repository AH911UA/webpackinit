const path = require('path');

module.exports =
{
    // mode: 'prodaction',
    entry: "./src/index.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}