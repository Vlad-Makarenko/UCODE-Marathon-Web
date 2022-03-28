const host = 'localhost';
const port = 8080;



function contentType(ext) {
    var ct;

    switch (ext) {
    case '.html':
        ct = 'text/html';
        break;
    case '.css':
        ct = 'text/css';
        break;
    case '.js':
        ct = 'text/javascript';
        break;
    default:
        ct = 'text/plain';
        break;
    }

    return {'Content-Type': ct};
}

var http = require("http");
var fs = require('fs');
var url = require("url");
var path = require("path")
    
var server = http.createServer (function (request, response) {

    var dir = ".";
    var uri = url.parse(request.url).pathname;

    if (uri == "/") {
        uri = "index.html";
    }

    var filename = path.join(dir, uri);

    fs.readFile(filename,
        function (err, data) {
            if (err) {
                response.writeHead(500);
                return response.end('Error loading index.html');
            }
                    
            var ext = path.extname(filename)
            response.setHeader('content-type',contentType(ext));
            response.writeHead(200);
            response.end(data);
        });
});

server.listen(port, host, () => {
    console.log(`server is running on http://${host}:${port}`)
})
    