"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("http");
const socketIO = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");
const router_1 = require("./controllers/items/router");
const items_websocket_controller_1 = require("./controllers/items-websocket/items-websocket.controller");
exports.app = express();
const http = new http_1.Server(exports.app);
const io = socketIO(http);
const itemsWebsocketController = new items_websocket_controller_1.ItemsWebsocketController(io);
exports.app.use(cors());
exports.app.use(bodyParser.json());
exports.app.use('/api/items', router_1.itemsRouterFactory(itemsWebsocketController));
exports.httpServer = new http_1.Server(exports.app);
//# sourceMappingURL=express.js.map