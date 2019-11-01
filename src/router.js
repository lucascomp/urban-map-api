const Router = require('koa-router');
const { login, logout } = require('./controllers/user');

const router = new Router();

router.post('/login', login);
router.get('/logout', logout);

module.exports = router;
