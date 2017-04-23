var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
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
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            },
            {
				test: /\.(jpg|png|gif|svg)$/,
				loader: 'file-loader?outputPath=img/'
            }
     ]
    },
    devServer: {
      contentBase: path.join(__dirname, "www"),
      compress: true,
      port: 9000
    }
};
