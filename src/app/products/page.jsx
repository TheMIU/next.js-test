import React from 'react'
import Link from "next/link";

function page() {
  return (
    <>
      <div>
        <h1>product page</h1>
        <li> <Link href="/">Home</Link> </li>
        <li> <Link href="/products/vegis">vegies</Link> </li>
        <li> <Link href="/">Home</Link> </li>
      </div>
    </>
  )
}

export default page