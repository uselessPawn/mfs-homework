var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/json', function (req, res, next) {
  // res.header({ "Access-Control-Allow-Origin": "*" });
  res.json({ text: "hello" });
})


//模拟数据库 let 
router.post('/userLogup', function (req, res, next) {
  if (req.body.username == "mafengshe" ) {
    res.json({errno:1,errmsg:"用户名已经存在",data:{}})
  }
  else {
    res.json({errno:0,errmsg:"",data:{}});
  }
})



module.exports = router;
