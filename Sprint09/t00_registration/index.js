const express = require('express');
const app = express();
const db = require('./db');
const session = require('express-session');
const ejs = require('ejs');
const bcrypt = require('bcrypt');
const User = require('./models/user');

const host = 'localhost';
const port = process.env.PORT || 3000;
const emails = [];
const logins = [];

app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname + '/public');

app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + '/public'));
// app.use('/js', express.static(__dirname));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'some secret',
    cookie: { maxAge: 1000 * 3600 * 24}, // 1 day
    saveUninitialized: false,
}))



app.get('/', async (req, res) => {
    await getUsers();
    res.render('index');
})

app.post('/registration', async (req, res) => {
    console.log(emails, logins);

    if(req.body.password !== req.body.ConfPassword){
        res.render('index', {data: 'Passwords do not match', class: 'error'});
    }else if (logins.some(login => login === req.body.login)){
        res.render('index', {data: 'A user with the same login already exists', class: 'error'});
    }else if (emails.some(email => email === req.body.email)){
        res.render('index', {data: 'A user with the same email already exists', class: 'error'});
    }else {
        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User(req.body.name, req.body.login, hashPassword, req.body.email);
        newUser.save();
        res.render('index', {data: 'Registration completed successfully', class: 'success'});
    }
})

function getUsers(){
    const query_str = `SELECT login, email FROM users`;

    db.query(query_str, (err, res) => {
        if(err){
            console.log(err);
        } else {
            res.map(({login}) => logins.push(login));
            res.map(({email}) => emails.push(email));
        }
    })

}


app.listen(port, () => console.log(`server is running on http://${host}:${port}`));

