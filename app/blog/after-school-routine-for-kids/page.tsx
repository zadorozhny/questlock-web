import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer'
import BlogNav from '@/components/BlogNav'
import CarouselBuilder from '@/components/CarouselBuilder'
import BlogCta from '@/components/BlogCta'
import type { CarouselSlide } from '@/components/CarouselBuilder'

const carouselSlides: CarouselSlide[] = [
  {
    title: 'After School Routine for Kids',
    image: '/blog/after-school-routine-for-kids/hero.png',
    body: 'A simple daily structure that ends screen time battles — before they start.',
  },
  {
    title: 'Decompress First',
    image: '/blog/after-school-routine-for-kids/snack.png',
    body: 'Give kids 15–20 minutes to unwind before anything else. Snack, play, talk. Then the afternoon begins.',
  },
  {
    title: 'Homework Before Screens',
    image: '/blog/after-school-routine-for-kids/homework.png',
    body: 'When effort comes before reward, kids stop fighting it. The routine does the reminding for you.',
  },
  {
    title: 'Set a Screen Time Window',
    image: '/blog/after-school-routine-for-kids/screen-time-window.png',
    body: 'Define when it starts and when it ends. Kids stop asking "how much longer?" because they already know.',
  },
  {
    title: 'Make the Routine Visible',
    image: '/blog/after-school-routine-for-kids/routine-chart.png',
    body: 'A visual checklist removes the need for reminders. Kids check their own progress and feel proud of it.',
  },
  {
    title: 'Screen Time Comes Last',
    image: '/blog/after-school-routine-for-kids/evening.png',
    body: 'When screens are the final thing before dinner, they become a natural ending — not an interruption.',
  },
]

const carouselCaption = `The after-school hours don't have to be a battle 😤

Here's a simple routine that helps kids transition from school to screen time naturally — every single day 👇

Save this for the next time they walk through the door asking for the iPad 📱

#afterschool #kidsroutine #screentimetips #parentingtips #familyroutine`

const OG_IMAGE = 'https://joinlilypad.com/blog/after-school-routine-for-kids/hero.png'
const CANONICAL = 'https://joinlilypad.com/blog/after-school-routine-for-kids/'

