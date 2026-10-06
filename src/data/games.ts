export type GameStatus = 'Undetected' | 'Updating' | 'Use with caution'

export type Game = {
  slug: string
  name: string
  status: GameStatus
  popular?: boolean
}

/** Site is PUBG hacks only — no other titles in the catalog. */
export const GAMES: Game[] = [
  { slug: 'pubg', name: 'PUBG', status: 'Undetected', popular: true },
]

export function getGame(slug: string) {
  return GAMES.find((g) => g.slug === slug)
}

export function guidePath(slug: string) {
  return `/${slug.toLowerCase()}-hacks`
}

export function parseGuideSlug(param: string) {
  const lower = param.toLowerCase()
  if (lower.endsWith('-hacks')) return lower.slice(0, -6)
  if (lower.endsWith('-cheats')) return lower.slice(0, -7)
  return lower
}

export const GUIDE_FEATURES = [
  {
    name: 'PUBG Aimbot (silent aim)',
    text: 'Silent-aim tracking with FOV, smoothing and bone selection — fire near a player and still land the hit, so it reads as legit even when an admin spectates.',
  },
  {
    name: 'Player ESP / Wallhack',
    text: 'See players through walls and treelines with distance, health and gear information when the build supports it — tell friendlies from hostiles instantly.',
  },
  {
    name: 'Vehicle ESP',
    text: 'Spot vehicles and rotating squads before they cross your lane — useful for hot drops and late-game rotations on Erangel and Miramar.',
  },
  {
    name: 'Loot & Item ESP',
    text: 'Highlight guns, ammo, medical supplies and rare gear by category so you skip empty houses and gear up in minutes instead of hours.',
  },
  {
    name: 'Radar Hack',
    text: '2D radar awareness for off-screen players across Erangel and Miramar — spot the third party before it reaches your position.',
  },
  {
    name: 'Loot & Vehicle Intel',
    text: 'Track care packages, airdrops and high-tier loot zones so your squad lands geared instead of scrambling for level-one vests.',
  },
  {
    name: 'Official & custom match support',
    text: 'Works on official PUBG servers and most custom room / training setups when the build allows it.',
  },
  {
    name: 'Spoofer + Cleaner',
    text: 'Protect hardware identifiers and refresh traces after bans or hardware swaps — included with the package.',
  },
  {
    name: 'BattlEye status + support',
    text: 'Live clear-to-load or Updating status is reviewed after BattlEye and PUBG patches before you load.',
  },
] as const

/** @deprecated use PRODUCT_PAGE_FAQS from faqs.ts — kept as alias */
export { PRODUCT_PAGE_FAQS as PRODUCT_FAQS } from './faqs'
