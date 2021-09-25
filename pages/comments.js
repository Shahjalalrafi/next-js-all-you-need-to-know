import React, { useState } from 'react'

export default function comments() {

    const [commentsData, setCommentsData] = useState([])
    const [newComment, setNewComment] = useState('')

    const fetchComment = async() => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        console.log(data)
        setCommentsData(data)
    }


    const submitComment = async() => {
        const response = await fetch('/api/comments', {
            method: "POST",
            body: JSON.stringify({newComment}),
            headers: {
                "content-type": "application/json"
            }
        })
        const data = await response.json()
        // alert("new comment added")
        fetchComment()
        console.log(data)
    }

    return (
        <div>
            <input type="text" value ={newComment} onChange= {e => setNewComment(e.target.value)} />
            <button onClick={submitComment}>submit</button>
            <h2 onClick={fetchComment}>comments loading</h2>
            
            {
                commentsData.map(comment => (
                    <h6 key = {comment.id}>{comment.id} {comment.text} </h6>
                ))
            }
        </div>
    )
}
