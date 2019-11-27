/* eslint-disable no-unused-vars */
require("dotenv");
const keys = require("../keys");
const API_KEY = keys.youtube.key;
// eslint-disable-next-line no-unused-vars
var search = require("youtube-search");
var gradient = require("gradient-string");
// Youtube CLI API
// eslint-disable-next-line no-unused-vars
var loglog = require("./logger");
var testData = require("./tester");

var WebSearch = {
 videoSearch: function (subject, cb) {
   var opts = {
     part:"snippet",
     maxResults: 20,
     q: keys.subject.genre,
     key: API_KEY,
     videoEmbeddable: "true",
     order: "viewCount",
     type: "video"
   };
  //  Call
  //  search(subject.genres, opts, function(err, results) {
  //   if (err) return console.log(err);	  
  //  for (let i = 0; i < results.length; i++) {
  //    let { url } = results[i].thumbnails.default;
  //    results[i].vidIMG = url;
  //  }
  //  console.log(results);
  //  subject.videos = results;
  //  loglog.logger(subject.videos);
  //  console.log(gradient.summer(subject));
   
  //  cb(subject);
  //  });
  // console.log(gradient.summer(JSON.stringify(testData,null,2)));
  // for (let i = 0; i < testData.length; i++) {
  //       let { url } = testData[i].thumbnails.default;
  //       testData[i].vidIMG = url;
  //       console.log(url);
  //     }
  console.log(gradient.summer("video ran"));
    subject.videos = testData;
   cb(subject);
} 
};  

module.exports = WebSearch;
