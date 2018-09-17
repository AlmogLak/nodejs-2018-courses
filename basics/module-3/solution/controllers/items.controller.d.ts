import { ItemsAPI } from "../interfaces/items-api.interface";
import { Item } from "../models/item.model";
export declare class ItemsController implements ItemsAPI {
    private items;
    constructor();
    create(item: Item): Promise<void>;
    list(): Promise<Item[]>;
    show(name: string): Promise<Item>;
    delete(name: string): Promise<void>;
}
