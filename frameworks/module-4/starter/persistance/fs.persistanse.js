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
const path = require("path");
const fs = require("fs");
const ITEMS_FOLDER = path.join(__dirname, '../itemsdb');
class FSPersistance {
    deleteItem(itemId) {
        const filePath = path.join(ITEMS_FOLDER, `${itemId}.json`);
        return new Promise((resolve, reject) => {
            fs.unlink(filePath, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
    getItems() {
        return new Promise((resolve, reject) => {
            fs.readdir(ITEMS_FOLDER, (err, itemFileNames) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (err) {
                        return reject(err);
                    }
                    const itemsPromises = [];
                    for (const filename of itemFileNames) {
                        itemsPromises.push(this.readItemFile(filename));
                    }
                    const items = yield Promise.all(itemsPromises);
                    resolve(items);
                }
                catch (error) {
                    return reject(error);
                }
            }));
        });
    }
    getItemById(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            const items = yield this.getItems();
            return items.find(item => item.id === itemId);
        });
    }
    insertItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const filePath = path.join(ITEMS_FOLDER, `${item.id}.json`);
                fs.writeFile(filePath, JSON.stringify(item), (err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(item);
                });
            });
        });
    }
    updateItem(itemId, item) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.insertItem(item);
        });
    }
    readItemFile(filename) {
        return new Promise((resolve, reject) => {
            const filePath = path.join(ITEMS_FOLDER, filename);
            fs.readFile(filePath, 'utf8', (err, content) => {
                if (err) {
                    return reject(err);
                }
                resolve(JSON.parse(content));
            });
        });
    }
}
exports.FSPersistance = FSPersistance;
//# sourceMappingURL=fs.persistanse.js.map