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
      }),
    ],
  },
  devServer: {
    port: 4300,
  },
});
