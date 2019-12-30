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
        try {
            const user = new User(new ObjectID(), req.body.firstName, req.body.lastName, req.body.address, req.body.notes);
            await this.persistanceService.create(user);
            res.sendStatus(201);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
    
    async list(req: Request, res: Response) {
        try {
            const users = await this.persistanceService.list();
            res.send(users);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    show(req: Request, res: Response) {
        try {
            const userId = new ObjectID(req.query.userId);
            const user = this.persistanceService.show(userId);
            res.send(user);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    delete(req: Request, res: Response) {
        try {
            const userId = new ObjectID(req.query.userId);
            this.persistanceService.delete(userId);
            res.sendStatus(204);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}
