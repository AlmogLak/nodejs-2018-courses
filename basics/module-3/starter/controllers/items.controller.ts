import { ItemsAPI } from "../interfaces/items-api.interface";
import { Item } from "../models/item.model";
import { ItemType } from "../enums/item-type.enum";

export class ItemsController implements ItemsAPI {
    private items: Item[];

    constructor() {
        this.items = new Array();
        this.items.push(new Item("Chair", "Designers chair", 500, "TLV", true, 2, "almog", ItemType.Home));
    }
    
    create(item: Item): void {
        this.items.push(item);
    }
    
    list(): Item[] {
        return this.items;
    }

    show(name: string): Item {
        return this.items.find(i => i.name === name);
    }

    delete(name: string): void {
        let item: Item = this.show(name);

        if(item) {
            let itemIndex = this.items.indexOf(item);
            this.items.splice(itemIndex, 1);
        }
    }
}