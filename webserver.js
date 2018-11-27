var http = require('http');
var url = require('url');
var fs = require('fs');
const TCP_PORT = 80;


http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(TCP_PORT);

console.log("web server running at\n  => http://localhost:" + TCP_PORT + "/\nCTRL + C to shutdown");