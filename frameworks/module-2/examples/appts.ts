import * as express from 'express'
// const express = require('express')
const app = express()

app.get('/', (req, res) => {
    //res.sendStatus()
    res.send('Hello World!')
    //req
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))