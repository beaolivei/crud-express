const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const port = 8000

const favoriteMovies = [
    {
        id: 0,
        title: "Nope!",
        year: 2022,
        entryBy: 'Bea'
    },
    {
        id: 1, 
        title: 'Everything everywhere all at once',
        year: 2021,
        entryBy: 'Bea'

    }
]

app.set('view engine', 'ejs')
app.use(bodyparser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('app', {favoriteMovies})
})

app.get('/add', (req, res) => {
    res.render('add')

})
app.get("/edit/:id", (req, res) => {
    res.render('edit',{movie: favoriteMovies[req.params.id]} )
})

app.post("/edit/:id", (req, res) => {
    const newMovie ={
        id: req.params.id, 
        title: req.body.title,
        year: req.body.year,
        entryBy: req.body.entryBy
    }
    favoriteMovies[req.params.id] = newMovie
    res.redirect('/')
})
app.post("/add", (req, res) => {
    const newMovie ={
        id: favoriteMovies.length - 1, 
        title: req.body.title,
        year: req.body.year,
        entryBy: req.body.entryBy
    }
    favoriteMovies.push(newMovie)
    res.redirect('/')
})
app.post("/delete/:id", (req, res) => {
    favoriteMovies.splice(req.params.id - 1, 1)
    res.redirect('/')
})

app.listen(port, () => {
    console.log(`My app is running on port ${port}`)
})