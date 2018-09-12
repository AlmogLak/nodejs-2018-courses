import { Router } from 'express';
import { ItemsController } from './items.controller';

const itemsController = new ItemsController();

export const itemsRouter: Router = Router();
itemsRouter.get('/', itemsController.get);
itemsRouter.post('/', itemsController.post);
itemsRouter.put('/:id', itemsController.put);
itemsRouter.delete('/:id', itemsController.delete);

