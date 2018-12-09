## koa2 node框架

```js
const Koa = require('koa');
const app = new Koa();

app.use((async ctx, next) => {
    await next();
    ctx.type = 200;
    ctx.body = 'aaaa';
})

app.listen(8080);

ctx 包含了request和response　
```

### koa-router
> 控制请求路径

```js
const router = require('koa-router')();
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
});
app.use(router.routes());
```

### koa-bodyparser
> 处理post请求的body

```js
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
```