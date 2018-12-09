const home = async (ctx, next) => {
    ctx.type = 200;
    ctx.body = '<h1>home</h1>';
    next();
}

module.exports = {
    'GET /': home
}