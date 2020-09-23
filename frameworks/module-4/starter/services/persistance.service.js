"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistanceService = void 0;
const fs = require("fs");
const path = require("path");
const mongodb_1 = require("mongodb");
class PersistanceService {
    constructor() {
        this.usersFolder = path.join(__dirname, '../../../users');
    }
    createOrUpdate(user) {
        return new Promise((resolve, reject) => {
            const filePath = this.getItemFilePath(user._id);
            fs.writeFile(filePath, JSON.stringify(user), (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
    list() {
        return new Promise((resolve, reject) => {
            fs.readdir(this.usersFolder, (err, users) => __awaiter(this, void 0, void 0, function* () {
                let result = new Array();
                if (err) {
                    reject(err);
                }
                try {
                    for (const user of users) {
                        result.push(yield this.show(new mongodb_1.ObjectID(user.replace(".json", ""))));
                    }
                    resolve(result);
                }
                catch (err) {
                    reject(err);
                }
            }));
        });
    }
    show(userId) {
        return new Promise((resolve, reject) => {
            const filePath = this.getItemFilePath(userId);
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
    delete(userId) {
        return new Promise((resolve, reject) => {
            fs.unlink(this.getItemFilePath(userId), (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
    getItemFilePath(userId) {
        return path.join(this.usersFolder, `${userId}.json`);
    }
}
exports.PersistanceService = PersistanceService;
//# sourceMappingURL=persistance.service.js.map