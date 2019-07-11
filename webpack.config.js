var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

var extractPlugin = new MiniCssExtractPlugin({
    filename: 'main.css' // output filename
})

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js', // bundle output filename
        publicPath: '/dist' // relative path
    },
    // Do something with code with loaders
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/, // check if file extensions is .scss .css
                // wrap plugin which contains the loaders that should be executed
                use: [
                    // loaders are reversed loaded
                    // last loader is the first executed
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // enable hot module reloading for scss
                            hmr: process.env.NODE_ENV === 'development'
                        },
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    // plugins are executed on the bundle before it is copied to the dist folder
    plugins: [
        extractPlugin, // put all together and copy it with config to output folder
    ],
    // since webpack 4 availible
    optimization: {
        minimize: true
    }
}