const express = require('express');
const app = express();
const session = require('express-session');
const ejs = require('ejs');

const Note = require('./Note');
const NotePad = require('./NotePad');
const NotePadMini = new NotePad();

const host = 'localhost';
const port = process.env.PORT || 3000;

app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname);

app.use('/js', express.static(__dirname));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'some secret',
    cookie: { maxAge: 1000 * 3600 * 24}, // 1 day
    saveUninitialized: false,
}))

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    NotePadMini.addNote(new Note(req.body.name, req.body.text, req.body.importance));
    res.render('index');
});

app.get('/list', (req, res) => {
    res.json(NotePadMini.getAllNotes());
})

app.get('/:file', (req, res) => {
    res.render('index', NotePadMini.getNote(req.params.file));
})

app.get('/delete/:file', (req, res) => {
    NotePadMini.DeleteNote(req.params.file);
    res.redirect('/');
})


app.listen(port, () => console.log(`server is running on http://${host}:${port}`));

