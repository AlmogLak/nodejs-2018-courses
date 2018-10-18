"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*person.controller.ts*/
const express_1 = require("express");
exports.router = express_1.Router();
exports.router.get('/', (req, res) => {
    res.send([{ name: 'Danny' }, { name: 'Nabil' }]);
});
exports.router.post('/', (req, res) => {
    res.send(req.body);
});
exports.router.get(':userId', (req, res) => {
    res.send(req.params.userId);
});
//# sourceMappingURL=person.controller.js.map