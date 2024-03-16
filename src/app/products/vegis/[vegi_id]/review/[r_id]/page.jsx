import React from 'react'

function page({ params }) {
    return (
        <h1>
            veggie id {params.vegi_id} :
            review id {params.r_id}
        </h1>
    )
}

export default page