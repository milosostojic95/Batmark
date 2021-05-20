const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports =  {
    entry: [require.resolve('./src/js/index.js')],
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
          }),
          new HtmlWebpackPlugin({
            filename: 'izrada-alata.html',
            template: './src/izrada-alata.html'
          }),
          new HtmlWebpackPlugin({
            filename: 'service-two.html',
            template: './src/service-two.html'
          }),
          new HtmlWebpackPlugin({
            filename: 'service-three.html',
            template: './src/service-three.html'
          }),
          new HtmlWebpackPlugin({
            filename: 'gallery.html',
            template: './src/gallery.html'
          }),
          new HtmlWebpackPlugin({
            filename: 'reference.html',
            template: './src/reference.html'
          }),
          new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './src/contact.html'
          }),
          new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './src/about.html'
          }),
           new MiniCssExtractPlugin({
            filename: '[name].css'
          }),
          new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'window.jQuery': 'jquery',
            'Popper': 'popper.js',
            "Bootstrap": "bootstrap.js"
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader',]
            },
            {
                test: /\.css$/,
                use: [
                {
                    loader: 'style-loader', // creates style nodes from JS strings
                },
                {
                    loader: 'css-loader', // translates CSS into CommonJS
                },
                ],
            },
            {
                test: /\.(mp4|svg|png|jpe?g|gif|ico)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                    name: '[name].[ext]',
                    outputPath: 'images',
                    esModule: false
                    }
                }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                loader: 'html-loader',
                options: {
                  attrs: [":src"]
                }
                }
            },
            {
                test:/\.(woff2|woff|otf|ttf)$/,
                use:[
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts',
                    }
                  }
                ]
            }
        ]
    }
}
