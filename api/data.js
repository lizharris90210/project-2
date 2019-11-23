var webSearch =  require("./videos.js");
var DataPoint = {
  callback: function (results, res) {
    var data = results;
          console.log("from datajs", data);
          res.render("homepage", data);
  },
  artist: function ({artist_name, artist_pic, location_city, location_state, contact_email, contact_instagram, contact_twitter, current_band, instruments, past_bands, genres}, cb) {
    var location = `${location_city}, ${location_state}`;
    const artistOBJ = {
      name: artist_name,
      pic: artist_pic,
      location: location,
      email: contact_email,
      twitter: contact_twitter,
      instagram: contact_instagram,
      band: current_band,
      instruments: instruments.split(","),
      past_bands: past_bands.split(","),
      genres: genres.split(",")
    };
    webSearch.videoSearch(artistOBJ, cb);
  },
  band: function ({band_name, band_pic, location_city, location_state, contact_email, contact_instagram, contact_twitter, pastband_names, artist_names, genres}) {
    var location = `${location_city}, ${location_state}`;
    const bandOBJ = {
      name: band_name,
      pic: band_pic,
      location: location,
      email: contact_email,
      twitter: contact_twitter,
      instagram: contact_instagram,
      pastband_names: pastband_names.split(","),
      members: artist_names.split(","),
      genres: genres.split(",")
    };
    return bandOBJ;
  },
  backstage: function ({backstage_name, backstage_pic, location_city, location_state, contact_email, contact_instagram, contact_twitter, equipment, experience, genres}) {
    var location = `${location_city}, ${location_state}`;
    const backstageOBJ = {
      name: backstage_name,
      pic: backstage_pic,
      location: location,
      email: contact_email,
      instagram: contact_instagram,
      twitter: contact_twitter,
      equipment: equipment.split(","),
      experience: experience.split(","),
      genres: genres.split(",")
    };
    return backstageOBJ;
  },
  venue: function ({venue_name, venue_pic, location_city, location_state, contact_email, contact_instagram, contact_twitter, genres}) {
    var location = `${location_city}, ${location_state}`;
    const venueOBJ = {
      name: venue_name,
      pic: venue_pic,
      location: location,
      email: contact_email,
      twitter: contact_twitter,
      instagram: contact_instagram,
      genres: genres.split(",")
    };
    return venueOBJ;
  }
};

module.exports = DataPoint;