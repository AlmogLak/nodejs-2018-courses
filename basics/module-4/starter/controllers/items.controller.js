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
const item_model_1 = require("../models/item.model");
const item_type_enum_1 = require("../enums/item-type.enum");
class ItemsController {
    constructor() {
        this.items = new Array();
        this.items.push(new item_model_1.Item("Chair", "Designers chair", 500, "TLV", true, 2, "almog", item_type_enum_1.ItemType.Home));
    }
    create(item) {
        return new Promise((resolve, reject) => {
            try {
                this.items.push(item);
                resolve();
            }
            catch (error) {
                reject(error);
            }
        });
    }
    list() {
        return new Promise((resolve, reject) => {
            try {
                resolve(this.items);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    show(name) {
        return new Promise((resolve, reject) => {
            try {
                let item = this.items.find(i => i.name === name);
                if (item) {
                    resolve(item);
                }
                else {
                    reject(new Error("item not found"));
                }
            }
            catch (error) {
                reject(error);
            }
        });
    }
    delete(name) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let item = yield this.show(name);
                if (item) {
                    let itemIndex = this.items.indexOf(item);
                    this.items.splice(itemIndex, 1);
                    resolve();
                }
                else {
                    reject(new Error("item not found"));
                }
            }
            catch (error) {
                reject(error);
            }
        }));
    }
}
exports.ItemsController = ItemsController;
//# sourceMappingURL=items.controller.js.map