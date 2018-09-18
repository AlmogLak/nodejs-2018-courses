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
const PersistanceFSService_1 = require("../services/PersistanceFSService");
class ItemsController {
    constructor() {
        this.list = this.list.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.persistanceService = new PersistanceFSService_1.PersistamceFSService();
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const item = req.body;
                yield this.persistanceService.create(item);
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
                const items = yield this.persistanceService.list();
                res.send(items);
            }
            catch (error) {
                console.error(error);
                res.status(500).json(error);
            }
            return this.persistanceService.list();
        });
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