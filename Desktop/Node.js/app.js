// const ht= require('html')
const http = require('http');

http.createServer((req,res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    res.writeHead(200, {'Content-Type': 'text/html' });
    res.end('<h1>Osnovs  node</h1>');
}).listen(3000, ()=> console.log('its OK'));