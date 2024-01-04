const fs = require('fs')
 // middleware

function logrequest(filename){
return (req,res,next)=>{
    fs.appendFile(filename , `\n${Date.now()} , ${req.method}, ${req.path}`,(err,data)=>{
        next()
    })  // this is a middleware
}
}
module.exports = {
    logrequest
}