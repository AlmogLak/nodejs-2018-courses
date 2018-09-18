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
const items_controller_1 = require("./controllers/items.controller");
const item_model_1 = require("./models/item.model");
const item_type_enum_1 = require("./enums/item-type.enum");
let printItemsList = () => __awaiter(this, void 0, void 0, function* () {
    let itemsList = yield itemsController.list();
    console.log(itemsList);
});
let itemsController = new items_controller_1.ItemsController();
let item = new item_model_1.Item("Table", "Designers table", 1350, "TLV", true, 1, "almog", item_type_enum_1.ItemType.Garden);
console.log("inserted item", item);
itemsController.create(item)
    .then(() => {
    console.log("Item created successfully");
});
console.log("items after insert:");
printItemsList();
//# sourceMappingURL=app.js.map