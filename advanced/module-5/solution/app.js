"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongo = require("mongoose");
const schema_1 = require("./schema");
const app = express();
mongo.connect('mongodb://nodejs_user:Aa123456@ds117200.mlab.com:17200/course-2018', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongo.connection.once('open', () => {
    console.log('connected to database');
});
app.use('/graphql', graphqlHTTP({
    schema: schema_1.default,
    graphiql: true
}));
app.listen(3000, () => {
    console.log('Server running succefully...');
});
//# sourceMappingURL=app.js.map