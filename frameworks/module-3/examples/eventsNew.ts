import {eventEmitter} from './events';

eventEmitter.on("data", (data) => {
    console.log("hello, this is new print of data", data);
});

eventEmitter.emit('data', {"almog": 18});