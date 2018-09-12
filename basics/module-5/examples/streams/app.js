"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const stream_1 = require("stream");
const readableStream = process.stdin;
const writableStream = fs.createWriteStream('./output.txt');
const transformA = new stream_1.Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().replace(/\a/g, '@'));
    }
});
readableStream
    .pipe(transformA)
    .pipe(writableStream);
//# sourceMappingURL=app.js.map