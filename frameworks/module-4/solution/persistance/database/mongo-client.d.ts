import { Db } from "mongodb";
export declare class MongoDBClient {
    private db;
    getDbConnection(): Promise<Db>;
}
