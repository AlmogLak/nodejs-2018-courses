import { UsersApi } from '../interfaces/users-api.interface';
import { User } from '../models/user.model';
import { ObjectID } from 'mongodb';
import { MongoDBClient } from './database/mongo-client';

const COLLECTION_NAME = 'al942u_notes';

export class MongoDBService implements UsersApi {
    private mongoclient = new MongoDBClient();
    
    async createOrUpdate(user: User): Promise<void> {
        try {
            const db = await this.mongoclient.getDbConnection();
            const result = await db.collection(COLLECTION_NAME).updateMany({ _id: user._id }, user, {upsert: true});
            console.log(`Create or update result: ${result}`);
        } catch (error) {
            console.log(`error upserting user to db ${error}`);
            throw error;
        }
    }
    
    async list(): Promise<User[]> {
        try {
            const db = await this.mongoclient.getDbConnection();
            return await db.collection(COLLECTION_NAME).find<User>({}).toArray();
        } catch (error) {
            console.log(`error finding users in db ${error}`);
            throw error;
        }
    }

    async show(userId: ObjectID): Promise<User> {
        try {
            const db = await this.mongoclient.getDbConnection();
            return await db.collection(COLLECTION_NAME).findOne<User>({ _id: userId });
        } catch (error) {
            console.log(`error finding user in db ${error}`);
            throw error;
        }
    }

    async delete(userId: ObjectID): Promise<void> {
        try {
            const db = await this.mongoclient.getDbConnection();
            const delResult = await db.collection(COLLECTION_NAME).deleteOne({ _id: userId });
            console.log(`User delete from MongoDB result:${delResult}`);
        } catch (error) {
            console.log(`error removing user from db ${error}`);
            throw error;
        }
    }
}
