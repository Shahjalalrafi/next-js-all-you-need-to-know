import React from 'react'

export default function newsCatetoryList({category, categoryArticle}) {
    return (
        <div>
            <h2>this is category {category}</h2>
            {
                categoryArticle.map(category => (
                    <>
                    <h2>{category.title}</h2>
                    <p>{category.description}</p>
                    </>
                ))
            }
        </div>
    )
}


export async function getServerSideProps(context) {
    const {params, req, res, query} = context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ["name=rafi"])
    const {category} = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            categoryArticle: data,
            category
        }
    }
}