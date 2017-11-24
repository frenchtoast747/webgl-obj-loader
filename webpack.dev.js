const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    devtool: 'inline-source-map',
    output: {
        filename: 'webgl-obj-loader.js',
        sourceMapFilename: 'webgl-obj-loader.js.map'
    }
});