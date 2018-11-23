"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const forked = child_process_1.fork("fork_forked.js");
forked.on("message", (message) => {
    console.log(`main process got a message: ${message}`);
    forked.send("Thanks for your message");
});
//# sourceMappingURL=fork_main.js.map