'use strict';


import { getAll, getItem } from './data.js';
import http from 'http';
import { parse } from "querystring";

// console.log(getItem("Avengers"))

// import * as movies from "./data.js";
import express from 'express';
import handlebars from "express-handlebars"


console.log(getItem('Avengers'))
console.log(getAll())
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static('./public')); 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine('handlebars', handlebars({defaultLayout: "main.handlebars"}));
app.set("view engine", "handlebars");

// send static file as response
app.get('/', (req,res) => {
    res.render('home', {movies: movie.getAll()});
});

   

// send plain text response
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
});

app.get('/detail', (req,res) => {
    console.log(req.query)
    let result = movie.getItem(req.query.name);
    res.render("details", {
        name: req.query.name, 
        result: result
        }
    );
});

// handle POST
app.post('/detail', (req,res) => {
    console.log(req.body)
    let found = movie.getItem(req.body.name);
    res.render("details", {name: req.body.name, result: found, movies: movie.getAll()});
});

// define 404 handler
app.use((req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');    
});

