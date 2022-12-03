const path = require("path")
const HtmlWebpack = require('html-webpack-plugin')
const MinCssExtract = require('mini-css-extract-plugin')

module.exports = {
    entry:'./src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist') //__dirname faz o caminho reverso do lugar ou arquivo referido, neste caso "dist"
    },

    module: {                            //para trabalhar com css cria-se o MODULE
        rules: [
            {
                test: /\.(sa|c|sc)ss$/,  //regex-expressão regular. Usado para testar os arquivos que tenha essas letras no final para depois assim processar.
                use: [
                    MinCssExtract.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(jpeg|jpg|png|svg|gif)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'[name].[text]'
                    }
                }
            }
        ]
},
    plugins: [
        new HtmlWebpack({
            filename: 'index.html',
            tamplate: './src/index.html'
}),
        new MinCssExtract({
            filename: 'style.css'
        })
    ]
}