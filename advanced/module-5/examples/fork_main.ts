import { fork } from "child_process";

const forked = fork("fork_forked.js");

forked.on("message", (message) => {
    console.log(`main process got a message: ${message}`);
    forked.send("Thanks for your message");
});
