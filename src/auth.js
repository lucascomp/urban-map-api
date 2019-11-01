const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;
const { User } = require('./models');
const { sha512 } = require('./utils/crypto');

passport.serializeUser(async ({ id }, done) => {
  done(null, id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findOne({
    raw: true,
    where: { id },
  });

  done(null, user);
});

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    const user = await User.findOne({
      attributes: ['id', 'passwordHash', 'salt'],
      raw: true,
      where: { email },
    });

    if (!user) {
      done(new Error('User not found'));
    } else {
      const {
        passwordHash,
        salt,
      } = user;
      const generatedHash = sha512(password, salt);

      if (generatedHash === passwordHash) {
        done(null, user);
      } else {
        done(new Error('Invalid password'));
      }
    }
  },
));
