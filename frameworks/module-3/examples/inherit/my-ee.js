"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyEventEmiter = void 0;
const events_1 = require("events");
class MyEventEmiter extends events_1.EventEmitter {
    printEvents() {
        console.log(this.eventNames());
    }
}
exports.MyEventEmiter = MyEventEmiter;
//# sourceMappingURL=my-ee.js.map