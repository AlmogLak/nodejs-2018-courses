import { ObjectID } from "mongodb";
import * as mongo from "mongoose";

const userSchema = new mongo.Schema({
    _id: ObjectID,
    firstName: String,
    lastName: String,
    address: String
});

export default mongo.model('User', userSchema);
