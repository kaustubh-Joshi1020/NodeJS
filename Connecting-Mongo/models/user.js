const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    FirstName : {
     type : String,
     required : true,
    },
    LastName:{
     type : String,
     required : false,
    },
    Email :{
     type: String,
     unique : true,
     required : true,
    },
    JobTitle:{
     type : String
    },
    Gender:{
     type:String
    },
 },{timestamps : true})

 const User = mongoose.model("User",userSchema)

 module.exports = {
    User
 }