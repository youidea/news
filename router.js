// const Router = require("koa-router");
// let router = new Router();
// router.get("/", ctx => {
//     ctx.body = "主页"
// });

// module.exports = function (app) {
//     app.use(router.routes());
// }

const newRouter = require("./routers/newsRouter");
const adminRouter = require("./routers/adminRouter");
module.exports = function (app) {
    app.use(newRouter.routes());
    app.use(adminRouter.routes());
}