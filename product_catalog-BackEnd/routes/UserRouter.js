const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const AuthMiddleweare = require('../middleweare/AuthMiddleweare');

// router.post('/regestration', userController.regestration);
// router.post('/login', userController.login);
// router.get('/auth', AuthMiddleweare, userController.check);

module.exports = router;
