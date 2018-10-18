import { Router } from 'express';
import { ItemsController } from './items.controller';
import { FSPersistance } from '../../persistance/fs.persistanse';

const persistance = new FSPersistance();
const itemsController = new ItemsController(persistance);

export const itemsRouter: Router = Router();
itemsRouter.get('/', itemsController.get);
itemsRouter.post('/', itemsController.post);
itemsRouter.put('/:id', itemsController.put);
itemsRouter.delete('/:id', itemsController.delete);

