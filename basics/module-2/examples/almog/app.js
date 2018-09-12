"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = express_1.default();
app.get('/', (req, res) => {
    res.send("Hello world!");
});
app.listen(3000, () => {
    console.log("started at 3000");
});
//# sourceMappingURL=app.js.map