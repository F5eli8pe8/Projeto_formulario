const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.post('/nomes', (req, resp) => {
    console.log(req.body)
   // console.log(req.query)
    resp.send('<h1>Parabéns. Usuário Incluido!!!</h1>')
})

app.listen(3003)