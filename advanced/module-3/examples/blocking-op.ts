const slow = () => {
    for(let i=0; i < 9999999999; i++) {}
    console.log("wait is done");
    return "done";
}

const a = slow();

const b = slow();

const c = slow();

console.log(a);

console.log(b);

console.log(c);