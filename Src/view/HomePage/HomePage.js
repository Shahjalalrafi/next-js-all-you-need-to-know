import React from 'react'
import Product from './Component/Products/Product'


export default function HomePage({products}) {
    console.log(products)
    return (
        <div>
            <Product products ={products} />
        </div>
    )
}
