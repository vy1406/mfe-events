const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    publicPath: env.production ? '/container/' : 'http://localhost:4000/',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    port: 4000,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        angularApp: 'angularApp@http://localhost:4100/remoteEntry.js',
        reactApp: 'reactApp@http://localhost:4200/remoteEntry.js',
        vueApp: 'vueApp@http://localhost:4300/remoteEntry.js',
      },
    }),
  ],
});