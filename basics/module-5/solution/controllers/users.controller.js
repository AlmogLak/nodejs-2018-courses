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
const persistance_service_1 = require("../services/persistance.service");
const user_model_1 = require("../models/user.model");
const mongodb_1 = require("mongodb");
class UsersController {
    constructor() {
        this.list = this.list.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.persistanceService = new persistance_service_1.PersistanceService();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new user_model_1.User(new mongodb_1.ObjectID(), req.body.firstName, req.body.lastName, req.body.address, req.body.notes);
                yield this.persistanceService.create(user);
                res.sendStatus(200);
            }
            catch (error) {
                console.error(error);
                res.status(500).json(error);
            }
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.persistanceService.list();
                res.send(users);
            }
            catch (error) {
                console.error(error);
                res.status(500).json(error);
            }
        });
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