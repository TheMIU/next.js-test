import Link from 'next/link'
import React from 'react'

function page({ params }) {
    return (
        <>
            <h1>veggies id {params.vegi_id}</h1>
            <Link href="/products/vegis">back to veggies</Link>
        </>
    )
}

export default page