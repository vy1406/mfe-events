export type EventCallback = (data: any) => void;

export class MessageBus {
  subscribe(eventType: string, callback: EventCallback): void;
  unsubscribe(eventType: string, callback: EventCallback): void;
  publish(eventType: string, data: any): void;
}

export const eventBus: MessageBus;
