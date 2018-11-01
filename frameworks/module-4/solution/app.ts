import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { itemsRouter } from './controllers/items/router';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(printMethod);
app.use('/api/items', itemsRouter);

app.listen(3000, () => console.log('app listening on port 3000!'));

function printMethod(request: express.Request, response: express.Response, next: express.NextFunction) {
    console.log(`New incomming request from type [${request.method}]`);
    next();
}