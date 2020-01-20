import { EventEmitter } from "events";
import * as fs from "fs";
export const eventEmitter = new EventEmitter();
process.nextTick(() => eventEmitter.emit('start'));
// setImmediate(() => eventEmitter.emit('start'));
const rs = fs.createReadStream(__filename);
rs.on('data', data => eventEmitter.emit('data', data.toString()));


// -----------------------------------------------


eventEmitter.on('start', () => console.log("start"));
eventEmitter.on('data', (chunkRead) => console.log(`data: ${chunkRead}`));