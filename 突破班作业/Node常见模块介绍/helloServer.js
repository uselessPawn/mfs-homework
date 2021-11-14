const http = require('http')

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('hello')
})

server.listen(8000, "localhost")
console.log('listen...')
