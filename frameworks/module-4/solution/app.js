"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const users_controller_1 = require("./controllers/users.controller");
const users_router_1 = require("./controllers/users.router");
class App {
    constructor() {
        this.port = 3000;
        this.requestLog = this.requestLog.bind(this);
    }
    init() {
        const usersController = new users_controller_1.UsersController();
        let userRouters = new users_router_1.UsersRouter(usersController);
        let server = express();
        server.use(bodyParser.json());
        server.use(this.requestLog);
        server.use('/api/users', userRouters.router());
        server.listen(this.port, () => console.log(`server listening on port ${this.port}!`));
    }
    requestLog(req, res, next) {
        console.log(`${req.method}:  http://${req.hostname}:${this.port}${req.url}`);
        next();
    }
}
const app = new App();
app.init();
//# sourceMappingURL=app.js.map