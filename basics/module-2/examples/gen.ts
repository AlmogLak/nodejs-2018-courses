

function identity<T>(arg: T): T {
    return arg;
}
let output = identity(14);
console.log(typeof(output));
// output = 14;