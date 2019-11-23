const db = require("../models");
var webSearch =  require("../api/videos.js");
require("dotenv");


module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });
  app.get("/homepage", function (req, res) {
    db.artist.findOne({
      where: {
        id:3
      }
    }).then((data) => {
      
      function datapoint ({artist_name, artist_pic, location_city, location_state, contact_email, contact_instagram, contact_twitter, current_band, instruments, past_bands, genres}) {
        var location = `${location_city}, ${location_state}`;
        const artist = {
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

        webSearch.videoSearch(artist.genres, function (results) {
          var data = results;
          console.log(data);
          res.render("homepage", artist);
        });
        }

        datapoint(data);


    });
  });

  app.get("/", function (req, res) {
    res.render("index");
  });

  // Load the profile page
  app.get("/profile", function(req, res){
    res.render("profile");
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
