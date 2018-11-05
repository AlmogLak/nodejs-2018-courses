"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
exports.eventEmitter = new events_1.EventEmitter();
exports.eventEmitter.on('data', (data) => {
    console.log("data", data);
});
for (let index = 0; index < 100; index++) {
    exports.eventEmitter.emit('data', { "counter": index });
}
//# sourceMappingURL=events.js.map