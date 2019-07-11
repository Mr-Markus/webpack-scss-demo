var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    // Do something with code with loaders
    module: {
        rules: [
            {
                test: /\.css$/, // check if file extensions is .css
                use: [
                    // loaders are reversed loaded
                    'style-loader',
                    'css-loader' // load css loader first
                ]
            }
        ]
    },
    // plugins are executed on the bundle before it is copied to the dist folder
    plugins: [

    ],
    // since webpack 4 availible
    optimization: {
        minimize: true
    }
}