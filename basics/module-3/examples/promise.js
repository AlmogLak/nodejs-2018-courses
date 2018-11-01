"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
function printDelayed(elements) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const element of elements) {
            console.log("Waiting 2000 ms");
            yield delay(2000);
            console.log(element);
        }
    });
}
printDelayed(["Hello", "beautiful", "world"]).then(() => {
    console.log("done!");
});
//# sourceMappingURL=promise.js.map