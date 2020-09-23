function doExcercise(num: number, midCallback: ()=>void, finishCallback: (num: number)=>void) {
    //do something:
    num++;
    //callback 1:
    midCallback();
    //do something else:
    num--;
    //callback 2:
    finishCallback(num);
}
doExcercise(12, ()=>{ console.log("mid"); }, (num)=>{ console.log(num); })
