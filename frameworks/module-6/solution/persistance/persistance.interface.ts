import Item from "../../../models/Item";
import { ObjectID } from "bson";

export type ItemId = number | ObjectID | string;

export interface PersistanceInterface {
    getItems(): Promise<Item[]>;
    getItemById(itemId: ItemId): Promise<Item>;
    insertItem(item: Item): Promise<Item>;
    updateItem(itemId: ItemId, item: Item): Promise<void>;
    deleteItem(itemId: ItemId): Promise<void>;
}