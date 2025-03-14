require("dotenv").config();
import Koa from 'koa';
import koaCors from 'koa-cors';
import koaBody from 'koa-body';
import router from './router'
import KoaBouncer from 'koa-bouncer';

const app = new Koa();

// 注册中间件
app.use(koaBody()).use(KoaBouncer.middleware()).use(koaCors()).use(router.routes());

//启动http服务器
app.listen(8088, () => {
    console.log('Server running at http://localhost:8088');
});