import Item from "../../../models/Item";

export interface PersistanceInterface {
    getItems(): Promise<Item[]>;
    getItemById(itemId: number): Promise<Item>;
    insertItem(item: Item): Promise<Item>;
    updateItem(itemId: number, item: Item): Promise<void>;
    deleteItem(itemId: number): Promise<void>;
};