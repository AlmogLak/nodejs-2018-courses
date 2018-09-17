import { Item } from "../models/item.model";

export interface ItemsAPI {
    create(item: Item): void;
    list(): Item[];
    show(name: string): Item;
    delete(name: string): void;
}