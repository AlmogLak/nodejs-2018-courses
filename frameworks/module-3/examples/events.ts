import { EventEmitter } from "events";

export const eventEmitter = new EventEmitter();


eventEmitter.on('data', (data) => {
    console.log("data", data);
});

for (let index = 0; index < 100; index++) {
    eventEmitter.emit('data', {"counter": index});
}