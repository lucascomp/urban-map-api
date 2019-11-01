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

  const errors = [];

  if (!validator.isEmail(email)) {
    errors.push('Invalid email');
  }

  if (firstName.length < 2) {
    errors.push('Invalid first name');
  }

  if (lastName.length < 2) {
    errors.push('Invalid last name');
  }

  if (password.length < 6) {
    errors.push('Password must have at least 6 characters');
  }

  if (errors.length) {
    ctx.body = { errors };
    ctx.status = 400;
    return;
  }

  const salt = generateSalt(16);
  const passwordHash = sha512(password, salt);

  const user = await User.create({
    email,
    firstName,
    lastName,
    passwordHash,
    salt,
  });

  await ctx.login(user);
  ctx.status = 200;
};

module.exports = {
  login,
  logout,
  signup,
};
