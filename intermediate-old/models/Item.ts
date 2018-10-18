import { ItemId } from "../module-4/solution/persistance/persistance.interface";

export  default class Item {
    _id: ItemId;
    id?: number;
    attuid: string;
    price: string;
    currency: string;
    name: string;
    imageUrl: string;
    url: string;
    targetNumOfBuyers: number;
    numOfBuyers: number;
    buyers: string[];
}