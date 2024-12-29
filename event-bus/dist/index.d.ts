type EventCallback = (data: any) => void;

declare class MessageBus {
  subscribe(eventType: string, callback: EventCallback): void;
  unsubscribe(eventType: string, callback: EventCallback): void;
  publish(eventType: string, data: any): void;
}

declare const eventBus: MessageBus;

export { type EventCallback, MessageBus, eventBus };
