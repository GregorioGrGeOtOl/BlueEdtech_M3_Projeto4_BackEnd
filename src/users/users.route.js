const router = require('express').Router();
const userController = require('./users.controller');
const authMiddleware = require('../auth/auth.middleware');

router.post('/create', userController.createUserController);
router.get('/allusers', authMiddleware, userController.findAllUserController);

module.exports = router;
