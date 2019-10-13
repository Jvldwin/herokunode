const  webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
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