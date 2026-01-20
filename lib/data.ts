
export type Episode = {
  id: string;
  genre: 'Techno' | 'House' | 'Funk';
  title: string;
  audioUrl: string; //  podtrac link
  image: string;    // Path to public/images/...
  date: string;     // Arbitrary for sorting
  tracklist?: string;
}

export type SubscribeLink = {
  provider: string;
  url: string;
  icon: string; // Path to public/icons/...
}

const PODCAST_CDN = "d3snui7kn29943.cloudfront.net";

const DOWNLOAD_CDN = "https://d2moaspc2dhxkb.cloudfront.net";

export const REMIXES = [
  {
    artist: "The Perfect Circle",
    song: "The Hands Of Time (Diplomatic Enjoy Remix)",
    // AIFF for Download
    link: `${DOWNLOAD_CDN}/Hands_Of_Time_-_The_Perfect_Circle_(Diplomatic_Enjoy_Remix).aiff`,
    // MP3 for Streaming (Browser Safe)
    audioUrl: `${DOWNLOAD_CDN}/previews/Hands_Of_Time_-_The_Perfect_Circle_(Diplomatic_Enjoy_Remix).mp3`,
    image: "/images/remixes/HandsOfTime.jpg",
    id: "rmx01"
  },
  {
    artist: "BT Express",
    song: "Do It Till You're Satisfied (Diplomatic Enjoy Remix)",
    link: `${DOWNLOAD_CDN}/BT_Express-Do_It_till_youre_satisfied_Diplomatic_Enjoy_Edit.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/BT_Express-Do_It_till_youre_satisfied_Diplomatic_Enjoy_Edit.mp3`,
    image: "/images/remixes/Do_It_till_Youre_satisfied.jpeg",
    id: "rmx02"
  },
  {
    artist: "Boards Of Canada / Stereolab",
    song: "Kid For Today (Diplomatic Enjoy Remix)",
    link: `${DOWNLOAD_CDN}/Kid_For_Today_v1E_Oct_14_2021.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Kid_For_Today_v1E_Oct_14_2021.mp3`,
    image: "/images/remixes/KidForToday.jpg",
    id: "rmx03"
  },
  {
    artist: "James Brown",
    song: "Mind Power (Edit v3)",
    link: `${DOWNLOAD_CDN}/Mind_Power_v3_Jul_2021.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Mind_Power_v3_Jul_2021.mp3`,
    image: "/images/remixes/MindPower.jpg",
    id: "rmx04"
  },
  {
    artist: "The Meters",
    song: "Just Kissed My Baby (Diplomatic Enjoy Remix)",
    link: `${DOWNLOAD_CDN}/The_Meters-Just_Kissed_My_Baby_Diplomatic_Enjoy_Edit.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/The_Meters-Just_Kissed_My_Baby_Diplomatic_Enjoy_Edit.mp3`,
    image: "/images/remixes/JustKissedMyBaby.jpg",
    id: "rmx05"
  },
  {
    artist: "Missy Elliott",
    song: "Ultrafields House (Remix 3 Jan 2021)",
    link: `${DOWNLOAD_CDN}/UltraFields_House_Diplomatic_Enjoy_Missy_Elliott_v2GB.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/UltraFields_House_Diplomatic_Enjoy_Missy_Elliott_v2GB.mp3`,
    image: "/images/remixes/UltrafieldsHouse.jpg",
    id: "rmx06"
  },
  {
    artist: "The Police/Alex Bau",
    song: "Voices Inside My Head",
    link: `${DOWNLOAD_CDN}/VoicesInsideMyHead_DiplomaticEnjoy_v1BMay14-2021.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/VoicesInsideMyHead_DiplomaticEnjoy_v1BMay14-2021.mp3`,
    image: "/images/remixes/VoicesInsideMyHead.jpg",
    id: "rmx07"
  },
  {
    artist: "Sir Joe Quarterman",
    song: "How High (Diplomatic Enjoy Remix)",
    link: `${DOWNLOAD_CDN}/How_High_(Diplomatic_Enjoy_Edit)-Sir_Joe_Quarterman,_Rare_Soul.aiff`,
    audioUrl: `${DOWNLOAD_CDN}/previews/How_High_(Diplomatic_Enjoy_Edit)-Sir_Joe_Quarterman%2C_Rare_Soul.mp3`,
    image: "/images/remixes/HowHigh.jpg",
    id: "rmx08"
  },
  {
    artist: "The Blackbyrds",
    song: "Do It Fluid (Diplomatic Enjoy Remix)",
    link: `${DOWNLOAD_CDN}/Do_It_Fluid_(Diplomatic_Enjoy_Edit)_-_The_Blackbyrds.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Do_It_Fluid_(Diplomatic_Enjoy_Edit)_-_The_Blackbyrds.mp3`,
    image: "/images/remixes/DoItFluid.jpg",
    id: "rmx09"
  },
  {
    artist: "Hamilton Bohannon",
    song: "Red Bone (Edit)",
    link: `${DOWNLOAD_CDN}/Hamilton_Bohannon_-_Red_Bone_(105bpm_Diplomatic_Enjoy_edit).aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Hamilton_Bohannon_-_Red_Bone_(105bpm_Diplomatic_Enjoy_edit).mp3`,
    image: "/images/remixes/hamiltonBohannonRedBone.jpeg",
    id: "rmx10"
  },
  {
    artist: "Midnight Movers",
    song: "Party (Diplomatic Enjoy Remix)",
    link: `${DOWNLOAD_CDN}/Midnight_Movers-Party_Diplomatic_Enjoy_Edit.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Midnight_Movers-Party_Diplomatic_Enjoy_Edit.mp3`,
    image: "/images/remixes/PartyMidnightMovers.jpeg",
    id: "rmx11"
  },
  {
    artist: "Aquarian Dream",
    song: "You're a Star (Diplomatic Enjoy Remix)",
    link: `${DOWNLOAD_CDN}/Aquarian+Dream+-+You're+a+Star+v2+(Diplomatic+Enjoy+Remix).aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Aquarian_Dream_Youre_a_Star_v2_Diplomatic_Enjoy_Remix.mp3`,
    image: "/images/remixes/Aquarian_Dream.jpg",
    id: "rmx12"
  },
  {
    artist: "DJ Shadow",
    song: "In Flux (Edit)",
    link: `${DOWNLOAD_CDN}/DJ_Shadow-In_Flux_Diplomatic_Enjoy_Edit.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/DJ_Shadow-In_Flux_Diplomatic_Enjoy_Edit.mp3`,
    image: "/images/remixes/Influx2.jpg",
    id: "rmx13"
  },
  {
    artist: "Ramsey Lewis",
    song: "Sun Goddess (Diplomatic Enjoy Remix)",
    link: `${DOWNLOAD_CDN}/Sun_Goddess_Diplomatic_Enjoy_Remix_100bpm.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Sun_Goddess_Diplomatic_Enjoy_Remix_100bpm.mp3`,
    image: "/images/remixes/Sun_Goddess.jpg",
    id: "rmx14"
  },
  {
    artist: "William DeVaughn",
    song: "Be Thankful For What You Got (Edit)",
    link: `${DOWNLOAD_CDN}/Thankful+For+What+You+Got+(Diplomatic+Enjoy+Edit)+-+William+DeVaughn+feat+Gil+Scott+Heron+(95bpm).aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Thankful_For_What_You_Got_Diplomatic_Enjoy_Edit)_William_DeVaughn_feat_Gil_Scott_Heron_95bpm.mp3`,
    image: "/images/remixes/Be_Thankful_For_What_You_Got.JPG",
    id: "rmx15"
  },
  {
    artist: "Public Enemy",
    song: "Power To the People (Diplomatic Enjoy Remix)",
    link: `${DOWNLOAD_CDN}/Public_Enemy-Power_To_the_People_v1GT2_Diplomatic_Enjoy_Remix.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Public_Enemy-Power_To_the_People_v1GT2_Diplomatic_Enjoy_Remix.mp3`,
    image: "/images/remixes/PowerToThePeople.jpg",
    id: "rmx16"
  },
  {
    artist: "Max Graef",
    song: "Jazz 104 (Edit)",
    link: `${DOWNLOAD_CDN}/Max_Graef-Jazz_104_Diplomatic_Enjoy_Edit.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Max_Graef-Jazz_104_Diplomatic_Enjoy_Edit.mp3`,
    image: "/images/remixes/MaxGraef.jpg",
    id: "rmx17"
  },
  {
    artist: "Sabres of Paradise",
    song: "Bubble and Slide (Edit)",
    link: `${DOWNLOAD_CDN}/Sabres_Bubble_and_Slide_Diplomatic_Enjoy_edit.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Sabres_Bubble_and_Slide_Diplomatic_Enjoy_edit.mp3`,
    image: "/images/remixes/BubbleAndSlide.jpg",
    id: "rmx18"
  },
  {
    artist: "The Everyday People",
    song: "Funky Generation (Diplomatic Enjoy Remix)",
    link: `${DOWNLOAD_CDN}/Funky_Generation_Diplomatic_RemixMk3_114bpm.aif`,
    audioUrl: `${DOWNLOAD_CDN}/previews/Funky_Generation_Diplomatic_RemixMk3_114bpm.mp3`,
    image: "/images/remixes/FunkyGeneration.jpg",
   id: "rmx19"
  },
]


