const fetch = require("node-fetch");
const queries = require("../queries/blog");
const bodyParser = require("koa-body");

module.exports = ({ blogRouter }) => {
  // getting mocked single blog post
  blogRouter.get("/get", async (ctx, next) => {
    if(ctx.query.id){
      console.log('GET by id');
      ctx.body = await queries.getById(ctx.query.id);
    }
    if(ctx.query.number){
      console.log('GET by number');
      ctx.body = await queries.getByNumber(ctx.query.number);
    }
    // if(ctx.query)
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
