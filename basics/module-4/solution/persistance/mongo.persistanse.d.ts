import { PersistanceInterface, ItemId } from "./persistance.interface";
import Item from "../../../models/Item";
export declare class MongoPersistance implements PersistanceInterface {
    private mongoclient;
    deleteItem(itemId: ItemId): Promise<void>;
    getItems(): Promise<Item[]>;
    getItemById(itemId: ItemId): Promise<Item>;
    insertItem(item: Item): Promise<Item>;
    updateItem(itemId: ItemId, item: Item): Promise<void>;
}
