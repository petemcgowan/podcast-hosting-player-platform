import { XMLParser } from 'fast-xml-parser'
import { Episode } from './data'
import fs from 'fs'
import path from 'path'

// const TECHNO_RSS = 'https://www.diplomaticenjoy.com/rss/ptupodcastrss.xml'
// const MIXED_RSS = 'https://www.diplomaticenjoy.com/rss/rss.xml'
const TECHNO_PATH = path.join(process.cwd(), 'public', 'rss', 'ptupodcastrss.xml')
const MIXED_PATH = path.join(process.cwd(), 'public', 'rss', 'rss.xml')
console.log("MIXED_PATH:, MIXED_PATH")


const TECHNO_IMAGES: Record<string, string> = {
  'EP06': '/images/EC06_Dark_Energy_Pure_Techno_Underground.jpg',
  'EP05': '/images/EC05_Pure_Techno_Underground_Skateboard_70mph_1400.jpg',
  'EP04': '/images/EC04_Pure_Techno_Underground.jpg',
  'EP03': '/images/ChilloutZone-EC03-Underground-Techno.jpg',
  'EP02': '/images/Bandana-EC02-Best-Techno.jpg',
  'EP01': '/images/ECPodCrowd2ImageTrace.jpg'
}

const MIXED_IMAGES: Record<string, string> = {
  'Old School 70s': '/images/EP12_Oldschool_70s_Funk_square_1800_Q53.jpg',
  'Swimming Downstream': '/images/UHPodSwimmingPoolEP11v3_q60_1400.jpg',
  'Cloud Party': '/images/UHPodSunDancerEP10v1b.jpg',
  'Dirt Crew': '/images/UndergroundHouseSpotv4_fish_eye_pimp_v1C.jpg',
  'Afro chill': '/images/Underground_Funk_EP08_Sly_Stone_Bass_v1B_1400x1400.jpg',
  'Deep, feels': '/images/Underground-House-EP07-1400.jpg',
  'European, uk': '/images/UndergroundPodcastEP06Techno-v1C-1400.jpg',
  'Stones throw': '/images/UndergroundPodcastEP05v2Funk.jpg',
  'All Over The Shop': '/images/Pod-4-Astronaut-v2_fixed_1400.jpg',
  'Beach Party': '/images/Pod-3-Kis-Replace_1400.jpg',
  'Breaks Vibe': '/images/UndergroundHousePodcastEP02Blackbyrdsv4B.jpg',
  'Deep House to': '/images/UndergroundHouseEpisode-v1H.jpg'
}

function getLocalImage(title: string, map: Record<string, string>, defaultImg: string) {
  const lowerTitle = title.toLowerCase()
  for (const [key, value] of Object.entries(map)) {
    if (lowerTitle.includes(key.toLowerCase())) return value
  }
  return defaultImg
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: ""
})


// ***  CLEANUP FUNCTION ***
function unwrap(node: any): string {
  if (!node) return ''

  let text = ''
  if (typeof node === 'string') text = node
  else if (typeof node === 'object' && node['#text']) text = node['#text']

  // Manual decoding for the specific characters messing up titles
  return text
    .replace(/&#8211;/g, '–')  // Fixes the En Dash
    .replace(/&amp;/g, '&')    // Fixes Ampersands
    .replace(/&#038;/g, '&')   // Another Ampersand code
    .replace(/&#8217;/g, "'")  // Fixes apostrophes
}

async function parseLocalFeed(
  filePath: string,
  defaultGenre: 'Techno' | 'House' | 'Funk',
  imageMap: Record<string, string>
): Promise<Episode[]> {
  try {
    // DIRECT FILE READ - No Fetch, No Cache, No Network
    const xml = fs.readFileSync(filePath, 'utf-8')

    const parsed = parser.parse(xml)

    if (!parsed || !parsed.rss || !parsed.rss.channel) {
        console.error(`❌ Invalid XML structure in ${filePath}`)
        return []
    }

    const items = Array.isArray(parsed.rss.channel.item)
      ? parsed.rss.channel.item
      : [parsed.rss.channel.item]

    return items.map((item: any) => {
      const safeTitle = unwrap(item.title)
      const safeId = unwrap(item.guid) || unwrap(item.link)
      const safeDescription = unwrap(item['content:encoded']) || unwrap(item.description)

      let audioUrl = ''
      if (item.enclosure && item.enclosure.url) audioUrl = item.enclosure.url
      else if (item.enclosure && item.enclosure['@_url']) audioUrl = item.enclosure['@_url']
      else if (Array.isArray(item.enclosure) && item.enclosure[0]?.url) audioUrl = item.enclosure[0].url

      if (typeof audioUrl === 'string') {
          audioUrl = audioUrl.trim().replace(/[\r\n]/g, '')
      }

      let genre = defaultGenre
      const lowerTitle = safeTitle.toLowerCase()

      if (lowerTitle.includes('funk') || lowerTitle.includes('stones throw') || lowerTitle.includes('hip hop')) {
        genre = 'Funk'
      } else if (lowerTitle.includes('house') || lowerTitle.includes('deep')) {
        genre = 'House'
      } else if (lowerTitle.includes('techno')) {
        genre = 'Techno'
      }

      return {
        id: safeId,
        genre: genre,
        title: safeTitle,
        audioUrl: audioUrl,
        image: getLocalImage(safeTitle, imageMap, '/images/PTUPodFestivalEP01.jpg'),
        date: item.pubDate,
        tracklist: safeDescription
      }
    })

  } catch (error) {
    console.error(`Error reading local feed ${filePath}:`, error)
    return []
  }
}

export async function getTechnoEpisodes() {
  return await parseLocalFeed(TECHNO_PATH, 'Techno', TECHNO_IMAGES)
}

export async function getMixedEpisodes() {
  return await parseLocalFeed(MIXED_PATH, 'House', MIXED_IMAGES)
}