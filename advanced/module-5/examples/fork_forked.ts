console.log("do stuff...");

process.on("message", (message) => {
    console.log(`worker process got a message: ${message}`);
});

process.send("Hello main!");