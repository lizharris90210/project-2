require("dotenv");
// eslint-disable-next-line no-unused-vars
var search = require("youtube-search");
// Youtube CLI API

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
   console.log(opts);
   //Call
  //  search(subject.genres, opts, function(err, results) {
  //   if (err) return console.log(err);
  //   cb(results);	  
  //  for (let i = 0; i < results.length; i++) {
  //    let { url } = results[i].thumbnails.default;
  //    results[i].vidIMG = url;
  //  }
  //  subject.videos = results;
  //  cb(subject);
  //  });
  cb(subject);
 } 
};  

module.exports = WebSearch;
