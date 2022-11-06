const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    entry: "./src/main.js", // 入口
    output: {
        path: path.join(__dirname, "dist"), // 出口路径
        filename: "bundle.js" // 出口文件名
    },
    devServer: {
        port: 3000, // 端口号
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html' // 以此为基准生成打包后html文件
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
            // 输出的css文件名不变的意思
        })
    ],
    module: {
        rules: [ // loader的规则
            {
                test: /\.css$/, // 匹配所有的css文件
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            },
            {
                test: /\.less$/,
                // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
                use: ["style-loader", "css-loader", 'less-loader']
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                type: 'asset'
            },
            { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:6][ext]'
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                    }
                }
            }
        ]
    },
    mode: "production"
}