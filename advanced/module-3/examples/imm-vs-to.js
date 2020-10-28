"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
// const slowAdd = (a: number, b: number) => {
//     setTimeout(() => console.log("setTimeout:" + a+b), 0);
//     setImmediate(() => console.log("setImmediate:" + a+b));
// }
// slowAdd(1, 2);
fs.readFile(__filename, () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('immediate');
    });
});
//# sourceMappingURL=imm-vs-to.js.map