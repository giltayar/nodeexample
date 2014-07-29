 var fs = require('fs')
var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  fs.readFile('D:\\home\\site\\repository\\.git\\config', function(err, file) {
      res.end('vavava Read file: ' + file.toString() + "; " + err);
  })
}).listen(port);
