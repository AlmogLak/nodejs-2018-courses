function identity<T>(arg: T): T {
    return arg;
}                                    

let output = identity<string>("myString");
console.log(typeof(output));