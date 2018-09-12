import * as SocketIO from 'socket.io';
import Item from '../../../../models/Item';
export declare class ItemsWebsocketController {
    private io;
    private sockets;
    constructor(io: SocketIO.Server);
    startListen(): void;
    broadcastAddedItem(username: string, item: Item): void;
    broadcastDeletedItem(username: string, itemId: string): void;
    broadcastUpdatedItem(username: string, item: Item): void;
}
