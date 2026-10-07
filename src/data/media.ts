export type SeoMediaItem = {
  image: string
  video?: string
  alt: string
  title: string
  caption: string
  videoTitle?: string
  videoDescription?: string
}

/** PUBG product art + menu stills (self-hosted). */
export const PUBG_HERO_POSTER = '/media/pubg-hero-poster.jpg'
export const PUBG_HERO = '/media/dayz-hero-full.webp'
export const PUBG_SOLDIER = '/media/dayz-hero-full.webp'
export const PUBG_COVER = '/media/dayz-cover.webp'
export const PUBG_BOX = '/media/dayz-box.jpg'
export const PUBG_ESP = '/media/dayz-esp-gameplay.gif'
export const PUBG_MENU = '/media/dayz-menu.gif'
export const PUBG_GAMEPLAY = '/media/dayz-esp-gameplay.gif'
export const PUBG_HOME_ART = '/media/dayz-home-art.jpg'
export const PUBG_CONTROL = '/media/dayz-control-art.jpg'
export const PUBG_TACTICAL = '/media/dayz-tactical-art.jpg'
export const PUBG_VIDEO_THUMB = '/media/dayz-video-thumb.jpg'

/** Self-hosted PUBG live wallpaper (hero + product preview). */
export const PUBG_HOME_VIDEO = {
  src: '/videos/pubg-hero-live.mp4',
  poster: PUBG_HERO_POSTER,
  title: 'PUBG Hacks — live PUBG wallpaper preview',
  caption: 'PUBG PC gameplay background for PUBG Aimbot, ESP, wallhack and radar hack overview.',
} as const

export const PAGE_MEDIA = {
  home: {
    image: PUBG_SOLDIER,
    alt: 'PUBG hacks Aimbot and ESP product artwork for PUBG PC on PC',
    title: 'PUBG Hacks for PUBG PC',
    caption: 'Feature overview for PUBG Aimbot, ESP, wallhack, loot ESP and radar hack.',
  },
  product: {
    image: PUBG_COVER,
    video: PUBG_HOME_VIDEO.src,
    alt: 'PUBG ESP, silent aim Aimbot and loot highlight feature artwork',
    title: 'PUBG Aimbot, ESP and Radar Hack Features',
    caption: 'Product overview for PUBG PC on Windows PC.',
    videoTitle: PUBG_HOME_VIDEO.title,
    videoDescription: PUBG_HOME_VIDEO.caption,
  },
  forums: {
    image: PUBG_HERO,
    alt: 'PUBG hacks product artwork',
    title: 'PUBG Hacks Guides',
    caption: 'Reference for setup, Aimbot, ESP, loot and BattlEye status articles.',
  },
  reviews: {
    image: PUBG_ESP,
    alt: 'PUBG hacks ESP gameplay review artwork',
    title: 'PUBG Hacks Reviews',
    caption: 'Feature and compatibility feedback for PUBG hacks.',
  },
  faq: {
    image: PUBG_MENU,
    alt: 'PUBG hacks menu artwork for the FAQ',
    title: 'PUBG Hacks FAQ',
    caption: 'Compatibility, status and setup answers for PUBG PC.',
  },
  support: {
    image: PUBG_HERO,
    alt: 'PUBG hacks support artwork',
    title: 'PUBG Hacks Support',
    caption: 'Delivery, loader and setup help for PUBG hacks.',
  },
} as const satisfies Record<string, SeoMediaItem>

const FORUM_MEDIA: Record<string, SeoMediaItem> = {
  'features-list': { ...PAGE_MEDIA.product },
  hotkeys: { ...PAGE_MEDIA.forums },
  'complete-setup': { ...PAGE_MEDIA.product },
  'disable-antivirus': { ...PAGE_MEDIA.home },
  'undetected-status': { ...PAGE_MEDIA.product },
  'aimbot-settings': { ...PAGE_MEDIA.home },
  'esp-wallhack-guide': { ...PAGE_MEDIA.reviews },
  'radar-hack-guide': { ...PAGE_MEDIA.faq },
  'stream-proof-setup': { ...PAGE_MEDIA.forums },
  'battleye-status': { ...PAGE_MEDIA.product },
  'windows-setup': { ...PAGE_MEDIA.support },
  'raid-play-guide': {
    image: PUBG_BOX,
    alt: 'PUBG ranked and loot run cheats artwork',
    title: 'PUBG Survival and Loot Run Cheats Guide',
    caption: 'Loot run tips for PUBG Aimbot, ESP and radar hack.',
  },
  'loader-errors': { ...PAGE_MEDIA.support },
}

export function getForumMedia(slug: string): SeoMediaItem {
  return FORUM_MEDIA[slug] || PAGE_MEDIA.forums
}
