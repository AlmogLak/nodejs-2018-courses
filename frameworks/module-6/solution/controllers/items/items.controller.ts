import { Request, Response } from 'express';
import Item from '../../../../models/Item';
import { PersistanceInterface } from '../../persistance/persistance.interface';
import { ItemsWebsocketController } from '../items-websocket/items-websocket.controller';
import { ItemsLogic } from '../../logic/item-logic';

const AUTH_HEADER = 'x-auth';

export class ItemsController {
    constructor(
        private persistance: PersistanceInterface, 
        private itemsWebsocketController: ItemsWebsocketController,
        private itemValidator: ItemsLogic) {
        this.get = this.get.bind(this);
        this.put = this.put.bind(this);
        this.post = this.post.bind(this);
        this.delete = this.delete.bind(this);
    }

    async get(req: Request, res: Response) {
        try {
            const items = await this.persistance.getItems();
            res.send(items);

        } catch (error) {
            res.status(500).json(error);
        }
    }

    async post(req: Request, res: Response) {
        const user: string = req.headers[AUTH_HEADER] as string;
        if(!user){
            res.status(401).end();
            return;
        }

        try {
            const item = req.body as Item;
            const itemAfterInsert = await this.persistance.insertItem(item);
            this.itemsWebsocketController.broadcastAddedItem(user, item);
            console.log(itemAfterInsert);
            res.send(itemAfterInsert);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async put(req: Request, res: Response) {
        try {
            const id = req.params.id as string;
            const user: string = req.headers[AUTH_HEADER] as string;

            const [error, item] = await this.itemValidator.validateItemBeforeUpdate(user, id);
            if(error){
                res.status(error.errorType).json(error);
                return;
            }

            res.send(item);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async delete(req: Request, res: Response) {
        const id = req.params.id;
        const user = req.headers[AUTH_HEADER] as string;
        const item = await this.persistance.getItemById(id);

        if (!item) {
            res.status(404).json({ message: `item with id ${id} not found` });
            return
        }

        if (user === item.attuid) {
            // delete item
            this.persistance.deleteItem(item.id);
            res.sendStatus(204);
            return;
        }

        if (!item.buyers.includes(user)) {
            res.status(400).json({ message: 'you are not part of this item buyers' });
            return;
        }

        // cancel joining
        item.buyers = item.buyers.filter(buyer => buyer !== user);
        await this.persistance.updateItem(item.id, item);
        this.itemsWebsocketController.broadcastDeletedItem(user, id);
        res.sendStatus(204);
    }
}