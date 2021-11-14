var express = require('express');
const user = require('../db/user');
var router = express.Router();
var userdb = require('../db/user')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'signup' });
});

router.post("/usernameExist", (req, res, next) => {
  console.log(req.body.username)
  res.json({
    exist: userdb.some(cur => cur.username === req.body.username)
  })
})


router.post("/signup", (req, res, next) => {
  let exist = userdb.some(cur => cur.username === req.body.username);
  if (exist) {
    res.json("注册失败");
  } else {
    let userItem = req.body;
    userdb.push({ username: userItem.username, password: userItem.password})
    console.log(userdb)
    res.json("注册成功。")
  }
 
})

module.exports = router;
