"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const items_controller_1 = require("./items.controller");
const mongo_persistanse_1 = require("../../persistance/mongo.persistanse");
const persistance = new mongo_persistanse_1.MongoPersistance();
const itemsController = new items_controller_1.ItemsController(persistance);
exports.itemsRouter = express_1.Router();
exports.itemsRouter.get('/', itemsController.get);
exports.itemsRouter.post('/', itemsController.post);
exports.itemsRouter.put('/:id', itemsController.put);
exports.itemsRouter.delete('/:id', itemsController.delete);
//# sourceMappingURL=router.js.map