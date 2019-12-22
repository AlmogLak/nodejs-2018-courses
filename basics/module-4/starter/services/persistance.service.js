"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
class PersistanceService {
    constructor() {
        this.usersFolder = path.join(__dirname, '../../../users');
    }
    create(user) {
        // TODO
        return Promise.resolve();
    }
    list() {
        // TODO
        return Promise.resolve([]);
    }
    show(userId) {
        // TODO
        return Promise.resolve(null);
    }
    delete(userId) {
        // TODO
        return Promise.resolve();
    }
    getItemFilePath(userId) {
        return path.join(this.usersFolder, `${userId}.json`);
    }
}
exports.PersistanceService = PersistanceService;
//# sourceMappingURL=persistance.service.js.map