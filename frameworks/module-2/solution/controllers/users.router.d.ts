import { Router } from "express";
import { UsersController } from "./users.controller";
export declare class UsersRouter {
    private internalRouter;
    constructor(usersController: UsersController);
    router(): Router;
}
