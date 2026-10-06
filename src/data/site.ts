import { PUBG_OG } from './images'
import { PAGE_OG } from './og'
import { SEO_KEYWORDS_ALL } from './seo-keywords'

export const SITE_URL = 'https://pubghacks.org'
export const SITE_NAME = 'PUBG Hacks'
export const SITE_HOST = 'pubghacks.org'

/**
 * Sole purpose — used in schema + about copy.
 * Single-product site: PUBG / PUBG PC hacks for PC (worldwide).
 * Canonical host is apex https://pubghacks.org (www 301s to apex in the Worker).
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
    title: 'Undetected PUBG Hacks & Cheats 2026 | Aimbot, ESP, Wallhack Download',
    description:
      'Get undetected PUBG hacks for PC: PUBG aimbot, PUBG ESP, wallhack, radar hack, loot ESP, recoil control and mod menu features. Private Battlegrounds hacks with HWID spoofer support. Works on Steam & Epic — download via pubghacks.org.',
    path: '/',
    ogType: 'website',
    image: PAGE_OG.home,
    imageAlt: 'Undetected PUBG hacks — aimbot, ESP, wallhack and radar for PC',
    robots: INDEX_ROBOTS,
  },
  forums: {
    title: 'PUBG Hacks Guides | Aimbot, ESP, Wallhack, Radar & Install',
    description:
      'PUBG cheats setup guides: how to install PUBG hacks, macro settings, anti-cheat status, player ESP, loot ESP, radar cheat tutorials and mod menu hotkeys for PlayerUnknown\'s Battlegrounds PC.',
    path: '/forums',
    ogType: 'website',
    image: PAGE_OG.forums,
    imageAlt: 'PUBG hack install guides — aimbot, ESP, wallhack',
    robots: INDEX_ROBOTS,
  },
  reviews: {
    title: 'Best PUBG Cheats Reviews | Undetected Aimbot & ESP Feedback',
    description:
      'Read reviews for undetected PUBG hacks and PUBG cheats — aimbot, player ESP, radar hack PC, recoil scripts and BattlEye rebuild honesty before you buy Battlegrounds hacks.',
    path: '/reviews',
    ogType: 'website',
    image: PAGE_OG.reviews,
    imageAlt: 'PUBG cheats reviews — undetected aimbot and ESP',
    robots: INDEX_ROBOTS,
  },
  faq: {
    title: 'Safe PUBG Cheats FAQ 2026 | Undetected Aimbot, Radar & Wallhack',
    description:
      'FAQ on undetected PUBG hacks, ban risk, free PUBG aimbot myths, PUBG mobile vs PC, Steam/Epic support, HWID spoofer, speed hack, no recoil macro and anti-cheat bypass questions answered.',
    path: '/faq',
    ogType: 'website',
    image: PAGE_OG.faq,
    imageAlt: 'PUBG hacks FAQ — safety, aimbot, ESP, wallhack',
    robots: INDEX_ROBOTS,
  },
  support: {
    title: 'PUBG Hacks Support | Loader, Download & Mod Menu Help',
    description:
      'Support for PUBG hack download, loader errors, mod menu setup, game enhancement tools and delivery — 24/7 help for pubghacks.org buyers on Windows PC.',
    path: '/support',
    ogType: 'website',
    image: PAGE_OG.support,
    imageAlt: 'PUBG cheats support — loader and download help',
    robots: INDEX_ROBOTS,
  },
  product: {
    title: '#1 PUBG Hacks Download | Private Aimbot & ESP Cheats [Undetected]',
    description:
      'Download private PUBG cheats: undetected aimbot, PUBG wallhack, player ESP, loot ESP, PUBG radar hack PC, recoil control script and optional HWID spoofer. Steam & Epic Games compatible from $35.',
    path: '/pubg-hacks',
    ogType: 'product',
    image: PAGE_OG.product,
    imageAlt: 'PUBG mod menu — aimbot, ESP, wallhack product page',
    robots: INDEX_ROBOTS,
  },
} as const satisfies Record<string, PageSeo>

export const HOME_HEADINGS = {
  h1: 'Premium PUBG Hacks & Cheats — Undetected & Updated Daily',
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
