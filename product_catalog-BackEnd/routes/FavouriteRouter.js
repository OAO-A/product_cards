const Router = require('express');
const router = new Router();
const FavouriteController = require('../controllers/favouriteController');

router.post('/', FavouriteController.create);
router.get('/', FavouriteController.getAll);

module.exports = router;
