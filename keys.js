// Validation
const gradient = require("gradient-string");
console.log(`${gradient.summer("/keys.js loaded")}\nThis is a file where we provide the app with API passwords stored in the .env file\n=========================`);

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.youtube = {
  key: process.env.YOUTUBE_KEY
};

exports.database = {
  user: process.env.DB_USER,
  secret: process.env.DB_PASS,
  live: process.env.DB_NAME,
  test: process.env.DB_TEST
};

exports.subject = {
  genre: "classicRock"
};
