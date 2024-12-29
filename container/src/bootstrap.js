import React, { lazy, Suspense } from 'react';

const ReactLazy = lazy(() => import('./modules/reactModule'))
const AngularLazy = lazy(() => import('./modules/angularModule'))
const VueApp = lazy(() => import('./modules/vueModule'))

// const VueApp2 = lazy(() =>
//   import('vueApp/vueApp').catch((err) => {
//     console.error("Failed to load VueApp:", err);
//     return { default: () => <div>Failed to load Vue App</div> };
//   })
// );

const App = () => {
  return (
    <div>
      {/* <VueApp2 /> */}
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
        <div id="vue-app2">
          <VueApp />
        </div>
      </Suspense>

    </div>
  );
};

export default App;