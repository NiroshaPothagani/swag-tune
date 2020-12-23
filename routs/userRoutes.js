const express = require('express');

const authController = require('./../controllers/authController');
const userController = require('./../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout)

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:', authController.resetPassword);


router.use(authController.protect);

router.patch('/updatePassword',
        authController.protect,
        authController.updatePassword
        );

router.get('/me',
        authController.protect,
        // UserController.getMe,
        userController.getUser
)

router.patch('/updateMe',
        authController.protect,
        userController.updateMe
        );
router.delete('/deleteMe',
        authController.protect,
        userController.deleteMe
        );

router
  .route('/') 
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
   .route('/:id')
   .get(userController.getUser)
   .patch(userController.updateUser)
   .delete(userController.deleteUser);

module.exports = router;