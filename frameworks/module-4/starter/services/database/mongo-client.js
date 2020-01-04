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
const mongodb_1 = require("mongodb");
const CONNECTION_STRING = 'mongodb://nodejs_user:Aa123456@ds117200.mlab.com:17200/course-2018';
const DB_NAME = 'course-2018';
class MongoDBClient {
    getDbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.db) {
                return this.db;
            }
            try {
                const connection = yield mongodb_1.MongoClient.connect(CONNECTION_STRING);
                this.db = connection.db(DB_NAME);
                return this.db;
            }
            catch (error) {
                console.log(`error connecting to DB ${error}`);
                throw error;
            }
        });
    }
}
exports.MongoDBClient = MongoDBClient;
//# sourceMappingURL=mongo-client.js.map