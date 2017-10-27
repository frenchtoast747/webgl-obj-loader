module.exports = {
    entry: [
        './src/webgl-obj-loader.js'
    ],
    devtool: 'source-map',
    output: {
        path: __dirname + '/dist',
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