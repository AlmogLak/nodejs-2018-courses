"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_controller_1 = require("./controllers/items.controller");
const item_model_1 = require("./models/item.model");
const item_type_enum_1 = require("./enums/item-type.enum");
let itemsController = new items_controller_1.ItemsController();
let item = new item_model_1.Item("Table", "Designers table", 1350, "TLV", true, 1, "almog", item_type_enum_1.ItemType.Garden);
console.log("inserted item", item);
console.log("items", itemsController.list());
itemsController.create(item);
console.log("items after insert", itemsController.list());
//# sourceMappingURL=app.js.map