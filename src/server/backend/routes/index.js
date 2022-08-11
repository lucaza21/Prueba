var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

let indexController = require('../controllers/indexController');
router.get('/indexController', indexController.primera)

module.exports = router;
