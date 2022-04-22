import express from 'express';
const app = express();
import got  from'got';
import ejs  from'ejs';
import path from 'path'

const host = 'localhost';
const port = process.env.PORT || 3000;


app.engine("html", ejs.__express);
app.set("view engine", "html");
app.set('views', path.resolve() + '/');
app.use(express.urlencoded({extended: false}));
// app.use(express.static(path.resolve()));



app.get('/', async (req, res) => {
    const link = req.query.url;
	if (link)
	{
        const data = await got(link);
        res.render('index', { url: link , content: `<body>\n ${/<body.*?>([\s\S]*)<\/body>/.exec(data.body)[1]} </body>`});
        return;
    } else {
        res.render('index', { url: 'Type an url..'});
    }
});


app.listen(port, () => console.log(`server is running on http://${host}:${port}`));
