import Item from '../../../../models/Item';
export declare enum SOCKET_EVENTS {
    ADD_ITEM = "add-item",
    UPDATE_ITEM = "update-item",
    DELETE_ITEM = "delete-item",
}
export declare class Message {
    action: SOCKET_EVENTS;
    username: string;
    message: Item | string;
    constructor(action: SOCKET_EVENTS, username: string, message: Item | string);
}
