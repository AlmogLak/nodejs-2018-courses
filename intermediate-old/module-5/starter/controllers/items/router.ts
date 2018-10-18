import { Router } from 'express';
import { ItemsController } from './items.controller';
import { MongoPersistance } from '../../persistance/mongo.persistanse';

const persistance = new MongoPersistance();
const itemsController = new ItemsController(persistance);

export const itemsRouter: Router = Router();
itemsRouter.get('/', itemsController.get);
itemsRouter.post('/', itemsController.post);
itemsRouter.put('/:id', itemsController.put);
itemsRouter.delete('/:id', itemsController.delete);

