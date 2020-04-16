var mongoose = require('mongoose')
var schema = mongoose.Schema;

var userschema = new schema({
    name : {type:String , unique:true, required:true},
    password : {type:String ,required:true},
    email : {type:String , unique:true, required :true}
})

module.exports = mongoose.model('users',userschema)
