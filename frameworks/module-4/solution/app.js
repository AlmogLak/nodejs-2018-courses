"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router_1 = require("./controllers/items/router");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(printMethod);
app.use('/api/items', router_1.itemsRouter);
app.listen(3000, () => console.log('app listening on port 3000!'));
function printMethod(request, response, next) {
    console.log(`New incomming request from type [${request.method}]`);
    next();
}
//# sourceMappingURL=app.js.map