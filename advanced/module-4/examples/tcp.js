"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const net = require("net");
const server = net.createServer();
server.on("connection", socket => {
    console.log("new client connected to the server");
    socket.write("Hi there!\n");
    socket.on("data", data => {
        console.log(`data recived from client: ${data.toString()}`);
        socket.write(`This is the data you sent: ${data}\n`);
    });
    socket.on("end", () => {
        console.log("Client disconnected");
    });
});
server.listen(3000, () => console.log("Server listening on port 3000"));
//# sourceMappingURL=tcp.js.map