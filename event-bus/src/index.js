class EventBus {
    constructor() {
      if (!EventBus.instance) {
        console.log('EventBus: Singleton instance created');
        this.listeners = {};
        EventBus.instance = this;
      }
      return EventBus.instance;
    }
  
    subscribe(eventType, callback) {
      if (!this.listeners[eventType]) {
        this.listeners[eventType] = [];
      }
      this.listeners[eventType].push(callback);
    }
  
    unsubscribe(eventType, callback) {
      if (this.listeners[eventType]) {
        this.listeners[eventType] = this.listeners[eventType].filter(
          (cb) => cb !== callback
        );
      }
    }
  
    publish(eventType, data) {
      if (this.listeners[eventType]) {
        this.listeners[eventType].forEach((callback) => callback(data));
      }
    }
  }
  
  const eventBus = new EventBus();
  export default eventBus;
  