const path = require('path')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /.(js|jsx)$/,
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader', 'sass-loader'],
                test: /.(css|sass|scss)$/,
            },
            {
                type: "asset/resource",
                test: /.(png|svg|jpg|gif)$/i,
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../fonts' //dont actually use these fonts but still need to process them
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'REACT_APP_RICK_MORTY_URL': JSON.stringify('https://rickandmortyapi.com/api')
            }
        })
    ]
}