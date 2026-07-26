import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { type Configuration as DevServerConfiguration } from "webpack-dev-server";

type Mode = 'development' | 'production'

interface EnvVariables {
    mode: Mode,
    port: number
}

export default (env: EnvVariables) => {
    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const isProd = mode === 'production'
    const PORT = env.port || 3000

    const config: webpack.Configuration = {
        mode: mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            filename: "[name].[contenthash].js",
            path: path.resolve(__dirname, "build"),
            clean: true,

        },
        plugins: [
            new HtmlWebpackPlugin(
                { template: path.resolve(__dirname, 'public', 'index.html') },
            ),
            new webpack.ProgressPlugin(),
            isProd && new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            })
        ],

        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
        },
        devServer: isDev ? {
            port: PORT,
            open: true
        } : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    }
    return config
}