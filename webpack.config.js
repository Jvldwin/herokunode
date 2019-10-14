const  webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    node: {
        console: false,
        global: true,
        process: true,
        __filename: false,
        __dirname: false,
        Buffer: true,
        setImmediate: true
    },
    entry: './src/server.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    plugins: [
        new webpack.BannerPlugin({banner: 'require("source-map-support").install();', raw: true, entryOnly: false }),
    ],
    devtool: 'sourcemap' 
}