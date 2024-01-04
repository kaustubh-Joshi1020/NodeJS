const express = require('express')
const app = express();
const users = require('./MOCK_DATA.json')
const fs = require('fs')

app.use(express.urlencoded({extended : false})) // middleware

app.use((req,res,next)=>{
    fs.appendFile("log.txt" , `\n${Date.now()} , ${req.method}, ${req.path}`,(err,data)=>{
        next()
    })  // this is a middleware
})


app.get('/api/users',(req,res)=>{
    // res.status(200);
    return res.json(users);
})

app.get('/users',(req,res)=>{
    const html = `
    <ol>
    ${users.map(users =>`<li>${users.first_name}</li>`).join("")}
    </ol>
    `
    res.send(html);
});

app.route('/api/users/:id')
.get((req,res)=>{
    const Uid =Number(req.params.id);
    // console.log(typeof(Uid));
    const user = users.find(user => user.id == Uid)
    return res.json(user)
}) 
.patch((req,res)=>{
    const Uid = Number(req.params.id);
    const body = req.body;
    const index = users.findIndex(user => user.id === Uid);
    users[index] = {...users[index],...body} // merges the requested body in specified index of users(MOCK_DATA.json) using spread operator 
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"updated" , " updated values" : body})
    })
})
.delete((req,res)=>{
    const Uid =Number(req.params.id);
    const user = users.findIndex(user => user.id == Uid)
    users.splice(user,1)
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
        return res.json({status:"deleted" , id:Uid})
 })
})

app.post('/api/users',(req,res)=>{
    const body = req.body;
     users.push({...body, id:users.length + 1})
     fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),(err,data)=>{
            return res.status(201).json({status:"success" , id:users.length})
     })

 }) 


// app.post('/api/users',(req,res) =>{
// })

// app.patch('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);            //can marge these requestes for same route
// })

// app.delete('/api/users/:id',(req,res)=>{
// })
 
app.listen(8000,()=>{});