var express = require('express');
var controller = require('../controllers/products');

var ctrl = new controller();
var router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.post);
router.put('/:id', ctrl.put);
router.delete('/:id', ctrl.deleteById);

module.exports = router;