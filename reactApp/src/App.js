import React from 'react'

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

    return (
      <div>
        <h1>React App</h1>

        <button onClick={() => handleDispatchCustomEvent()}>
          custom event
        </button>
      </div>
    );
  };
  
  export default App;