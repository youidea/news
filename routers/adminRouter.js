const Router = require("koa-router");
const adminController = require("../controller/admin");
let router = new Router({
    prefix: "/admin" // 前缀
});
router.get("/", ctx => {
    ctx.redirect("/index")
});
router.get("/index", adminController.index);
router.get("/addNews", adminController.addNews);
router.get("/newsList", adminController.newsList);
router.post("/addData", adminController.addData);
module.exports = router;