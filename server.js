const express = require('express')
const { join } = require('path')
const app = express()
require('dotenv').config()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')


require('./config').connect(_ => {
    require('./routes')(app)
    app.listen(process.env.PORT || 3000)
})
