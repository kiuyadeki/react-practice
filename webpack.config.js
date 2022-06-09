const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/index.js',
  },
  output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'js/[name]-[contenthash].js',
      publicPath: '/',
  },
  devServer: {
    static: path.resolve(__dirname, 'dist/'),
    hot: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']]
              },
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
              ],
            },
          }
        ],
      },
      {
        test: /\.(png|jpg|jpeg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[contenthash][ext]',
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/[name]-[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/index.html',
      filename: 'index.html',
      alwaysWriteToDisk: true
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/access.html',
      filename: 'access.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/templates/members/taro.html',
      filename: 'members/taro.html',
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CleanWebpackPlugin(),
  ],
};
