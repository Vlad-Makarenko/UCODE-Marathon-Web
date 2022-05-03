const express = require('express');
const app = express();
const session = require('express-session');
const ejs = require('ejs');
const passport = require('passport');
const flash = require('express-flash');
const methodOverride = require('method-override');

const {checkAuthenticated} = require('./check');
const initializePassport = require('./passport');
initializePassport(passport);

const loginRouter = require('./controllerLogin');
const reminderRouter = require('./controllerReminder');
const registrationRouter = require('./controllerRegistration');

const host = 'localhost';
const port = process.env.PORT || 3000;


app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use('/css', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(flash());
app.use(session({
    secret: 'some secret',
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));


app.get('/', checkAuthenticated, (req, res) => {
    res.render('index', { name: req.user.name, status: req.user.status });
})

app.use('/registration', registrationRouter);
app.use('/login', loginRouter);
app.use('/logout', loginRouter);
app.use('/remind', reminderRouter);

app.use((req, res, next) =>{
    res.status(404).render('PageNotFound');
});


app.listen(port, () => console.log(`server is running on http://${host}:${port}`));

