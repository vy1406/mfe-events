<template>
  <div>
    <h1>Vue App</h1>
  </div>
  <button @click="dispatchCustomEvent">custom event</button>
  <button @click="dispatchEventBus">event bus</button>
</template>

<script>
import { eventBus } from 'event-bus';

export default {
  methods: {
    dispatchCustomEvent() {
      const customEvent = new CustomEvent('customEventName', {
        detail: {
          message: 'Custom event from Vue App',
          remote: 'VueApp',
        },
      });
      window.dispatchEvent(customEvent); 
    },
    dispatchEventBus() {
      eventBus.publish('customEventBusEvent', { message: 'Event Bus', remote: 'VueApp' });
    },
  }
};
</script>
<style>

</style>
