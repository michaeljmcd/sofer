var webpack = require('webpack');
//require("imports?this=>window!jquery-mobile/dist/jquery.mobile.min.js");

module.exports = {
    entry: {
        app: './app/index.js',
        vendor: ['jquery', "imports-loader?this=>window!jquery-mobile/dist/jquery.mobile.min.js"]
    },
    output: {
        filename: 'www/js/[name].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};
