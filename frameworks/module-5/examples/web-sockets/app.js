"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket = require("socket.io");
const http_1 = require("http");
const express = require("express");
const app = express();
const http = new http_1.Server(app);
const io = socket(http);
const users = new Map();
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('register', (data) => {
        console.log(data);
        users.set(data.username, socket);
        console.log(`users connected: ${users.keys()}`);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    // // listen to incomming messages
    // socket.on('message', (payload) => {
    //     console.log('a new message emitted: ', payload);
    //     // echo message
    //     socket.emit('message', payload);
    // });
});
http.listen(3000, () => {
    console.log('listening on *:3000');
});
//# sourceMappingURL=app.js.map