const passport = require('koa-passport');
const validator = require('validator');
const { User } = require('../models');
const { generateSalt, sha512 } = require('../utils/crypto');

const { URBAN_MAP_SITE_BASE_URL } = process.env;

const login = async (ctx) => passport.authenticate('local', async (err, user) => {
  if (err) {
    ctx.throw(400, 'E-mail e/ou senha incorretos');
  } else {
    await ctx.login(user);
    ctx.status = 200;
  }
})(ctx);

const loginWithFacebook = (ctx) => passport.authenticate('facebook', {
  scope: ['email'],
})(ctx);

const loginWithGoogle = (ctx) => passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
  ],
})(ctx);

const loginCallback = (strategy) => (ctx) => passport.authenticate(strategy, {
  successRedirect: `${URBAN_MAP_SITE_BASE_URL}/home`,
  failureRedirect: `${URBAN_MAP_SITE_BASE_URL}/login`,
})(ctx);

const logout = async (ctx) => {
  ctx.logout();
  ctx.session = null;
  ctx.status = 200;
};

const signup = async (ctx) => {
  const {
    email,
    firstName,
    lastName,
    password,
  } = ctx.request.body;

  if (firstName.length < 2) {
    ctx.throw(400, 'Nome inválido');
  }

  if (lastName.length < 2) {
    ctx.throw(400, 'Sobrenome inválido');
  }

  if (!validator.isEmail(email)) {
    ctx.throw(400, 'E-mail inválido');
  }

  if (password.length < 6) {
    ctx.throw(400, 'A senha deve ter pelo menos 6 caracteres');
  }

  const salt = generateSalt(16);
  const passwordHash = sha512(password, salt);

  try {
    const user = await User.create({
      email,
      firstName,
      lastName,
      passwordHash,
      salt,
    });

    await ctx.login(user);
    ctx.status = 200;
  } catch (error) {
    ctx.throw(400, 'Este e-mail já está em uso');
  }
};

module.exports = {
  login,
  loginWithFacebook,
  loginWithGoogle,
  loginCallback,
  logout,
  signup,
};
