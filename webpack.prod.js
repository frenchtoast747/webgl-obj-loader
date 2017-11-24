const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');


module.exports = merge(common, {
    output: {
        filename: 'webgl-obj-loader.min.js',
        sourceMapFilename: 'webgl-obj-loader.min.js.map'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
          sourceMap: false,
          compress: {
            sequences: true,
            dead_code: true,
            conditionals: true,
            booleans: true,
            unused: true,
            if_return: true,
            join_vars: true,
            drop_console: true
          },
          mangle: {
            except: ['$super', '$', 'exports', 'require']
          },
          output: {
            comments: false
          }
        })
      ]
});
