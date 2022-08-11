var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */

let indexController = require('../controllers/indexController');
router.get('/', indexController.primera);

router.get('/lista', indexController.dataForm);
router.post('/lista', indexController.dataTextos);


router.get('/listar', indexController.listar);



module.exports = router;
