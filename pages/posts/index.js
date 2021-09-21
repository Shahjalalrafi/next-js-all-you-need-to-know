import Link from 'next/link'

function Posts({post}) {
    return (
        <div>
            {
                post.map(details => (
                    <Link href={`/posts/${details.id}`}>
                        <h2>{details.id}  {details.title}</h2>
                    </Link>
                ))
            }
        </div>
    )
}

export default Posts

export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()

    return {
        props: {
            post : data.slice(0,3)
        }
    }
}