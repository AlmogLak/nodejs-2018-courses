import { PersistanceInterface } from "../../starter/persistance/persistance.interface";
import Item from "../../../models/Item";

export class ItemsLogic {
    constructor(private persistance: PersistanceInterface) {
    }

    async validateItemBeforeUpdate(user: string, id: string): Promise<[ValidationError | null, Item | null]> {
        const item = await this.persistance.getItemById(id);
        if (!item) {
            return [new ValidationError(ErrorType.ItemNotFound, 'Item not Found'), null];
        }

        if (user === item.attuid) {
            return [new ValidationError(ErrorType.BadItem, 'You cannot join to your own item'), null];
        }

        if (item.buyers.includes(user)) {
            return [new ValidationError(ErrorType.BadItem, 'You are already subscribed to this item'), null];
        }

        item.buyers = item.buyers.concat(user);
        await this.persistance.updateItem(item.id, item);

        return [null, item];
    }
}

export class ValidationError {
    constructor(
        public errorType: ErrorType,
        public message: string
    ) {

    }
}

export enum ErrorType {
    BadItem = 400,
    ItemNotFound = 404
}