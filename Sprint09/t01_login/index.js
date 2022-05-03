const express = require('express');
const app = express();
const db = require('./db');
const session = require('express-session');
const ejs = require('ejs');
const bcrypt = require('bcrypt');
const passport = require('passport');
const flash = require('express-flash');
const methodOverride = require('method-override');
const localStatege = require('passport-local').Strategy;
initializePassport();

const User = require('./models/user');
const e = require('express');


const host = 'localhost';
const port = process.env.PORT || 3000;


app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(flash());
app.use(session({
    secret: 'some secret',
    // cookie: { maxAge: 1000 * 3600 * 24}, // 1 day
    resave: false,
    saveUninitialized: false,
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

app.get('/', checkAuthenticated, (req, res) => {
    res.render('index', { name: req.user.name, status: req.user.status });
})

app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login');
})

app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

app.delete('/logout', (req, res) => {
    req.logOut();
    res.redirect('/login');
})

function initializePassport(){
    const authenticateUser = async (login, password, done) => {
        const user = await new User(login).findbyLogin(login);
        if(user == null) {
            return done(null, false, {message: 'No user with that login'});
        }

        try{
            if(await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                done(null, false, {message: 'Password incorrect'})
            }
        } catch(e) {
            done(e);
        }
    }
    passport.use(new localStatege({usernameField: 'login'},  authenticateUser));
    passport.serializeUser((user, done) => done(null, user.id)); 
    passport.deserializeUser(async (id, done) => { 
        const userbyId = await new User().findbyId(id);;
        return done(null, userbyId);
     }); 
}


function checkAuthenticated(req, res, next) {
    if ( req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}

function checkNotAuthenticated(req, res, next) {
    if ( req.isAuthenticated()) {
        res.redirect('/');

    } else {
        return next();

    }
}




app.listen(port, () => console.log(`server is running on http://${host}:${port}`));

