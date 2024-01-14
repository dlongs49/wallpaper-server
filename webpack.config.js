/*
* Author:dinglong
* DateTime:2024/1/14 下午 4:27
*/
const path = require('path');
const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

console.log('start build');
module.exports = {
    mode: 'production',
    entry: './src/main',
    target: 'node',
    externals: {},
    module: {
        rules: [
            {
                test: /.ts?$/,
                use: {
                    loader: 'ts-loader',
                    options: { transpileOnly: true },
                },
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.ts', '.json'],
    },
    plugins: [
        new webpack.IgnorePlugin({
            checkResource(resource) {
                const lazyImports = [
                    '@nestjs/microservices',
                    '@nestjs/microservices/microservices-module',
                    'cache-manager',
                    'class-transformer/storage',
                    'class-validator',
                    'class-transformer',
                ];
                if (!lazyImports.includes(resource)) {
                    return false;
                }
                try {
                    require.resolve(resource, {
                        paths: [process.cwd()],
                    });
                } catch (err) {
                    return true;
                }
                return false;
            },
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
};
