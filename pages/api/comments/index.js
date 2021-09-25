import { comments } from "../../../Data";

export default function handler(req, res) {
    if(req.method === "GET") {
        res.status(200).json(comments)
    }
    if(req.method === "POST") {
        const comment = req.body.newComment
        const newcomment = {
            id: Date.now(),
            text: comment
        }

        comments.push(newcomment)
        res.status(201).json(newcomment)
    }
}