import * as express from "express";
import * as bodyParser from "body-parser";
import { UsersController } from "./controllers/users.controller";
import { UsersRouter } from "./controllers/users.router";

class App {
    private readonly port: number = 3000;

    constructor() {
        this.requestLog = this.requestLog.bind(this);
    }

    init() {
        const usersController = new UsersController();
        let userRouters = new UsersRouter(usersController);
        let server = express();
        

        server.use(bodyParser.json());
        server.use(this.requestLog);
        server.use('/api/users', userRouters.router());

        server.listen(this.port, () => console.log(`server listening on port ${this.port}!`));
    }

    private requestLog(req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(`${req.method}:  http://${req.hostname}:${this.port}${req.url}`);
        next();
    }
}

const app = new App();
app.init();
