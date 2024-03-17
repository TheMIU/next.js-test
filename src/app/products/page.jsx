import React from 'react'
import Link from "next/link";

function page() {
  return (
    <>
      <h1>product page</h1>
      <li> <Link href="/">Home</Link> </li>
      <li> <Link href="/products/vegis">vegies</Link> </li>
      <li> <Link href="/">Home</Link> </li>
    </>
  )
}

export default page