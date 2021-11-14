const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {

    req.on('data', function (chunk) {
        chunk = chunk.toString().split('\r\n')  //
        let data = chunk[4]

        ws = fs.createWriteStream('./uploadFile/text.txt')
        ws.write(data, 'UTF8')
    })

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('hello')
})

server.listen(8000, "localhost");
console.log('listen...')