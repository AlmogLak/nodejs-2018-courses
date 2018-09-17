import { ItemsAPI } from "../interfaces/items-api.interface";
import { Item } from "../models/item.model";
import { ItemType } from "../enums/item-type.enum";

export class ItemsController implements ItemsAPI {
    private items: Item[];

    constructor() {
        this.items = new Array();
        this.items.push(new Item("Chair", "Designers chair", 500, "TLV", true, 2, "almog", ItemType.Home));
    }
    
    create(item: Item): Promise<void> {
        return new Promise((resolve, reject) => {
            try {
                this.items.push(item);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }
    
    list(): Promise<Item[]> {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.items);
            } catch (error) {
                reject(error);
            }
        });
    }

    show(name: string): Promise<Item> {
        return new Promise((resolve, reject) => {
            try {
                let item = this.items.find(i => i.name === name);
                if (item) {
                    resolve(item);
                } else {
                    reject(new Error("item not found"));
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    delete(name: string): Promise<void> {
        return new Promise(async (resolve, reject) => {
            try {
                let item: Item = await this.show(name);

                if(item) {
                    let itemIndex = this.items.indexOf(item);
                    this.items.splice(itemIndex, 1);
                    resolve();
                } else {
                    reject(new Error("item not found"));
                }
            } catch (error) {
                reject(error);
            }
        });
    }
}