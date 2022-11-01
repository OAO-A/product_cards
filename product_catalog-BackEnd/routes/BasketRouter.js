const Router = require('express');
const router = new Router();
const BasketController = require('../controllers/basketController');

router.get('/', BasketController.getAll);

module.exports = router;
