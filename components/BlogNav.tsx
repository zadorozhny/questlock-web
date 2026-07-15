import Link from 'next/link'

export default function BlogNav() {
  return (
    <nav className="blog-nav">
      <Link className="blog-nav-logo" href="/">
        <img src="/logo.png" alt="" width={28} height={28} />
        Lilypad
      </Link>
      <a
        className="blog-nav-cta"
        href="https://apps.apple.com/app/lilypad-earn-screen-time/id6771643663"
      >
        Download on iOS
      </a>
    </nav>
  )
}
