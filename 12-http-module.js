const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    if (req.ulr ==='/about'){
        res.end('Here is our short history')
    }

    res.end(`<h1> Oops Something Went wrong!!!</h1>
    <p>We can't seems to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
})
server.listen(5000)
