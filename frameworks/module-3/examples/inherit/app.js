"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_ee_1 = require("./my-ee");
const myEE = new my_ee_1.MyEventEmiter();
myEE.addListener("data", data => console.log(data));
myEE.emit("data", { "almog": "laktivi" });
myEE.printEvents();
//# sourceMappingURL=app.js.map