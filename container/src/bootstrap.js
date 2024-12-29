import React, { lazy, Suspense } from 'react';

const ReactLazy = lazy(() => import('./modules/reactModule'))
const AngularLazy = lazy(() => import('./modules/angularModule'))
const VueApp = lazy(() => import('./modules/vueModule'))

const App = () => {
  return (
    <div>
      <h1>Container App</h1>

      <Suspense fallback={<div>Loading Angular App...</div>}>
        <div id="angular-app">
          <AngularLazy />
        </div>
      </Suspense>


      <Suspense fallback={<div>Loading React App...</div>}>
        <div id="react-app">
          <ReactLazy />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading Vue App...</div>}>
        <div id="vue-app">
          <VueApp />
        </div>
      </Suspense>

    </div>
  );
};

export default App;