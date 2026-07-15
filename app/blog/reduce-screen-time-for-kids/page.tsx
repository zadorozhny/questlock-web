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
    title: 'How to Reduce Screen Time for Kids',
    image: '/blog/5-tiny-habits/hero-living-room.png',
    body: '5 simple habits that actually work — without daily battles.',
  },
  {
    title: 'Create a Before-Screen Routine',
    image: '/blog/5-tiny-habits/playroom.png',
    body: 'Before tablets or YouTube, encourage 1–2 simple activities. Small habits create natural transitions.',
  },
  {
    title: 'Keep It Simple',
    image: '/blog/5-tiny-habits/reading-corner.png',
    body: 'Skip the charts. Choose 1–2 tasks your child can complete every day. Consistency beats complexity.',
  },
  {
    title: 'Make It Predictable',
    image: '/blog/5-tiny-habits/routine-board.png',
    body: 'When kids know what comes next, they ask less. Predictability reduces negotiations.',
  },
  {
    title: 'Celebrate the Habit',
    image: '/blog/5-tiny-habits/bedroom.png',
    body: "Instead of 'you earned your tablet,' try 'I'm proud of how you remembered your routine.'",
  },
  {
    title: 'Let the Routine Do the Work',
    image: '/blog/5-tiny-habits/evening-living-room.png',
    body: 'The best routines become automatic. Less negotiating, more following what they already know.',
  },
]

const carouselCaption = `Screen time doesn't have to mean daily battles 😤

Here are 5 simple habits that help kids transition into screen time naturally — no arguments, no negotiations.

Save this and try one today 👇

#screentime #kidsroutine #parentingtips #familylife #screentimekids`

const OG_IMAGE = 'https://joinlilypad.com/blog/5-tiny-habits/hero-living-room.png'
const CANONICAL = 'https://joinlilypad.com/blog/reduce-screen-time-for-kids/'

