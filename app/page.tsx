import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Lilypad — Earn Screen Time',
  description:
    'Lilypad is a private iOS screen time app for families. Kids earn app access by completing simple tasks, while parents manage app blocking calmly on device.',
  alternates: { canonical: 'https://joinlilypad.com/' },
  openGraph: {
    title: 'Lilypad — Earn Screen Time',
    description:
      'A private iOS screen time app where kids earn app access by completing simple tasks.',
    url: 'https://joinlilypad.com/',
  },
  twitter: {
    title: 'Lilypad — Earn Screen Time',
    description:
      'A private iOS screen time app where kids earn app access by completing simple tasks.',
  },
}

const AppleIcon = () => (
  <svg
    className="apple-icon"
    viewBox="0 0 384 512"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
)

const ldJson = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lilypad',
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'iOS',
  description:
    'Lilypad is a private iOS screen time app for families. Kids earn app access by completing simple tasks, while parents manage app blocking calmly on device.',
  url: 'https://joinlilypad.com/',
  image: 'https://joinlilypad.com/logo.png',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description:
      'Monthly and yearly subscriptions are available in the app. The yearly plan includes a one-week free trial.',
  },
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <main className="container">
        <section className="hero">
          <div className="hero-text">
            <div className="brand-row">
              <img
                className="brand-icon"
                src="/logo.png"
                alt=""
                width={44}
                height={44}
              />
              <span className="brand-wordmark">lilypad</span>
            </div>
            <h1>
              Meet Lilypad,
              <br />
              your family&apos;s
              <br />
              screen time companion
            </h1>
            <p className="hero-sub">Kids earn screen time. You earn calmer evenings.</p>
            <a
              className="btn"
              href="https://apps.apple.com/app/lilypad-earn-screen-time/id6771643663"
            >
              <AppleIcon />
              Download on iOS
            </a>
          </div>
          <div className="hero-visual">
            <img src="/welcome.png" alt="Lilypad on iPhone" />
          </div>
        </section>

        <section className="features">
          <header className="features-header">
            <h2>Simple by design</h2>
            <p>Simple features designed to actually fit into your family&apos;s life.</p>
          </header>
          <div className="features-grid">
            <div className="feature">
              <img src="/kid-view-tasks.png" alt="Lilypad task list" loading="lazy" />
              <h3>Tasks</h3>
              <p>
                Create simple tasks your child already does — brushing teeth, tidying toys,
                reading.
              </p>
            </div>
            <div className="feature">
              <img
                src="/parent-view-blocked-apps.png"
                alt="Lilypad blocked apps picker"
                loading="lazy"
              />
              <h3>Block</h3>
              <p>Pause any apps or whole categories using Apple&apos;s Family Controls.</p>
            </div>
            <div className="feature">
              <img
                src="/kid-view-countdown.png"
                alt="Lilypad earned screen time timer"
                loading="lazy"
              />
              <h3>Earn time</h3>
              <p>
                Pick how long apps stay unlocked — anywhere from 15 minutes to 2 hours.
              </p>
            </div>
          </div>
        </section>

        <section className="cta-band" id="download">
          <img className="cta-icon" src="/logo.png" alt="" width={120} height={120} />
          <h2>Calmer screen time, starting today.</h2>
          <a
            className="btn"
            href="https://apps.apple.com/app/lilypad-earn-screen-time/id6771643663"
          >
            <AppleIcon />
            Download on iOS
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}
