"use strict";
const slow = () => {
    for (let i = 0; i < 9999999999; i++) { }
    console.log("wait is done");
    return "done";
};
const a = slow();
const b = slow();
const c = slow();
console.log(a, "a");
console.log(b, "b");
console.log(c, "c");
//# sourceMappingURL=blocking-op.js.map