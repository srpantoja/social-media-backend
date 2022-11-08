const render = (user) => {
    return {
        id: user._id,
        name: user.name,
        email: user.email
    }
}


const renderMany = (users) =>{
    return users.map((user) => render(user))
}


module.exports.render = render
module.exports.renderMany = renderMany