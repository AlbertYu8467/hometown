const Koa = require('koa');
const path = require('path');
const Router = require('koa-router');
const app = new Koa();

app.use(require('koa-static')(path.join(__dirname,'./build'), {}));

// router = new Router();
// router.get('/',(ctx,next)=>{
//  ctx.redirect('/index.html')
// })

// app.use(router.routes());

app.listen(3000);