"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(_id, firstName, lastName, address, notes) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.notes = notes;
    }
    getNotesByLevel(level) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.delay(2000);
            }
            catch (error) {
                console.error(error);
            }
            return this.notes.filter(note => note.level === level);
        });
    }
    delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map