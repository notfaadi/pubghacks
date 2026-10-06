import { readFileSync, writeFileSync, readdirSync, statSync, unlinkSync, renameSync } from 'node:fs'
import { join, extname } from 'node:path'

const root = join(import.meta.dirname, '..')

const TEXT_EXT = new Set(['.ts', '.tsx', '.astro', '.js', '.mjs', '.json', '.txt', '.md', '.toml', '.css'])

/** Longest-first replacements for visible copy and routes. */
const REPLACEMENTS = [
  ['pubghacks.org', 'pubghacks.org'],
  ['DayZ Standalone', 'PUBG PC'],
  ['DayZ Cheats', 'PUBG Hacks'],
  ['DayZ cheats', 'PUBG hacks'],
  ['DayZ cheat', 'PUBG hack'],
  ['DayZ Hacks', 'PUBG Hacks'],
  ['DayZ hacks', 'PUBG hacks'],
  ['DayZ hack', 'PUBG hack'],
  ['DayZ Aimbot', 'PUBG Aimbot'],
  ['DayZ ESP', 'PUBG ESP'],
  ['DayZ-only', 'PUBG-only'],
  ['DayZ player', 'PUBG player'],
  ['DayZ on', 'PUBG on'],
  ['DayZ and', 'PUBG and'],
  ['DayZ server', 'PUBG match'],
  ['DayZ servers', 'PUBG servers'],
  ['DayZ licenses', 'PUBG licenses'],
  ['DayZ license', 'PUBG license'],
  ['DayZ survival', 'PUBG ranked'],
  ['DayZ ', 'PUBG '],
  ['DayZ,', 'PUBG,'],
  ['DayZ.', 'PUBG.'],
  ['DayZ?', 'PUBG?'],
  ['DayZ:', 'PUBG:'],
  ['DayZ/', 'PUBG/'],
  ['DayZ"', 'PUBG"'],
  ["DayZ'", "PUBG'"],
  ['DayZ\n', 'PUBG\n'],
  ['DayZ', 'PUBG'],
  ['dayz standalone cheats', 'pubg pc hacks'],
  ['dayz standalone cheat', 'pubg pc hack'],
  ['dayz standalone hacks', 'pubg pc hacks'],
  ['dayz standalone hack', 'pubg pc hack'],
  ['dayz standalone', 'pubg pc'],
  ['dayz cheats', 'pubg hacks'],
  ['dayz cheat', 'pubg hack'],
  ['dayz hacks', 'pubg hacks'],
  ['dayz hack', 'pubg hack'],
  ['dayz aimbot', 'pubg aimbot'],
  ['dayz esp', 'pubg esp'],
  ['dayz wallhack', 'pubg wallhack'],
  ['dayz radar hack', 'pubg radar hack'],
  ['dayz radar', 'pubg radar'],
  ['dayz loot-esp', 'pubg loot-esp'],
  ['dayz-loot-esp', 'pubg-loot-esp'],
  ['battleye dayz cheats', 'battleye pubg hacks'],
  ['battleye-dayz-cheats', 'battleye-pubg-hacks'],
  ['cheats-dayz', 'hacks-pubg'],
  ['hacks-dayz', 'hacks-pubg'],
  ['buy-dayz-cheats', 'buy-pubg-hacks'],
  ['buy-dayz-hacks', 'buy-pubg-hacks'],
  ['undetected-dayz-cheats', 'undetected-pubg-hacks'],
  ['undetected-dayz-hacks', 'undetected-pubg-hacks'],
  ['/dayz-cheats', '/pubg-hacks'],
  ['dayz-cheats', 'pubg-hacks'],
  ['dayz-hacks', 'pubg-hacks'],
  ['dayz-hack', 'pubg-hacks'],
  ['dayz-cheat', 'pubg-hacks'],
  ['dayz-aimbot', 'pubg-hacks'],
  ['dayz-esp', 'pubg-hacks'],
  ['dayz-wallhack', 'pubg-hacks'],
  ['dayz-radar-hack', 'pubg-hacks'],
  ['dayz-radar', 'pubg-hacks'],
  ['dayz-spoofer', 'pubg-hacks'],
  ['dayz-setup', 'pubg-setup'],
  ['dayz-setup', 'pubg-setup'],
  ["getGame('dayz')", "getGame('pubg')"],
  ["slug: 'dayz'", "slug: 'pubg'"],
  ['guideSlug="dayz-cheats"', 'guideSlug="pubg-hacks"'],
  ['Bohemia Interactive', 'Krafton'],
  ['Bohemia', 'Krafton'],
  ['https://dayz.com/', 'https://pubg.com/'],
  ['dayz.com', 'pubg.com'],
  ['Chernarus and Livonia', 'Erangel and Miramar'],
  ['Chernarus or Livonia', 'Erangel or Miramar'],
  ['Chernarus', 'Erangel'],
  ['Livonia', 'Miramar'],
  ['Cherno or Elektro', 'Pochinki or Georgopol'],
  ['Infected ESP', 'Vehicle ESP'],
  ['infected ESP', 'vehicle ESP'],
  ['infected and loot ESP', 'vehicle and loot ESP'],
  ['infected,', 'enemies,'],
  ['infected ', 'enemies '],
  ['zombies', 'bots'],
  ['zombie', 'bot'],
  ['survivors', 'players'],
  ['survivor', 'player'],
  ['Base & Stash Intel', 'Loot & Vehicle Intel'],
  ['base and stash intel', 'loot and vehicle intel'],
  ['bases and buried stashes', 'loot crates and vehicles'],
  ['tents, barrels and buried stashes', 'loot, vehicles and care packages'],
  ['OFFICIAL_DAYZ_LINKS', 'OFFICIAL_PUBG_LINKS'],
  ['DAYZ_HOME_VIDEO', 'PUBG_HOME_VIDEO'],
  ['DAYZ_OG', 'PUBG_OG'],
  ['DAYZ_HERO', 'PUBG_HERO'],
  ['DAYZ_SOLDIER', 'PUBG_SOLDIER'],
  ['DAYZ_COVER', 'PUBG_COVER'],
  ['DAYZ_BOX', 'PUBG_BOX'],
  ['DAYZ_ESP', 'PUBG_ESP'],
  ['DAYZ_MENU', 'PUBG_MENU'],
  ['DAYZ_GAMEPLAY', 'PUBG_GAMEPLAY'],
  ['DAYZ_HOME_ART', 'PUBG_HOME_ART'],
  ['DAYZ_CONTROL', 'PUBG_CONTROL'],
  ['DAYZ_TACTICAL', 'PUBG_TACTICAL'],
  ['DAYZ_VIDEO_THUMB', 'PUBG_VIDEO_THUMB'],
  ['DAYZ_PRODUCT_HERO', 'PUBG_PRODUCT_HERO'],
  ['DAYZ_PRODUCT_COVER', 'PUBG_PRODUCT_COVER'],
  ['DayZPreview', 'PubgPreview'],
  ['DayZPreviewProps', 'PubgPreviewProps'],
  ['dayzcheats', 'pubghacks'],
  ['  dayz:', '  pubg:'],
  ["IMAGE_SEO[slug]", 'IMAGE_SEO[slug]'],
]

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.git' || name === 'dist') continue
    const p = join(dir, name)
    const st = statSync(p)
    if (st.isDirectory()) walk(p, files)
    else if (TEXT_EXT.has(extname(name))) files.push(p)
  }
  return files
}

function apply(content) {
  let out = content
  for (const [from, to] of REPLACEMENTS) {
    out = out.split(from).join(to)
  }
  return out
}

const files = walk(root).filter((f) => !f.includes('rebrand-pubg.mjs'))
for (const file of files) {
  const before = readFileSync(file, 'utf8')
  const after = apply(before)
  if (after !== before) writeFileSync(file, after, 'utf8')
}

const previewOld = join(root, 'src/components/DayZPreview.tsx')
const previewNew = join(root, 'src/components/PubgPreview.tsx')
try {
  renameSync(previewOld, previewNew)
} catch {
  /* already renamed */
}

const pageOld = join(root, 'src/pages/dayz-cheats.astro')
const pageNew = join(root, 'src/pages/pubg-hacks.astro')
try {
  renameSync(pageOld, pageNew)
} catch {
  /* already renamed */
}

console.log('Rebrand applied to', files.length, 'files')
