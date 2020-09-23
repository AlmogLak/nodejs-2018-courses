import { EventEmitter } from "events";
import * as fs from "fs";

const eventEmitter = new EventEmitter();


eventEmitter.once('data', (data) => {
    console.log("once", data);
});

// eventEmitter.addListener('data', (data) => {
//     console.log("addListener: ", data);
// });

for (let index = 0; index < 100; index++) {
    eventEmitter.emit('data', {"counter": index});
}

// console.log(eventEmitter.eventNames());
const rs = new fs.ReadStream();