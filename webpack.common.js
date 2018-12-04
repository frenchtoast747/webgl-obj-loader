const path = require('path');

const OUTDIR = path.join(__dirname, '/dist');

module.exports = {
    mode: 'none',
    entry: [
        path.join(__dirname, '/src/index.ts')
    ],
    output: {
        path: OUTDIR,
        publicPath: '/',
        library: 'OBJ',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
};