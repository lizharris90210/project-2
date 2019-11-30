// Validation
const gradient = require("gradient-string");
console.log(`${gradient.summer("/config/middleware/isAuthenticated.js loaded")}\n${gradient.morning(" A special thanks to Patrick is in order for helping me to get this working!!!")}\n=========================`);

// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
    // If the user is logged in, continue with the request to the restricted route
    if (req.user) {
      return next();
    }
  
    // If the user isn't logged in, redirect them to the login page
    return res.redirect("/");
  };
  