require("dotenv");
var search = require("youtube-search");

var WebSearch = {
 videoSearch: function (genres, cb) {
   var opts = {
     maxResults: 10,
     key: process.env.key,
     q: genres
   };
   search("jsconf", opts, function(err, results) {
     if (err) return console.log(err);
   
     cb(results);
   });
 } 
};  

module.exports = WebSearch;
