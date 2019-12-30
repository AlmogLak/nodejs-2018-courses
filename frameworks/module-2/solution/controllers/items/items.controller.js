"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let currentId = 0;
let items = [];
const AUTH_HEADER = 'x-auth';
class ItemsController {
    constructor() {
        this.get = this.get.bind(this);
        this.put = this.put.bind(this);
        this.post = this.post.bind(this);
        this.delete = this.delete.bind(this);
    }
    get(req, res) {
        res.send(items);
    }
    post(req, res) {
        const item = req.body;
        item.id = currentId++;
        items.push(item);
        res.send(item);
    }
    put(req, res) {
        const id = +req.params.id;
        const user = req.headers[AUTH_HEADER];
        const item = items.find(item => item.id === id);
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
        res.json(items);
    }
    delete(req, res) {
        const id = +req.params.id;
        const user = req.headers[AUTH_HEADER];
        const item = items.find(item => item.id === id);
        if (!item) {
            res.status(404).json({ message: `item with id ${id} not found` });
            return;
        }
        if (user === item.attuid) {
            // delete item
            items = items.filter(item => item.id !== id);
            res.sendStatus(204);
            return;
        }
        if (!item.buyers.includes(user)) {
            res.status(400).json({ message: 'you are not part of this item buyers' });
            return;
        }
        // cancel joining
        item.buyers = item.buyers.filter(buyer => buyer !== user);
        res.sendStatus(204);
    }
}
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map