"use strict"

import * as movie from "./data.js";
import express from 'express';
import handlebars from "express-handlebars"

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.static('./main'));
app.use(express.urlencoded());
app.use(express.json());

app.engine('handlebars', handlebars({defaultLayout: "main.handlebars"}));
app.set("view engine", "handlebars");

//home page
app.get('/', (req,res) => {
    res.render('home', {movies: movie.getAll()});
});

//about page
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
});

//detail
app.get('/detail', (req,res) => {
    console.log(req.query)
    let result = movie.getItem(req.query.name);
    res.render("details", {
        name: req.query.name, 
        result:result
        }
    );
});

app.post('/detail', (req,res) => {
    console.log(req.body)
    let found = movie.getItem(req.body.name);
    res.render("details", {name: req.body.name, result: found, movies: movie.getAll()});
});

// 404 error
app.use((req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');    
});