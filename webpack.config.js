const  webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    node: {
        console: false,
        global: true,
        process: true,
        __filename: true,
        __dirname: true,
        Buffer: true,
        setImmediate: true
        // See "Other node core libraries" for additional options.
    },
    entry: './src/server.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    plugins: [
        new webpack.BannerPlugin({banner: 'require("source-map-support").install();', raw: true, entryOnly: false })
    ],
    devtool: 'sourcemap' 
}