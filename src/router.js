const Router = require('koa-router');
const {
  forgotPassword,
  login,
  loginWithFacebook,
  loginWithGoogle,
  loginCallback,
  logout,
  resetPassword,
  signup,
} = require('./controllers/user');

const router = new Router();

router.post('/forgot-password', forgotPassword);
router.post('/login', login);
router.get('/login/facebook', loginWithFacebook);
router.get('/login/facebook/callback', loginCallback('facebook'));
router.get('/login/google', loginWithGoogle);
router.get('/login/google/callback', loginCallback('google'));
router.get('/logout', logout);
router.post('/reset-password', resetPassword);
router.put('/signup', signup);

module.exports = router;
