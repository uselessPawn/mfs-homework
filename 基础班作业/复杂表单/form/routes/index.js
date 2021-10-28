var express = require('express');
var router = express.Router();

const { region } = require('./region.js')


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/usernameRpt', function() {
  res.json({
    exist: "Pawn" == req.body.username
  })
});



module.exports = router;