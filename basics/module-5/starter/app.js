"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = require("./controllers/users.controller");
class App {
    constructor() {
        this.port = 3000;
    }
    init() {
        const usersController = new users_controller_1.UsersController();
        // TODO: Set new express server instance
        // TODO: use bodyParser.json() as middleware;
        // TODO: Define the methods and their controllers in the server
        // TODO: Use listen methods to listen to new incomming requests
    }
}
const app = new App();
app.init();
//# sourceMappingURL=app.js.map