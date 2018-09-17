import { ItemsAPI } from "../interfaces/items-api.interface";
import { Item } from "../models/item.model";
export declare class PersistamceFSService implements ItemsAPI {
    private readonly itemsFolder;
    create(item: Item): Promise<void>;
    list(): Promise<Item[]>;
    show(name: string): Promise<Item>;
    delete(name: string): Promise<void>;
    private getItemFilePath(itemName, hasExtension?);
}
