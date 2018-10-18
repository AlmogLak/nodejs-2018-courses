"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const items_controller_1 = require("./items.controller");
const itemsController = new items_controller_1.ItemsController();
exports.itemsRouter = express_1.Router();
exports.itemsRouter.get('/', itemsController.get);
exports.itemsRouter.post('/', itemsController.post);
exports.itemsRouter.put('/:id', itemsController.put);
exports.itemsRouter.delete('/:id', itemsController.delete);
//# sourceMappingURL=router.js.map