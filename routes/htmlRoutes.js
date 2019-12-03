require("dotenv");
var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated"); 
 
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index", {layout: "main.handlebars"});
  });

  // <><><><> Route for Testing Purposes <><><><>
  app.get("/test", function(req, res){
    res.render("test", {layout:"test.handlebars"});
  });
  // <><><><> Not public facing <><><><>

  // ====== What are these? ======
  app.get("/artist", function(req, res){
    res.render("profiles/artists");
  });
  app.get("/backstage", function(req, res){
    res.render("profiles/backstage");
  });

  app.get("/band", function(req, res){
    res.render("profiles/bands.handlebars");
  });

  app.get("/venues", function(req, res){
    res.render("profiles/venues.handlebars");
  });
  // ============================

  app.get("/settings", isAuthenticated, function(req, res){
    res.render("settings");
  });

  app.get("/signedup", isAuthenticated, function(req, res){
    res.render("homepage", {layout: "firsttime.handlebars"});
  });

  app.get("/login", isAuthenticated, function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("homepage");
    }
    res.render("index", {layout: "main.handlebars"} );
  });

  app.get("/homepage", isAuthenticated, function(req, res) {
    //set by default to pull first entry from artist table
    res.render("homepage");
  });
  
  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
    });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404", {layout: "404layout.handlebars"});
  });
};
