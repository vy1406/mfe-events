import React, { Suspense } from 'react';

const AngularApp = React.lazy(() => import('angularApp/App'));
const ReactApp = React.lazy(() => import('reactApp/App'));
const VueApp = React.lazy(() => import('vueApp/App'));

const App = () => {
  return (
    <div>
      <h1>Container App</h1>

      <Suspense fallback={<div>Loading Angular App...</div>}>
        <div id="angular-app">
          <AngularApp />
        </div>
      </Suspense>


      <Suspense fallback={<div>Loading React App...</div>}>
        <div id="react-app">
          <ReactApp />
        </div>
      </Suspense>

      {/* <Suspense fallback={<div>Loading Vue App...</div>}>
        <div id="vue-app">
          <VueApp />
        </div>
      </Suspense> */}

    </div>
  );
};

export default App;