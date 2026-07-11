import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import PageNav from '@/components/PageNav'

export const metadata: Metadata = {
  title: 'FAQ — Lilypad Screen Time App',
  description:
    'Answers about Lilypad, the private iOS screen time app for families, including app blocking, subscriptions, privacy, and offline use.',
  alternates: { canonical: 'https://joinlilypad.com/faq/' },
  openGraph: {
    title: 'FAQ — Lilypad Screen Time App',
    description: 'Common questions about Lilypad, a private iOS screen time app for families.',
    url: 'https://joinlilypad.com/faq/',
  },
}

const ldJson = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Lilypad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lilypad is a calm iOS app that helps families manage screen time. Parents pick which apps to pause and which simple tasks unlock them. Kids earn screen time by completing tasks like brushing teeth, tidying up, or doing homework.',
      },
    },
    {
      '@type': 'Question',
      name: "Does Lilypad collect my child's data?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. Lilypad does not track which apps your child uses, how long they use them, what they search for, or where they go. Apple's Screen Time framework enforces the blocks on device.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does Lilypad work without Wi-Fi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. App blocking is enforced by iOS and works offline. Lilypad only needs an internet connection occasionally to verify subscription status with the App Store.',
      },
    },
  ],
}

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <PageNav />
      <main className="page faq">
        <div className="container">
          <h1>Frequently asked questions</h1>
          <p className="updated">
            Can&apos;t find an answer here? Email{' '}
            <a href="mailto:hellolilypad26@gmail.com">hellolilypad26@gmail.com</a>.
          </p>

          <details>
            <summary>What is Lilypad?</summary>
            <p>
              Lilypad is a calm iOS app that helps families manage screen time without daily
              battles. Parents pick which apps to pause and which simple tasks unlock them. Kids
              earn screen time by completing what matters — like brushing teeth, tidying up, or
              doing homework.
            </p>
          </details>

          <details>
            <summary>How does it work?</summary>
            <p>
              In parent mode, you choose the apps to block and create tasks with unlock durations
              (between 15 minutes and 2 hours). In kid mode, your child picks a task, enters the
              passcode you set, and the chosen apps unlock for that duration. When the time runs
              out, the apps lock again until the next task is completed.
            </p>
          </details>

          <details>
            <summary>What apps can I block?</summary>
            <p>
              You can block apps and categories available through Apple&apos;s official Family
              Controls picker, including individual apps, categories such as Games, Social, and
              Entertainment, or a mix of both.
            </p>
          </details>

          <details>
            <summary>Does Lilypad collect my child&apos;s data?</summary>
            <p>
              No. Lilypad does not track which apps your child uses, how long they use them, what
              they search for, or where they go. Apple&apos;s Screen Time framework enforces the
              blocks entirely on the device, and Lilypad cannot see the underlying activity. See
              our <a href="/privacy">Privacy Policy</a> for full details.
            </p>
          </details>

          <details>
            <summary>How do I cancel my subscription?</summary>
            <p>
              Go to <strong>Settings → Apple Account → Subscriptions</strong> on your iPhone or
              iPad, choose Lilypad, and tap Cancel. Your subscription will remain active until the
              end of the current billing period. If you start the yearly plan&apos;s one-week free
              trial, you can cancel it any time before it converts.
            </p>
          </details>

          <details>
            <summary>Does it work without Wi-Fi?</summary>
            <p>
              Yes. App blocking is enforced by iOS itself and works fully offline. Lilypad only
              needs an internet connection occasionally — to verify your subscription status with
              the App Store.
            </p>
          </details>

          <details>
            <summary>What ages is Lilypad designed for?</summary>
            <p>
              Lilypad works best for kids roughly ages 5–12, when device habits are forming.
              Younger kids may need help reading tasks; older kids may need a more flexible
              approach. There&apos;s no hard age requirement — it&apos;s whatever fits your family.
            </p>
          </details>

          <details>
            <summary>Why does Lilypad need Screen Time permission?</summary>
            <p>
              Screen Time permission is what allows Lilypad to pause and unlock apps on your
              device. Without it, the app cannot block anything. You can revoke this permission at
              any time in iOS Settings, and we never use it for any other purpose.
            </p>
          </details>
        </div>
      </main>
      <Footer />
    </>
  )
}
