"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, 'test.txt');
fs.writeFile(filePath, 'kush kush', (err) => {
});
//# sourceMappingURL=app.js.map