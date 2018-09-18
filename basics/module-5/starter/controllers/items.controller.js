"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersistanceFSService_1 = require("../services/PersistanceFSService");
class ItemsController {
    constructor() {
        this.persistanceService = new PersistanceFSService_1.PersistamceFSService();
    }
    create(item) {
        return this.persistanceService.create(item);
    }
    list() {
        return this.persistanceService.list();
    }
    show(name) {
        return this.persistanceService.show(name);
    }
    delete(name) {
        return this.persistanceService.delete(name);
    }
}
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map