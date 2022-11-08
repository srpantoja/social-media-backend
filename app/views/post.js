const render = (post) =>{
    return {
        id: post._id,
        text: post.text,
        likes: post.likes,
        user: {
            idUser: post.id_user._id,
            name: post.id_user.name
        }
    }
}

const renderMany = (posts) => {
    return posts.map((post) => render(post))
}

module.exports.render = render
module.exports.renderMany = renderMany