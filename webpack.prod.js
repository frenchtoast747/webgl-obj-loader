const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "webgl-obj-loader.min.js",
        sourceMapFilename: "webgl-obj-loader.min.js.map"
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production")
        })
    ]
});
