"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistanceService = void 0;
const path = require("path");
class PersistanceService {
    constructor() {
        this.usersFolder = path.join(__dirname, '../../../users');
    }
    create(user) {
        // TODO
        // use JSON.stringify(obj)
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