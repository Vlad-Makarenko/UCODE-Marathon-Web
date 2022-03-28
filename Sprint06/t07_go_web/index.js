const express = require('express');
const app = express();

const host = 'localhost';
const port = process.env.POTR || 3000;

const normalRouter = require('./normal-router');
const quantumRouter = require('./quantum-router');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use('/normal', normalRouter);
app.use('/quantum', quantumRouter);


app.get('/', (req, res) => {
    res.render('index');
});


app.listen(port, () => console.log(`server is running on http://${host}:${port}`));
