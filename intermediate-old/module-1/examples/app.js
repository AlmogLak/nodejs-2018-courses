"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
class App {
    init() {
        request.default('http://www.google.com', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        });
    }
}
const app = new App();
app.init();
//# sourceMappingURL=app.js.map