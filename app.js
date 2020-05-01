const express = require('express')
const home = require('./routes/home')
const users = require('./routes/users')
const mongoose = require('mongoose')
const User = require('./models/User')
const bodyParser = require('body-parser')

const app = express()
//set up ejs engine
app.set('view engine', 'ejs')

//set up body parser to parse form contents
app.use(express.urlencoded({
    extended: false
}))
app.use( bodyParser.json() );       // to support JSON-encoded bodies


//set up mongodb
const db = mongoose.connect('mongodb+srv://darren:test123@cluster0-eajys.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connection.on(db, () => console.log('connected to db'))

//routes
app.use('/', home)
app.use('/users', users)

//set up server
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('listening at port 5000'))