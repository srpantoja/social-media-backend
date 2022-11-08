let controller = require("../controllers/user.js")
let auth = require('../controllers/auth')
module.exports = (app) => {

    app.post("/api/user/signin", auth.login)
    .post("/api/user", controller.insertUser)
    .use("/api/user/", auth.checkToken)
    .get("/api/user", controller.listUser)
    .get("/api/user/:id", controller.findUserById)
    .get("/api/user/:id/post", controller.findPostByUserId)
    .delete("/api/user/:id", controller.findUserByIdAndDelete)

}