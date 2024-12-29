import React from 'react'
import { eventBus } from 'event-bus';
import { useDispatch } from 'react-redux';
import store from 'container/store';

const App = () => {

  const dispatch = useDispatch();

  const handleReduxEvent = () => {
    dispatch(store.dispatchEvent({ message: 'Redux Event', remote: 'ReactApp' }));
  };


  const handleDispatchCustomEvent = () => {
    const customEvent = new CustomEvent('customEventName', {
      detail: { message: 'Custom event', remote: 'ReactApp' }
    });
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
      <button onClick={() => handleReduxEvent()}>
        redux event
      </button>
    </div>
  );
};

export default App;