// The Podcast Episodes
export const EPISODES: Episode[] = [
  // --- TECHNO ---
  {
    id: 't-ep5',
    genre: 'Techno',
    title: 'Driving Techno, Fast Hör Club Style',
    audioUrl: `https://dts.podtrac.com/redirect.mp3/${PODCAST_CDN}/techno/PTU-05-Fast_Driving_Hor_Techno_EP05.mp3`,
    image: '/images/BW_Pete_1080x1080_head.jpg',
    date: '2023-01-01',
    tracklist: 'Tracklist: 1. Artist - Song... (Paste your HTML content text here)'
  },
  {
    id: 't-ep4',
    genre: 'Techno',
    title: 'Best Techno Festivals DJ Soundtrack',
    audioUrl: `https://dts.podtrac.com/redirect.mp3/${PODCAST_CDN}/techno/PTU-04-Underground_Techno_2021_Best_Techno_Festivals_EP04.mp3`,
    image: '/images/UndergroundPodcastEP06Techno-v1C-1400.jpg',
    date: '2022-12-01',
  },
   {
    id: 't-ep1',
    genre: 'Techno',
    title: 'Deep Classics To Cutting Edge',
    audioUrl: `https://dts.podtrac.com/redirect.mp3/${PODCAST_CDN}/techno/PTU-01-Deep_Classics_To_Cutting_Edge_Pure_Techno_EP01.mp3`,
    image: '/images/ECPodCrowdControlv2500x500.jpg',
    date: '2022-10-01',
  },

  // --- HOUSE ---
  {
    id: 'h-ep11',
    genre: 'House',
    title: 'Upbeat Neo Vinyl Swimming Downstream',
    audioUrl: `https://dts.podtrac.com/redirect.mp3/${PODCAST_CDN}/192/UHFT-11-Upbeat_Neo_Vinyl_Swimming_Downstream_Underground_House_EP11.mp3`,
    image: '/images/UHPodSwimmingPoolEP11v3_q60_1400.jpg',
    date: '2021-06-01',
  },
  {
    id: 'h-ep10',
    genre: 'House',
    title: 'Headphone Cloud Party Boogie',
    audioUrl: `https://dts.podtrac.com/redirect.mp3/${PODCAST_CDN}/192/UHFT-10-Headphone_Cloud_Party_Boogie_in_Smallville-Underground_House_EP10.mp3`,
    image: '/images/UHPodSunDancerEP10v1b.jpg',
    date: '2021-05-01',
  },
  {
    id: 'h-ep3',
    genre: 'House',
    title: 'Beach Party Summer Flings',
    audioUrl: `https://dts.podtrac.com/redirect.mp3/${PODCAST_CDN}/192/UHTF_03_-_Beach_party_Summer_fling_Underground_House_capades_improved_192.mp3`,
    image: '/images/UndergroundHousePodcastv2B_2020.jpg',
    date: '2021-04-01',
  },

  // --- FUNK ---
  {
    id: 'f-ep12',
    genre: 'Funk',
    title: 'Old School 70s Funk',
    audioUrl: `https://dts.podtrac.com/redirect.mp3/${PODCAST_CDN}/192/UHFT-12-Old_School_70s_Funk_Underground_Funk_EP12.mp3`,
    image: '/images/EP12_Oldschool_70s_Funk_square_1800_Q53.jpg',
    date: '2021-08-01',
  },
  {
    id: 'f-ep8',
    genre: 'Funk',
    title: 'Afro Chill Vibes & Brainfeeder Crates',
    audioUrl: `https://dts.podtrac.com/redirect.mp3/${PODCAST_CDN}/192/UHFT-08-Afro_Chill_Vibes_Hip_hop_BrainFeeder_Crates_Underground_Funk.mp3`,
    image: '/images/Underground_Funk_EP08_Sly_Stone_Bass_v1B_1400x1400.jpg',
    date: '2021-03-01',
  },
];

