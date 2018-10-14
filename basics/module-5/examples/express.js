"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/', (req, res) => res.send(req.body));
app.listen(3000, () => console.log('Example app listening on port 3000!'));
//# sourceMappingURL=express.js.map