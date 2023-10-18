const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true
    },
    hot: true,
    port: 4000
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /bundle\.tsx$/,
        loader: 'bundle-loader',
        options: {
          lazy: true
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader'
          },
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          {
            loader: require.resolve('url-loader')
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico'
    }),
    new CleanWebpackPlugin()
  ]
};
