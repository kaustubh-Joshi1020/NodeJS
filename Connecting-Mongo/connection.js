const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/TestDB')
async function conntectmongo(url){
   return mongoose.connect(url)
.then(console.log("mongodb connected"))
.catch((err)=> console.log("mongo error" , err))
}

module.exports = {
    conntectmongo
}
