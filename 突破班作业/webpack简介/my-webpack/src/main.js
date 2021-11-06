var axios = require("axios")
var text = require("./text.txt")
require('./style.css')

axios.get("/").then(data=>{
    console.log(data)
})

console.log(text)
