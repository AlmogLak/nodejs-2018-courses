import { PersistanceInterface } from "../../starter/persistance/persistance.interface";
import Item from "../../../models/Item";
export declare class ItemsLogic {
    private persistance;
    constructor(persistance: PersistanceInterface);
    validateItemBeforeUpdate(user: string, id: string): Promise<[ValidationError | null, Item | null]>;
}
export declare class ValidationError {
    errorType: ErrorType;
    message: string;
    constructor(errorType: ErrorType, message: string);
}
export declare enum ErrorType {
    BadItem = 400,
    ItemNotFound = 404,
}
