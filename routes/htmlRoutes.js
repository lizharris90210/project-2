const db = require("../models");
var DP = require("../api/data.js");
require("dotenv");


module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index");
  });


  app.get("/homepage", function (req, res) {
    db.artist.findOne({
      where: {
        id:1
      }
    }).then((data) => {
      
     DP.artist(data, function (results) {
      var data = results;
      console.log(data);
      res.render("homepage", data);
    });

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
