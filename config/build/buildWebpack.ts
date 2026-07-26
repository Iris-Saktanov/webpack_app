import path from 'path'
import webpack from 'webpack'
import { buildDevServer } from './buildDevserver';
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { type BuildOptions } from './types/types'

export function buildWebpack(options: BuildOptions): webpack.Configuration {
    const { mode, paths } = options
    const isDev = mode === 'development'

    const config: webpack.Configuration = {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true,

        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devServer: isDev ? buildDevServer(options) : undefined,
        devtool: isDev ? 'inline-source-map' : undefined,
    }
    return config
}