const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    publicPath: env.production ? '/react/' : 'http://localhost:4200/',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    port: 4200,
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
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'reactApp',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/bootstrap',
      },
      remotes: {
        container: 'container@http://localhost:4000/remoteEntry.js',
      },
      shared: {
        'event-bus': { singleton: true, eager: false, requiredVersion: '1.0.0' },
        '@reduxjs/toolkit': { singleton: true, requiredVersion: '^1.9.0' },
        'react-redux': { singleton: true, requiredVersion: '^8.1.0' },
        react: { singleton: true, requiredVersion: '19.0.0' },
        'react-dom': { singleton: true, requiredVersion: '19.0.0' },
      },
    }),
  ],
});