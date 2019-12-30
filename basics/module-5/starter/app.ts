import * as express from "express";
import * as bodyParser from "body-parser";
import { UsersController } from "./controllers/users.controller";

class App {
    private readonly port: number = 3000;

    init() {
        const usersController = new UsersController();
        // TODO: Set new express server instance

        // TODO: use bodyParser.json() as middleware;
        
        // TODO: Define the methods and their controllers in the server
        
        // TODO: Use listen methods to listen to new incomming requests
    }
}

const app = new App();
app.init();
