import { ArrowDown, Check, Crosshair, Eye, Radar, Zap } from 'lucide-react'
import { Navbar } from './Navbar'
import { CheckoutLink } from './CheckoutLink'
import { guidePath } from '../data/games'
import { HOME_HEADINGS, PRODUCT_PRICE_USD } from '../data/site'

const FEATURES = [
  'Silent-aim Aimbot with FOV & smoothing',
  'Player ESP, loot ESP & wallhack',
  '2D radar + live BattlEye status',
] as const

export function HeroBanner() {
  return (
    <section
      id="home"
      className="hero-banner hero-banner--static hero-banner--plain relative flex min-h-[min(100svh,780px)] flex-col overflow-x-clip"
    >
      <div className="hero-banner-backdrop pointer-events-none absolute inset-0 z-0" aria-hidden />

      <div className="relative z-20 flex min-h-[min(100svh,780px)] flex-col">
        <Navbar />

        <div className="page-x flex flex-1 flex-col justify-center py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-2xl text-center lg:max-w-3xl">
            <h1 className="text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
              {HOME_HEADINGS.h1}
            </h1>
            <p className="mt-3 text-base font-medium text-white/75 sm:text-lg">
              PUBG cheats · PUBG aimbot · PUBG ESP · wallhack · Battlegrounds hacks
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/55 sm:text-[0.95rem]">
              One Windows loader, one license — Aimbot, ESP, radar and honest status labels after
              every BattlEye patch.
            </p>

            <ul className="mx-auto mt-8 inline-flex max-w-md flex-col gap-2.5 text-left sm:max-w-lg">
              {FEATURES.map((line) => (
                <li key={line} className="flex items-start gap-2.5 text-sm text-white/70">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-z-accent/20 text-z-soft">
                    <Check className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CheckoutLink className="hero-cta-primary cta-gradient inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white sm:w-auto">
                <Zap className="h-4 w-4" strokeWidth={2} />
                Buy Now — ${PRODUCT_PRICE_USD}
              </CheckoutLink>
              <a
                href={guidePath('pubg')}
                className="inline-flex w-full items-center justify-center rounded-full border border-z-soft/25 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:border-z-soft/40 hover:bg-white/[0.04] sm:w-auto"
              >
                View product page
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-white/50">
              {[
                { icon: Crosshair, label: 'Aimbot' },
                { icon: Eye, label: 'ESP' },
                { icon: Radar, label: 'Radar' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider">
                  <Icon className="h-4 w-4 text-z-soft/80" strokeWidth={1.75} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <a
          href="#picks"
          className="hero-scroll-cue page-x relative z-20 mx-auto mb-8 flex w-fit items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white/35 transition hover:text-white/60"
        >
          More below
          <ArrowDown className="h-3.5 w-3.5" strokeWidth={2} />
        </a>
      </div>
    </section>
  )
}
