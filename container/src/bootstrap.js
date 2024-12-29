import React, { useEffect } from 'react';
import './style.css';
import AllApps from './components/allApps';
import {eventBus} from 'event-bus';


const App = () => {

  const handleCustomEvent = (e) => {
    window.alert(e.detail.message + ' | ' + e.detail.remote);
  };

  const handlePackageEventBus = (customEvent) => {
    window.alert(customEvent.message + ' | ' + customEvent.remote);
  }

  useEffect(() => {

    window.addEventListener('customEventName', handleCustomEvent);

    eventBus.subscribe('customEventBusEvent', handlePackageEventBus);

    return () => {
      window.removeEventListener('customEventName', handleCustomEvent);
      eventBus.unsubscribe('customEventBusEvent', handlePackageEventBus);
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