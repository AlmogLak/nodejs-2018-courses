import Item from '../models/Item';

export default interface AppProps {
    items: Item[];
    username: string;
    joinShopping(item: Item): void;
    deleteItem(itemId: string): void;
    addNewItem(): void;
    onLogout(): void;
    cancelJoining(item: Item): void;
}