const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const controllers = require('./controllers');

const app = new Koa();
app.use(bodyParser());
app.use(controllers);
app.listen(8080);