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

   cb(subject);
   search(subject.genres, opts, function(err, results) {
     if (err) {
     console.log(err);
     subject.vidIMG = ['http://lorempixel.com/200/200/'];
       throw err;
      } else {
       for (let i = 0; i < results.length; i++) {
         let { url } = results[i].thumbnails.default;
         results[i].vidIMG = url;
       }
     }
       
    
    subject.videos = results;
   });
 } 
};  

module.exports = WebSearch;
