function delay(milliseconds: number): Promise<void> {
    return new Promise<void>(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
async function printDelayed(elements: string[]) {
    for (const element of elements) {
        console.log("Waiting 2000 ms");
        await delay(2000);
        console.log(element);
    }
}
printDelayed(["Hello", "beautiful", "world"]).then(() => {
    console.log("done!");
});
