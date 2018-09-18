/// <reference types="express" />
import { Item } from "../models/item.model";
import { Request, Response } from 'express';
export declare class ItemsController {
    private persistanceService;
    constructor();
    create(req: Request, res: Response): Promise<void>;
    list(req: Request, res: Response): Promise<Item[]>;
    show(name: string): Promise<Item>;
    delete(name: string): Promise<void>;
}
