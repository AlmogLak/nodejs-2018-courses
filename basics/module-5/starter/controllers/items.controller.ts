import { ItemsAPI } from "../interfaces/items-api.interface";
import { Item } from "../models/item.model";
import { ItemType } from "../enums/item-type.enum";
import { PersistamceFSService } from "../services/PersistanceFSService";

export class ItemsController {
    private persistanceService: ItemsAPI = new PersistamceFSService();
    
    create(item: Item): Promise<void> {
        return this.persistanceService.create(item);
    }
    
    list(): Promise<Item[]> {
        return this.persistanceService.list();
    }

    show(name: string): Promise<Item> {
        return this.persistanceService.show(name);
    }

    delete(name: string): Promise<void> {
        return this.persistanceService.delete(name);
    }
}