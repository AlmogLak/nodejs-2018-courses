"use strict";
exports.__esModule = true;
var socket = require("socket.io");
var http_1 = require("http");
var express = require("express");
var app = express();
var http = new http_1.Server(app);
var io = socket(http);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});
io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('disconnect', function () {
        console.log('user disconnected');
    });
    // // listen to incomming messages
    // socket.on('message', (payload) => {
    //     console.log('a new message emitted: ', payload);
    //     // echo message
    //     socket.emit('message', payload);
    // });
});
http.listen(3000, function () {
    console.log('listening on *:3000');
});
