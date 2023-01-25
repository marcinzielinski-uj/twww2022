var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', year:'2025' });
});

router.get('/hello', (req,res) => {
  res.send('send status ');
})

router.get('/main', indexController.getMain);
router.get('/main/hello', indexController.getHello);

module.exports = router;
