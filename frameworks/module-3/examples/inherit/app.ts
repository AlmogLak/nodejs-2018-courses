import { MyEventEmiter } from "./my-ee";

const myEE = new MyEventEmiter();

myEE.addListener("data", data => console.log(data));

myEE.emit("data", {"almog": "laktivi"});

myEE.printEvents();