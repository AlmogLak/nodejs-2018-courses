"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* rest-api.ts */
const express = require("express");
const bodyParser = require("body-parser");
const person_controller_1 = require("./person.controller");
const app = express();
// app.use();
app.use('/api/person', bodyParser.json(), auth, person_controller_1.router);
app.get('/', (req, res) => res.send('test'));
app.listen(3000, () => {
    console.log('listening on port 3000');
});
function auth(req, res, next) {
    const authHeader = req.headers['auth'];
    if (!authHeader) {
        res.sendStatus(401);
        return;
    }
    next();
}
//# sourceMappingURL=rest-api.js.map