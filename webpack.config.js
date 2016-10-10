var webpack = require('webpack');

module.exports = {
    context: __dirname + '',
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    entry: './src/app/app.jsx',
    output: {
        path: './dist/app',
        filename: 'bundle.js'
    },
    watch: false,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false
        // })
    ]
};