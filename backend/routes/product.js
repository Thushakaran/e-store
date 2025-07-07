const express = require('express');
const router = express.Router();
const { isAuthenticatedUser } = require('../middlewares/authMiddleware')
const {
    getProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProduct).put(updateProduct).delete(deleteProduct);
router.route('/product').post(createProduct);

module.exports = router;