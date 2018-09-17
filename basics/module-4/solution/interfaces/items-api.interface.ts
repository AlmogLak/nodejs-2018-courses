import { Item } from "../models/item.model";

export interface ItemsAPI {
    create(item: Item): Promise<void>;
    list(): Promise<Item[]>;
    show(name: string): Promise<Item>;
    delete(name: string): Promise<void>;
}