import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import * as mongo from "mongoose";
import Schema from "./schema";

const app = express();

mongo.connect('mongodb://nodejs_user:Aa123456@ds117200.mlab.com:17200/course-2018', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongo.connection.once('open', () => {
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema: Schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('Server running succefully...')
});
