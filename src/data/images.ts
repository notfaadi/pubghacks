import { PUBG_HERO, PUBG_SOLDIER, PUBG_COVER, PUBG_MENU, PUBG_ESP } from './media'
import { PUBG_OG, getOgImageForPath, PAGE_OG } from './og'

export { PUBG_OG, getOgImageForPath, PAGE_OG }
export { forumOgImage } from './og'

export const PUBG_PRODUCT_HERO = PUBG_HERO
export const PUBG_PRODUCT_COVER = PUBG_COVER

export type ImageSeoFields = {
  alt: string
  title: string
  caption: string
}

export const IMAGE_SEO: Record<
  string,
  ImageSeoFields & {
    heroAlt: string
    heroTitle: string
    heroCaption: string
  }
> = {
  pubg: {
    alt: 'PUBG hacks product artwork for PUBG PC on PC',
    title: 'PUBG Hacks Product Details',
    caption: 'PUBG Aimbot, ESP, wallhack, loot ESP, radar hack and BattlEye compatibility',
    heroAlt: 'PUBG hacks silent aim Aimbot and ESP features',
    heroTitle: 'PUBG Hacks Features',
    heroCaption: 'Review PUBG Aimbot, ESP, radar hack and current BattlEye status',
  },
}

type PageImage = ImageSeoFields & { src: string; og: string }

/** On-page media + dedicated OG JPEG for Google SERP thumbnails. */
export const PAGE_IMAGES: Record<
  'home' | 'forums' | 'reviews' | 'faq' | 'support' | 'product',
  PageImage
> = {
  home: {
    src: PUBG_SOLDIER,
    og: PAGE_OG.home,
    alt: 'PUBG hacks Aimbot and ESP artwork for PUBG PC on PC',
    title: 'PUBG Hacks',
    caption: 'PUBG Aimbot, ESP, wallhack and radar hack overview.',
  },
  forums: {
    src: PUBG_HERO,
    og: PAGE_OG.forums,
    alt: 'PUBG hacks product artwork',
    title: 'PUBG Hacks Guides',
    caption: 'Setup, Aimbot and ESP guides for PUBG.',
  },
  reviews: {
    src: PUBG_ESP,
    og: PAGE_OG.reviews,
    alt: 'PUBG hacks review artwork',
    title: 'PUBG Hacks Reviews',
    caption: 'Feature and compatibility feedback for PUBG PC.',
  },
  faq: {
    src: PUBG_MENU,
    og: PAGE_OG.faq,
    alt: 'PUBG hacks FAQ artwork',
    title: 'PUBG Hacks FAQ',
    caption: 'Compatibility, feature and setup answers for PUBG.',
  },
  support: {
    src: PUBG_HERO,
    og: PAGE_OG.support,
    alt: 'PUBG hacks support artwork',
    title: 'PUBG Hacks Support',
    caption: 'Delivery, loader and setup support for PUBG hacks.',
  },
  product: {
    src: PUBG_COVER,
    og: PAGE_OG.product,
    alt: 'PUBG Aimbot ESP and radar hack product artwork',
    title: 'PUBG Hacks Features',
    caption: 'Product details for PUBG Aimbot and ESP.',
  },
}

export function getGameImage(_slug: string): string {
  return PUBG_PRODUCT_COVER
}

export function getProductHeroImage(_slug: string): string {
  return PUBG_PRODUCT_COVER
}

export function getOgImage(path?: string): string {
  return getOgImageForPath(path)
}

export function getPageImage(key: keyof typeof PAGE_IMAGES) {
  return PAGE_IMAGES[key]
}

export function getImageAlt(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroAlt : seo.alt
  return variant === 'product' ? `${name} product details` : `${name} product artwork`
}

export function getImageTitle(
  slug: string,
  name: string,
  variant: 'catalog' | 'product' = 'catalog',
): string {
  const seo = IMAGE_SEO[slug]
  if (seo) return variant === 'product' ? seo.heroTitle : seo.title
  return `${name} product`
}
