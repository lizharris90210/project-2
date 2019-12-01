require("dotenv"); // require environment variables
var db = require("../models");// require models
var passport = require("../config/passport"); // require passport

var songify = require("../api/songs"); // require spotify api
var query = require("../api/queries"); // require queries.js

module.exports = function(app) {
  // ========================================================
  //  BEGIN API Routing Info from Authentication Boilerplate
  // ========================================================
  // Using the passport.authenticate middleware with our local strategy. If the user has valid login credentials, send them to the members page.  Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });
  
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in, otherwise send back an error
  app.post("/api/signup", function(req, res) {
  db.User.create({
      email: req.body.email,
      password: req.body.password,
      firstname: req.body.name
  })
      .then(function() {
      res.redirect(307, "/api/login");
      })
      .catch(function(err) {
      res.status(401).json(err);
      });
  });
  
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
        name: req.user.firstname
      });
    }
  });

  app.get("/api/artist/profile/:id", function(req, res) {
    const id = req.params.id; // setting the id
    db.artists
      .findOne({
        where: {
          id: id
        },
        // queries are stored in queries.js
        attributes: query.artist
      })
      .then(data => {
        let results = data.dataValues;
        //combine city and state for one location variable
        results.location = `${results.city}, ${results.state}`;
        //converting to arrays for handlebars
        results.instruments = results.instruments.split(",");
        results.past_bands = results.past_bands.split(",");
        results.genres = results.genres.split(",");
        // call the spotify api with a call back function to render the page
        songify.spotifySucks(results, function(results) {
          res.render("profiles/artists", {layout: "profiles", results});
        });
      });
  });

  app.get("/api/band/profile/:id", function(req, res) {
    // setting the id
    const id = req.params.id;
    // sequelize call
    db.bands
      .findOne({
        where: {
          id: id
        },
        // queries are stored in queries.js
        attributes: query.band
      })
      .then(data => {
        let results = data.dataValues;
        //combine city and state for one location variable
        results.location = `${results.city}, ${results.state}`;
        //converting to arrays for handlebars
        results.past_bands = results.pastband_names.split(",");
        results.members = results.members.split(",");
        results.genres = results.genres.split(",");
        // call the spotify api with a call back function to render the page
        songify.spotifySucks(results, function(results) {
          res.render("profiles/bands", {layout: "profiles", results});
        });
      });
  });

  app.get("/api/backstage/profile/:id", function(req, res) {
    // setting the id
    const id = req.params.id;
    // sequelize call
    db.backstages
      .findOne({
        where: {
          id: id
        },
        // queries are stored in queries.js
        attributes: query.backstage
      })
      .then(data => {
        let results = data.dataValues;
        //combine city and state for one location variable
        results.location = `${results.city}, ${results.state}`;
        //converting to arrays for handlebars
        results.experience = results.experience.split(",");
        results.equipment = results.equipment.split(",");
        results.genres = results.genres.split(",");
        // call the spotify api with a call back function to render the page
        songify.spotifySucks(results, function(results) {
          res.render("profiles/backstage", {layout: "profiles", results});
        });
      });
  });

  app.get("/api/venue/profile/:id", function(req, res) {
    // setting the id
    const id = req.params.id;
    // sequelize call
    db.venues
      .findOne({
        where: {
          id: id
        },
        // queries are stored in queries.js
        attributes: query.venue
      })
      .then(data => {
        let results = data.dataValues;
        //combine city and state for one location variable
        results.location = `${results.city}, ${results.state}`;
        //converting to arrays for handlebars
        results.genres = results.genres.split(",");
        // call the spotify api with a call back function to render the page
        songify.spotifySucks(results, function(results) {
          res.render("profiles/venues", {layout: "profiles", results} );
        });
      });
  });
};
