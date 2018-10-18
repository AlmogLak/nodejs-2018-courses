"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.get('/', [authenticate, requestLog], (req, res, next) => {
    res.send('Hello World!');
    next();
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
function authenticate(req, res, next) {
    const userId = req.header('x-auth');
    if (!userId || userId !== 'Danny') {
        console.log(userId);
        res.status(401).send('Authentication Error');
    }
    res.set('x-user-surname', 'Vernovsky');
    next();
}
function requestLog(req, res, next) {
    console.log(`${req.method}  ${req.hostname}${req.url} for user: ${req.header('x-auth')}`);
    next();
}
//# sourceMappingURL=app.middleware.js.map