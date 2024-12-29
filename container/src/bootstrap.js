import React, { useEffect } from 'react';
import './style.css';
import AllApps from './components/allApps';


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

      <AllApps />

    </div>
  );
};

export default App;