import * as express from 'express';
const app = express()

app.use('/static', express.static('../../assets'));
// app.use(express.static('../../assets'));
// http://localhost:3000/att_logo.png
// http://localhost:3000/static/att_logo.png

app.listen(3000, () => console.log('Example app listening on port 3000!'))