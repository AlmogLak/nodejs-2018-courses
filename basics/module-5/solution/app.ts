import * as express from "express";
import * as bodyParser from "body-parser";
import { ItemsController } from "./controllers/items.controller";


class App {
    private readonly port: number = 3000;

    init() {
        let itemsController = new ItemsController();
        let server = express();

        server.use(bodyParser.json());
        server.get('/api/items', itemsController.list);
        server.post('/api/items', itemsController.create);

        server.listen(this.port, () => console.log(`server listening on port ${this.port}!`));
    }
}

const app = new App();
app.init();