// The Subscribe Links (Separate config for Techno vs Mixed)
export const PLATFORMS = {
  Techno: [
    { provider: 'Apple', url: 'https://podcasts.apple.com/ie/podcast/pure-techno-underground/id1527885709', icon: '/icons/btnApplePodcasts.svg' },
    { provider: 'Spotify', url: 'https://open.spotify.com/artist/0hFzAYqKLJFEBp5jd8RhmK', icon: '/icons/btnSpotify.svg' },
    { provider: 'YouTube', url: 'https://youtube.com/playlist?list=PLJL85AxPFGSOhzdPS4HzSX4CFS8dhisJd', icon: '/icons/btnYouTube.svg' },
  ],
  HouseFunk: [
    { provider: 'Apple', url: 'https://podcasts.apple.com/lc/podcast/underground-house-funk-techno/id1445101714', icon: '/icons/btnApplePodcasts.svg' },
    { provider: 'Spotify', url: 'https://open.spotify.com/artist/0hFzAYqKLJFEBp5jd8RhmK', icon: '/icons/btnSpotify.svg' },
    { provider: 'Amazon', url: 'https://music.amazon.com/podcasts/8f127a9f-adb9-4f8a-87b4-389f9f0b788f/underground-house-funk-techno', icon: '/icons/btnAmazonMusic.svg' },
    { provider: 'YouTube', url: 'https://youtube.com/playlist?list=PLMniNzct9KeblWL-oKL4Pc9m3yFkRzhFT', icon: '/icons/btnYouTube.svg' },
  ]
}

export const SOCIALS = [
    { name: 'Instagram', url: 'https://www.instagram.com/diplomaticenjoy' },
    { name: 'Soundcloud', url: 'https://www.soundcloud.com/diplomaticenjoy' },
]
