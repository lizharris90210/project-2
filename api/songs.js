require("dotenv");
const keys = require("../keys");
// Spotify package
var Spotify = require("node-spotify-api");
// adding keys to spotify
var spotify = new Spotify(keys.spotify);
 
var songSearch = {
   spotifySucks: function (data1, cb) {
  spotify.search({ type: "playlist", query: data1.genres[0], limit: 3 }, function (err, response) {
    if (err) {
      console.log("Error occurred: " + err);
      return;
    }
    
    let { items } = response.playlists;
    console.log(items[0].images);
    for (let i = 0; i < items.length; i++) {
      let url = items[i].images[0].url;
      console.log("this is the url", url);
      items[i].pic = url;
    }
    data1.songs = items;
    console.log(data1);
    cb(data1);
  });
}
 };

 module.exports = songSearch;