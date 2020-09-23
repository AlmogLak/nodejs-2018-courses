"use strict";
let promise1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve('This is a string after waiting 300MS!');
    }, 300);
});
promise1.then((value) => {
    console.log("a", value);
    return value + " !!!";
}).then((value) => {
    console.log("b", value);
}).catch((err) => {
    console.error(err);
});
console.log("Hello world!");
//# sourceMappingURL=promise1.js.map