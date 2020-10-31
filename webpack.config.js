const path = require('path');

const RemoveDistPlugin = require('./src/plugins/reoveDistPlugin')

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve('./src/loaders/consoleLoader.js')
                    }
                ]
            }
        ]
    },
    plugins: [
        new RemoveDistPlugin()
    ]
}