const mongoose = require('mongoose')

module.exports = function(){
    var schema = mongoose.Schema({
        text: {
           type: "String",
           required: true
        },
        likes: {
            type: Number,
            required: true
        },
        id_user: {
            type: mongoose.Schema.ObjectId,
            ref: "user"
        }
    
    })
    return mongoose.model("post", schema)
}()