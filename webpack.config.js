path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, '/src/webgl-obj-loader.js')
    ],
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        libraryTarget: 'umd',
        filename: 'webgl-obj-loader.js',
        sourceMapFilename: 'webgl-obj-loader.js.map'
    },
    module: {
        loaders: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        }]
    },
    resolve: {
        extensions: ['*', '.js',]
    },
};