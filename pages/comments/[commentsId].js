import React from 'react'
import { comments } from '../../Data'

export default function Comment({comment}) {
    return (
        <div>
            <h2> {comment.id} {comment.text} </h2>
        </div>
    )
}


// export async function getStaticPaths() {
//     return {
//         paths: [
//             {params: {commentID: '1'}},
//             {params: {commentID: '2'}},
//             {params: {commentID: '3'}},
//         ],
//         fallback: false
//     }
// }

export async function getStaticPaths() {
    return {
      paths: [
          {params: {commentsId: "1"}},
          {params: {commentsId: "2"}},
          {params: {commentsId: "3"}},
      ],
      fallback: false
    }
  }

export async function getStaticProps(context) {
    const {params} = context
    const {commentsId} = params

    const comment = comments.find(comment => comment.id === parseInt(commentsId))

    return {
        props: {
            comment
        }
    }
}