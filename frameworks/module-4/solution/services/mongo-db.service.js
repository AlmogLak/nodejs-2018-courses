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
exports.MongoDBService = void 0;
const mongo_client_1 = require("./database/mongo-client");
const COLLECTION_NAME = 'al942u_notes';
class MongoDBService {
    constructor() {
        this.mongoclient = new mongo_client_1.MongoDBClient();
    }
    createOrUpdate(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield this.mongoclient.getDbConnection();
                const result = yield db.collection(COLLECTION_NAME).updateMany({ _id: user._id }, user, { upsert: true });
                console.log(`Create or update result: ${result}`);
            }
            catch (error) {
                console.log(`error upserting user to db ${error}`);
                throw error;
            }
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield this.mongoclient.getDbConnection();
                return yield db.collection(COLLECTION_NAME).find({}).toArray();
            }
            catch (error) {
                console.log(`error finding users in db ${error}`);
                throw error;
            }
        });
    }
    show(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield this.mongoclient.getDbConnection();
                return yield db.collection(COLLECTION_NAME).findOne({ _id: userId });
            }
            catch (error) {
                console.log(`error finding user in db ${error}`);
                throw error;
            }
        });
    }
    delete(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield this.mongoclient.getDbConnection();
                const delResult = yield db.collection(COLLECTION_NAME).deleteOne({ _id: userId });
                console.log(`User delete from MongoDB result:${delResult}`);
            }
            catch (error) {
                console.log(`error removing user from db ${error}`);
                throw error;
            }
        });
    }
}
exports.MongoDBService = MongoDBService;
//# sourceMappingURL=mongo-db.service.js.map