// Daily Video History Log & Topic Registry
const PODCAST_HISTORY = [
  {
    "episode": 1,
    "topic": "Beyond 'Nice to Meet You': Mastering First Impressions in English",
    "date": "2026-10-16T03:49:03.752971",
    "duration_sec": 1382.64,
    "duration_min": 23.04,
    "video_file": "podcast_ep1_20261016_032719.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 2,
    "topic": "Von 'Geil' bis 'Krass': Wie man Begeisterung im modernen Deutsch ausdrückt",
    "date": "2026-10-17T11:54:45.941344",
    "duration_sec": 1658.04,
    "duration_min": 27.63,
    "video_file": "podcast_ep2_20261017_113810.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 3,
    "topic": "Schluss mit 'Ist OK'! So sagst du wirklich, dass etwas gut ist",
    "date": "2026-10-18T05:30:06.209385",
    "duration_sec": 1506.34,
    "duration_min": 25.11,
    "video_file": "podcast_ep3_20261018_051552.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 4,
    "topic": "Keine Lust mehr auf 'Ich bin müde'! Neue Wege, Erschöpfung auszudrücken wie ein echter Berliner",
    "date": "2026-10-19T05:43:04.970507",
    "duration_sec": 1577.45,
    "duration_min": 26.29,
    "video_file": "podcast_ep4_20261019_052813.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 5,
    "topic": "Schluss mit 'Ich verstehe nichts'! Überzeugend klarmachen, dass du etwas nicht kapierst",
    "date": "2026-10-20T05:55:24.175149",
    "duration_sec": 1536.1,
    "duration_min": 25.6,
    "video_file": "podcast_ep5_20261020_053140.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 6,
    "topic": "Von 'Ja, klar!' bis 'Auf jeden Fall!': Zustimmung ausdrücken wie ein echter Deutschprofi",
    "date": "2026-10-21T05:53:21.706684",
    "duration_sec": 1572.21,
    "duration_min": 26.2,
    "video_file": "podcast_ep6_20261021_053233.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 7,
    "topic": "Tschüss 'Langweilig'! Wie man über Aktivitäten spricht, die wirklich Spaß machen",
    "date": "2026-10-22T05:58:55.226201",
    "duration_sec": 1520.81,
    "duration_min": 25.35,
    "video_file": "podcast_ep7_20261022_053529.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 8,
    "topic": "Von 'Was geht ab?' bis 'Alles im Lot?': Die Kunst des lockeren Nachfragens",
    "date": "2026-10-23T06:00:18.373954",
    "duration_sec": 1524.29,
    "duration_min": 25.4,
    "video_file": "podcast_ep8_20261023_053421.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 9,
    "topic": "Schluss mit 'Ich bin hungrig'! Raffinierte Wege, Appetit auf Deutsch auszudrücken",
    "date": "2026-10-24T05:36:39.318742",
    "duration_sec": 1488.72,
    "duration_min": 24.81,
    "video_file": "podcast_ep9_20261024_051247.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 10,
    "topic": "Von 'Ich bin beschäftigt' zu 'Ich hab' gut zu tun': Zeitmanagement im lockeren Gespräch",
    "date": "2026-10-25T05:54:57.726884",
    "duration_sec": 1612.54,
    "duration_min": 26.88,
    "video_file": "podcast_ep10_20261025_052931.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 11,
    "topic": "Von 'Super' zu 'Abgefahren': Begeisterung ausdrücken, die rockt!",
    "date": "2026-10-26T05:54:46.958872",
    "duration_sec": 1492.87,
    "duration_min": 24.88,
    "video_file": "podcast_ep11_20261026_053507.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 12,
    "topic": "Schluss mit 'Es ist gut so'! Wie man Zufriedenheit und Wohlbefinden ausdrückt",
    "date": "2026-10-27T06:14:25.893014",
    "duration_sec": 1648.56,
    "duration_min": 27.48,
    "video_file": "podcast_ep12_20261027_054804.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 13,
    "topic": "Von 'Ach so!' bis 'Das leuchtet ein!': Die Kunst, Aha-Momente im Alltag zu feiern",
    "date": "2026-10-29T07:00:47.449157",
    "duration_sec": 1513.99,
    "duration_min": 25.23,
    "video_file": "podcast_ep13_20261029_063741.mp4",
    "platform": "Facebook"
  },
  {
    "episode": 14,
    "topic": "Tschüss 'Danke'! Mehr als nur ein Wort: Ausdruck von Dankbarkeit im lockeren Gespräch",
    "date": "2026-10-30T07:03:19.538499",
    "duration_sec": 1535.69,
    "duration_min": 25.59,
    "video_file": "podcast_ep14_20261030_063821.mp4",
    "platform": "Facebook"
  }
];
if (typeof module !== 'undefined' && module.exports) { module.exports = PODCAST_HISTORY; }
if (typeof window !== 'undefined') { window.PODCAST_HISTORY = PODCAST_HISTORY; }
