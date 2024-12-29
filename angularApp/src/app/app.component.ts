import { Component } from '@angular/core';
import {eventBus} from 'event-bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularApp';

  customEvent = new CustomEvent('customEventName', {
    detail: {
      message: 'Custom event',
      remote: 'AngularApp'
    }
  });
  

  onCustomEvent = () => {
    console.log("Custom event fired");
    window.dispatchEvent(this.customEvent);
  }

  onEventBus = () => {
    eventBus.publish('customEventBusEvent', { message: 'Event Bus', remote: 'AngularApp' });
  }
  
}



