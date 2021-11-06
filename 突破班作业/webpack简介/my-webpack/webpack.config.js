var path = require('path')
var HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/main.js',
    devtool: "cheap-eval-source-map", // webpack --progress --watch
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'stylus-loader' }
                ]
            },
            { test: /\.png$/, use: 'file-loader' }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
    ]
}