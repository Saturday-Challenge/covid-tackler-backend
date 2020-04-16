var express = require('express')
var bodyparser = require('body-parser')
// var mongoose = require('mongoose')

var users = require('../models/usermodel.js')
var router = express.Router()

router.use(express.static(__dirname))
router.use(bodyparser.urlencoded({extended:true}))
router.use(bodyparser.json())

function user_create(req,res)
{
    var user = new users({
        name : req.body.name,
        password : req.body.password,
        email : req.body.email
    });

    user.save((err)=>
    {
        if(err)
            res.send(err.errmsg)
        else
            res.send('Registered '+req.body.name)
    })
    // res.end()
}


router.get('/',(req,res)=>
{
    res.sendfile('register.html')
});

router.post('/',user_create);

module.exports = {RegisterRoute : router}