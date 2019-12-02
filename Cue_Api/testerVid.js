// Validation
const gradient = require("gradient-string");
console.log(`${gradient.summer("/api/testerVid.js loaded")}\n=========================\n`);

// data storage for data pulled from youtube api stored locally
var testData = {
  classicRock: [
    {
      id: "n4RjJKxsamQ",
      link: "https://www.youtube.com/watch?v=n4RjJKxsamQ",
      kind: "youtube#video",
      publishedAt: "2009-11-01T09:42:41.000Z",
      channelId: "UCqfmagAXUrUTHpJldTPRseg",
      channelTitle: "ScorpionsVEVO",
      title: "Scorpions - Wind Of Change (Official Music Video)",
      description:
        "Best of Scorpions: https://goo.gl/dtfDmo Subscribe here: https://goo.gl/jQbFpy Music video by Scorpions performing Wind Of Change. (C) 1991 The Island Def ...",
      thumbnails: { default: [Object], medium: [Object], high: [Object] },
      vidIMG: "https://i.ytimg.com/vi/n4RjJKxsamQ/default.jpg"
    },
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: { default: [Object], medium: [Object], high: [Object] },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: { default: [Object], medium: [Object], high: [Object] },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: { default: [Object], medium: [Object], high: [Object] },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: { default: [Object], medium: [Object], high: [Object] },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: { default: [Object], medium: [Object], high: [Object] },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: { default: [Object], medium: [Object], high: [Object] },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: { default: [Object], medium: [Object], high: [Object] },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "BAzOvL9__Bg",
      link: "https://www.youtube.com/watch?v=BAzOvL9__Bg",
      kind: "youtube#video",
      publishedAt: "2009-03-28T01:07:00.000Z",
      channelId: "UCAqM7ek2HP-Y75EBDSiQDBA",
      channelTitle: "Ryan Longley Music",
      title: "100 Best Classic Rock Songs Part 1 (100 - 51)",
      description:
        "I obviously don't own any of this music** Link to Part 2: http://www.youtube.com/watch?v=iYtph7YFscE&feature=channel_page This is the first part to the 100 list ...",
      thumbnails: { default: [Object], medium: [Object], high: [Object] },
      vidIMG: "https://i.ytimg.com/vi/BAzOvL9__Bg/default.jpg"
    },
    {
      id: "sKW9kWAIdI0",
      link: "https://www.youtube.com/watch?v=sKW9kWAIdI0",
      kind: "youtube#video",
      publishedAt: "2016-07-13T19:34:15.000Z",
      channelId: "UCifDpwVLU2V8nRQE9e-X_Sg",
      channelTitle: "The Classic Rock Show",
      title:
        "Rainbow &quot;Since You Been Gone&quot; performed by The Classic Rock Show",
      description:
        "The Classic Rock Show performing \"Since You Been Gone\" from the 1979 Rainbow album \"Down to Earth\", recorded live at the Philharmonic Hall, Liverpool, ...",
      thumbnails: { default: [Object], medium: [Object], high: [Object] },
      vidIMG: "https://i.ytimg.com/vi/sKW9kWAIdI0/default.jpg"
    }
  ],
  alternative: [
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "qjuEXKwnkLE",
      link: "https://www.youtube.com/watch?v=qjuEXKwnkLE",
      kind: "youtube#video",
      publishedAt: "2019-01-18T09:00:05.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Skid Row - I Remember You (Official Music Video)",
      description:
        "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
    },
    {
      id: "QEg6015_6F4",
      link: "https://www.youtube.com/watch?v=QEg6015_6F4",
      kind: "youtube#video",
      publishedAt: "2016-03-25T16:00:01.000Z",
      channelId: "UCGQXvbjVgAJle2_TCA3SbVw",
      channelTitle: "RockandRoll",
      title: "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
      description:
        "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
    },
    {
      id: "M5t6E3T6sKk",
      link: "https://www.youtube.com/watch?v=M5t6E3T6sKk",
      kind: "youtube#video",
      publishedAt: "2017-05-08T12:32:47.000Z",
      channelId: "UCiB4ezwMV_qOq_AxqPojnsg",
      channelTitle: "Guitar Bonedo",
      title:
        "10 Rock Songs Every Beginner Guitar Player Should Know (no talking)",
      description:
        "We've selected 10 classic rock songs for you! Read the full article: http://bit.ly/10RockSongs List: 00:00 Smoke On The Water - Deep Purple 00:20 Song 2 - Blur ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg"
    }
  ],
  country: [
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "qjuEXKwnkLE",
      link: "https://www.youtube.com/watch?v=qjuEXKwnkLE",
      kind: "youtube#video",
      publishedAt: "2019-01-18T09:00:05.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Skid Row - I Remember You (Official Music Video)",
      description:
        "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
    },
    {
      id: "QEg6015_6F4",
      link: "https://www.youtube.com/watch?v=QEg6015_6F4",
      kind: "youtube#video",
      publishedAt: "2016-03-25T16:00:01.000Z",
      channelId: "UCGQXvbjVgAJle2_TCA3SbVw",
      channelTitle: "RockandRoll",
      title: "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
      description:
        "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
    },
    {
      id: "M5t6E3T6sKk",
      link: "https://www.youtube.com/watch?v=M5t6E3T6sKk",
      kind: "youtube#video",
      publishedAt: "2017-05-08T12:32:47.000Z",
      channelId: "UCiB4ezwMV_qOq_AxqPojnsg",
      channelTitle: "Guitar Bonedo",
      title:
        "10 Rock Songs Every Beginner Guitar Player Should Know (no talking)",
      description:
        "We've selected 10 classic rock songs for you! Read the full article: http://bit.ly/10RockSongs List: 00:00 Smoke On The Water - Deep Purple 00:20 Song 2 - Blur ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg"
    }
  ],
  jazz: [
    {
      id: "n4RjJKxsamQ",
      link: "https://www.youtube.com/watch?v=n4RjJKxsamQ",
      kind: "youtube#video",
      publishedAt: "2009-11-01T09:42:41.000Z",
      channelId: "UCqfmagAXUrUTHpJldTPRseg",
      channelTitle: "ScorpionsVEVO",
      title: "Scorpions - Wind Of Change (Official Music Video)",
      description:
        "Best of Scorpions: https://goo.gl/dtfDmo Subscribe here: https://goo.gl/jQbFpy Music video by Scorpions performing Wind Of Change. (C) 1991 The Island Def ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/n4RjJKxsamQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/n4RjJKxsamQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/n4RjJKxsamQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/n4RjJKxsamQ/default.jpg"
    },
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "qjuEXKwnkLE",
      link: "https://www.youtube.com/watch?v=qjuEXKwnkLE",
      kind: "youtube#video",
      publishedAt: "2019-01-18T09:00:05.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Skid Row - I Remember You (Official Music Video)",
      description:
        "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
    },
    {
      id: "QEg6015_6F4",
      link: "https://www.youtube.com/watch?v=QEg6015_6F4",
      kind: "youtube#video",
      publishedAt: "2016-03-25T16:00:01.000Z",
      channelId: "UCGQXvbjVgAJle2_TCA3SbVw",
      channelTitle: "RockandRoll",
      title: "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
      description:
        "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
    }
  ],
  punk: [
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "qjuEXKwnkLE",
      link: "https://www.youtube.com/watch?v=qjuEXKwnkLE",
      kind: "youtube#video",
      publishedAt: "2019-01-18T09:00:05.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Skid Row - I Remember You (Official Music Video)",
      description:
        "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
    },
    {
      id: "QEg6015_6F4",
      link: "https://www.youtube.com/watch?v=QEg6015_6F4",
      kind: "youtube#video",
      publishedAt: "2016-03-25T16:00:01.000Z",
      channelId: "UCGQXvbjVgAJle2_TCA3SbVw",
      channelTitle: "RockandRoll",
      title: "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
      description:
        "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
    },
    {
      id: "M5t6E3T6sKk",
      link: "https://www.youtube.com/watch?v=M5t6E3T6sKk",
      kind: "youtube#video",
      publishedAt: "2017-05-08T12:32:47.000Z",
      channelId: "UCiB4ezwMV_qOq_AxqPojnsg",
      channelTitle: "Guitar Bonedo",
      title:
        "10 Rock Songs Every Beginner Guitar Player Should Know (no talking)",
      description:
        "We've selected 10 classic rock songs for you! Read the full article: http://bit.ly/10RockSongs List: 00:00 Smoke On The Water - Deep Purple 00:20 Song 2 - Blur ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg"
    }
  ],
  indie: [
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "qjuEXKwnkLE",
      link: "https://www.youtube.com/watch?v=qjuEXKwnkLE",
      kind: "youtube#video",
      publishedAt: "2019-01-18T09:00:05.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Skid Row - I Remember You (Official Music Video)",
      description:
        "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
    },
    {
      id: "QEg6015_6F4",
      link: "https://www.youtube.com/watch?v=QEg6015_6F4",
      kind: "youtube#video",
      publishedAt: "2016-03-25T16:00:01.000Z",
      channelId: "UCGQXvbjVgAJle2_TCA3SbVw",
      channelTitle: "RockandRoll",
      title: "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
      description:
        "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
    },
    {
      id: "M5t6E3T6sKk",
      link: "https://www.youtube.com/watch?v=M5t6E3T6sKk",
      kind: "youtube#video",
      publishedAt: "2017-05-08T12:32:47.000Z",
      channelId: "UCiB4ezwMV_qOq_AxqPojnsg",
      channelTitle: "Guitar Bonedo",
      title:
        "10 Rock Songs Every Beginner Guitar Player Should Know (no talking)",
      description:
        "We've selected 10 classic rock songs for you! Read the full article: http://bit.ly/10RockSongs List: 00:00 Smoke On The Water - Deep Purple 00:20 Song 2 - Blur ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg"
    }
  ],
  hiphop: [
    {
      id: "n4RjJKxsamQ",
      link: "https://www.youtube.com/watch?v=n4RjJKxsamQ",
      kind: "youtube#video",
      publishedAt: "2009-11-01T09:42:41.000Z",
      channelId: "UCqfmagAXUrUTHpJldTPRseg",
      channelTitle: "ScorpionsVEVO",
      title: "Scorpions - Wind Of Change (Official Music Video)",
      description:
        "Best of Scorpions: https://goo.gl/dtfDmo Subscribe here: https://goo.gl/jQbFpy Music video by Scorpions performing Wind Of Change. (C) 1991 The Island Def ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/n4RjJKxsamQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/n4RjJKxsamQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/n4RjJKxsamQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/n4RjJKxsamQ/default.jpg"
    },
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "qjuEXKwnkLE",
      link: "https://www.youtube.com/watch?v=qjuEXKwnkLE",
      kind: "youtube#video",
      publishedAt: "2019-01-18T09:00:05.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Skid Row - I Remember You (Official Music Video)",
      description:
        "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
    },
    {
      id: "QEg6015_6F4",
      link: "https://www.youtube.com/watch?v=QEg6015_6F4",
      kind: "youtube#video",
      publishedAt: "2016-03-25T16:00:01.000Z",
      channelId: "UCGQXvbjVgAJle2_TCA3SbVw",
      channelTitle: "RockandRoll",
      title: "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
      description:
        "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
    }
  ],
  dance: [
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "qjuEXKwnkLE",
      link: "https://www.youtube.com/watch?v=qjuEXKwnkLE",
      kind: "youtube#video",
      publishedAt: "2019-01-18T09:00:05.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Skid Row - I Remember You (Official Music Video)",
      description:
        "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
    },
    {
      id: "QEg6015_6F4",
      link: "https://www.youtube.com/watch?v=QEg6015_6F4",
      kind: "youtube#video",
      publishedAt: "2016-03-25T16:00:01.000Z",
      channelId: "UCGQXvbjVgAJle2_TCA3SbVw",
      channelTitle: "RockandRoll",
      title: "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
      description:
        "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
    },
    {
      id: "M5t6E3T6sKk",
      link: "https://www.youtube.com/watch?v=M5t6E3T6sKk",
      kind: "youtube#video",
      publishedAt: "2017-05-08T12:32:47.000Z",
      channelId: "UCiB4ezwMV_qOq_AxqPojnsg",
      channelTitle: "Guitar Bonedo",
      title:
        "10 Rock Songs Every Beginner Guitar Player Should Know (no talking)",
      description:
        "We've selected 10 classic rock songs for you! Read the full article: http://bit.ly/10RockSongs List: 00:00 Smoke On The Water - Deep Purple 00:20 Song 2 - Blur ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg"
    }
  ],
  rock: [
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "qjuEXKwnkLE",
      link: "https://www.youtube.com/watch?v=qjuEXKwnkLE",
      kind: "youtube#video",
      publishedAt: "2019-01-18T09:00:05.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Skid Row - I Remember You (Official Music Video)",
      description:
        "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
    },
    {
      id: "QEg6015_6F4",
      link: "https://www.youtube.com/watch?v=QEg6015_6F4",
      kind: "youtube#video",
      publishedAt: "2016-03-25T16:00:01.000Z",
      channelId: "UCGQXvbjVgAJle2_TCA3SbVw",
      channelTitle: "RockandRoll",
      title: "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
      description:
        "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
    },
    {
      id: "M5t6E3T6sKk",
      link: "https://www.youtube.com/watch?v=M5t6E3T6sKk",
      kind: "youtube#video",
      publishedAt: "2017-05-08T12:32:47.000Z",
      channelId: "UCiB4ezwMV_qOq_AxqPojnsg",
      channelTitle: "Guitar Bonedo",
      title:
        "10 Rock Songs Every Beginner Guitar Player Should Know (no talking)",
      description:
        "We've selected 10 classic rock songs for you! Read the full article: http://bit.ly/10RockSongs List: 00:00 Smoke On The Water - Deep Purple 00:20 Song 2 - Blur ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg"
    }
  ],
  metal: [
    {
      id: "n4RjJKxsamQ",
      link: "https://www.youtube.com/watch?v=n4RjJKxsamQ",
      kind: "youtube#video",
      publishedAt: "2009-11-01T09:42:41.000Z",
      channelId: "UCqfmagAXUrUTHpJldTPRseg",
      channelTitle: "ScorpionsVEVO",
      title: "Scorpions - Wind Of Change (Official Music Video)",
      description:
        "Best of Scorpions: https://goo.gl/dtfDmo Subscribe here: https://goo.gl/jQbFpy Music video by Scorpions performing Wind Of Change. (C) 1991 The Island Def ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/n4RjJKxsamQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/n4RjJKxsamQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/n4RjJKxsamQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/n4RjJKxsamQ/default.jpg"
    },
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "qjuEXKwnkLE",
      link: "https://www.youtube.com/watch?v=qjuEXKwnkLE",
      kind: "youtube#video",
      publishedAt: "2019-01-18T09:00:05.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Skid Row - I Remember You (Official Music Video)",
      description:
        "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
    },
    {
      id: "QEg6015_6F4",
      link: "https://www.youtube.com/watch?v=QEg6015_6F4",
      kind: "youtube#video",
      publishedAt: "2016-03-25T16:00:01.000Z",
      channelId: "UCGQXvbjVgAJle2_TCA3SbVw",
      channelTitle: "RockandRoll",
      title: "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
      description:
        "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
    }
  ],
  pop: [
    {
      id: "2X_2IdybTV0",
      link: "https://www.youtube.com/watch?v=2X_2IdybTV0",
      kind: "youtube#video",
      publishedAt: "2012-12-06T02:50:47.000Z",
      channelId: "UCD58rE0B2PDe3se2nCv1yRA",
      channelTitle: "kansasVEVO",
      title: "Kansas - Carry On Wayward Son (Official Audio)",
      description:
        "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
    },
    {
      id: "WyF8RHM1OCg",
      link: "https://www.youtube.com/watch?v=WyF8RHM1OCg",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:25.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
    },
    {
      id: "dJe1iUuAW4M",
      link: "https://www.youtube.com/watch?v=dJe1iUuAW4M",
      kind: "youtube#video",
      publishedAt: "2011-01-31T04:42:25.000Z",
      channelId: "UC9V5v_c7ga7jFsOm8r07yRQ",
      channelTitle: "2chann",
      title:
        "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
      description:
        "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
    },
    {
      id: "JkhX5W7JoWI",
      link: "https://www.youtube.com/watch?v=JkhX5W7JoWI",
      kind: "youtube#video",
      publishedAt: "2008-06-16T17:43:29.000Z",
      channelId: "UCIqAgiBgpjltQ-nSYKJMIeA",
      channelTitle: "ClassicRockMusic",
      title: "Money - Pink Floyd + Lyrics",
      description:
        "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
    },
    {
      id: "eIa3SBFYe_A",
      link: "https://www.youtube.com/watch?v=eIa3SBFYe_A",
      kind: "youtube#video",
      publishedAt: "2015-07-29T05:23:26.000Z",
      channelId: "UCKAqou7V9FAWXpZd9xtOg3Q",
      channelTitle: "Little Baby Bum - Nursery Rhymes & Kids Songs",
      title:
        "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
      description:
        "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
    },
    {
      id: "swPt9HBRXuE",
      link: "https://www.youtube.com/watch?v=swPt9HBRXuE",
      kind: "youtube#video",
      publishedAt: "2009-02-27T22:16:37.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Whitesnake - Still of the Night (Official Music Video)",
      description:
        "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
    },
    {
      id: "b6iBclM2CkI",
      link: "https://www.youtube.com/watch?v=b6iBclM2CkI",
      kind: "youtube#video",
      publishedAt: "2018-09-22T03:42:43.000Z",
      channelId: "UC3t8VzN8aICGfFmOSVTeBmQ",
      channelTitle: "SoundMix Dj【ツ】HD",
      title:
        "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
      description:
        "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
    },
    {
      id: "qjuEXKwnkLE",
      link: "https://www.youtube.com/watch?v=qjuEXKwnkLE",
      kind: "youtube#video",
      publishedAt: "2019-01-18T09:00:05.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Skid Row - I Remember You (Official Music Video)",
      description:
        "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
    },
    {
      id: "QEg6015_6F4",
      link: "https://www.youtube.com/watch?v=QEg6015_6F4",
      kind: "youtube#video",
      publishedAt: "2016-03-25T16:00:01.000Z",
      channelId: "UCGQXvbjVgAJle2_TCA3SbVw",
      channelTitle: "RockandRoll",
      title: "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
      description:
        "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
    },
    {
      id: "M5t6E3T6sKk",
      link: "https://www.youtube.com/watch?v=M5t6E3T6sKk",
      kind: "youtube#video",
      publishedAt: "2017-05-08T12:32:47.000Z",
      channelId: "UCiB4ezwMV_qOq_AxqPojnsg",
      channelTitle: "Guitar Bonedo",
      title:
        "10 Rock Songs Every Beginner Guitar Player Should Know (no talking)",
      description:
        "We've selected 10 classic rock songs for you! Read the full article: http://bit.ly/10RockSongs List: 00:00 Smoke On The Water - Deep Purple 00:20 Song 2 - Blur ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/M5t6E3T6sKk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/M5t6E3T6sKk/default.jpg"
    }
  ],
  blues: [
    {
    "id": "n4RjJKxsamQ",
    "link": "https://www.youtube.com/watch?v=n4RjJKxsamQ",
    "kind": "youtube#video",
    "publishedAt": "2009-11-01T09:42:41.000Z",
    "channelId": "UCqfmagAXUrUTHpJldTPRseg",
    "channelTitle": "ScorpionsVEVO",
    "title": "Scorpions - Wind Of Change (Official Music Video)",
    "description": "Best of Scorpions: https://goo.gl/dtfDmo Subscribe here: https://goo.gl/jQbFpy Music video by Scorpions performing Wind Of Change. (C) 1991 The Island Def ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/n4RjJKxsamQ/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/n4RjJKxsamQ/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/n4RjJKxsamQ/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "vidIMG": "https://i.ytimg.com/vi/n4RjJKxsamQ/default.jpg"
  },
  {
    "id": "2X_2IdybTV0",
    "link": "https://www.youtube.com/watch?v=2X_2IdybTV0",
    "kind": "youtube#video",
    "publishedAt": "2012-12-06T02:50:47.000Z",
    "channelId": "UCD58rE0B2PDe3se2nCv1yRA",
    "channelTitle": "kansasVEVO",
    "title": "Kansas - Carry On Wayward Son (Official Audio)",
    "description": "Playlist Best of Kansas: https://goo.gl/LK42Ru Subscribe for more: https://goo.gl/VHTUin Kansas' official audio for 'Carry On Wayward Son'. Click to listen to ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/2X_2IdybTV0/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/2X_2IdybTV0/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "vidIMG": "https://i.ytimg.com/vi/2X_2IdybTV0/default.jpg"
  },
  {
    "id": "WyF8RHM1OCg",
    "link": "https://www.youtube.com/watch?v=WyF8RHM1OCg",
    "kind": "youtube#video",
    "publishedAt": "2009-02-27T22:16:25.000Z",
    "channelId": "UCWEtnEiVwUy7mwFeshyAWLA",
    "channelTitle": "RHINO",
    "title": "Whitesnake - Here I Go Again &#39;87 (Official Music Video)",
    "description": "You're watching the official music video for Whitesnake - \"Here I Go Again '87\" from the album 'Whitesnake'. \"Here I Go Again\" reached No. 1 on the Billboard ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/WyF8RHM1OCg/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/WyF8RHM1OCg/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "vidIMG": "https://i.ytimg.com/vi/WyF8RHM1OCg/default.jpg"
  },
  {
    "id": "dJe1iUuAW4M",
    "link": "https://www.youtube.com/watch?v=dJe1iUuAW4M",
    "kind": "youtube#video",
    "publishedAt": "2011-01-31T04:42:25.000Z",
    "channelId": "UC9V5v_c7ga7jFsOm8r07yRQ",
    "channelTitle": "2chann",
    "title": "Doobie Brothers ~ What A fool Believes (1979) Classic Rock R&amp;B Pop",
    "description": "Doobie Brothers: https://thedoobiebrothers.com/ itunes: https://itunes.apple.com/us/artist/the-doobie-brothers/id117992093 What a Fool Believes\" is a song ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/dJe1iUuAW4M/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/dJe1iUuAW4M/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "vidIMG": "https://i.ytimg.com/vi/dJe1iUuAW4M/default.jpg"
  },
  {
    "id": "JkhX5W7JoWI",
    "link": "https://www.youtube.com/watch?v=JkhX5W7JoWI",
    "kind": "youtube#video",
    "publishedAt": "2008-06-16T17:43:29.000Z",
    "channelId": "UCIqAgiBgpjltQ-nSYKJMIeA",
    "channelTitle": "ClassicRockMusic",
    "title": "Money - Pink Floyd + Lyrics",
    "description": "Lyrics* Money (Waters) 6:32 Money, get away. Get a good job with good pay and you're okay. Money, it's a gas. Grab that cash with both hands and make a ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/JkhX5W7JoWI/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/JkhX5W7JoWI/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "vidIMG": "https://i.ytimg.com/vi/JkhX5W7JoWI/default.jpg"
  },
  {
    "id": "eIa3SBFYe_A",
    "link": "https://www.youtube.com/watch?v=eIa3SBFYe_A",
    "kind": "youtube#video",
    "publishedAt": "2015-07-29T05:23:26.000Z",
    "channelId": "UCKAqou7V9FAWXpZd9xtOg3Q",
    "channelTitle": "Little Baby Bum - Nursery Rhymes & Kids Songs",
    "title": "Rock A Bye Baby | Classic Lullaby | Nursery Rhymes by LittleBabyBum!",
    "description": "Download LBB videos ▻ https://wayokids.com/littlebabybum Plush Toys ▻http://littlebabybum.com/shop/plush-toys/ © El Bebe Productions Limited - part of ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/eIa3SBFYe_A/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/eIa3SBFYe_A/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "vidIMG": "https://i.ytimg.com/vi/eIa3SBFYe_A/default.jpg"
  },
  {
    "id": "swPt9HBRXuE",
    "link": "https://www.youtube.com/watch?v=swPt9HBRXuE",
    "kind": "youtube#video",
    "publishedAt": "2009-02-27T22:16:37.000Z",
    "channelId": "UCWEtnEiVwUy7mwFeshyAWLA",
    "channelTitle": "RHINO",
    "title": "Whitesnake - Still of the Night (Official Music Video)",
    "description": "You're watching the official music video for Whitesnake - \"Still of the Night\" from the album 'Whitesnake' (1987) Subscribe to the Rhino Channel!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/swPt9HBRXuE/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/swPt9HBRXuE/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "vidIMG": "https://i.ytimg.com/vi/swPt9HBRXuE/default.jpg"
  },
  {
    "id": "b6iBclM2CkI",
    "link": "https://www.youtube.com/watch?v=b6iBclM2CkI",
    "kind": "youtube#video",
    "publishedAt": "2018-09-22T03:42:43.000Z",
    "channelId": "UC3t8VzN8aICGfFmOSVTeBmQ",
    "channelTitle": "SoundMix Dj【ツ】HD",
    "title": "Classic Rock Greatest Hits 60s,70s,80s || Rock Clasicos Universal - Vol.2",
    "description": "The Best of Rock of the 60s, 70s, 80s, Classic Rock Greatest Hits Rock Clásicos Universales , 3 Décadas de Rock and Roll ----- Classic Rock Greatest Hits ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/b6iBclM2CkI/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/b6iBclM2CkI/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "vidIMG": "https://i.ytimg.com/vi/b6iBclM2CkI/default.jpg"
  },
  {
    "id": "qjuEXKwnkLE",
    "link": "https://www.youtube.com/watch?v=qjuEXKwnkLE",
    "kind": "youtube#video",
    "publishedAt": "2019-01-18T09:00:05.000Z",
    "channelId": "UCWEtnEiVwUy7mwFeshyAWLA",
    "channelTitle": "RHINO",
    "title": "Skid Row - I Remember You (Official Music Video)",
    "description": "You're watching the official music video for Skid Row - 'I Remember You' from the 1989 album 'Skid Row'. Released as the third single from 'Skid Row', ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/qjuEXKwnkLE/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/qjuEXKwnkLE/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "vidIMG": "https://i.ytimg.com/vi/qjuEXKwnkLE/default.jpg"
  },
  {
    "id": "QEg6015_6F4",
    "link": "https://www.youtube.com/watch?v=QEg6015_6F4",
    "kind": "youtube#video",
    "publishedAt": "2016-03-25T16:00:01.000Z",
    "channelId": "UCGQXvbjVgAJle2_TCA3SbVw",
    "channelTitle": "RockandRoll",
    "title": "Best of Rock &#39;n&#39; Roll Mix  - 50s &amp; 60s",
    "description": "Best of rock 'n' roll mix - 50s & 60s. The greatest party rock and roll mix with the hits from the 50s & 60s. Visit us on facebook: ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/QEg6015_6F4/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/QEg6015_6F4/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "vidIMG": "https://i.ytimg.com/vi/QEg6015_6F4/default.jpg"
  }

  ]
};

