export default function BlogCta() {
  return (
    <div className="blog-post-cta">
      <img
        src="/logo.png"
        alt=""
        width={64}
        height={64}
        style={{ borderRadius: 16, margin: '0 auto 16px', boxShadow: '0 6px 18px rgba(38,41,46,0.1)' }}
      />
      <h2 style={{ marginTop: 0 }}>Good Habits Come Before Screen Time</h2>
      <p>
        Lilypad helps kids earn screen time by completing simple daily routines — so healthy
        habits happen naturally, every day.
      </p>
      <a
        className="btn"
        href="https://apps.apple.com/app/lilypad-earn-screen-time/id6771643663"
      >
        Try Lilypad Free
      </a>
    </div>
  )
}
