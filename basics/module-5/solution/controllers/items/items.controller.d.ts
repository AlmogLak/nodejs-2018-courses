import { Request, Response } from 'express';
import { PersistanceInterface } from '../../persistance/persistance.interface';
import { ItemsWebsocketController } from '../items-websocket/items-websocket.controller';
export declare class ItemsController {
    private persistance;
    private itemsWebsocketController;
    constructor(persistance: PersistanceInterface, itemsWebsocketController: ItemsWebsocketController);
    get(req: Request, res: Response): Promise<void>;
    post(req: Request, res: Response): Promise<void>;
    put(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
