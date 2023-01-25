var express = require('express');
var router = express.Router();

const worldController = require('../controllers/worldController')

/* GET users listing. */
router.get('/index', function(req, res, next) {
  res.send('world');
});
// /world/city
router.get('/city',worldController.getCity);

module.exports = router;
