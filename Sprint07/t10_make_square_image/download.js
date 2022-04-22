const fs = require('fs');
const request = require('request');

module.exports = function downloadImage(uri, filename, callback){
    if(!fs.existsSync('public/')){
        fs.mkdirSync('public/');
    }

    request.head(uri, function(err, res, body){
    //   console.log('content-type:', res.headers['content-type']);
    //   console.log('content-length:', res.headers['content-length']);
      request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};
