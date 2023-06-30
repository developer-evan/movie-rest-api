const express = require("express");
const app = express();
const port = 5000;

// parse JSON  using express
 app.use(express.json());
 app.use(express.urlencoded({extended:false}))




let movies = [
  {
    id: "1",
    name: "Evans",
    director: "mogeni",
    date: "2015-07-02",
  },
  {
    id: "2",
    name: "Dragon",
    director: "Marshal",
    date: "2015-07-02",
  },
  {
    id: "3",
    name: "Shanara",
    director: "King",
    date: "2015-07-02",
  },
];

// get all movies

app.get("/api/movie", (req, res) => {
  res.json(movies);
});
// add the movies

app.post("/api/movie", (req,res)=>{
    const movie = req.body;

    console.log(movie);
    movies.push(movie);
    res.send("movie added to the list");

})
// search a movie in the list
app.get('/api/movie/:id' ,(req,res) =>{
  const id = req.params.id

  for(let movie of movies){
    if(movie.id===id){
      res.json(movie)
      return
    }
  }
  res.status(404).send("not found")

})

// delete movie from list
app.delete('/api/movie/:id', (req , res) => {
  const id = req.params.id;

  movies= movies.filter((movie) =>{
    if(movie.id !== id){
      return true;
    }
    return false;
  })
  res.send("deleted successfully")

})


app.listen(port, () => {
  console.log("Live in ", port);
});
