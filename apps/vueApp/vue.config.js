const { defineConfig } = require('@vue/cli-service');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:4300/",
  configureWebpack: {
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'vueApp',
        filename: 'remoteEntry.js',
        exposes: {
          './vueApp': './src/main.js',
        },
        shared: {
          'event-bus': { singleton: true, eager: true, requiredVersion: '1.0.0' },
        },
      }),
    ],
  },
  devServer: {
    port: 4300,
  },
});
