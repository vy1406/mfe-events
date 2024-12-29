import React, { lazy, Suspense } from 'react';

const withErrorBoundary = (importFunc, fallbackMessage) => {
  return lazy(() =>
    importFunc().catch(() => {
      return { default: () => <div>{fallbackMessage}</div> };
    })
  );
};

const ReactLazy = withErrorBoundary(() => import('./modules/reactModule'), 'React Component Unavailable!');
const AngularLazy = withErrorBoundary(() => import('./modules/angularModule'), 'Angular Component Unavailable!');
const VueApp = withErrorBoundary(() => import('./modules/vueModule'), 'Vue Component Unavailable!');

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
        <div id="vue-app2">
          <VueApp />
        </div>
      </Suspense>

    </div>
  );
};

export default App;