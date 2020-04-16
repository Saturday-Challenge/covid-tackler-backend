var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')

var {LoginRoute} = require('./routes/login.js')
var {RegisterRoute} = require('./routes/register.js')
var app = express()

mongoose.connect('mongodb://localhost:27017/akshara')

app.use('/login',LoginRoute)
app.use('/register',RegisterRoute)

app.use('/logout',(req,res)=>
{
    res.send('Signed Out !!')
})

app.get('/',(req,res)=>
{
    res.sendfile('main.html')
});

module.exports = {app}