const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
 

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract([
                    {
                      loader: 'css-loader'
                    }, {
                      loader: 'sass-loader',
                      options: {
                        importer: globImporter(),
                        includePaths: ['./node_modules']
                      }
                    }
                  ])
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'}),
        new ExtractTextPlugin({
            filename: 'style.css'
          })
    ]
};