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
const AUTH_HEADER = 'x-auth';
class ItemsController {
    constructor(persistance) {
        this.persistance = persistance;
        this.get = this.get.bind(this);
        this.put = this.put.bind(this);
        this.post = this.post.bind(this);
        this.delete = this.delete.bind(this);
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const items = yield this.persistance.getItems();
                res.send(items);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const item = req.body;
                const itemAfterInsert = yield this.persistance.insertItem(item);
                console.log(itemAfterInsert);
                res.send(itemAfterInsert);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const user = req.headers[AUTH_HEADER];
                const item = yield this.persistance.getItemById(id);
                if (!item) {
                    res.status(404).json({ message: `item with id ${id} not found` });
                    return;
                }
                if (user === item.attuid) {
                    res.status(400).json({ message: 'You cannot join to your own item' });
                    return;
                }
                if (item.buyers.includes(user)) {
                    res.status(400).json({ message: 'You are already subscribed to this item' });
                    return;
                }
                item.buyers = item.buyers.concat(user);
                yield this.persistance.updateItem(item.id, item);
                res.json(item);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = +req.params.id;
            const user = req.headers[AUTH_HEADER];
            const item = yield this.persistance.getItemById(id);
            if (!item) {
                res.status(404).json({ message: `item with id ${id} not found` });
                return;
            }
            if (user === item.attuid) {
                // delete item
                this.persistance.deleteItem(item.id);
                res.sendStatus(204);
                return;
            }
            if (!item.buyers.includes(user)) {
                res.status(400).json({ message: 'you are not part of this item buyers' });
                return;
            }
            // cancel joining
            item.buyers = item.buyers.filter(buyer => buyer !== user);
            yield this.persistance.updateItem(item.id, item);
            res.sendStatus(204);
        });
    }
}
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map