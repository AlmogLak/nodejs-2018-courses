import * as SocketIO from 'socket.io';
import { SOCKET_EVENTS, Message} from './items-websocket.models';
import Item from '../../../../models/Item';

export class ItemsWebsocketController {
    private sockets: Map<string, SocketIO.Socket> = new Map();
    constructor(private io: SocketIO.Server) {
        this.startListen();
    }

    startListen() {
        this.io.on('connect', (socket) => {
            socket.on('register', (username: string) => {
                console.log('user registered: ', username);
                this.sockets.set(username, socket);
            });
        });
    }

    broadcastAddedItem(username: string, item: Item) {
        const socket = this.sockets.get(username);
        if(socket) {
            socket.broadcast.emit('message', new Message(SOCKET_EVENTS.ADD_ITEM, username, item));
        }
    }

    broadcastDeletedItem(username: string, itemId: string) {
        const socket = this.sockets.get(username);
        if(socket) {
            socket.broadcast.emit('message', new Message(SOCKET_EVENTS.DELETE_ITEM, username, itemId));
        }
    }

    broadcastUpdatedItem(username: string, item: Item) {
        const socket = this.sockets.get(username);
        if(socket) {
            socket.broadcast.emit('message', new Message(SOCKET_EVENTS.UPDATE_ITEM, username, item));
        }
    }
}