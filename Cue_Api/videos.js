// Validation
const gradient = require("gradient-string");
console.log(
  `${gradient.summer("/api/videos.js loaded\n")}=========================\n`
);

/* eslint-disable no-unused-vars */
require("dotenv");
// keys.js
const keys = require("../keys");

const API_KEY = keys.youtube.key;
// eslint-disable-next-line no-unused-vars
const search = require("youtube-search");

// eslint-disable-next-line no-unused-vars
var loglog = require("./logger");
// testData package
var testData = require("./testerVid");
var newGenre = keys.subject.genre;
// =============================================================================
// Youtube API
// =============================================================================
var WebSearch = {
  videoSearch: function(subject, cb) {
    //  Call

    // ===========================================================================
    //comment this section out to activate youtube api and data logger
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
    // console.log("current genre", newGenre);
    // search(keys.subject.genre, opts, function(err, results) {
    //   if (err) return console.log(err);
    //   for (let i = 0; i < results.length; i++) {
    //     let { url } = results[i].thumbnails.default;
    //     results[i].vidIMG = url;
    //   }
    //   console.log(gradient.rainbow(JSON.stringify(results, null, 2)));
    //   subject.videos = results;
    //   loglog.logger(subject);
    //   cb(subject);
    // });

    // ==========================================================================
    // comment this section out to activate local Cue Api
    // still sources Spotify, but will be fully self-sufficient by Friday evening
    // ==========================================================================

    console.log(gradient.summer("Cue Api running"));
    // console.log(subject.genres[0]);
    switch (subject.genres[0]) {
      case "alternative":
        subject.videos = testData.alternative;
         cb(subject);
        break;
      case "blues":
        subject.videos = testData.blues;
         cb(subject);
        break;
      case "classical":
        subject.videos = testData.classical;
         cb(subject);
        break;
      case "classic rock":
        subject.videos = testData.classicRock;
         cb(subject);
        break;
      case "country":
        subject.videos = testData.country;
         cb(subject);
        break;
      case "dance":
        subject.videos = testData.dance;
         cb(subject);
        break;
      case "death metal":
        subject.videos = testData.deathMetal;
         cb(subject);
        break;
      case "disco":
        subject.videos = testData.disco;
         cb(subject);
        break;
      case "dubstep":
        subject.videos = testData.dubstep;
         cb(subject);
        break;
      case "electro":
        subject.videos = testData.electro;
         cb(subject);
        break;
      case "electronic":
        subject.videos = testData.electronicDance;
         cb(subject);
        break;
      case "folk":
        subject.videos = testData.folk;
         cb(subject);
        break;
      case "funk":
        subject.videos = testData.funk;
         cb(subject);
        break;
      case "gospel":
        subject.videos = testData.gospel;
         cb(subject);
        break;
      case "hip hop":
        subject.videos = testData.hiphop;
         cb(subject);
        break;
      case "indie":
        subject.videos = testData.indie;
         cb(subject);
        break;
      case "instrumental":
        subject.videos = testData.instrumental;
         cb(subject);
        break;
      case "jazz":
        subject.videos = testData.jazz;
         cb(subject);
        break;
      case "metal":
        subject.videos = testData.metal;
         cb(subject);
        break;
      case "musical theatre":
        subject.videos = testData.musicalTheatre;
         cb(subject);
        break;
      case "pop":
        subject.videos = testData.pop;
         cb(subject);
        break;
      case "punk":
        subject.videos = testData.punk;
         cb(subject);
        break;
      case "rapping":
        subject.videos = testData.rapping;
         cb(subject);
        break;
      case "reggae":
        subject.videos = testData.reggae;
         cb(subject);
        break;
      case "r&b":
        subject.videos = testData.randB;
         cb(subject);
        break;
      case "rock":
        subject.videos = testData.rock;
         cb(subject);
        break;
      case "singing":
        subject.videos = testData.singing;
         cb(subject);
        break;
      case "soul":
        subject.videos = testData.soul;
         cb(subject);
        break;
      case "techno":
        subject.videos = testData.techno;
         cb(subject);
        break;
      case "world":
        subject.videos = testData.worldMusic;
         cb(subject);
        break;
    }
  }
};

module.exports = WebSearch;
