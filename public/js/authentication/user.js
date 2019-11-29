console.log("/js/authentication/user.js\nThis file is what allows the site to know who is logged in and put their name on the homepage");

$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.name);
    console.log(`data: ${data}`);
    console.log(`data.firstname: ${data.firstname}`);
    console.log(`data.name: ${data.name}`);
  });
});