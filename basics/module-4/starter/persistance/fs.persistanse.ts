import * as path from 'path';
import * as fs from 'fs';
import { PersistanceInterface } from "./persistance.interface";
import Item from "../../../models/Item";

const ITEMS_FOLDER = path.join(__dirname, '../itemsdb');

export class FSPersistance implements PersistanceInterface {
    deleteItem(itemId: number): Promise<void> {
        const filePath = path.join(ITEMS_FOLDER, `${itemId}.json`);
        return new Promise((resolve, reject) => {
            fs.unlink(filePath, (err) => {
                if (err) {
                    return reject(err);
                }

                resolve();
            })
        });
    }
    getItems(): Promise<Item[]> {
        return new Promise<Item[]>((resolve, reject) => {
            fs.readdir(ITEMS_FOLDER, async (err, result) => {
                try {
                    if (err) {
                        return reject(err);
                    }
                    const itemsPromises: Promise<Item>[] = [];
                    for (const entry of result) {
                        itemsPromises.push(this.readItemFile(entry));
                    }
                    const items = await Promise.all(itemsPromises);
                    resolve(items);
                } catch (error) {
                    return reject(error);
                }
            });
        });
    }
    async getItemById(itemId: number): Promise<Item> {
        const items = await this.getItems();
        return items.find(item => item.id === itemId);
    }
    async insertItem(item: Item): Promise<Item> {
        return new Promise<Item>((resolve, reject) => {
            const filePath = path.join(ITEMS_FOLDER, `${item.id}.json`);
            fs.writeFile(filePath, JSON.stringify(item), (err) => {
                if (err) {
                    reject(err);
                }

                resolve(item);
            });
        });
    }

    async updateItem(itemId: number, item: Item): Promise<void> {
        console.log('bla bla');
        await this.insertItem(item);
    }

    private readItemFile(filename: string): Promise<Item> {
        return new Promise((resolve, reject) => {
            const filePath = path.join(ITEMS_FOLDER, filename);
            fs.readFile(filePath, 'utf8', (err, content) => {
                if (err) {
                    return reject(err);
                }

                resolve(JSON.parse(content));
            });
        });
    }
}