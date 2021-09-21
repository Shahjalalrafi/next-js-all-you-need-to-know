import { useRouter } from 'next/router'
import React from 'react'

export default function Doc() {
    const router = useRouter()
    const { params = [] } = router.query
    console.log(params)

    if (params.length === 3) {
        return (
            <h1>Docs Home page feature of {params[0]} and product of {params[1]} and comment is {params[2]}</h1>
        )
    }
    if (params.length === 2) {
        return (
            <h1>Docs Home page feature of {params[0]} and product of {params[1]}</h1>
        )
    }
    if (params.length === 1) {
        return (
            <h1>Docs Home page feature of {params[0]}</h1>
        )
    }
    return (
        <div>
            <h2>Docs Home Page</h2>
        </div>
    )
}
