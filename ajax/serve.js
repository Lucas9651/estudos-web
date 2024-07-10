const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
app.use('/teste', bodyParser.urlencoded({extend: true}))
app.use(bodyParser.json())


app.listen(8081, () => console.log('Executando...'))
