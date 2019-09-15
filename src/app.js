const Koa = require('koa');
const logger = require('koa-logger');
const router = require('./router');

const app = new Koa();

if (app.env === 'development') {
  app.use(logger());
}

app.use(router.routes());

module.exports = app;
