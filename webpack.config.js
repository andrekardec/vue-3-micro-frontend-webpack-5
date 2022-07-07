const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    static: {
      directory: path.join(__dirname, './src/ui/public'),
    },
    compress: true,
    port: 8081,
    historyApiFallback: true
  },
  entry: "./src/ui/main.ts",
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.s[a|c]ss$/i,
        use: [
          process.env.NODE_ENV !== "production"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: "sass-loader",
            options: {
              api: "modern",
              implementation: require.resolve("sass"),
              sassOptions: {
                fiber: false,
                outputStyle: "compressed",
                indentWidth: 4,
                includePaths: "./src/sass",
              },
              sourceMap: true,
            },
          },
          {
            loader: "sass-resources-loader",
            options: {
              resources: "./src/ui/sass/main.scss"
            }
          }
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: { appendTsSuffixTo: [/\.vue$/] },
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@providers': path.resolve(__dirname, 'src', 'providers'),
      '@ui': path.resolve(__dirname, 'src', 'ui'),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './src/ui/public/index.html'),
      inject: true
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new VueLoaderPlugin()
  ],
  stats: {
    loggingDebug: ["sass-loader"],
  },
};