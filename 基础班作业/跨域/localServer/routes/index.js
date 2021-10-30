var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jiangyu', function (req, res, next) {
  res.render('jiangyu');
});

router.get('/loading', function (req, res, next) {
  res.render('loading');
});

router.get('/jsonp', function (req, res, next) {
  res.render('jasonp');
});





module.exports = router;
