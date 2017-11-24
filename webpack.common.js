path = require('path');
const webpack = require('webpack');




module.exports = {
    entry: [
        path.join(__dirname, '/src/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        library: 'OBJ',
        libraryTarget: 'umd',
        umdNamedDefine: true,
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