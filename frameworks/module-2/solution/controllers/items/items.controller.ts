import { Request, Response } from 'express';
import Item from '../../../../models/Item';

let currentId = 0;
let items: Item[] = [];
const AUTH_HEADER = 'x-auth';

export class ItemsController {
    constructor() {
        this.get = this.get.bind(this);
        this.put = this.put.bind(this);
        this.post = this.post.bind(this);
    }

    get(req: Request, res: Response) {
        res.send(items);
    }

    post(req: Request, res: Response) {
        const item = req.body as Item;
        item.id = currentId++;
        items.push(item);

        res.send(item);
    }

    put(req: Request, res: Response) {
        const id = +req.params.id as number;
        const user: string = req.headers[AUTH_HEADER] as string;
        const item = items.find(item => item.id === id);

        if(!item) {
            res.status(404).json({ message: `item with id ${id} not found` });
            return 
        }

        if(user === item.attuid){
            res.status(400).json({message: 'You cannot join to your own item'});
            return;
        }

        if(item.buyers.includes(user)){
            res.status(400).json({message: 'You are already subscribed to this item'});
            return;
        }

        item.buyers = item.buyers.concat(user);
        res.json(items);
    }

    delete(req: Request, res: Response) {
        const id = +req.params.id as number;
        const user = req.headers[AUTH_HEADER] as string;
        const item = items.find(item => item.id === id);

        if(!item) {
            res.status(404).json({ message: `item with id ${id} not found` });
            return 
        }

        if(user === item.attuid){
            // delete item
            items = items.filter(item => item.id !== id);
            res.sendStatus(204);
            return;
        }

        if(!item.buyers.includes(user)){
            res.status(400).json({message: 'you are not part of this item buyers'});
            return;
        }

        // cancel joining
        item.buyers = item.buyers.filter(buyer => buyer !== user);
        res.sendStatus(204);
    }
}