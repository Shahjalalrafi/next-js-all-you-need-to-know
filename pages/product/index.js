import React from 'react'
import Link from 'next/link'

export default function Product({productId = 102}) {
    return (
        <div>
            <h2>Product Page</h2>
            <Link href="/product/1">
                <h6>Produuct 1</h6>
            </Link>
            <Link href="/product/2">
                <h6>Produuct 2</h6>
            </Link>
            <Link href={`/product/${productId}`} replace>
                <h6>Produuct {productId}</h6>
            </Link>
        </div>
    )
}
