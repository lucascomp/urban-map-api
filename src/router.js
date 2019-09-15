const Router = require('koa-router');

const router = new Router();

router.get('/healthcheck', (ctx) => {
  ctx.body = 'OKAY';
});

module.exports = router;
