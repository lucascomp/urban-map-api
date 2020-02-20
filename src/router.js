const Router = require('koa-router');
const accessibility = require('./controllers/accessibility');
const marker = require('./controllers/marker');
const user = require('./controllers/user');
const { restrictedSession } = require('./middlewares/restrictedSession');

const router = new Router();

router.get('/healthcheck', (ctx) => {
  ctx.body = { status: 'ok' };
});

router.post('/forgot-password', user.forgotPassword);
router.post('/login', user.login);
router.get('/login/facebook', user.loginWithFacebook);
router.get('/login/facebook/callback', user.loginCallback('facebook'));
router.get('/login/google', user.loginWithGoogle);
router.get('/login/google/callback', user.loginCallback('google'));
router.get('/logout', restrictedSession, user.logout);
router.post('/reset-password', user.resetPassword);
router.put('/signup', user.signup);

router.get('/markers', restrictedSession, marker.getAll);
router.put('/markers', restrictedSession, marker.create);

router.get('/accessibilities', restrictedSession, accessibility.getAll);

module.exports = router;
