import { ObjectID } from "mongodb";
import * as mongo from "mongoose";

const noteSchema = new mongo.Schema({
    _id: ObjectID,
    note: String,
    comment: String,
    level: String
});

export default mongo.model('Note', noteSchema);