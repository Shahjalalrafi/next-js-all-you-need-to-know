import React from 'react'

export default function NewsArticle({news}) {
    return (
        <>
            <h2>News Article Page</h2>
            {
                news.map(newsArticle => (
                    <div key={newsArticle.id}>
                        <h6>{newsArticle.id} {newsArticle.title} | {newsArticle.category}</h6>
                    </div>
                ))
            }
        </>
    )
}


export async function getServerSideProps() {
    const res = await fetch("http://localhost:4000/news")
    const data = await res.json()

    return {
        props: {
            news: data
        }
    }
}