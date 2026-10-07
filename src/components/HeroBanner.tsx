import { Navbar } from './Navbar'
import { CheckoutLink } from './CheckoutLink'
import { HeroLiveWallpaper } from './HeroLiveWallpaper'
import { guidePath } from '../data/games'
import { HOME_HEADINGS, PRODUCT_PRICE_USD } from '../data/site'

export function HeroBanner() {
  return (
    <section
      id="home"
      className="hero-banner hero-banner--live relative flex min-h-svh flex-col overflow-x-clip"
    >
      <HeroLiveWallpaper />

      <div className="relative z-20 flex min-h-svh flex-col">
        <Navbar onVideo />

        <div className="page-x flex flex-1 flex-col justify-center py-10 sm:py-14">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              {HOME_HEADINGS.h1}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Undetected aimbot, wallhack ESP, and 2D radar for PUBG PC — live BattlEye
              status on Steam and Epic.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CheckoutLink className="hero-cta-primary cta-gradient inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white shadow-lg sm:w-auto">
                Buy Now — ${PRODUCT_PRICE_USD}
              </CheckoutLink>
              <a
                href={guidePath('pubg')}
                className="hero-cta-secondary inline-flex w-full items-center justify-center rounded-full border border-white/25 bg-black/35 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-z-soft/50 hover:bg-black/50 sm:w-auto"
              >
                View product page
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
