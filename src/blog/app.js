const Koa = require("koa");
const logger = require("koa-logger");
const Router = require("koa-router");
const koaBody = require("koa-body");
const app = new Koa();

app.use(
  koaBody({
    jsonLimit: "1kb"
  })
);

// log all events to the terminal
app.use(logger());

// error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit("error", err, ctx);
  }
});

// instantiate our new Router
const router = new Router();
const dogRouter = new Router({
  prefix: "/dogs"
});

const blogRouter = new Router({ prefix: "/blogPost" });
// require our external routes and pass in the router
const basicRoutes = require("../../routes/basic");
basicRoutes({ router });

const dogRoutes = require("../../routes/dogs");
dogRoutes({ dogRouter });

const blogRoutes = require("../../routes/blog");
blogRoutes({ blogRouter });

// tells the router to use all the routes that are on the object
app.use(router.routes());
app.use(router.allowedMethods());

app.use(dogRouter.routes());
app.use(dogRouter.allowedMethods());

app.use(blogRouter.routes());
app.use(blogRouter.allowedMethods());

// tell the server to listen to events on a specific port
const server = app.listen(3000);
module.exports = server;
