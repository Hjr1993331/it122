"use strict"

import { Movie } from "./models/movies.js";
import express from 'express';
import handlebars from "express-handlebars"

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.static('./main'));
app.use(express.urlencoded());
app.use(express.json());

import cors from 'cors';
app.use('/api', cors());

app.engine('handlebars', handlebars({defaultLayout: "main.handlebars"}));
app.set("view engine", "handlebars");

//home page
app.get('/', (req, res, next) => {
    return Movie.find({}).lean()
      .then((movies) => {
          res.render('home', { movies });
      })
      .catch(err => next(err));
  });

//about page
app.get('/about', (req,res) => {
    res.type('text/plain');
    res.send('About page');
});

//detail
app.get('/detail', (req,res,next) => {
    Movie.findOne({ name:req.query.name }).lean()
        .then((movie) => {
            res.render('details', {result: movie} );
        })
        .catch(err => next(err));
});

app.post('/detail', (req,res, next) => {
    Movie.findOne({ name:req.body.name }).lean()
        .then((movie) => {
            res.render('details', {result: movie} );
        })
        .catch(err => next(err));
});

app.get('/delete', (req,res) => {
    Movie.remove({ name:req.query.name }, (err, result) => {
        if (err) return next(err);
        let deleted = result.result.n !== 0; // n will be 0 if no docs deleted
        Movie.count((err, total) => {
            res.type('text/html');
            res.render('delete', {name: req.query.name, deleted: result.result.n !== 0, total: total } );    
        });
    });
});   



//create an API route to get all items
app.get('/api/movies', (req, res, next) => {
    return Movie.find({}).lean()
      .then((movies) => {
          res.json(movies);
      })
      .catch(err => { return res.status(500).send('Error occurred: database error.')} );
  });
  
  //create API route to get a single item
  app.get('/api/movies/:model', (req, res) => {
    const model = req.params.model; 
    Movie.findOne({model: model}).lean()
      .then((movies) => {
        if (movies == null) {
          return res.status(400).send('Error occurred: model not found');
        }
        else {
          res.json(movies);
        }
      })
      .catch(err => { return res.status(500).send('Error occurred: database error.')} );
  });
  
  //create an API route to delete an item
  app.get('/api/delete/:model', (req, res) => {
    const model = req.params.model; 
    Movie.findOneAndDelete({model: model}).lean()
      .then((movies) => {
        if (movies == null) {
          return res.status(400).send('Error occurred: model not found');
        }
        else {
          res.json(movies);
        }
      })
      .catch(err => { return res.status(500).send('Error occurred: database error.')} );
  }); 
  
  //create an API route to add/update an item (post request)  
  app.post('/api/movies/:model', (req, res) => {
    if(!req.body){
      return res.status(400).send('Request body is missing');
    }
    const model = req.params.model;
    Movie.findOneAndUpdate({model: model}, req.body, {upsert:true} ).lean()
      .then((movies) => {
        res.json(movies);
      })
      .catch(err => { return res.status(500).send('Error occurred: database error.')} );
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