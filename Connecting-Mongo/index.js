const express = require('express')
const app = express();
const userRouter = require('./routes/user')
const {conntectmongo} = require('./connection')
const {logrequest} =  require('./middlewares/middleware')

//connecting mongodb
conntectmongo('mongodb://127.0.0.1:27017/TestDB')

// middleware
app.use(express.urlencoded({extended : false}))
app.use(logrequest("log.txt"))


//routes
app.use("/api/user",userRouter )
 
app.listen(8000,()=>{});