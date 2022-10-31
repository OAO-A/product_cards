const Router = require('express');
const router = new Router();
const CategoryController = require('../controllers/categoryController');
const CheckRole = require('../middleweare/CheckRoleMiddleweare');

router.post('/',CheckRole('ADMIN'), CategoryController.create);
router.get('/', CategoryController.getAll);


module.exports = router;
