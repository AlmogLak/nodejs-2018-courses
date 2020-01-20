"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const server = http.createServer();
server.on("request", (request, response) => {
    if (request.url === "/slow") {
        for (let i = 0; i < 1e10; i++)
            ; // Bloking
        response.end(`Request handled by ${process.pid}`);
    }
});
server.listen(8080, () => { console.log(`${process.pid} listening on 8080`); });
//# sourceMappingURL=server.js.map