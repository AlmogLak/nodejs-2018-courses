"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const ls = child_process_1.spawn('cat', ['-v', '/dev/zero']);
ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});
ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});
//# sourceMappingURL=spawn.js.map