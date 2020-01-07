"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
// app.use(authenticate);
// app.use(requestLog);
// app.use([authenticate, requestLog]);
app.get('/', [authenticate, requestLog], (req, res, next) => {
    res.send('Hello World!');
    next();
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
function authenticate(req, res, next) {
    const userId = req.header('auth');
    if (!userId || userId !== 'almog') {
        console.log(userId);
        res.status(401).send('Authentication Error');
        return;
    }
    res.set('surname', 'laktivi');
    next();
}
function requestLog(req, res, next) {
    console.log(`${req.method}  ${req.hostname}${req.url} for user: ${req.header('auth')}`);
    next();
}
//# sourceMappingURL=app-mw.js.map