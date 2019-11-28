require("dotenv");
const keys = require("../keys");
var tube = require("./videos");
// Spotify package
var Spotify = require("node-spotify-api");
// adding keys to spotify
var spotify = new Spotify(keys.spotify);

var songSearch = {
  spotifySucks: function(data1, cb) {
    spotify.search(
      { type: "playlist", query: keys.subject.genre, limit: 3 },
      function(err, response) {
        if (err) {
          console.log("Error occurred: " + err);
          return;
        }

        let { items } = response.playlists;
        for (let i = 0; i < items.length; i++) {
          let url = items[i].images[0].url;
          items[i].pic = url;
        }
        data1.songs = items;
        tube.videoSearch(data1, cb);
      }
    );
  }
};

module.exports = songSearch;
