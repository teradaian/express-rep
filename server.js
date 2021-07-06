import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import * as jsdb from './data/js-db.js'

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

app.get('/js', function(req, res) {
    jsdb.find({}, function(error, facts) {
      res.render('js/index', { facts, error })
    })
  })

app.get('*', function(req, res) {
    res.render('home')
})


// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})