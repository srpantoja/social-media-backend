const Comments = require('../models/comments')
const view = require('../views/comments')
const jwt = require("jsonwebtoken")

module.exports.insertComments = (req, res) => {

    let token = req.headers.token
    let payload = jwt.decode(token)
    let user_id = payload.id

    let promisse = Comments.create({text: req.body.text, id_user: user_id, id_post: req.body.id_post})
    
    promisse.then((comments)=>{
        res.status(201).json(view.render(comments))
    }).catch((error)=>{
        res.status(400).json({message: "error message"})
    })

}

module.exports.listComments = (req, res) => {
    let promisse = Comments.find().populate('id_user').exec()
    promisse.then((comments)=>{
        res.status(200).json(view.renderMany(comments))
    }).catch((error)=>{
        res.status(404).json({message: "comments not found", error: error})
    })
}


module.exports.FindCommentsByIdAndDelete = (req, res) => {
    let comments_id = req.params.id
    
    let token = req.headers.token
    let payload = jwt.decode(token)
    let user_id = payload.id

    let promise = Comments.findOneAndDelete({_id: comments_id, id_user: user_id}).exec()

    promise.then((comments)=>{
        res.status(200).json(view.render(comments))
    }).catch((error)=>{
            res.status(404).json({message: "comments not found", error: error})
        }
    )
}
