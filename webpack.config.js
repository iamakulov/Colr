'use strict';

let path = require('path');
let autoprefixer = require('autoprefixer');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'babel-loader?presets[]=react&presets[]=es2015&presets[]=stage-2']
            },
            {
                test: /\.no-modules\.css$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: path => path.endsWith('.css') && !path.endsWith('.no-modules.css'),
                loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]', 'postcss-loader']
            },
            {
                test: /\.json/,
                loader: 'json-loader'
            },
            {
                test: /\.jpg$/,
                loader: 'file-loader'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer({ browsers: ['last 2 versions'] })];
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src', 'index.html')
    })]
};