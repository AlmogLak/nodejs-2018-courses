/* rest-api.ts */
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import { personRouter } from './person.controller';
const app = express();

app.use('/api/person', bodyParser.json(), auth, personRouter);
app.use(aaa);
app.get('/:almog?', (req, res) => res.send(req.params.almog));
app.listen(3000, () => {
    console.log('listening on port 3000');
});

function aaa(req: Request, res: Response, next: NextFunction) {
    console.log("hello!");
    next();
}

function auth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers['auth'];
    if (!authHeader) {
        res.sendStatus(401);
        return;
    }
    next();
}