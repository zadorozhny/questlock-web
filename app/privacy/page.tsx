import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "Lilypad's privacy policy.",
  alternates: { canonical: 'https://joinlilypad.com/privacy/' },
  openGraph: {
    title: 'Privacy Policy — Lilypad',
    description:
      'How Lilypad handles family screen time data, subscriptions, diagnostics, advertising attribution, and privacy.',
    url: 'https://joinlilypad.com/privacy/',
  },
}

export default function Privacy() {
  return (
    <>
      <PageNav />
      <main className="page">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p className="updated">Last updated: June 12, 2026</p>

          <p>
            Lilypad (&quot;we&quot;, &quot;us&quot;, &quot;the app&quot;) is operated by a sole
            proprietor in British Columbia, Canada and is designed with privacy as a foundation.
            This policy explains what information the app handles, what it does not collect, and
            how we use Apple&apos;s Screen Time framework to keep your family&apos;s screen time
            data on your devices.
          </p>

          <h2>What we don&apos;t collect</h2>
          <p>
            Lilypad does not collect personal information about you or your child for family screen
            time features. We do not have user accounts, passwords, names, email addresses (other
            than for direct support correspondence you initiate), phone numbers, or precise
            locations. We do not sell your family screen time data, task data, app selections,
            browsing history, or personal content to advertisers or data brokers.
          </p>

          <h2>What stays on your device</h2>
          <ul>
            <li>The tasks you create (titles, durations, passcodes).</li>
            <li>
              The list of apps and app categories you choose to block. This selection is stored as
              anonymous Apple-provided tokens — Lilypad cannot read which specific apps you
              selected.
            </li>
            <li>Your task completion history and current unlock state.</li>
          </ul>
          <p>
            All of this family screen time data is stored locally on your iPhone or iPad using
            Apple&apos;s standard storage (UserDefaults and an App Group container shared between
            Lilypad and its system extensions). It is not transmitted to Lilypad-owned servers —
            we don&apos;t operate any backend for family, task, app-selection, or screen-time
            data.
          </p>

          <h2>Apple Screen Time</h2>
          <p>
            Lilypad uses Apple&apos;s Family Controls, Managed Settings, and Device Activity
            frameworks to enforce app restrictions. These frameworks are operated by iOS on your
            device. Lilypad cannot see what apps your child uses, which websites they visit, how
            long they spend in any app, or any other behavioral screen time data. Apple does not
            share that data with Lilypad or with us.
          </p>

          <h2>Subscriptions</h2>
          <p>
            Lilypad uses RevenueCat to manage in-app subscriptions. When you start a trial or
            purchase a subscription, RevenueCat receives an anonymous app user ID and
            subscription-related information, such as subscription status, trial starts, purchases,
            renewals, cancellations, and expiration status, so the app can verify whether you have
            access to premium features. RevenueCat&apos;s privacy policy is available at{' '}
            <a href="https://www.revenuecat.com/privacy/">revenuecat.com/privacy</a>.
          </p>
          <p>
            All payment processing is handled by Apple. We never see your payment method, billing
            address, or full financial information.
          </p>

          <h2>Advertising and attribution</h2>
          <p>
            Lilypad may use third-party advertising and attribution services, including Meta, to
            understand whether advertising campaigns lead to app installs, trial starts, or
            subscriptions. Subscription-related events may be sent through RevenueCat to Meta for
            advertising measurement and campaign performance.
          </p>
          <p>
            Lilypad may use Apple&apos;s App Tracking Transparency (ATT) framework to request
            permission for advertising attribution. If you allow tracking, advertising identifiers
            may be used to help measure and improve ad performance. If you do not allow tracking,
            Lilypad&apos;s family screen time features will still work.
          </p>
          <p>
            These advertising and attribution services do not receive your family tasks, passcodes,
            blocked app selections, screen time activity, searches, browsing history, messages,
            photos, or personal content from Lilypad.
          </p>

          <h2>Website analytics</h2>
          <p>
            This website uses Google Analytics to understand aggregate website traffic, such as
            page views, referring pages, browser type, and approximate region. Google Analytics may
            use cookies or similar identifiers for measurement. We use this information to improve
            the website and do not use it to identify individual visitors. Google&apos;s privacy
            policy is available at{' '}
            <a href="https://policies.google.com/privacy">policies.google.com/privacy</a>.
          </p>

          <h2>Children&apos;s privacy</h2>
          <p>
            Lilypad is intended to be set up and used by a parent or guardian. The app does not
            knowingly collect personal information from children under the age of 13. The
            kid-facing parts of the app, such as entering a passcode and viewing the unlock timer,
            do not transmit family screen time data to Lilypad-owned servers.
          </p>

          <h2>Crash reports and diagnostics</h2>
          <p>
            If you have opted into &quot;Share With App Developers&quot; in iOS Settings, Apple
            may send us crash logs and diagnostic information to help us fix bugs and improve app
            stability. These reports are provided by Apple and may include technical information
            about your device, app version, and crash behavior, but they do not include your family
            tasks, passcodes, blocked app selections, browsing history, or personal content.
          </p>

          <h2>Your rights</h2>
          <p>
            Because Lilypad stores family screen time data locally on your device, there is no
            family task or screen time profile data for us to delete or export from Lilypad-owned
            servers. To remove local Lilypad data from your device, delete the app — iOS removes
            the local storage and App Group container automatically.
          </p>
          <p>
            For subscription records, payment history, or App Store purchase data, please manage
            your subscription through your Apple Account settings.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy changes, we&apos;ll update the &quot;Last updated&quot; date at the top
            of this page and, where appropriate, notify you within the app.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy? Email{' '}
            <a href="mailto:hellolilypad26@gmail.com">hellolilypad26@gmail.com</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
