import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-brand">
          <img src="/logo.png" alt="" width={28} height={28} />
          <span>Lilypad · Calmer screen time</span>
        </div>
        <div className="footer-links">
          <Link href="/faq">FAQ</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a href="mailto:hellolilypad26@gmail.com">Contact</a>
        </div>
        <div className="footer-copyright">© 2026 Lilypad. All rights reserved.</div>
      </div>
    </footer>
  )
}
