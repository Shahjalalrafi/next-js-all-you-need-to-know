import React from 'react'
import Footer from '../Src/Layout/Footer'

export default function LayoutChange() {
    return (
        <div>
            <h2>LayOut Change</h2>
        </div>
    )
}
console.log(LayoutChange)

LayoutChange.getLayOut = function pageLayOut(page) {
    return (
        <>
            {page}
            <Footer />
        </>
    )
}