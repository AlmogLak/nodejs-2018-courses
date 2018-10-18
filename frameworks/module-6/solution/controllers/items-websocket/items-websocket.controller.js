"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_websocket_models_1 = require("./items-websocket.models");
class ItemsWebsocketController {
    constructor(io) {
        this.io = io;
        this.sockets = new Map();
        this.startListen();
    }
    startListen() {
        this.io.on('connect', (socket) => {
            socket.on('register', (username) => {
                console.log('user registered: ', username);
                this.sockets.set(username, socket);
            });
        });
    }
    broadcastAddedItem(username, item) {
        const socket = this.sockets.get(username);
        if (socket) {
            socket.broadcast.emit('message', new items_websocket_models_1.Message(items_websocket_models_1.SOCKET_EVENTS.ADD_ITEM, username, item));
        }
    }
    broadcastDeletedItem(username, itemId) {
        const socket = this.sockets.get(username);
        if (socket) {
            socket.broadcast.emit('message', new items_websocket_models_1.Message(items_websocket_models_1.SOCKET_EVENTS.DELETE_ITEM, username, itemId));
        }
    }
    broadcastUpdatedItem(username, item) {
        const socket = this.sockets.get(username);
        if (socket) {
            socket.broadcast.emit('message', new items_websocket_models_1.Message(items_websocket_models_1.SOCKET_EVENTS.UPDATE_ITEM, username, item));
        }
    }
}
exports.ItemsWebsocketController = ItemsWebsocketController;
//# sourceMappingURL=items-websocket.controller.js.map