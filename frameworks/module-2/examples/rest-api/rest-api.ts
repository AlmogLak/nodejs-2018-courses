/* rest-api.ts */
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import { router } from './person.controller';
const app = express();

// app.use();
app.use('/api/person', bodyParser.json(), auth, router);
app.get('/', (req, res) => res.send('test'));
app.listen(3000, () => {
    console.log('listening on port 3000');
});

function auth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['auth'];
    if (!authHeader) {
        res.sendStatus(401);
        return;
    }
    next();
}