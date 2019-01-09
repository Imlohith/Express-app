const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//routes
const authRoutes = require('./routes/auth-routes')

const app = express()

//Using middleware
app.use(bodyParser.json())

//Routes middleware
app.use('/auth', authRoutes)


mongoose.connect(`mongodb+srv://lohithyadav:d3FFKUwWMPQezBpA@cluster0-k0bcx.mongodb.net/sample-test?retryWrites=true`)
    .then(() => {
        app.listen(4000, () => {
            console.log(`App is running on the port 4000`)
        })
    })
    .catch(err => {
        throw err
    })
