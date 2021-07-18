const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handle = require('express-handlebars');
const sass = require('node-sass');
const app = express()
const port = 3001

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname,'public')))
//engine
app.engine('hbs', handle({
  extname:'.hbs'
}));

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname,'resources/views'))

app.get('/views', (req, res) => {
  res.render('views');
})
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})