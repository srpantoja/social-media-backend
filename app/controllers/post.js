const Post = require('../models/post')
const view = require('../views/post')
const viewComments = require("../views/comments")
const Comment = require('../models/comments')
const jwt = require("jsonwebtoken")

module.exports.insertPost = (req, res) => {

    let token = req.headers.token
    let payload = jwt.decode(token)
    let user_id = payload.id
    
    let promisse = Post.create({text: req.body.text, likes: 0, id_user: user_id})

    console.log(promisse)
    promisse.then((post)=>{
        res.status(201).json(view.render(post))
    }).catch((error)=>{
        res.status(400).json({message: "error message"})
    })

}

module.exports.listPost = (req, res) => {
    let promisse = Post.find().populate('id_user').exec()
    promisse.then((post)=>{
        res.status(200).json(view.renderMany(post))
    }).catch((error)=>{
        res.status(400).json({message: "error message"})
    })
}


module.exports.findPostById = (req, res) => {
    let id = req.params.id
    let promise = Post.findById(id).exec()
    promise.then((post)=>{
        res.status(200).json(view.render(post))
    }).catch((error)=>{
            res.status(404).json({message: "Post not found", error: error})
        }
    )
}


module.exports.findPostByIdAndDelete = (req, res) => {
    let post_id = req.params.id
    
    let token = req.headers.token
    let payload = jwt.decode(token)
    let user_id = payload.id

    let promise = Post.findOneAndDelete({_id: post_id, id_user: user_id}).exec()

    promise.then((post)=>{
        res.status(200).json(view.render(post))
    }).catch((error)=>{
            res.status(400).json({message: "Post not found", error: error})
        }
    )
}


module.exports.findCommentsByPostId = (req, res) => {
    let id = req.params.id
    let promise = Comment.find({id_post:id}).populate('id_user').exec()
    console.log(promise)
    promise.then((comment)=>{
        res.status(200).json(viewComments.renderMany(comment))
    }).catch((error)=>{
        console.log(error)
            res.status(404).json({message: "post not found", error: error})
    }
    )
}