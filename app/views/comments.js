const render = (comment) => {
    return {
        id: comment._id,
        text: comment.text,
        id_post: comment.id_post,
        user: {
            idUser: comment.id_user._id,
            name: comment.id_user.name
        }
    }
}

const renderMany = (comments) => {
    return comments.map((comment) => render(comment))
}

module.exports.render = render
module.exports.renderMany = renderMany