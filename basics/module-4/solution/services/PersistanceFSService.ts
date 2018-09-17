import { ItemsAPI } from "../interfaces/items-api.interface";
import { Item } from "../models/item.model";
import { ItemType } from "../enums/item-type.enum";
import * as fs from 'fs';
import * as path from 'path';

export class PersistamceFSService implements ItemsAPI {
    private readonly itemsFolder = path.join(__dirname, '../itemsdb');

    create(item: Item): Promise<void> {
        return new Promise((resolve, reject) => {
            const filePath = this.getItemFilePath(item.name);
            fs.writeFile(filePath, JSON.stringify(item), (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
    
    list(): Promise<Item[]> {
        return new Promise<Item[]>((resolve, reject) => {
            fs.readdir(this.itemsFolder, async (err, itemsNames) => {
                let result: Item[] = new Array();
                if(err) {
                    reject(err);
                }

                try {
                    for (const filename of itemsNames) {
                        result.push(await this.show(filename));
                    }

                    resolve(result);
                } catch (err) {
                    reject(err);
                }
            });
        });
    }
    
    show(name: string): Promise<Item> {
        return new Promise<Item>((resolve, reject) => {
            const filePath = this.getItemFilePath(name, name.includes(".json"));
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                
                try {
                    resolve(JSON.parse(data));
                } catch (err) {
                    return reject(err);
                }
            });
        });
    }
    
    delete(name: string): Promise<void> {
        return new Promise((resolve, reject) => {
            fs.unlink(this.getItemFilePath(name), (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }

    private getItemFilePath(itemName: string, hasExtension?: boolean): string {
        return hasExtension ? 
        path.join(this.itemsFolder, itemName) :
        path.join(this.itemsFolder, `${itemName}.json`);
    }
}