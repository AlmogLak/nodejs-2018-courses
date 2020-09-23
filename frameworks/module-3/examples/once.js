"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const fs = require("fs");
const eventEmitter = new events_1.EventEmitter();
eventEmitter.once('data', (data) => {
    console.log("once", data);
});
// eventEmitter.addListener('data', (data) => {
//     console.log("addListener: ", data);
// });
for (let index = 0; index < 100; index++) {
    eventEmitter.emit('data', { "counter": index });
}
// console.log(eventEmitter.eventNames());
const rs = new fs.ReadStream();
//# sourceMappingURL=once.js.map