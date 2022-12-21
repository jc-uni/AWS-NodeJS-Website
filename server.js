'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
const ello_guvnor = ["Hello"," world!"]

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<p>')
    res.write('test')
    res.write('</p>')
    res.end();
}).listen(port);
