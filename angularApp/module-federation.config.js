const { withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'angularApp',
  fileName: "remoteEntry.js",
  exposes: {
    './App': './src/app/app.module.ts',
  }
});
