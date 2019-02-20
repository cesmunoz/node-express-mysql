var express = require('express');

var router = express.Router();


var express = require('express');
var productsRouter = require('../routes/products');
var categoriesRouter = require('../routes/categories');

var router = express.Router();

router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);

module.exports = router;