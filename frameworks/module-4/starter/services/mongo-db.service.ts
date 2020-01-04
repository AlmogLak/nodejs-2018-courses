import { UsersApi } from '../interfaces/users-api.interface';
import { User } from '../models/user.model';
import { ObjectID } from 'mongodb';
import { MongoDBClient } from './database/mongo-client';

export class MongoDBService implements UsersApi {
    private mongoclient = new MongoDBClient();
    
    async createOrUpdate(item: User): Promise<void> {
        // TODO
        throw new Error("Method not implemented.");
    }
    
    async list(): Promise<User[]> {
        // TODO
        throw new Error("Method not implemented.");
    }

    async show(userId: ObjectID): Promise<User> {
        // TODO
        throw new Error("Method not implemented.");
    }

    async delete(userId: ObjectID): Promise<void> {
        // TODO
        throw new Error("Method not implemented.");
    }
}
