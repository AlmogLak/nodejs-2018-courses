import { UsersApi } from '../interfaces/users-api.interface';
import { User } from '../models/user.model';
import { ObjectID } from 'mongodb';
export declare class MongoDBService implements UsersApi {
    private mongoclient;
    createOrUpdate(item: User): Promise<void>;
    list(): Promise<User[]>;
    show(userId: ObjectID): Promise<User>;
    delete(userId: ObjectID): Promise<void>;
}
