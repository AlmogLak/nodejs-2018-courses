import { PersistanceService } from "../services/persistance.service";
import { UsersApi } from "../interfaces/users-api.interface";
import { User } from "../models/user.model";
import { ObjectID } from "mongodb";
import { Request, Response } from "express";

export class UsersController {
    private persistanceService: UsersApi;

    constructor() {
        this.list = this.list.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.persistanceService = new PersistanceService();
    }

    
    async create(req: Request, res: Response) {
        // TODO
    }
    
    async list(req: Request, res: Response) {
        // TODO
    }

    show(req: Request, res: Response) {
        // TODO
    }

    delete(req: Request, res: Response) {
        // TODO
    }
}
