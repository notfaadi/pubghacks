import { PUBG_OG } from './images'
import { PAGE_OG } from './og'
import { SEO_KEYWORDS_ALL } from './seo-keywords'

export const SITE_URL = 'https://pubghack.net'
export const SITE_NAME = 'PUBG Hacks'
export const SITE_HOST = 'pubghack.net'

/** Bumps social crawlers when Open Graph JPEGs change (WhatsApp, Slack, iMessage). */
export const OG_SHARE_VERSION = '20260307c'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: PUBG / PUBG PC hacks for PC (worldwide).
 * Canonical host is apex https://pubghack.net (www 301s to apex in the Worker).
 */
export const SITE_PURPOSE =
  'Premium PUBG hacks and PUBG cheats for PlayerUnknown\'s Battlegrounds on Windows PC — undetected-style Aimbot, player ESP, loot ESP, wallhack, PUBG radar hack PC, mod menu tools, HWID spoofer options and live BattlEye status with instant digital download after checkout.'

export const SITE_ABOUT = SEO_KEYWORDS_ALL

/** Offer price shown on product schema + purchase UI. */
export const PRODUCT_PRICE_USD = '35'

export const SEO_REGIONS = [
  { hreflang: 'en', label: 'English' },
  { hreflang: 'x-default', label: 'Default' },
] as const

export const OG_IMAGE = PUBG_OG

export type PageSeo = {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article' | 'product'
  /** Prefer /og/*.jpg (1200x630) for Google SERP thumbnails */
  image?: string
  imageAlt?: string
  robots?: string
}

const INDEX_ROBOTS =
  'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'

export const SEO = {
  home: {
    title: 'PUBG Hacks & Cheats 2026 | Undetected Aimbot, ESP & Radar',
    description:
      'Undetected PUBG hacks for PC — aimbot, ESP, wallhack, loot ESP and radar hack. Live BattlEye status for Steam and Epic. Download from $35 at pubghack.net.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'PUBG PC hero art for undetected aimbot, ESP, wallhack and radar hacks',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'PUBG Hacks Guides | Setup, Aimbot, ESP & BattlEye',
    description:
      'PUBG hack guides for PC: loader setup, aimbot, ESP, radar, antivirus exclusions and BattlEye status on pubghack.net.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'PUBG hack install guides — aimbot, ESP, wallhack',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'PUBG Hacks Reviews | Aimbot, ESP & Radar Feedback',
    description:
      'Real buyer reviews of PUBG cheats — aimbot, ESP, wallhack and radar hack performance, loader support and honest BattlEye rebuild notes before you checkout.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'PUBG cheats reviews — undetected aimbot and ESP',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'PUBG Hacks FAQ | Safety, Aimbot, ESP & BattlEye Status',
    description:
      'Answers on undetected PUBG hacks, ban risk, Steam and Epic support, HWID spoofer, aimbot and ESP settings, plus what Updating status means after BattlEye patches.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'PUBG hacks FAQ — safety, aimbot, ESP, wallhack',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'PUBG Hacks Support | Loader & Download Help',
    description:
      'Get help with PUBG hack delivery, loader errors, Windows setup and mod menu issues. Contact pubghack.net support with your order ID for fast troubleshooting.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'PUBG cheats support — loader and download help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: 'PUBG Hacks Download | Aimbot, ESP, Wallhack & Radar',
    description:
      'PUBG cheats for PC: undetected aimbot, wallhack, player and loot ESP, radar hack and mod menu. Check live BattlEye status. Steam and Epic compatible from $35.',
    path: '/pubg-hacks',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'PUBG mod menu — aimbot, ESP, wallhack product page',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'PUBG Hacks & Cheats 2026',
  h2Features: 'PUBG aimbot, PUBG ESP, wallhack & radar hack PC',
  h2Featured: 'PUBG cheats & Battlegrounds hacks features',
  h2About: 'Best undetected PUBG hacks — clear status before download',
  h2Access: 'PUBG Hacks download & checkout',
  h2Faq: 'PUBG cheats FAQ — ban risk, aimbot & ESP',
} as const

export function absoluteUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}
