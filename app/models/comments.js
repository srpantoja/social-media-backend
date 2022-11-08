const mongoose = require('mongoose')

module.exports = function(){
    var schema = mongoose.Schema({
        text: {
           type: "String",
           required: true
        },
        id_post: {
            type: mongoose.Schema.ObjectId,
            ref: "post"
        },
        id_user: {
            type: mongoose.Schema.ObjectId,
            ref: "user"
        }
    
    })
    return mongoose.model("comments", schema)
}()