import Item from '../../../../models/Item';

export enum SOCKET_EVENTS {
    ADD_ITEM = 'add-item',
    UPDATE_ITEM = 'update-item',
    DELETE_ITEM = 'delete-item',
}

export class Message {
    constructor(
        public action: SOCKET_EVENTS,
        public username: string,
        public message: Item | string, ){}
}