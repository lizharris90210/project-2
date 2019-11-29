// VALIDATION
const gradient = require("gradient-string");
console.log(`${gradient.summer("/api/queries.js")}\nThis file allows for customized sequelize queries\n=========================`);

// Custom sequelize queries
const artist = [
  ["artist_name", "name"],
  ["artist_pic", "pic"],
  ["location_city", "city"],
  ["location_state", "state"],
  ["contact_email", "email"],
  ["contact_twitter", "twitter"],
  ["current_band", "band"],
  "instruments",
  "past_bands",
  "genres"
];
const band = [
  ["band_name", "name"],
  ["band_pic", "pic"],
  ["location_city", "city"],
  ["location_state", "state"],
  ["contact_email", "email"],
  ["contact_twitter", "twitter"],
  "pastband_names",
  ["artist_names", "members"],
  "genres"
];
const backstage = [
  ["backstage_name", "name"],
  ["backstage_pic", "pic"],
  ["location_city", "city"],
  ["location_state", "state"],
  ["contact_email", "email"],
  ["contact_twitter", "twitter"],
  "equipment",
  "experience",
  "genres"
];
const venue = [
  ["venue_name", "name"],
  ["venue_pic", "pic"],
  ["location_city", "city"],
  ["location_state", "state"],
  ["contact_email", "email"],
  ["contact_twitter", "twitter"],
  "genres"
];

module.exports = {
  artist: artist,
  band: band,
  backstage: backstage,
  venue: venue
};
