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
const fs = require("fs");
const path = require("path");
class PersistamceFSService {
    constructor() {
        this.itemsFolder = path.join(__dirname, '../itemsdb');
    }
    create(item) {
        return new Promise((resolve, reject) => {
            const filePath = this.getItemFilePath(item.name);
            fs.writeFile(filePath, JSON.stringify(item), (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
    list() {
        return new Promise((resolve, reject) => {
            fs.readdir(this.itemsFolder, (err, itemsNames) => __awaiter(this, void 0, void 0, function* () {
                let result = new Array();
                if (err) {
                    reject(err);
                }
                try {
                    for (const filename of itemsNames) {
                        result.push(yield this.show(filename));
                    }
                    resolve(result);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    show(name) {
        return new Promise((resolve, reject) => {
            const filePath = this.getItemFilePath(name, name.includes(".json"));
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                try {
                    resolve(JSON.parse(data));
                }
                catch (err) {
                    return reject(err);
                }
            });
        });
    }
    delete(name) {
        return new Promise((resolve, reject) => {
            fs.unlink(this.getItemFilePath(name), (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
    getItemFilePath(itemName, hasExtension) {
        return hasExtension ?
            path.join(this.itemsFolder, itemName) :
            path.join(this.itemsFolder, `${itemName}.json`);
    }
}
exports.PersistamceFSService = PersistamceFSService;
//# sourceMappingURL=PersistanceFSService.js.map