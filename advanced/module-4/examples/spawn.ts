import { spawn } from "child_process";

const ls = spawn('cat', ['-v', '/dev/zero']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});
