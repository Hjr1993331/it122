let movies = [
    { name : "Avengers", year : 2019, type : ["action", "science", "sf"], genre : "action" },
    { name : "X-Men", year : 2011, type : ["drama", "mutants", "love"], genre : "action"},
    { name : "Matlix", year : 2001, type : ["science", "computer", "hallucination"], genre : "action" },
    { name : "Matlix2", year : 2005, type : ["science", "computer", "hallucination"], genre : "action" },
    { name : "Matlix3", year : 2007, type : ["science", "computer", "hallucination"], genre : "action"  }
];

const getAll = () => {
    return movies;
}

const getItem = (name) => {
    return movies.find((movie) => {
        return movie.name === name;
    });
}

export { getAll, getItem }