const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url === '/'){
        res.end("welcome to home page")
    }
    if(req.url === '/about'){
        res.end("welcome to About page")
    }
    res.end(`<a href='/' >Back Home </a>`)
        
})
server.listen(5000)