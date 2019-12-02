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


module.exports = testData;

