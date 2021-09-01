const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    mode: "development",
    entry: './src/index.ts',
    output: {
        path: __dirname,
        filename: './release/bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, './release'),
        port: 3000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8090'
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.ico"
        })
    ]
}
