<template>
  <div>
    <h1>Vue App</h1>
  </div>
  <button @click="dispatchCustomEvent">custom event</button>
</template>

<script>
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
  }
};
</script>
<style>

</style>
