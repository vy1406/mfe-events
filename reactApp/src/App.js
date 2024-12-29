import React from 'react'
import eventBus from 'event-bus';

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


    return (
      <div>
        <h1>React App</h1>

        <button onClick={() => handleDispatchCustomEvent()}>
          custom event
        </button>
        <button onClick={() => handleEventBusEvent()}>
          event bus
        </button>
      </div>
    );
  };
  
  export default App;