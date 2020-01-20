import * as dgram from "dgram";

setInterval(() => {
    const client = dgram.createSocket("udp4");
    client.send("Node.js is the best!", 3000, "127.0.0.1", err => {
        if (err) { throw err; }
        console.log("UDP message send successfully");
        client.close();
    });
}, 1000);
