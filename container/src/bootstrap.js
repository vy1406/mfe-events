import React, { lazy, Suspense, useEffect } from 'react';
import './style.css';

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
  

  useEffect(() => {
    const handleCustomEvent = (e) => {
      window.alert(e.detail.message + ' | ' + e.detail.remote);
    };

    window.addEventListener('customEventName', handleCustomEvent);

    return () => {
      window.removeEventListener('customEventName', handleCustomEvent);
    };
  }, []);

  return (
    <div className='container' id='container_id'>
      <h1>Container App</h1>

      <div className='container-apps'>

        <Suspense fallback={<div>Loading Angular App...</div>}>
          <div className="angular">
            <AngularLazy />
          </div>
        </Suspense>


        <Suspense fallback={<div>Loading React App...</div>}>
          <div className="react">
            <ReactLazy />
          </div>
        </Suspense>

        <Suspense fallback={<div>Loading Vue App...</div>}>
          <div className="vue">
            <VueApp />
          </div>
        </Suspense>
      </div>

    </div>
  );
};

export default App;