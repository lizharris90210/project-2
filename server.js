require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var session = require("express-session"); // Required for passport (username/pw authentication)
var db = require("./models");
var passport = require("./config/passport"); // Required for passport (username/pw authentication)

var PORT = process.env.PORT || 3000;
var syncOptions = { force: false };

// Middleware
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true})); //Required to keep track of our user's login status
app.use(passport.initialize());
app.use(passport.session());

// Handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
  })  
);
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
  // Separation of routing commands.  These requirements are necessary to ensure that any other changes made to the apiRoutes and htmlRoutes files does not mess up the modal connectivity to the database.
  require("./routes/modal-apiRoutes")(app);
  require("./routes/modal-htmlRoutes")(app);

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT, PORT);
    });
  });
module.exports = app;
