let fs = require("fs");


let rs = fs.createReadStream('./text.txt', { highWaterMark: 1 })

let arr = [];
rs.on('data', function (chunk) {  //chunk是buffer类型
    arr.push(chunk);
})

rs.on('end', function (chunk) {
    console.log(Buffer.concat(arr).toString());
})

// 监听错误
rs.on('error', function (err) {
    console.log(err);
})