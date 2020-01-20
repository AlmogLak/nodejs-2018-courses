import * as dgram from "dgram";

const server = dgram.createSocket("udp4");

server.on("listening", () => console.log("server is listening"));

server.on("message", (msg, info) => {
    console.log(`${info.address}:${info.port} - ${msg}`);
});

server.bind(3000, "127.0.0.1");
