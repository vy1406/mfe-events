module.exports = {
    name: 'angularApp',
    exposes: {
      './App': './src/app/app.component.ts', 
    },
    shared: {
      '@angular/core': { singleton: true, strictVersion: true },
      '@angular/common': { singleton: true, strictVersion: true },
      '@angular/router': { singleton: true, strictVersion: true },
    },
    remotes: {
        angularApp: 'angularApp@http://localhost:3200/remoteEntry.js',
      },
  };
  