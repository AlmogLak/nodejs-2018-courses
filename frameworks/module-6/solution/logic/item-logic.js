"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class ItemsLogic {
    constructor(persistance) {
        this.persistance = persistance;
    }
    validateItemBeforeUpdate(user, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.persistance.getItemById(id);
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
            yield this.persistance.updateItem(item.id, item);
            return [null, item];
        });
    }
}
exports.ItemsLogic = ItemsLogic;
class ValidationError {
    constructor(errorType, message) {
        this.errorType = errorType;
        this.message = message;
    }
}
exports.ValidationError = ValidationError;
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["BadItem"] = 400] = "BadItem";
    ErrorType[ErrorType["ItemNotFound"] = 404] = "ItemNotFound";
})(ErrorType = exports.ErrorType || (exports.ErrorType = {}));
//# sourceMappingURL=item-logic.js.map