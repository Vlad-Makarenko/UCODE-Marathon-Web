const express = require('express');
const app = express();
const session = require('express-session');
const expressThymeleaf = require('express-thymeleaf');
const {TemplateEngine} = require('thymeleaf');
const loginRouter = require('./login');



const host = 'localhost';
const port = process.env.PORT || 3000;

const templateEngine = new TemplateEngine();
app.engine('html', expressThymeleaf(templateEngine));
app.set('view engine', 'html');
app.set('views', __dirname + '/');

app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: 'some secret',
    cookie: {maxAge: 3000},
    saveUninitialized: false
}))

app.use('/', loginRouter);


app.listen(port, () => console.log(`server is running on http://${host}:${port}`));