var testsongData = {
classicRock : [
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXRqgorJj26U"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXRqgorJj26U",
    "id": "37i9dQZF1DWXRqgorJj26U",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f00000002bd95dafe0c7057ebd57f5aee",
        "width": null
      }
    ],
    "name": "Rock Classics",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDU3MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWXRqgorJj26U/tracks",
      "total": 150
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DWXRqgorJj26U",
    "pic": "https://i.scdn.co/image/ab67706f00000002bd95dafe0c7057ebd57f5aee"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/5BygwTQ3OrbiwVsQhXFHMz"
    },
    "href": "https://api.spotify.com/v1/playlists/5BygwTQ3OrbiwVsQhXFHMz",
    "id": "5BygwTQ3OrbiwVsQhXFHMz",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/25350f1e1cbe40f763caffacf1a0ce1d7639cec2",
        "width": null
      }
    ],
    "name": "Classic Rock",
    "owner": {
      "display_name": "Filtr Finland",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/sonymusicfinland"
      },
      "href": "https://api.spotify.com/v1/users/sonymusicfinland",
      "id": "sonymusicfinland",
      "type": "user",
      "uri": "spotify:user:sonymusicfinland"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTA1Nyw2Njg4MTFjZDgxNzE1ZWU5YTQyNTkxMzhmZjMwOGU0MGVmNzE4MmI5",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/5BygwTQ3OrbiwVsQhXFHMz/tracks",
      "total": 115
    },
    "type": "playlist",
    "uri": "spotify:playlist:5BygwTQ3OrbiwVsQhXFHMz",
    "pic": "https://pl.scdn.co/images/pl/default/25350f1e1cbe40f763caffacf1a0ce1d7639cec2"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdOEFt9ZX0dh"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdOEFt9ZX0dh",
    "id": "37i9dQZF1DXdOEFt9ZX0dh",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f00000002a019090ff288b5a4aacac170",
        "width": null
      }
    ],
    "name": "Classic Rock Drive",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDUxOCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdOEFt9ZX0dh/tracks",
      "total": 100
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DXdOEFt9ZX0dh",
    "pic": "https://i.scdn.co/image/ab67706f00000002a019090ff288b5a4aacac170"
  }
],
alternative: [
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX873GaRGUmPl"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX873GaRGUmPl",
    "id": "37i9dQZF1DX873GaRGUmPl",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/4a3d0ccebd70da1860b92c1b582d2b5fcc6fb6c9",
        "width": null
      }
    ],
    "name": "Alternative 10s",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDUxOCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX873GaRGUmPl/tracks",
      "total": 80
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DX873GaRGUmPl",
    "pic": "https://pl.scdn.co/images/pl/default/4a3d0ccebd70da1860b92c1b582d2b5fcc6fb6c9"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaLI8a395lse"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaLI8a395lse",
    "id": "37i9dQZF1DXaLI8a395lse",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f00000002c45aec74e57bdcee147cee04",
        "width": null
      }
    ],
    "name": "Alternative 90s",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDUyNCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaLI8a395lse/tracks",
      "total": 80
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DXaLI8a395lse",
    "pic": "https://i.scdn.co/image/ab67706f00000002c45aec74e57bdcee147cee04"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXdTCdwCKzXwo"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdTCdwCKzXwo",
    "id": "37i9dQZF1DXdTCdwCKzXwo",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f000000026ae33e22093ced41760fb0c0",
        "width": null
      }
    ],
    "name": "Early Alternative",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDUxMSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXdTCdwCKzXwo/tracks",
      "total": 75
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DXdTCdwCKzXwo",
    "pic": "https://i.scdn.co/image/ab67706f000000026ae33e22093ced41760fb0c0"
  }
],
country: [
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/6gXgPeZLfob30T6RSoy9nb"
    },
    "href": "https://api.spotify.com/v1/playlists/6gXgPeZLfob30T6RSoy9nb",
    "id": "6gXgPeZLfob30T6RSoy9nb",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/9e3acac54649778f424c084634bccdf55219f557",
        "width": null
      }
    ],
    "name": "2000 Country Music",
    "owner": {
      "display_name": "Lexi Rangel",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/225maj3hqpdbqhxihtfoyphdy"
      },
      "href": "https://api.spotify.com/v1/users/225maj3hqpdbqhxihtfoyphdy",
      "id": "225maj3hqpdbqhxihtfoyphdy",
      "type": "user",
      "uri": "spotify:user:225maj3hqpdbqhxihtfoyphdy"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MjAzOCwyNjczNDYwZjI2ZjY0NmI2NWVmMWQ4M2FjZmE3YmM4MzNlYTgxOTY2",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/6gXgPeZLfob30T6RSoy9nb/tracks",
      "total": 297
    },
    "type": "playlist",
    "uri": "spotify:playlist:6gXgPeZLfob30T6RSoy9nb",
    "pic": "https://pl.scdn.co/images/pl/default/9e3acac54649778f424c084634bccdf55219f557"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTkxQvqMy4WW"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTkxQvqMy4WW",
    "id": "37i9dQZF1DWTkxQvqMy4WW",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f00000002359cd817aa6f993058b045ef",
        "width": null
      }
    ],
    "name": "Chillin' on a Dirt Road",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDc2MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTkxQvqMy4WW/tracks",
      "total": 50
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DWTkxQvqMy4WW",
    "pic": "https://i.scdn.co/image/ab67706f00000002359cd817aa6f993058b045ef"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWZBCPUIUs2iR"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZBCPUIUs2iR",
    "id": "37i9dQZF1DWZBCPUIUs2iR",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/ac6570113c27718d47024e746126252efc6de7aa",
        "width": null
      }
    ],
    "name": "Country Music 101:  Country's Greatest Hits",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU2NTg4Nzg1NCwwMDAwMDAwNzAwMDAwMTZjOTYzMDc5NjMwMDAwMDE2YmI3ZjNlMjlm",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWZBCPUIUs2iR/tracks",
      "total": 99
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DWZBCPUIUs2iR",
    "pic": "https://pl.scdn.co/images/pl/default/ac6570113c27718d47024e746126252efc6de7aa"
  }
],
jazz: [
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/7jHEx7oHxN4B7PKCLapcq9"
    },
    "href": "https://api.spotify.com/v1/playlists/7jHEx7oHxN4B7PKCLapcq9",
    "id": "7jHEx7oHxN4B7PKCLapcq9",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/3abb8d92d129a07a96c9b12c2d6fc48a1f2bb907",
        "width": null
      }
    ],
    "name": "Jazz Study Music",
    "owner": {
      "display_name": "_siri_xox",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/_siri_xox"
      },
      "href": "https://api.spotify.com/v1/users/_siri_xox",
      "id": "_siri_xox",
      "type": "user",
      "uri": "spotify:user:_siri_xox"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTAsMmUwZGVlOGNjNTRjODA5NWJjYmIwNjc0ZjJjZTRlMjU4ZmZmMzY3Yg==",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/7jHEx7oHxN4B7PKCLapcq9/tracks",
      "total": 45
    },
    "type": "playlist",
    "uri": "spotify:playlist:7jHEx7oHxN4B7PKCLapcq9",
    "pic": "https://pl.scdn.co/images/pl/default/3abb8d92d129a07a96c9b12c2d6fc48a1f2bb907"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX55dNU0PWnO5"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX55dNU0PWnO5",
    "id": "37i9dQZF1DX55dNU0PWnO5",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f0000000274c56c144d98678a0096ada0",
        "width": null
      }
    ],
    "name": "Jazztronica",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDc0NCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX55dNU0PWnO5/tracks",
      "total": 73
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DX55dNU0PWnO5",
    "pic": "https://i.scdn.co/image/ab67706f0000000274c56c144d98678a0096ada0"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/71tQFRd9OWYWWSQdxLQccn"
    },
    "href": "https://api.spotify.com/v1/playlists/71tQFRd9OWYWWSQdxLQccn",
    "id": "71tQFRd9OWYWWSQdxLQccn",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/d9b24713719be31c2f74fdf7b2cfb7d4cd54c67b",
        "width": null
      }
    ],
    "name": "Relaxing Jazz Background Music",
    "owner": {
      "display_name": "jazz_jazz_jazz75",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/jazz_jazz_jazz75"
      },
      "href": "https://api.spotify.com/v1/users/jazz_jazz_jazz75",
      "id": "jazz_jazz_jazz75",
      "type": "user",
      "uri": "spotify:user:jazz_jazz_jazz75"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTc0OSw0NmY5NDM3NDZjZTUwMGU3NWQwNzEwNmFlMTk0NWIyZmYyYzY3MjI2",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/71tQFRd9OWYWWSQdxLQccn/tracks",
      "total": 640
    },
    "type": "playlist",
    "uri": "spotify:playlist:71tQFRd9OWYWWSQdxLQccn",
    "pic": "https://pl.scdn.co/images/pl/default/d9b24713719be31c2f74fdf7b2cfb7d4cd54c67b"
  }
],
punk: [
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXd6tJtr4qeot"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXd6tJtr4qeot",
    "id": "37i9dQZF1DXd6tJtr4qeot",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f00000002c4a849a08c440c42ce5ba2d3",
        "width": null
      }
    ],
    "name": "Punk Essentials",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDE1MCwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXd6tJtr4qeot/tracks",
      "total": 50
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DXd6tJtr4qeot",
    "pic": "https://i.scdn.co/image/ab67706f00000002c4a849a08c440c42ce5ba2d3"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX0BZrbvIqxCd"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0BZrbvIqxCd",
    "id": "37i9dQZF1DX0BZrbvIqxCd",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f00000002cdd00bbaf81afca64b836e03",
        "width": null
      }
    ],
    "name": "Punk Rock Workout",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDE1NywwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX0BZrbvIqxCd/tracks",
      "total": 75
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DX0BZrbvIqxCd",
    "pic": "https://i.scdn.co/image/ab67706f00000002cdd00bbaf81afca64b836e03"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaDzsRodF91I"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaDzsRodF91I",
    "id": "37i9dQZF1DXaDzsRodF91I",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f000000029f562efe951b75663cb43fa7",
        "width": null
      }
    ],
    "name": "Covered In Punk",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDE1MiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaDzsRodF91I/tracks",
      "total": 50
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DXaDzsRodF91I",
    "pic": "https://i.scdn.co/image/ab67706f000000029f562efe951b75663cb43fa7"
  }
],
indie: [
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/552HZTSOgLmras3MaDvbkV"
    },
    "href": "https://api.spotify.com/v1/playlists/552HZTSOgLmras3MaDvbkV",
    "id": "552HZTSOgLmras3MaDvbkV",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/059986ba23c1f4449ebc79aaf1afef629be3e453",
        "width": null
      }
    ],
    "name": "Sr Indie Music",
    "owner": {
      "display_name": "Jonatan Gutierrez",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/3whyf3u8z6j5aizjoqu5a203c"
      },
      "href": "https://api.spotify.com/v1/users/3whyf3u8z6j5aizjoqu5a203c",
      "id": "3whyf3u8z6j5aizjoqu5a203c",
      "type": "user",
      "uri": "spotify:user:3whyf3u8z6j5aizjoqu5a203c"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTg4LDI0ZjhiMTQzOTg1NmUwMzNmOGRmYzc0ZWI2ODE2NTk3ZmU4Yzk0Zjc=",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/552HZTSOgLmras3MaDvbkV/tracks",
      "total": 158
    },
    "type": "playlist",
    "uri": "spotify:playlist:552HZTSOgLmras3MaDvbkV",
    "pic": "https://pl.scdn.co/images/pl/default/059986ba23c1f4449ebc79aaf1afef629be3e453"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8OdFBus1U8c"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8OdFBus1U8c",
    "id": "37i9dQZF1DX8OdFBus1U8c",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/053a59811e8a527ae992047527866ff82ab2a7bd",
        "width": null
      }
    ],
    "name": "Malayalam Indie",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU2NTMzOTQ3MCwwMDAwMDAwNjAwMDAwMTZjNzU4MGNhNGIwMDAwMDE2YmJiZGFiMmI2",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8OdFBus1U8c/tracks",
      "total": 33
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DX8OdFBus1U8c",
    "pic": "https://pl.scdn.co/images/pl/default/053a59811e8a527ae992047527866ff82ab2a7bd"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX4o1oenSJRJd"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4o1oenSJRJd",
    "id": "37i9dQZF1DX4o1oenSJRJd",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f00000002199f7cb02da81d08f730ba30",
        "width": null
      }
    ],
    "name": "All Out 00s",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDY2MiwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX4o1oenSJRJd/tracks",
      "total": 100
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DX4o1oenSJRJd",
    "pic": "https://i.scdn.co/image/ab67706f00000002199f7cb02da81d08f730ba30"
  }
],
hiphop: [
  {
  "collaborative": false,
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWTqYqGLu7kTX"
  },
  "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTqYqGLu7kTX",
  "id": "37i9dQZF1DWTqYqGLu7kTX",
  "images": [
    {
      "height": null,
      "url": "https://pl.scdn.co/images/pl/default/4791f703e618fa8ecc2759d10ae447b098aefdf0",
      "width": null
    }
  ],
  "name": "Hip Te Hop",
  "owner": {
    "display_name": "Spotify",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/spotify"
    },
    "href": "https://api.spotify.com/v1/users/spotify",
    "id": "spotify",
    "type": "user",
    "uri": "spotify:user:spotify"
  },
  "primary_color": null,
  "public": null,
  "snapshot_id": "MTU3NDc1OTE0NSwwMDAwMDA2NTAwMDAwMTZlYTZmNWExYWEwMDAwMDE2ZGI0NGNlYWNk",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWTqYqGLu7kTX/tracks",
    "total": 76
  },
  "type": "playlist",
  "uri": "spotify:playlist:37i9dQZF1DWTqYqGLu7kTX",
  "pic": "https://pl.scdn.co/images/pl/default/4791f703e618fa8ecc2759d10ae447b098aefdf0"
},
{
  "collaborative": false,
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/4OrmIW22XCKdqgbXcypQap"
  },
  "href": "https://api.spotify.com/v1/playlists/4OrmIW22XCKdqgbXcypQap",
  "id": "4OrmIW22XCKdqgbXcypQap",
  "images": [
    {
      "height": null,
      "url": "https://pl.scdn.co/images/pl/default/0317f46ab14bc43eece5564c67b0d0ddaec779d6",
      "width": null
    }
  ],
  "name": "Hip Hop Trap Music",
  "owner": {
    "display_name": "henry",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/ymfthm09tbmc01pbg3nirekus"
    },
    "href": "https://api.spotify.com/v1/users/ymfthm09tbmc01pbg3nirekus",
    "id": "ymfthm09tbmc01pbg3nirekus",
    "type": "user",
    "uri": "spotify:user:ymfthm09tbmc01pbg3nirekus"
  },
  "primary_color": null,
  "public": null,
  "snapshot_id": "MjkyMSxjMmM3MDJjYmRmMTAyOWMwZTFhMTI1Zjg1M2E2ZjM3MjU1Y2NkZjBh",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/4OrmIW22XCKdqgbXcypQap/tracks",
    "total": 20
  },
  "type": "playlist",
  "uri": "spotify:playlist:4OrmIW22XCKdqgbXcypQap",
  "pic": "https://pl.scdn.co/images/pl/default/0317f46ab14bc43eece5564c67b0d0ddaec779d6"
},
{
  "collaborative": false,
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM"
  },
  "href": "https://api.spotify.com/v1/playlists/0vvXsWCC9xrXsKd4FyS8kM",
  "id": "0vvXsWCC9xrXsKd4FyS8kM",
  "images": [
    {
      "height": null,
      "url": "https://pl.scdn.co/images/pl/default/902e1adb4722c5089c446bddb4a318e0784da964",
      "width": null
    }
  ],
  "name": "lofi hip hop music - beats to relax/study to",
  "owner": {
    "display_name": "chilledcow",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/chilledcow"
    },
    "href": "https://api.spotify.com/v1/users/chilledcow",
    "id": "chilledcow",
    "type": "user",
    "uri": "spotify:user:chilledcow"
  },
  "primary_color": null,
  "public": null,
  "snapshot_id": "MTc5LDE1YzdiZmQwNmNjMzZlYzQxMWU1Zjk5YmI4M2U5OGQ3ZjI0NDYwM2Q=",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/0vvXsWCC9xrXsKd4FyS8kM/tracks",
    "total": 208
  },
  "type": "playlist",
  "uri": "spotify:playlist:0vvXsWCC9xrXsKd4FyS8kM",
  "pic": "https://pl.scdn.co/images/pl/default/902e1adb4722c5089c446bddb4a318e0784da964"
}
],
dance: [
  {
  "collaborative": false,
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX8xfQRRX1PDm"
  },
  "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8xfQRRX1PDm",
  "id": "37i9dQZF1DX8xfQRRX1PDm",
  "images": [
    {
      "height": null,
      "url": "https://pl.scdn.co/images/pl/default/e33bc32c90240399ca10ff7d1880cbc0619e8895",
      "width": null
    }
  ],
  "name": "Bollywood Dance Music",
  "owner": {
    "display_name": "Spotify",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/spotify"
    },
    "href": "https://api.spotify.com/v1/users/spotify",
    "id": "spotify",
    "type": "user",
    "uri": "spotify:user:spotify"
  },
  "primary_color": null,
  "public": null,
  "snapshot_id": "MTU3MjQyNzE4OCwwMDAwMDAwZTAwMDAwMTZlMWJmNmM4OWEwMDAwMDE2OTJkODU5Y2Nk",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX8xfQRRX1PDm/tracks",
    "total": 38
  },
  "type": "playlist",
  "uri": "spotify:playlist:37i9dQZF1DX8xfQRRX1PDm",
  "pic": "https://pl.scdn.co/images/pl/default/e33bc32c90240399ca10ff7d1880cbc0619e8895"
},
{
  "collaborative": false,
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWSqPHam7LOqC"
  },
  "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSqPHam7LOqC",
  "id": "37i9dQZF1DWSqPHam7LOqC",
  "images": [
    {
      "height": null,
      "url": "https://i.scdn.co/image/ab67706f00000002172c032183294c89908c5b6c",
      "width": null
    }
  ],
  "name": "New Dance Revolution",
  "owner": {
    "display_name": "Spotify",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/spotify"
    },
    "href": "https://api.spotify.com/v1/users/spotify",
    "id": "spotify",
    "type": "user",
    "uri": "spotify:user:spotify"
  },
  "primary_color": null,
  "public": null,
  "snapshot_id": "MTU3NDY5OTA2NSwwMDAwMDBhNDAwMDAwMTZlYTM2MGUwMDgwMDAwMDE2ZThlMGMzOWU5",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DWSqPHam7LOqC/tracks",
    "total": 64
  },
  "type": "playlist",
  "uri": "spotify:playlist:37i9dQZF1DWSqPHam7LOqC",
  "pic": "https://i.scdn.co/image/ab67706f00000002172c032183294c89908c5b6c"
},
{
  "collaborative": false,
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/3DK2wJUk9AHshhdpndHVqX"
  },
  "href": "https://api.spotify.com/v1/playlists/3DK2wJUk9AHshhdpndHVqX",
  "id": "3DK2wJUk9AHshhdpndHVqX",
  "images": [
    {
      "height": null,
      "url": "https://pl.scdn.co/images/pl/default/86d7551c5c565bec5d3667b74ee32a287cd97d6d",
      "width": null
    }
  ],
  "name": "EDM Dance Music",
  "owner": {
    "display_name": "henry",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/ymfthm09tbmc01pbg3nirekus"
    },
    "href": "https://api.spotify.com/v1/users/ymfthm09tbmc01pbg3nirekus",
    "id": "ymfthm09tbmc01pbg3nirekus",
    "type": "user",
    "uri": "spotify:user:ymfthm09tbmc01pbg3nirekus"
  },
  "primary_color": null,
  "public": null,
  "snapshot_id": "MTE1NCwxNzFhMTA1MjVkOGNhNmZkZDBjYmYzMWU4NzJhZWUyNmE3ZmMyYTJm",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/3DK2wJUk9AHshhdpndHVqX/tracks",
    "total": 19
  },
  "type": "playlist",
  "uri": "spotify:playlist:3DK2wJUk9AHshhdpndHVqX",
  "pic": "https://pl.scdn.co/images/pl/default/86d7551c5c565bec5d3667b74ee32a287cd97d6d"
}
],
rock: [
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXaf9K2UnDhgp"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaf9K2UnDhgp",
    "id": "37i9dQZF1DXaf9K2UnDhgp",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f000000025212d0f37414c322e360b3e5",
        "width": null
      }
    ],
    "name": "Rock Christmas",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDgxMDA4MSwwMDAwMDAwMGQ0MWQ4Y2Q5OGYwMGIyMDRlOTgwMDk5OGVjZjg0Mjdl",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXaf9K2UnDhgp/tracks",
      "total": 70
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DXaf9K2UnDhgp",
    "pic": "https://i.scdn.co/image/ab67706f000000025212d0f37414c322e360b3e5"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/5w6VLpEf4yquKQleXsK8Af"
    },
    "href": "https://api.spotify.com/v1/playlists/5w6VLpEf4yquKQleXsK8Af",
    "id": "5w6VLpEf4yquKQleXsK8Af",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/ddb2af789002b0a9ce755009c5224ff6b27b204d",
        "width": null
      }
    ],
    "name": "Gym Rock Music",
    "owner": {
      "display_name": "Tommy Druk",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/124581545"
      },
      "href": "https://api.spotify.com/v1/users/124581545",
      "id": "124581545",
      "type": "user",
      "uri": "spotify:user:124581545"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MjA1MSxiNTcxZTAzMzVlMzUzNTMwMWY0ZWRlNmQ3YTg4YTAzZDExYmNkMjJi",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/5w6VLpEf4yquKQleXsK8Af/tracks",
      "total": 337
    },
    "type": "playlist",
    "uri": "spotify:playlist:5w6VLpEf4yquKQleXsK8Af",
    "pic": "https://pl.scdn.co/images/pl/default/ddb2af789002b0a9ce755009c5224ff6b27b204d"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/6MKnPAOIRop4VTyQmhkJRT"
    },
    "href": "https://api.spotify.com/v1/playlists/6MKnPAOIRop4VTyQmhkJRT",
    "id": "6MKnPAOIRop4VTyQmhkJRT",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/b65b87e3086323b21907998c690e6af6b1bc1b52",
        "width": null
      }
    ],
    "name": "AMV-Rock Music",
    "owner": {
      "display_name": "Daniel Amarilla",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/danielamarilla"
      },
      "href": "https://api.spotify.com/v1/users/danielamarilla",
      "id": "danielamarilla",
      "type": "user",
      "uri": "spotify:user:danielamarilla"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTM0LDM1ZGEyZmY1YTBkZjY5ZGVlYmNhNTBjNDY2NDQ0Mjk5YmI4ZWRiNzE=",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/6MKnPAOIRop4VTyQmhkJRT/tracks",
      "total": 104
    },
    "type": "playlist",
    "uri": "spotify:playlist:6MKnPAOIRop4VTyQmhkJRT",
    "pic": "https://pl.scdn.co/images/pl/default/b65b87e3086323b21907998c690e6af6b1bc1b52"
  }
],
metal: [
  {
  "collaborative": false,
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/0VEri7WKnnwZ9Eu7RIhzPK"
  },
  "href": "https://api.spotify.com/v1/playlists/0VEri7WKnnwZ9Eu7RIhzPK",
  "id": "0VEri7WKnnwZ9Eu7RIhzPK",
  "images": [
    {
      "height": null,
      "url": "https://pl.scdn.co/images/pl/default/f5d0385728408e4d3881592dec8a7e7f9ae3331b",
      "width": null
    }
  ],
  "name": "Rock/Metal",
  "owner": {
    "display_name": "exsorz",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/exsorz"
    },
    "href": "https://api.spotify.com/v1/users/exsorz",
    "id": "exsorz",
    "type": "user",
    "uri": "spotify:user:exsorz"
  },
  "primary_color": null,
  "public": null,
  "snapshot_id": "MTQ0MCw0YjVkNWJiOWU0ZTAyNmViY2YwN2I0OGRjNGY4MjExNGUyMjIxNzM1",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/0VEri7WKnnwZ9Eu7RIhzPK/tracks",
    "total": 1129
  },
  "type": "playlist",
  "uri": "spotify:playlist:0VEri7WKnnwZ9Eu7RIhzPK",
  "pic": "https://pl.scdn.co/images/pl/default/f5d0385728408e4d3881592dec8a7e7f9ae3331b"
},
{
  "collaborative": false,
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/0ICQ0Roo2RroMLNUHorYNg"
  },
  "href": "https://api.spotify.com/v1/playlists/0ICQ0Roo2RroMLNUHorYNg",
  "id": "0ICQ0Roo2RroMLNUHorYNg",
  "images": [
    {
      "height": null,
      "url": "https://pl.scdn.co/images/pl/default/b4f859899623c2335ddf7cef0d6173477ee9a605",
      "width": null
    }
  ],
  "name": "Rock/Metal motivational",
  "owner": {
    "display_name": "Pieter Borgers",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/11177070373"
    },
    "href": "https://api.spotify.com/v1/users/11177070373",
    "id": "11177070373",
    "type": "user",
    "uri": "spotify:user:11177070373"
  },
  "primary_color": null,
  "public": null,
  "snapshot_id": "MjcyLDUxMGY5ZDZlNzY5OTk5ZDQ2Mjk5MWFmOTk4NDkxNTNmNDU0YzNhNzc=",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/0ICQ0Roo2RroMLNUHorYNg/tracks",
    "total": 124
  },
  "type": "playlist",
  "uri": "spotify:playlist:0ICQ0Roo2RroMLNUHorYNg",
  "pic": "https://pl.scdn.co/images/pl/default/b4f859899623c2335ddf7cef0d6173477ee9a605"
},
{
  "collaborative": false,
  "external_urls": {
    "spotify": "https://open.spotify.com/playlist/12dwJPPLTUBABbABa01Qsc"
  },
  "href": "https://api.spotify.com/v1/playlists/12dwJPPLTUBABbABa01Qsc",
  "id": "12dwJPPLTUBABbABa01Qsc",
  "images": [
    {
      "height": null,
      "url": "https://pl.scdn.co/images/pl/default/e15ca53acf207d82a5acc4ea0c572ffd53c74265",
      "width": null
    }
  ],
  "name": "Christian Rock/Metal",
  "owner": {
    "display_name": "Nate Reagan",
    "external_urls": {
      "spotify": "https://open.spotify.com/user/nateher0"
    },
    "href": "https://api.spotify.com/v1/users/nateher0",
    "id": "nateher0",
    "type": "user",
    "uri": "spotify:user:nateher0"
  },
  "primary_color": null,
  "public": null,
  "snapshot_id": "NTkxLDFmNTU5YTczMzJjZWQ1MzQwMGE1MDliM2FkNjJjNzQzNGM0N2E0ODM=",
  "tracks": {
    "href": "https://api.spotify.com/v1/playlists/12dwJPPLTUBABbABa01Qsc/tracks",
    "total": 381
  },
  "type": "playlist",
  "uri": "spotify:playlist:12dwJPPLTUBABbABa01Qsc",
  "pic": "https://pl.scdn.co/images/pl/default/e15ca53acf207d82a5acc4ea0c572ffd53c74265"
}
],
pop:[
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/5koaaedN3pa9RniU1N0ENn"
    },
    "href": "https://api.spotify.com/v1/playlists/5koaaedN3pa9RniU1N0ENn",
    "id": "5koaaedN3pa9RniU1N0ENn",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/9e99a13b207e16803ba3e11be0485341438a0f73",
        "width": null
      }
    ],
    "name": "Pop goes Punk & Metal Covers Collection",
    "owner": {
      "display_name": "Kenneth Kidmose Johnsen",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/1116409350"
      },
      "href": "https://api.spotify.com/v1/users/1116409350",
      "id": "1116409350",
      "type": "user",
      "uri": "spotify:user:1116409350"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "ODcyLGQwMjU3N2ZjOTFjYjhhNTUxNGI1Zjk4ODg1NzVmNzlmOWQ1NzhhYWE=",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/5koaaedN3pa9RniU1N0ENn/tracks",
      "total": 143
    },
    "type": "playlist",
    "uri": "spotify:playlist:5koaaedN3pa9RniU1N0ENn",
    "pic": "https://pl.scdn.co/images/pl/default/9e99a13b207e16803ba3e11be0485341438a0f73"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/6iKrloR17A7KeDD7PfYFO6"
    },
    "href": "https://api.spotify.com/v1/playlists/6iKrloR17A7KeDD7PfYFO6",
    "id": "6iKrloR17A7KeDD7PfYFO6",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/de4f2f8d6819ae37ae5246bdc8612ede77c7d953",
        "width": null
      }
    ],
    "name": "Pop Punk Music",
    "owner": {
      "display_name": "Collapse Agency",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/7bh2e7cozscui9yy9n7ab2ag7"
      },
      "href": "https://api.spotify.com/v1/users/7bh2e7cozscui9yy9n7ab2ag7",
      "id": "7bh2e7cozscui9yy9n7ab2ag7",
      "type": "user",
      "uri": "spotify:user:7bh2e7cozscui9yy9n7ab2ag7"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MzMsNDVmODEwMWViNmJiMjVlMGZkNTJjNjExMTIxZDYzMTE3ZDk5OGUyZA==",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/6iKrloR17A7KeDD7PfYFO6/tracks",
      "total": 25
    },
    "type": "playlist",
    "uri": "spotify:playlist:6iKrloR17A7KeDD7PfYFO6",
    "pic": "https://pl.scdn.co/images/pl/default/de4f2f8d6819ae37ae5246bdc8612ede77c7d953"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/3NgkCmLvO7UrtMsVBEeFVU"
    },
    "href": "https://api.spotify.com/v1/playlists/3NgkCmLvO7UrtMsVBEeFVU",
    "id": "3NgkCmLvO7UrtMsVBEeFVU",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/39baf613279ed82340dabe30302573af2c82ae24",
        "width": null
      }
    ],
    "name": "Hits Of The 70s",
    "owner": {
      "display_name": "Filtr Sweden",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/sonymusicentertainment"
      },
      "href": "https://api.spotify.com/v1/users/sonymusicentertainment",
      "id": "sonymusicentertainment",
      "type": "user",
      "uri": "spotify:user:sonymusicentertainment"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MzI0LDc3YzAzODZiMTJkMWRjYmJhZTRiZWY4Njk5YTM4MjY3NmZhNTlhMDM=",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/3NgkCmLvO7UrtMsVBEeFVU/tracks",
      "total": 81
    },
    "type": "playlist",
    "uri": "spotify:playlist:3NgkCmLvO7UrtMsVBEeFVU",
    "pic": "https://pl.scdn.co/images/pl/default/39baf613279ed82340dabe30302573af2c82ae24"
  }  
],
blues: [
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXd9rSDyQguIk"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXd9rSDyQguIk",
    "id": "37i9dQZF1DXd9rSDyQguIk",
    "images": [
      {
        "height": null,
        "url": "https://pl.scdn.co/images/pl/default/d62f5649872882f76ff10c3ae8c7fba728dfb5d5",
        "width": null
      }
    ],
    "name": "Blues Classics",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU0ODc2MjkzMSwwMDAwMDAwMjAwMDAwMTYyNzM0OWVlZDIwMDAwMDE2ODk5NzZkZjM4",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXd9rSDyQguIk/tracks",
      "total": 40
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DXd9rSDyQguIk",
    "pic": "https://pl.scdn.co/images/pl/default/d62f5649872882f76ff10c3ae8c7fba728dfb5d5"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXbkKnGZHv1kf"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbkKnGZHv1kf",
    "id": "37i9dQZF1DXbkKnGZHv1kf",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f00000002e8d2d867e32fdaa12aa79d57",
        "width": null
      }
    ],
    "name": "Blues Origins",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU2NzY3NTkzOSwwMDAwMDAyNTAwMDAwMTYyNzI5NTUzZDkwMDAwMDE2ZDAwYzQ3OGQx",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXbkKnGZHv1kf/tracks",
      "total": 50
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DXbkKnGZHv1kf",
    "pic": "https://i.scdn.co/image/ab67706f00000002e8d2d867e32fdaa12aa79d57"
  },
  {
    "collaborative": false,
    "external_urls": {
      "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2iUghHXGIjj"
    },
    "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2iUghHXGIjj",
    "id": "37i9dQZF1DX2iUghHXGIjj",
    "images": [
      {
        "height": null,
        "url": "https://i.scdn.co/image/ab67706f000000028a4af4b38032ff08fbf0c77c",
        "width": null
      }
    ],
    "name": "Acoustic Blues",
    "owner": {
      "display_name": "Spotify",
      "external_urls": {
        "spotify": "https://open.spotify.com/user/spotify"
      },
      "href": "https://api.spotify.com/v1/users/spotify",
      "id": "spotify",
      "type": "user",
      "uri": "spotify:user:spotify"
    },
    "primary_color": null,
    "public": null,
    "snapshot_id": "MTU3NDA3OTU2NSwwMDAwMDAzNTAwMDAwMTZkOTVmZDIzNmQwMDAwMDE2ZTdlNzQwZmE2",
    "tracks": {
      "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2iUghHXGIjj/tracks",
      "total": 77
    },
    "type": "playlist",
    "uri": "spotify:playlist:37i9dQZF1DX2iUghHXGIjj",
    "pic": "https://i.scdn.co/image/ab67706f000000028a4af4b38032ff08fbf0c77c"
  }
]
};
module.exports = testData, testsongData;
