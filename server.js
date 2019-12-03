require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session"); // Required for passport (username/pw authentication)
var gradient = require("gradient-string");

var passport = require("./migrations/passport"); // Required for passport (username/pw authentication)

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
app.engine("handlebars", exphbs({defaultLayout: "profiles"}));
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
    console.log(gradient.vice(`\n==> 🌎  Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`));
  });
});

module.exports = app;
