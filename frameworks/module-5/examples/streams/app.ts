import * as fs from 'fs';
import { Transform } from 'stream';


const readableStream = process.stdin;
const writableStream = fs.createWriteStream('./output.txt');

const transformA = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().replace(/\a/g,'@'));
    }
  });


readableStream
    .pipe(transformA)
    .pipe(writableStream);
    