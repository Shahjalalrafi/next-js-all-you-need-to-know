import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'

export default function events({ eventsList }) {
    const [events, setEvents] = useState(eventsList)
    const router = useRouter()

    const fetchSport = async () => {
        const response = await fetch("http://localhost:4000/events?category=sports")
        const data = await response.json()

        setEvents(data)
        router.push('/events?category=sports', undefined, {shallow: true})
    }
    return (
        <div>
            <button onClick={fetchSport}>sports Data</button>
            <h2>Events Lists</h2>
            {
                events.map(event => (
                    <h4>{event.id} {event.title} || {event.category} </h4>
                ))
            }
        </div>
    )
}


export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const queryString = category ? 'category=sports' : ''
    const response = await fetch(`http://localhost:4000/events?${queryString}`)
    const data = await response.json()

    return {
        props: {
            eventsList: data
        }
    }
}