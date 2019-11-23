require("dotenv");
var search = require("youtube-search");

var WebSearch = {
 videoSearch: function (subject, cb) {
   var opts = {
     part:"snippet",
     maxResults: 12,
     q: subject.genres.join("|"),
     key: process.env.key,
     videoEmbeddable: "true",
     order: "viewCount",
     type: "video"
   };
   search(subject.genres, opts, function(err, results) {
     if (err) return console.log(err);
    console.log(JSON.stringify(results, null, 2));
    console.log((results[0].thumbnails));
    for (let i = 0; i < results.length; i++) {
      let { url } = results[i].thumbnails.default;
      results[i].vidIMG = url;
    }
    subject.videos = results;
    cb(subject);
   });
 } 
};  

module.exports = WebSearch;
