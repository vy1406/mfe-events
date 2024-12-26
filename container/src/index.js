import React from 'react';
import { createRoot } from 'react-dom/client';


const App = () => {
//   const [AngularApp, setAngularApp] = React.useState(null);
//   const [ReactApp, setReactApp] = React.useState(null);
//   const [VueApp, setVueApp] = React.useState(null);

//   React.useEffect(() => {
//     Promise.all([
//       import('angularApp/App'),
//       import('reactApp/App'),
//       import('vueApp/App')
//     ]).then(([Angular, ReactComp, Vue]) => {
//       setAngularApp(Angular.default);
//       setReactApp(ReactComp.default);
//       setVueApp(Vue.default);
//     });
//   }, []);

  return (
    <div>
      <h1>Container App</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: AngularApp }} />
      <div dangerouslySetInnerHTML={{ __html: ReactApp }} />
      <div dangerouslySetInnerHTML={{ __html: VueApp }} /> */}
    </div>
  );
};

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
