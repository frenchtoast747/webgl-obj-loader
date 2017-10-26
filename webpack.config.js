module.exports = {
    entry: [
        './src/webgl-obj-loader.js'
    ],
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'webgl-obj-loader.js'
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