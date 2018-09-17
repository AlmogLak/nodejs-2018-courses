import { ItemsAPI } from "../interfaces/items-api.interface";
import { Item } from "../models/item.model";
export declare class ItemsController implements ItemsAPI {
    private items;
    constructor();
    create(item: Item): void;
    list(): Item[];
    show(name: string): Item;
    delete(name: string): void;
}
