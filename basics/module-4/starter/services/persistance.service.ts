import * as fs from 'fs';
import * as path from 'path';
import { UsersApi } from '../interfaces/users-api.interface';
import { User } from '../models/user.model';
import { ObjectID } from 'mongodb';

export class PersistanceService implements UsersApi {
    private readonly usersFolder = path.join(__dirname, '../../../users');

    create(user: User): Promise<void> {
        // TODO
        // use JSON.stringify(obj)
        return Promise.resolve();
    }
    
    list(): Promise<User[]> {
        // TODO
        return Promise.resolve([]);
    }
    
    show(userId: ObjectID): Promise<User> {
        // TODO
        return Promise.resolve(null);
    }
    
    delete(userId: ObjectID): Promise<void> {
        // TODO
        return Promise.resolve();
    }

    private getItemFilePath(userId: ObjectID): string {
        return path.join(this.usersFolder, `${userId}.json`);
    }
}
