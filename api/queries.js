// Custom sequelize queries
var artist = [
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
var band = [
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
var backstage = [
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
var venue = [
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
