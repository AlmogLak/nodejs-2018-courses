"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const items_controller_1 = require("./items.controller");
const mongo_persistanse_1 = require("../../persistance/mongo.persistanse");
function itemsRouterFactory(itemsWebsocketController) {
    const persistance = new mongo_persistanse_1.MongoPersistance();
    const itemsController = new items_controller_1.ItemsController(persistance, itemsWebsocketController);
    const itemsRouter = express_1.Router();
    itemsRouter.get('/', itemsController.get);
    itemsRouter.post('/', itemsController.post);
    itemsRouter.put('/:id', itemsController.put);
    itemsRouter.delete('/:id', itemsController.delete);
    return itemsRouter;
}
exports.itemsRouterFactory = itemsRouterFactory;
//# sourceMappingURL=router.js.map