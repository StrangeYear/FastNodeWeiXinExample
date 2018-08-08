const Koa = require("koa");
const app = new Koa();
const views = require("koa-views");
const json = require("koa-json");
const onerror = require("koa-onerror");
const xmlParser = require("koa-xml-body");
const bodyparser = require("koa-bodyparser");
const logger = require("koa-logger");
const router = require("koa-router")();

const WeiXin = require("./weixin/WeiXin");

onerror(app);

app.use(xmlParser()).use((ctx, next) => {
  ctx.xml = ctx.request.body;
  return next();
});

// middlewares
app.use(
  bodyparser({
    enableTypes: ["json", "form", "text"]
  })
);
app.use(json());
app.use(logger());
app.use(require("koa-static")(__dirname + "/public"));

app.use(
  views(__dirname + "/views", {
    extension: "pug"
  })
);

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

//handler 统一的异常返回内容
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
});

router.all("/wx", ...WeiXin.router);

// routes
app.use(router.routes());

// error-handling
app.on("error", (err, ctx) => {
  console.error("server error", err, ctx);
});

module.exports = app;
