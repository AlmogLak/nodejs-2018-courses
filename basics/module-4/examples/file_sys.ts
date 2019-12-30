import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(__dirname, 'test.txt');
// console.log("__dirname", __dirname);
// console.log("__filename", __filename);
// console.log("filePath", filePath);

// try {
//     fs.writeFileSync(filePath, 'bla bla');
// } catch (error) {
//     console.error(error);
// }


// fs.writeFile(filePath, 'kush kush', (err)=>{
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("Done!");
// });


// fs.readFile(filePath, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// })

function readFileData() {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                return reject(err);
            }

            resolve(data.toString());
        });
    });
}

async function read() {
    console.log(await readFileData());
}

read().then(() => console.log("done running application!"));