export const metadata: Metadata = {
  title: 'After School Routine for Kids: How to Manage Screen Time Without Arguments',
  description:
    'The after-school hours are when screen time battles are most common. Here is a simple daily routine that helps kids transition from school to screen time — without the arguments.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'After School Routine for Kids: How to Manage Screen Time Without Arguments',
    description:
      'A simple daily structure that helps kids transition from school to screen time — without the arguments.',
    url: CANONICAL,
    images: [{ url: OG_IMAGE, width: 1536, height: 1024, alt: 'After School Routine for Kids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'After School Routine for Kids: How to Manage Screen Time Without Arguments',
    description:
      'A simple daily structure that helps kids transition from school to screen time — without the arguments.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'After School Routine for Kids: How to Manage Screen Time Without Arguments',
  description:
    'The after-school hours are when screen time battles are most common. Here is a simple daily routine that helps kids transition from school to screen time — without the arguments.',
  image: OG_IMAGE,
  datePublished: '2026-07-16',
  dateModified: '2026-07-16',
  author: { '@type': 'Organization', name: 'Lilypad', url: 'https://joinlilypad.com' },
  publisher: {
    '@type': 'Organization',
    name: 'Lilypad',
    logo: { '@type': 'ImageObject', url: 'https://joinlilypad.com/logo.png' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': CANONICAL },
}

export default function Post() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogNav />
      <article className="blog-post">
        <div className="blog-post-meta">July 16, 2026</div>
        <h1>After School Routine for Kids: How to Manage Screen Time Without Arguments</h1>

        <Image
          className="blog-post-image"
          src="/blog/after-school-routine-for-kids/hero.png"
          alt="Cozy home entryway with a child arriving home from school"
          width={1536}
          height={1024}
          priority
        />

        <p>
          The moment your child walks through the door after school, the negotiation begins.
        </p>

        <blockquote>&ldquo;Can I play on the iPad?&rdquo;</blockquote>
        <blockquote>&ldquo;Just one video?&rdquo;</blockquote>
        <blockquote>&ldquo;I already did my homework at school.&rdquo;</blockquote>

        <p>
          For many families, the after-school hours are the hardest part of the day when it comes
          to screen time. Kids arrive home tired and overstimulated, and screens offer immediate
          comfort. But without a predictable routine, each afternoon turns into a negotiation.
        </p>

        <p>
          The good news is that a simple, consistent after-school structure can change this
          completely.
        </p>

        <p>
          Here are five steps that help kids move from school to screen time — without the daily
          battle.
        </p>

        <h2>1. Give Kids Time to Decompress First</h2>

        <Image
          className="blog-post-image"
          src="/blog/after-school-routine-for-kids/snack.png"
          alt="Child enjoying an afternoon snack at the kitchen table"
          width={1536}
          height={1024}
        />

        <p>
          Kids arrive home carrying the weight of a full school day — social stress, mental effort,
          and sensory overload. Jumping straight into homework or chores rarely works, and jumping
          straight into screens makes everything harder afterward.
        </p>

        <p>
          A short decompression period — 15 to 20 minutes — gives children a chance to reset before
          the rest of the afternoon begins.
        </p>

        <p>This might look like:</p>

        <ul>
          <li>Having a snack</li>
          <li>Playing outside for a few minutes</li>
          <li>Reading a book</li>
          <li>Telling you about their day</li>
        </ul>

        <p>
          When kids have time to unwind naturally, they are far more cooperative about what comes
          next.
        </p>

        <h2>2. Homework Before Screens</h2>

        <Image
          className="blog-post-image"
          src="/blog/after-school-routine-for-kids/homework.png"
          alt="Child doing homework at a tidy desk in a warm afternoon light"
          width={1536}
          height={1024}
        />

        <p>
          One of the most effective after-school rules is also one of the simplest: homework before
          screens.
        </p>

        <p>
          When screen time becomes something that happens after responsibilities are complete,
          children begin to associate effort with reward. Over time, starting homework becomes
          automatic — not because you reminded them, but because they know exactly what comes next.
        </p>

        <p>
          The key is consistency. Hold the rule on easy days and hard days, on Fridays and on
          Mondays. The routine only works when it is predictable.
        </p>

        <h2>3. Set a Predictable Screen Time Window</h2>

        <Image
          className="blog-post-image"
          src="/blog/after-school-routine-for-kids/screen-time-window.png"
          alt="Simple wall clock showing afternoon time with a calm home setting"
          width={1536}
          height={1024}
        />

        <p>
          Instead of allowing open-ended screen time, define exactly when it starts and when it
          ends.
        </p>

        <p>A simple example:</p>

        <ol>
          <li>Arrive home</li>
          <li>Snack and decompress</li>
          <li>Homework</li>
          <li>Screen time — 4:30 to 5:30 PM</li>
          <li>Dinner</li>
        </ol>

        <p>
          A defined window removes the negotiation entirely. Kids stop asking &ldquo;how much
          longer?&rdquo; because they already know the answer. The routine does the answering for
          you.
        </p>

        <h2>4. Make the Routine Visible</h2>

        <Image
          className="blog-post-image"
          src="/blog/after-school-routine-for-kids/routine-chart.png"
          alt="Illustrated after-school routine chart displayed on a hallway wall"
          width={1536}
          height={1024}
        />

        <p>
          Young children especially benefit from being able to see what comes next. A visual
          routine — on the wall, on the fridge, or in an app — removes the need for verbal
          reminders.
        </p>

        <p>
          When children can check their own progress through the afternoon, they develop
          independence and feel a genuine sense of accomplishment at each step.
        </p>

        <p>
          Instead of &ldquo;Did you finish your homework?&rdquo;, the routine answers: yes, I did.
        </p>

        <h2>5. Put Screen Time at the End</h2>

        <Image
          className="blog-post-image"
          src="/blog/after-school-routine-for-kids/evening.png"
          alt="Calm family evening scene with a tablet resting on a side table"
          width={1536}
          height={1024}
        />

        <p>
          When screen time happens in the middle of the afternoon, stopping it feels like a
          punishment. Everything that comes after — dinner, bath, bedtime — feels like an
          interruption.
        </p>

        <p>
          When screen time comes last — after the snack, after the homework, after the chores —
          it becomes a natural conclusion to the afternoon rather than an obstacle in the middle
          of it.
        </p>

        <p>The routine flows forward. The afternoon makes sense.</p>

        <p>
          And when kids reach screen time having already completed everything else, they feel proud
          of the work that earned it — not just relieved to finally have it.
        </p>

        <p>
          If you&apos;re looking for a simple way to build this kind of structure at home,{' '}
          <Link href="/">Lilypad</Link> gives kids a visual checklist to work through before
          screen time starts — making the after-school routine automatic, every day.
        </p>

        <BlogCta />
      </article>
      {process.env.NODE_ENV === 'development' && (
        <CarouselBuilder slides={carouselSlides} caption={carouselCaption} />
      )}
      <Footer />
    </>
  )
}
