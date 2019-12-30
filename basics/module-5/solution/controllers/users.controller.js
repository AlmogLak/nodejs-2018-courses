"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const persistance_service_1 = require("../services/persistance.service");
class UsersController {
    constructor() {
        this.persistanceService = new persistance_service_1.PersistanceService();
    }
    create(request, response) {
        return this.persistanceService.create(user);
    }
    list() {
        return this.persistanceService.list();
    }
    show(userId) {
        return this.persistanceService.show(userId);
    }
    delete(userId) {
        return this.persistanceService.delete(userId);
    }
}
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map