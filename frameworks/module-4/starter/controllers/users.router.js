"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRouter = void 0;
const express_1 = require("express");
class UsersRouter {
    constructor(usersController) {
        this.internalRouter = express_1.Router();
        this.internalRouter.get('/', usersController.list);
        this.internalRouter.get('/:userId', usersController.show);
        this.internalRouter.post('/', usersController.create);
        this.internalRouter.put('/:userId', usersController.update);
        this.internalRouter.delete('/:userId/:noteId?', usersController.delete);
    }
    router() {
        return this.internalRouter;
    }
}
exports.UsersRouter = UsersRouter;
//# sourceMappingURL=users.router.js.map