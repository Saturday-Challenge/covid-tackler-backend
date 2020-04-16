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
        email : req.body.email,
        usertype : req.body.usertype
    });

    user.save((err)=>
    {
        if(err)
            res.send(err)
        else
        {
            if(req.body.usertype == "Vendor" || req.body.usertype == "vendor")
                res.send("Welcome Vendor "+req.body.name)
            if(req.body.usertype == "Customer" || req.body.usertype == "customer")
                res.send("Welcome Customer "+req.body.name)
        }
    })
}


router.get('/',(req,res)=>
{
    res.sendfile('register.html')
});

router.post('/',user_create);

module.exports = {RegisterRoute : router}
