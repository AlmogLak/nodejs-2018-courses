import * as express from 'express'
const app = express()

app.get('/', [authenticate, requestLog], (req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.send('Hello World!');
    next();
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

function authenticate(req: express.Request, res: express.Response, next: express.NextFunction) {
    const userId = req.header('x-auth');

    if (!userId || userId !== 'Danny') {
        console.log(userId);
        res.status(401).send('Authentication Error');
    }

    res.set('x-user-surname', 'Vernovsky');
    next();
}

function requestLog(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log(`${req.method}  ${req.hostname}${req.url} for user: ${req.header('x-auth')}`);
    next();
}