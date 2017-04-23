var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    svgLoader = require('svg-inline-loader'),
    path = require('path');

var APP_DIR = path.resolve(__dirname, 'app');

module.exports = {
    entry: {
        app: APP_DIR + '/index.jsx',
        vendor: [
            'jquery',
            'muicss/dist/js/mui.min.js'
        ]
    },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'www')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new ExtractTextPlugin('css/app.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            React: 'react'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            /*
            {
                test: /ic_.*\.svg$/,
                loader: 'file-loader?outputPath=img/&name=[name].[ext]'
            },
            */
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
				test: /\.(jpg|png|gif)$/,
				loader: 'file-loader?outputPath=css/'
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader?name=[name].[ext]&outputPath=/fonts/"
            }
     ]
    },
    devServer: {
      contentBase: path.join(__dirname, "www"),
      compress: true,
      port: 9000
    }
};
