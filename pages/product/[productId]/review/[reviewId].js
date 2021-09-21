import { useRouter } from 'next/router'
import React from 'react'

export default function reviewDetails() {
    const router = useRouter()
    const {productId, reviewId} = router.query
    return (
        <div>
            <h2>Review {reviewId} of product {productId} </h2>
        </div>
    )
}
