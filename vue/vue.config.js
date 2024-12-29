const { defineConfig } = require('@vue/cli-service');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:4300/",
  
  configureWebpack: {
    optimization: {
      runtimeChunk: false,
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'vue_app',
        filename: 'remoteEntry.js',
        exposes: {
          './vueApp': './src/main.js', 
        },
        shared: require('./package.json').dependencies,
      }),
    ],
  },
  devServer: {
    port: 4300, 
  },
});
