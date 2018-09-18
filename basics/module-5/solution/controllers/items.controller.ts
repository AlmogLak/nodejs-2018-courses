import { ItemsAPI } from "../interfaces/items-api.interface";
import { Item } from "../models/item.model";
import { ItemType } from "../enums/item-type.enum";
import { PersistamceFSService } from "../services/PersistanceFSService";
import { Request, Response } from 'express';

export class ItemsController {
    private persistanceService: ItemsAPI;

    constructor() {
        this.list = this.list.bind(this);
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);
        this.delete = this.delete.bind(this);
        this.persistanceService = new PersistamceFSService();
    }
    
    async create(req: Request, res: Response) {
        try {
            const item = req.body as Item;
            await this.persistanceService.create(item);
            res.sendStatus(200);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
    }
    
    async list(req: Request, res: Response) {
        try {
            const items = await this.persistanceService.list();
            res.send(items);
        } catch (error) {
            console.error(error);
            res.status(500).json(error);
        }
        return this.persistanceService.list();
    }

    show(name: string): Promise<Item> {
        return this.persistanceService.show(name);
    }

    delete(name: string): Promise<void> {
        return this.persistanceService.delete(name);
    }
}