const fs = require('fs');
const http = require('http')

const server = http.createServer((req,res)=>{
    res.setHeader('Content-type','text/html');
    fs.readFile('./shoppingCart.html',(err,data)=>{
        if(err) {
            console.log(err);
            res.end()
        }else {
            res.write(data)
            res.end();
        }
    })
})


server.listen(3000,'localhost',()=>{
    console.log('listen at 3000.')
})