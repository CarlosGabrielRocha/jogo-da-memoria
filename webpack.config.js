const path = require('path')

module.exports = {
    entry: {
        index: './src/index.ts',
        gameIndex: './src/memoryGame.ts'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public'),
    },
    mode: 'production'
}

