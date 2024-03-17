import React from 'react'
import Link from 'next/link'

function page() {

  let vegies = [
    {
      id: 1,
      name: "Carrot"
    },
    {
      id: 2,
      name: "Beet"
    },
    {
      id: 3,
      name: "Cabbage"
    },
    {
      id: 4,
      name: "Pumpkin"
    },
  ]

  return (
    <>
      <h1>veggies</h1>


      {vegies.map((vegi) => {
        return (
          <li> <Link href={`/products/vegis/${vegi.id}`} >{vegi.name}</Link></li>
        )
      })}


      <hr />
      <li> <Link href="/" >Home</Link></li>
    </>
  )
}

export default page