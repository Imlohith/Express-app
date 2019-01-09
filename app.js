const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser)

app.get('/', (req, res, next) => {
    res.send('Welcome to express app')
})

app.listen(4000, () => {
    console.log(`App is running on the port 4000`)
})