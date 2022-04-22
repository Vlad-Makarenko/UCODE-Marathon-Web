const express = require('express');
const app = express();
const session = require('express-session');
const ejs = require('ejs');
const csv = require('csv-parser');
const fs = require('fs');
const parserRouter = require('./parserCSV');

const host = 'localhost';
const port = process.env.PORT || 3000;

app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname);

app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'some secret',
    cookie: { maxAge: 1000 * 3600 * 24}, // 1 day
    saveUninitialized: false,
}))
app.use(express.static(__dirname));

app.get('/', (res, req) => {
    res.render('index')
})

app.use('/getTable', parserRouter);
app.use('/', parserRouter);

app.listen(port, () => console.log(`server is running on http://${host}:${port}`));
