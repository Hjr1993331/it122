console.log('Welcome to IT122')

// import http from 'http';

const http = require("http");
http.createServer((req,res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    // res.end('Aloha world');
//}).listen(process.env.PORT || 3000);

    var path = req.url.toLowerCase();


        if (path === '/') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home Page');
        }
        
        if (path === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('About Page');
        }
        
        else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
        }
}).listen(process.env.PORT || 3000);