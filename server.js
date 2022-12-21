'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const ello_guvnor = ["Hello"," world!"]

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('test ')
    res.end(ello_guvnor[0] + ello_guvnor[1]);
}).listen(port);
