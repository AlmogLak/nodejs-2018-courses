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
const mongo_client_1 = require("./database/mongo-client");
class MongoDBService {
    constructor() {
        this.mongoclient = new mongo_client_1.MongoDBClient();
    }
    createOrUpdate(item) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO
            throw new Error("Method not implemented.");
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO
            throw new Error("Method not implemented.");
        });
    }
    show(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO
            throw new Error("Method not implemented.");
        });
    }
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO
            throw new Error("Method not implemented.");
        });
    }
}
exports.MongoDBService = MongoDBService;
//# sourceMappingURL=mongo-db.service.js.map