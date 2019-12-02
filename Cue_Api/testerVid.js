// Validation
const gradient = require("gradient-string");
console.log(
  `${gradient.summer("/api/testerVid.js loaded")}\n=========================\n`
);

// data storage for data pulled from youtube api stored locally
var testData = {
  alternative: [
    {
      id: "xPU8OAjjS4k",
      link: "https://www.youtube.com/watch?v=xPU8OAjjS4k",
      kind: "youtube#video",
      publishedAt: "2009-11-21T11:22:55.000Z",
      channelId: "UCRxxOhTdsfA0hdvDG9Tb0HA",
      channelTitle: "3DoorsDownVEVO",
      title: "3 Doors Down - Kryptonite (Official Video)",
      description:
        "Music video by 3 Doors Down performing Kryptonite. (C) 2000 Universal Records, a Division of UMG Recordings, Inc. #3DoorsDown #Kryptonite #Vevo.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/xPU8OAjjS4k/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/xPU8OAjjS4k/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/xPU8OAjjS4k/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/xPU8OAjjS4k/default.jpg"
    },
    {
      id: "WC5FdFlUcl0",
      link: "https://www.youtube.com/watch?v=WC5FdFlUcl0",
      kind: "youtube#video",
      publishedAt: "2009-06-16T23:09:57.000Z",
      channelId: "UCHc7ICbMq7vwaToJQeEtnrA",
      channelTitle: "AudioslaveVEVO",
      title: "Audioslave - Be Yourself (Official Music Video)",
      description:
        "REMASTERED IN HD! Music video by Audioslave performing Be Yourself. (C) 2005 Interscope Records and Sony BMG Entertainment #Audioslave #BeYourself ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WC5FdFlUcl0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WC5FdFlUcl0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WC5FdFlUcl0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WC5FdFlUcl0/default.jpg"
    },
    {
      id: "X-x7eZOdBFM",
      link: "https://www.youtube.com/watch?v=X-x7eZOdBFM",
      kind: "youtube#video",
      publishedAt: "2018-03-08T18:06:37.000Z",
      channelId: "UCBL7ZxVX4GvW4CFiES_-0YA",
      channelTitle: "Anne-Marie",
      title: "Marshmello &amp; Anne-Marie - FRIENDS [Alternative Music Video]",
      description:
        "KarateWithAnneMarie 🥋: https://www.youtube.com/watch?v=pQV4UpDbXUI&list=PLgzgA64MLAfmgnMaTQehB1fkyq1q3Vj4V Download FRIENDS by ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/X-x7eZOdBFM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/X-x7eZOdBFM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/X-x7eZOdBFM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/X-x7eZOdBFM/default.jpg"
    },
    {
      id: "tgIqecROs5M",
      link: "https://www.youtube.com/watch?v=tgIqecROs5M",
      kind: "youtube#video",
      publishedAt: "2014-04-21T21:29:36.000Z",
      channelId: "UC7qn3NBI3XV7d8I3cvZeABw",
      channelTitle: "Red Bull Records",
      title: "AWOLNATION - Sail (Official Music Video)",
      description:
        "Watch the new AWOLNATION video \"Handyman\" - https://youtu.be/nFWV97X_0Po Get AWOLNATION's new album, 'Here Come The Runts', available now at: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/tgIqecROs5M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/tgIqecROs5M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/tgIqecROs5M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/tgIqecROs5M/default.jpg"
    },
    {
      id: "NRtvqT_wMeY",
      link: "https://www.youtube.com/watch?v=NRtvqT_wMeY",
      kind: "youtube#video",
      publishedAt: "2010-02-26T18:47:23.000Z",
      channelId: "UCZcuTLHMeLI_njJwqb0GWDQ",
      channelTitle: "SoulAsylumVEVO",
      title: "Soul Asylum - Runaway Train (Official Video)",
      description:
        "Soul Asylum's official music video for 'Runaway Train'. Click to listen to Soul Asylum on Spotify: http://smarturl.it/SAsySpotify?IQid=S... As featured on Black Gold: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/NRtvqT_wMeY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/NRtvqT_wMeY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/NRtvqT_wMeY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/NRtvqT_wMeY/default.jpg"
    },
    {
      id: "fgT9zGkiLig",
      link: "https://www.youtube.com/watch?v=fgT9zGkiLig",
      kind: "youtube#video",
      publishedAt: "2009-10-25T20:30:23.000Z",
      channelId: "UCjvwoDIrMmlSOINUPZWM3CA",
      channelTitle: "IncubusVEVO",
      title: "Incubus - Drive (Official Music Video)",
      description:
        "Watch the official music video for \"Drive\" performed by Incubus Music video by Incubus performing Drive. (C) 2000 SONY BMG MUSIC ENTERTAINMENT ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fgT9zGkiLig/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/fgT9zGkiLig/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/fgT9zGkiLig/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/fgT9zGkiLig/default.jpg"
    },
    {
      id: "4aeETEoNfOg",
      link: "https://www.youtube.com/watch?v=4aeETEoNfOg",
      kind: "youtube#video",
      publishedAt: "2011-08-03T01:25:11.000Z",
      channelId: "UCflKJMyrnJNuD4eEvs9-5CA",
      channelTitle: "SmashingPumpkinsVEVO",
      title: "The Smashing Pumpkins - 1979 (Official Video)",
      description:
        "Official video for Smashing Pumpkins song \"1979\" from the album Mellon Collie and the Infinite Sadness. Buy It Here: http://smarturl.it/m91qrj Directed by the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4aeETEoNfOg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4aeETEoNfOg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4aeETEoNfOg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4aeETEoNfOg/default.jpg"
    },
    {
      id: "NRmSf9VqrUA",
      link: "https://www.youtube.com/watch?v=NRmSf9VqrUA",
      kind: "youtube#video",
      publishedAt: "2019-03-22T14:30:01.000Z",
      channelId: "UCEdvpU2pFRCVqU6yIPyTpMQ",
      channelTitle: "Marshmello",
      title:
        "Marshmello - Here With Me Feat. CHVRCHES [Alternative Music Video]",
      description:
        "Marshmello - Here With Me Feat. CHVRCHES [Alternative Music Video] Purchase/Stream 'Here With Me' ▷ https://marshmello.lnk.to/herewithme SHOP Limited ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/NRmSf9VqrUA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/NRmSf9VqrUA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/NRmSf9VqrUA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/NRmSf9VqrUA/default.jpg"
    },
    {
      id: "nMsZ6wkZWhA",
      link: "https://www.youtube.com/watch?v=nMsZ6wkZWhA",
      kind: "youtube#video",
      publishedAt: "2009-12-17T00:28:25.000Z",
      channelId: "UCjvwoDIrMmlSOINUPZWM3CA",
      channelTitle: "IncubusVEVO",
      title: "Incubus - Dig (Official Music Video)",
      description:
        "Incubus' official music video for 'Dig'. Click to listen to Incubus on Spotify: http://smarturl.it/InsubusSpotify?IQid=IncubusDig As featured on The Essential Incubus.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/nMsZ6wkZWhA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/nMsZ6wkZWhA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/nMsZ6wkZWhA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/nMsZ6wkZWhA/default.jpg"
    },
    {
      id: "opeETnB8m8w",
      link: "https://www.youtube.com/watch?v=opeETnB8m8w",
      kind: "youtube#video",
      publishedAt: "2014-09-04T17:58:17.000Z",
      channelId: "UCNMceJPDpB-1ZQJzh2PZ1qw",
      channelTitle: "CageTheElephantVEVO",
      title: "Cage The Elephant - Cigarette Daydreams (Official Music Video)",
      description:
        "Order \"\"Melophobia\" on iTunes now: http://smarturl.it/MelophobiaAlbum?IQid=yt Stream on Spotify: http://smarturl.it/MelophobiaSP?IQid=yt Music video by Cage ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/opeETnB8m8w/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/opeETnB8m8w/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/opeETnB8m8w/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/opeETnB8m8w/default.jpg"
    }
  ],
  blues: [
    {
      id: "71Gt46aX9Z4",
      link: "https://www.youtube.com/watch?v=71Gt46aX9Z4",
      kind: "youtube#video",
      publishedAt: "2017-04-18T16:17:27.000Z",
      channelId: "UCYY_YLVWFI_IZ51Eu6x9bgA",
      channelTitle: "Don's Tunes",
      title: "Gary B.B. Coleman - The Sky is Crying",
      description:
        "Album: Too Much Weekend https://amzn.to/2SwXcKO Lyrics: The sky is cryin....Can't you see the tears roll down the street The sky is cryin....Can't you see the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/71Gt46aX9Z4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/71Gt46aX9Z4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/71Gt46aX9Z4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/71Gt46aX9Z4/default.jpg"
    },
    {
      id: "9muzyOd4Lh8",
      link: "https://www.youtube.com/watch?v=9muzyOd4Lh8",
      kind: "youtube#video",
      publishedAt: "2006-10-14T15:27:06.000Z",
      channelId: "UCkq7qMbhhK67RSD10r8iyFQ",
      channelTitle: "RedBaron863",
      title: "The Moody Blues - Nights In White Satin",
      description:
        "One of the first official videos of \"Nights In White Satin\" in 1967. \"Nights\" in Paris. A timeless song.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9muzyOd4Lh8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/9muzyOd4Lh8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/9muzyOd4Lh8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/9muzyOd4Lh8/default.jpg"
    },
    {
      id: "4O_YMLDvvnw",
      link: "https://www.youtube.com/watch?v=4O_YMLDvvnw",
      kind: "youtube#video",
      publishedAt: "2006-11-01T18:42:51.000Z",
      channelId: "UCbEiEm0CAG9EOg4y5MjBqMQ",
      channelTitle: "UndeadKuntiz",
      title: "Gary Moore - Still Got The Blues (Live)",
      description: "Cry guitar, cry..",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4O_YMLDvvnw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4O_YMLDvvnw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4O_YMLDvvnw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4O_YMLDvvnw/default.jpg"
    },
    {
      id: "_sI_Ps7JSEk",
      link: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
      kind: "youtube#video",
      publishedAt: "2016-11-07T16:56:50.000Z",
      channelId: "UCLue5AhDOIpePYzlc3rOVVQ",
      channelTitle: "Jazz and Blues Experience",
      title: "New York Jazz Lounge - Bar Jazz Classics",
      description:
        "Great compilation of relaxing Bar Jazz Classics. Stream/Download here: https://lnk.to/NYJL_BJC Check out PART II of our Bar Jazz Classics by New York Jazz ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_sI_Ps7JSEk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/_sI_Ps7JSEk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/_sI_Ps7JSEk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/_sI_Ps7JSEk/default.jpg"
    },
    {
      id: "h6KYAVn8ons",
      link: "https://www.youtube.com/watch?v=h6KYAVn8ons",
      kind: "youtube#video",
      publishedAt: "2010-09-01T16:45:25.000Z",
      channelId: "UCI8Ry7NdFNLel-S8dWU7mDA",
      channelTitle: "EltonJohnVEVO",
      title: "Elton John - I Guess That&#39;s Why They Call It The Blues",
      description:
        "The video for \"I Guess That's Why They Call It The Blues\" was filmed in the Rivoli Ballroom in London. The song, featuring Stevie Wonder on harmonica, was ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/h6KYAVn8ons/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/h6KYAVn8ons/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/h6KYAVn8ons/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/h6KYAVn8ons/default.jpg"
    },
    {
      id: "ioOzsi9aHQQ",
      link: "https://www.youtube.com/watch?v=ioOzsi9aHQQ",
      kind: "youtube#video",
      publishedAt: "2018-01-21T13:54:43.000Z",
      channelId: "UCYY_YLVWFI_IZ51Eu6x9bgA",
      channelTitle: "Don's Tunes",
      title: "Daniel Castro - I&#39;ll Play The Blues For You",
      description:
        "Album: No Surrender http://www.danielcastro.com/, https://www.ebay.com/itm/323224730947 , Albert King Cover Lyrics: If you're down and out and you feel real ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ioOzsi9aHQQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/ioOzsi9aHQQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/ioOzsi9aHQQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/ioOzsi9aHQQ/default.jpg"
    },
    {
      id: "4fk2prKnYnI",
      link: "https://www.youtube.com/watch?v=4fk2prKnYnI",
      kind: "youtube#video",
      publishedAt: "2009-07-21T16:32:30.000Z",
      channelId: "UCp0uxdUViQ2LTAqRePby68g",
      channelTitle: "Eagle Rock",
      title: "B. B. King - The Thrill Is Gone (Live at Montreux 1993)",
      description:
        "Available to order now at http://smarturl.it/BBKingMont93dvdbr More info at: https://smarturl.it/BBKingMont93 B.B. King is the greatest living exponent of the blues ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4fk2prKnYnI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4fk2prKnYnI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4fk2prKnYnI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4fk2prKnYnI/default.jpg"
    },
    {
      id: "An4uDegHB8s",
      link: "https://www.youtube.com/watch?v=An4uDegHB8s",
      kind: "youtube#video",
      publishedAt: "2013-04-29T06:02:37.000Z",
      channelId: "UCHjd1dZM1mz4uASmeGhW6eQ",
      channelTitle: "American Blues Scene",
      title: "Stevie Ray Vaughan - Little Wing",
      description:
        "http://www.americanbluesscene.com Welcome to American Blues Scene Magazine's video channel. If you like what you see and hear, check us out on ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/An4uDegHB8s/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/An4uDegHB8s/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/An4uDegHB8s/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/An4uDegHB8s/default.jpg"
    },
    {
      id: "d7Mxkap8XNc",
      link: "https://www.youtube.com/watch?v=d7Mxkap8XNc",
      kind: "youtube#video",
      publishedAt: "2016-03-04T08:00:00.000Z",
      channelId: "UC8mf8Qg-Py5MSb7RD6-pojw",
      channelTitle: "PokeyBearVEVO",
      title: "Pokey Bear - My Side Piece",
      description:
        "Music video for My Side Piece performed by Pokey Bear. http://www.pokeybear.com https://www.youtube.com/channel/UCDd1DZC-mQfoX35zBx65W3Q ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/d7Mxkap8XNc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/d7Mxkap8XNc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/d7Mxkap8XNc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/d7Mxkap8XNc/default.jpg"
    },
    {
      id: "G9x0wbKHos0",
      link: "https://www.youtube.com/watch?v=G9x0wbKHos0",
      kind: "youtube#video",
      publishedAt: "2009-10-03T20:38:23.000Z",
      channelId: "UCakbeXKVr0gPtcwOlkHKptg",
      channelTitle: "alanjacksonVEVO",
      title: "Alan Jackson - Summertime Blues (Official Music Video)",
      description:
        "Alan Jackson's official music video for 'Summertime Blues'. Click to listen to Alan Jackson on Spotify: http://smarturl.it/AJacksonSpot?IQid=AlanJsSB As featured ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/G9x0wbKHos0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/G9x0wbKHos0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/G9x0wbKHos0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/G9x0wbKHos0/default.jpg"
    }
  ],
  classical: [
    {
      id: "Rb0UmrCXxVA",
      link: "https://www.youtube.com/watch?v=Rb0UmrCXxVA",
      kind: "youtube#video",
      publishedAt: "2013-01-08T15:15:34.000Z",
      channelId: "UCyOfqgtsQaM3S-VZnsYnHjQ",
      channelTitle: "HALIDONMUSIC",
      title: "The Best of Mozart",
      description:
        "Buy the MP3 album on the Official Halidon Music Store: http://bit.ly/2qsbyj3 iTunes & Apple Music: https://apple.co/2UlEXsR Listen to our playlist on Spotify: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Rb0UmrCXxVA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Rb0UmrCXxVA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Rb0UmrCXxVA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/Rb0UmrCXxVA/default.jpg"
    },
    {
      id: "4Tr0otuiQuU",
      link: "https://www.youtube.com/watch?v=4Tr0otuiQuU",
      kind: "youtube#video",
      publishedAt: "2010-12-15T15:44:53.000Z",
      channelId: "UC1Prrgck1S6abc3yPWhc7Jw",
      channelTitle: "andrea romano",
      title: "Beethoven - Moonlight Sonata (FULL)",
      description:
        "Beethoven - Moonlight Sonata (FULL) - Piano Sonata No. 14 http://www.facebook.com/9Beethoven Instagram: https://www.instagram.com/andrearomanoandrea ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4Tr0otuiQuU/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4Tr0otuiQuU/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4Tr0otuiQuU/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4Tr0otuiQuU/default.jpg"
    },
    {
      id: "9E6b3swbnWg",
      link: "https://www.youtube.com/watch?v=9E6b3swbnWg",
      kind: "youtube#video",
      publishedAt: "2013-06-19T10:46:07.000Z",
      channelId: "UC1Prrgck1S6abc3yPWhc7Jw",
      channelTitle: "andrea romano",
      title: "Chopin - Nocturne op.9 No.2",
      description:
        "Nocturne in E-flat major, Op. 9, No. 2 Played by Vadim Chaimovich (https://www.youtube.com/vadimchaimovich) FB-Vadim: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9E6b3swbnWg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/9E6b3swbnWg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/9E6b3swbnWg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/9E6b3swbnWg/default.jpg"
    },
    {
      id: "jgpJVI3tDbY",
      link: "https://www.youtube.com/watch?v=jgpJVI3tDbY",
      kind: "youtube#video",
      publishedAt: "2015-03-02T14:48:55.000Z",
      channelId: "UC68KnvCZ-nJzmmuSu_tKASA",
      channelTitle: "Just Instrumental Music",
      title:
        "The Best of Classical Music - Mozart, Beethoven, Bach, Chopin... Classical Music Piano Playlist Mix",
      description:
        "3 HOURS The Best Classical Music Playlist Mix (Mozart, Beethoven, Bach, Chopin) Beautiful Piano, Violin & Orchestral Masterpieces by the greatest composers ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/jgpJVI3tDbY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/jgpJVI3tDbY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/jgpJVI3tDbY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/jgpJVI3tDbY/default.jpg"
    },
    {
      id: "YFD2PPAqNbw",
      link: "https://www.youtube.com/watch?v=YFD2PPAqNbw",
      kind: "youtube#video",
      publishedAt: "2014-02-05T11:00:42.000Z",
      channelId: "UCfPuO5IzFVtLMMjo38xEbUw",
      channelTitle: "Tat Parina",
      title: "Beethoven   Silence",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/YFD2PPAqNbw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/YFD2PPAqNbw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/YFD2PPAqNbw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/YFD2PPAqNbw/default.jpg"
    },
    {
      id: "wygy721nzRc",
      link: "https://www.youtube.com/watch?v=wygy721nzRc",
      kind: "youtube#video",
      publishedAt: "2012-10-04T12:20:38.000Z",
      channelId: "UCyOfqgtsQaM3S-VZnsYnHjQ",
      channelTitle: "HALIDONMUSIC",
      title: "The Best of Chopin",
      description:
        "Buy the MP3 album on the Official Halidon Music Store: http://bit.ly/VzxEKC Stream it on Spotify: https://spoti.fi/2NtSPPg iTunes & Apple Music: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/wygy721nzRc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/wygy721nzRc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/wygy721nzRc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/wygy721nzRc/default.jpg"
    },
    {
      id: "mmCnQDUSO4I",
      link: "https://www.youtube.com/watch?v=mmCnQDUSO4I",
      kind: "youtube#video",
      publishedAt: "2009-01-31T07:51:33.000Z",
      channelId: "UC5I_q7gLdDoBn8klaztNdkQ",
      channelTitle: "TheWickedNorth",
      title: "Dmitri Shostakovich -  Waltz No. 2",
      description: "Dmitri Shostakovich - Waltz No. 2.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mmCnQDUSO4I/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/mmCnQDUSO4I/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/mmCnQDUSO4I/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/mmCnQDUSO4I/default.jpg"
    },
    {
      id: "CvFH_6DNRCY",
      link: "https://www.youtube.com/watch?v=CvFH_6DNRCY",
      kind: "youtube#video",
      publishedAt: "2008-10-06T17:45:47.000Z",
      channelId: "UCW-5SJu1q2KvawG5prB5C4g",
      channelTitle: "CHANNEL3YOUTUBE",
      title: "CLAUDE DEBUSSY:  CLAIR DE LUNE",
      description:
        "PLEASE SUBSCRIBE= http://www.youtube.com/user/papadoc73?sub_confirmation=1 Stay current with our most recent uploads & updates Channel 3 YouTube.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/CvFH_6DNRCY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/CvFH_6DNRCY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/CvFH_6DNRCY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/CvFH_6DNRCY/default.jpg"
    },
    {
      id: "k1-TrAvp_xs",
      link: "https://www.youtube.com/watch?v=k1-TrAvp_xs",
      kind: "youtube#video",
      publishedAt: "2008-05-22T17:41:25.000Z",
      channelId: "UC32P7DjuuEE8tNrklT9S0Yg",
      channelTitle: "Rosa Music",
      title: "Mozart - Lacrimosa",
      description: "Mozart - Lacrimosa.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/k1-TrAvp_xs/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/k1-TrAvp_xs/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/k1-TrAvp_xs/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/k1-TrAvp_xs/default.jpg"
    },
    {
      id: "6JQm5aSjX6g",
      link: "https://www.youtube.com/watch?v=6JQm5aSjX6g",
      kind: "youtube#video",
      publishedAt: "2012-10-16T09:20:00.000Z",
      channelId: "UCyOfqgtsQaM3S-VZnsYnHjQ",
      channelTitle: "HALIDONMUSIC",
      title: "The Best of Bach",
      description:
        "Buy \"Bach: Complete Cello Suites\" on the Official Halidon Music Store: http://bit.ly/2JAHYlx Stream the album on Spotify: https://spoti.fi/36h8sCq iTunes ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/6JQm5aSjX6g/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/6JQm5aSjX6g/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/6JQm5aSjX6g/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/6JQm5aSjX6g/default.jpg"
    }
  ],
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
      id: "f4Mc-NYPHaQ",
      link: "https://www.youtube.com/watch?v=f4Mc-NYPHaQ",
      kind: "youtube#video",
      publishedAt: "2008-09-01T13:33:06.000Z",
      channelId: "UCiMhD4jzUqG-IgPzUmmytRQ",
      channelTitle: "Queen Official",
      title: "Queen - I Want To Break Free (Official Video)",
      description:
        "Click here to buy the DVD with this video at the Official Queen Store: http://www.queenonlinestore.com The official 'I Want To Break Free' music video.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/f4Mc-NYPHaQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/f4Mc-NYPHaQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/f4Mc-NYPHaQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/f4Mc-NYPHaQ/default.jpg"
    },
    {
      id: "TLV4_xaYynY",
      link: "https://www.youtube.com/watch?v=TLV4_xaYynY",
      kind: "youtube#video",
      publishedAt: "2012-10-05T07:00:10.000Z",
      channelId: "UCXQWf0KEholU1zS7LElUBrA",
      channelTitle: "JimiHendrixVEVO",
      title: "The Jimi Hendrix Experience - All Along The Watchtower (Audio)",
      description:
        "Listen to the official audio for \"All Along The Watchtower\" by The Jimi Hendrix Experience Click to subscribe: http://smarturl.it/SubscribeJHVevo?IQ... Taken from ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/TLV4_xaYynY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/TLV4_xaYynY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/TLV4_xaYynY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/TLV4_xaYynY/default.jpg"
    },
    {
      id: "VMnjF1O4eH0",
      link: "https://www.youtube.com/watch?v=VMnjF1O4eH0",
      kind: "youtube#video",
      publishedAt: "2008-08-01T12:29:43.000Z",
      channelId: "UCiMhD4jzUqG-IgPzUmmytRQ",
      channelTitle: "Queen Official",
      title: "Queen - Fat Bottomed Girls (Official Video)",
      description:
        "Taken from Jazz, 1978 and Greatest Video Hits 1. Click here to buy the DVD with this video at the Official Queen Store: http://www.queenonlinestore.com ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VMnjF1O4eH0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/VMnjF1O4eH0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/VMnjF1O4eH0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/VMnjF1O4eH0/default.jpg"
    },
    {
      id: "SRwrg0db_zY",
      link: "https://www.youtube.com/watch?v=SRwrg0db_zY",
      kind: "youtube#video",
      publishedAt: "2010-08-04T00:57:48.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Twisted Sister - I Wanna Rock (Official Music Video)",
      description:
        "You're watching the official music video for Twisted Sister - \"I Wanna Rock\" from the album 'Stay Hungry' (1984). \"I Wanna Rock\" was featured on VH1's list of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/SRwrg0db_zY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/SRwrg0db_zY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/SRwrg0db_zY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/SRwrg0db_zY/default.jpg"
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
      id: "z92bmlcmyq0",
      link: "https://www.youtube.com/watch?v=z92bmlcmyq0",
      kind: "youtube#video",
      publishedAt: "2009-10-07T22:58:02.000Z",
      channelId: "UCJXMEUBWWr987z625yhngWw",
      channelTitle: "NightRangerVEVO",
      title: "Night Ranger - Sister Christian (Official Video)",
      description:
        "Music video by Night Ranger performing Sister Christian. (C) 2004 Geffen Records #NightRanger #SisterChristian #Vevo.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/z92bmlcmyq0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/z92bmlcmyq0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/z92bmlcmyq0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/z92bmlcmyq0/default.jpg"
    },
    {
      id: "-0kcet4aPpQ",
      link: "https://www.youtube.com/watch?v=-0kcet4aPpQ",
      kind: "youtube#video",
      publishedAt: "2014-06-25T15:14:35.000Z",
      channelId: "UCY2qt3dw2TQJxvBrDiYGHdQ",
      channelTitle: "Pink Floyd",
      title: "Pink Floyd - Money (Official Music Video)",
      description:
        "Pre-order Pink Floyd's 'The Later Years' box set now https://pinkfloyd.lnk.to/TheLaterYears The official promo video for 'Money' by Pink Floyd, taken from the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/-0kcet4aPpQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/-0kcet4aPpQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/-0kcet4aPpQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/-0kcet4aPpQ/default.jpg"
    },
    {
      id: "5XcKBmdfpWs",
      link: "https://www.youtube.com/watch?v=5XcKBmdfpWs",
      kind: "youtube#video",
      publishedAt: "2009-12-25T04:43:45.000Z",
      channelId: "UCaEixIrNdUQjQr85zcQeuiw",
      channelTitle: "StyxVEVO",
      title: "Styx - Too Much Time On My Hands",
      description:
        "Best of Styx: https://goo.gl/n2JFbN Subscribe here: https://goo.gl/UiH6GG Music video by Styx performing Too Much Time On My Hands. (C) 1981 A&M Records.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/5XcKBmdfpWs/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/5XcKBmdfpWs/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/5XcKBmdfpWs/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/5XcKBmdfpWs/default.jpg"
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
    }
  ],
  country: [
    {
      id: "zDo0H8Fm7d0",
      link: "https://www.youtube.com/watch?v=zDo0H8Fm7d0",
      kind: "youtube#video",
      publishedAt: "2017-10-23T13:50:02.000Z",
      channelId: "UC5-gWZXAQqSGVfPHkA7NRiQ",
      channelTitle: "Bebe Rexha",
      title:
        "Bebe Rexha - Meant to Be (feat. Florida Georgia Line) [Official Music Video]",
      description:
        "Bebe Rexha - Meant to Be (feat. Florida Georgia Line) Listen now: https://BebeRexha.lnk.to/MeantToBe Spotify: https://BebeRexha.lnk.to/MeantToBe/Spotify ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/zDo0H8Fm7d0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/zDo0H8Fm7d0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/zDo0H8Fm7d0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/zDo0H8Fm7d0/default.jpg"
    },
    {
      id: "YxIiPLVR6NA",
      link: "https://www.youtube.com/watch?v=YxIiPLVR6NA",
      kind: "youtube#video",
      publishedAt: "2013-11-01T13:00:05.000Z",
      channelId: "UC1SqP7_RfOC9Jf9L_GRHANg",
      channelTitle: "AviciiOfficialVEVO",
      title: "Avicii - Hey Brother (Lyric)",
      description:
        "Listen to Avicii's latest single “SOS” here: https://Avicii.lnk.to/SOS.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/YxIiPLVR6NA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/YxIiPLVR6NA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/YxIiPLVR6NA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/YxIiPLVR6NA/default.jpg"
    },
    {
      id: "4zAThXFOy2c",
      link: "https://www.youtube.com/watch?v=4zAThXFOy2c",
      kind: "youtube#video",
      publishedAt: "2015-04-23T10:00:00.000Z",
      channelId: "UC_uPAFZghRvM1W89Rt-opZw",
      channelTitle: "ChrisStapletonVEVO",
      title: "Chris Stapleton - Tennessee Whiskey (Audio)",
      description:
        "Purchase Chris Stapleton's latest music: http://umgn.us/chrisstapletonpurchase Stream the latest from Chris Stapleton: http://umgn.us/chrisstapletonstream Sign ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4zAThXFOy2c/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4zAThXFOy2c/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4zAThXFOy2c/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4zAThXFOy2c/default.jpg"
    },
    {
      id: "eM213aMKTHg",
      link: "https://www.youtube.com/watch?v=eM213aMKTHg",
      kind: "youtube#video",
      publishedAt: "2011-01-28T20:40:32.000Z",
      channelId: "UClcR5Ho9kfnj40zaN1enC-Q",
      channelTitle: "LadyAntebellumVEVO",
      title: "Lady Antebellum - Need You Now (Official Music Video)",
      description:
        "REMASTERED IN HD! Pre-VEVO play count: 29104971 Music video by Lady Antebellum performing Need You Now. (P) (C) 2009 Capitol Records Nashville.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/eM213aMKTHg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/eM213aMKTHg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/eM213aMKTHg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/eM213aMKTHg/default.jpg"
    },
    {
      id: "dRX0wDNK6S4",
      link: "https://www.youtube.com/watch?v=dRX0wDNK6S4",
      kind: "youtube#video",
      publishedAt: "2017-10-06T07:00:02.000Z",
      channelId: "UCsEj8E122ibbJetQe8BoV7g",
      channelTitle: "KaneBrownVEVO",
      title: "Kane Brown - Heaven (Official Music Video)",
      description:
        "Get \"Heaven\" now on the Kane Brown Deluxe Edition: http://smarturl.it/kanebrowndeluxe Director: Alex Alvga #KaneBrown #Heaven #Vevo #Country ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dRX0wDNK6S4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dRX0wDNK6S4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dRX0wDNK6S4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dRX0wDNK6S4/default.jpg"
    },
    {
      id: "8MPbR6Cbwi4",
      link: "https://www.youtube.com/watch?v=8MPbR6Cbwi4",
      kind: "youtube#video",
      publishedAt: "2018-01-25T17:00:01.000Z",
      channelId: "UCsXfDf1CDgU3SCt0gxJNXGg",
      channelTitle: "justintimberlakeVEVO",
      title:
        "Justin Timberlake - Say Something ft. Chris Stapleton (Official Video)",
      description:
        "\"Say Something\" ft. Chris Stapleton from Man of the Woods Official Music Video directed by Arturo Perez Jr. - La Blogothèque Man of the Woods – An Album By ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8MPbR6Cbwi4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/8MPbR6Cbwi4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/8MPbR6Cbwi4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/8MPbR6Cbwi4/default.jpg"
    },
    {
      id: "7qaHdHpSjX8",
      link: "https://www.youtube.com/watch?v=7qaHdHpSjX8",
      kind: "youtube#video",
      publishedAt: "2017-01-13T05:01:30.000Z",
      channelId: "UChpgnPWp9RsKODOmExta_TA",
      channelTitle: "BrettYoungVEVO",
      title: "Brett Young - In Case You Didn&#39;t Know (Official Music Video)",
      description:
        "Click here to purchase Brett's new self-titled album including “In Case You Didn't Know”: iTunes / Google Play: http://smarturl.it/BrettYoung Amazon: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/7qaHdHpSjX8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/7qaHdHpSjX8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/7qaHdHpSjX8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/7qaHdHpSjX8/default.jpg"
    },
    {
      id: "1vrEljMfXYo",
      link: "https://www.youtube.com/watch?v=1vrEljMfXYo",
      kind: "youtube#video",
      publishedAt: "2013-04-05T22:45:52.000Z",
      channelId: "UCB2ADTh5dbYcI46S-_ju7ww",
      channelTitle: "JohnDenverVEVO",
      title: "John Denver - Take Me Home, Country Roads (Audio)",
      description:
        "John Denver's official audio for 'Take Me Home, Country Roads', as featured on Fallout 76. Listen to John Denver: https://JohnDenver.lnk.to/listenYD Subscribe ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/1vrEljMfXYo/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/1vrEljMfXYo/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/1vrEljMfXYo/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/1vrEljMfXYo/default.jpg"
    },
    {
      id: "SoIKv3xxuMA",
      link: "https://www.youtube.com/watch?v=SoIKv3xxuMA",
      kind: "youtube#video",
      publishedAt: "2016-09-16T04:00:01.000Z",
      channelId: "UCK-GN21LMCsDoQgnZXNqLaw",
      channelTitle: "KeithUrbanVEVO",
      title: "Keith Urban - Blue Ain&#39;t Your Color (Official Music Video)",
      description:
        "Purchase Keith Urban's latest music: http://umgn.us/keithurbanpurchase Stream the latest from Keith Urban: http://umgn.us/keithurbanstream Sign up to receive ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/SoIKv3xxuMA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/SoIKv3xxuMA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/SoIKv3xxuMA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/SoIKv3xxuMA/default.jpg"
    },
    {
      id: "fM8V1XOI-14",
      link: "https://www.youtube.com/watch?v=fM8V1XOI-14",
      kind: "youtube#video",
      publishedAt: "2017-05-14T07:00:02.000Z",
      channelId: "UCsEj8E122ibbJetQe8BoV7g",
      channelTitle: "KaneBrownVEVO",
      title: "Kane Brown - What Ifs ft. Lauren Alaina (Official Music Video)",
      description:
        "Get Kane Brown's “What Ifs” (featuring Lauren Alaina) on his self-titled debut album: http://smarturl.it/kanebrown?IQid=yt #KaneBrown #WhatIfs #Vevo #Country ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fM8V1XOI-14/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/fM8V1XOI-14/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/fM8V1XOI-14/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/fM8V1XOI-14/default.jpg"
    }
  ],
  dance: [
    {
      id: "ru0K8uYEZWw",
      link: "https://www.youtube.com/watch?v=ru0K8uYEZWw",
      kind: "youtube#video",
      publishedAt: "2016-05-17T04:00:01.000Z",
      channelId: "UCsXfDf1CDgU3SCt0gxJNXGg",
      channelTitle: "justintimberlakeVEVO",
      title:
        "Justin Timberlake - CAN&#39;T STOP THE FEELING! (From DreamWorks Animation&#39;s &quot;Trolls&quot;) (Official Video)",
      description:
        "CAN'T STOP THE FEELING!” from the Original Motion Picture Trolls\" Official Music Video directed by Mark Romanek. Get it on iTunes: http://smarturl.it/CSTFi?",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ru0K8uYEZWw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/ru0K8uYEZWw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/ru0K8uYEZWw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/ru0K8uYEZWw/default.jpg"
    },
    {
      id: "0XFudmaObLI",
      link: "https://www.youtube.com/watch?v=0XFudmaObLI",
      kind: "youtube#video",
      publishedAt: "2013-04-15T16:52:09.000Z",
      channelId: "UCudKvbd6gvbm5UCYRk5tZKA",
      channelTitle: "TheSoundYouNeed",
      title: "Aaron Smith - Dancin (KRONO Remix)",
      description:
        "BUY : http://www.beatport.com/release/dancin-krono-remix/1299637 TheSoundYouNeed - Music at its finest ll Website : http://www.thesoundyouneed.net ll ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/0XFudmaObLI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/0XFudmaObLI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/0XFudmaObLI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/0XFudmaObLI/default.jpg"
    },
    {
      id: "6JCLY0Rlx6Q",
      link: "https://www.youtube.com/watch?v=6JCLY0Rlx6Q",
      kind: "youtube#video",
      publishedAt: "2014-10-23T16:00:18.000Z",
      channelId: "UC33W-ccS1iDKLxlI5WOPknA",
      channelTitle: "WalkTheMoonVEVO",
      title: "WALK THE MOON - Shut Up and Dance (Official Video)",
      description:
        "Check out the official music video for \"Shut Up and Dance\" by WALK THE MOON Download \"Shut Up and Dance\" on iTunes: http://smarturl.it/SUAD?Iqid=yt ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/6JCLY0Rlx6Q/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/6JCLY0Rlx6Q/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/6JCLY0Rlx6Q/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/6JCLY0Rlx6Q/default.jpg"
    },
    {
      id: "2Abk1jAONjw",
      link: "https://www.youtube.com/watch?v=2Abk1jAONjw",
      kind: "youtube#video",
      publishedAt: "2009-06-17T05:18:32.000Z",
      channelId: "UC07Kxew-cMIaykMOkzqHtBQ",
      channelTitle: "LadyGagaVEVO",
      title:
        "Lady Gaga - Just Dance (Official Music Video) ft. Colby O&#39;Donis",
      description:
        "REMASTERED IN HD! Listen to brand new music from Bradley Cooper & Lady Gaga from the 'A Star Is Born' Soundtrack: http://smarturl.it/ASIBSoundtrack ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2Abk1jAONjw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2Abk1jAONjw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2Abk1jAONjw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2Abk1jAONjw/default.jpg"
    },
    {
      id: "q0hyYWKXF0Q",
      link: "https://www.youtube.com/watch?v=q0hyYWKXF0Q",
      kind: "youtube#video",
      publishedAt: "2019-06-24T22:01:36.000Z",
      channelId: "UCQeiBlCcS4-XGwFjrvDn96w",
      channelTitle: "Tones And I",
      title: "TONES AND I - DANCE MONKEY (OFFICIAL VIDEO)",
      description:
        "2nd single from debut EP 'The Kids Are Coming' out now. https://tonesandi.lnk.to/TheKidsAreComingYT Tones And I - Dance Monkey ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/q0hyYWKXF0Q/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/q0hyYWKXF0Q/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/q0hyYWKXF0Q/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/q0hyYWKXF0Q/default.jpg"
    },
    {
      id: "0HKfjsM2hSw",
      link: "https://www.youtube.com/watch?v=0HKfjsM2hSw",
      kind: "youtube#video",
      publishedAt: "2018-01-16T09:31:19.000Z",
      channelId: "UCRUE1E1_DOnXNrUphtgKKSQ",
      channelTitle: "kurokuroku",
      title: "Momoland - Boom Boom [Dance MIX]",
      description: "momoland #boomboom #dancemix.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/0HKfjsM2hSw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/0HKfjsM2hSw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/0HKfjsM2hSw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/0HKfjsM2hSw/default.jpg"
    },
    {
      id: "U0fk5L1ifbo",
      link: "https://www.youtube.com/watch?v=U0fk5L1ifbo",
      kind: "youtube#video",
      publishedAt: "2018-07-06T15:10:01.000Z",
      channelId: "UCY7uhiFCrKd_hhXfVrtPWTg",
      channelTitle: "Km Music",
      title: "Eiffel 65 - Blue (Da Ba Dee)💙💙🎶 💃🏼 🕺🏼🎶💃🏻🕺🏻🎶 💙💙",
      description:
        "Video Edit By Km Music Eiffel 65 is an Italian pop music and dance music group consisting of Jeffrey Jey, Maurizio Lobina and Gabry Ponte. They are mainly ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/U0fk5L1ifbo/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/U0fk5L1ifbo/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/U0fk5L1ifbo/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/U0fk5L1ifbo/default.jpg"
    },
    {
      id: "XPmBnnon0Ek",
      link: "https://www.youtube.com/watch?v=XPmBnnon0Ek",
      kind: "youtube#video",
      publishedAt: "2017-11-08T19:07:46.000Z",
      channelId: "UCY7uhiFCrKd_hhXfVrtPWTg",
      channelTitle: "Km Music",
      title: "Haddaway - What Is Love",
      description:
        "Video Edit By Km Music Videos 1) Elena Cruz-Nichipor - Countdown to EDC Las Vegas 3 2) EDU X Ephwurd - Vibrations [Cutting Shapes-Shuffle] 3) elena cruz ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/XPmBnnon0Ek/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/XPmBnnon0Ek/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/XPmBnnon0Ek/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/XPmBnnon0Ek/default.jpg"
    },
    {
      id: "NF-kLy44Hls",
      link: "https://www.youtube.com/watch?v=NF-kLy44Hls",
      kind: "youtube#video",
      publishedAt: "2013-09-16T14:00:34.000Z",
      channelId: "UCKHFvArwRwQU2VbRjMpaVGw",
      channelTitle: "DaftPunkVEVO",
      title: "Daft Punk - Lose Yourself to Dance (Official Version)",
      description:
        "Daft Punk's official music video for 'Lose Yourself To Dance'. Click to listen to Daft Punk on Spotify: http://smarturl.it/DaftPunkSpotify?IQ... As featured on Random ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/NF-kLy44Hls/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/NF-kLy44Hls/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/NF-kLy44Hls/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/NF-kLy44Hls/default.jpg"
    },
    {
      id: "HRkNfdlm5Qs",
      link: "https://www.youtube.com/watch?v=HRkNfdlm5Qs",
      kind: "youtube#video",
      publishedAt: "2015-05-05T11:02:25.000Z",
      channelId: "UC4GTYUQEZSQ-28KNX7I0ngw",
      channelTitle: "OneHowto",
      title: "Zumba Dance Workout for weight loss",
      description:
        "Have fun while you lose weight with oneHOWTO! Zumba Dance Workout with our best uDance instructor! Keep on doing this dance non stop to lose weight ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/HRkNfdlm5Qs/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/HRkNfdlm5Qs/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/HRkNfdlm5Qs/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/HRkNfdlm5Qs/default.jpg"
    }
  ],
  deathMetal: [
    {
      id: "WIKqgE4BwAY",
      link: "https://www.youtube.com/watch?v=WIKqgE4BwAY",
      kind: "youtube#video",
      publishedAt: "2014-02-26T02:59:25.000Z",
      channelId: "UC33_tIj4m1_XaqfFcomShvw",
      channelTitle: "BABYMETAL",
      title: "BABYMETAL - ギミチョコ！！- Gimme chocolate!! (OFFICIAL)",
      description:
        "BABYMETAL 1st full album \"BABYMETAL\" available!! Available on iTunes Store worldwide & CD web store. Don't miss it!! [iTunes Store] ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WIKqgE4BwAY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WIKqgE4BwAY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WIKqgE4BwAY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WIKqgE4BwAY/default.jpg"
    },
    {
      id: "312Sb-2PovA",
      link: "https://www.youtube.com/watch?v=312Sb-2PovA",
      kind: "youtube#video",
      publishedAt: "2011-07-19T00:11:06.000Z",
      channelId: "UCnK9PxMozTYs8ELOvgMNKFA",
      channelTitle: "Century Media Records",
      title: "SUICIDE SILENCE - You Only Live Once (OFFICIAL VIDEO)",
      description:
        "SUICIDE SILENCE - You Only Live Once (OFFICIAL VIDEO). Taken from the album 'The Black Crown', Century Media Records 2011. (Lyrics below) Get it at ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/312Sb-2PovA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/312Sb-2PovA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/312Sb-2PovA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/312Sb-2PovA/default.jpg"
    },
    {
      id: "mjF1rmSV1dM",
      link: "https://www.youtube.com/watch?v=mjF1rmSV1dM",
      kind: "youtube#video",
      publishedAt: "2017-08-25T11:04:08.000Z",
      channelId: "UCnK9PxMozTYs8ELOvgMNKFA",
      channelTitle: "Century Media Records",
      title: "ARCH ENEMY - The Eagle Flies Alone (OFFICIAL VIDEO)",
      description:
        "ARCH ENEMY - The Eagle Flies Alone (OFFICIAL VIDEO). Order now: http://willtopower.centurymedia.com/ | CD, LP & Merch bundles ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mjF1rmSV1dM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/mjF1rmSV1dM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/mjF1rmSV1dM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/mjF1rmSV1dM/default.jpg"
    },
    {
      id: "qatmJtIJAPw",
      link: "https://www.youtube.com/watch?v=qatmJtIJAPw",
      kind: "youtube#video",
      publishedAt: "2014-07-01T10:49:08.000Z",
      channelId: "UCby5ZKyxiSW3dz_Kg5VDU9w",
      channelTitle: "ArhyBES",
      title: "BATMETAL",
      description:
        "song: Dethklok - Face Fisted Support us on Patreon https://www.patreon.com/arhybes or get one of our awesome t-shirts ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qatmJtIJAPw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qatmJtIJAPw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qatmJtIJAPw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qatmJtIJAPw/default.jpg"
    },
    {
      id: "SDea7laHD4E",
      link: "https://www.youtube.com/watch?v=SDea7laHD4E",
      kind: "youtube#video",
      publishedAt: "2018-04-01T00:30:22.000Z",
      channelId: "UCby5ZKyxiSW3dz_Kg5VDU9w",
      channelTitle: "ArhyBES",
      title: "BATMETAL FOREVER",
      description:
        "Brendon Small's Galaktikon II: Become the Storm- 'My Name is Murder' is available on Megaforce Records: https://galaktikon.indiemerch.com/c/music-video ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/SDea7laHD4E/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/SDea7laHD4E/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/SDea7laHD4E/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/SDea7laHD4E/default.jpg"
    },
    {
      id: "Q_WHGV5bejk",
      link: "https://www.youtube.com/watch?v=Q_WHGV5bejk",
      kind: "youtube#video",
      publishedAt: "2009-10-27T01:28:51.000Z",
      channelId: "UCRRxSTgPUY0q_YToaczc2BQ",
      channelTitle: "Roadrunner Records",
      title: "Sepultura - Territory [OFFICIAL VIDEO]",
      description:
        "Sepultura's video for 'Territory' from the album, Chaos A.D. - available now on Roadrunner Records. Download now on iTunes: http://smarturl.it/chaosad LYRICS ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Q_WHGV5bejk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Q_WHGV5bejk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Q_WHGV5bejk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/Q_WHGV5bejk/default.jpg"
    },
    {
      id: "4ZqWLIQaKM4",
      link: "https://www.youtube.com/watch?v=4ZqWLIQaKM4",
      kind: "youtube#video",
      publishedAt: "2015-05-08T15:22:23.000Z",
      channelId: "UC3o9YaRy8gc-lMmw_XpqgiQ",
      channelTitle: "In This Moment",
      title: "In This Moment - Sex Metal Barbie [OFFICIAL MUSIC VIDEO]",
      description:
        "In This Moment “Sex Metal Barbie” Official Video off the album Black Widow. In This Moment's NEW album, RITUAL, is available now on Roadrunner ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4ZqWLIQaKM4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4ZqWLIQaKM4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4ZqWLIQaKM4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4ZqWLIQaKM4/default.jpg"
    },
    {
      id: "qLYoJgbybes",
      link: "https://www.youtube.com/watch?v=qLYoJgbybes",
      kind: "youtube#video",
      publishedAt: "2013-08-02T07:00:14.000Z",
      channelId: "UCvscAibvK2l-PU63jC2OyJQ",
      channelTitle: "AttilaVEVO",
      title: "Attila - About That Life (Official Music Video)",
      description:
        "Attila's official music video for 'About That Life'. Click to listen to Attila on Spotify: http://smarturl.it/AttSpotify?IQid=AttATL As featured on About That Life. Click to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qLYoJgbybes/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qLYoJgbybes/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qLYoJgbybes/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qLYoJgbybes/default.jpg"
    },
    {
      id: "A43JOxLa5MM",
      link: "https://www.youtube.com/watch?v=A43JOxLa5MM",
      kind: "youtube#video",
      publishedAt: "2010-01-06T20:00:13.000Z",
      channelId: "UC4QPIYYzJNQkVycF28JagHA",
      channelTitle: "aliquidcow",
      title: "Death Metal Rooster",
      description:
        "The music is by Ewan Parry from Talanas. Check out our video for 'Antiphon' from the album, 'The Waspkeeper': ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/A43JOxLa5MM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/A43JOxLa5MM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/A43JOxLa5MM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/A43JOxLa5MM/default.jpg"
    },
    {
      id: "yfB7vF7nCdA",
      link: "https://www.youtube.com/watch?v=yfB7vF7nCdA",
      kind: "youtube#video",
      publishedAt: "2009-06-16T21:29:43.000Z",
      channelId: "UCLgu9hvBRQ0TPEH-wnqDBiA",
      channelTitle: "SteelPantherVEVO",
      title: "Steel Panther - Death To All But Metal (Explicit)",
      description:
        "To buy the totally bitchin' album 'Balls Out' click here - http://smarturl.it/ballsout #SteelPanther #DeathToAllButMetal #Vevo #Rock #VevoOfficial.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/yfB7vF7nCdA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/yfB7vF7nCdA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/yfB7vF7nCdA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/yfB7vF7nCdA/default.jpg"
    }
  ],
  dubstep: [
    {
      id: "2cXDgFwE13g",
      link: "https://www.youtube.com/watch?v=2cXDgFwE13g",
      kind: "youtube#video",
      publishedAt: "2011-08-17T16:53:59.000Z",
      channelId: "UC_TVqp_SyG6j5hG-xVRy95A",
      channelTitle: "Skrillex",
      title: "Skrillex - First Of The Year (Equinox) [Official Music Video]",
      description:
        "Skrillex - First Of The Year (Equinox) [Official Music Video] Watch the official video for “First Of The Year (Equinox)” by Skrillex from the album, 'More Monsters ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2cXDgFwE13g/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2cXDgFwE13g/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2cXDgFwE13g/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2cXDgFwE13g/default.jpg"
    },
    {
      id: "WSeNSzJ2-Jw",
      link: "https://www.youtube.com/watch?v=WSeNSzJ2-Jw",
      kind: "youtube#video",
      publishedAt: "2010-10-24T01:55:16.000Z",
      channelId: "UC_TVqp_SyG6j5hG-xVRy95A",
      channelTitle: "Skrillex",
      title: "Skrillex - Scary Monsters And Nice Sprites (Official Audio)",
      description:
        "Skrillex - Scary Monsters And Nice Sprites (Official Audio) Watch the official audio video for \"Scary Monsters And Nice Sprites\" by Skrillex From the \"Scary ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WSeNSzJ2-Jw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WSeNSzJ2-Jw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WSeNSzJ2-Jw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WSeNSzJ2-Jw/default.jpg"
    },
    {
      id: "aHjpOzsQ9YI",
      link: "https://www.youtube.com/watch?v=aHjpOzsQ9YI",
      kind: "youtube#video",
      publishedAt: "2012-02-23T17:32:58.000Z",
      channelId: "UCyC_4jvPzLiSkJkLIkA7B8g",
      channelTitle: "Lindsey Stirling",
      title: "Crystallize - Lindsey Stirling (Dubstep Violin Original Song)",
      description:
        "My new album #Artemis is out now! https://found.ee/LS_Artemis Purchase my album Brave Enough on iTunes! http://found.ee/BEAppleMusic Come see me this ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/aHjpOzsQ9YI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/aHjpOzsQ9YI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/aHjpOzsQ9YI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/aHjpOzsQ9YI/default.jpg"
    },
    {
      id: "LXO-jKksQkM",
      link: "https://www.youtube.com/watch?v=LXO-jKksQkM",
      kind: "youtube#video",
      publishedAt: "2011-09-23T16:19:51.000Z",
      channelId: "UCSiO9HSviL3d9WOCHcY8F-Q",
      channelTitle: "MARQUESE SCOTT",
      title: "PUMPED UP KICKS|DUBSTEP",
      description:
        "BOOKING: Nonstop7000@gmail.com TUTORIALS: Nonstop7000@gmail.com TWITTER: http://tinyurl.com/om56fzw INSTAGRAM: http://tinyurl.com/p9g9n8w ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LXO-jKksQkM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/LXO-jKksQkM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/LXO-jKksQkM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/LXO-jKksQkM/default.jpg"
    },
    {
      id: "sf6LD2B_kDQ",
      link: "https://www.youtube.com/watch?v=sf6LD2B_kDQ",
      kind: "youtube#video",
      publishedAt: "2012-09-19T05:09:51.000Z",
      channelId: "UCyC_4jvPzLiSkJkLIkA7B8g",
      channelTitle: "Lindsey Stirling",
      title: "Elements - Lindsey Stirling (Dubstep Violin Original Song)",
      description:
        "My new album #Artemis is out now! https://found.ee/LS_Artemis Come see me this winter for the #WarmerInTheWinterTour! Tickets are on sale now!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/sf6LD2B_kDQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/sf6LD2B_kDQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/sf6LD2B_kDQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/sf6LD2B_kDQ/default.jpg"
    },
    {
      id: "nTXtOVaCaOU",
      link: "https://www.youtube.com/watch?v=nTXtOVaCaOU",
      kind: "youtube#video",
      publishedAt: "2011-11-10T13:37:31.000Z",
      channelId: "UCCqFKe1ZNvaMp5vNBDg9jvg",
      channelTitle: "Heymoonshaker",
      title:
        "Heymoonshaker - London Part 2 (Dave Crowe beatbox dubstep session)",
      description:
        "GET OUR NEW ALBUM LIVE HERE : ☛ https://fanlink.to/heymoonshaker-live Tracklist: 1. Find Myself a Home 2. Feel Love 3. Heavy Grip 4. Wheels in Motion 5.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/nTXtOVaCaOU/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/nTXtOVaCaOU/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/nTXtOVaCaOU/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/nTXtOVaCaOU/default.jpg"
    },
    {
      id: "T5UsrAxid74",
      link: "https://www.youtube.com/watch?v=T5UsrAxid74",
      kind: "youtube#video",
      publishedAt: "2015-07-29T10:27:04.000Z",
      channelId: "UCt0yiqIxYanefVOwP7yVPcw",
      channelTitle: "DubstepMusic HD",
      title: "BEST MUSIC MIX | ♫ 1H Gaming Music ♫ | Dubstep, EDM, Trap |",
      description:
        "Support me!! ♫♫ Subscribe YouTube: https://www.youtube.com/c/DubstepMusicHD Twitter: https://twitter.com/DubstepMusicHD Paypal: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/T5UsrAxid74/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/T5UsrAxid74/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/T5UsrAxid74/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/T5UsrAxid74/default.jpg"
    },
    {
      id: "f9EM8T5K6d8",
      link: "https://www.youtube.com/watch?v=f9EM8T5K6d8",
      kind: "youtube#video",
      publishedAt: "2012-12-12T22:21:51.000Z",
      channelId: "UCfLFTP1uTuIizynWsZq2nkQ",
      channelTitle: "UKF Dubstep",
      title:
        "Modestep - Another Day (Ft. Popeska) (xKore Remix) (Official Video)",
      description:
        "Available on the deluxe version of Modestep's debut album 'Evolution Theory' pre-order now at: http://bit.ly/modestepalbum Become a fan of Modestep: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/f9EM8T5K6d8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/f9EM8T5K6d8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/f9EM8T5K6d8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/f9EM8T5K6d8/default.jpg"
    },
    {
      id: "p6j8fuvQICI",
      link: "https://www.youtube.com/watch?v=p6j8fuvQICI",
      kind: "youtube#video",
      publishedAt: "2014-01-04T18:22:58.000Z",
      channelId: "UCJBpeNOjvbn9rRte3w_Kklg",
      channelTitle: "MrMoMMusic",
      title: "Best Melodic Dubstep Mix 2014",
      description:
        "Best of melodic dubstep 2014, by Tim Bryant. Enjoy the mellow side of dubstep :). Our dubstep mix 2016 can be found here: https://goo.gl/y6ALX2 .:::Follow Tim ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/p6j8fuvQICI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/p6j8fuvQICI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/p6j8fuvQICI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/p6j8fuvQICI/default.jpg"
    },
    {
      id: "8xlDwukxjnA",
      link: "https://www.youtube.com/watch?v=8xlDwukxjnA",
      kind: "youtube#video",
      publishedAt: "2016-02-04T19:47:57.000Z",
      channelId: "UC_aEa8K-EOJ3D6gOs7HcyNg",
      channelTitle: "NoCopyrightSounds",
      title: "Ship Wrek &amp; Zookeepers - Ark [NCS Release]",
      description:
        "NCS: Music Without Limitations NCS Spotify: http://spoti.fi/NCS Free Download / Stream: http://ncs.io/ark Connect with NCS: Snapchat: ncsmusic ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8xlDwukxjnA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/8xlDwukxjnA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/8xlDwukxjnA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/8xlDwukxjnA/default.jpg"
    }
  ],
  electro: [
    {
      id: "R-1wBk3H2LI",
      link: "https://www.youtube.com/watch?v=R-1wBk3H2LI",
      kind: "youtube#video",
      publishedAt: "2016-08-18T17:07:42.000Z",
      channelId: "UChv_K9--FKW8hFD_gJGk3Ig",
      channelTitle: "BassGutter",
      title: "BASS BOOSTED MUSIC MIX → Best Of EDM !!",
      description:
        "Bass Boosted Music Mix → Best Of EDM // Bass Boost // Bass Test // Trap Remix & Music ▻ Follow our Spotify : http://bit.ly/magicboosterz ▻ FREE Download + ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/R-1wBk3H2LI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/R-1wBk3H2LI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/R-1wBk3H2LI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/R-1wBk3H2LI/default.jpg"
    },
    {
      id: "__CRWE-L45k",
      link: "https://www.youtube.com/watch?v=__CRWE-L45k",
      kind: "youtube#video",
      publishedAt: "2014-11-27T17:54:34.000Z",
      channelId: "UC_aEa8K-EOJ3D6gOs7HcyNg",
      channelTitle: "NoCopyrightSounds",
      title: "Electro-Light - Symbolism [NCS Release]",
      description:
        "NCS: Music Without Limitations NCS Spotify: http://spoti.fi/NCS Free Download / Stream: http://ncs.io/symbolism ▽ Connect with NCS Facebook ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/__CRWE-L45k/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/__CRWE-L45k/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/__CRWE-L45k/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/__CRWE-L45k/default.jpg"
    },
    {
      id: "1oTUupME0-M",
      link: "https://www.youtube.com/watch?v=1oTUupME0-M",
      kind: "youtube#video",
      publishedAt: "2017-05-13T06:55:12.000Z",
      channelId: "UCrcumL7h3b_7WWPtLuz7UKA",
      channelTitle: "ELEMENTS",
      title:
        "Alan Walker - Faded (Remix) ♫ Shuffle Dance (Music video) Electro House",
      description:
        "Alan Walker - Faded (Remix) ♫ Shuffle Dance (Music video) Electro House Guys Follow my backup channel perfect Suicide ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/1oTUupME0-M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/1oTUupME0-M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/1oTUupME0-M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/1oTUupME0-M/default.jpg"
    },
    {
      id: "ycBBygx299Q",
      link: "https://www.youtube.com/watch?v=ycBBygx299Q",
      kind: "youtube#video",
      publishedAt: "2018-07-28T18:02:09.000Z",
      channelId: "UCEFpNxeybzVwRbnYabQsXEg",
      channelTitle: "Bass Music Movement",
      title:
        "🔈BASS BOOSTED🔈 CAR MUSIC MIX 2018 🔥 BEST EDM, BOUNCE, ELECTRO HOUSE #19",
      description:
        "BASS BOOSTED   CAR MUSIC MIX 2018 BEST EDM, BOUNCE, ELECTRO HOUSE #19 Listen on Spotify: https://spoti.fi/2WWM6Fd Connect with Me: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ycBBygx299Q/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/ycBBygx299Q/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/ycBBygx299Q/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/ycBBygx299Q/default.jpg"
    },
    {
      id: "4XpDdIISlYo",
      link: "https://www.youtube.com/watch?v=4XpDdIISlYo",
      kind: "youtube#video",
      publishedAt: "2015-10-26T14:00:00.000Z",
      channelId: "UCPWBlX15fNBUw0cLqKM-V7g",
      channelTitle: "DJEkkiMusic",
      title:
        "Electro House 2016 Best Festival Party Video Mix | New EDM Dance Charts Songs | Club Music Remix",
      description:
        "Electro House 2016 Best Festival Party Video Mix | New 2015 EDM Dance Charts Songs | Club Music Remix 2017 Real Life Channel: http://bit.ly/2q57N1s ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4XpDdIISlYo/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4XpDdIISlYo/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4XpDdIISlYo/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4XpDdIISlYo/default.jpg"
    },
    {
      id: "tliJePo6vYs",
      link: "https://www.youtube.com/watch?v=tliJePo6vYs",
      kind: "youtube#video",
      publishedAt: "2018-12-28T15:25:44.000Z",
      channelId: "UCaEPAlUgIgvusw5T7QyEM0Q",
      channelTitle: "Bass HQ",
      title:
        "🔈BASS BOOSTED🔈 CAR MUSIC MIX 2019 🔥 BEST EDM, BOUNCE, ELECTRO HOUSE #3",
      description:
        "BASS BOOSTED   CAR MUSIC MIX 2019 BEST EDM, BOUNCE, ELECTRO HOUSE #3 Listen on Spotify: https://spoti.fi/2AlgcUX Turn on notifications to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/tliJePo6vYs/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/tliJePo6vYs/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/tliJePo6vYs/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/tliJePo6vYs/default.jpg"
    },
    {
      id: "YcTCIMKeiNQ",
      link: "https://www.youtube.com/watch?v=YcTCIMKeiNQ",
      kind: "youtube#video",
      publishedAt: "2018-03-07T17:46:33.000Z",
      channelId: "UCEFpNxeybzVwRbnYabQsXEg",
      channelTitle: "Bass Music Movement",
      title:
        "🔈BASS BOOSTED🔈 CAR MUSIC MIX 2018 🔥 BEST EDM, BOUNCE, ELECTRO HOUSE #2",
      description:
        "BASS BOOSTED   CAR MUSIC MIX 2018 BEST EDM, BOUNCE, ELECTRO HOUSE #2 ♫Playlist: http://spoti.fi/2D2tfJX Connect with Me: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/YcTCIMKeiNQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/YcTCIMKeiNQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/YcTCIMKeiNQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/YcTCIMKeiNQ/default.jpg"
    },
    {
      id: "RkkdYdWMfQ0",
      link: "https://www.youtube.com/watch?v=RkkdYdWMfQ0",
      kind: "youtube#video",
      publishedAt: "2018-03-18T15:22:28.000Z",
      channelId: "UCEFpNxeybzVwRbnYabQsXEg",
      channelTitle: "Bass Music Movement",
      title:
        "🔈BASS BOOSTED🔈 CAR MUSIC MIX 2018 🔥 BEST EDM, BOUNCE, ELECTRO HOUSE #3",
      description:
        "BASS BOOSTED   CAR MUSIC MIX 2018 BEST EDM, BOUNCE, ELECTRO HOUSE #2 ♫Playlist: http://spoti.fi/2D2tfJX Connect with Me: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/RkkdYdWMfQ0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/RkkdYdWMfQ0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/RkkdYdWMfQ0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/RkkdYdWMfQ0/default.jpg"
    },
    {
      id: "D7ztZ_qhx5Q",
      link: "https://www.youtube.com/watch?v=D7ztZ_qhx5Q",
      kind: "youtube#video",
      publishedAt: "2017-04-04T08:00:01.000Z",
      channelId: "UCAJ1rjf90IFwNGlZUYuoP1Q",
      channelTitle: "Magic Club",
      title:
        "Best Music Mix 2017- Shuffle Music Video HD - Melbourne Bounce Music Mix 2017",
      description:
        "Submit Ur Demo for Our Label: http://bit.ly/2IF07in Best Music Mix 2017- Shuffle Music Video HD - Melbourne Bounce Music Mix 2017 This Mix On Spotify➡️ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/default.jpg"
    },
    {
      id: "C6-TWRn0k4I",
      link: "https://www.youtube.com/watch?v=C6-TWRn0k4I",
      kind: "youtube#video",
      publishedAt: "2014-12-02T16:51:52.000Z",
      channelId: "UCg0llYMCi3Dn5a5SQmpc4Iw",
      channelTitle: "Leah Brown Music",
      title: "Electro Swing Collection",
      description:
        "TRACK LIST IS IN COMMENTS SCOTT BRADLEE'S THRIFT SHOP HAS BEEN REMOVED PLAYLIST OF INDIVIDUAL SONGS ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/C6-TWRn0k4I/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/C6-TWRn0k4I/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/C6-TWRn0k4I/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/C6-TWRn0k4I/default.jpg"
    }
  ],
  electronicDance: [
    {
      id: "1oTUupME0-M",
      link: "https://www.youtube.com/watch?v=1oTUupME0-M",
      kind: "youtube#video",
      publishedAt: "2017-05-13T06:55:12.000Z",
      channelId: "UCrcumL7h3b_7WWPtLuz7UKA",
      channelTitle: "ELEMENTS",
      title:
        "Alan Walker - Faded (Remix) ♫ Shuffle Dance (Music video) Electro House",
      description:
        "Alan Walker - Faded (Remix) ♫ Shuffle Dance (Music video) Electro House Guys Follow my backup channel perfect Suicide ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/1oTUupME0-M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/1oTUupME0-M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/1oTUupME0-M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/1oTUupME0-M/default.jpg"
    },
    {
      id: "4XpDdIISlYo",
      link: "https://www.youtube.com/watch?v=4XpDdIISlYo",
      kind: "youtube#video",
      publishedAt: "2015-10-26T14:00:00.000Z",
      channelId: "UCPWBlX15fNBUw0cLqKM-V7g",
      channelTitle: "DJEkkiMusic",
      title:
        "Electro House 2016 Best Festival Party Video Mix | New EDM Dance Charts Songs | Club Music Remix",
      description:
        "Electro House 2016 Best Festival Party Video Mix | New 2015 EDM Dance Charts Songs | Club Music Remix 2017 Real Life Channel: http://bit.ly/2q57N1s ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4XpDdIISlYo/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4XpDdIISlYo/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4XpDdIISlYo/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4XpDdIISlYo/default.jpg"
    },
    {
      id: "D7ztZ_qhx5Q",
      link: "https://www.youtube.com/watch?v=D7ztZ_qhx5Q",
      kind: "youtube#video",
      publishedAt: "2017-04-04T08:00:01.000Z",
      channelId: "UCAJ1rjf90IFwNGlZUYuoP1Q",
      channelTitle: "Magic Club",
      title:
        "Best Music Mix 2017- Shuffle Music Video HD - Melbourne Bounce Music Mix 2017",
      description:
        "Submit Ur Demo for Our Label: http://bit.ly/2IF07in Best Music Mix 2017- Shuffle Music Video HD - Melbourne Bounce Music Mix 2017 This Mix On Spotify➡️ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/default.jpg"
    },
    {
      id: "2ZC3rM2Y8jQ",
      link: "https://www.youtube.com/watch?v=2ZC3rM2Y8jQ",
      kind: "youtube#video",
      publishedAt: "2017-12-25T16:18:24.000Z",
      channelId: "UCAHlZTSgcwNNpf8LV3E6kDQ",
      channelTitle: "ElectroDanceMixes",
      title: "New Year Mix - Best of EDM Party Electro &amp; House Music",
      description:
        "We wish you Merry Christmas & a Happy New Year 2018 with this special EDM Mix! ○ Subscribe: http://bit.ly/EDM-sub | ○ Facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2ZC3rM2Y8jQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2ZC3rM2Y8jQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2ZC3rM2Y8jQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2ZC3rM2Y8jQ/default.jpg"
    },
    {
      id: "TTpiKfljRzY",
      link: "https://www.youtube.com/watch?v=TTpiKfljRzY",
      kind: "youtube#video",
      publishedAt: "2018-12-29T14:04:50.000Z",
      channelId: "UCAHlZTSgcwNNpf8LV3E6kDQ",
      channelTitle: "ElectroDanceMixes",
      title:
        "New Year Mix 2019 - Best of EDM Party Electro House &amp; Festival Music",
      description:
        "We wish you a Happy New Year 2019 with this special EDM Festival Mix! ○ Subscribe: http://bit.ly/EDM-sub | ○ Facebook: http://bit.ly/ElectroHouseMixes ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/TTpiKfljRzY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/TTpiKfljRzY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/TTpiKfljRzY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/TTpiKfljRzY/default.jpg"
    },
    {
      id: "UX1cdPqW5M8",
      link: "https://www.youtube.com/watch?v=UX1cdPqW5M8",
      kind: "youtube#video",
      publishedAt: "2019-02-16T06:28:07.000Z",
      channelId: "UCC9rwt1T2i4klATksN6prdQ",
      channelTitle: "N&T Party",
      title:
        "Best Shuffle Dance Music 2019 ♫ 24/7 Live Stream Video Music ♫ Best Electro House &amp; Bass Boosted Mix",
      description:
        "Best Shuffle Dance Music 2019 ♫ 24/7 Live Stream Video Music ♫ Best Electro House & Bass Boosted Mix Turn on the bell to join the notification squad ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/UX1cdPqW5M8/default_live.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/UX1cdPqW5M8/mqdefault_live.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/UX1cdPqW5M8/hqdefault_live.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/UX1cdPqW5M8/default_live.jpg"
    },
    {
      id: "FP0wgVhUC9w",
      link: "https://www.youtube.com/watch?v=FP0wgVhUC9w",
      kind: "youtube#video",
      publishedAt: "2019-03-25T22:13:57.000Z",
      channelId: "UCOjZigyo_fg2V7JdGwePSwg",
      channelTitle: "Zumba with Dovydas",
      title: "ZUMBA KIDS - Electronic Song - Minions",
      description:
        "You can support me : https://www.patreon.com/user?u=18764540 Choreography by Dovydas Veiverys. Dancing with my Zumba kids group in Gargždai. For me ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/FP0wgVhUC9w/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/FP0wgVhUC9w/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/FP0wgVhUC9w/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/FP0wgVhUC9w/default.jpg"
    },
    {
      id: "GVC5adzPpiE",
      link: "https://www.youtube.com/watch?v=GVC5adzPpiE",
      kind: "youtube#video",
      publishedAt: "2017-11-22T15:36:35.000Z",
      channelId: "UCMwePVHRpDdfeUcwtDZu2Dw",
      channelTitle: "Monstafluff Music",
      title:
        "NCS 24/7 Live Stream 🎵 Gaming Music Radio | NoCopyrightSounds| Dubstep, Trap, EDM, Electro House",
      description:
        "NCS 24/7 Live Stream Gaming Music Radio | NoCopyrightSounds| Dubstep, Trap, EDM, Electro House Follow our Spotify playlists: https://spoti.fi/2JcY3he ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/GVC5adzPpiE/default_live.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/GVC5adzPpiE/mqdefault_live.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/GVC5adzPpiE/hqdefault_live.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/GVC5adzPpiE/default_live.jpg"
    },
    {
      id: "5SYB4YftFjU",
      link: "https://www.youtube.com/watch?v=5SYB4YftFjU",
      kind: "youtube#video",
      publishedAt: "2018-04-23T16:02:03.000Z",
      channelId: "UCz5yqgTKWtnAD9lO-zkMq4g",
      channelTitle: "PeeTee Official",
      title:
        "Best Remixes of Popular Songs | Dance Club Mix 2018 (Mixplode 159)",
      description:
        "Best Remixes of Popular Songs Dance Club Mix 2018, Mixplode 159 by dj PeeTee ○ Follow me on Facebook: https://www.facebook.com/PeeTeeOfficial ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/5SYB4YftFjU/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/5SYB4YftFjU/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/5SYB4YftFjU/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/5SYB4YftFjU/default.jpg"
    },
    {
      id: "D2WHIMlPAKc",
      link: "https://www.youtube.com/watch?v=D2WHIMlPAKc",
      kind: "youtube#video",
      publishedAt: "2014-11-22T20:39:24.000Z",
      channelId: "UCZlV0Nxq6q4hV84E6TFgPRA",
      channelTitle: "Dj Drop G",
      title:
        "NEW Electro House Music Mix 2018 | DANCE PARTY CLUB MIX #33 Dj Drop G",
      description:
        "TRACK LIST : https://www.facebook.com/Dj.DropG/app/396393053713168/ -------------------- Fan Page : https://www.facebook.com/Dj.DropG/ ------------------- ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/D2WHIMlPAKc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/D2WHIMlPAKc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/D2WHIMlPAKc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/D2WHIMlPAKc/default.jpg"
    }
  ],
  folk: [
    {
      id: "B9FzVhw8_bY",
      link: "https://www.youtube.com/watch?v=B9FzVhw8_bY",
      kind: "youtube#video",
      publishedAt: "2016-10-08T21:33:55.000Z",
      channelId: "UCWqvhmZyB66eKv01SiH_Kjg",
      channelTitle: "The Dead South",
      title:
        "The Dead South - In Hell I&#39;ll Be In Good Company [Official Music Video]",
      description:
        "Official video for \"In Hell I'll Be In Good Company\" by The Dead South. THE DEAD SOUTH ARE ON TOUR! Dates announced for The Summer Crawl 2019 and ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/B9FzVhw8_bY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/B9FzVhw8_bY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/B9FzVhw8_bY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/B9FzVhw8_bY/default.jpg"
    },
    {
      id: "TWcyIpul8OE",
      link: "https://www.youtube.com/watch?v=TWcyIpul8OE",
      kind: "youtube#video",
      publishedAt: "2011-08-17T16:45:14.000Z",
      channelId: "UCci2c90HJbY0VAS3_eLF3Wg",
      channelTitle: "Bon Iver",
      title: "Bon Iver - Holocene (Official Music Video)",
      description:
        "Director: NABIL (NABIL.com) Producer: Jill Hammer Production Company: NE Direction Editor: Isaac Hagy DOP: Larkin Sieple boniver.org jagjaguwar.com.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/TWcyIpul8OE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/TWcyIpul8OE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/TWcyIpul8OE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/TWcyIpul8OE/default.jpg"
    },
    {
      id: "wP4xqXaJI9I",
      link: "https://www.youtube.com/watch?v=wP4xqXaJI9I",
      kind: "youtube#video",
      publishedAt: "2013-02-11T16:18:09.000Z",
      channelId: "UC_wE14OXGaszuUXW4mw0NnQ",
      channelTitle: "IndiEarth Out There",
      title: "Anthony in Party - Odakara | Folk music from India",
      description:
        "Anthony Daasan: Vocals/Urumi Samuel Gunashekar: Drums Napeer Naveen: Bass Vikram Vivekanand: Guitar Dass: Nadaswaram Raja: Thavil Guru: Pambu ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/wP4xqXaJI9I/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/wP4xqXaJI9I/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/wP4xqXaJI9I/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/wP4xqXaJI9I/default.jpg"
    },
    {
      id: "QRg_8NNPTD8",
      link: "https://www.youtube.com/watch?v=QRg_8NNPTD8",
      kind: "youtube#video",
      publishedAt: "2017-11-01T17:56:22.000Z",
      channelId: "UC3Jvz7FpBsY73_wEjFV67wQ",
      channelTitle: "Heilung",
      title: "Heilung | LIFA - Krigsgaldr LIVE",
      description:
        "LIFA is recorded live at Castlefest 2017. Get the album here: https://heilung.bandcamp.com/album/lifa www.facebook.com/amplifiedhistory Remember, that we ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QRg_8NNPTD8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QRg_8NNPTD8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QRg_8NNPTD8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QRg_8NNPTD8/default.jpg"
    },
    {
      id: "Q1jE25zn8RU",
      link: "https://www.youtube.com/watch?v=Q1jE25zn8RU",
      kind: "youtube#video",
      publishedAt: "2017-04-16T09:57:41.000Z",
      channelId: "UCEi0EgWJ5m7gVBQ68a1L0TA",
      channelTitle: "alexrainbirdMusic",
      title:
        "Relaxing Sunday Mornings ☕ - An Indie/Folk/Pop Playlist | Vol. 1",
      description:
        "Make every day a Sunday with an hour of chilled indie music and laidback folk tracks. More info on my website: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Q1jE25zn8RU/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Q1jE25zn8RU/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Q1jE25zn8RU/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/Q1jE25zn8RU/default.jpg"
    },
    {
      id: "Uy0LV0c055g",
      link: "https://www.youtube.com/watch?v=Uy0LV0c055g",
      kind: "youtube#video",
      publishedAt: "2010-09-29T11:15:39.000Z",
      channelId: "UClAQWqQkvS21oKNB2GM5KQg",
      channelTitle: "Sunfish737",
      title:
        "Игорь Растеряев. Казачья песня - Cossack song. Accordion Folk music.",
      description:
        "Автор музыки и текста - Игорь Растеряев. Автор ролика - Лёха Ляхов. The song named «Cossack song». A warm wind was flying оn the field,...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Uy0LV0c055g/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Uy0LV0c055g/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Uy0LV0c055g/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/Uy0LV0c055g/default.jpg"
    },
    {
      id: "KCCqqPqDqSY",
      link: "https://www.youtube.com/watch?v=KCCqqPqDqSY",
      kind: "youtube#video",
      publishedAt: "2018-07-16T10:16:26.000Z",
      channelId: "UCEi0EgWJ5m7gVBQ68a1L0TA",
      channelTitle: "alexrainbirdMusic",
      title: "Wanderlust 🌲 - An Indie/Folk/Pop Playlist | Vol. I",
      description:
        "Travel to distant places with this dreamy indie selection! Tracklist & Spotify link below… LISTEN ON SPOTIFY: https://spoti.fi/2LlraxL » Subscribe to be the first ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/KCCqqPqDqSY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/KCCqqPqDqSY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/KCCqqPqDqSY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/KCCqqPqDqSY/default.jpg"
    },
    {
      id: "b9lLxQ9Y19k",
      link: "https://www.youtube.com/watch?v=b9lLxQ9Y19k",
      kind: "youtube#video",
      publishedAt: "2018-01-16T04:59:30.000Z",
      channelId: "UCGw5nU3HSuysepExgWztt0w",
      channelTitle: "Mega Música",
      title:
        "Música POP Moderna para Trabajar Alegre | The Best Pop, Indie, Folk Music Mix",
      description:
        "Música e imágenes: Derecho de la música en https://www.epidemicsound.com con licencia de uso ID17055. Imágenes del canal en ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b9lLxQ9Y19k/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b9lLxQ9Y19k/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b9lLxQ9Y19k/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b9lLxQ9Y19k/default.jpg"
    },
    {
      id: "d2Y4dFVgS8g",
      link: "https://www.youtube.com/watch?v=d2Y4dFVgS8g",
      kind: "youtube#video",
      publishedAt: "2014-08-25T19:35:35.000Z",
      channelId: "UCsl6hR3KH_dZCHFRT7gi6nw",
      channelTitle: "Pengroves",
      title: "Wishlight | One Hour Indie/Folk/Alternative Mix",
      description:
        "Video blocked on your device or region? Listen to it on Spotify: https://open.spotify.com/user/pengroves/playlist/1VmuUID0BsMPIcHHDCSRP7 This is a shift ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/d2Y4dFVgS8g/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/d2Y4dFVgS8g/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/d2Y4dFVgS8g/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/d2Y4dFVgS8g/default.jpg"
    },
    {
      id: "chwADnoFDng",
      link: "https://www.youtube.com/watch?v=chwADnoFDng",
      kind: "youtube#video",
      publishedAt: "2008-11-15T09:25:45.000Z",
      channelId: "UCYrvfI4StOOtWCpbsta81MA",
      channelTitle: "sreejithknm",
      title: "Sakura - Japanese Folk Music",
      description: "Very famous Japanese folk music.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/chwADnoFDng/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/chwADnoFDng/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/chwADnoFDng/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/chwADnoFDng/default.jpg"
    }
  ],
  funk: [
    {
      id: "OPf0YbXqDm0",
      link: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
      kind: "youtube#video",
      publishedAt: "2014-11-19T14:00:18.000Z",
      channelId: "UCmfFGTSsfJVu6CGvL8r75qg",
      channelTitle: "MarkRonsonVEVO",
      title: "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars",
      description:
        "Mark Ronson - Uptown Funk (Official Video) ft. Bruno Mars Follow on Spotify: http://ron.sn/stream/spotify Listen on Apple Music: http://ron.sn/stream/applemusic ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/OPf0YbXqDm0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/OPf0YbXqDm0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/OPf0YbXqDm0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/OPf0YbXqDm0/default.jpg"
    },
    {
      id: "aRokmEJO8Cg",
      link: "https://www.youtube.com/watch?v=aRokmEJO8Cg",
      kind: "youtube#video",
      publishedAt: "2015-05-01T15:49:59.000Z",
      channelId: "UCMkfcY0uNTa7hccthSooPnQ",
      channelTitle: "Haschak Sisters",
      title: "Mark Ronson - Uptown Funk ft Bruno Mars (Haschak Sisters Cover)",
      description:
        "Click 2 Tweet \"Uptown Funk\" Cover! http://tiny.cc/brunohaschak Hi Guys! We are so happy to upload our first solo music video to Mark Ronson & Bruno Mars' hit ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/aRokmEJO8Cg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/aRokmEJO8Cg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/aRokmEJO8Cg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/aRokmEJO8Cg/default.jpg"
    },
    {
      id: "lET-fk67F8o",
      link: "https://www.youtube.com/watch?v=lET-fk67F8o",
      kind: "youtube#video",
      publishedAt: "2015-03-03T12:24:15.000Z",
      channelId: "UCaAYydAFAyhiOh-VzFx1rCw",
      channelTitle: "Ky Baldwin",
      title: "Uptown Funk - Mark Ronson ft. Bruno Mars cover by Ky Baldwin",
      description:
        "Hey guys, ever since \"Uptown Funk\" by Mark Ronson ft. Bruno Mars came out i've wanted to do a cover, and finally i got myself together and made this video!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/lET-fk67F8o/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/lET-fk67F8o/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/lET-fk67F8o/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/lET-fk67F8o/default.jpg"
    },
    {
      id: "YgGzAKP_HuM",
      link: "https://www.youtube.com/watch?v=YgGzAKP_HuM",
      kind: "youtube#video",
      publishedAt: "2016-04-06T00:53:40.000Z",
      channelId: "UCZicpZM_VGC1lvk6q5mRWVg",
      channelTitle: "Pace Audio",
      title:
        "RASPUTIN - Vladimir Putin - Love The Way You Move (Funk Overload) @slocband",
      description:
        "iTunes: https://goo.gl/DDpdXN Spotify: https://goo.gl/5dEkoi RE-UPLOAD under permission with Slightly Left of Centre (SLC), FRESH and StudiaMONOLITH.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/YgGzAKP_HuM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/YgGzAKP_HuM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/YgGzAKP_HuM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/YgGzAKP_HuM/default.jpg"
    },
    {
      id: "ziN7Y1M1v8s",
      link: "https://www.youtube.com/watch?v=ziN7Y1M1v8s",
      kind: "youtube#video",
      publishedAt: "2014-11-10T17:32:07.000Z",
      channelId: "UCpi-SYqaXdmr7sd63YGy52g",
      channelTitle: "A X",
      title: "Mark Ronson - Uptown Funk (feat. Bruno Mars) - Lyrics",
      description:
        "Buy Uptown Funk on iTunes: http://smarturl.it/UptownFunk?IQid=yt Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ziN7Y1M1v8s/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/ziN7Y1M1v8s/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/ziN7Y1M1v8s/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/ziN7Y1M1v8s/default.jpg"
    },
    {
      id: "P-WdrMLLpPg",
      link: "https://www.youtube.com/watch?v=P-WdrMLLpPg",
      kind: "youtube#video",
      publishedAt: "2015-01-14T14:00:20.000Z",
      channelId: "UCp0hYYBW6IMayGgR-WeoCvQ",
      channelTitle: "TheEllenShow",
      title: "Mark Ronson &amp; Bruno Mars Perform &#39;Uptown Funk&#39;",
      description:
        "Bruno Mars and Mark Ronson were here for an incredible reenactment of the video for their unstoppable song! Everyone got in on the fun.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/P-WdrMLLpPg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/P-WdrMLLpPg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/P-WdrMLLpPg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/P-WdrMLLpPg/default.jpg"
    },
    {
      id: "M1F0lBnsnkE",
      link: "https://www.youtube.com/watch?v=M1F0lBnsnkE",
      kind: "youtube#video",
      publishedAt: "2015-10-06T17:40:25.000Z",
      channelId: "UCIOVKMjnGa-hDnDoT_2jW2Q",
      channelTitle: "Nerd Fest UK",
      title: "Old Movie Stars Dance to Uptown Funk",
      description:
        "If you like this video, please support these film preservation charities: The British Film Institute, https://goo.gl/iwTkD7 The George Eastman Museum, ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/M1F0lBnsnkE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/M1F0lBnsnkE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/M1F0lBnsnkE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/M1F0lBnsnkE/default.jpg"
    },
    {
      id: "7Ya2U8XN_Zw",
      link: "https://www.youtube.com/watch?v=7Ya2U8XN_Zw",
      kind: "youtube#video",
      publishedAt: "2014-11-10T05:01:00.000Z",
      channelId: "UCmfFGTSsfJVu6CGvL8r75qg",
      channelTitle: "MarkRonsonVEVO",
      title: "Mark Ronson - Uptown Funk (Official Audio) ft. Bruno Mars",
      description:
        "You can vote Uptown Funk as British Artist Video Of The Year by tweeting using #BRITMarkRonson http://smarturl.it/BRITMarkRonson Mark Ronson – Uptown ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/7Ya2U8XN_Zw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/7Ya2U8XN_Zw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/7Ya2U8XN_Zw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/7Ya2U8XN_Zw/default.jpg"
    },
    {
      id: "9ka5bgHnHyg",
      link: "https://www.youtube.com/watch?v=9ka5bgHnHyg",
      kind: "youtube#video",
      publishedAt: "2014-10-16T14:33:30.000Z",
      channelId: "UCzcn2eAUHZ2Ba3x7hZF6q2w",
      channelTitle: "Stay See",
      title: "Hip Hop &#39; Funk &#39; Jazz - Ours Samplus",
      description:
        "Ours Samplus Vol.2 https://bit.ly/2JtPChA Similar Music on Spotify https://chillhop.lnk.to/spotifyEB If you like Gramatik , ProleteR , Parov Stelar .. this music is for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9ka5bgHnHyg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/9ka5bgHnHyg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/9ka5bgHnHyg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/9ka5bgHnHyg/default.jpg"
    },
    {
      id: "GbGX1Sx0gvo",
      link: "https://www.youtube.com/watch?v=GbGX1Sx0gvo",
      kind: "youtube#video",
      publishedAt: "2014-11-23T16:00:07.000Z",
      channelId: "UCmfFGTSsfJVu6CGvL8r75qg",
      channelTitle: "MarkRonsonVEVO",
      title: "Mark Ronson - Uptown Funk (Live on SNL) ft. Bruno Mars",
      description:
        "Mark Ronson - Uptown Funk ft. Bruno Mars (Live on SNL) Follow on Spotify - http://smarturl.it/Spotify_MarkRonson Listen on Apple Music ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/GbGX1Sx0gvo/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/GbGX1Sx0gvo/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/GbGX1Sx0gvo/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/GbGX1Sx0gvo/default.jpg"
    }
  ],
  gospel: [
    {
      id: "tGE381tbQa8",
      link: "https://www.youtube.com/watch?v=tGE381tbQa8",
      kind: "youtube#video",
      publishedAt: "2013-08-12T03:21:58.000Z",
      channelId: "UClVrJwcIy7saPcGc1nct80A",
      channelTitle: "Fueled By Ramen",
      title: "Panic! At The Disco: This Is Gospel [OFFICIAL VIDEO]",
      description:
        "Panic! At The Disco's music video for 'This Is Gospel' from the new album, Too Weird To Live, Too Rare To Die! - out now on DCD2 Records / Fueled By Ramen.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/tGE381tbQa8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/tGE381tbQa8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/tGE381tbQa8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/tGE381tbQa8/default.jpg"
    },
    {
      id: "wU3qgPn3bGA",
      link: "https://www.youtube.com/watch?v=wU3qgPn3bGA",
      kind: "youtube#video",
      publishedAt: "2012-06-01T03:56:12.000Z",
      channelId: "UC-5IyVnJfn8-HJ0ZNxRLKWQ",
      channelTitle: "John Momon",
      title: "Tamela Mann - Take Me To The King",
      description:
        "NO COPYRIGHT INFRINGEMENT INTENDED***ALL RIGHTS GO TO THE ARTIST'S RESPECTIVE LABEL***I DO NOT OWN THIS SONG!***FOR ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/wU3qgPn3bGA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/wU3qgPn3bGA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/wU3qgPn3bGA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/wU3qgPn3bGA/default.jpg"
    },
    {
      id: "n4XWfwLHeLM",
      link: "https://www.youtube.com/watch?v=n4XWfwLHeLM",
      kind: "youtube#video",
      publishedAt: "2015-12-31T06:29:25.000Z",
      channelId: "UCcaV40yrjS5R88xYHxK_0rA",
      channelTitle: "SINACH",
      title: "SINACH | WAY MAKER",
      description:
        "Download and Stream WayMaker: https://slic-inspire.lnk.to/waymakerID Get WayMaker -The Album: https://slic-inspire.lnk.to/V8p1HID Subscribe to Sinach's ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/n4XWfwLHeLM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/n4XWfwLHeLM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/n4XWfwLHeLM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/n4XWfwLHeLM/default.jpg"
    },
    {
      id: "Do5MMmEygsY",
      link: "https://www.youtube.com/watch?v=Do5MMmEygsY",
      kind: "youtube#video",
      publishedAt: "2011-07-05T07:00:00.000Z",
      channelId: "UCA_-NVTKOlWgxgTWjqlzZlA",
      channelTitle: "2PacVEVO",
      title: "2Pac - Ghetto Gospel (Official Music Video)",
      description:
        "Music video by 2Pac performing Ghetto Gospel. (C) 2005 Interscope Records #2Pac #GhettoGospel #Vevo #HipHop #OfficialMusicVideo.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Do5MMmEygsY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Do5MMmEygsY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Do5MMmEygsY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/Do5MMmEygsY/default.jpg"
    },
    {
      id: "Z8SPwT3nQZ8",
      link: "https://www.youtube.com/watch?v=Z8SPwT3nQZ8",
      kind: "youtube#video",
      publishedAt: "2011-05-13T14:12:34.000Z",
      channelId: "UCHVY6rm7BNbpdcxI5Qbe-1Q",
      channelTitle: "KirkFranklinVEVO",
      title: "Kirk Franklin - I Smile (Official Video)",
      description:
        "Check out the official music video for \"I Smile\" by Kirk Franklin Playlist Best of Kirk Franklin: https://goo.gl/yxAfri Subscribe for more: https://goo.gl/zhfpr3 Kirk ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Z8SPwT3nQZ8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Z8SPwT3nQZ8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Z8SPwT3nQZ8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/Z8SPwT3nQZ8/default.jpg"
    },
    {
      id: "vDLByAnQ93Q",
      link: "https://www.youtube.com/watch?v=vDLByAnQ93Q",
      kind: "youtube#video",
      publishedAt: "2016-04-27T15:38:49.000Z",
      channelId: "UCXFrfAn9e_o3hFIB6Rm1-qg",
      channelTitle: "Entertainment One Nashville",
      title: "Jonathan Nelson - I Believe (Island Medley) (LIVE)",
      description:
        "new single I AGREE - out now! check it out at http://smarturl.it/NelsonIAgree.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vDLByAnQ93Q/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/vDLByAnQ93Q/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/vDLByAnQ93Q/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/vDLByAnQ93Q/default.jpg"
    },
    {
      id: "jO2_3pVd5k0",
      link: "https://www.youtube.com/watch?v=jO2_3pVd5k0",
      kind: "youtube#video",
      publishedAt: "2014-05-14T15:00:50.000Z",
      channelId: "UClVrJwcIy7saPcGc1nct80A",
      channelTitle: "Fueled By Ramen",
      title: "Panic! At The Disco: This Is Gospel (Piano Version)",
      description:
        "Brendon Urie of Panic! At The Disco performs a piano version of 'This Is Gospel' from the album, Too Weird To Live, Too Rare To Die - available now on DCD2 ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/jO2_3pVd5k0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/jO2_3pVd5k0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/jO2_3pVd5k0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/jO2_3pVd5k0/default.jpg"
    },
    {
      id: "2MZxf-lQD-o",
      link: "https://www.youtube.com/watch?v=2MZxf-lQD-o",
      kind: "youtube#video",
      publishedAt: "2014-06-18T16:15:25.000Z",
      channelId: "UCdEEoc_QrUX1Tuj1dFEQXRQ",
      channelTitle: "MichelleWilliamsVEVO",
      title: "Michelle Williams - Say Yes ft. Beyoncé, Kelly Rowland",
      description:
        "Michelle Williams ft. Beyoncé & Kelly Rowland - Say Yes Music video by Michelle Williams performing Say Yes. 2014 Entertainment One US LP.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/2MZxf-lQD-o/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/2MZxf-lQD-o/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/2MZxf-lQD-o/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/2MZxf-lQD-o/default.jpg"
    },
    {
      id: "VH3f0ellNv8",
      link: "https://www.youtube.com/watch?v=VH3f0ellNv8",
      kind: "youtube#video",
      publishedAt: "2015-10-15T07:00:00.000Z",
      channelId: "UC6NY4jdzOhC2Z4uaMRnlWMQ",
      channelTitle: "TGreeneVEVO",
      title: "Travis Greene - Intentional (Official Music Video)",
      description:
        "From Travis Greene's album \"\"The Hill\"\" Available now! iTunes - http://smarturl.it/TheHill-I Amazon - http://smarturl.it/TheHill-Am Google Play ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VH3f0ellNv8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/VH3f0ellNv8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/VH3f0ellNv8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/VH3f0ellNv8/default.jpg"
    },
    {
      id: "awexlghI7gM",
      link: "https://www.youtube.com/watch?v=awexlghI7gM",
      kind: "youtube#video",
      publishedAt: "2018-01-08T00:48:48.000Z",
      channelId: "UCCIhIU6HrgLNNqQ2Xdtlxug",
      channelTitle: "EeZeeConceptz",
      title: "Excess Love - Mercy Chinwo (Official Video)",
      description:
        "Official Video of massive hit single 'Excess Love' by @mercychinwo from the stables of EeZee CONCEPTZ.. SUBSCRIBE to the official EeZee Conceptz ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/awexlghI7gM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/awexlghI7gM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/awexlghI7gM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/awexlghI7gM/default.jpg"
    }
  ],
  hiphop: [
    {
      id: "LjxulQ1bEWg",
      link: "https://www.youtube.com/watch?v=LjxulQ1bEWg",
      kind: "youtube#video",
      publishedAt: "2018-05-16T04:00:02.000Z",
      channelId: "UChXnu0HBydqedqhnClp0rJg",
      channelTitle: "TygaVEVO",
      title: "Tyga - Taste (Official Video) ft. Offset",
      description:
        "From the album, \"Legendary\". Stream: https://EMPIRE.lnk.to/LegendaryYo Produced by d.a. doman Official music video by Tyga featuring Offset performing ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LjxulQ1bEWg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/LjxulQ1bEWg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/LjxulQ1bEWg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/LjxulQ1bEWg/default.jpg"
    },
    {
      id: "4NJlUribp3c",
      link: "https://www.youtube.com/watch?v=4NJlUribp3c",
      kind: "youtube#video",
      publishedAt: "2016-03-10T08:00:00.000Z",
      channelId: "UCuoH9aFpJT0HltXb0XrKRNQ",
      channelTitle: "DesiignerVEVO",
      title: "Desiigner - Panda (Official Audio)",
      description:
        "Listen to “Panda” by Desiigner http://smarturl.it/dPanda iTunes http://smarturl.it/iPanda Google Play: http://smarturl.it/gPanda Amazon: http://smarturl.it/aPanda ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4NJlUribp3c/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4NJlUribp3c/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4NJlUribp3c/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4NJlUribp3c/default.jpg"
    },
    {
      id: "lsJLLEwUYZM",
      link: "https://www.youtube.com/watch?v=lsJLLEwUYZM",
      kind: "youtube#video",
      publishedAt: "2015-12-20T21:36:07.000Z",
      channelId: "UCAfvFXvjzEupwo2NtyDhRZA",
      channelTitle: "Desiigner LOD",
      title: "Desiigner- Panda (OFFICIAL SONG) Prod. By: Menace",
      description:
        "Check out the latest single from Desiigner. This is the OFFICIAL PANDA!! AVAILABLE ON iTUNES NOW: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/lsJLLEwUYZM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/lsJLLEwUYZM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/lsJLLEwUYZM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/lsJLLEwUYZM/default.jpg"
    },
    {
      id: "8UFIYGkROII",
      link: "https://www.youtube.com/watch?v=8UFIYGkROII",
      kind: "youtube#video",
      publishedAt: "2009-11-22T10:24:58.000Z",
      channelId: "UCK5Z4cLoPQrbOXVsrD7Vigw",
      channelTitle: "SouljaBoyTellemVEVO",
      title:
        "Soulja Boy Tell&#39;em - Crank That (Soulja Boy) [Official Video]",
      description:
        "Best of Soulja Boy Tell'em: https://goo.gl/V4M688 Subscribe here: https://goo.gl/k2s6xJ Music video by Soulja Boy Tell`em performing Crank That (Soulja Boy).",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8UFIYGkROII/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/8UFIYGkROII/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/8UFIYGkROII/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/8UFIYGkROII/default.jpg"
    },
    {
      id: "hHW1oY26kxQ",
      link: "https://www.youtube.com/watch?v=hHW1oY26kxQ",
      kind: "youtube#video",
      publishedAt: "2018-08-22T19:51:06.000Z",
      channelId: "UCSJ4gkVC6NrvII8umztf0Ow",
      channelTitle: "ChilledCow",
      title: "lofi hip hop radio - beats to relax/study to",
      description:
        "Thank you for listening, I hope you will have a good time here :) 🧡Join the ChilledCow family to get awesome perks → https://bit.ly/chilledcow-family Check out ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hHW1oY26kxQ/default_live.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/hHW1oY26kxQ/mqdefault_live.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/hHW1oY26kxQ/hqdefault_live.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/hHW1oY26kxQ/default_live.jpg"
    },
    {
      id: "TMZi25Pq3T8",
      link: "https://www.youtube.com/watch?v=TMZi25Pq3T8",
      kind: "youtube#video",
      publishedAt: "2009-02-27T12:44:03.000Z",
      channelId: "UC-BZqVQqpqSwVlU5Urw4egA",
      channelTitle: "NWAVEVO",
      title: "N.W.A. - Straight Outta Compton",
      description:
        "Get N.W.A vinyl here: http://smarturl.it/NWAstore Listen to N.W.A on Spotify: http://smarturl.it/NWASpotify Find N.W.A titles on Apple Music: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/TMZi25Pq3T8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/TMZi25Pq3T8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/TMZi25Pq3T8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/TMZi25Pq3T8/default.jpg"
    },
    {
      id: "l-O5IHVhWj0",
      link: "https://www.youtube.com/watch?v=l-O5IHVhWj0",
      kind: "youtube#video",
      publishedAt: "2009-10-25T08:36:06.000Z",
      channelId: "UC-QezoqJgvxadJqhJbP199A",
      channelTitle: "RUNDMCVEVO",
      title: "RUN DMC - It&#39;s Tricky (Video)",
      description:
        "Run-DMC's official music video for 'It's Tricky'. Click to listen to Run-DMC on Spotify: http://smarturl.it/RUNDMCSpotify?IQid=RunDIT As featured on Run-DMC: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/l-O5IHVhWj0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/l-O5IHVhWj0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/l-O5IHVhWj0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/l-O5IHVhWj0/default.jpg"
    },
    {
      id: "cJc7xWJbwJw",
      link: "https://www.youtube.com/watch?v=cJc7xWJbwJw",
      kind: "youtube#video",
      publishedAt: "2019-06-26T13:57:45.000Z",
      channelId: "UCxMAbVFmxKUVGAll0WVGpFw",
      channelTitle: "Cardi B",
      title: "Cardi B - Press [Official Music Video]",
      description:
        "Cardi B - Press Stream/Download: https://cardib.lnk.to/PressID Press Merch Drop! Shop the collection now: https://CardiB.lnk.to/PressMerchDropYT Subscribe ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/cJc7xWJbwJw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/cJc7xWJbwJw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/cJc7xWJbwJw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/cJc7xWJbwJw/default.jpg"
    },
    {
      id: "28hYUZMufDg",
      link: "https://www.youtube.com/watch?v=28hYUZMufDg",
      kind: "youtube#video",
      publishedAt: "2019-11-15T16:32:59.000Z",
      channelId: "UC2CCXzC56k0b8L49R_iW-Yw",
      channelTitle: "DaBaby",
      title: "DaBaby - BOP on Broadway (Hip Hop Musical)",
      description:
        "BOP on Broadway DaBaby - BOP Produced by Jetsonmade Video Produced by Reel Goats Dir x Reel Goats Edited by Reel Goats Shoutout every single dancer ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/28hYUZMufDg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/28hYUZMufDg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/28hYUZMufDg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/28hYUZMufDg/default.jpg"
    },
    {
      id: "uaCYeQ9FtSI",
      link: "https://www.youtube.com/watch?v=uaCYeQ9FtSI",
      kind: "youtube#video",
      publishedAt: "2014-06-21T06:27:16.000Z",
      channelId: "UCq-Fj5jknLsUf-MWSy4_brA",
      channelTitle: "T-Series",
      title:
        "Official: Issey Kehte Hain Hip Hop Full Video Song | Yo Yo Honey Singh | World Music Day",
      description:
        "T-Series presents to you the full video of Issey Kehte Hain Hip Hop by none other than Yo Yo Honey Singh. So put your party shoes ON and sing with us Issey ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/uaCYeQ9FtSI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/uaCYeQ9FtSI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/uaCYeQ9FtSI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/uaCYeQ9FtSI/default.jpg"
    }
  ],
  indie: [
    {
      id: "QCXaa1mEUK0",
      link: "https://www.youtube.com/watch?v=QCXaa1mEUK0",
      kind: "youtube#video",
      publishedAt: "2019-07-18T05:30:03.000Z",
      channelId: "UCdNZZ9znjaiOXNi004mHxSg",
      channelTitle: "Indie Music Label",
      title:
        "Darshan Raval - Hawa Banke | Official Music Video | Nirmaan | Indie Music Label",
      description:
        "The wait for the annual monsoon song ends here with Hawa Banke. Shot in the divine lanes of Varanasi and bridging the gap of east and west, love will find a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QCXaa1mEUK0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/QCXaa1mEUK0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/QCXaa1mEUK0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/QCXaa1mEUK0/default.jpg"
    },
    {
      id: "TWcyIpul8OE",
      link: "https://www.youtube.com/watch?v=TWcyIpul8OE",
      kind: "youtube#video",
      publishedAt: "2011-08-17T16:45:14.000Z",
      channelId: "UCci2c90HJbY0VAS3_eLF3Wg",
      channelTitle: "Bon Iver",
      title: "Bon Iver - Holocene (Official Music Video)",
      description:
        "Director: NABIL (NABIL.com) Producer: Jill Hammer Production Company: NE Direction Editor: Isaac Hagy DOP: Larkin Sieple boniver.org jagjaguwar.com.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/TWcyIpul8OE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/TWcyIpul8OE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/TWcyIpul8OE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/TWcyIpul8OE/default.jpg"
    },
    {
      id: "b3LJlZBWI8w",
      link: "https://www.youtube.com/watch?v=b3LJlZBWI8w",
      kind: "youtube#video",
      publishedAt: "2017-01-27T01:39:12.000Z",
      channelId: "UCVoraDictyd89xgZt-J2Frw",
      channelTitle: "IndieAir",
      title: "SYML - Where&#39;s My Love (Acoustic)",
      description:
        "SYML - Where's My Love (Acoustic) For lyrics turn on captions (CC) or look in the description! Some of my favorite songs on Spotify :) https://spoti.fi/2LmT7JR ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/b3LJlZBWI8w/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/b3LJlZBWI8w/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/b3LJlZBWI8w/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/b3LJlZBWI8w/default.jpg"
    },
    {
      id: "g7Gu9fc4hEI",
      link: "https://www.youtube.com/watch?v=g7Gu9fc4hEI",
      kind: "youtube#video",
      publishedAt: "2019-02-07T07:28:15.000Z",
      channelId: "UCdNZZ9znjaiOXNi004mHxSg",
      channelTitle: "Indie Music Label",
      title:
        "Bhula Diya - Darshan Raval | Official Video | Indie Music Label | Latest Hit Song 2019",
      description:
        "Bhuladiya #Darshanraval #indiemusiclabel Subscribe to Indie Music Channel: https://goo.gl/Ms33QZ Distributed by: Sony Music Entertainment India Pvt. Ltd.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/g7Gu9fc4hEI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/g7Gu9fc4hEI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/g7Gu9fc4hEI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/g7Gu9fc4hEI/default.jpg"
    },
    {
      id: "DLxgg8HwhDg",
      link: "https://www.youtube.com/watch?v=DLxgg8HwhDg",
      kind: "youtube#video",
      publishedAt: "2018-02-07T06:20:34.000Z",
      channelId: "UCdNZZ9znjaiOXNi004mHxSg",
      channelTitle: "Indie Music Label",
      title:
        "Shab Tum Ho - Latest Hit Song 2018 | Darshan Raval | Sayeed Quadri | Indie Music Label",
      description:
        "Indie Music Label Presents Shab Tum Ho, Darshan Raval's First Love Ballad of 2018, Penned By Sayeed Quadri. An E Positive Entertainment Production For ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/DLxgg8HwhDg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/DLxgg8HwhDg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/DLxgg8HwhDg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/DLxgg8HwhDg/default.jpg"
    },
    {
      id: "S2RYBkcAkVQ",
      link: "https://www.youtube.com/watch?v=S2RYBkcAkVQ",
      kind: "youtube#video",
      publishedAt: "2019-03-22T06:00:14.000Z",
      channelId: "UCdNZZ9znjaiOXNi004mHxSg",
      channelTitle: "Indie Music Label",
      title:
        "Kaash Aisa Hota - Darshan Raval | Official Video | Indie Music Label | Latest Hit Song 2019",
      description:
        "Kaashaisahota #Darshanraval #indiemusiclabel Subscribe to Indie Music Channel: https://goo.gl/Ms33QZ Website: www.indiemusiclabel.in Wynk: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/S2RYBkcAkVQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/S2RYBkcAkVQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/S2RYBkcAkVQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/S2RYBkcAkVQ/default.jpg"
    },
    {
      id: "l1YtQ2YOZDg",
      link: "https://www.youtube.com/watch?v=l1YtQ2YOZDg",
      kind: "youtube#video",
      publishedAt: "2019-09-05T05:29:54.000Z",
      channelId: "UCdNZZ9znjaiOXNi004mHxSg",
      channelTitle: "Indie Music Label",
      title:
        "Darshan Raval - Dil Mera Blast | Official Music Video | Javed - Mohsin | Lijo G | Indie Music Label",
      description:
        "Put on your dancing shoes! Darshan Raval is back in a never seen before Avtaar - Bringing you the festive explosion \"Dil Mera Blast\", a romantic party number ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/l1YtQ2YOZDg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/l1YtQ2YOZDg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/l1YtQ2YOZDg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/l1YtQ2YOZDg/default.jpg"
    },
    {
      id: "EFqkHIMbhQg",
      link: "https://www.youtube.com/watch?v=EFqkHIMbhQg",
      kind: "youtube#video",
      publishedAt: "2018-07-18T06:02:38.000Z",
      channelId: "UCdNZZ9znjaiOXNi004mHxSg",
      channelTitle: "Indie Music Label",
      title:
        "Baarish Lete Aana - Official Video | Darshan Raval | Indie Music Label",
      description:
        "An E Positive Entertainment Production Subscribe to Indie Music Channel : https://goo.gl/Ms33QZ Powered By: Indie Music Label Website: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/EFqkHIMbhQg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/EFqkHIMbhQg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/EFqkHIMbhQg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/EFqkHIMbhQg/default.jpg"
    },
    {
      id: "-kBhum7f4rI",
      link: "https://www.youtube.com/watch?v=-kBhum7f4rI",
      kind: "youtube#video",
      publishedAt: "2016-11-11T11:10:41.000Z",
      channelId: "UCp6_KuNhT0kcFk-jXw9Tivg",
      channelTitle: "Magic Music",
      title: "Chill Out Music Mix ❄ Best Chill Trap, RnB, Indie ♫",
      description:
        "Chill Out Music Mix ❄ Best Chill Trap, RnB, Indie ♫ ⚡ Magic Spotify: https://lnk.to/magicmusic Magic No Copyright Music & USAGE POLICY: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/-kBhum7f4rI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/-kBhum7f4rI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/-kBhum7f4rI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/-kBhum7f4rI/default.jpg"
    },
    {
      id: "Q1jE25zn8RU",
      link: "https://www.youtube.com/watch?v=Q1jE25zn8RU",
      kind: "youtube#video",
      publishedAt: "2017-04-16T09:57:41.000Z",
      channelId: "UCEi0EgWJ5m7gVBQ68a1L0TA",
      channelTitle: "alexrainbirdMusic",
      title:
        "Relaxing Sunday Mornings ☕ - An Indie/Folk/Pop Playlist | Vol. 1",
      description:
        "Make every day a Sunday with an hour of chilled indie music and laidback folk tracks. More info on my website: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Q1jE25zn8RU/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Q1jE25zn8RU/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Q1jE25zn8RU/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/Q1jE25zn8RU/default.jpg"
    }
  ],
  instrumental: [
    {
      id: "8Z5EjAmZS1o",
      link: "https://www.youtube.com/watch?v=8Z5EjAmZS1o",
      kind: "youtube#video",
      publishedAt: "2014-11-28T21:32:04.000Z",
      channelId: "UCiU8PeJF22EL5BXVpKY6bjQ",
      channelTitle: "Vida Marčiulionytė-Malyginienė\\Lithuania",
      title: "The Best Of YIRUMA | Yiruma&#39;s Greatest Hits ~ Best Piano",
      description:
        "The Case for Christ (2017) | Xpиcтoc пoд cлeдcтвиeм.2017 ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8Z5EjAmZS1o/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/8Z5EjAmZS1o/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/8Z5EjAmZS1o/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/8Z5EjAmZS1o/default.jpg"
    },
    {
      id: "ss7EJ-PW2Uk",
      link: "https://www.youtube.com/watch?v=ss7EJ-PW2Uk",
      kind: "youtube#video",
      publishedAt: "2015-10-01T18:45:22.000Z",
      channelId: "UCwobzUc3z-0PrFpoRxNszXQ",
      channelTitle: "Yellow Brick Cinema - Relaxing Music",
      title:
        "3 Hour Relaxing Guitar Music: Meditation Music, Instrumental Music, Calming Music, Soft Music, ☯2432",
      description:
        "3 Hour Relaxing Guitar Music: Meditation Music, Instrumental Music, Calming Music, Soft Music, ☯2432 – YellowBrickCinema's Instrumental Music includes ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ss7EJ-PW2Uk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/ss7EJ-PW2Uk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/ss7EJ-PW2Uk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/ss7EJ-PW2Uk/default.jpg"
    },
    {
      id: "luRkeDCoxZ4",
      link: "https://www.youtube.com/watch?v=luRkeDCoxZ4",
      kind: "youtube#video",
      publishedAt: "2013-06-18T18:48:29.000Z",
      channelId: "UC4jWo5kiyOCt4PnvF4jbaLg",
      channelTitle: "The Honest Guys - Meditations - Relaxation",
      title: "3 HOURS Relaxing Music with Water Sounds Meditation",
      description:
        "3 hours of some of the most relaxing music around, with added spa water sounds. Ideal peaceful background music for working, resting, studying, meditation, ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/luRkeDCoxZ4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/luRkeDCoxZ4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/luRkeDCoxZ4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/luRkeDCoxZ4/default.jpg"
    },
    {
      id: "jgpJVI3tDbY",
      link: "https://www.youtube.com/watch?v=jgpJVI3tDbY",
      kind: "youtube#video",
      publishedAt: "2015-03-02T14:48:55.000Z",
      channelId: "UC68KnvCZ-nJzmmuSu_tKASA",
      channelTitle: "Just Instrumental Music",
      title:
        "The Best of Classical Music - Mozart, Beethoven, Bach, Chopin... Classical Music Piano Playlist Mix",
      description:
        "3 HOURS The Best Classical Music Playlist Mix (Mozart, Beethoven, Bach, Chopin) Beautiful Piano, Violin & Orchestral Masterpieces by the greatest composers ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/jgpJVI3tDbY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/jgpJVI3tDbY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/jgpJVI3tDbY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/jgpJVI3tDbY/default.jpg"
    },
    {
      id: "qycqF1CWcXg",
      link: "https://www.youtube.com/watch?v=qycqF1CWcXg",
      kind: "youtube#video",
      publishedAt: "2012-07-20T13:38:00.000Z",
      channelId: "UCc9EzBNAtdnNiDrMw5CAxUw",
      channelTitle: "relaxdaily",
      title: "Background Music Instrumentals - relaxdaily - B-Sides N°1",
      description:
        "Relaxing instrumental background music: soft, slow and relaxing music for work, to focus, study, or just to relax. Use it as music while you're studying, reading, ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qycqF1CWcXg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qycqF1CWcXg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qycqF1CWcXg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qycqF1CWcXg/default.jpg"
    },
    {
      id: "y7e-GC6oGhg",
      link: "https://www.youtube.com/watch?v=y7e-GC6oGhg",
      kind: "youtube#video",
      publishedAt: "2017-12-17T10:12:42.000Z",
      channelId: "UCjzHeG1KWoonmf9d5KBvSiw",
      channelTitle: "Soothing Relaxation",
      title:
        "Beautiful Piano Music 24/7 • Study Music, Relaxing Music, Sleep Music, Meditation Music",
      description:
        "Beautiful piano music 24/7 live stream featuring relaxing music by me, Peder B. Helland. Suitable as study music, sleep music, meditation music and ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/y7e-GC6oGhg/default_live.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/y7e-GC6oGhg/mqdefault_live.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/y7e-GC6oGhg/hqdefault_live.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/y7e-GC6oGhg/default_live.jpg"
    },
    {
      id: "k3_tw44QsZQ",
      link: "https://www.youtube.com/watch?v=k3_tw44QsZQ",
      kind: "youtube#video",
      publishedAt: "2015-06-17T11:41:49.000Z",
      channelId: "UCaPU4Zcr5Hoi6Io9G-xKexA",
      channelTitle: "Instrumental Music Playlist Collection",
      title:
        "Soft Jazz Sexy  Instrumental Relaxation Saxophone Music 2013 Collection",
      description:
        "Title: Soft Jazz Sexy Artist: Soft Jazz Year: 2013 Genre: Jazz Format / Codec: Mp3 Bitrate: 320 kbps Track list: 01. Ain't No Sunshine (When She's Gone) 02.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/k3_tw44QsZQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/k3_tw44QsZQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/k3_tw44QsZQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/k3_tw44QsZQ/default.jpg"
    },
    {
      id: "CcsUYu0PVxY",
      link: "https://www.youtube.com/watch?v=CcsUYu0PVxY",
      kind: "youtube#video",
      publishedAt: "2014-02-05T10:05:04.000Z",
      channelId: "UCdQnjeuggsBIqkqnhIwdxSA",
      channelTitle: "utopiansounds",
      title: "4 hours Peaceful &amp; Relaxing Instrumental Music-Long Playlist",
      description:
        "If you want more relaxing music try the Relax Melodies app: https://relaxmelodies.com You can listen to it offline too! 4 hours of soothing background music for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/CcsUYu0PVxY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/CcsUYu0PVxY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/CcsUYu0PVxY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/CcsUYu0PVxY/default.jpg"
    },
    {
      id: "_qzo8fRwWHc",
      link: "https://www.youtube.com/watch?v=_qzo8fRwWHc",
      kind: "youtube#video",
      publishedAt: "2018-10-30T23:45:01.000Z",
      channelId: "UCm1Tu7lM4zdbsZYHbzCfctg",
      channelTitle: "Rujay",
      title:
        "&quot;Next Level&quot; - Freestyle Trap Beat Free Rap Hip Hop Instrumental 2018 | SeriouzBeats #Instrumentals",
      description:
        "722 - \"Next Level\" - Freestyle Trap Beat Free New Rap Hip Hop Instrumental Music 2018, by Dutch producer SeriouzBeats. #Instrumentals | Purchase (No ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_qzo8fRwWHc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/_qzo8fRwWHc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/_qzo8fRwWHc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/_qzo8fRwWHc/default.jpg"
    },
    {
      id: "J65GxJ2v9Wg",
      link: "https://www.youtube.com/watch?v=J65GxJ2v9Wg",
      kind: "youtube#video",
      publishedAt: "2015-03-26T17:00:00.000Z",
      channelId: "UCYy9EGb3fvmUSgMVfJ7KXJw",
      channelTitle: "Nu Meditation Music",
      title:
        "Indian Background Flute Music: Instrumental Meditation Music | Yoga Music | Spa Music for Relaxation",
      description:
        "NuMeditationMusic youtube channel is devoted to create a new collection of LONG MEDITATION MUSIC videos for you to relax and enjoy in your daily ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/J65GxJ2v9Wg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/J65GxJ2v9Wg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/J65GxJ2v9Wg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/J65GxJ2v9Wg/default.jpg"
    }
  ],
  jazz: [
    {
      id: "hHW1oY26kxQ",
      link: "https://www.youtube.com/watch?v=hHW1oY26kxQ",
      kind: "youtube#video",
      publishedAt: "2018-08-22T19:51:06.000Z",
      channelId: "UCSJ4gkVC6NrvII8umztf0Ow",
      channelTitle: "ChilledCow",
      title: "lofi hip hop radio - beats to relax/study to",
      description:
        "Thank you for listening, I hope you will have a good time here :) 🧡Join the ChilledCow family to get awesome perks → https://bit.ly/chilledcow-family Check out ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hHW1oY26kxQ/default_live.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/hHW1oY26kxQ/mqdefault_live.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/hHW1oY26kxQ/hqdefault_live.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/hHW1oY26kxQ/default_live.jpg"
    },
    {
      id: "71Gt46aX9Z4",
      link: "https://www.youtube.com/watch?v=71Gt46aX9Z4",
      kind: "youtube#video",
      publishedAt: "2017-04-18T16:17:27.000Z",
      channelId: "UCYY_YLVWFI_IZ51Eu6x9bgA",
      channelTitle: "Don's Tunes",
      title: "Gary B.B. Coleman - The Sky is Crying",
      description:
        "Album: Too Much Weekend https://amzn.to/2SwXcKO Lyrics: The sky is cryin....Can't you see the tears roll down the street The sky is cryin....Can't you see the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/71Gt46aX9Z4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/71Gt46aX9Z4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/71Gt46aX9Z4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/71Gt46aX9Z4/default.jpg"
    },
    {
      id: "vmDDOFXSgAs",
      link: "https://www.youtube.com/watch?v=vmDDOFXSgAs",
      kind: "youtube#video",
      publishedAt: "2008-06-03T04:20:59.000Z",
      channelId: "UCIn_lAQ-pd3fu0Q_xNyltFQ",
      channelTitle: "buckinny",
      title: "Dave Brubeck - Take Five",
      description: "Dave Brubeck - Take Five.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vmDDOFXSgAs/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/vmDDOFXSgAs/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/vmDDOFXSgAs/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/vmDDOFXSgAs/default.jpg"
    },
    {
      id: "k3_tw44QsZQ",
      link: "https://www.youtube.com/watch?v=k3_tw44QsZQ",
      kind: "youtube#video",
      publishedAt: "2015-06-17T11:41:49.000Z",
      channelId: "UCaPU4Zcr5Hoi6Io9G-xKexA",
      channelTitle: "Instrumental Music Playlist Collection",
      title:
        "Soft Jazz Sexy  Instrumental Relaxation Saxophone Music 2013 Collection",
      description:
        "Title: Soft Jazz Sexy Artist: Soft Jazz Year: 2013 Genre: Jazz Format / Codec: Mp3 Bitrate: 320 kbps Track list: 01. Ain't No Sunshine (When She's Gone) 02.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/k3_tw44QsZQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/k3_tw44QsZQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/k3_tw44QsZQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/k3_tw44QsZQ/default.jpg"
    },
    {
      id: "_sI_Ps7JSEk",
      link: "https://www.youtube.com/watch?v=_sI_Ps7JSEk",
      kind: "youtube#video",
      publishedAt: "2016-11-07T16:56:50.000Z",
      channelId: "UCLue5AhDOIpePYzlc3rOVVQ",
      channelTitle: "Jazz and Blues Experience",
      title: "New York Jazz Lounge - Bar Jazz Classics",
      description:
        "Great compilation of relaxing Bar Jazz Classics. Stream/Download here: https://lnk.to/NYJL_BJC Check out PART II of our Bar Jazz Classics by New York Jazz ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_sI_Ps7JSEk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/_sI_Ps7JSEk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/_sI_Ps7JSEk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/_sI_Ps7JSEk/default.jpg"
    },
    {
      id: "jpv2tMJJuz0",
      link: "https://www.youtube.com/watch?v=jpv2tMJJuz0",
      kind: "youtube#video",
      publishedAt: "2017-06-12T10:00:05.000Z",
      channelId: "UCLr_PnLF0aClbzrEnpyxx0A",
      channelTitle: "Ron Gelinas Chillout Lounge",
      title: "EHRLING - Nu Lounge Bar Music 2017 (Mix #1)",
      description:
        "TRACK LIST 00:00 - Ehrling - Sthlm Sunset - https://soundcloud.com/ehrling/ehrling-sthlm-sunset 02:53 - Ehrling - Stay Forever Ft. Yohanna Seifu ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/jpv2tMJJuz0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/jpv2tMJJuz0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/jpv2tMJJuz0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/jpv2tMJJuz0/default.jpg"
    },
    {
      id: "9ka5bgHnHyg",
      link: "https://www.youtube.com/watch?v=9ka5bgHnHyg",
      kind: "youtube#video",
      publishedAt: "2014-10-16T14:33:30.000Z",
      channelId: "UCzcn2eAUHZ2Ba3x7hZF6q2w",
      channelTitle: "Stay See",
      title: "Hip Hop &#39; Funk &#39; Jazz - Ours Samplus",
      description:
        "Ours Samplus Vol.2 https://bit.ly/2JtPChA Similar Music on Spotify https://chillhop.lnk.to/spotifyEB If you like Gramatik , ProleteR , Parov Stelar .. this music is for ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9ka5bgHnHyg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/9ka5bgHnHyg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/9ka5bgHnHyg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/9ka5bgHnHyg/default.jpg"
    },
    {
      id: "gwDoRPcPxtc",
      link: "https://www.youtube.com/watch?v=gwDoRPcPxtc",
      kind: "youtube#video",
      publishedAt: "2016-09-07T17:43:08.000Z",
      channelId: "UCOxqgCwgOqC2lMqC5PYz_Dg",
      channelTitle: "Chillhop Music",
      title:
        "Chill Study Beats 2 • Instrumental &amp; Jazz Hip Hop Music [2016]",
      description:
        "Chill Study Beats 24/7 radio » https://chillhop.ffm.to/lofihiphopradio.eko 2 Hours of mellow jazzy beats from artists like J Dilla, Nujabes as well as a lot of lesser ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/gwDoRPcPxtc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/gwDoRPcPxtc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/gwDoRPcPxtc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/gwDoRPcPxtc/default.jpg"
    },
    {
      id: "K2Q6YO3Ez44",
      link: "https://www.youtube.com/watch?v=K2Q6YO3Ez44",
      kind: "youtube#video",
      publishedAt: "2015-08-20T00:22:23.000Z",
      channelId: "UCJhjE7wbdYAae1G25m0tHAA",
      channelTitle: "Cafe Music BGM channel",
      title: "Cafe Music!!Jazz &amp; Bossa Nova instrumental Music!!",
      description:
        "Please Subscribe! https://www.youtube.com/user/cafemusicbgmchannel Music For Business「Cafe Music BGM Station」 English: https://bgm-station.com/en/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/K2Q6YO3Ez44/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/K2Q6YO3Ez44/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/K2Q6YO3Ez44/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/K2Q6YO3Ez44/default.jpg"
    },
    {
      id: "_CI-0E_jses",
      link: "https://www.youtube.com/watch?v=_CI-0E_jses",
      kind: "youtube#video",
      publishedAt: "2010-12-07T05:58:25.000Z",
      channelId: "UCh6EL7766v3Ve5csF2NrW7g",
      channelTitle: "symir547",
      title: "Glenn Miller - In The Mood [HQ]",
      description:
        "Glenn Miller - In The Mood Picture is from the movie \"The Glenn Miller Story\" (1953) starring James Stewart \"In the Mood\" is a song popularized by the American ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_CI-0E_jses/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/_CI-0E_jses/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/_CI-0E_jses/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/_CI-0E_jses/default.jpg"
    }
  ],
  metal: [
    {
      id: "CSvFpBOe8eY",
      link: "https://www.youtube.com/watch?v=CSvFpBOe8eY",
      kind: "youtube#video",
      publishedAt: "2009-10-03T04:45:02.000Z",
      channelId: "UCvtZDkeFxMkRTNqfqXtxxkw",
      channelTitle: "systemofadownVEVO",
      title: "System Of A Down - Chop Suey!",
      description:
        "System of a Down's official music video for 'Chop Suey!'. Click to listen to System of a Down on Spotify: http://smarturl.it/SystemSpotify?IQid=SystemCS As ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/CSvFpBOe8eY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/CSvFpBOe8eY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/CSvFpBOe8eY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/CSvFpBOe8eY/default.jpg"
    },
    {
      id: "ScNNfyq3d_w",
      link: "https://www.youtube.com/watch?v=ScNNfyq3d_w",
      kind: "youtube#video",
      publishedAt: "2012-10-10T13:00:23.000Z",
      channelId: "UCZU9T1ceaOgwfLRq7OKFU4Q",
      channelTitle: "Linkin Park",
      title: "CASTLE OF GLASS (Official Video) - Linkin Park",
      description:
        "Linkin Park \"CASTLE OF GLASS\" off of the album LIVING THINGS. \"CASTLE OF GLASS\" is featured in the EA game Medal of Honor Warfighter. Directed by ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ScNNfyq3d_w/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/ScNNfyq3d_w/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/ScNNfyq3d_w/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/ScNNfyq3d_w/default.jpg"
    },
    {
      id: "CD-E-LDc384",
      link: "https://www.youtube.com/watch?v=CD-E-LDc384",
      kind: "youtube#video",
      publishedAt: "2012-03-19T20:34:06.000Z",
      channelId: "UCbulh9WdLtEXiooRcYK7SWw",
      channelTitle: "MetallicaTV",
      title: "Metallica - Enter Sandman [Official Music Video]",
      description:
        "Enter Sandman [Official Music Video] From the album \"Metallica\" Director: Wayne Isham Filmed in June 1991 in Los Angeles, CA Video Premiere Date: July 30, ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/CD-E-LDc384/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/CD-E-LDc384/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/CD-E-LDc384/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/CD-E-LDc384/default.jpg"
    },
    {
      id: "5abamRO41fE",
      link: "https://www.youtube.com/watch?v=5abamRO41fE",
      kind: "youtube#video",
      publishedAt: "2009-10-29T21:25:38.000Z",
      channelId: "UCOJZ1tna8yj8mAEITPkHNCQ",
      channelTitle: "Slipknot",
      title: "Slipknot - Psychosocial [OFFICIAL VIDEO]",
      description:
        "Slipknot's music video for 'Psychosocial' from the album, All Hope Is Gone - available now on Roadrunner Records. Download the album on iTunes: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/5abamRO41fE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/5abamRO41fE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/5abamRO41fE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/5abamRO41fE/default.jpg"
    },
    {
      id: "L-iepu3EtyE",
      link: "https://www.youtube.com/watch?v=L-iepu3EtyE",
      kind: "youtube#video",
      publishedAt: "2009-10-03T04:51:24.000Z",
      channelId: "UCvtZDkeFxMkRTNqfqXtxxkw",
      channelTitle: "systemofadownVEVO",
      title: "System Of A Down - Aerials (Official Video)",
      description:
        "Best of System Of A Down https://goo.gl/rFVz2W Subscribe for more https://goo.gl/LnL81c Music video by System Of A Down performing Aerials. (C) 2002 SONY ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/L-iepu3EtyE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/L-iepu3EtyE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/L-iepu3EtyE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/L-iepu3EtyE/default.jpg"
    },
    {
      id: "9sTQ0QdkN3Q",
      link: "https://www.youtube.com/watch?v=9sTQ0QdkN3Q",
      kind: "youtube#video",
      publishedAt: "2009-10-25T07:03:11.000Z",
      channelId: "UC47Xz8LVxEJBX5gmkW9mALQ",
      channelTitle: "bulletvalentineVEVO",
      title:
        "Bullet For My Valentine - Tears Don&#39;t Fall (Album Edit - with Scream / with Lighter)",
      description:
        "Amazing LIVE EP out Oct 16th...COMPLETELY FREE! If you are in Europe, Australia or New Zealand you can pre-order now. http://smarturl.it/VenomGPD Bullet ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9sTQ0QdkN3Q/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/9sTQ0QdkN3Q/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/9sTQ0QdkN3Q/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/9sTQ0QdkN3Q/default.jpg"
    },
    {
      id: "RYnFIRc0k6E",
      link: "https://www.youtube.com/watch?v=RYnFIRc0k6E",
      kind: "youtube#video",
      publishedAt: "2009-10-05T13:19:02.000Z",
      channelId: "UCUPvo-jwM02Fp-vigFEiG2A",
      channelTitle: "LimpBizkitVEVO",
      title: "Limp Bizkit - Rollin&#39; (Official Video)",
      description:
        "Official Website: http://limpbizkit.com/ Stream: https://lnk.to/_C92p Facebook: https://www.facebook.com/limpbizkit Twitter: https://twitter.com/limpbizkit Instagram: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/RYnFIRc0k6E/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/RYnFIRc0k6E/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/RYnFIRc0k6E/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/RYnFIRc0k6E/default.jpg"
    },
    {
      id: "OYjZK_6i37M",
      link: "https://www.youtube.com/watch?v=OYjZK_6i37M",
      kind: "youtube#video",
      publishedAt: "2009-10-07T16:50:49.000Z",
      channelId: "UC0a4ZRoauYMqgllbEbFBnaw",
      channelTitle: "GodsmackVEVO",
      title: "Godsmack - I Stand Alone (Official Music Video)",
      description:
        "Music video by Godsmack performing I Stand Alone. (C) 2001 Universal Motown Records, a division of UMG Recordings, Inc. Distributed by Universal Music ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/OYjZK_6i37M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/OYjZK_6i37M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/OYjZK_6i37M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/OYjZK_6i37M/default.jpg"
    },
    {
      id: "WM8bTdBs-cw",
      link: "https://www.youtube.com/watch?v=WM8bTdBs-cw",
      kind: "youtube#video",
      publishedAt: "2009-10-27T01:53:30.000Z",
      channelId: "UCbulh9WdLtEXiooRcYK7SWw",
      channelTitle: "MetallicaTV",
      title: "Metallica - One [Official Music Video]",
      description:
        "One [Official Music Video] From the album \"...And Justice For All\" Director: Bill Pope and Michael Salomon Filmed in December 1988 in Long Beach, CA Video ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WM8bTdBs-cw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WM8bTdBs-cw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WM8bTdBs-cw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WM8bTdBs-cw/default.jpg"
    },
    {
      id: "AkFqg5wAuFk",
      link: "https://www.youtube.com/watch?v=AkFqg5wAuFk",
      kind: "youtube#video",
      publishedAt: "2009-10-27T01:35:58.000Z",
      channelId: "UChTDORxN3YPmasEurM6kRoA",
      channelTitle: "pantera",
      title: "Pantera - Walk (Official Video)",
      description:
        "Watch the official video for Pantera \"Walk\" This song is considered to be one of the band's best tracks and is also the band's most well known song to both ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/AkFqg5wAuFk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/AkFqg5wAuFk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/AkFqg5wAuFk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/AkFqg5wAuFk/default.jpg"
    }
  ],
  musicalTheatre: [
    {
      id: "EGNOF1zB5aY",
      link: "https://www.youtube.com/watch?v=EGNOF1zB5aY",
      kind: "youtube#video",
      publishedAt: "2014-05-26T23:18:56.000Z",
      channelId: "UCUtZaxDF3hD5VK4xRYFBePQ",
      channelTitle: "Britain's Got Talent",
      title:
        "Musical theatre boyband Collabro sing Bring Him Home | Britain&#39;s Got Talent 2014",
      description:
        "See more from Britain's Got Talent at http://itv.com/talent Collabro give a rousing rendition of Bring Him Home from Les Miserables. Does the grand final stage ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/EGNOF1zB5aY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/EGNOF1zB5aY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/EGNOF1zB5aY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/EGNOF1zB5aY/default.jpg"
    },
    {
      id: "o-gLbgpzCc8",
      link: "https://www.youtube.com/watch?v=o-gLbgpzCc8",
      kind: "youtube#video",
      publishedAt: "2016-01-10T06:33:43.000Z",
      channelId: "UCBh2MtapL0Qbcby_v_hyEXA",
      channelTitle: "Wesley Alfvin",
      title:
        "&quot;Disney&#39;s Aladdin - A Musical Spectacular&quot; (Full Performance 1080p HD)",
      description:
        "The 12:50 performance on January 8th, 2016 in the Hyperion Theatre at Disney California Adventure.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/o-gLbgpzCc8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/o-gLbgpzCc8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/o-gLbgpzCc8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/o-gLbgpzCc8/default.jpg"
    },
    {
      id: "RTnDs3ujHXE",
      link: "https://www.youtube.com/watch?v=RTnDs3ujHXE",
      kind: "youtube#video",
      publishedAt: "2015-11-25T01:00:00.000Z",
      channelId: "UCaWd5_7JhbQBe4dknZhsHJg",
      channelTitle: "WatchMojo.com",
      title: "Top 10 Songs From Theatre Musicals",
      description:
        "Roll out the red carpet, and wind down your windows! Because you'll soon be singing along like you're the star of the show! Join http://www.WatchMojo.com as ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/RTnDs3ujHXE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/RTnDs3ujHXE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/RTnDs3ujHXE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/RTnDs3ujHXE/default.jpg"
    },
    {
      id: "3797IrBzEkY",
      link: "https://www.youtube.com/watch?v=3797IrBzEkY",
      kind: "youtube#video",
      publishedAt: "2014-06-10T13:00:06.000Z",
      channelId: "UCNwfetrlhfJVTxwwXIFDYYw",
      channelTitle: "Spirit Young Performers Company",
      title: "MUSICAL THEATRE MEDLEY - Amazing Kids (live)!",
      description:
        "Performers aged 7-15 pay tribute to some of the best musicals through the decades in this medley. Arranged by Matthew Pallant. Musical Direction by Daniel ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3797IrBzEkY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/3797IrBzEkY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/3797IrBzEkY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/3797IrBzEkY/default.jpg"
    },
    {
      id: "mKuauz9tqKg",
      link: "https://www.youtube.com/watch?v=mKuauz9tqKg",
      kind: "youtube#video",
      publishedAt: "2017-12-19T10:57:14.000Z",
      channelId: "UCxdywJEJaJevLAK4mPtdTQA",
      channelTitle: "PhantomifyEponine",
      title: "Try Not To Sing Along Challenge - Musical Theatre Edition",
      description:
        "29 catchy songs. 29 amazing musicals. Can you try not to sing? RULES! Try not to sing any of these songs, or else you lose. If you do lose, then you're a true fan!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mKuauz9tqKg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/mKuauz9tqKg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/mKuauz9tqKg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/mKuauz9tqKg/default.jpg"
    },
    {
      id: "wG6XZb362gg",
      link: "https://www.youtube.com/watch?v=wG6XZb362gg",
      kind: "youtube#video",
      publishedAt: "2016-04-25T02:23:07.000Z",
      channelId: "UCecjFpsPcNDzpVSD2KepcsA",
      channelTitle: "ImprovAddiction",
      title: "Overdone Musical Theatre Medley",
      description:
        "Featuring the TheatreUCF Musical Theatre BFA Class of 2019 Arranged and Directed by Kent James Collins -- www.kentjamescollins.com Accompanied by Dr.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/wG6XZb362gg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/wG6XZb362gg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/wG6XZb362gg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/wG6XZb362gg/default.jpg"
    },
    {
      id: "pnw4bnCEv-o",
      link: "https://www.youtube.com/watch?v=pnw4bnCEv-o",
      kind: "youtube#video",
      publishedAt: "2014-12-03T20:21:10.000Z",
      channelId: "UCay_OLhWtf9iklq8zg_or0g",
      channelTitle: "As/Is",
      title: "Things Musical Theatre Nerds Do (The Musical)",
      description:
        "Everyone's got a little wicked in them! Check out more awesome BuzzFeedYellow videos! http://bit.ly/YTbuzzfeedyellow MUSIC: “Things That Musical Nerds Do” ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/pnw4bnCEv-o/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/pnw4bnCEv-o/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/pnw4bnCEv-o/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/pnw4bnCEv-o/default.jpg"
    },
    {
      id: "va8VDBGcKS4",
      link: "https://www.youtube.com/watch?v=va8VDBGcKS4",
      kind: "youtube#video",
      publishedAt: "2012-04-04T18:01:26.000Z",
      channelId: "UC0nmrsKUDT6VnMukSK2LpzQ",
      channelTitle: "ATTPAC",
      title: "Chicago The Musical - &quot;All That Jazz&quot;",
      description:
        "Visit http://www.attpac.org/broadway for more information on our 2012/2013 Lexus Broadway Series. 6-Show Packages start at just $130 and include tickets to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/va8VDBGcKS4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/va8VDBGcKS4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/va8VDBGcKS4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/va8VDBGcKS4/default.jpg"
    },
    {
      id: "UtBR1qHK4CI",
      link: "https://www.youtube.com/watch?v=UtBR1qHK4CI",
      kind: "youtube#video",
      publishedAt: "2013-09-25T03:42:31.000Z",
      channelId: "UCVgtrMR95eCbXlQlN_uQK7Q",
      channelTitle: "Martin HS Fan",
      title: "INTO THE WOODS - Full Performance - Arlington Martin High School",
      description:
        "\"Into the Woods\" Book by James Lapine Music and Lyrics by Stephen Sondheim Directed by Larry Cure and Sharon Miller Assistant Directed and Choreography ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/UtBR1qHK4CI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/UtBR1qHK4CI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/UtBR1qHK4CI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/UtBR1qHK4CI/default.jpg"
    },
    {
      id: "DHt2H71mf54",
      link: "https://www.youtube.com/watch?v=DHt2H71mf54",
      kind: "youtube#video",
      publishedAt: "2015-08-04T15:59:09.000Z",
      channelId: "UCNwfetrlhfJVTxwwXIFDYYw",
      channelTitle: "Spirit Young Performers Company",
      title: "Women in Musical Theatre - LIVE MEDLEY! From Spirit YPC",
      description:
        "Exceptional young singers aged 9-13 celebrate female characters in musical theatre. Put together in 8 hours during our July Summer Workshop. Musical ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/DHt2H71mf54/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/DHt2H71mf54/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/DHt2H71mf54/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/DHt2H71mf54/default.jpg"
    }
  ],
  pop: [
    {
      id: "yTCDVfMz15M",
      link: "https://www.youtube.com/watch?v=yTCDVfMz15M",
      kind: "youtube#video",
      publishedAt: "2012-10-10T10:00:27.000Z",
      channelId: "UCXJDX1KK6t121Z9FLhu5o2A",
      channelTitle: "PinkVEVO",
      title: "P!nk - Try (Official Music Video)",
      description:
        "P!nk's official music video for 'Try'. Click to listen to P!nk on Spotify: http://smarturl.it/PSpot?IQid=PinkT As featured on The Truth About Love. Click to buy the track ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/yTCDVfMz15M/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/yTCDVfMz15M/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/yTCDVfMz15M/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/yTCDVfMz15M/default.jpg"
    },
    {
      id: "FJfFZqTlWrQ",
      link: "https://www.youtube.com/watch?v=FJfFZqTlWrQ",
      kind: "youtube#video",
      publishedAt: "2009-10-25T07:03:43.000Z",
      channelId: "UCXJDX1KK6t121Z9FLhu5o2A",
      channelTitle: "PinkVEVO",
      title: "P!nk - So What (Official Music Video)",
      description:
        "P!nk's official music video for 'So What'. Click to listen to P!nk on Spotify: http://smarturl.it/PSpot?IQid=PSW As featured on Greatest Hits...So Far!!!. Click to buy ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/FJfFZqTlWrQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/FJfFZqTlWrQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/FJfFZqTlWrQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/FJfFZqTlWrQ/default.jpg"
    },
    {
      id: "emGri7i8Y2Y",
      link: "https://www.youtube.com/watch?v=emGri7i8Y2Y",
      kind: "youtube#video",
      publishedAt: "2009-06-16T23:05:47.000Z",
      channelId: "UC7CB-tlRjK9GW-Exb1LhMyg",
      channelTitle: "Sum41VEVO",
      title: "Sum 41 - In Too Deep (Official Music Video)",
      description:
        "Music video by Sum 41 performing In Too Deep. (C) 2001 The Island Def Jam Music Group #Sum41 #InTooDeep #Vevo #Rock #OfficialMusicVideo.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/emGri7i8Y2Y/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/emGri7i8Y2Y/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/emGri7i8Y2Y/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/emGri7i8Y2Y/default.jpg"
    },
    {
      id: "LkIWmsP3c_s",
      link: "https://www.youtube.com/watch?v=LkIWmsP3c_s",
      kind: "youtube#video",
      publishedAt: "2013-02-08T15:55:07.000Z",
      channelId: "UCe3I9BAVCzf9oACYU1EtrxA",
      channelTitle: "FallOutBoyVEVO",
      title:
        "Fall Out Boy - My Songs Know What You Did In The Dark (Light Em Up) (Part 1)",
      description:
        "SUBSCRIBE TO FOB: http://bit.ly/1gI9KrO Listen to the new single \"Centuries\" http://youtu.be/sCbS-TLEoRA and download it on iTunes http://smarturl.it/centuries ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LkIWmsP3c_s/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/LkIWmsP3c_s/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/LkIWmsP3c_s/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/LkIWmsP3c_s/default.jpg"
    },
    {
      id: "C3lWwBslWqg",
      link: "https://www.youtube.com/watch?v=C3lWwBslWqg",
      kind: "youtube#video",
      publishedAt: "2009-06-16T23:06:15.000Z",
      channelId: "UC9B6c09n61wgu5w6bh1v68Q",
      channelTitle: "StingVEVO",
      title: "Sting - Desert Rose (Official Video)",
      description:
        "Music video by Sting performing Desert Rose. (C) 1999 A&M Records #Sting #DesertRose #Vevo.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/C3lWwBslWqg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/C3lWwBslWqg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/C3lWwBslWqg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/C3lWwBslWqg/default.jpg"
    },
    {
      id: "uuNTO31FlY8",
      link: "https://www.youtube.com/watch?v=uuNTO31FlY8",
      kind: "youtube#video",
      publishedAt: "2013-08-20T07:00:16.000Z",
      channelId: "UCC6XuDtfec7DxZdUa7ClFBQ",
      channelTitle: "AvrilLavigneVEVO",
      title: "Avril Lavigne - Rock N Roll (Official Music Video)",
      description:
        "Rock N Roll Buy the album here: http://smarturl.it/avril-lavigne Follow Avril: http://www.avrillavigne.com http://youtube.com/AvrilLavigneVEVO ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/uuNTO31FlY8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/uuNTO31FlY8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/uuNTO31FlY8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/uuNTO31FlY8/default.jpg"
    },
    {
      id: "iwxfmYR7ItM",
      link: "https://www.youtube.com/watch?v=iwxfmYR7ItM",
      kind: "youtube#video",
      publishedAt: "2017-07-28T12:57:31.000Z",
      channelId: "UCcFUPGt_tgcP5iMxiBDsXoA",
      channelTitle: "THEORY",
      title: "THEORY - Rx (Medicate) [OFFICIAL VIDEO]",
      description:
        "THEORY's music video for 'Rx (Medicate)', off the album \"Wake Up Call\", available now: http://theoryofadeadman.com Subscribe: http://bit.ly/171a3Ya Site: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/iwxfmYR7ItM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/iwxfmYR7ItM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/iwxfmYR7ItM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/iwxfmYR7ItM/default.jpg"
    },
    {
      id: "K1b8AhIsSYQ",
      link: "https://www.youtube.com/watch?v=K1b8AhIsSYQ",
      kind: "youtube#video",
      publishedAt: "2013-02-06T19:20:08.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title: "Starship - We Built This City (Official Music Video)",
      description:
        "You're watching the official music video for Starship - \"We Built This City\" from the 1985 album 'Knee Deep in the Hoopla'. Subscribe to the Rhino Channel!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/K1b8AhIsSYQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/K1b8AhIsSYQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/K1b8AhIsSYQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/K1b8AhIsSYQ/default.jpg"
    },
    {
      id: "mCHUw7ACS8o",
      link: "https://www.youtube.com/watch?v=mCHUw7ACS8o",
      kind: "youtube#video",
      publishedAt: "2014-07-29T15:50:00.000Z",
      channelId: "UCNqs2VoY5KXMeOm4wo5U2Lw",
      channelTitle: "OfMonstersAndMenVEVO",
      title: "Of Monsters And Men - Dirty Paws (Official Lyric Video)",
      description:
        "Download this song: http://smarturl.it/OMAMalbumitunes Directed by WeWereMonkeys https://www.facebook.com/weweremonkeys Compositions © 2012 Of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mCHUw7ACS8o/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/mCHUw7ACS8o/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/mCHUw7ACS8o/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/mCHUw7ACS8o/default.jpg"
    },
    {
      id: "YYOKMUTTDdA",
      link: "https://www.youtube.com/watch?v=YYOKMUTTDdA",
      kind: "youtube#video",
      publishedAt: "2009-10-27T02:28:07.000Z",
      channelId: "UC7eaRqtonpyiYw0Pns0Au_g",
      channelTitle: "remhq",
      title: "R.E.M. - Shiny Happy People (Official Music Video)",
      description:
        "Shiny Happy People” from R.E.M.'s critically-acclaimed, 1991 album, \"Out Of Time\" To learn more, visit http://www.remhq.com. Buy the album: 3CD+BluRay ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/YYOKMUTTDdA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/YYOKMUTTDdA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/YYOKMUTTDdA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/YYOKMUTTDdA/default.jpg"
    }
  ],
  punk: [
    {
      id: "NUTGr5t3MoY",
      link: "https://www.youtube.com/watch?v=NUTGr5t3MoY",
      kind: "youtube#video",
      publishedAt: "2009-10-27T02:25:14.000Z",
      channelId: "UCqC_GY2ZiENFz2pwL0cSfAw",
      channelTitle: "Green Day",
      title: "Green Day - Basket Case [Official Music Video]",
      description:
        "\"Basket Case\" by Green Day from 'Dookie,' available now. Directed by Mark Kohr. Watch the best Green Day official videos here: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/NUTGr5t3MoY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/NUTGr5t3MoY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/NUTGr5t3MoY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/NUTGr5t3MoY/default.jpg"
    },
    {
      id: "emGri7i8Y2Y",
      link: "https://www.youtube.com/watch?v=emGri7i8Y2Y",
      kind: "youtube#video",
      publishedAt: "2009-06-16T23:05:47.000Z",
      channelId: "UC7CB-tlRjK9GW-Exb1LhMyg",
      channelTitle: "Sum41VEVO",
      title: "Sum 41 - In Too Deep (Official Music Video)",
      description:
        "Music video by Sum 41 performing In Too Deep. (C) 2001 The Island Def Jam Music Group #Sum41 #InTooDeep #Vevo #Rock #OfficialMusicVideo.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/emGri7i8Y2Y/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/emGri7i8Y2Y/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/emGri7i8Y2Y/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/emGri7i8Y2Y/default.jpg"
    },
    {
      id: "Ee_uujKuJMI",
      link: "https://www.youtube.com/watch?v=Ee_uujKuJMI",
      kind: "youtube#video",
      publishedAt: "2012-08-22T00:41:14.000Z",
      channelId: "UCqC_GY2ZiENFz2pwL0cSfAw",
      channelTitle: "Green Day",
      title: "Green Day - American Idiot [OFFICIAL VIDEO]",
      description:
        "Watch Green Day's official video for \"American Idiot\" Get the new album ¡Tre! at http://smarturl.it/treamazon now! Watch the best Green Day official videos here: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Ee_uujKuJMI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Ee_uujKuJMI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Ee_uujKuJMI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/Ee_uujKuJMI/default.jpg"
    },
    {
      id: "vVy9Lgpg1m8",
      link: "https://www.youtube.com/watch?v=vVy9Lgpg1m8",
      kind: "youtube#video",
      publishedAt: "2009-06-16T22:51:20.000Z",
      channelId: "UCf2WBemooP2gBBx3lrraNQw",
      channelTitle: "blink182VEVO",
      title: "blink-182 - First Date",
      description:
        "Listen to more from Blink-182: https://lnk.to/Blink182 Discover more about this classic song and the Take Off Your Pants And Jacket album here: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vVy9Lgpg1m8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/vVy9Lgpg1m8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/vVy9Lgpg1m8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/vVy9Lgpg1m8/default.jpg"
    },
    {
      id: "e8X3ACToii0",
      link: "https://www.youtube.com/watch?v=e8X3ACToii0",
      kind: "youtube#video",
      publishedAt: "2009-11-26T03:37:40.000Z",
      channelId: "UChMKB2AHNpeuWhalpRYhUaw",
      channelTitle: "RiseAgainstVEVO",
      title: "Rise Against - Savior (Official Video)",
      description:
        "Music video by Rise Against performing Savior. (C) 2009 DGC Records #RiseAgainst #Savior #Vevo #Rock #VevoOfficial.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/e8X3ACToii0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/e8X3ACToii0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/e8X3ACToii0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/e8X3ACToii0/default.jpg"
    },
    {
      id: "UCCyoocDxBA",
      link: "https://www.youtube.com/watch?v=UCCyoocDxBA",
      kind: "youtube#video",
      publishedAt: "2009-10-27T02:35:15.000Z",
      channelId: "UCCZGYab5SpD0I7Z5JqJZgww",
      channelTitle: "My Chemical Romance",
      title: "My Chemical Romance - Helena [Official Music Video]",
      description:
        "From 'Three Cheers for Sweet Revenge' Download/Stream: https://mcr.lnk.to/threecheers Connect with My Chemical Romance: http://MyChemicalRomance.com ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/UCCyoocDxBA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/UCCyoocDxBA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/UCCyoocDxBA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/UCCyoocDxBA/default.jpg"
    },
    {
      id: "9d8SzG4FPyM",
      link: "https://www.youtube.com/watch?v=9d8SzG4FPyM",
      kind: "youtube#video",
      publishedAt: "2012-11-08T20:51:49.000Z",
      channelId: "UCcIRZxNH7xcEt1fu4pfqFRg",
      channelTitle: "Dropkick Murphys",
      title: "Dropkick Murphys - &quot;Rose Tattoo&quot; (Video)",
      description:
        "Dropkick Murphys \"Rose Tattoo\" from the album \"SIGNED and SEALED in BLOOD\" Directed by: Chris Friend - http://www.visionfriend.com Band footage by: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9d8SzG4FPyM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/9d8SzG4FPyM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/9d8SzG4FPyM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/9d8SzG4FPyM/default.jpg"
    },
    {
      id: "9-SQGOYOjxs",
      link: "https://www.youtube.com/watch?v=9-SQGOYOjxs",
      kind: "youtube#video",
      publishedAt: "2009-10-07T18:21:48.000Z",
      channelId: "UChMKB2AHNpeuWhalpRYhUaw",
      channelTitle: "RiseAgainstVEVO",
      title: "Rise Against - Prayer Of The Refugee (Official Music Video)",
      description:
        "Music video by Rise Against performing Prayer Of The Refugee. (C) 2006 Geffen Records #RiseAgainst #PrayerOfTheRefugee #Vevo #Rock.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9-SQGOYOjxs/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/9-SQGOYOjxs/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/9-SQGOYOjxs/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/9-SQGOYOjxs/default.jpg"
    },
    {
      id: "7iNbnineUCI",
      link: "https://www.youtube.com/watch?v=7iNbnineUCI",
      kind: "youtube#video",
      publishedAt: "2017-01-18T01:08:42.000Z",
      channelId: "UCF3EnnuLjeab3r8l1k2rV9g",
      channelTitle: "OffspringVEVO",
      title:
        "The Offspring - The Kids Aren&#39;t Alright (Official Music Video)",
      description:
        "Playlist Best of Offspring: https://goo.gl/cwFfP6 Subscribe for more: https://goo.gl/JaSm1N Music video by The Offspring performing The Kids Aren't Alright.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/7iNbnineUCI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/7iNbnineUCI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/7iNbnineUCI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/7iNbnineUCI/default.jpg"
    },
    {
      id: "uCUpvTMis-Y",
      link: "https://www.youtube.com/watch?v=uCUpvTMis-Y",
      kind: "youtube#video",
      publishedAt: "2009-10-27T00:32:03.000Z",
      channelId: "UCCZGYab5SpD0I7Z5JqJZgww",
      channelTitle: "My Chemical Romance",
      title: "My Chemical Romance - The Ghost Of You [Official Music Video]",
      description:
        "From 'Three Cheers for Sweet Revenge' Download/Stream: https://mcr.lnk.to/threecheers Connect with My Chemical Romance: http://MyChemicalRomance.com ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/uCUpvTMis-Y/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/uCUpvTMis-Y/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/uCUpvTMis-Y/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/uCUpvTMis-Y/default.jpg"
    }
  ],
  rapping: [
    {
      id: "XbGs_qK2PQA",
      link: "https://www.youtube.com/watch?v=XbGs_qK2PQA",
      kind: "youtube#video",
      publishedAt: "2013-11-27T16:50:00.000Z",
      channelId: "UC20vb-R_px4CguHzzBPhoyQ",
      channelTitle: "EminemVEVO",
      title: "Eminem - Rap God (Explicit) [Official Video]",
      description:
        "Download Eminem's 'MMLP2' Album on iTunes now:http://smarturl.it/MMLP2 Credits below Video Director: Rich Lee Video Producer: Justin Diener Video ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/XbGs_qK2PQA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/XbGs_qK2PQA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/XbGs_qK2PQA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/XbGs_qK2PQA/default.jpg"
    },
    {
      id: "PEGccV-NOm8",
      link: "https://www.youtube.com/watch?v=PEGccV-NOm8",
      kind: "youtube#video",
      publishedAt: "2017-06-24T23:41:47.000Z",
      channelId: "UCxMAbVFmxKUVGAll0WVGpFw",
      channelTitle: "Cardi B",
      title: "Cardi B - Bodak Yellow [OFFICIAL MUSIC VIDEO]",
      description:
        "Cardi B - \"Bodak Yellow\" from the debut album Invasion of Privacy Stream/Download: https://CardiB.lnk.to/IOPAY Exclusive Bardi Gang merchandise available ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/PEGccV-NOm8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/PEGccV-NOm8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/PEGccV-NOm8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/PEGccV-NOm8/default.jpg"
    },
    {
      id: "lwk5OUII9Vc",
      link: "https://www.youtube.com/watch?v=lwk5OUII9Vc",
      kind: "youtube#video",
      publishedAt: "2017-05-26T16:00:08.000Z",
      channelId: "UCNinLG7WHOoH4clPD8Hnssg",
      channelTitle: "AyoandTeoVEVO",
      title: "Ayo &amp; Teo - Rolex (Official Music Video)",
      description:
        "Ayo & Teo's Official Video for \"Rolex\" Get \"Rolex\" here: http://smarturl.it/Rolex Follow Ayo: Twitter: https://twitter.com/OgLeloo Instagram: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/lwk5OUII9Vc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/lwk5OUII9Vc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/lwk5OUII9Vc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/lwk5OUII9Vc/default.jpg"
    },
    {
      id: "EHkozMIXZ8w",
      link: "https://www.youtube.com/watch?v=EHkozMIXZ8w",
      kind: "youtube#video",
      publishedAt: "2013-12-17T00:50:00.000Z",
      channelId: "UC20vb-R_px4CguHzzBPhoyQ",
      channelTitle: "EminemVEVO",
      title: "Eminem ft. Rihanna - The Monster (Explicit) [Official Video]",
      description:
        "Download Eminem's 'MMLP2' Album on iTunes now:http://smarturl.it/MMLP2 Music video by Eminem ft. Rihanna \"The Monster\" © 2013 Interscope Playlist Best ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/EHkozMIXZ8w/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/EHkozMIXZ8w/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/EHkozMIXZ8w/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/EHkozMIXZ8w/default.jpg"
    },
    {
      id: "4NJlUribp3c",
      link: "https://www.youtube.com/watch?v=4NJlUribp3c",
      kind: "youtube#video",
      publishedAt: "2016-03-10T08:00:00.000Z",
      channelId: "UCuoH9aFpJT0HltXb0XrKRNQ",
      channelTitle: "DesiignerVEVO",
      title: "Desiigner - Panda (Official Audio)",
      description:
        "Listen to “Panda” by Desiigner http://smarturl.it/dPanda iTunes http://smarturl.it/iPanda Google Play: http://smarturl.it/gPanda Amazon: http://smarturl.it/aPanda ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4NJlUribp3c/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4NJlUribp3c/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4NJlUribp3c/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4NJlUribp3c/default.jpg"
    },
    {
      id: "S9bCLPwzSC0",
      link: "https://www.youtube.com/watch?v=S9bCLPwzSC0",
      kind: "youtube#video",
      publishedAt: "2009-12-25T04:20:46.000Z",
      channelId: "UC20vb-R_px4CguHzzBPhoyQ",
      channelTitle: "EminemVEVO",
      title: "Eminem - Mockingbird (Official Music Video)",
      description:
        "Playlist Best of Eminem: https://goo.gl/AquNpo Subscribe for more: https://goo.gl/DxCrDV Music video by Eminem performing Mockingbird. YouTube view counts ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/S9bCLPwzSC0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/S9bCLPwzSC0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/S9bCLPwzSC0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/S9bCLPwzSC0/default.jpg"
    },
    {
      id: "lsJLLEwUYZM",
      link: "https://www.youtube.com/watch?v=lsJLLEwUYZM",
      kind: "youtube#video",
      publishedAt: "2015-12-20T21:36:07.000Z",
      channelId: "UCAfvFXvjzEupwo2NtyDhRZA",
      channelTitle: "Desiigner LOD",
      title: "Desiigner- Panda (OFFICIAL SONG) Prod. By: Menace",
      description:
        "Check out the latest single from Desiigner. This is the OFFICIAL PANDA!! AVAILABLE ON iTUNES NOW: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/lsJLLEwUYZM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/lsJLLEwUYZM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/lsJLLEwUYZM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/lsJLLEwUYZM/default.jpg"
    },
    {
      id: "K44j-sb1SRY",
      link: "https://www.youtube.com/watch?v=K44j-sb1SRY",
      kind: "youtube#video",
      publishedAt: "2016-07-22T17:01:22.000Z",
      channelId: "UC89dItegSy120X9dAhnKxMQ",
      channelTitle: "DRAM",
      title: "DRAM - Broccoli feat. Lil Yachty (Official Music Video)",
      description:
        "From the album Big Baby DRAM, available now. https://Empire.lnk.to/BigBabyDramDeluxeID Directed by Nathan R. Smith & Hidji Films ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/K44j-sb1SRY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/K44j-sb1SRY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/K44j-sb1SRY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/K44j-sb1SRY/default.jpg"
    },
    {
      id: "ngH0fkiNo-g",
      link: "https://www.youtube.com/watch?v=ngH0fkiNo-g",
      kind: "youtube#video",
      publishedAt: "2009-12-25T06:41:03.000Z",
      channelId: "UC20vb-R_px4CguHzzBPhoyQ",
      channelTitle: "EminemVEVO",
      title:
        "Eminem ft. 50 Cent, Cashis, Lloyd Banks - You Don&#39;t Know (Official Video)",
      description:
        "Music video by Eminem performing You Don't Know. (C) 2006 Shady Records/Interscope Records #Eminem #YouDontKnow #Vevo.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ngH0fkiNo-g/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/ngH0fkiNo-g/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/ngH0fkiNo-g/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/ngH0fkiNo-g/default.jpg"
    },
    {
      id: "LPTlvQ1Zet0",
      link: "https://www.youtube.com/watch?v=LPTlvQ1Zet0",
      kind: "youtube#video",
      publishedAt: "2018-03-01T14:00:02.000Z",
      channelId: "UCJTWqqBgwNNzF3p-YwPApKA",
      channelTitle: "21SavageVEVO",
      title:
        "21 Savage, Offset, Metro Boomin - Ric Flair Drip (Official Music Video)",
      description:
        "\"Without Warning\" available at http://smarturl.it/WithoutWarning 21 Savage online: https://twitter.com/21savage https://www.instagram.com/21savage ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LPTlvQ1Zet0/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/LPTlvQ1Zet0/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/LPTlvQ1Zet0/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/LPTlvQ1Zet0/default.jpg"
    }
  ],
  reggae: [
    {
      id: "vdB-8eLEW8g",
      link: "https://www.youtube.com/watch?v=vdB-8eLEW8g",
      kind: "youtube#video",
      publishedAt: "2010-04-20T11:11:07.000Z",
      channelId: "UCnglEcOPMmqSZCXg5-eiIiA",
      channelTitle: "Reggae Man",
      title: "Bob Marley - One Love",
      description:
        "One love, One heart Let's get together and feel all right Hear the children crying (One Love) Hear the children crying (One Heart) Sayin' give thanks and praise to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vdB-8eLEW8g/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/vdB-8eLEW8g/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/vdB-8eLEW8g/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/vdB-8eLEW8g/default.jpg"
    },
    {
      id: "zXt56MB-3vc",
      link: "https://www.youtube.com/watch?v=zXt56MB-3vc",
      kind: "youtube#video",
      publishedAt: "2009-06-02T23:49:39.000Z",
      channelId: "UCXwJE0iEj-xADTskRw3EaXg",
      channelTitle: "UB40VEVO",
      title: "UB40 - Red Red Wine (Official Video)",
      description:
        "Check out the official music video for \"Red Red Wine\" by UB40 Listen to more UB40 https://UB40.lnk.to/Essentials Music video by UB40 performing Red Red ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/zXt56MB-3vc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/zXt56MB-3vc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/zXt56MB-3vc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/zXt56MB-3vc/default.jpg"
    },
    {
      id: "hzqFmXZ8tOE",
      link: "https://www.youtube.com/watch?v=hzqFmXZ8tOE",
      kind: "youtube#video",
      publishedAt: "2014-05-02T17:04:53.000Z",
      channelId: "UCYZo7CbLJjjfEOqYwknzzow",
      channelTitle: "Protoje",
      title: "Protoje - Who Knows ft. Chronixx (Official Music Video)",
      description:
        "\"Who Knows\" is the first official single from Protoje's third studio album, Pre-Order the album \"Ancient Future,\" now on iTunes and get \"Who Knows\" instantly: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hzqFmXZ8tOE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/hzqFmXZ8tOE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/hzqFmXZ8tOE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/hzqFmXZ8tOE/default.jpg"
    },
    {
      id: "9PukqhfMxfc",
      link: "https://www.youtube.com/watch?v=9PukqhfMxfc",
      kind: "youtube#video",
      publishedAt: "2017-06-09T04:00:00.000Z",
      channelId: "UCZKXNdqxqIFavuBFwci1Slg",
      channelTitle: "DamianMarleyVEVO",
      title:
        "Damian &quot;Jr. Gong&quot; Marley - Medication ft. Stephen Marley",
      description:
        "Check out the official music video for \"Medication\" by Damian \"Jr. Gong\" ft. Stephen Marley (Official Video) Song Available Here: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9PukqhfMxfc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/9PukqhfMxfc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/9PukqhfMxfc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/9PukqhfMxfc/default.jpg"
    },
    {
      id: "p8HoEvDh70Y",
      link: "https://www.youtube.com/watch?v=p8HoEvDh70Y",
      kind: "youtube#video",
      publishedAt: "2018-11-16T11:00:06.000Z",
      channelId: "UCIOoP9FirTzjvgeAYTJWLcg",
      channelTitle: "KoffeeVEVO",
      title: "Koffee - Toast (Official Video)",
      description:
        "Koffee - Toast Listen to/download the 'Rapture' EP here: http://smarturl.it/KoffeeRapture?IQid=yt Listen to/download 'Toast' here: http://smarturl.it/KoffeeToast?",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/p8HoEvDh70Y/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/p8HoEvDh70Y/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/p8HoEvDh70Y/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/p8HoEvDh70Y/default.jpg"
    },
    {
      id: "LfeIfiiBTfY",
      link: "https://www.youtube.com/watch?v=LfeIfiiBTfY",
      kind: "youtube#video",
      publishedAt: "2013-10-02T02:59:46.000Z",
      channelId: "UCJnYM0A1ec_yqU3vpNGWyAw",
      channelTitle: "ChronixxMusic",
      title: "Chronixx - Here Comes Trouble (Official Music Video)",
      description:
        "Purchase on Itunes now : https://itunes.apple.com/us/album/dread-terrible/id841489884 Subscribe to Chronixx's Youtube Channel - http://bit.ly/chronixx-sub ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LfeIfiiBTfY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/LfeIfiiBTfY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/LfeIfiiBTfY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/LfeIfiiBTfY/default.jpg"
    },
    {
      id: "S3UqvWk8-uw",
      link: "https://www.youtube.com/watch?v=S3UqvWk8-uw",
      kind: "youtube#video",
      publishedAt: "2008-08-07T17:03:22.000Z",
      channelId: "UCAb4KW-3Vr99HcqQnYQYA9Q",
      channelTitle: "BoBMArleySong1",
      title: "Bob Marley - Stir it up",
      description: "One of the best song in History.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/S3UqvWk8-uw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/S3UqvWk8-uw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/S3UqvWk8-uw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/S3UqvWk8-uw/default.jpg"
    },
    {
      id: "qGuLqe-NMKg",
      link: "https://www.youtube.com/watch?v=qGuLqe-NMKg",
      kind: "youtube#video",
      publishedAt: "2007-07-12T22:40:44.000Z",
      channelId: "UCZng8TYQxSMYuRS7CZd-nvg",
      channelTitle: "VP Records",
      title: "Tarrus Riley - She&#39;s Royal | Official Music Video",
      description:
        "Music video by Tarrus Riley performing She's Royal. Watch Estelle ft. Tarrus Riley's \"Love Like Ours\" music video now: https://youtu.be/0T1tlWZI03A.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/qGuLqe-NMKg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/qGuLqe-NMKg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/qGuLqe-NMKg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/qGuLqe-NMKg/default.jpg"
    },
    {
      id: "K6oYyG0KcvQ",
      link: "https://www.youtube.com/watch?v=K6oYyG0KcvQ",
      kind: "youtube#video",
      publishedAt: "2007-09-06T14:44:16.000Z",
      channelId: "UC8Uc6mdsUb1GDEhKW1C_t8g",
      channelTitle: "0646271191",
      title: "Gregory Isaacs - Night Nurse",
      description:
        "Song: Night Nurse Artist: Gregory Isaacs Year: 1982 LP/CD: Night Nurse Composers: Gregory Isaacs, Sylvester Weise.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/K6oYyG0KcvQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/K6oYyG0KcvQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/K6oYyG0KcvQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/K6oYyG0KcvQ/default.jpg"
    },
    {
      id: "WkfvL3Nz0SI",
      link: "https://www.youtube.com/watch?v=WkfvL3Nz0SI",
      kind: "youtube#video",
      publishedAt: "2014-09-15T10:57:09.000Z",
      channelId: "UCgoQEkyu4m9-Bj68TXCaxWQ",
      channelTitle: "Dj Influence Mr Flavor",
      title: "Positive Reggae Vybz MIX  by DJ INFLUENCE",
      description:
        "DOWNLOAD FULL MIX HERE:https://sellfy.com/p/fvt0/ or Visit my store at https://sellfy.com/djinfluence1 to get get a larger selection on mixes to download.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WkfvL3Nz0SI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/WkfvL3Nz0SI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/WkfvL3Nz0SI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/WkfvL3Nz0SI/default.jpg"
    }
  ],
  randB: [
    {
      id: "Kp7eSUU9oy8",
      link: "https://www.youtube.com/watch?v=Kp7eSUU9oy8",
      kind: "youtube#video",
      publishedAt: "2016-11-17T19:35:00.000Z",
      channelId: "UCjYO25ZVJT523TD1iYHzcbw",
      channelTitle: "ChildishGambinoVEVO",
      title: "Childish Gambino - Redbone (Official Audio)",
      description:
        "From the new album \"Awaken, My Love!\" available now: http://smarturl.it/awakenmylove http://childishgambino.com http://facebook.com/donaldglover ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Kp7eSUU9oy8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Kp7eSUU9oy8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Kp7eSUU9oy8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/Kp7eSUU9oy8/default.jpg"
    },
    {
      id: "hC8CH0Z3L54",
      link: "https://www.youtube.com/watch?v=hC8CH0Z3L54",
      kind: "youtube#video",
      publishedAt: "2017-05-24T15:30:10.000Z",
      channelId: "UCxqkOxQYocXRtSqlotgXh7w",
      channelTitle: "Fkj",
      title: "Fkj &amp; Masego - Tadow",
      description:
        "Buy/Stream Tadow: https://smarturl.it/pzlz9r Improvised & recorded at Red Bull Studios Paris Filmed by Arsedi Buy/Stream FKJ debut album ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hC8CH0Z3L54/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/hC8CH0Z3L54/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/hC8CH0Z3L54/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/hC8CH0Z3L54/default.jpg"
    },
    {
      id: "rTVjnBo96Ug",
      link: "https://www.youtube.com/watch?v=rTVjnBo96Ug",
      kind: "youtube#video",
      publishedAt: "2012-11-21T01:37:34.000Z",
      channelId: "UCWEtnEiVwUy7mwFeshyAWLA",
      channelTitle: "RHINO",
      title:
        "Otis Redding - (Sittin&#39; On) The Dock Of The Bay (Official Music Video)",
      description:
        "Watch the official video for (Sittin' On) The Dock Of The Bay by Otis Redding. The video features video clips and photos of Otis Redding in the prime of his ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/rTVjnBo96Ug/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/rTVjnBo96Ug/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/rTVjnBo96Ug/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/rTVjnBo96Ug/default.jpg"
    },
    {
      id: "cEXhZ8PwM-Y",
      link: "https://www.youtube.com/watch?v=cEXhZ8PwM-Y",
      kind: "youtube#video",
      publishedAt: "2013-06-11T01:45:00.000Z",
      channelId: "UCTErx4eXbRPk7j9-9AgR4eA",
      channelTitle: "Brian Owens Soul",
      title: "A Change is Gonna Come | Brian Owens",
      description:
        "Brian Owens; LIFE Creative Group | Subscribe: http://bit.ly/subBrianOwens Brian Owens and his father, Thomas Owens, share the gift of music across ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/cEXhZ8PwM-Y/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/cEXhZ8PwM-Y/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/cEXhZ8PwM-Y/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/cEXhZ8PwM-Y/default.jpg"
    },
    {
      id: "nwpj9_hrK_A",
      link: "https://www.youtube.com/watch?v=nwpj9_hrK_A",
      kind: "youtube#video",
      publishedAt: "2017-01-06T08:00:05.000Z",
      channelId: "UCgyMPfJl7ynJRfE2jQ18rJw",
      channelTitle: "TinasheOfficialVEVO",
      title: "Tinashe - Company (Official Music Video)",
      description:
        "Company Available Now: Apple Music: http://smarturl.it/Tcompanyap?iqID=yt Spotify: http://smarturl.it/Tcompanys?iqID=yt Amazon: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/nwpj9_hrK_A/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/nwpj9_hrK_A/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/nwpj9_hrK_A/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/nwpj9_hrK_A/default.jpg"
    },
    {
      id: "O9capxlmuh4",
      link: "https://www.youtube.com/watch?v=O9capxlmuh4",
      kind: "youtube#video",
      publishedAt: "2015-07-06T07:00:01.000Z",
      channelId: "UCEXXypwg7Nn0GlgC7rKGM5g",
      channelTitle: "TyreseVEVO",
      title: "Tyrese - Shame (Official Video)",
      description:
        "Music video by Tyrese performing Shame. (C) 2015 Voltron Recordz http://vevo.ly/b8r9cY #Tyrese #Shame #Vevo.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/O9capxlmuh4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/O9capxlmuh4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/O9capxlmuh4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/O9capxlmuh4/default.jpg"
    },
    {
      id: "dh-0jH4Rb7Y",
      link: "https://www.youtube.com/watch?v=dh-0jH4Rb7Y",
      kind: "youtube#video",
      publishedAt: "2011-03-07T05:22:52.000Z",
      channelId: "UChOdek6n6Nlxkt1XqiPZ2gg",
      channelTitle: "Martin Novák",
      title: "Cadillac Records - All I Could Do Is Cry",
      description:
        "Beyoncé sings All I Could Do Is Cry in a movie Cadillac Records.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dh-0jH4Rb7Y/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/dh-0jH4Rb7Y/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/dh-0jH4Rb7Y/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/dh-0jH4Rb7Y/default.jpg"
    },
    {
      id: "PT7UOmPqXlk",
      link: "https://www.youtube.com/watch?v=PT7UOmPqXlk",
      kind: "youtube#video",
      publishedAt: "2015-10-20T21:00:01.000Z",
      channelId: "UCZZjtPu39XM1ujnfzooh-ew",
      channelTitle: "RKellyVEVO",
      title: "R. Kelly - Backyard Party",
      description:
        "Music video by R. Kelly performing Backyard Party. (C) 2015 RCA Records, a division of Sony Music Entertainment http://vevo.ly/Ox42nA.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/PT7UOmPqXlk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/PT7UOmPqXlk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/PT7UOmPqXlk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/PT7UOmPqXlk/default.jpg"
    },
    {
      id: "pJV2pWFyfn4",
      link: "https://www.youtube.com/watch?v=pJV2pWFyfn4",
      kind: "youtube#video",
      publishedAt: "2010-09-12T10:29:59.000Z",
      channelId: "UCiN3FgFPG-C0pM8fqjfBXew",
      channelTitle: "TSQD01",
      title: "The Temptations - Papa Was A Rolling Stone",
      description:
        "Artist : The Temptations Title : Papa was a rolling stone Album : All Directions Year : 1972 Label : Warwick, Miracle, Gordy, Motown, Atlantic, New Door/Universal ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/pJV2pWFyfn4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/pJV2pWFyfn4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/pJV2pWFyfn4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/pJV2pWFyfn4/default.jpg"
    },
    {
      id: "57Ykv1D0qEE",
      link: "https://www.youtube.com/watch?v=57Ykv1D0qEE",
      kind: "youtube#video",
      publishedAt: "2011-07-05T07:00:00.000Z",
      channelId: "UCXgEXcZIxXtQCZfXEDo1yHQ",
      channelTitle: "MarvinGayeVEVO",
      title: "Marvin Gaye - Inner City Blues (Make Me Wanna Holler)",
      description:
        "Explore the music of Marvin Gaye: https://lnk.to/g24lE For more Marvin Gaye news and merchandise: Classic Motown Website: https://lnk.to/ClassicMotownWS ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/57Ykv1D0qEE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/57Ykv1D0qEE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/57Ykv1D0qEE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/57Ykv1D0qEE/default.jpg"
    }
  ],
  rock: [
    {
      id: "KQ6zr6kCPj8",
      link: "https://www.youtube.com/watch?v=KQ6zr6kCPj8",
      kind: "youtube#video",
      publishedAt: "2011-03-09T06:02:38.000Z",
      channelId: "UCk78ZcA6kflEvBR0UrGDH0Q",
      channelTitle: "LMFAOVEVO",
      title:
        "LMFAO ft. Lauren Bennett, GoonRock - Party Rock Anthem (Official Video)",
      description:
        "Buy now http://glnk.it/6t Music video by LMFAO performing Party Rock Anthem featuring Lauren Bennett and GoonRock. (c) 2011 Interscope #VEVOCertified on ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/KQ6zr6kCPj8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/KQ6zr6kCPj8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/KQ6zr6kCPj8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/KQ6zr6kCPj8/default.jpg"
    },
    {
      id: "kXYiU_JCYtU",
      link: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
      kind: "youtube#video",
      publishedAt: "2007-03-05T08:12:00.000Z",
      channelId: "UCZU9T1ceaOgwfLRq7OKFU4Q",
      channelTitle: "Linkin Park",
      title: "Numb (Official Video) - Linkin Park",
      description:
        "Linkin Park \"Numb\" off of the album METEORA. Directed by Joe Hahn. http://www.linkinpark.com | http://LPUnderground.com iTunes: http://go.lprk.co/ml/3pb/ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/kXYiU_JCYtU/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/kXYiU_JCYtU/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/kXYiU_JCYtU/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/kXYiU_JCYtU/default.jpg"
    },
    {
      id: "8SbUC-UaAxE",
      link: "https://www.youtube.com/watch?v=8SbUC-UaAxE",
      kind: "youtube#video",
      publishedAt: "2009-12-25T08:37:37.000Z",
      channelId: "UCJN4c_lZorb_0eyIP_tSS3A",
      channelTitle: "GunsNRosesVEVO",
      title: "Guns N&#39; Roses - November Rain",
      description:
        "Music video by Guns N' Roses performing November Rain. YouTube view counts pre-VEVO: 6894036. (C) 1992 Guns N' Roses #VEVOCertified on June 24, ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8SbUC-UaAxE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/8SbUC-UaAxE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/8SbUC-UaAxE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/8SbUC-UaAxE/default.jpg"
    },
    {
      id: "fJ9rUzIMcZQ",
      link: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
      kind: "youtube#video",
      publishedAt: "2008-08-01T11:06:40.000Z",
      channelId: "UCiMhD4jzUqG-IgPzUmmytRQ",
      channelTitle: "Queen Official",
      title: "Queen – Bohemian Rhapsody (Official Video Remastered)",
      description:
        "REMASTERED IN HD TO CELEBRATE ONE BILLION VIEWS! Taken from A Night At The Opera, 1975. Click here to buy the DVD with this video at the Official ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/fJ9rUzIMcZQ/default.jpg"
    },
    {
      id: "1w7OgIMMRc4",
      link: "https://www.youtube.com/watch?v=1w7OgIMMRc4",
      kind: "youtube#video",
      publishedAt: "2009-12-25T06:54:53.000Z",
      channelId: "UCJN4c_lZorb_0eyIP_tSS3A",
      channelTitle: "GunsNRosesVEVO",
      title:
        "Guns N&#39; Roses - Sweet Child O&#39; Mine (Official Music Video)",
      description:
        "REMASTERED IN HD! OVER A BILLION VIEWS! #AppetiteForDestruction: The Debut Album, Remastered and Expanded. Available now as Box Set, Super ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/1w7OgIMMRc4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/1w7OgIMMRc4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/1w7OgIMMRc4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/1w7OgIMMRc4/default.jpg"
    },
    {
      id: "hTWKbfoikeg",
      link: "https://www.youtube.com/watch?v=hTWKbfoikeg",
      kind: "youtube#video",
      publishedAt: "2009-06-16T22:14:25.000Z",
      channelId: "UCzGrGrvf9g8CVVzh_LvGf-g",
      channelTitle: "NirvanaVEVO",
      title: "Nirvana - Smells Like Teen Spirit (Official Music Video)",
      description:
        "REMASTERED IN HD! Read the story behind 'Nevermind' here: https://www.udiscovermusic.com/stories/nirvana-quiet-debut-nevermind/ Listen to more from ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hTWKbfoikeg/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/hTWKbfoikeg/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/hTWKbfoikeg/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/hTWKbfoikeg/default.jpg"
    },
    {
      id: "6Ejga4kJUts",
      link: "https://www.youtube.com/watch?v=6Ejga4kJUts",
      kind: "youtube#video",
      publishedAt: "2009-06-16T22:48:29.000Z",
      channelId: "UCF9i903aeMcvcapmP1bS1oA",
      channelTitle: "TheCranberriesVEVO",
      title: "The Cranberries - Zombie (Official Music Video)",
      description:
        "Help us get Zombie to a BILLION VIEWS!!! Click and share this link: https://thecranberries.lnk.to/ZombieToABillion Music video by The Cranberries performing ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/6Ejga4kJUts/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/6Ejga4kJUts/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/6Ejga4kJUts/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/6Ejga4kJUts/default.jpg"
    },
    {
      id: "CSvFpBOe8eY",
      link: "https://www.youtube.com/watch?v=CSvFpBOe8eY",
      kind: "youtube#video",
      publishedAt: "2009-10-03T04:45:02.000Z",
      channelId: "UCvtZDkeFxMkRTNqfqXtxxkw",
      channelTitle: "systemofadownVEVO",
      title: "System Of A Down - Chop Suey!",
      description:
        "System of a Down's official music video for 'Chop Suey!'. Click to listen to System of a Down on Spotify: http://smarturl.it/SystemSpotify?IQid=SystemCS As ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/CSvFpBOe8eY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/CSvFpBOe8eY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/CSvFpBOe8eY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/CSvFpBOe8eY/default.jpg"
    },
    {
      id: "vx2u5uUu3DE",
      link: "https://www.youtube.com/watch?v=vx2u5uUu3DE",
      kind: "youtube#video",
      publishedAt: "2009-06-17T00:55:22.000Z",
      channelId: "UCwlTofOAY79PS_GhmborAdA",
      channelTitle: "BonJoviVEVO",
      title: "Bon Jovi - It&#39;s My Life",
      description:
        "Music video by Bon Jovi performing It's My Life. (C) 2003 The Island Def Jam Music Group.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vx2u5uUu3DE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/vx2u5uUu3DE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/vx2u5uUu3DE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/vx2u5uUu3DE/default.jpg"
    },
    {
      id: "9jK-NcRmVcw",
      link: "https://www.youtube.com/watch?v=9jK-NcRmVcw",
      kind: "youtube#video",
      publishedAt: "2009-10-25T20:18:12.000Z",
      channelId: "UCnzCV_PxVZ-hsOrTy2NGxJw",
      channelTitle: "EuropeVEVO",
      title: "Europe - The Final Countdown (Official Video)",
      description:
        "Europe's official music video for 'The Final Countdown'. Click to listen to Europe on Spotify: http://smarturl.it/EuropeSpot?IQid=EuropeTFC As featured on ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9jK-NcRmVcw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/9jK-NcRmVcw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/9jK-NcRmVcw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/9jK-NcRmVcw/default.jpg"
    }
  ],
  singing: [
    {
      id: "kffacxfA7G4",
      link: "https://www.youtube.com/watch?v=kffacxfA7G4",
      kind: "youtube#video",
      publishedAt: "2010-02-19T08:16:34.000Z",
      channelId: "UCHkj014U2CQ2Nv0UZeYpE_A",
      channelTitle: "JustinBieberVEVO",
      title: "Justin Bieber - Baby ft. Ludacris (Official Music Video)",
      description:
        "Music video by Justin Bieber performing Baby feat. Ludacris. #VEVOCertified on April 25, 2010. http://www.youtube.com/vevocertified #JustinBieber #Baby ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/kffacxfA7G4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/kffacxfA7G4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/kffacxfA7G4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/kffacxfA7G4/default.jpg"
    },
    {
      id: "3JWTaaS7LdU",
      link: "https://www.youtube.com/watch?v=3JWTaaS7LdU",
      kind: "youtube#video",
      publishedAt: "2010-09-28T00:18:42.000Z",
      channelId: "UCG5fkJ8-2b2ZjWpVNpr7Dqg",
      channelTitle: "whitneyhoustonVEVO",
      title: "Whitney Houston - I Will Always Love You",
      description:
        "Watch the official music video for \"All The Man That I Need\" by Whitney Houston Listen to Whitney Houston: https://WhitneyHouston.lnk.to/listenYD Subscribe to ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/3JWTaaS7LdU/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/3JWTaaS7LdU/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/3JWTaaS7LdU/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/3JWTaaS7LdU/default.jpg"
    },
    {
      id: "vx2u5uUu3DE",
      link: "https://www.youtube.com/watch?v=vx2u5uUu3DE",
      kind: "youtube#video",
      publishedAt: "2009-06-17T00:55:22.000Z",
      channelId: "UCwlTofOAY79PS_GhmborAdA",
      channelTitle: "BonJoviVEVO",
      title: "Bon Jovi - It&#39;s My Life",
      description:
        "Music video by Bon Jovi performing It's My Life. (C) 2003 The Island Def Jam Music Group.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/vx2u5uUu3DE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/vx2u5uUu3DE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/vx2u5uUu3DE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/vx2u5uUu3DE/default.jpg"
    },
    {
      id: "lDK9QqIzhwk",
      link: "https://www.youtube.com/watch?v=lDK9QqIzhwk",
      kind: "youtube#video",
      publishedAt: "2009-06-17T00:35:28.000Z",
      channelId: "UCwlTofOAY79PS_GhmborAdA",
      channelTitle: "BonJoviVEVO",
      title: "Bon Jovi - Livin&#39; On A Prayer",
      description:
        "Music video by Bon Jovi performing Livin' On A Prayer. (C) 1986 The Island Def Jam Music Group.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/lDK9QqIzhwk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/lDK9QqIzhwk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/lDK9QqIzhwk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/lDK9QqIzhwk/default.jpg"
    },
    {
      id: "LsoLEjrDogU",
      link: "https://www.youtube.com/watch?v=LsoLEjrDogU",
      kind: "youtube#video",
      publishedAt: "2018-01-04T04:49:43.000Z",
      channelId: "UCoUM-UJ7rirJYP8CQ0EIaHA",
      channelTitle: "Bruno Mars",
      title: "Bruno Mars - Finesse (Remix) (feat. Cardi B] [Official Video]",
      description:
        "The official music video for Bruno Mars' \"Finesse (Remix)\" featuring Cardi B - Available Now: https://Atlantic.lnk.to/FinesseRemixID Directed by Bruno Mars ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/LsoLEjrDogU/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/LsoLEjrDogU/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/LsoLEjrDogU/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/LsoLEjrDogU/default.jpg"
    },
    {
      id: "9BMwcO6_hyA",
      link: "https://www.youtube.com/watch?v=9BMwcO6_hyA",
      kind: "youtube#video",
      publishedAt: "2009-06-17T00:24:48.000Z",
      channelId: "UCwlTofOAY79PS_GhmborAdA",
      channelTitle: "BonJoviVEVO",
      title: "Bon Jovi - Always",
      description:
        "Music video by Bon Jovi performing Always. (C) 1994 The Island Def Jam Music Group.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9BMwcO6_hyA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/9BMwcO6_hyA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/9BMwcO6_hyA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/9BMwcO6_hyA/default.jpg"
    },
    {
      id: "iEe_eraFWWs",
      link: "https://www.youtube.com/watch?v=iEe_eraFWWs",
      kind: "youtube#video",
      publishedAt: "2009-06-17T05:36:14.000Z",
      channelId: "UCrwmu-gceGOmtZeuTsn7DlQ",
      channelTitle: "BlackEyedPeasVEVO",
      title: "The Black Eyed Peas - My Humps (Official Music Video)",
      description:
        "REMASTERED IN HD! Music video by Black Eyed Peas performing My Humps. (C) 2005 Interscope Records #TheBlackEyedPeas #MyHumps #Remastered ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/iEe_eraFWWs/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/iEe_eraFWWs/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/iEe_eraFWWs/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/iEe_eraFWWs/default.jpg"
    },
    {
      id: "PWgvGjAhvIw",
      link: "https://www.youtube.com/watch?v=PWgvGjAhvIw",
      kind: "youtube#video",
      publishedAt: "2009-10-25T07:06:36.000Z",
      channelId: "UC5VK325YvY3G1PGBuEfMNdg",
      channelTitle: "OutkastVEVO",
      title: "OutKast - Hey Ya! (Official Music Video)",
      description:
        "OutKast's official music video for 'Hey Ya!'. Click to listen to OutKast on Spotify: http://smarturl.it/OutKastSpotify?IQi... As featured on SpeakerBoxxx/The Love ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/PWgvGjAhvIw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/PWgvGjAhvIw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/PWgvGjAhvIw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/PWgvGjAhvIw/default.jpg"
    },
    {
      id: "bSfpSOBD30U",
      link: "https://www.youtube.com/watch?v=bSfpSOBD30U",
      kind: "youtube#video",
      publishedAt: "2015-10-29T07:53:26.000Z",
      channelId: "UCjjC1Jk_1o1VWpLalgo21XQ",
      channelTitle: "GEazyMusicVEVO",
      title: "G-Eazy x Bebe Rexha - Me, Myself &amp; I (Official Music Video)",
      description:
        "G-Eazy new album \"When It's Dark Out\" Available Now! Get it on: iTunes: http://smarturl.it/GEazyWIDO?IQid=yt Stream on Spotify: http://smarturl.it/GEazyWIDOs?",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/bSfpSOBD30U/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/bSfpSOBD30U/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/bSfpSOBD30U/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/bSfpSOBD30U/default.jpg"
    },
    {
      id: "-rey3m8SWQI",
      link: "https://www.youtube.com/watch?v=-rey3m8SWQI",
      kind: "youtube#video",
      publishedAt: "2015-10-29T20:19:38.000Z",
      channelId: "UC-J-KZfRV8c13fOCkhXdLiQ",
      channelTitle: "Dua Lipa",
      title: "Dua Lipa - Be The One (Official Music Video)",
      description:
        "Dua Lipa - Be The One Director and Producer: Nicole Nodland Director of Photography and Editor: Jackson Ducasse The Complete Edition is here!!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/-rey3m8SWQI/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/-rey3m8SWQI/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/-rey3m8SWQI/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/-rey3m8SWQI/default.jpg"
    }
  ],
  soul: [
    {
      id: "KUmZp8pR1uc",
      link: "https://www.youtube.com/watch?v=KUmZp8pR1uc",
      kind: "youtube#video",
      publishedAt: "2009-12-23T17:41:04.000Z",
      channelId: "UCHai12P6Gh7PaIYZGnzyrSA",
      channelTitle: "AmyWinehouseVEVO",
      title: "Amy Winehouse - Rehab",
      description:
        "Get AMY OST now: http://po.st/AMYOST3 Listen back to 'Frank', 'Back To Black', and 'Lioness: Hidden Treasures', the Amy Winehouse albums, now: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/KUmZp8pR1uc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/KUmZp8pR1uc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/KUmZp8pR1uc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/KUmZp8pR1uc/default.jpg"
    },
    {
      id: "COiIC3A0ROM",
      link: "https://www.youtube.com/watch?v=COiIC3A0ROM",
      kind: "youtube#video",
      publishedAt: "2009-09-20T12:33:27.000Z",
      channelId: "UCBdtc2bB4hfb2f7rIwkVvCA",
      channelTitle: "Sunshine Sound",
      title: "Al Green - Let&#39;s Stay Together",
      description:
        "\"Let's Stay Together\" performed by Al Green Lyrics: I, I'm I'm so in love with you Whatever you want to do Is all right with me Cause you make me feel so brand ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/COiIC3A0ROM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/COiIC3A0ROM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/COiIC3A0ROM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/COiIC3A0ROM/default.jpg"
    },
    {
      id: "KtBbyglq37E",
      link: "https://www.youtube.com/watch?v=KtBbyglq37E",
      kind: "youtube#video",
      publishedAt: "2010-10-30T10:19:08.000Z",
      channelId: "UCqphStoS_KA2cGYX_Z-PMYQ",
      channelTitle: "Ioanna17",
      title: "Aretha Franklin - I say a little prayer",
      description:
        "Lyrics: The moment I wake up Before I put on my makeup I say a little pray for you While combing my hair now, And wondering what dress to wear now, I say a ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/KtBbyglq37E/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/KtBbyglq37E/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/KtBbyglq37E/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/KtBbyglq37E/default.jpg"
    },
    {
      id: "x6QZn9xiuOE",
      link: "https://www.youtube.com/watch?v=x6QZn9xiuOE",
      kind: "youtube#video",
      publishedAt: "2010-07-22T20:18:53.000Z",
      channelId: "UCTvx0hgT3g8vDFjzTdmr1VQ",
      channelTitle: "Boblet233",
      title: "Marvin Gaye - Lets get it on",
      description: "Marvin Gaye - Lets get it on.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/x6QZn9xiuOE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/x6QZn9xiuOE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/x6QZn9xiuOE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/x6QZn9xiuOE/default.jpg"
    },
    {
      id: "TB54dZkzZOY",
      link: "https://www.youtube.com/watch?v=TB54dZkzZOY",
      kind: "youtube#video",
      publishedAt: "2009-03-06T14:06:37.000Z",
      channelId: "UCaC8UhMxJFUx2hpg1uVnmfA",
      channelTitle: "SoulIISoulVEVO",
      title: "Soul II Soul - Back To Life (Official Video)",
      description:
        "Listen to more SoulIISoul https://SoulIISoul.lnk.to/Essentials Official video of Soul II Soul performing Back To Life (However Do You Want Me) from the album ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/TB54dZkzZOY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/TB54dZkzZOY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/TB54dZkzZOY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/TB54dZkzZOY/default.jpg"
    },
    {
      id: "RCMXO9sBIcU",
      link: "https://www.youtube.com/watch?v=RCMXO9sBIcU",
      kind: "youtube#video",
      publishedAt: "2016-04-15T17:57:51.000Z",
      channelId: "UC26zQlW7dTNcyp9zKHVmv4Q",
      channelTitle: "HDSounDI",
      title:
        "Most Beautiful Music Ever: &quot;Everdream&quot; by Epic Soul Factory",
      description:
        "Subscribe: http://hdsoundi.com/go/subscribe Download (Bandcamp): http://bit.ly/2lAM1j4 Download (iTunes): http://apple.co/2lB79pp Music by: Epic Soul Factory ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/RCMXO9sBIcU/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/RCMXO9sBIcU/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/RCMXO9sBIcU/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/RCMXO9sBIcU/default.jpg"
    },
    {
      id: "R8GCc8OhTz8",
      link: "https://www.youtube.com/watch?v=R8GCc8OhTz8",
      kind: "youtube#video",
      publishedAt: "2009-07-13T18:38:03.000Z",
      channelId: "UC7dd3Fl8UFTr3yyTnRhu8dg",
      channelTitle: "Reggae Life",
      title: "Bob Marley - Satisfy My Soul",
      description:
        "Bob Marley & The Wailers performing; Satisfy My Soul Lyrics: Oh, please don't you rock my boat (don't rock my boat) Because I don't want my boat to be rocking ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/R8GCc8OhTz8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/R8GCc8OhTz8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/R8GCc8OhTz8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/R8GCc8OhTz8/default.jpg"
    },
    {
      id: "HaC0s-FP-r4",
      link: "https://www.youtube.com/watch?v=HaC0s-FP-r4",
      kind: "youtube#video",
      publishedAt: "2014-06-30T00:36:40.000Z",
      channelId: "UCiXsh6CVvfigg8psfsTekUA",
      channelTitle: "AerosmithVEVO",
      title: "Aerosmith - Hole In My Soul",
      description:
        "Aerosmith's official music video for 'Hole In My Soul'. Click to listen to Aerosmith on Spotify: http://smarturl.it/AerosmithSpot?IQid=AeroHIMS As featured on Nine ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/HaC0s-FP-r4/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/HaC0s-FP-r4/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/HaC0s-FP-r4/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/HaC0s-FP-r4/default.jpg"
    },
    {
      id: "_m0bI82Rz_k",
      link: "https://www.youtube.com/watch?v=_m0bI82Rz_k",
      kind: "youtube#video",
      publishedAt: "2009-10-27T02:56:22.000Z",
      channelId: "UCe4LM_eKc9ywRmVuBm5pjQg",
      channelTitle: "Atlantic Records",
      title: "Collective Soul - Shine (Official Video)",
      description:
        "The official video of \"Shine\" by Collective Soul from the album \"Hints, Allegations & Things Left Unsaid\". Subscribe for more official content from Atlantic Records: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_m0bI82Rz_k/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/_m0bI82Rz_k/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/_m0bI82Rz_k/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/_m0bI82Rz_k/default.jpg"
    },
    {
      id: "ek2PDE1cAyY",
      link: "https://www.youtube.com/watch?v=ek2PDE1cAyY",
      kind: "youtube#video",
      publishedAt: "2014-08-19T22:33:48.000Z",
      channelId: "UCTnEJET2xJSHgi8yy3Ti9aQ",
      channelTitle: "JesseMcCartneyVEVO",
      title: "Jesse McCartney - Beautiful Soul (Official Video)",
      description:
        "\"Watch the official music video for \"\"Beautiful Soul\"\" performed by Jesse McCartney Music video by Jesse McCartney performing Beautiful Soul.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ek2PDE1cAyY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/ek2PDE1cAyY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/ek2PDE1cAyY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/ek2PDE1cAyY/default.jpg"
    }
  ],
  techno: [
    {
      id: "8YhAFBOSk1U",
      link: "https://www.youtube.com/watch?v=8YhAFBOSk1U",
      kind: "youtube#video",
      publishedAt: "2016-08-22T16:48:47.000Z",
      channelId: "UCSeXJTBFHMq_QkNjJVCB7Ig",
      channelTitle: "TeknoMilesVEVO",
      title: "Tekno - Pana (Official Music Video)",
      description:
        "Music video by Tekno performing Pana (Official Music Video). MMMG http://vevo.ly/YphsDE #Tekno #Pana #Vevo #HipHop #OfficialMusicVideo.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/8YhAFBOSk1U/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/8YhAFBOSk1U/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/8YhAFBOSk1U/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/8YhAFBOSk1U/default.jpg"
    },
    {
      id: "EAwWPadFsOA",
      link: "https://www.youtube.com/watch?v=EAwWPadFsOA",
      kind: "youtube#video",
      publishedAt: "2008-12-27T00:20:15.000Z",
      channelId: "UC9acpkqmcz0wAmxG-Hwji-Q",
      channelTitle: "LuminousAmbition",
      title: "Mortal Kombat Theme Song Original",
      description:
        "The original three games and their updates, Mortal Kombat (1992), Mortal Kombat II (1993), Mortal Kombat 3 (1995), Ultimate Mortal Kombat 3 (1995), and ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/EAwWPadFsOA/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/EAwWPadFsOA/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/EAwWPadFsOA/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/EAwWPadFsOA/default.jpg"
    },
    {
      id: "4XpDdIISlYo",
      link: "https://www.youtube.com/watch?v=4XpDdIISlYo",
      kind: "youtube#video",
      publishedAt: "2015-10-26T14:00:00.000Z",
      channelId: "UCPWBlX15fNBUw0cLqKM-V7g",
      channelTitle: "DJEkkiMusic",
      title:
        "Electro House 2016 Best Festival Party Video Mix | New EDM Dance Charts Songs | Club Music Remix",
      description:
        "Electro House 2016 Best Festival Party Video Mix | New 2015 EDM Dance Charts Songs | Club Music Remix 2017 Real Life Channel: http://bit.ly/2q57N1s ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/4XpDdIISlYo/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/4XpDdIISlYo/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/4XpDdIISlYo/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/4XpDdIISlYo/default.jpg"
    },
    {
      id: "-0gED3rn2Tc",
      link: "https://www.youtube.com/watch?v=-0gED3rn2Tc",
      kind: "youtube#video",
      publishedAt: "2014-08-10T07:26:36.000Z",
      channelId: "UCD6_Jz4Q7CXcojkcgBrW7IA",
      channelTitle: "Pipe Guy",
      title: "Pipe Guy - House/Trance/Techno Live",
      description:
        "Please SUBSCRIBE and LIKE my Facebook page http://www.facebook.com/pip3guy If you enjoyed the show and want to throw some change into my virtual ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/-0gED3rn2Tc/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/-0gED3rn2Tc/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/-0gED3rn2Tc/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/-0gED3rn2Tc/default.jpg"
    },
    {
      id: "Nl4opbNt8_E",
      link: "https://www.youtube.com/watch?v=Nl4opbNt8_E",
      kind: "youtube#video",
      publishedAt: "2009-01-03T06:09:21.000Z",
      channelId: "UCcZe1w6uDOCjqEjXFzFwCYQ",
      channelTitle: "ColeSoc",
      title: "Best Techno 2009",
      description:
        "ENJOY AND RELAX \"NEIMER - TWO HEARTS TOGETHER\" CHECK MY CHANNEL FOR MORE MUSIC! COMMENT, LIKE AND SUBSCRIBE!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Nl4opbNt8_E/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/Nl4opbNt8_E/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/Nl4opbNt8_E/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/Nl4opbNt8_E/default.jpg"
    },
    {
      id: "D7ztZ_qhx5Q",
      link: "https://www.youtube.com/watch?v=D7ztZ_qhx5Q",
      kind: "youtube#video",
      publishedAt: "2017-04-04T08:00:01.000Z",
      channelId: "UCAJ1rjf90IFwNGlZUYuoP1Q",
      channelTitle: "Magic Club",
      title:
        "Best Music Mix 2017- Shuffle Music Video HD - Melbourne Bounce Music Mix 2017",
      description:
        "Submit Ur Demo for Our Label: http://bit.ly/2IF07in Best Music Mix 2017- Shuffle Music Video HD - Melbourne Bounce Music Mix 2017 This Mix On Spotify➡️ ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/D7ztZ_qhx5Q/default.jpg"
    },
    {
      id: "o3WdLtpWM_c",
      link: "https://www.youtube.com/watch?v=o3WdLtpWM_c",
      kind: "youtube#video",
      publishedAt: "2018-07-18T15:22:37.000Z",
      channelId: "UC4w5l9jyqursG7wSEdNv3bQ",
      channelTitle: "blanc",
      title: "FISHER - Losing It",
      description:
        "Tech House Top 50 Spotify Playlist https://spoti.fi/2V6J9xa Blanc - Anything Is Possible. - Soundcloud: http://bit.ly/1If73ed - Facebook: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/o3WdLtpWM_c/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/o3WdLtpWM_c/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/o3WdLtpWM_c/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/o3WdLtpWM_c/default.jpg"
    },
    {
      id: "wHfaCXRVO8U",
      link: "https://www.youtube.com/watch?v=wHfaCXRVO8U",
      kind: "youtube#video",
      publishedAt: "2016-10-21T14:00:20.000Z",
      channelId: "UCSeXJTBFHMq_QkNjJVCB7Ig",
      channelTitle: "TeknoMilesVEVO",
      title: "Teknomiles - Diana (Official Music Video)",
      description:
        "Tekno drops the official video to his latest single \"Diana\". Tekno sure has won the hearts of many after dropping hits back to back and topping them off with ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/wHfaCXRVO8U/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/wHfaCXRVO8U/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/wHfaCXRVO8U/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/wHfaCXRVO8U/default.jpg"
    },
    {
      id: "TTpiKfljRzY",
      link: "https://www.youtube.com/watch?v=TTpiKfljRzY",
      kind: "youtube#video",
      publishedAt: "2018-12-29T14:04:50.000Z",
      channelId: "UCAHlZTSgcwNNpf8LV3E6kDQ",
      channelTitle: "ElectroDanceMixes",
      title:
        "New Year Mix 2019 - Best of EDM Party Electro House &amp; Festival Music",
      description:
        "We wish you a Happy New Year 2019 with this special EDM Festival Mix! ○ Subscribe: http://bit.ly/EDM-sub | ○ Facebook: http://bit.ly/ElectroHouseMixes ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/TTpiKfljRzY/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/TTpiKfljRzY/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/TTpiKfljRzY/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/TTpiKfljRzY/default.jpg"
    },
    {
      id: "0GdslNxmixw",
      link: "https://www.youtube.com/watch?v=0GdslNxmixw",
      kind: "youtube#video",
      publishedAt: "2009-03-14T11:43:22.000Z",
      channelId: "UCcZe1w6uDOCjqEjXFzFwCYQ",
      channelTitle: "ColeSoc",
      title: "Techno Disco!",
      description:
        "Alex M vs Marc Van Damme - Techno Disco (Rob Mayth remix) EEEEENNNNJOYY!",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/0GdslNxmixw/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/0GdslNxmixw/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/0GdslNxmixw/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/0GdslNxmixw/default.jpg"
    }
  ],
  worldMusic: [
    {
      id: "pa14VNsdSYM",
      link: "https://www.youtube.com/watch?v=pa14VNsdSYM",
      kind: "youtube#video",
      publishedAt: "2010-10-12T22:31:11.000Z",
      channelId: "UC2xskkQVFEpLcGFnNSLQY0A",
      channelTitle: "RihannaVEVO",
      title: "Rihanna - Only Girl (In The World)",
      description:
        "Get Rihanna's eighth studio album ANTI now: Download on TIDAL: http://smarturl.it/downloadANTI Stream on TIDAL: http://smarturl.it/streamANTIdlx Download ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/pa14VNsdSYM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/pa14VNsdSYM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/pa14VNsdSYM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/pa14VNsdSYM/default.jpg"
    },
    {
      id: "-2U0Ivkn2Ds",
      link: "https://www.youtube.com/watch?v=-2U0Ivkn2Ds",
      kind: "youtube#video",
      publishedAt: "2013-11-20T15:00:05.000Z",
      channelId: "UCMsBZYIksLc5pW_28PBQrCg",
      channelTitle: "AGreatBigWorldVEVO",
      title:
        "A Great Big World &amp; Christina Aguilera - Say Something (Official Video)",
      description:
        "Check out the official music video for \"Say Something\" by A Great Big World & Christina Aguilera Download Is There Anybody Out There? on iTunes: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/-2U0Ivkn2Ds/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/-2U0Ivkn2Ds/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/-2U0Ivkn2Ds/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/-2U0Ivkn2Ds/default.jpg"
    },
    {
      id: "VBmMU_iwe6U",
      link: "https://www.youtube.com/watch?v=VBmMU_iwe6U",
      kind: "youtube#video",
      publishedAt: "2011-05-18T22:35:23.000Z",
      channelId: "UC9zX2xZIJ4cnwRsgBpHGvMg",
      channelTitle: "BeyoncéVEVO",
      title: "Beyoncé - Run the World (Girls) (Video - Main Version)",
      description:
        "Beyoncé's official video for 'Run The World (Girls)'. Click to listen to Beyoncé on Spotify: http://smarturl.it/BeyonceSpot?IQid=B... As featured on 4. Click to buy the ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/VBmMU_iwe6U/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/VBmMU_iwe6U/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/VBmMU_iwe6U/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/VBmMU_iwe6U/default.jpg"
    },
    {
      id: "fregObNcHC8",
      link: "https://www.youtube.com/watch?v=fregObNcHC8",
      kind: "youtube#video",
      publishedAt: "2009-06-16T22:56:31.000Z",
      channelId: "UCzGrGrvf9g8CVVzh_LvGf-g",
      channelTitle: "NirvanaVEVO",
      title: "Nirvana - The Man Who Sold The World (MTV Unplugged)",
      description:
        "REMASTERED IN HD! Taken from the 25th Anniversary Editions of Nirvana – MTV Unplugged in New York Order Now: https://Nirvana.lnk.to/Unplugged25 ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fregObNcHC8/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/fregObNcHC8/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/fregObNcHC8/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/fregObNcHC8/default.jpg"
    },
    {
      id: "ErCAOMi5EGM",
      link: "https://www.youtube.com/watch?v=ErCAOMi5EGM",
      kind: "youtube#video",
      publishedAt: "2010-03-19T23:30:26.000Z",
      channelId: "UCEOhcOACopL42xyOBIv1ekg",
      channelTitle: "LilWayneVEVO",
      title: "Lil Wayne - Drop The World (Official Music Video) ft. Eminem",
      description:
        "REMASTERED IN HD! #LilWayne #DropTheWorld #Remastered Music video by Lil Wayne performing Drop The World. (C) 2010 Cash Money Records Inc.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/ErCAOMi5EGM/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/ErCAOMi5EGM/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/ErCAOMi5EGM/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/ErCAOMi5EGM/default.jpg"
    },
    {
      id: "w5tWYmIOWGk",
      link: "https://www.youtube.com/watch?v=w5tWYmIOWGk",
      kind: "youtube#video",
      publishedAt: "2013-11-13T08:00:01.000Z",
      channelId: "UCpx_k19S2vUutWUUM9qmXEg",
      channelTitle: "ImagineDragonsVEVO",
      title: "Imagine Dragons - On Top Of The World (Official Music Video)",
      description:
        "Get Origins, ft. Natural, Zero, Machine and Bad Liar, out now: http://smarturl.it/OriginsID Directed by: Matt Eastin and Corey Fox Shop Imagine Dragons: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/w5tWYmIOWGk/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/w5tWYmIOWGk/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/w5tWYmIOWGk/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/w5tWYmIOWGk/default.jpg"
    },
    {
      id: "fmI_Ndrxy14",
      link: "https://www.youtube.com/watch?v=fmI_Ndrxy14",
      kind: "youtube#video",
      publishedAt: "2014-09-17T20:57:35.000Z",
      channelId: "UC2t5bjwHdUX4vM2g8TRDq5g",
      channelTitle: "League of Legends",
      title: "Warriors (ft. Imagine Dragons) | Worlds 2014 - League of Legends",
      description:
        "The battle begins, and sixteen teams across the globe are fighting towards one goal – to win the League of Legends World Championship. To kick off the start of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fmI_Ndrxy14/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/fmI_Ndrxy14/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/fmI_Ndrxy14/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/fmI_Ndrxy14/default.jpg"
    },
    {
      id: "pvuN_WvF1to",
      link: "https://www.youtube.com/watch?v=pvuN_WvF1to",
      kind: "youtube#video",
      publishedAt: "2019-04-19T03:57:44.000Z",
      channelId: "UC8rVJyj4zE0S9-sccMLifIA",
      channelTitle: "Lil Dicky",
      title: "Lil Dicky - Earth (Official Music Video)",
      description:
        "For more information on how to save the Earth go to https://welovetheearth.org To purchase or stream Earth go to https://LilDicky.lnk.to/Earth \"Earth\" Song: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/pvuN_WvF1to/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/pvuN_WvF1to/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/pvuN_WvF1to/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/pvuN_WvF1to/default.jpg"
    },
    {
      id: "fB8TyLTD7EE",
      link: "https://www.youtube.com/watch?v=fB8TyLTD7EE",
      kind: "youtube#video",
      publishedAt: "2018-09-26T13:00:06.000Z",
      channelId: "UC2t5bjwHdUX4vM2g8TRDq5g",
      channelTitle: "League of Legends",
      title:
        "RISE (ft. The Glitch Mob, Mako, and The Word Alive) | Worlds 2018 - League of Legends",
      description:
        "Reaching the peak takes more than skill. Only those with the ambition to RISE above all others will know its height. For more information on the 2018 League of ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/fB8TyLTD7EE/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/fB8TyLTD7EE/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/fB8TyLTD7EE/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/fB8TyLTD7EE/default.jpg"
    },
    {
      id: "1-7ABIM2qjU",
      link: "https://www.youtube.com/watch?v=1-7ABIM2qjU",
      kind: "youtube#video",
      publishedAt: "2009-10-03T07:52:30.000Z",
      channelId: "UCulYu1HEIa7f70L2lYZWHOw",
      channelTitle: "michaeljacksonVEVO",
      title: "Michael Jackson - You Rock My World (Official Video)",
      description:
        "The short film to \"You Rock My World,\" the Top 10 hit single from Michael Jackson's Invincible, features guest appearances from Chris Tucker, Michael Madsen ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/1-7ABIM2qjU/default.jpg",
          width: 120,
          height: 90
        },
        medium: {
          url: "https://i.ytimg.com/vi/1-7ABIM2qjU/mqdefault.jpg",
          width: 320,
          height: 180
        },
        high: {
          url: "https://i.ytimg.com/vi/1-7ABIM2qjU/hqdefault.jpg",
          width: 480,
          height: 360
        }
      },
      vidIMG: "https://i.ytimg.com/vi/1-7ABIM2qjU/default.jpg"
    }
  ]
};

module.exports = testData;
