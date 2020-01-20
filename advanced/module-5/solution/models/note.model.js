"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const mongo = require("mongoose");
const noteSchema = new mongo.Schema({
    _id: mongodb_1.ObjectID,
    note: String,
    comment: String,
    level: String
});
exports.default = mongo.model('Note', noteSchema);
//# sourceMappingURL=note.model.js.map