const express = require('express');
const app = express();
const ip = require('ip');
const url = require('url');
const path = require('path');

const host = 'localhost';
const port = process.env.POTR || 3000;


app.get('/', (req, res) => {
    res.send('Hello, Vlad!');
    const info = [
        `a name of file of the executed script: ${path.basename(__filename)}`, 
        `arguments passed to the script: ${process.argv.slice(2)}`,
        `IP address of the server: ${req.ip}`,
        `a name of host that invokes the current script: ${req.headers.host}`,
        `a name and a version of the information protocol: ${req.protocol} and ${req.httpVersion}`,
        `a query method: ${req.method}`,
        `User-Agent information: ${req.get('user-agent')}`,
        `IP address of the client: ${ip.address()}`,
        `a list of parameters passed by URL:`
    ];
    console.log(info.join('\n'));
    console.log(url.parse(req.url, true).query);

});

app.listen(port, () => console.log(`server is running on http://${host}:${port}\n`));

