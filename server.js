PORT = 3000;


const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const sequelize = require("./models/index.js");
const render = require('koa-ejs');
const path = require('path');
const developmentMode = app.env === 'development';




router.get("/index", (ctx, next) => {
    return ctx.render("index", {a: 1});
});


router.get("/compara", (ctx, next) => {
  ctx.body = "La idea es que aquí se puedan hacer las consultas";
})

render(app, {
  root: path.join(__dirname, 'views'),
  viewExt: 'html',
  layout: false,
  cache: !developmentMode,
});




app
  .use(router.routes())
  .use(router.allowedMethods());



app.listen(PORT);
console.log(`Server listening in port ${PORT}`);
