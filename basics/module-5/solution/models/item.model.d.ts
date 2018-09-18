import { ItemType } from "../enums/item-type.enum";
export declare class Item {
    name: string;
    description: string;
    price: number;
    address: string;
    isInStock: boolean;
    amount: number;
    creator: string;
    itemType: ItemType;
    constructor(name: string, description: string, price: number, address: string, isInStock: boolean, amount: number, creator: string, itemType: ItemType);
}
