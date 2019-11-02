const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.status;
    ctx.body = { message: error.message };
    ctx.app.emit('error', error, ctx);
  }
};

module.exports = {
  errorHandler,
};
