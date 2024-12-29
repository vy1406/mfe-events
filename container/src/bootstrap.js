import React, { useEffect } from 'react';
import './style.css';
import AllApps from './components/allApps';
import messageBus from './messageBus';


const App = () => {

  useEffect(() => {
    const handleCustomEvent = (e) => {
      window.alert(e.detail.message + ' | ' + e.detail.remote);
    };

    window.addEventListener('customEventName', handleCustomEvent);
    const handleDataUpdate = (data) => {
      debugger;
      console.log("Data received in container app: ", data)
    };

    messageBus.subscribe('planetData', handleDataUpdate);

    return () => {
      messageBus.unsubscribe('planetData', handleDataUpdate);
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