import { ItemType } from "../enums/item-type.enum";

export class Item {
    constructor(public name: string,
                public description: string,
                public price: number,
                public address: string,
                public isInStock: boolean,
                public amount: number,
                public creator: string,
                public itemType: ItemType) {}
}