const Router = require('koa-router');
const accessibility = require('./controllers/accessibility');
const marker = require('./controllers/marker');
const user = require('./controllers/user');

const router = new Router();

router.post('/forgot-password', user.forgotPassword);
router.post('/login', user.login);
router.get('/login/facebook', user.loginWithFacebook);
router.get('/login/facebook/callback', user.loginCallback('facebook'));
router.get('/login/google', user.loginWithGoogle);
router.get('/login/google/callback', user.loginCallback('google'));
router.get('/logout', user.logout);
router.post('/reset-password', user.resetPassword);
router.put('/signup', user.signup);

router.get('/markers', marker.getAll);

router.get('/accessibilities', accessibility.getAll);

module.exports = router;
