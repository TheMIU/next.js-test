import React from 'react'
import Link from "next/link";

function page() {
  return (
    <>
      <h1>about page</h1>
      <li> <Link href="/">Home</Link> </li>
    </>
  )
}

export default page