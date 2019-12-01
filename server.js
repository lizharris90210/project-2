// VALIDATION
const gradient = require("gradient-string");
console.log("=========================");
console.log(gradient.summer("/server.js loaded"));
console.log(" This file is what launches the app\n741Packages:\n - dotenv\n - express\n - express-handlebars\n - express-session\n - gradient-string ./models\n - ./config/passport");
console.log("\n=========================\n");

require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session"); // Required for passport (username/pw authentication)

var passport = require("./config/passport"); // Required for passport (username/pw authentication)

var PORT = process.env.PORT || 3000;
var db = require("./models");

var syncOptions = { force: false };

// Middleware
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true })); //Required to keep track of our user's login status
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync({ syncOptions }).then(function() {
  app.listen(PORT, function() {
    console.log(gradient.vice("\n==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",PORT,PORT));
  });
});

module.exports = app;
