
import Router from "koa-router";

const helloRouter = new Router({
  prefix: "/hello",
});

helloRouter.get("/", (ctx) => {
    ctx.body = "Hello World";
});


export default helloRouter;
