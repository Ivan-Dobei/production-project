import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildStyleLoader(isDev: boolean) {
   return {
      test: /\.s[ac]ss$/i,
      use: [
         isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
         {
            loader: 'css-loader',
            options: {
               modules: {
                  auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
                  localIdentName: isDev
                     ? '[path][name]--[local]'
                     : '[hash:base64:8]',
               },
            },
         },
         'sass-loader',
      ],
   };
}
