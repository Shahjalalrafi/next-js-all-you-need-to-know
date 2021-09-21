import React from 'react'

export default function Product({ products }) {
    return (
        <div>
            {
                products.map(product => (
                    <>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                    </>
                ))
            }
        </div>
    )
}
