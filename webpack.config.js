const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const WebpackMd5Hash = require('webpack-md5-hash');

module.exports = {
    entry: {
        lib: './source/lib.ts',
        app: './source/app.ts'
    },
    output: {
        path: path.resolve("./build/"),
        filename: '[name].[hash].js'
    },
    //  Choose a developer tool to enhance debugging
    //  https://webpack.github.io/docs/configuration.html#devtool
    devtool: 'eval',
    resolve: {
        extensions: ['', '.ts', '.js'],
        exclude: /node_modules/
    },
    plugins: [
        //  Inject script and link tags into html files
        //  https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            template: './source/index.html'
        }),
        //  Generate common chunks of code
        //  https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
        new webpack.optimize.CommonsChunkPlugin({
            name: ['lib']
        }),
        //  Hash the files using MD5 so that their names change when the content changes
        //  https://www.npmjs.com/package/webpack-md5-hash
        new WebpackMd5Hash(),
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
