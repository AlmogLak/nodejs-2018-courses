"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("./events");
events_1.eventEmitter.on("data", (data) => {
    console.log("hello, this is new print of data", data);
});
events_1.eventEmitter.emit('data', { "almog": 18 });
//# sourceMappingURL=eventsNew.js.map