import webpack from 'webpack';
import { BuildOptios } from './types/config';

export function buildResolves({paths}: BuildOptios): webpack.ResolveOptions {
   return {
      extensions: ['.tsx', '.ts', '.js'],
      preferAbsolute: true,
      modules: [paths.src, 'node_modules'],
      mainFiles: ['index'],
      alias: {},
   };
}