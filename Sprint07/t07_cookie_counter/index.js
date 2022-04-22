const express = require('express');
const app = express();
const session = require('express-session');
const ejs = require('ejs');
const counterRouter = require('./cookieCounter');

const host = 'localhost';
const port = process.env.PORT || 3000;

app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname);

app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'some secret',
    cookie: { maxAge: 60000}, // 1 minute
    saveUninitialized: false,
}))

app.use('/', counterRouter);


app.listen(port, () => console.log(`server is running on http://${host}:${port}`));
