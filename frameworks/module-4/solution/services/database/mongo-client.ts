import { MongoClient, Db } from "mongodb"

const CONNECTION_STRING = 'mongodb://nodejs_user:Aa123456@ds117200.mlab.com:17200/course-2018';
const DB_NAME = 'course-2018';

export class MongoDBClient {
    private db: Db;
    public async getDbConnection(): Promise<Db> {
        if (this.db) {
            return this.db;
        }

        try {
            const connection = await MongoClient.connect(CONNECTION_STRING);
            this.db = connection.db(DB_NAME);
            return this.db;
        } catch (error) {
            console.log(`error connecting to DB ${error}`);
            throw error;
        }
    }
}