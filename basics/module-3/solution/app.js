"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router_1 = require("./controllers/items/router");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/items', router_1.itemsRouter);
app.listen(3000, () => console.log('app listening on port 3000!'));
//# sourceMappingURL=app.js.map