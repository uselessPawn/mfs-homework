var express = require('express');
var region = require('../db/region')

var router = express.Router();

var province = region.map(cur => cur.region.name)


/* GET region listing. */
router.get('/', function (req, res, next) {
    res.render('region', { title: 'region' });
});

router.get('/province', function (req, res, next) {
    res.json(province)
})

router.get('/city', function (req, res, next) {
    let p = req.query.province
    let city = [];
    for (let i = 0, l = province.length; i < l; i++) {
        if (region[i].region.name === p) {
            city = region[i].region.state.map(cur => cur.name)
            break;
        }
    }
    res.json(city);
})


router.get('/county', function (req, res, next) {
    let p = req.query.province;
    let c = req.query.city;
    let city;
    let county;
    for (let i = 0, l = province.length; i < l; i++) {
        if (region[i].region.name === p) {
            city = region[i].region.state
            for (let i = 0, l = city.length; i < l; i++) {
                console.log(city[i].name === c)
                if (city[i].name === c) {
                    county = city[i].city.map(cur => cur.name);
                    console.log(county)
                    break;
                }
            }
            break;
        }
    }
    res.json(county);
})

module.exports = router;
