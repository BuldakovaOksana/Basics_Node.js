const express = require('express');
const app = express()

app.use(express.static('static'))
// app.get('/', (req, res) => {
//     res.send('<h1>Welcom!</h1> <a href = "/about">about</a>')
// })

// app.get('/about', (req, res) => {
//     res.send('<h1>Welcom about!</h1> <a href = "/">about</a>')
// })

app.listen(3000)