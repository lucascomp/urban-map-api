const passport = require('koa-passport');
const validator = require('validator');
const { User } = require('../models');
const { generateSalt, sha512 } = require('../utils/crypto');

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
  logout,
  signup,
};
