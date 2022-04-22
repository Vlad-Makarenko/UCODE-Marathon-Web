const express = require('express');
const app = express();
const ejs = require('ejs')
const ListAvengerQuotes = require('./ListAvengerQuotes');
const AvengerQuote = require('./AvengerQuote');

const host = 'localhost';
const port = process.env.PORT || 3000;


app.engine("html", ejs.__express);
app.set("view engine", "html");
app.set('views', __dirname + '/');
app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname));


app.get('/', (req, res) => {
   res.render('index'); 
});

app.get('/getData', (req, res) => {
    const list = new ListAvengerQuotes();
    const quote = new AvengerQuote(1, 'Vlad', 'Hello, World', 'Path/to/photo', 'Today', ['hello!', 'Hi!', "=)"]);
    list.addQuote(quote);
    res.json({toXML: list.toXML(), fromXML: list.fromXML()});

    // res.json({toXML: list.toXML(), fromXML: list.fromXML()});

})

app.listen(port, () => console.log(`server is running on http://${host}:${port}`));
