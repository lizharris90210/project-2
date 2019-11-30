// Validation
var gradient = require("gradient-string");
console.log(`${gradient.summer("/routes/htmlRoutes.js loaded\n")}=========================\n`);

require("dotenv");
var db = require("../models");
// NOT WORKING
var isAuthenticated = require("../config/middleware/isAuthenticated"); 
 
module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("homepage");
    }
    res.render("index");
  });

  app.get("/homepage", isAuthenticated, function(req, res) {
    //set by default to pull first entry from artist table
    res.render("homepage", {layout: "profiles.handlebars"});
  });

  // app.get("/homepage", function(req, res){
  //   res.render("homepage", {layout: "profiles.handlebars"});
  // });
  
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
