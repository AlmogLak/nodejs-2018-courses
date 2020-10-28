"use strict";
const fullName = (name, last) => {
    // throw new Error("Hi there...!");
    return `${name} ${last}`;
};
const nameWithAge = (name, last, age) => `${fullName(name, last)} (${age})`;
const printDetailes = (name, last, age) => {
    const result = nameWithAge(name, last, age);
    console.log(result);
};
printDetailes("Almog", "Laktivi", 30);
//# sourceMappingURL=call-stack.js.map