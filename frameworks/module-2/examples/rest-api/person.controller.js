"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personRouter = void 0;
/*person.controller.ts*/
const express_1 = require("express");
exports.personRouter = express_1.Router();
exports.personRouter.get('/', (req, res) => {
    res.send([{ name: 'Almog' }, { name: 'Danny' }]);
});
exports.personRouter.post('/', (req, res) => {
    res.send(req.body);
});
exports.personRouter.get('/:userId', (req, res) => {
    res.send(req.params.userId);
});
//# sourceMappingURL=person.controller.js.map