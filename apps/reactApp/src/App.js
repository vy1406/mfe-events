import React from 'react'
import { eventBus } from 'event-bus';

const App = () => {

  const customEvent = new CustomEvent('customEventName', {
    detail: {
      message: 'Custom event',
      remote: 'ReactApp'
    }
  });

  const handleDispatchCustomEvent = () => {
    window.dispatchEvent(customEvent);
  }

  const handleEventBusEvent = () => {
    eventBus.publish('customEventBusEvent', { message: 'Event Bus', remote: 'ReactApp' });
  }

  const handleStorageEvent = () => {
    localStorage.setItem('storageEvent', JSON.stringify({ message: 'Storage Event', remote: 'ReactApp' }));
    window.alert('Storage Event | ReactApp');
    // Now you get the data from localsotrage in the container app
  }

  return (
    <div>
      <h1>React App</h1>

      <button onClick={() => handleDispatchCustomEvent()}>
        custom event
      </button>
      <button onClick={() => handleEventBusEvent()}>
        event bus
      </button>
      <button onClick={() => handleStorageEvent()}>
        storage event
      </button>
    </div>
  );
};

export default App;