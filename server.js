const express = require('express')
const app = express()

const hbs = require('hbs')
    // Helpers HBS
require('./hbs/helpers')

// Configuración para el puerto por default ya en producción o local port 3000
const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'máximo'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'About'
    })
})


app.listen(port, () => {
    console.log(`Escuchando en el puerto: ${port}`)
})