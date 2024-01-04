const User = require('../models/user')

async function HandleAllUsers(req,res){
    const allusers = await User.find({})
    return res.json(allusers);
}

async function HandleGetUserByID(req,res){
    const usr = await User.findById(req.params.id)
    if(!usr){ return res.status(404).json({msg : "user not found"}) }
    return res.json(usr)
}

async function HandleUpdateUserByID(req,res){
    const body = req.body;
    await User.findByIdAndUpdate(req.params.id , body)
   return res.json({status: "updated" , " updated values" : body})
}

async function HandleDeleteUserByID(req,res){
    await User.findByIdAndDelete(req.params.id)
    return res.json({msg:"Deleted"})
}

async function HandleCreateUser(req,res){
    const body = req.body;
    if(!body.first_name || !body.last_name || !body.email || !body.job_title || !body.gender ){
        return res.status(400).json({msg:"all fields are required"})
    }

    const CreatedUser =  await(User.create({
        FirstName : body.first_name,
        LastName : body.last_name,
        Email : body.email,
        JobTitle : body.job_title,
        Gender : body.gender,
     }))
     console.log(CreatedUser)
    return res.status(201).json({status:"User Created"})
}

module.exports = {
    HandleAllUsers,HandleGetUserByID,HandleUpdateUserByID,HandleDeleteUserByID,HandleCreateUser
}