import Link from 'next/link'

export default function PageNav() {
  return (
    <nav className="page-nav">
      <Link href="/">
        <img src="/logo.png" alt="" width={28} height={28} />
        Lilypad
      </Link>
    </nav>
  )
}
