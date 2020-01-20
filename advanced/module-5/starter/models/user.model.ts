import { ObjectID } from "mongodb";
import * as mongo from "mongoose";

const userSchema = new mongo.Schema({
    _id: ObjectID,
    firstName: String,
    lastName: String,
    address: String
    // TODO: extend with the missing fields
});

export default mongo.model('User', userSchema);
