import express from'express';
const app = express();
import ejs from'ejs';
import fetch from'node-fetch';
import path from 'path';
import MD5 from "crypto-js/md5.js";

const host = 'localhost';
const port = process.env.PORT || 3000;

const ts = Date.now();
const public_key = 'dbde435fb9e47b659742711406646118';
const private_key = '49040d84845c945ad76287d6d4ce9e4adb16e591';
const hash = MD5(ts +  private_key + public_key).toString();
const marvel_url = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${public_key}&hash=${hash}`



app.engine('html', ejs.__express);
app.set('view engine', "html");
app.set('views', path.resolve());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.resolve()));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/marvel_api', async (req, res) => {
    const api = await fetch(marvel_url);
    res.json(await api.json() );
})

app.listen(port, () => console.log(`server is running on http://${host}:${port}`));
