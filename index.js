const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
   
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/login'))
  .get('/home', (req, res) => res.render('pages/index'))
  .get('/login', (req, res) => res.render('pages/login'))
  .get('/residents', (req, res) => res.render('pages/residents'))
  .get('/blotters', (req, res) => res.render('pages/blotters'))
  .get('/addResident', (req, res) => res.render('pages/addResident'))
  .get('/addBlotter', (req, res) => res.render('pages/addBlotter'))
  .get('/secretary', (req, res) => res.render('pages/secretary'))
  .get('/treasurer', (req, res) => res.render('pages/treasurer'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
