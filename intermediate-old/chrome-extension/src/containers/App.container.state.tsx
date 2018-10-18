import Item from '../models/Item';
/* tslint:disable */
export class AppContainerState {
    loading: boolean = true;
    items: Item[];
    err: string;
    username: string;
    webSocket: boolean;
    socket: any;
}