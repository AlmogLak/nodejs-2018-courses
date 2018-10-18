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
const mongodb_1 = require("mongodb");
const COLLECTION_NAME = 'example_items';
class MongoPersistance {
    constructor() {
        this.mongoclient = new mongo_client_1.MongoDBClient();
    }
    deleteItem(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield this.mongoclient.getDbConnection();
                const delResult = yield db.collection(COLLECTION_NAME).deleteOne({ id: itemId });
            }
            catch (error) {
                console.log(`error removing item from db ${error}`);
                throw error;
            }
        });
    }
    getItems() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield this.mongoclient.getDbConnection();
                return yield db.collection(COLLECTION_NAME).find({}).toArray();
            }
            catch (error) {
                console.log(`error finding items in db ${error}`);
                throw error;
            }
        });
    }
    getItemById(itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield this.mongoclient.getDbConnection();
                return yield db.collection(COLLECTION_NAME).findOne({ _id: new mongodb_1.ObjectID(itemId) });
            }
            catch (error) {
                console.log(`error finding item in db ${error}`);
                throw error;
            }
        });
    }
    insertItem(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield this.mongoclient.getDbConnection();
                const insertResult = yield db.collection(COLLECTION_NAME).insertOne(item);
                console.log(insertResult.insertedId);
                return yield this.getItemById(insertResult.insertedId);
            }
            catch (error) {
                console.log(`error inserting item to db ${error}`);
                throw error;
            }
        });
    }
    updateItem(itemId, item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield this.mongoclient.getDbConnection();
                const result = yield db.collection(COLLECTION_NAME).findOneAndUpdate({ _id: new mongodb_1.ObjectID(itemId) }, item);
            }
            catch (error) {
                console.log(`error updating item in db ${error}`);
                throw error;
            }
        });
    }
}
exports.MongoPersistance = MongoPersistance;
//# sourceMappingURL=mongo.persistanse.js.map