// require environment variables
require("dotenv");
// require models
var db = require("../models");
// require passport
// var passport = require("../config/passport");
var songify =  require("../api/songs");
var calls = require("../api/queries");
var gradient = require("gradient-string");


module.exports = function(app) {
  // This is just the default route Ive been using to build the page 3 template.
  // =============================================================================
  // API Artist Routing
  // =============================================================================
  app.get("/api/artist/profile/:id", function(req, res) {
    // setting the id
    const id = req.params.id;
    // sequelize call
    db.artists
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
            //  console.log("adsfadfadfadfad",gradient.summer(data));
             res.render("artists", data);
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
             res.render("venues", data);
           });
       
      });
  });

  app.get("/api/homepage", function(req, res) {

    // sequelize call
    db.community
      .findAll({
    
   include: [
          {model:db.bands, attributes: calls.band},
          {model:db.backstages, attributes: calls.backstage},
          {model:db.venues, attributes: calls.venue}
   ]      
  })
      .then(data => {
        console.log(data);
             res.render("homepage", data);
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
