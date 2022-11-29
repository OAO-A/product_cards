const Router = require('express');
const router = new Router();

const DeviceRouter = require('./DeviceRouter');
const BasketRouter = require('./BasketRouter');
const CategoryRouter = require('./CategoryRouter');
const FavouriteRouter = require('./FavouriteRouter');
const UserRouter = require('./UserRouter');

// router.use('/user', UserRouter);
router.use('/device', DeviceRouter);
router.use('/category', CategoryRouter);
router.use('/basket', BasketRouter);
router.use('/favorite', FavouriteRouter);

module.exports = router;
