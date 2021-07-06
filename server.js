import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { find } from './data/js-db.js'

const app = express()

app.set('view engine', 'ejs')
app.set(
	'views', 
	path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)

// Mount Middleware (app.use)



// Mount routes
app.get('/', (req, res) => {
    res.redirect('/home')
})

app.get('/home', function(req, res) {
    res.render('home')
})

app.get('/todos', function(req, res) {
    todoDb.find({}, function(error, todos) {
      res.render('todos/index', {
        todos: todos,
        error: error
      })
    })
  })

app.get('*', function(req, res) {
    res.render('home')
})


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})