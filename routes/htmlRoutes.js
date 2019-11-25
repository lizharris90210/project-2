require("dotenv");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {
  
  // =========================================================
  //  BEGIN HTML Routing Info from Authentication Boilerplate
  // =========================================================

  // Loads Homepage (index.handlebars)
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("profile");
    }
    res.render("index");
  });
  //
  // Because we are using modals for the login and sign up, we do not need this.
  //
  // app.get("/login", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/login.html"));
  // });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/members", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/members.html"));
  // });

  // =======================================================
  //  END HTML Routing Info from Authentication Boilerplate
  // =======================================================

  // ===========================================================================
  // homepage test for artist page
  // ===========================================================================
  app.get("/homepage", function (req, res) {
    //set by default to pull first entry from artist table
    console.log(res.body);
    res.render("homepage");
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
