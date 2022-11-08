let controller = require("../controllers/post.js")
let auth = require('../controllers/auth')

module.exports = (app) => {

    app.use("/api/post/", auth.checkToken)
    .post("/api/post", controller.insertPost)
    .get("/api/post", controller.listPost)
    .get("/api/post/:id", controller.findPostById)
    .delete("/api/post/:id", controller.findPostByIdAndDelete)
    .get("/api/post/:id/comments", controller.findCommentsByPostId)
}