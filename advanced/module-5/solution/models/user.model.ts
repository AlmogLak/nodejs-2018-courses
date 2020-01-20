import { ObjectID } from "mongodb";
import * as mongo from "mongoose";
import Note from "./note.model";

const userSchema = new mongo.Schema({
    _id: ObjectID,
    firstName: String,
    lastName: String,
    address: String,
    activated: Boolean,
    notes: Array
});

export default mongo.model('User', userSchema);
