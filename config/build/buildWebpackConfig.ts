import webpack from 'webpack';
import {buildDevServer} from './buildDevServer';
import {buildLoaders} from './buildLoaders';
import {buildPlugins} from './buildPlugins';
import {buildResolves} from './buildResolves';
import {BuildOptions} from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

   const {mode, paths, isDev} = options;

   return {
      entry: paths.entry,
      mode: mode,
      output: {
         filename: '[name].[contenthash].js',
         path: paths.build,
         clean: true,
         publicPath: '/',
      },
      plugins: buildPlugins(options),
      module: {
         rules: buildLoaders(options),
      },
      resolve: buildResolves(options),
      devtool: isDev ? 'inline-source-map' : undefined,
      devServer: isDev ? buildDevServer(options) : undefined,
   };
}
