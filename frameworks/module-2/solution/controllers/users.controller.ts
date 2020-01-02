import { PersistanceService } from "../services/persistance.service";
import { UsersApi } from "../interfaces/users-api.interface";
import { User } from "../models/user.model";
import { ObjectID } from "mongodb";
import { Request, Response } from "express";
import { Note } from "../models/note.model";

export class UsersController {
    private persistanceService: UsersApi;

    constructor() {
        this.list = this.list.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.persistanceService = new PersistanceService();
    }

    
    async create(req: Request, res: Response) {
        try {
            const user = new User(new ObjectID(), req.body.firstName, req.body.lastName, req.body.address, req.body.notes);
            await this.persistanceService.createOrUpdate(user);
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

    async show(req: Request, res: Response) {
        try {
            const userId = new ObjectID(req.params.userId);
            const user = await this.persistanceService.show(userId);
            res.send(user);
        } catch (error) {
            let err: string, status: number;
            if (error && error.code === "ENOENT") {
                err = "User not found";
                status = 404;
            } else {
                err = error;
                status = 500;
            }

            res.status(status).json(err);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const userId = new ObjectID(req.params.userId);
            const user = await this.persistanceService.show(userId);

            if (req.params.noteId) {
                const noteId = new ObjectID(req.params.noteId);
                const noteToDelete = user.notes.findIndex(n => n._id === noteId);
                user.notes.splice(noteToDelete, 1);
                await this.persistanceService.createOrUpdate(user);
                res.sendStatus(204);
            } else {
                await this.persistanceService.delete(userId);
                res.sendStatus(204);
            }
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const userId = new ObjectID(req.params.userId);
            const user = await this.persistanceService.show(userId);
            
            const note = new Note(new ObjectID(), req.body.note, req.body.comment, req.body.level);
            user.notes.push(note);

            await this.persistanceService.createOrUpdate(user);
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
}
