const path = require("path");

const OUTDIR = path.join(__dirname, "/dist");

module.exports = {
    mode: "none",
    entry: [path.join(__dirname, "/src/index.ts")],
    output: {
        path: OUTDIR,
        publicPath: "/",
        libraryTarget: "umd",
        umdNamedDefine: true,
        // it seems as though outputting `umd` should not dump `window`,
        // but it does... which breaks node.js projects. Explicitly
        // set the global object here.
        globalObject: "typeof self !== 'undefined' ? self : this",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};
