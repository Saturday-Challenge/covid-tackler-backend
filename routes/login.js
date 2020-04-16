var express = require('express')
var bodyparser = require('body-parser')

var users = require('../models/usermodel.js')
var router = express.Router()

router.use(express.static(__dirname))
router.use(bodyparser.urlencoded({extended:true}))
router.use(bodyparser.json())


function user_login(req,res)
{
    var name = req.body.name
    var password = req.body.password
    // console.log(name,password)

    users.findOne({$and : [{password : password} , {name : name}]} , {_id:0,name:0,email:0,__v:0})
        .then(result=>
            {
                if(!result)
                    res.send('Not a User')
                else
                    res.send("Welcome "+result.usertype+" "+name)
                    // return __id
            })
        .catch(err=>
            {
                console.log(err)
            })
}


router.get('/',(req,res)=>
{
    res.sendfile('login.html')
});

router.post('/',user_login);

module.exports = {LoginRoute : router}
