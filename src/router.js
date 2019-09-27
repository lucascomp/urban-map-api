const Router = require('koa-router');
const userController = require('./controller/user');

const router = new Router();

router.get('/healthcheck', (ctx) => {
  ctx.body = 'OKAY';
});

router.get('/user', userController.getUser);
router.post('/user', userController.createUser);
router.patch('/user', userController.updateUser);
router.post('/user/login', userController.login);
router.get('/user/logout', userController.logout);

module.exports = router;
