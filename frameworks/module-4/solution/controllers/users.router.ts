import { Router } from "express";
import { UsersController } from "./users.controller";

export class UsersRouter {
    private internalRouter: Router;

    constructor(usersController: UsersController) {
        this.internalRouter = Router();
        this.internalRouter.get('/', usersController.list);
        this.internalRouter.get('/:userId', usersController.show);
        this.internalRouter.post('/', usersController.create);
        this.internalRouter.put('/:userId', usersController.update);
        this.internalRouter.delete('/:userId/:noteId?', usersController.delete);
    }

    router(): Router {
        return this.internalRouter;
    }
}
