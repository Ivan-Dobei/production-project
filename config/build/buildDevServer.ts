import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptios } from './types/config';

export function buildDevServer(options: BuildOptios): DevServerConfiguration {
   return {
      port: options.port,
      open: true,
      historyApiFallback: true,
   };
}