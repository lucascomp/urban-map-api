const passport = require('koa-passport');

const login = async (ctx) => passport.authenticate('local', async (err, user) => {
  if (err) {
    ctx.status = 500;
  } else {
    await ctx.login(user);
    ctx.status = 200;
  }
})(ctx);

const logout = async (ctx) => {
  ctx.logout();
  ctx.session = null;
  ctx.status = 200;
};

module.exports = {
  login,
  logout,
};
