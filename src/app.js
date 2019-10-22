const Koa = require('koa');
const cors = require('kcors');
const logger = require('koa-logger');

const app = new Koa();

if (app.env === 'development') {
  app.use(logger());
}

app
  .use(cors({
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'OPTIONS'],
  }));

module.exports = app;