export const metadata: Metadata = {
  title: 'How to Reduce Screen Time for Kids: 5 Simple Habits That Actually Work',
  description:
    "If you're wondering how to reduce screen time for kids without constant arguments, here are five simple habits that help screen time become a natural part of the day.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'How to Reduce Screen Time for Kids: 5 Simple Habits That Actually Work',
    description:
      'Five simple habits that help screen time become a natural part of the day — without daily battles.',
    url: CANONICAL,
    images: [{ url: OG_IMAGE, width: 1536, height: 1024, alt: 'How to Reduce Screen Time for Kids' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reduce Screen Time for Kids: 5 Simple Habits That Actually Work',
    description: 'Five simple habits that help screen time become a natural part of the day — without daily battles.',
    images: [OG_IMAGE],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'How to Reduce Screen Time for Kids: 5 Simple Habits That Actually Work',
  description:
    "If you're wondering how to reduce screen time for kids without constant arguments, here are five simple habits that help screen time become a natural part of the day.",
  image: OG_IMAGE,
  datePublished: '2026-07-15',
  dateModified: '2026-07-15',
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
        <div className="blog-post-meta">July 15, 2026</div>
        <h1>How to Reduce Screen Time for Kids: 5 Simple Habits That Actually Work</h1>

        <Image
          className="blog-post-image"
          src="/blog/5-tiny-habits/hero-living-room.png"
          alt="Cozy storybook-style living room at golden hour"
          width={1536}
          height={1024}
          priority
        />

        <p>
          If you&apos;re wondering how to reduce screen time for kids without constant arguments,
          you&apos;re not alone.
        </p>

        <p>Many parents find themselves having the same conversation every day.</p>

        <blockquote>&ldquo;Just five more minutes.&rdquo;</blockquote>
        <blockquote>&ldquo;Can I watch one more video?&rdquo;</blockquote>
        <blockquote>&ldquo;Why do I have to stop?&rdquo;</blockquote>

        <p>
          Limiting screen time isn&apos;t just about setting stricter rules. In many families, the
          real challenge is creating routines that children can understand and follow.
        </p>

        <p>
          The good news is that reducing screen time doesn&apos;t have to involve daily battles. By
          introducing a few predictable habits, screen time naturally becomes one part of the day
          instead of the main event.
        </p>

        <p>
          Here are five simple habits that can help your family build healthier screen time
          routines.
        </p>

        <h2>1. Create a &ldquo;Before Screen Time&rdquo; Routine</h2>

        <Image
          className="blog-post-image"
          src="/blog/5-tiny-habits/playroom.png"
          alt="Beautiful playroom with toys neatly stored and a tablet waiting on a shelf"
          width={1536}
          height={1024}
        />


        <p>
          One of the easiest ways to reduce screen time is to make it part of a routine rather than
          the first activity of the day.
        </p>

        <p>
          Before using a tablet, watching YouTube, or playing games, encourage your child to
          complete one or two simple activities first.
        </p>

        <p>For example:</p>

        <ul>
          <li>Put toys away</li>
          <li>Brush their teeth</li>
          <li>Read one book</li>
          <li>Feed the family pet</li>
        </ul>

        <p>
          These small habits help children transition naturally into screen time while encouraging
          responsibility and independence.
        </p>

        <p>
          The goal isn&apos;t to make children earn every minute of screen time. Instead, use
          screen time intentionally as part of a consistent daily routine. Over time, these small
          habits become automatic.
        </p>

        <h2>2. Keep the Routine Simple</h2>

        <Image
          className="blog-post-image"
          src="/blog/5-tiny-habits/reading-corner.png"
          alt="Cozy reading corner with books, teddy bear, toothbrush, and organized toys"
          width={1536}
          height={1024}
        />

        <p>
          Parents often think reducing screen time requires complicated reward charts or long chore
          lists.
        </p>

        <p>In reality, simple routines are usually the most effective.</p>

        <p>
          Choose one or two age-appropriate habits that your child can complete successfully every
          day.
        </p>

        <p>
          Small successes build confidence, and confidence helps children repeat positive behaviors.
        </p>

        <p>
          The simpler the routine, the more likely your family will stick with it on busy mornings,
          school days, and weekends.
        </p>

        <p>Consistency always beats complexity.</p>

        <h2>3. Make Screen Time Predictable</h2>

        <Image
          className="blog-post-image"
          src="/blog/5-tiny-habits/routine-board.png"
          alt="Hallway with an illustrated routine board"
          width={1536}
          height={1024}
        />

        <p>Children thrive when they know what happens next.</p>

        <p>
          Instead of allowing screen time at random moments throughout the day, create a predictable
          order.
        </p>

        <p>A simple daily routine might look like this:</p>

        <ol>
          <li>Breakfast</li>
          <li>Get dressed</li>
          <li>Brush teeth</li>
          <li>Put toys away</li>
          <li>Screen time</li>
        </ol>

        <p>
          When children know exactly when screen time happens, they ask for it less often because
          they understand it&apos;s already part of the day&apos;s routine.
        </p>

        <p>Predictability reduces negotiations and helps children feel more secure.</p>

        <h2>4. Celebrate Healthy Habits</h2>

        <Image
          className="blog-post-image"
          src="/blog/5-tiny-habits/bedroom.png"
          alt="Peaceful child's bedroom with a glowing evening lamp and habit chart"
          width={1536}
          height={1024}
        />

        <p>
          Screen time works best when it&apos;s connected to healthy daily habits rather than
          offered randomly throughout the day.
        </p>

        <p>
          Instead of focusing only on the reward, celebrate the routine that made it possible.
        </p>

        <p>Instead of saying:</p>
        <blockquote>&ldquo;You earned your tablet.&rdquo;</blockquote>

        <p>Try saying:</p>
        <blockquote>
          &ldquo;I&apos;m proud of how you remembered your routine.&rdquo;
        </blockquote>

        <p>
          This subtle shift helps children value responsibility, independence, and consistency while
          still looking forward to screen time.
        </p>

        <p>The habits become just as important as the reward.</p>

        <h2>5. Let the Routine Do the Work</h2>

        <Image
          className="blog-post-image"
          src="/blog/5-tiny-habits/evening-living-room.png"
          alt="Cozy evening living room with books, blanket, and a tablet resting quietly"
          width={1536}
          height={1024}
        />

        <p>Parents shouldn&apos;t have to negotiate screen time every day.</p>

        <p>
          The strongest family routines eventually require fewer reminders because children already
          know what comes next.
        </p>

        <p>
          Healthy screen time habits are built through repetition—not perfection.
        </p>

        <p>
          Whether your goal is reducing tablet use, creating better after-school routines, or
          helping your child become more independent, small daily habits make a lasting difference.
        </p>

        <p>
          If you&apos;re looking for a simple way to build these routines,{' '}
          <Link href="/">Lilypad</Link> gives kids a daily checklist to complete before screen time
          starts — making healthy habits a natural part of every day.
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
