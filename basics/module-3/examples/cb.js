"use strict";
function doExcercise(num, midCallback, finishCallback) {
    //do something:
    num++;
    //callback 1:
    midCallback();
    //do something else:
    num--;
    //callback 2:
    finishCallback(num);
}
doExcercise(12, () => { console.log("mid"); }, (num) => { console.log(num); });
//# sourceMappingURL=cb.js.map