import Link from 'next/link'
import Image from 'next/image'
import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pb-16 pt-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <div className="center mb-16">
          <Image
            src="/212_acc.svg"
            alt="212 Accelerationism logo"
            className="mx-auto"
            width={632}
            height={108}
          />
        </div>
        <h1 className="max-w-lg font-display text-4xl text-slate-900">
          Moroccans, we&apos;ve lost sight of the basics.
        </h1>
        <p className="mt-4">
          The Moroccan tech space has been toxic lately—full of hate speech,
          inflated egos, empty conversations, and no real progress. Nothing that
          benefits the community, the country, or even ourselves.
        </p>
        <p className="mt-4">
          Nothing will change in Morocco unless we{' '}
          <strong>start creating</strong>. We need engineers, artists,
          entrepreneurs, and creators to push us forward.
        </p>
        <p className="mt-4">
          It feels like we&apos;ve forgotten how to work, produce, and move
          ahead. Instead, we&apos;re doing the bare minimum, wasting time, and
          blaming everything and everyone but ourselves.
        </p>

        <p className="mt-4">
          You can blame your job, the market, or the lack of opportunities. But
          technology and the Internet are here. There&apos;s no excuse not to
          learn and advance.
        </p>

        <p className="mt-4">We can do better.</p>

        <p className="mt-4">
          <strong>We must do better</strong>.
        </p>

        <h2 className="mt-16 text-2xl font-bold">
          What&apos;s the root of the problem?
        </h2>

        <p className="mt-4">
          Bureaucracy, competition, regulations—they&apos;re all part of the
          game.
        </p>

        <p className="mt-4">
          But the core issue is: <strong>We talk more than we build</strong>.
        </p>

        <p className="mt-4">
          There&apos;s this strange satisfaction when you talk about an idea.
        </p>

        <p className="mt-4">
          You start with the name, the vision, and how it&apos;s going to be the
          next big thing. You dive into the details, the numbers, the market,
          and the potential income. You dream about the design, the features,
          the global presence, the billionaire status, and the impact
          you&apos;ll make...
        </p>

        <p className="mt-4">
          And by the time you&apos;re done talking, you feel like you&apos;ve
          already made it.
        </p>

        <p className="mt-4">
          But the truth is, you haven&apos;t done anything.
        </p>

        <p className="mt-4">
          Instead of talking, start building.
          <strong> Create more. Ship more. The world is your playground</strong>
          .
        </p>

        <h2 className="mt-16 text-2xl font-bold">
          The goals of this manifesto are:
        </h2>

        <div className="prose dark:prose-invert dark mt-8 w-full break-words">
          <ol className="space-y-4">
            <li className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span>
                <strong>Highlight excellence:</strong> Amplify great Moroccan
                technologists
              </span>
            </li>
            <li className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span>
                <strong>Make shipping the default:</strong> Build a more
                productive, entrepreneurial community
              </span>
            </li>
            <li className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span>
                <strong>Support members:</strong> Push everyone forward
              </span>
            </li>
          </ol>
        </div>
        <p className="mt-8">
          Join the movement and sign the manifesto or{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
            href="https://twitter.com/search?q=I've%20signed%20the%20http://212acc.com%20Moroccan%20acceleration%20manifesto%20and%20you%20should%20do%20it%20too!&src=typed_query"
          >
            see who already has signed it
          </a>
          .
        </p>
        <p className="mt-10">
          <Link
            href="https://twitter.com/intent/tweet?text=I've%20signed%20the%20http://212acc.com%20Moroccan%20acceleration%20manifesto%20and%20you%20should%20do%20it%20too!"
            className="text-blue-600 hover:text-blue-800"
          >
            Sign and share on x.com
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
