import { Fragment } from 'react'
import Image from 'next/future/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'

const codeLanguage = 'javascript'
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`

const tabs = [
  { name: 'cache-advance.config.js', isActive: true },
  { name: 'package.json', isActive: false },
]

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden bg-[#1c0b3a] dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:py-20 lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-200 via-[#7743db] to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
                Employed - Official Documentation
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                Learn more about Employed and how we plan to do it.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="/">Our Goal </Button>
                <Button
                  href="https://github.com/UjjwalPoudel2003/employed-docs"
                  target="_blank"
                  variant="secondary"
                >
                  View on GitHub
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
