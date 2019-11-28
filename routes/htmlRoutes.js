require("dotenv");
const db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.render("profile");
    }
    res.render("index");
  });
  // ===========================================================================
  // homepage test for artist page
  // ===========================================================================
  app.get("/homepage", function(req, res) {
    //set by default to pull first entry from artist table
    console.log(res.body);
    res.render("homepage");
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
    res.render("404");
  });
};
