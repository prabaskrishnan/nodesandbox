const http = require('http')

const server  = http.createServer((req,res)=>{
    if (req.url === '/') {
    res.write('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.write('About Us')
        }   
    else  {
        res.write('Page does not exist')
        }
    res.end()

})

server.listen(8000)