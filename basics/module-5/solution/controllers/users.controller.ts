import { PersistanceService } from "../services/persistance.service";
import { UsersApi } from "../interfaces/users-api.interface";
import { User } from "../models/user.model";
import { ObjectID } from "mongodb";
import { Request, Response } from "express";

export class UsersController {
    private persistanceService: UsersApi = new PersistanceService();
    
    create(request: Request, response: Response): Promise<void> {
        return this.persistanceService.create(user);
    }
    
    list(): Promise<User[]> {
        return this.persistanceService.list();
    }

    show(userId: ObjectID): Promise<User> {
        return this.persistanceService.show(userId);
    }

    delete(userId: ObjectID): Promise<void> {
        return this.persistanceService.delete(userId);
    }
}
