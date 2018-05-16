import path from 'path'

import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
// import InlineChunkManifestHtmlWebpackPlugin from 'inline-chunk-manifest-html-webpack-plugin'

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  title: 'Whiteblock Strategic Advisors',
  template: path.join(__dirname, 'src', 'index.ejs'),
  // favicon: path.join(__dirname, 'src', 'assets', 'img', 'favicon.ico'),
  minify: {
    collapseWhitespace: true,
  },
})

export default {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      'babel-polyfill',
      './src/index.js',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'assets/[name].js',
    chunkFilename: 'assets/[name].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './src/',
    hot: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
      },
    }),
    /* Done automatically in Development env
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    */
    HtmlWebpackPluginConfig,
    // new InlineChunkManifestHtmlWebpackPlugin({
    //   dropAsset: true,
    // }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.json'],
    modules: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules'),
    ],
    alias: {
      Components: path.join(__dirname, 'src/components'),
      Presentational: path.join(__dirname, 'src/presentational'),
      Styled: path.join(__dirname, 'src/styled'),
      Utils: path.join(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/i,
        use: ['file-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)$/i,
        use: ['url-loader'],
        include: path.join(__dirname, 'src'),
      },
    ],
  },
}
