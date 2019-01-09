const express = require('express')
const bodyParser = require('body-parser')

//routes
const authRoutes = require('./routes/auth-routes')

const app = express()

//Using middleware
app.use(bodyParser)

//Routes middleware
app.use('auth', authRoutes)

app.get('/', (req, res, next) => {
    res.send('Welcome to express app')
    res.send({name: "lohith"})
})

app.listen(4000, () => {
    console.log(`App is running on the port 4000`)
})