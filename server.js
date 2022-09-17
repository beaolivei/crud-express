const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 8080

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended: true}))

const favoriteMovies = [
    {
        id: 0,
        title: "Mulan" ,
        year: 2012,
        entryBy: "Bea"
    }, 
    {
        id: 1,
        title: "Fight Club",
        year: 1999,
        entryBy: "Macky"
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        entryBy: "Jevaughn"
    },
    {
        id:3,
        title: "Blade Runner 2049",
        year: 2017,
        entryBy: "Vanessa"
    }
]

//GET
app.get('/', (req, res) => {
   res.render('app', {movies: favoriteMovies})
})
app.get("/add", (req, res) => {
    res.render('add')
})
app.get("/edit/:id", (req, res)=> {
    console.log('id', req.params.id)
    res.render('edit', {movie: favoriteMovies[req.params.id]})
})

//POST
app.post("/add", (req, res)=> {
    const newMovie = {
        id: favoriteMovies.length,
        title: req.body.title,
        year: req.body.year,
        entryBy: req.body.entryBy
    }
    favoriteMovies.push(newMovie)
    res.redirect('/')
})

app.post("/edit/:id", (req, res)=> {
    const newMovie = {
        id: req.params.id,
        title: req.body.title,
        year: req.body.year,
        entryBy: req.body.entryBy
    }
    favoriteMovies[req.params.id] = newMovie
    res.redirect('/')
})

app.post("/delete/:id", (request, response)=> {
    const elementPosition = request.params.id
    console.log('elPosition', elementPosition)
    favoriteMovies.splice(elementPosition, 1)
    response.redirect("/")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})