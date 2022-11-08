let controller = require("../controllers/comments.js")
let auth = require('../controllers/auth')

module.exports = (app) => {
    
    app.use("/api/comments/", auth.checkToken)
    .post("/api/comments", controller.insertComments)
    .get("/api/comments", controller.listComments)
    .delete("/api/comments/:id", controller.FindCommentsByIdAndDelete)
}