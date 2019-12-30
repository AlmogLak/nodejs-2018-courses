import * as express from "express";
import * as bodyParser from "body-parser";
import { UsersController } from "./controllers/users.controller";

class App {
    private readonly port: number = 3000;

    init() {
        const usersController = new UsersController();
        let server = express();

        server.use(bodyParser.json());
        server.get('/api/users', usersController.list);
        server.post('/api/users', usersController.create);

        server.listen(this.port, () => console.log(`server listening on port ${this.port}!`));
    }
}

const app = new App();
app.init();
