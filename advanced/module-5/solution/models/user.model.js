"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongo = require("mongoose");
const userSchema = new mongo.Schema({
    _id: mongodb_1.ObjectID,
    firstName: String,
    lastName: String,
    address: String,
    activated: Boolean,
    notes: Array
});
exports.default = mongo.model('User', userSchema);
//# sourceMappingURL=user.model.js.map