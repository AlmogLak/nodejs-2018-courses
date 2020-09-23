import { EventEmitter } from "events";

export class MyEventEmiter extends EventEmitter {
    public printEvents() {
        console.log(this.eventNames());
    }
}
