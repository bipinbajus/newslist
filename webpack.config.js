const path = require('path')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main-[contenthash].min.js',
        clean:true
    },
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'dist')
        },
        port:3000,
        open:true,
        hot:true,
        compress:true
    },
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPLugin ({
            title:'News Corp.',
            filename:'index.html',
            template:'src/template.html'
        }),
        new CopyPlugin({
            patterns: [
              { from: "data/code-test.json", to: "data" }
            ],
          })
    ]
}