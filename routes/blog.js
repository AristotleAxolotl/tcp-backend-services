const fetch = require("node-fetch");
const queries = require("../queries/blog");
const bodyParser = require("koa-body");

module.exports = ({ blogRouter }) => {
  // getting mocked single blog post
  blogRouter.get("/get", async (ctx, next) => {
    ctx.body = await queries.get(2);
  });
  // getting blog posts from DB
  blogRouter.get("/getAll", async (ctx, next) => {
    ctx.body = await queries.getAll();
  });
  //need postman to check
  blogRouter.post("/create", async ctx => {
    console.log("REQUEST BODY: ", ctx.request.body);
    ctx.body = await queries.post(ctx.request.body);
  });
};
