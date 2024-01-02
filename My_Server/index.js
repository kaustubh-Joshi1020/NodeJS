const http = require('http');
const url = require('url')


const myserver = http.createServer((req,res) => {
                console.log("new request");
                // res.end("hello from server")

                console.log(req.url)
                switch (req.url) {
                    case '/':
                        res.end("this is home page")
                        break;
                    case '/about':
                        res.end("this is about page")
                        break;
                    case '/contact':
                        res.end("this is contact page")
                        break;
                
                    default:
                        res.end("404 not found");
                }
            });

myserver.listen(8080,()=>{})