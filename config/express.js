let express = require('express')
let userRouter = require("../app/routes/user")
let postRouter = require('../app/routes/post')
let commentsRouter = require('../app/routes/comments')
let cors = require('cors')

module.exports = function() {
    let app = express()
    app.set("port", 4000)
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(express.static('./public'))
    app.use(cors())
    app.use((res, req, next)=>{
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    userRouter(app)
    postRouter(app)
    commentsRouter(app)
    return app
}