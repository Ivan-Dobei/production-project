import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import {BuildOptions} from './types/config';
import {buildStyleLoader} from './loaders/buildStyleLoader';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
   const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
   };

   const babelLoader = {
      test: /\.m?js$/,
      exclude: /node_modules/,
      use: {
         loader: 'babel-loader',
         options: {
            presets: ['@babel/preset-env'],
         },
      },
   };

   const fileLoader = {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
         {
            loader: 'file-loader',
         },
      ],
   };

   const typescriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
   };

   const styleLoader = buildStyleLoader(isDev);

   return [
      svgLoader,
      fileLoader,
      babelLoader,
      typescriptLoader,
      styleLoader,
   ];
}
