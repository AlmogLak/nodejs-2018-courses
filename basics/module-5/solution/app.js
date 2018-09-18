"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const items_controller_1 = require("./controllers/items.controller");
class App {
    constructor() {
        this.port = 3000;
    }
    init() {
        let itemsController = new items_controller_1.ItemsController();
        let server = express();
        server.use(bodyParser.json());
        server.get('/api/items', itemsController.list);
        server.post('/api/items', itemsController.create);
        server.listen(this.port, () => console.log(`server listening on port ${this.port}!`));
    }
}
const app = new App();
app.init();
//# sourceMappingURL=app.js.map