var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('desde primera v2');
});

let indexController = require('../controllers/indexController');
router.get('/indexController', indexController.primera)

module.exports = router;
