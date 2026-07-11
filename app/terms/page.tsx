import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: "Lilypad's terms of service.",
  alternates: { canonical: 'https://joinlilypad.com/terms/' },
  openGraph: {
    title: 'Terms of Service — Lilypad',
    description:
      'Terms for using Lilypad, including subscriptions, Family Sharing, refunds, and app usage.',
    url: 'https://joinlilypad.com/terms/',
  },
}

export default function Terms() {
  return (
    <>
      <PageNav />
      <main className="page">
        <div className="container">
          <h1>Terms of Service</h1>
          <p className="updated">Last updated: May 21, 2026</p>

          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of the Lilypad mobile
            application (&quot;the app&quot;, &quot;Lilypad&quot;, &quot;we&quot;,
            &quot;us&quot;). Lilypad is operated by a sole proprietor in British Columbia, Canada.
            By downloading, installing, or using the app you agree to these Terms. If you do not
            agree, please don&apos;t use the app.
          </p>

          <h2>License</h2>
          <p>
            We grant you a limited, non-exclusive, non-transferable, revocable license to install
            and use Lilypad on iOS devices that you own or control, solely for your personal,
            non-commercial family use. You may not copy, modify, reverse engineer, sell,
            sublicense, or distribute the app or any portion of it.
          </p>

          <h2>Subscriptions</h2>
          <p>
            Lilypad offers monthly and yearly auto-renewing subscriptions purchased through Apple.
            By starting a subscription you authorize Apple to charge the payment method on file at
            the price displayed at purchase. A one-week introductory free trial is available for
            the yearly plan only.
          </p>
          <ul>
            <li>
              The yearly plan&apos;s one-week free trial converts to a paid yearly subscription
              automatically unless cancelled at least 24 hours before the trial ends.
            </li>
            <li>
              Subscriptions renew automatically at the end of each billing period unless cancelled
              at least 24 hours before renewal.
            </li>
            <li>
              Manage or cancel your subscription at any time in{' '}
              <strong>Settings → Apple Account → Subscriptions</strong> on your iOS device.
            </li>
            <li>
              Subscription pricing is shown inside the app and on the App Store, and may change
              over time. You&apos;ll be notified of any price increase before it takes effect.
            </li>
          </ul>

          <h2>Family Sharing</h2>
          <p>
            Lilypad subscriptions are eligible for Apple Family Sharing. When enabled, members of
            your family group can access premium features. Family member behavior is governed by
            Apple&apos;s Family Sharing terms.
          </p>

          <h2>Refunds</h2>
          <p>
            All purchases are handled by Apple. Refund requests must be submitted directly to Apple
            via <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>. We do not
            have the ability to issue refunds.
          </p>

          <h2>Acceptable use</h2>
          <p>
            You agree to use Lilypad only for lawful purposes and in a way that does not infringe
            on the rights of others. You will not attempt to disrupt the app, circumvent its
            security, or use it to harass, harm, or surveil any person beyond the parental
            supervision the app is designed for.
          </p>

          <h2>Apple Screen Time</h2>
          <p>
            Lilypad&apos;s app-blocking features rely on Apple&apos;s Family Controls and Screen
            Time frameworks. These features require the user to grant Screen Time permission, which
            can be revoked at any time in iOS Settings. We are not responsible for changes Apple
            makes to these frameworks that may affect the app&apos;s behavior.
          </p>

          <h2>No warranty</h2>
          <p>
            Lilypad is provided &quot;as is&quot; and &quot;as available&quot;, without warranty
            of any kind, whether express or implied, including but not limited to warranties of
            merchantability, fitness for a particular purpose, or non-infringement. We do not
            guarantee that the app will be uninterrupted, error-free, or always available.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, in no event will Lilypad, its operator, or its
            contributors be liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, arising from your use of the app.
            Our total liability for any claim is limited to the amount you paid us in the twelve
            (12) months preceding the claim.
          </p>

          <h2>Changes to these Terms</h2>
          <p>
            We may update these Terms from time to time. The most current version will always be at
            this page. Material changes will be highlighted within the app.
          </p>

          <h2>Governing law</h2>
          <p>
            These Terms are governed by the laws of British Columbia and the federal laws of Canada
            applicable there, without regard to conflict of laws principles. Any dispute arising
            from these Terms or the app will be resolved in the courts located in British Columbia,
            Canada.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Email{' '}
            <a href="mailto:hellolilypad26@gmail.com">hellolilypad26@gmail.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
