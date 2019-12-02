// VALIDATION
require("dotenv");
const gradient = require("gradient-string");
console.log(
  `${gradient.summer(
    "/api/songs.js"
  )}\n Packages:\n - ../keys\n - ./videos\n - node-spotify-api\n=========================`
);

// const keys = require("../keys");
const tube = require("./videos");

// =============================================================================
// The spotify api was disable due to the incompatibility of Heroku's environment
// variables and the spotify object.
// =============================================================================
// Spotify package
//const Spotify = require("node-spotify-api");
// adding keys to spotify

// eslint-disable-next-line no-unused-vars
// const spotify = new Spotify(keys.spotify);
const test = require("./testerPlaylist");
var testGenre = test.alternative;
console.log(testGenre);

const songSearch = {
  // Spotify definitely sucks
  spotifySucks: function(data1, cb) {
    // spotify.search(
    //    // you can adjust the number of spotify images here with the limit variable
    //    { type: "playlist", query: keys.subject.genre, limit: 2 },
    //    function(err, response) {
    //      if (err) {
    //        console.log("Error occurred: " + err);
    //        return;
    //      }

    //      let { items } = response.playlists;
    //      for (let i = 0; i < items.length; i++) {
    //        let url = items[i].images[0].url;
    //        items[i].pic = url;
    //      }

    //       data1.songs = items;
    //      tube.videoSearch(data1, cb);
    //     }
    //  );
    switch (data1.genres[0]) {
      case "alternative":
        data1.songs = test.alternative;
        tube.videoSearch(data1, cb);
        break;
      case "blues":
        data1.songs = test.blues;
        tube.videoSearch(data1, cb);
        break;
      case "classical":
        data1.songs = test.classical;
        tube.videoSearch(data1, cb);
        break;
      case "classic rock":
        data1.songs = test.classicRock;
        tube.videoSearch(data1, cb);
        break;
      case "country":
        data1.songs = test.country;
        tube.videoSearch(data1, cb);
        break;
      case "dance":
        data1.songs = test.dance;
        tube.videoSearch(data1, cb);
        break;
      case "death metal":
        data1.songs = test.deathMetal;
        tube.videoSearch(data1, cb);
        break;
      case "disco":
        data1.songs = test.disco;
        tube.videoSearch(data1, cb);
        break;
      case "dubstep":
        data1.songs = test.dubstep;
        tube.videoSearch(data1, cb);
        break;
      case "electro":
        data1.songs = test.electro;
        tube.videoSearch(data1, cb);
        break;
      case "electronic":
        data1.songs = test.electronicDance;
        tube.videoSearch(data1, cb);
        break;
      case "folk":
        data1.songs = test.folk;
        tube.videoSearch(data1, cb);
        break;
      case "funk":
        data1.songs = test.funk;
        tube.videoSearch(data1, cb);
        break;
      case "gospel":
        data1.songs = test.gospel;
        tube.videoSearch(data1, cb);
        break;
      case "hip hop":
        data1.songs = test.hiphop;
        tube.videoSearch(data1, cb);
        break;
      case "indie":
        data1.songs = test.indie;
        tube.videoSearch(data1, cb);
        break;
      case "instrumental":
        data1.songs = test.instrumental;
        tube.videoSearch(data1, cb);
        break;
      case "jazz":
        data1.songs = test.jazz;
        tube.videoSearch(data1, cb);
        break;
      case "metal":
        data1.songs = test.metal;
        tube.videoSearch(data1, cb);
        break;
      case "musical theatre":
        data1.songs = test.musicalTheatre;
        tube.videoSearch(data1, cb);
        break;
      case "pop":
        data1.songs = test.pop;
        tube.videoSearch(data1, cb);
        break;
      case "punk":
        data1.songs = test.punk;
        tube.videoSearch(data1, cb);
        break;
      case "rapping":
        data1.songs = test.rapping;
        tube.videoSearch(data1, cb);
        break;
      case "reggae":
        data1.songs = test.reggae;
        tube.videoSearch(data1, cb);
        break;
      case "r&b":
        data1.songs = test.randB;
        tube.videoSearch(data1, cb);
        break;
      case "rock":
        data1.songs = test.rock;
        tube.videoSearch(data1, cb);
        break;
      case "singing":
        data1.songs = test.singing;
        tube.videoSearch(data1, cb);
        break;
      case "soul":
        data1.songs = test.soul;
        tube.videoSearch(data1, cb);
        break;
      case "techno":
        data1.songs = test.techno;
        tube.videoSearch(data1, cb);
        break;
      case "world":
        data1.songs = test.worldMusic;
        tube.videoSearch(data1, cb);
        break;
    }
  }
};

module.exports = songSearch;
