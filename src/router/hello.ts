
import Router from "koa-router";

const helloRouter = new Router({
  prefix: "/hello",
});

helloRouter.post("/register", (ctx) => {
    ctx.body = "Hello World";
});


export default helloRouter;
