import React from 'react'
import { useRouter } from 'next/router'

const ProductDetails = () => {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <div>
            <h2>Product Details of {productId} </h2>
        </div>
    )
}

export default ProductDetails