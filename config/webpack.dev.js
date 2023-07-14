const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

const config = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, '../dist'),
        },
        port: 3000,
        open: "/",
        hot: true,
        historyApiFallback: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
}

module.exports = merge(common, config)