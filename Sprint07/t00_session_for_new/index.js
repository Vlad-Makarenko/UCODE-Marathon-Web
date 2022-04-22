const express = require('express');
const app = express();
const session = require('express-session');
const formRouter = require('./script');

const host = 'localhost';
const port = process.env.PORT || 3000;


app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'some secret',
    saveUninitialized: true,
    sent: false
}))

app.use('/', formRouter);


app.listen(port, () => console.log(`server is running on http://${host}:${port}`));