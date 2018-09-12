import Item from '../../../../models/Item';

export enum SOCKET_EVENTS {
    ADD_ITEM = 'add-item',
    UPDATE_ITEM = 'update-item',
    DELETE_ITEM = 'delete-item',
}

export interface Message {
    username: string;
    action: SOCKET_EVENTS;
    message: Item | string;
}