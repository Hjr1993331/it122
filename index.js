console.log('Hello')
import { getAll, getItem } from './data.js';
import http from 'http';
import { parse } from "querystring";
// console.log(getItem("Avengers"))

http.createServer (
    (req, res) => {
        
    let url = req.url.split("?");  
    let query = parse(url[1]); 
    var path = req.url.toLowerCase();
    console.log(query)

        if (path === '/') {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(getAll()));
        }
        
        if (path === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(getItem("Avengers")));
        }
        
        else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
        }
        
}).listen(process.env.PORT || 3000);