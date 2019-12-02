// VALIDATION
require("dotenv");
const gradient = require("gradient-string");
console.log(`${gradient.summer("/api/songs.js")}\n Packages:\n - ../keys\n - ./videos\n - node-spotify-api\n=========================`);

const keys = require("../keys")
const tube = require("./videos");
// Spotify package
const Spotify = require("node-spotify-api");
// adding keys to spotify

const spotify = new Spotify(keys.spotify);
const test = require("./testerPlaylist");
var testGenre = test.alternative;
console.log(testGenre);


const songSearch = {
  spotifySucks: function(data1, cb) {
 //  spotify.search(
//      you can adjust the number of spotify images here with the limit variable
    //  { type: "playlist", query: keys.subject.genre, limit: 2 },
    //  function(err, response) {
    //    if (err) {
    //      console.log("Error occurred: " + err);
    //      return;
    //    }

//        let { items } = response.playlists;
  //      for (let i = 0; i < items.length; i++) {
    //      let url = items[i].images[0].url;
      //    items[i].pic = url;
       // }

        //data1.songs = items;
       // tube.videoSearch(data1, cb);
      //}
   // );
   data1.songs = testGenre;
   tube.videoSearch(data1, cb);
  }
};

module.exports = songSearch;
