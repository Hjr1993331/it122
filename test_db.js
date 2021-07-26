'use strict'

import { Movie } from "./models/movies.js";

// return all records
Movie.find({}).lean()
  .then((movies) => {
    console.log(movies);
  })
  .catch(err => next(err));

