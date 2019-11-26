const Router = require('koa-router');
const { login, logout, signup } = require('./controllers/user');

const router = new Router();

router.post('/login', login);
router.get('/logout', logout);
router.put('/signup', signup);

module.exports = router;
