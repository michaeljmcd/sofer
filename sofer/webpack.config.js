var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './app/index.js',
        vendor: [
            'jquery', 
            "imports-loader?this=>window!jquery-mobile/dist/jquery.mobile.min.js", 
            //'style-loader?css-loader!jquery-mobile/dist/jquery.mobile.min.css'
        ]
    },
    output: {
        filename: 'www/js/[name].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new ExtractTextPlugin('./www/css/app.css'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            },
            {
				test: /\.(jpg|png|gif)$/,
				loader: 'file-loader?outputPath=./www/css/'
            },
        ]
    }
};
