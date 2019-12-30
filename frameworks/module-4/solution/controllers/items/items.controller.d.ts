import { Request, Response } from 'express';
import { PersistanceInterface } from '../../persistance/persistance.interface';
export declare class ItemsController {
    private persistance;
    constructor(persistance: PersistanceInterface);
    get(req: Request, res: Response): Promise<void>;
    post(req: Request, res: Response): Promise<void>;
    put(req: Request, res: Response): Promise<void>;
    delete(req: Request, res: Response): Promise<void>;
}
