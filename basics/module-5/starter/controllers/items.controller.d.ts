import { Item } from "../models/item.model";
export declare class ItemsController {
    private persistanceService;
    create(item: Item): Promise<void>;
    list(): Promise<Item[]>;
    show(name: string): Promise<Item>;
    delete(name: string): Promise<void>;
}
