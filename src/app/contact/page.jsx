import React from 'react'
import Link from "next/link";
import styles from "@/app/contact/contact-styles.module.css"

function page() {
  return (
    <>
      {/* add styles  */}

      {/* using id selector */}
      <h1 id={styles.heading} >contact us page</h1>

      {/* using class selector */}
      <li> <Link href="/" className={styles.link}>Home</Link> </li>
    </>
  )
}

export default page