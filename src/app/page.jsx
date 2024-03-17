import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <li> <Link href="/about">About</Link> </li>
      <li> <Link href="/contact">Contact</Link> </li>
      <li> <Link href="/products">Products</Link></li>
      <li> <Link href="/services">Services</Link></li>

      <li><Link href="https://nextjs.org/" target="_blank">Next js site</Link></li>
    </>
  );
}
