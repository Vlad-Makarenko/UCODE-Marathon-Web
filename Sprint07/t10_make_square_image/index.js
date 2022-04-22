const express = require('express');
const app = express();
const session = require('express-session');
const ejs = require('ejs');
const sharp = require('sharp');
const downloadImage = require('./download');

const host = 'localhost';
const port = process.env.PORT || 3000;

app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.set('views', __dirname);

app.use('/js', express.static(__dirname));
app.use('/public', express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'some secret',
    cookie: { maxAge: 1000 * 3600 * 24}, // 1 day
    saveUninitialized: false,
}))

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', async (req, res) => {
    await downloadImage(req.body.link, `public/Origin.png`, () => { 
        console.log('Image Downloaded')
        prepareImage(undefined, undefined, undefined, 'Prepared');
        prepareImage(255, 0, 0, 'RChannel');
        prepareImage(0, 255, 0, 'GChannel');
        prepareImage(0, 0, 255, 'BChannel');
        console.log('Image Prepared')
        res.render('index', {display: true});
    });

});


app.listen(port, () => console.log(`server is running on http://${host}:${port}`));


async function prepareImage(r, g, b, name) {
    try {
      await sharp("public/Origin.png")
        .tint({r: r, g: g, b: b})
        .toFile(`public/${name}.png`);
    } catch (error) {
        console.log(error);
    }
}

