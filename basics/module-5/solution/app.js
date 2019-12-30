"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const users_controller_1 = require("./controllers/users.controller");
class App {
    constructor() {
        this.port = 3000;
    }
    init() {
        const usersController = new users_controller_1.UsersController();
        let server = express();
        server.use(bodyParser.json());
        server.get('/api/users', usersController.list);
        server.post('/api/users', usersController.create);
        server.listen(this.port, () => console.log(`server listening on port ${this.port}!`));
    }
}
const app = new App();
app.init();
//# sourceMappingURL=app.js.map