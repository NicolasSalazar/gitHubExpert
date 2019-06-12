const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/producto.controller');

router.get('/productsAll', productCtrl.getProductsAll);
router.post('/newProduct', productCtrl.postProduct);
router.get('/productByID/:id', productCtrl.getProductById);
router.put('/productEdit/:id', productCtrl.putProductEdit);
router.delete('/productDelete/:id', productCtrl.deleteProduct);

module.exports =  router;