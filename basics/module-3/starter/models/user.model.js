"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(_id, firstName, lastName, address, notes) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.notes = notes;
    }
    getNotesByLevel(level) {
        return this.notes.filter(note => note.level === level);
    }
    delay(milliseconds) {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map