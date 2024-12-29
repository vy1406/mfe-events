class MessageBus {
  constructor() {
    if (!MessageBus.instance) {
      console.log('MessageBus Singleton Created');
      this.listeners = {};
      MessageBus.instance = this;
    }
    return MessageBus.instance;
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

const eventBus = new MessageBus();
export { MessageBus, eventBus };
