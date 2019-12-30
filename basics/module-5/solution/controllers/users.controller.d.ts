import { User } from "../models/user.model";
import { ObjectID } from "mongodb";
import { Request, Response } from "express";
export declare class UsersController {
    private persistanceService;
    constructor();
    create(req: Request, res: Response): Promise<void>;
    list(req: Request, res: Response): Promise<void>;
    show(userId: ObjectID): Promise<User>;
    delete(userId: ObjectID): Promise<void>;
}
