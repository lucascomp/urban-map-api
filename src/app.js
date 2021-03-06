require('dotenv').config();

const Koa = require('koa');
const cors = require('kcors');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const session = require('koa-generic-session');
const passport = require('koa-passport');
const { errorHandler } = require('./middlewares/errorHandler');
const router = require('./router');

const { SESSION_COOKIE } = process.env;
const app = new Koa();

app.proxy = true;

if (app.env === 'development') {
  app.use(logger());
}

// error handler
app.use(errorHandler);

// cors
app.use(cors({
  allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'OPTIONS'],
  credentials: true,
}));

// session
app.use(session({
  key: SESSION_COOKIE,
  httpOnly: false,
}));

// bodyparser
app.use(bodyparser());

// passport
require('./auth');

app.use(passport.initialize());
app.use(passport.session());

// router
app.use(router.routes());

module.exports = app;
