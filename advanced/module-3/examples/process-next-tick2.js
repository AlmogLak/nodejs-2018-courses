"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const fs = require("fs");
exports.eventEmitter = new events_1.EventEmitter();
process.nextTick(() => exports.eventEmitter.emit('start'));
// setImmediate(() => eventEmitter.emit('start'));
const rs = fs.createReadStream(__filename);
rs.on('data', data => exports.eventEmitter.emit('data', data.toString()));
// -----------------------------------------------
exports.eventEmitter.on('start', () => console.log("start"));
exports.eventEmitter.on('data', (chunkRead) => console.log(`data: ${chunkRead}`));
//# sourceMappingURL=process-next-tick2.js.map