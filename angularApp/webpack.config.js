const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;
const path = require("path");

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "angularApp",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "angularApp",
      filename: "remoteEntry.js",
      exposes: {
        "./AppModule": "./src/app/app.module.ts",
      }
    }),
  ],
};
