import { comments } from "../../../Data";

export default function handler(req, res) {

    const {commentsId} = req.query

    if(req.method == "GET") {
        const comment = comments.find(comment => comment.id === parseInt(commentsId))
        res.status(200).json(comment)
    }else if(req.method == 'DELETE') {
        const deleteComment = comments.find(comment => comment.id === parseInt(commentsId)) 

        const index = comments.findIndex(comment => comment.id === parseInt(commentsId))
        comments.splice(index, 1)

        res.status(200).json(deleteComment)
    }
}