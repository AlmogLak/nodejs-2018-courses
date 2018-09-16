"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(firstName, lastName, address, age, attUUID) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.age = age;
        this.attUUID = attUUID;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map