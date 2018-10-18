import { Router } from 'express';
import { ItemsController } from './items.controller';
import { MongoPersistance } from '../../persistance/mongo.persistanse';
import { ItemsWebsocketController } from '../items-websocket/items-websocket.controller';
import { ItemsLogic } from '../../logic/item-logic';

export function itemsRouterFactory(itemsWebsocketController: ItemsWebsocketController){
    const persistance = new MongoPersistance();
    const itemsController = new ItemsController(persistance, itemsWebsocketController, new ItemsLogic(persistance));

    const itemsRouter: Router = Router();
    itemsRouter.get('/', itemsController.get);
    itemsRouter.post('/', itemsController.post);
    itemsRouter.put('/:id', itemsController.put);
    itemsRouter.delete('/:id', itemsController.delete);


    return itemsRouter;
}