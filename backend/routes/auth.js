const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { isAuthenticatedUser } = require('../middlewares/authMiddleware');

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '..', 'uploads/user'))
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
});

const {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    addToCart,
    getCart,
    removeFromCart,
    clearCart
} = require('../controllers/userController');

// Auth routes
router.route('/register').post(upload.single('avatar'), registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);
router.route('/myprofile').get(isAuthenticatedUser, getUserProfile);
router.route('/update').put(isAuthenticatedUser, upload.single('avatar'), updateUserProfile);

// Cart routes
router.post('/cart', isAuthenticatedUser, addToCart);
router.get('/cart', isAuthenticatedUser, getCart);
router.delete('/cart/:productId', isAuthenticatedUser, removeFromCart);
router.delete('/cart', isAuthenticatedUser, clearCart);

module.exports = router;
