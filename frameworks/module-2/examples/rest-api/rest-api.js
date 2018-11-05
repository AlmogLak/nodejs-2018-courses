"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* rest-api.ts */
const express = require("express");
const bodyParser = require("body-parser");
const person_controller_1 = require("./person.controller");
const app = express();
app.use('/api/person', bodyParser.json(), auth, person_controller_1.personRouter);
app.use(aaa);
app.get('/:almog', (req, res) => res.send(req.params.almog));
app.listen(3000, () => {
    console.log('listening on port 3000');
});
function aaa(req, res, next) {
    console.log("hello!");
    next();
}
function auth(req, res, next) {
    const authHeader = req.headers['auth'];
    if (!authHeader) {
        res.sendStatus(401);
        return;
    }
    next();
}
//# sourceMappingURL=rest-api.js.map