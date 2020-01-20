"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dgram = require("dgram");
const server = dgram.createSocket("udp4");
server.on("listening", () => console.log("server is listening"));
server.on("message", (msg, info) => {
    console.log(`${info.address}:${info.port} - ${msg}`);
});
server.bind(3000, "127.0.0.1");
//# sourceMappingURL=udp-server.js.map