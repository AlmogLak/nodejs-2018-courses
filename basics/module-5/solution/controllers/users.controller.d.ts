import { User } from "../models/user.model";
import { ObjectID } from "mongodb";
import { Request, Response } from "express";
export declare class UsersController {
    private persistanceService;
    create(request: Request, response: Response): Promise<void>;
    list(): Promise<User[]>;
    show(userId: ObjectID): Promise<User>;
    delete(userId: ObjectID): Promise<void>;
}
