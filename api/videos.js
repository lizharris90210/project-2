// Validation
const gradient = require("gradient-string");
console.log(`${gradient.summer("/api/videos.js loaded\n")}=========================\n`);

/* eslint-disable no-unused-vars */
require("dotenv");
// keys.js
const keys = require("../keys");

//const API_KEY = keys.youtube.key;
// eslint-disable-next-line no-unused-vars
const search = require("youtube-search");

// eslint-disable-next-line no-unused-vars
var loglog = require("./logger");
// testData package
var testData = require("./tester");
// for devOps, comment in one of the following to change the genre of videos populated. this as the genre of data pulled from testData example: testData.classicRock, testData.punk, testData.jazz etc...
var testGenre = testData.classicRock;
// testData.alternative;
// testData.country;
// testData.jazz;
// testData.punk;
// testData.indie;
// testData.hiphop;
// testData.dance;
// testData.rock;
// testData.metal;
// testData.pop;
// console.log(gradient.vice("test genre data selected\n", JSON.stringify(testGenre,null,2))); 
// =============================================================================
// Youtube API
// =============================================================================
var WebSearch = {
  videoSearch: function(subject, cb) {
    
    //  Call

    // ===========================================================================
    // comment this section out to activate youtube api and data logger
    // ===========================================================================
    // console.log(gradient.summer("Youtube Api running"));
    // var opts = {
    //   part: "snippet",
    //   maxResults: 10,
    //   q: keys.subject.genre,
    //   key: API_KEY,
    //   videoEmbeddable: "true",
    //   order: "viewCount",
    //   type: "video"
    // };
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

    // ==========================================================================
    // comment this section out to activate local Cue Api
    // still sources Spotify, but will be fully self-sufficient by Friday evening
    // ==========================================================================

    console.log(gradient.summer("Cue Api running"));
    // console.log(gradient.summer(JSON.stringify(testGenre,null,2)));
    // for loop to un-nest thumbnail link
    // for (let i = 0; i < testGenre.length; i++) {
    //   let { url } = testGenre[i].thumbnails.default;
    //   testGenre[i].vidIMG = url;
    // }
    subject.videos = testGenre;
    cb(subject);
  }
};

module.exports = WebSearch;
