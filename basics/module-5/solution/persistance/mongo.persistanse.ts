import { PersistanceInterface, ItemId } from "./persistance.interface";
import { MongoDBClient } from "./database/mongo-client";
import Item from "../../../models/Item";
import { ObjectID } from "mongodb";

const COLLECTION_NAME = 'example_items';

export class MongoPersistance implements PersistanceInterface {
    private mongoclient = new MongoDBClient();
    async deleteItem(itemId: ItemId): Promise<void> {
        try {
            const db = await this.mongoclient.getDbConnection();
            const delResult = await db.collection(COLLECTION_NAME).deleteOne({ id: itemId });
        } catch (error) {
            console.log(`error removing item from db ${error}`);
            throw error;
        }
    }

    async getItems(): Promise<Item[]> {
        try {
            const db = await this.mongoclient.getDbConnection();
            return await db.collection(COLLECTION_NAME).find<Item>({}).toArray();
        } catch (error) {
            console.log(`error finding items in db ${error}`);
            throw error;
        }
    }

    async getItemById(itemId: ItemId): Promise<Item> {
        try {
            const db = await this.mongoclient.getDbConnection();
            return await db.collection(COLLECTION_NAME).findOne<Item>({ _id: new ObjectID(itemId) });
        } catch (error) {
            console.log(`error finding item in db ${error}`);
            throw error;
        }
    }

    async insertItem(item: Item): Promise<Item> {
        try {
            const db = await this.mongoclient.getDbConnection();
            const insertResult = await db.collection(COLLECTION_NAME).insertOne(item);
            console.log(insertResult.insertedId);
            return await this.getItemById(insertResult.insertedId);
        } catch (error) {
            console.log(`error inserting item to db ${error}`);
            throw error;
        }
    }

    async updateItem(itemId: ItemId, item: Item): Promise<void> {
        try {
            const db = await this.mongoclient.getDbConnection();
            const result = await db.collection(COLLECTION_NAME).findOneAndUpdate({ _id: new ObjectID(itemId) }, item);
        } catch (error) {
            console.log(`error updating item in db ${error}`);
            throw error;            
        }
    }
}