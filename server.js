var http = require('http');
http.createServer(function(req, res)
{
    res.writeHead(500,{'content-type''text/html});
    res.end("welcome to <br/>NODEJS");
}).listen(3000);
console.log("server is listening on http://127.0.0.1:3000");