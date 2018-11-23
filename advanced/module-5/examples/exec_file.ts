import { execFile } from "child_process";

const child = execFile('node', ['./exec.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
