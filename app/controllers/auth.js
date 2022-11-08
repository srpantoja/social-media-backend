const User = require("../models/user")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

module.exports.login = (req, res) => {

    User.findOne({email: req.body.email})
    .exec()
    .then((user) => {
        if(bcrypt.compareSync(req.body.password, user.password)){
            let token = jwt.sign({id: user._id}, "senha_secreta")
            console.log(token)
            res.status(200).send({token: token, message: "login successfully", name: user.name})
        }else
            res.status(401).send("incorrect password")
    })
}

module.exports.checkToken = (req, res, next) => {
    let token = req.headers.token
    jwt.verify(token, "senha_secreta", (error, decode) =>{
        if(error){
            res.status(401).send("Token invalido")
        }else{
            next()
        }
        
    })
}