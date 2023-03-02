const path = require('path')
const express = require('express');
const {engine}= require('express-handlebars');
const route = require('./routes')
const db = require('./config/db')

//Connect DB

db.connect()



const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({
  extended:true
}))
app.use(express.json())
app.engine('hbs', engine({
  extname:'.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources','views'));

//Route Init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})