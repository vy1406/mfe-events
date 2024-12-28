const { defineConfig } = require('@vue/cli-service');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'vueApp',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/App.vue', 
        }
      }),
    ],
  },
  devServer: {
    port: 3300, 
  },
});
