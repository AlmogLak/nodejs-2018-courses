const slow = () => {
    // setImmediate(() => {
    //     for(let i=0; i < 9999999999; i++) {}
    //     console.log("wait is done");
    // });

    // setTimeout(() => {
    //     for(let i=0; i < 9999999999; i++) {}
    //     console.log("wait is done");
    // }, 0);
    
    for(let i=0; i < 9999999999; i++) {}
    console.log("wait is done");
    
    return "done";
}

const a = slow();

const b = slow();

const c = slow();

console.log(a, "a");

console.log(b, "b");

console.log(c, "c");
