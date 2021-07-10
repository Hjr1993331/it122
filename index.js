console.log('Hello')
import { getAll, getItem } from './data.js';
import http from 'http';


http.createServer (
    (req, res) => {
        
    var path = req.url.toLowerCase();


        if (path === '/') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(getAll()));
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