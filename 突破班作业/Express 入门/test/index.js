var express = require("express")

let app = express()

app.get("/", (req, res) => {
    res.write("hello");
    res.end();
})

app.listen(8000, () => {
    console.log('express work at 8000...')
})