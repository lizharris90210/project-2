// require environment variables
require("dotenv");
// require models
var db = require("../models");
// require passport
var passport = require("../config/passport");
var songify =  require("../api/songs");
var calls = require("../api/queries");
var gradient = require("gradient-string");


module.exports = function(app) {
  // ========================================================
  //  BEGIN API Routing Info from Authentication Boilerplate
  // ========================================================
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
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
        id: req.user.id
      });
    }
  });
  // ======================================================
  //  END API Routing Info from Authentication Boilerplate
  // ======================================================

  // This is just the default route Ive been using to build the page 3 template.
  // =============================================================================
  // API Artist Routing
  // =============================================================================
  app.get("/api/artist/profile/:id", function(req, res) {
    // setting the id
    const id = req.params.id;
    // sequelize call
    db.artist
      .findOne({
        where: {
          id: id
        },
        // queries are stored in queries.js
         attributes: calls.artist
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
        songify.spotifySucks(results,function(results) {
             var data = results;
             console.log(gradient.summer(data));
             res.render("artist", data);
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
         attributes: calls.band
      })
      .then(data => {
        let results = data.dataValues;
        //combine city and state for one location variable
        results.location = `${results.city}, ${results.state}`;
        //converting to arrays for handlebars 
        console.log(gradient.summer(results.past_bands));
        results.past_bands = results.pastband_names.split(",");
        results.members = results.members.split(",");
        results.genres = results.genres.split(",");
        // call the spotify api with a call back function to render the page
        songify.spotifySucks(results,function(results) {
             var data = results;
             console.log(gradient.summer(data));
             res.render("bands", data);
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
         attributes: calls.backstage
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
        songify.spotifySucks(results,function(results) {
             var data = results;
             console.log(gradient.summer(data));
             res.render("backstage", data);
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
         attributes: calls.venue
      })
      .then(data => {
        let results = data.dataValues;
        //combine city and state for one location variable
        results.location = `${results.city}, ${results.state}`;
        //converting to arrays for handlebars 
        results.genres = results.genres.split(",");
        // call the spotify api with a call back function to render the page
        songify.spotifySucks(results,function(results) {
             var data = results;
             console.log(gradient.summer(data));
             res.render("venue", data);
           });
       
      });
  });
  
  

  // ===========================================================================
  // END API Routing
  // ===========================================================================
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });
};
