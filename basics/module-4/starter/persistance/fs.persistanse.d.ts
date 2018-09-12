import { PersistanceInterface } from "./persistance.interface";
import Item from "../../../models/Item";
export declare class FSPersistance implements PersistanceInterface {
    deleteItem(itemId: number): Promise<void>;
    getItems(): Promise<Item[]>;
    getItemById(itemId: number): Promise<Item>;
    insertItem(item: Item): Promise<Item>;
    updateItem(itemId: number, item: Item): Promise<void>;
    private readItemFile(filename);
}
