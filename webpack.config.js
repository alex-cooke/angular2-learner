const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './source/polyfills.ts',
        //   'polyfills': './source/polyfills.ts',
        //   'vendor': './source/vendor.ts',
        index: './source/index.ts'
    },
    output: {
        path: path.resolve("./build/"),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
        exclude: /node_modules/
    },
    plugins: [
        // Inject script and link tags into html files
        // Reference: https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: './source/index.html'
        })
    ],
    module: {
        loaders: [
            //  TypeScript - https://github.com/TypeStrong/ts-loader
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
        ]
    },
    devServer: {
        port: 8080,
        //  Enables support for the HTML5 history API (which supports routing in angular)
        historyApiFallback: true,
        //  Inject a small webpack-dev-server client entry to the bundle which refresh the page on change
        inline: true,
        //  Watch the source files, and recompile the bundle whenever they are changed
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },
        //  The webpack-dev-server will serve the files in the current directory, unless you configure a specific content base.
        contentBase: path.resolve("./build")
    }
};


// // Helper functions
// function root(args) {
//     args = Array.prototype.slice.call(arguments, 0);
//     return path.join.apply(path, [__dirname].concat(args));
// };
