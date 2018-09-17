"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const item_model_1 = require("../models/item.model");
const item_type_enum_1 = require("../enums/item-type.enum");
class ItemsController {
    constructor() {
        this.items = new Array();
        this.items.push(new item_model_1.Item("Chair", "Designers chair", 500, "TLV", true, 2, "almog", item_type_enum_1.ItemType.Home));
    }
    create(item) {
        this.items.push(item);
    }
    list() {
        return this.items;
    }
    show(name) {
        return this.items.find(i => i.name === name);
    }
    delete(name) {
        let item = this.show(name);
        if (item) {
            let itemIndex = this.items.indexOf(item);
            this.items.splice(itemIndex, 1);
        }
    }
}
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map