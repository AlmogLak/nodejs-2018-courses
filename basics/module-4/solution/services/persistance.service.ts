import * as fs from 'fs';
import * as path from 'path';
import { UsersApi } from '../interfaces/users-api.interface';
import { User } from '../models/user.model';
import { ObjectID } from 'mongodb';

export class PersistanceService implements UsersApi {
    private readonly usersFolder = path.join(__dirname, '../../../users');

    create(user: User): Promise<void> {
        return new Promise((resolve, reject) => {
            const filePath = this.getItemFilePath(user._id);
            fs.writeFile(filePath, JSON.stringify(user), (err) => {
                if (err) {
                    reject(err);
                }
                resolve();
            });
        });
    }
    
    list(): Promise<User[]> {
        return new Promise<User[]>((resolve, reject) => {
            fs.readdir(this.usersFolder, async (err, users) => {
                let result: User[] = new Array();
                if(err) {
                    return reject(err);
                }

                try {
                    for (const user of users) {
                        result.push(await this.show(new ObjectID(user.replace(".json", ""))));
                    }

                    resolve(result);
                } catch (err) {
                    return reject(err);
                }
            });
        });
    }
    
    show(userId: ObjectID): Promise<User> {
        return new Promise<User>((resolve, reject) => {
            const filePath = this.getItemFilePath(userId);
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    return reject(err);
                }
                
                try {
                    resolve(JSON.parse(data));
                } catch (err) {
                    return reject(err);
                }
            });
        });
    }
    
    delete(userId: ObjectID): Promise<void> {
        return new Promise((resolve, reject) => {
            fs.unlink(this.getItemFilePath(userId), (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    private getItemFilePath(userId: ObjectID): string {
        return path.join(this.usersFolder, `${userId}.json`);
    }
}
